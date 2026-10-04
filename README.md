# Roland TB-3 Support Files

[Deutsch](#deutsch) | [English](#english)

<a id="deutsch"></a>

## Deutsch

Sammlung von Dokumentationen, Hilfsdateien und aufbereiteten Anleitungen rund um die **Roland AIRA TB-3**.

Der Schwerpunkt liegt darauf, Informationen aus verschiedenen Quellen so zusammenzuführen, dass sie im praktischen Einsatz leichter auffindbar und verständlicher sind – insbesondere für Bedienung, versteckte Funktionen, Pattern-/Sound-Verwaltung sowie die Nutzung des TB-3 Editors am Rechner.

## Interaktiver Frontpanel- & Editor-Guide

Die zentrale nutzbare Dokumentation dieses Repositories ist:

```text
TB-3_Interaktiver_Frontpanel_Guide_v1.7_Multilingual.html
```

Der Guide ist eine **standalone HTML-Datei** und kann direkt im Browser geöffnet werden. Er enthält unter anderem:

- Deutsch (`DE`), Englisch (`EN`) und Französisch (`FR`)
- eine integrierte Suche
- dokumentierte Frontpanel-Funktionen
- dokumentierte Editor-Funktionen
- Hinweise zu bekannten Abweichungen zwischen den verwendeten Quellen

Die originalen Hardware-Beschriftungen der TB-3 bleiben dabei unverändert.

### Redaktionelle Quellen und generierte HTML-Datei

Die HTML-Datei ist die **fertige nutzbare Guide-Version** und wird **nicht direkt redaktionell bearbeitet**.

Die editierbaren redaktionellen Quellen befinden sich unter:

```text
docs/frontpanel-guide/
    de.md
    en.md
    fr.md
    README.md
```

Dabei gilt eindeutig:

- `de.md`, `en.md` und `fr.md` sind die **redaktionellen Arbeitsquellen**.
- `TB-3_Interaktiver_Frontpanel_Guide_v1.7_Multilingual.html` ist die daraus **generierte fertige standalone Version** für die Nutzung im Browser.
- Änderungen am Guide werden deshalb in den Markdown-Dateien vorgenommen und anschließend in die HTML-Datei gebaut.

### Build und Prüfung

Guide neu erzeugen:

```bash
node tools/build_frontpanel_guide.mjs
```

Prüfen, ob die Markdown-Quellen gültig sind und die generierte HTML-Datei dem aktuellen Stand entspricht:

```bash
node tools/build_frontpanel_guide.mjs --check
```

Die ausführliche Pflege- und Build-Anleitung befindet sich hier:

[docs/frontpanel-guide/README.md](docs/frontpanel-guide/README.md)

## Weitere Inhalte des Repositories

Zum Repository gehören unter anderem außerdem:

- **TB-3 Editor – Einrichtung und Nutzung**  
  Informationen zur Verbindung der TB-3 mit dem Rechner, zu Ctrlr und zur Nutzung des Dope-Robot-TB-3-Editors sind im interaktiven Frontpanel- & Editor-Guide zusammengeführt.

- **Video-Transkription**  
  Chronologisch aufbereitete Texte aus dem Video  
  *“TB-3 Sound & Pattern Editor – Edit your TB-3 and Backup/Restore Patches!”*

- **Video-Bilddokumentation**  
  PDF mit relevanten Einzelbildern aus dem Video und den jeweils eingeblendeten Texten.

## Wichtige Dateien

```text
TB-3_Interaktiver_Frontpanel_Guide_v1.7_Multilingual.html
TB-3_Editor_Video_Textchronologie.md
TB-3_Editor_Video_Bild_und_Text.pdf
tools/build_frontpanel_guide.mjs
docs/frontpanel-guide/de.md
docs/frontpanel-guide/en.md
docs/frontpanel-guide/fr.md
docs/frontpanel-guide/README.md
```

## Ziel des Projekts

Dieses Repository soll keine neue oder alternative offizielle Bedienungsanleitung darstellen.

Ziel ist vielmehr:

- verstreute Informationen zusammenzuführen,
- schwer auffindbare Funktionen nachvollziehbar zu dokumentieren,
- Bedienfolgen visuell aufzubereiten,
- Widersprüche zwischen Quellen sichtbar zu machen,
- praktische, getestete Vorgehensweisen festzuhalten.

Wo Quellen voneinander abweichen, sollen diese Unterschiede möglichst ausdrücklich dokumentiert und nicht stillschweigend „korrigiert“ werden.

## Quellen und Drittmaterial

Teile der Dokumentation basieren auf bzw. beziehen sich auf Materialien von Drittanbietern, insbesondere:

- Roland Corporation / Roland TB-3
- Roland TB-3 Front Panel Guide
- Dope Robot TB-3 Sound & Pattern Editor
- Ctrlr

Markennamen, Produktnamen, Screenshots, Abbildungen, Originaltexte und sonstige Materialien Dritter bleiben Eigentum ihrer jeweiligen Rechteinhaber.

Dieses Repository steht in keiner Verbindung zu Roland oder Dope Robot und wird von diesen nicht offiziell unterstützt oder herausgegeben.

## Lizenz

Für das Repository als Ganzes wurde **bewusst keine pauschale Open-Source-Lizenz vergeben**.

Der Grund ist, dass neben eigenen Aufbereitungen auch Inhalte, Abbildungen, Zitate und Referenzen aus Drittquellen enthalten sein können, für die unterschiedliche Rechte gelten.

Das Fehlen einer Lizenz bedeutet insbesondere nicht, dass sämtliche Inhalte frei kopiert, verändert oder weiterverbreitet werden dürfen.

Für einzelne Bestandteile kann später eine gesonderte Lizenz ausgewiesen werden.

## Hinweis

Die Inhalte wurden nach bestem Wissen aus den genannten Quellen aufbereitet und teilweise praktisch getestet. Trotzdem können Fehler oder Abweichungen zwischen Firmware-Versionen, Betriebssystemen, Treibern oder Editor-Versionen auftreten.

Bei Änderungen an Sounds, Patterns oder Geräteeinstellungen empfiehlt sich grundsätzlich ein Backup wichtiger Daten.

---

<a id="english"></a>

## English

A collection of documentation, support files, and prepared guides for the **Roland AIRA TB-3**.

The main goal is to bring information from different sources together in a form that is easier to find and understand in practical use — especially for operation, hidden functions, pattern and sound management, and using the TB-3 editor on a computer.

## Interactive Front Panel & Editor Guide

The central user-facing documentation in this repository is:

```text
TB-3_Interaktiver_Frontpanel_Guide_v1.7_Multilingual.html
```

The guide is a **standalone HTML file** that can be opened directly in a browser. It includes, among other things:

- German (`DE`), English (`EN`), and French (`FR`)
- integrated search
- documented front panel functions
- documented editor functions
- notes on known differences between the sources used

The original hardware labels of the TB-3 remain unchanged.

### Editorial Sources and Generated HTML

The HTML file is the **finished user-facing guide** and is **not edited directly as the editorial source**.

The editable editorial sources are located under:

```text
docs/frontpanel-guide/
    de.md
    en.md
    fr.md
    README.md
```

The distinction is:

- `de.md`, `en.md`, and `fr.md` are the **editorial working sources**.
- `TB-3_Interaktiver_Frontpanel_Guide_v1.7_Multilingual.html` is the **generated finished standalone version** for use in a browser.
- Changes to the guide are therefore made in the Markdown files and then built into the HTML file.

### Build and Check

Generate the guide:

```bash
node tools/build_frontpanel_guide.mjs
```

Check whether the Markdown sources are valid and whether the generated HTML file is up to date:

```bash
node tools/build_frontpanel_guide.mjs --check
```

The detailed maintenance and build instructions are located here:

[docs/frontpanel-guide/README.md](docs/frontpanel-guide/README.md)

## Other Repository Contents

The repository also includes, among other things:

- **TB-3 Editor – Setup and Usage**  
  Information on connecting the TB-3 to a computer, using Ctrlr, and working with the Dope Robot TB-3 editor is consolidated in the interactive Front Panel & Editor Guide.

- **Video Transcription**  
  Chronologically prepared text from the video  
  *“TB-3 Sound & Pattern Editor – Edit your TB-3 and Backup/Restore Patches!”*

- **Video Image Documentation**  
  PDF containing relevant still images from the video together with the text displayed in them.

## Important Files

```text
TB-3_Interaktiver_Frontpanel_Guide_v1.7_Multilingual.html
TB-3_Editor_Video_Textchronologie.md
TB-3_Editor_Video_Bild_und_Text.pdf
tools/build_frontpanel_guide.mjs
docs/frontpanel-guide/de.md
docs/frontpanel-guide/en.md
docs/frontpanel-guide/fr.md
docs/frontpanel-guide/README.md
```

## Project Goal

This repository is not intended to provide a new or alternative official user manual.

Instead, its purpose is to:

- bring together information scattered across different sources,
- document hard-to-find functions in an understandable way,
- present operating sequences visually,
- make contradictions between sources visible,
- preserve practical, tested procedures.

Where sources differ, those differences should be documented explicitly whenever possible rather than being silently “corrected”.

## Sources and Third-Party Material

Parts of the documentation are based on or refer to third-party material, in particular:

- Roland Corporation / Roland TB-3
- Roland TB-3 Front Panel Guide
- Dope Robot TB-3 Sound & Pattern Editor
- Ctrlr

Trademarks, product names, screenshots, illustrations, original text, and other third-party materials remain the property of their respective rights holders.

This repository is not affiliated with Roland or Dope Robot and is not officially supported, published, or endorsed by them.

## License

The repository as a whole has **deliberately not been released under a general open-source license**.

The reason is that, in addition to original material and preparation, it may contain content, images, quotations, and references from third-party sources that are subject to different rights.

The absence of a license does not mean that all content may be freely copied, modified, or redistributed.

Individual components may be assigned a separate license at a later date.

## Disclaimer

The content has been prepared to the best of our knowledge from the sources listed above and has in part been tested in practice. Nevertheless, errors or differences between firmware versions, operating systems, drivers, or editor versions may occur.

Before changing sounds, patterns, or device settings, it is generally recommended to back up important data.
