#!/usr/bin/env node
// Deliberately limited Markdown schema; no runtime dependencies or HTML renderer.
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

export const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
export const OUTPUT = 'TB-3_Interaktiver_Frontpanel_Guide_v1.7_Multilingual.html';
export const LANGUAGES = ['de', 'en', 'fr'];
const UI_FIELDS = ['title','sub','search','quick','stepsHeading','visualHeading','legendHold',
  'legendClick','source','empty','front','rear','noGraphic','footer','language','holdMatch'];
const LIST_FIELDS = new Set(['quick','steps','notes','visuals','search']);
const REQUIRED_ENTRY_FIELDS = ['title','mode','summary','steps'];
const OPTIONAL_LIST_FIELDS = ['notes','visuals','search'];
const OPTIONAL_HEADINGS = ['stepHeading','visualHeading'];
const fail = message => { throw new Error(message); };
const sameKeys = (actual, expected, context) => {
  const missing = expected.filter(k => !actual.includes(k));
  const extra = actual.filter(k => !expected.includes(k));
  if (missing.length || extra.length) fail(`${context}: missing [${missing.join(', ')}]; unexpected [${extra.join(', ')}].`);
};

export function parseMarkdown(text, filename) {
  const sections = Object.create(null);
  let section, field, heading = false;
  for (const [index, line] of text.replace(/\r\n/g, '\n').split('\n').entries()) {
    const where = `${filename}:${index + 1}`;
    if (/^# [^#]/.test(line)) {
      if (heading || section) fail(`${where}: unexpected document heading.`);
      heading = true; continue;
    }
    if (line.startsWith('## ')) {
      section = line.slice(3); field = section === 'language' ? 'value' : undefined;
      if (Object.hasOwn(sections, section)) fail(`${where}: duplicate ID/section "${section}".`);
      sections[section] = Object.create(null);
      if (field) sections[section][field] = [];
      continue;
    }
    if (line.startsWith('### ')) {
      if (!section || section === 'language') fail(`${where}: field outside entry.`);
      field = line.slice(4);
      if (Object.hasOwn(sections[section], field)) fail(`${where}: duplicate field "${field}" in "${section}".`);
      sections[section][field] = []; continue;
    }
    if (!line.trim()) continue;
    if (!section || !field) fail(`${where}: text outside a field.`);
    if (/^#{1,6}\s/.test(line)) fail(`${where}: unsupported heading.`);
    sections[section][field].push(line);
  }
  if (!heading) fail(`${filename}: missing document heading.`);
  for (const [id, fields] of Object.entries(sections)) for (const [key, lines] of Object.entries(fields)) {
    // Categories are scalar even if their technical keys happen to match a list field.
    if ((id === 'ui' && key === 'quick') || (!['ui','categories','language'].includes(id) && LIST_FIELDS.has(key))) {
      if (key === 'search' && lines.length && lines.every(line => !line.startsWith('- '))) {
        fields[key] = [lines.join(' ')];
        continue;
      }
      fields[key] = lines.map((line, i) => {
        const match = line.match(key === 'steps' ? /^(\d+)\. (.+)$/ : /^- (.+)$/);
        if (!match || (key === 'steps' && Number(match[1]) !== i + 1))
          fail(`${filename}, ${id}.${key}: expected ${key === 'steps' ? 'consecutive numbered' : 'bullet'} list at item ${i + 1}.`);
        return match[key === 'steps' ? 2 : 1];
      });
    } else {
      fields[key] = lines.join(' ');
      if (!fields[key].trim() && !(!['ui','categories','language'].includes(id) && OPTIONAL_HEADINGS.includes(key)))
        fail(`${filename}, ${id}.${key}: required text is empty.`);
    }
  }
  return sections;
}

export function validate(documents, structure) {
  if (JSON.stringify(structure.languages) !== JSON.stringify(LANGUAGES)) fail('structure.json: supported language codes/order must be de, en, fr.');
  sameKeys(Object.keys(documents), LANGUAGES, 'Language files');
  const ids = structure.operations.map(o => o.id);
  if (new Set(ids).size !== ids.length) fail('structure.json: duplicate operation IDs.');
  for (const lang of LANGUAGES) sameKeys(Object.keys(documents[lang]), ['language','ui','categories',...ids], `${lang}.md`);
  for (const op of structure.operations) {
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(op.id)) fail(`Invalid operation ID "${op.id}".`);
    if (!structure.categories.includes(op.cat)) fail(`${op.id}: unknown category "${op.cat}".`);
    if (!op.source || !Array.isArray(op.controls) || !op.controls.length || !Array.isArray(op.visuals)) fail(`${op.id}: invalid technical structure.`);
    if (op.headings.some(k => !['stepHeading','visualHeading'].includes(k))) fail(`${op.id}: unknown heading field.`);
    for (const control of op.controls) if (control !== null && !Object.hasOwn(structure.controls, control)) fail(`${op.id}: unknown control "${control}".`);
    for (const key of op.visuals) if (!Object.hasOwn(structure.assets, key)) fail(`${op.id}: unknown image "${key}".`);
  }
  for (const id of structure.quick) if (!ids.includes(id)) fail(`Unknown quick navigation ID "${id}".`);
  // Normalize omitted optional lists before comparing translations. Headings
  // may stay absent: the existing renderer already falls back to the UI label.
  for (const lang of LANGUAGES) for (const op of structure.operations)
    for (const field of OPTIONAL_LIST_FIELDS) documents[lang][op.id][field] ??= [];
  for (const lang of LANGUAGES) {
    const doc = documents[lang], name = `${lang}.md`;
    sameKeys(Object.keys(doc), ['language','ui','categories',...ids], name);
    sameKeys(Object.keys(doc.language), ['value'], `${name}: language`);
    if (doc.language.value !== lang) fail(`${name}: invalid language code "${doc.language.value}"; expected "${lang}".`);
    sameKeys(Object.keys(doc.ui), UI_FIELDS, `${name}: ui`);
    if (doc.ui.quick.length !== structure.quick.length) fail(`${name}: ui.quick must contain ${structure.quick.length} labels.`);
    if (doc.ui.legendHold.split(' = ').length !== 2) fail(`${name}: legendHold requires "[Button] = description".`);
    sameKeys(Object.keys(doc.categories), structure.categories, `${name}: categories`);
    for (const op of structure.operations) {
      const entry = doc[op.id], context = `${name}: entry "${op.id}"`;
      sameKeys(Object.keys(entry), [...REQUIRED_ENTRY_FIELDS,...OPTIONAL_LIST_FIELDS,
        ...op.headings.filter(field => Object.hasOwn(entry, field))], context);
      if (entry.steps.length !== op.controls.length) fail(`${context}: steps has ${entry.steps.length} items, expected ${op.controls.length}.`);
      if (entry.visuals.length && entry.visuals.length !== op.visuals.length) fail(`${context}: visuals has ${entry.visuals.length} items, expected ${op.visuals.length}.`);
      if (entry.visuals.length !== documents.de[op.id].visuals.length) fail(`${context}: visuals count differs from de.md (${documents.de[op.id].visuals.length}).`);
      if (entry.notes.length !== documents.de[op.id].notes.length) fail(`${context}: notes count differs from de.md (${documents.de[op.id].notes.length}).`);
      for (const field of op.headings) if (Boolean(entry[field]) !== Boolean(documents.de[op.id][field]))
        fail(`${context}: optional heading ${field} differs in presence from de.md.`);
    }
  }
}

