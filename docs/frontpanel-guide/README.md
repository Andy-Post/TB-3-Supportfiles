# Frontpanel Guide pflegen

## Inhalte ändern

Die editierbaren Quellen sind `de.md`, `en.md` und `fr.md` in diesem Ordner.
Sie enthalten die Bedienhinweise und separat die UI-Texte (`ui`) und
Kategorieübersetzungen (`categories`). Eine normale Textänderung erfordert
keine Änderung an JavaScript oder HTML: Texte in den drei Dateien bearbeiten,
Build ausführen und die Quellen zusammen mit der erzeugten HTML committen.

Das bewusst kleine Markdown-Schema verwendet:

- `# …`: lesbare Dokumentüberschrift.
- `## language`: Sprachcode `de`, `en` oder `fr` passend zum Dateinamen.
- `## ui` und `## categories`: gemeinsame Feld-Keys, übersetzte Werte.
- `## copy-pattern` usw.: stabile Vorgangs-ID, auch für URL-Hashes.
- `### title`, `mode`, `summary`: nicht leere Pflichttexte eines Vorgangs.
- `### stepHeading`, `visualHeading`: optionale individuelle Überschriften, nur wenn
  für diesen Vorgang in der technischen Struktur vorgesehen.
- `### steps`: Pflichtfeld, fortlaufend nummerierte Liste ab 1.
- `### notes`: optionale Hinweise einschließlich Warnungen als `-`-Liste.
- `### visuals`: optionale Bildunterschriften als `-`-Liste in der technischen Bildreihenfolge.
- `### search`: optionale zusätzliche Suchbegriffe als Text oder `-`-Liste.

Pro Vorgang sind nur `title`, `mode`, `summary` und `steps` Pflichtfelder.
`notes`, `visuals`, `search`, `stepHeading` und `visualHeading` dürfen mitsamt
ihrer Überschrift vollständig weggelassen werden. Fehlende Listen werden als
leer behandelt; fehlende oder leere individuelle Überschriften verwenden die
allgemeinen UI-Überschriften der gewählten Sprache. Explizit leere optionale
Blöcke sind ebenfalls gültig, aber nicht nötig. Dokumentüberschrift,
Sprachcode, UI-Texte und Kategorieübersetzungen bleiben erforderlich.

Die Suche indexiert automatisch `title`, `summary`, `steps` und `notes`,
zusätzlich weiterhin Quellenbezeichnung, Modus und vorhandene Bildunterschriften.
`search` dient ausschließlich zusätzlichen Synonymen oder Begriffen, die im
sichtbaren Text nicht vorkommen. Sichtbare Texte müssen dort nicht wiederholt
werden. Beispiel bei Bedarf:

```markdown
### search
Kopieren, Duplizieren, Duplicate
```

Beispiel eines vollständigen Eintrags ohne individuelle Überschriften:

```markdown
## new-operation

### title

Titel des Vorgangs

### mode

Keyboard Mode

### summary

Kurze Beschreibung.

### steps

1. KEYBOARD gedrückt halten.
2. Mit VALUE den Wert wählen.

### notes

- Ein Hinweis.

```

Jeder Listeneintrag steht auf einer Zeile. Skalare Texte dürfen auf mehrere
Zeilen umgebrochen werden; der Generator verbindet diese mit Leerzeichen.
Leerzeilen dienen der Lesbarkeit. Markdown dient als lesbares Inhaltsformat;
Inline-Auszeichnung, Links und HTML werden nicht als Formatierung interpretiert,
sondern als Text angezeigt. Dadurch bleibt die bisherige Textdarstellung erhalten.

## Neue Funktion hinzufügen

1. In `tools/frontpanel-guide/structure.json` unter `operations` eine stabile
   ID, bestehende Kategorie (`cat`), sprachunabhängige Quellenbezeichnung
   (`source`), `controls`, `visuals` und `headings` anlegen.
