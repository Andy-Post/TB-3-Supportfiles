import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import vm from 'node:vm';
import {ROOT, OUTPUT, LANGUAGES, parseMarkdown, validate, generate} from './build_frontpanel_guide.mjs';

const structure = JSON.parse(fs.readFileSync(path.join(ROOT,'tools/frontpanel-guide/structure.json'),'utf8'));
const texts = Object.fromEntries(LANGUAGES.map(lang => [lang, fs.readFileSync(path.join(ROOT,`docs/frontpanel-guide/${lang}.md`),'utf8')]));
const docs = () => Object.fromEntries(LANGUAGES.map(lang => [lang, parseMarkdown(texts[lang], `${lang}.md`)]));
const invalid = (name, mutate, expected) => test(name, () => {
  const d = docs(); mutate(d); assert.throws(() => validate(d, structure), expected);
});

test('all language sources validate and generated output is reproducible', () => {
  validate(docs(), structure);
  assert.equal(generate(), fs.readFileSync(path.join(ROOT,OUTPUT),'utf8'));
  assert.equal(generate(), generate());
});
for (const lang of LANGUAGES) invalid(`missing entry in ${lang}`, d => delete d[lang]['copy-pattern'], /copy-pattern/);
invalid('missing required title', d => delete d.en['copy-pattern'].title, /missing \[title\]/);
invalid('missing UI translation', d => delete d.fr.ui.empty, /missing \[empty\]/);
invalid('missing category translation', d => delete d.fr.categories.Navigation, /Navigation/);
invalid('unknown field', d => d.de['copy-pattern'].typo = 'text', /unexpected \[typo\]/);
invalid('step count mismatch', d => d.fr['copy-pattern'].steps.pop(), /steps.*expected 5/);
invalid('note count mismatch', d => d.en['save-sound'].notes.pop(), /notes count/);
invalid('image caption count mismatch', d => d.en['editor-setup'].visuals.pop(), /visuals.*expected 4/);
invalid('invalid language code', d => d.fr.language.value = 'es', /invalid language code/);
invalid('unknown language file', d => d.es = d.de, /unexpected \[es\]/);
test('entries with only required fields validate and receive empty list defaults', () => {
  const d = docs();
  for (const lang of LANGUAGES) for (const entry of structure.operations) {
    for (const field of ['notes','visuals','search','stepHeading','visualHeading']) delete d[lang][entry.id][field];
  }
  validate(d,structure);
  for (const lang of LANGUAGES) {
    assert.deepEqual(d[lang]['editor-setup'].notes,[]);
    assert.deepEqual(d[lang]['editor-setup'].visuals,[]);
    assert.deepEqual(d[lang]['editor-setup'].search,[]);
    assert.equal(d[lang]['editor-setup'].stepHeading,undefined);
  }
});
test('omitted and explicitly empty optional fields are equivalent', () => {
  const d = docs();
  d.en['link-sound'] = parseMarkdown('# Guide\n\n## link-sound\n\n### title\nTitle\n### mode\nMode\n### summary\nSummary\n### steps\n1. One\n2. Two\n3. Three\n4. Four\n### notes\n### visuals\n### search\n','en.md')['link-sound'];
  validate(d,structure);
  assert.deepEqual(d.en['link-sound'].notes,d.de['link-sound'].notes);
});
invalid('omitted nonempty notes in just one translation rejected', d => delete d.en['save-sound'].notes, /notes count/);
invalid('omitted nonempty captions in just one translation rejected', d => delete d.fr['editor-setup'].visuals, /visuals count/);
invalid('omitted custom heading in just one translation rejected', d => delete d.en['editor-setup'].stepHeading, /optional heading stepHeading/);
test('empty optional headings use the same default as omitted headings', () => {
  const d = docs();
  for (const lang of LANGUAGES) {
    delete d[lang]['editor-setup'].stepHeading;
    delete d[lang]['editor-setup'].visualHeading;
  }
  d.en['editor-setup'].stepHeading = parseMarkdown('# Guide\n## entry\n### stepHeading\n','en.md').entry.stepHeading;
  validate(d,structure);
  assert.equal(d.en['editor-setup'].stepHeading,'');
});
test('extra search terms accept plain text or bullets and need no matching count', () => {
  const plain = parseMarkdown('# Guide\n## entry\n### search\nKopieren, Duplizieren, Duplicate\n','de.md');
  const bullets = parseMarkdown('# Guide\n## entry\n### search\n- Kopieren\n- Duplicate\n','en.md');
  const d = docs();
  d.de['copy-pattern'].search = plain.entry.search;
  d.en['copy-pattern'].search = bullets.entry.search;
  validate(d,structure);
  assert.deepEqual(plain.entry.search,['Kopieren, Duplizieren, Duplicate']);
  assert.deepEqual(bullets.entry.search,['Kopieren','Duplicate']);
});
for (const field of ['mode','summary','steps']) invalid(`missing required ${field}`, d => delete d.en['copy-pattern'][field], new RegExp(`missing \\[${field}\\]`));
test('duplicate IDs rejected with file and line', () => assert.throws(() => parseMarkdown(texts.de + '\n## copy-pattern\n','de.md'), /de.md:\d+: duplicate/));
test('duplicate fields rejected', () => assert.throws(() => parseMarkdown(texts.de.replace('### mode','### title'),'de.md'), /duplicate field/));
test('empty required field rejected', () => assert.throws(() => parseMarkdown(texts.de.replace('Sound-Patch speichern',''),'de.md'), /title: required text is empty/));
test('numbering errors rejected', () => assert.throws(() => parseMarkdown(texts.de.replace('2. Mit VALUE','4. Mit VALUE'),'de.md'), /consecutive numbered/));
test('technical duplicate IDs rejected', () => {
  const s = structuredClone(structure); s.operations.push(s.operations[0]);
  assert.throws(() => validate(docs(),s), /duplicate operation IDs/);
});
test('unknown hardware references rejected', () => {
  const s = structuredClone(structure); s.operations[0].controls[0] = 'UNKNOWN';
  assert.throws(() => validate(docs(),s), /unknown control/);
});
test('editorial text cannot terminate embedded script', () => {
  // Exercise the real generator in an isolated temporary fixture.
  const fixture = fs.mkdtempSync(path.join(ROOT,'.frontpanel-test-'));
  try {
    fs.cpSync(path.join(ROOT,'tools/frontpanel-guide'),path.join(fixture,'tools/frontpanel-guide'),{recursive:true});
    fs.cpSync(path.join(ROOT,'docs/frontpanel-guide'),path.join(fixture,'docs/frontpanel-guide'),{recursive:true});
    const file = path.join(fixture,'docs/frontpanel-guide/de.md');
    fs.writeFileSync(file,texts.de.replace('Sound-Patch speichern','</script><script>alert("test")</script>'));
    const html = generate(fixture);
    assert.equal((html.match(/<script>/g)||[]).length,1);
    const script = html.match(/<script>\n([\s\S]*?)<\/script>/)[1];
    assert.doesNotThrow(() => new vm.Script(script));
    fs.writeFileSync(path.join(fixture,'docs/frontpanel-guide/es.md'),texts.de);
    assert.throws(() => generate(fixture), /unexpected \[es.md\]/);
  } finally { fs.rmSync(fixture,{recursive:true,force:true}); }
});
test('build embeds CSS, logic and media without runtime file reads', () => {
  const html = generate();
  assert.ok(!/\{\{(?:CSS|DATA|LOGIC)\}\}|\bfetch\s*\(|<script[^>]+src=|<link[^>]+stylesheet/.test(html));
  assert.equal((html.match(/data:image\//g)||[]).length,23);
});
