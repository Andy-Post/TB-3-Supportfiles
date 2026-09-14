# Roland TB-3 Support Files

[Deutsch](#deutsch) | [English](#english)

<a id="deutsch"></a>

## Deutsch

Sammlung von Dokumentationen, Hilfsdateien und aufbereiteten Anleitungen rund um die **Roland AIRA TB-3**.

Der Schwerpunkt liegt darauf, Informationen aus verschiedenen Quellen so zusammenzuführen, dass sie im praktischen Einsatz leichter auffindbar und verständlicher sind – insbesondere für Bedienung, versteckte Funktionen, Pattern-/Sound-Verwaltung sowie die Nutzung des TB-3 Editors am Rechner.

## Inhalt

Zum Repository gehören unter anderem:

- **Interaktiver Frontpanel-Guide (DE / EN / FR)**  
  Eine durchsuchbare HTML-Anleitung mit visualisierten Bedienfolgen direkt am TB-3-Frontpanel.  
  Ab Version **v1.7 Multilingual** kann der Guide direkt zwischen **Deutsch, Englisch und Französisch** umgeschaltet werden. Die Anleitungen, Hinweise, Suchtexte und UI-Texte werden dabei sprachabhängig dargestellt; die originalen Hardware-Beschriftungen der TB-3 bleiben unverändert.

- **TB-3 Editor – Einrichtung und Nutzung**  
  Hinweise zur Verbindung der TB-3 mit dem Rechner, zur Einrichtung von Ctrlr und zur Nutzung des Dope-Robot-TB-3-Editors.

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
```

Die HTML-Datei ist als zentrale Arbeits- und Nachschlageversion gedacht.

### Sprachauswahl im Frontpanel-Guide

Der interaktive Frontpanel-Guide unterstützt ab **v1.7**:

- Deutsch (`DE`)
- Englisch (`EN`)
- Französisch (`FR`)

Die Sprache kann direkt im Guide umgeschaltet werden. Zusätzlich kann sie über einen URL-Parameter vorgegeben werden:

```text
?lang=de
?lang=en
?lang=fr
```

## TB-3 Editor am Rechner

Für die aktuell getestete Standalone-Nutzung funktioniert folgende Grundkonfiguration:

1. Roland TB-3 per USB direkt mit dem Rechner verbinden.
2. Aktuellen Roland-Treiber installieren.
3. TB-3 einschalten.
4. Ctrlr Standalone starten.
5. Das TB-3-Editor-Panel laden.
6. In Ctrlr konfigurieren:
   - `MIDI -> Input -> Device -> TB-3`
   - `MIDI -> Input -> Channel -> 2`
   - `MIDI -> Output -> Device -> TB-3`
   - `MIDI -> Output -> Channel -> 2`
7. MIDI-Geräte in Ctrlr aktualisieren oder Ctrlr neu starten.
8. Auf der TB-3 einen Sound auswählen.
9. Im Editor `RECEIVE` drücken.

Wenn die Verbindung funktioniert, übernimmt das Panel die aktuellen Patch-Werte der TB-3.

Hinweis: Die Felder `MIDI IN CH` und `MIDI OUT CH` im **MISC**-Bereich des TB-3-Editor-Panels sind nicht mit der grundlegenden MIDI-Port-Auswahl von Ctrlr zu verwechseln.

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

## Contents

The repository includes, among other things:

- **Interactive Front Panel Guide (DE / EN / FR)**  
  A searchable HTML guide with visualized operating sequences directly on the TB-3 front panel.  
  Starting with **v1.7 Multilingual**, the guide can be switched directly between **German, English, and French**. Instructions, notes, search text, and UI text are displayed in the selected language, while the original hardware labels of the TB-3 remain unchanged.

- **TB-3 Editor – Setup and Usage**  
  Notes on connecting the TB-3 to a computer, setting up Ctrlr, and using the Dope Robot TB-3 editor.

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
```

The HTML file is intended to be the central working and reference version.

### Language Selection in the Front Panel Guide

Starting with **v1.7**, the interactive front panel guide supports:

- German (`DE`)
- English (`EN`)
- French (`FR`)

The language can be changed directly in the guide. It can also be selected using a URL parameter:

```text
?lang=de
?lang=en
?lang=fr
```

## Using the TB-3 Editor on a Computer

For the currently tested standalone setup, the following basic configuration works:

1. Connect the Roland TB-3 directly to the computer via USB.
2. Install the current Roland driver.
3. Switch on the TB-3.
4. Start Ctrlr Standalone.
5. Load the TB-3 editor panel.
6. Configure the following in Ctrlr:
   - `MIDI -> Input -> Device -> TB-3`
   - `MIDI -> Input -> Channel -> 2`
   - `MIDI -> Output -> Device -> TB-3`
   - `MIDI -> Output -> Channel -> 2`
7. Refresh the MIDI devices in Ctrlr or restart Ctrlr.
8. Select a sound on the TB-3.
9. Press `RECEIVE` in the editor.

If the connection is working, the panel will load the TB-3's current patch values.

Note: The `MIDI IN CH` and `MIDI OUT CH` fields in the **MISC** section of the TB-3 editor panel should not be confused with Ctrlr's basic MIDI port selection.

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