2. Den vollständigen Eintrag mit derselben ID in allen drei Sprachdateien anlegen.
3. Schritt- und Bildreihenfolge mit der technischen Struktur abstimmen, dann bauen.

Beispiel für die zugehörige technische Struktur:

```json
{
  "id": "new-operation",
  "cat": "Patches & Patterns",
  "source": "Original source label",
  "controls": ["KEYBOARD", "VALUE"],
  "visuals": [],
  "headings": []
}
```

Ein `controls`-Wert steht pro Schritt für das markierte Bedienelement;
`null` bedeutet ohne Gerätemarkierung. Bild-Keys stehen zentral unter `assets`.
Hardware-Beschriftungen und Koordinaten stehen einmal unter `controls`.
Hardware-Bezeichnungen wie `PLAY/STOP` oder `PTN SELECT` in Bedienhinweisen
werden unverändert geschrieben und nicht übersetzt. Die zentralen Beschriftungen
und die unveränderten Gerätebilder gelten für alle Sprachen.

## Übersetzungen

Alle Sprachen benötigen dieselben IDs und Pflichtfelder. Optionale individuelle
Überschriften werden entweder in allen Sprachen angegeben oder überall
weggelassen bzw. leer gelassen. Schritt-, Hinweis- und Bildunterschriftenanzahl
müssen nach Anwendung der leeren Defaults übereinstimmen. Enthält etwa DE
Hinweise, darf EN diese nicht allein weglassen: Das bleibt ein Übersetzungsfehler.
Bildunterschriften dürfen überall entfallen; werden sie angegeben, muss ihre
Anzahl zusätzlich zur zentralen Bildliste passen.
Die Zuordnung erfolgt innerhalb eines Vorgangs über die
Reihenfolge. Wird ein Schritt eingefügt oder verschoben, müssen die anderen
Sprachen und die zentrale `controls`-Liste entsprechend angepasst werden.
Zusätzliche Suchbegriffe dürfen je Sprache unterschiedlich zahlreich sein.

`ui.quick` folgt der zentralen `quick`-ID-Liste. `ui.legendHold` hat das Format
`[Taste] = Erklärung`. `ui.holdMatch` bezeichnet den bisherigen Text, der in
Schritten farblich hervorgehoben wird. `ui.source` enthält den Quellenpräfix
ohne abschließendes Leerzeichen; dieses ergänzt der Generator.

Die Validierung erkennt strukturell fehlende Übersetzungen, prüft aber keine
Übersetzungsqualität oder inhaltliche Gleichwertigkeit gleich langer Listen.

## Build

Voraussetzung: Node.js 18 oder neuer. Keine npm-Installation nötig.
Im Repository-Hauptverzeichnis ausführen:

```text
node tools/build_frontpanel_guide.mjs
```

Der Build ist deterministisch und unabhängig vom aktuellen Arbeitsverzeichnis.
Er liest Markdown, technische Struktur, Template, CSS, JavaScript und Bilder.
Alle Inhalte werden eingebettet; die Ausgabe braucht weder Server noch
Markdown-/CSS-/JS-/Bilddateien daneben und funktioniert per Doppelklick.

## Validierung

```text
node tools/build_frontpanel_guide.mjs --check
node --test tools/test_frontpanel_guide.mjs
```

Der Build bricht mit `ERROR` und Exitcode 1 ab bei fehlenden/zusätzlichen IDs,
doppelten IDs oder Feldern, fehlenden oder leeren Pflichttexten, unbekannten
Feldern, ungültigen Sprachcodes, abweichenden Listenlängen, falscher
Schrittnummerierung und unbekannten Kategorien, Control- oder Bild-Keys.
Bei Fehlern wird die bestehende Ausgabe nicht überschrieben.
`--check` prüft zusätzlich, ob die eingecheckte HTML dem aktuellen Build entspricht.

## Output und technische Dateien

Output bleibt `TB-3_Interaktiver_Frontpanel_Guide_v1.7_Multilingual.html` im
Repository-Hauptverzeichnis. Diese Datei ist ein generiertes Artefakt.