const js = value => JSON.stringify(value).replace(/</g, '\\u003c').replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029');
const escapeHTML = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

export function generate(root = ROOT) {
  const src = path.join(root, 'tools/frontpanel-guide');
  const languageFiles = fs.readdirSync(path.join(root, 'docs/frontpanel-guide'))
    .filter(name => name.endsWith('.md') && name !== 'README.md');
  sameKeys(languageFiles, LANGUAGES.map(lang => `${lang}.md`), 'Markdown language files');
  const structure = JSON.parse(fs.readFileSync(path.join(src, 'structure.json'), 'utf8'));
  const documents = Object.fromEntries(LANGUAGES.map(lang => [lang,
    parseMarkdown(fs.readFileSync(path.join(root, `docs/frontpanel-guide/${lang}.md`),'utf8'), `${lang}.md`)]));
  validate(documents, structure);
  const content = {}, ui = {}, categories = {};
  for (const lang of LANGUAGES) {
    content[lang] = Object.fromEntries(structure.operations.map(op => [op.id, documents[lang][op.id]]));
    ui[lang] = {...documents[lang].ui, source: documents[lang].ui.source + ' '};
    categories[lang] = documents[lang].categories;
  }
  const assets = Object.fromEntries(Object.entries(structure.assets).map(([key, file]) => {
    const asset = path.resolve(src, file);
    if (!asset.startsWith(path.resolve(src, 'assets') + path.sep) || !/\.(png|webp|jpeg|jpg)$/.test(file)) fail(`Invalid asset path "${file}".`);
    const mime = path.extname(file).slice(1).replace('jpg', 'jpeg');
    return [key, `data:image/${mime};base64,${fs.readFileSync(asset).toString('base64')}`];
  }));
  const data = {PANEL_DIMS:structure.panelDims, FRONT:assets.front, REAR:assets.rear,
    VIDEO_VISUALS:Object.fromEntries(Object.entries(assets).filter(([k]) => !['front','rear'].includes(k))),
    CONTROLS:structure.controls, HARDWARE_HIGHLIGHTS:structure.hardwareHighlights,
    OPS:structure.operations, CONTENT:content, CAT_I18N:categories, UI_I18N:ui, CATS:structure.categories};
  const css = fs.readFileSync(path.join(src,'styles.css'),'utf8');
  const logic = fs.readFileSync(path.join(src,'guide.js'),'utf8');
  const values = {...ui.de, legendButton:ui.de.legendHold.split(' = ')[0], legendDescription:ui.de.legendHold.split(' = ')[1]};
  let template = fs.readFileSync(path.join(src,'template.html'),'utf8');
  template = template.replace(/\{\{([^}]+)\}\}/g, (_, key) => {
    if (key === 'CSS') return css;
    if (key === 'DATA') return Object.entries(data).map(([k,v]) => `const ${k}=${js(v)};`).join('\n');
    if (key === 'LOGIC') return logic;
    const value = key.startsWith('quick.') ? values.quick[Number(key.slice(6))] : values[key];
    if (value === undefined) fail(`Unknown template placeholder "${key}".`);
    return escapeHTML(value);
  });
  return template;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    const args = process.argv.slice(2);
    if (args.some(a => a !== '--check')) fail('Usage: node tools/build_frontpanel_guide.mjs [--check]');
    const result = generate(), output = path.join(ROOT, OUTPUT);
    if (args.includes('--check')) {
      if (fs.readFileSync(output,'utf8') !== result) fail(`${OUTPUT} is stale. Run the build and commit the generated HTML.`);
      console.log('OK: Markdown valid; standalone HTML is up to date.');
    } else {
      // Only write after every input has passed validation.
      fs.writeFileSync(output, result, 'utf8');
      console.log(`Generated ${OUTPUT} (DE/EN/FR).`);
    }
  } catch (error) {
    console.error(`ERROR: ${error.message}`); process.exitCode = 1;
  }
}
