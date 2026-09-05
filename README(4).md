# Roland TB-3 Support Files

Sammlung von Dokumentationen, Hilfsdateien und aufbereiteten Anleitungen rund um die **Roland AIRA TB-3**.

Der Schwerpunkt liegt darauf, Informationen aus verschiedenen Quellen so zusammenzuführen, dass sie im praktischen Einsatz leichter auffindbar und verständlicher sind – insbesondere für Bedienung, versteckte Funktionen, Pattern-/Sound-Verwaltung sowie die Nutzung des TB-3 Editors am Rechner.

## Inhalt

Zum Repository gehören unter anderem:

- **Interaktiver Frontpanel-Guide**  
  Eine durchsuchbare HTML-Anleitung mit visualisierten Bedienfolgen direkt am TB-3-Frontpanel.

- **TB-3 Editor – Einrichtung und Nutzung**  
  Hinweise zur Verbindung der TB-3 mit dem Rechner, zur Einrichtung von Ctrlr und zur Nutzung des Dope-Robot-TB-3-Editors.

- **Video-Transkription**  
  Chronologisch aufbereitete Texte aus dem Video  
  *“TB-3 Sound & Pattern Editor – Edit your TB-3 and Backup/Restore Patches!”*

- **Video-Bilddokumentation**  
  PDF mit relevanten Einzelbildern aus dem Video und den jeweils eingeblendeten Texten.

## Wichtige Dateien

```text
TB-3_Interaktiver_Frontpanel_Guide_v1.6.html
TB-3_Editor_Video_Textchronologie.md
TB-3_Editor_Video_Bild_und_Text.pdf
```

Die HTML-Datei ist als zentrale Arbeits- und Nachschlageversion gedacht.

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