- `tools/build_frontpanel_guide.mjs`: Parser, Validierung und Einbettung.
- `tools/frontpanel-guide/template.html`: HTML-Präsentationsstruktur mit Platzhaltern.
- `tools/frontpanel-guide/styles.css`: unverändertes Original-CSS.
- `tools/frontpanel-guide/guide.js`: Interaktionslogik.
- `tools/frontpanel-guide/structure.json`: gemeinsame technische Daten und Quellenlabels.
- `tools/frontpanel-guide/assets/`: 23 Originalbilder; beim Build als Data-URLs eingebettet.
- `tools/test_frontpanel_guide.mjs`: strukturelle Tests ohne Zusatzpakete.
- `tools/test_frontpanel_browser.cjs`: optionaler Vergleich mit dem ursprünglichen Guide.

## Bestandsaufnahme und Regression

Ausgangs-HEAD: `f4551abbadb7f8276a82fda8a940b96ffd83f0ba`.
Das ursprüngliche Repository enthielt keine Build-Infrastruktur. Der Guide
enthielt 42 Vorgänge, 19 Controls, zwei Gerätebilder und 21 Videobilder.
DE-Texte lagen in `OPS`, EN/FR in `OP_I18N`; UI und Kategorien zusätzlich in
`UI_I18N` und `CAT_I18N`. Statische HTML enthielt nochmals deutsche UI-Texte.
Die Migration entfernt diese doppelte redaktionelle Pflege.

Unverändert bleiben URL-Priorität (`?lang=` vor gespeichertem Wert vor DE),
LocalStorage-Key `tb3-guide-lang`, Hash-Navigation, Schnellnavigation,
Suchfilter, Markierungen inklusive wiederholter Controls und Tastaturbedienung.
Die Warnfarberkennung anhand der bisherigen Hinweiswörter bleibt ebenfalls
unverändert. Es wird keine neue redaktionelle Einordnung als Warnung eingeführt.

Migration geprüft unter lokalem `file://` in Microsoft Edge/Chromium:

- Alle ursprünglichen Texte, Medien, Hardwaredaten und CSS exakt verglichen.
- Alle 42 Vorgänge in allen drei Sprachen: identischer gerenderter DOM.
- 13 Screenshot-Paare pixelidentisch: Sound speichern, Backup, Editor-Setup
  und Factory Reset in DE/EN/FR sowie mobile Ansicht in FR.
- Suche einschließlich Leerzustand, Sprachwechsel, URL-Parameter, Schnellnavigation,
  Schritt-Klick und Marker-Tastaturbedienung bestanden; keine Konsolenfehler.

Der optionale Browsertest benötigt ein separat verfügbares Playwright-Paket und
einen Browser. Diese sind keine Build- oder Laufzeitabhängigkeiten des Guides.
Aufruf mit einer unveränderten Baseline-HTML außerhalb des Repositorys:

```text
node tools/test_frontpanel_browser.cjs /absolute/path/to/original.html
```

Mit `PLAYWRIGHT_MODULE` kann ein vorhandener Paketpfad angegeben werden;
`FRONTPANEL_BROWSER_CHANNEL=msedge` wählt beispielsweise den installierten Edge.
Der Test schreibt Vergleichsbilder in einen temporären Ordner.

## Bestehende offene Punkte (nicht korrigiert)

- Quellen nennen U01–U15 gegenüber 16 Hardware-User-Slots.
- Frontpanel-Guide und Editor-Video nennen unterschiedliche Firmware-Prüfmethoden.
- Backup und Restore verwenden laut vorhandenem Guide dieselbe Startup-Tastenkombination.
- Warnfarben sind wortabhängig: beispielsweise wird auch „nicht-destruktiv“
  vom bisherigen Muster erfasst; die Farbzuordnung kann zwischen Sprachen abweichen.

Diese Angaben und ihre bestehenden Hinweise wurden unverändert übernommen.
Die Regression prüft Browserverhalten, keine realen Hardware-Bedienfolgen.
