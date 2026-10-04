# TB-3 Frontpanel Guide (de)

## language

de

## ui

### title

Roland TB-3 – Interaktiver Frontpanel- & Editor-Guide

### sub

Zusammengeführt aus „TB-3 Front Panel Guide 1.05“ und dem TB-3-Editor-Video · Frontpanel, Setup und versteckte Editor-Parameter

### search

Suchen, z. B. Pattern, Ring Mod, Receive, MIDI, Swing …

### quick

- Pattern kopieren
- Sound speichern
- MIDI Clock
- Factory Reset
- Editor einrichten

### stepsHeading

Bedienfolge

### visualHeading

Am Gerät

### legendHold

[Taste] = laut Originalguide gedrückt halten

### legendClick

Klick auf einen Schritt hebt ihn im Bild hervor.

### source

Quelle:

### empty

Kein passender Vorgang gefunden.

### front

Frontpanel

### rear

Rückseite / Anschlüsse

### noGraphic

Für diesen Eintrag ist keine zusätzliche Gerätegrafik erforderlich.

### footer

Quellenbasis: TB-3 Front Panel Guide 1.05 sowie „TB-3 Sound & Pattern Editor – Edit your TB-3 and Backup/Restore Patches!“. Frontpanel-Abläufe und Video-Inhalte wurden zusammengeführt. Die Ctrlr-/TB-3-Ersteinrichtung wurde zusätzlich als praktisch verifizierte Schrittfolge konkretisiert. Quellenabweichungen wurden nicht stillschweigend korrigiert. Wo Angaben voneinander abweichen, bleibt der Unterschied ausdrücklich dokumentiert.

### language

Sprache

### holdMatch

gedrückt halten

## categories

### Patches & Patterns

Patches & Patterns

### TB-3 Editor

TB-3 Editor

### Global Settings

Globale Einstellungen

### Navigation

Navigation

### Other Functions

Weitere Funktionen

## save-sound

### title

Sound-Patch speichern

### mode

Sequencer OFF

### summary

Speichert den aktuellen Sound in einen der User-Slots U01–U15.

### steps

1. ENV MOD gedrückt halten.
2. Mit VALUE einen User-Slot U01–U15 auswählen.
3. Mit PLAY/STOP bestätigen.

### notes

- Der Guide nennt ausschließlich U01–U15 als speicherbare User-Slots.
- Quellenabweichung: Das Editor-Video sagt, dass Firmware 1.10 Sounds in 16 Hardware-User-Slots speichern kann; der Frontpanel-Guide nennt hier U01–U15. Beide Angaben bleiben deshalb getrennt dokumentiert.

## link-sound

### title

Sound mit Pattern verknüpfen

### mode

STEP oder REALTIME REC ON

### summary

Ordnet einem Pattern einen Sound-Patch zu.

### steps

1. Gewünschtes Pattern 1-1 bis 8-8 auswählen.
2. ENV MOD gedrückt halten.
3. Mit VALUE die Patch-Nummer wählen.
4. Mit PLAY/STOP bestätigen.

## pattern-lock

### title

Pattern Lock

### mode

STEP & REALTIME REC OFF

### summary

Legt fest, ob Pattern-Änderungen normal gespeichert werden.

### steps

1. PTN SELECT gedrückt halten.
2. Mit VALUE zwischen OFF und Loc wählen.

### notes

- Bei Loc werden Pattern-Edits laut Guide nicht normal gespeichert.

## pattern-steps

### title

Pattern-Länge festlegen

### mode

Keyboard Mode

### summary

Stellt die Anzahl der Schritte eines Patterns auf 1–32.

### steps

1. STEP REC gedrückt halten.
2. Mit VALUE 1–32 Schritte wählen.

### notes

- Die Einstellung wird pro Pattern gespeichert.

## copy-pattern

### title

Pattern kopieren

### mode

Sequencer OFF

### summary

Kopiert ein Pattern auf einen Zielplatz.

### steps

1. Quell-Pattern 1-1 bis 8-8 auswählen.
2. PTN SELECT gedrückt halten.
3. Den PAD für die Kopierquelle antippen.
4. Ziel mit VALUE wählen – alternativ PAD + -OCT/+OCT.
5. Mit PLAY/STOP bestätigen.

### notes

- Die Formulierung „Tap the PAD to copy from“ stammt so aus dem Guide; sie ist dort nicht weiter erläutert.

## delete-pattern

### title

Pattern löschen

### mode

Sequencer OFF

### summary

Löscht das aktuell gewählte Pattern nach Bestätigung.

### steps

1. Pattern 1-1 bis 8-8 auswählen.
2. PTN SELECT gedrückt halten.
3. PAD CLEAR antippen; im Display erscheint Clr.
4. Mit PLAY/STOP bestätigen.

## random-notes

### title

Noten randomisieren

### mode

Pattern Select Mode

### summary

Randomisiert die Noten des Patterns.

### steps

1. PTN SELECT gedrückt halten.
2. SCATTER drücken.

## random-extras

### title

Accents, Glides & Oktaven randomisieren

### mode

Keyboard Mode

### summary

Semi-randomisiert Accents, Glides und Oktaven.

### steps

1. KEYBOARD gedrückt halten.
2. SCATTER drücken.

### notes

- Laut Fußnote reagiert das TB-3-Touchpad nicht auf Velocity; Accent wird bei externen MIDI-Velocity-Werten über 100 ausgelöst.

## transpose

### title

Pattern transponieren

### mode

STEP & REALTIME REC OFF

### summary

Ändert die Grundtonart des Patterns halbtonweise, ohne die Pattern-Noten selbst umzuschreiben.

### steps

1. KEYBOARD gedrückt halten.
2. Auf dem PAD die Grundtonart in Halbtonschritten verschieben.

### notes

- Der Guide bezeichnet Transpose als nicht-destruktiv: Die Noten bleiben unverändert; gespeichert wird die Start-/Grundtonart.

## pitch-shift

### title

Pattern-Pitch verschieben

### mode

STEP oder REALTIME REC ON

### summary

Verschiebt alle Pattern-Noten in Halbtonschritten.

### steps

1. KEYBOARD gedrückt halten.
2. Mit VALUE alle Pattern-Noten halbtonweise verschieben.

### notes

- Achtung: Laut Guide ist Pitch Shift destruktiv. Werden Noten über die obere/untere Grenze hinaus verschoben, lassen sie sich nicht zwingend auf den ursprünglichen Pitch zurückholen.

## swing

### title

Swing einstellen

### mode

Realtime Global Setting

### summary

Setzt positiven oder negativen Swing.

### steps

1. TEMPO gedrückt halten.
2. Mit VALUE einen Wert von -50 bis +50 wählen.

## triplet

### title

Triplet Timing ein/aus

### mode

Keyboard Mode

### summary

Schaltet die Triolen-Zeitbasis des Patterns um.

### steps

1. STEP REC gedrückt halten.
2. TEMPO antippen, um Triplet Timing ein/aus zu schalten.

### notes

- Die Einstellung wird pro Pattern gespeichert.

## tap-tempo

### title

Tap Tempo

### mode

Pattern Select Mode

### summary

Tempo durch Viertelnoten-Taps setzen.

### steps

1. TEMPO gedrückt halten.
2. SCATTER im Viertelnoten-Rhythmus antippen.

## backup

### title

Patterns sichern

### mode

Startup Mode 4

### summary

Startet den TB-3 im Backup-Modus und kopiert Pattern-Dateien auf den Computer.

### steps

1. PLAY/STOP gedrückt halten.
2. Gerät neu starten.
3. USB-Kabel verbinden.
4. Die „TB-3“-Pattern-Dateien aus dem Ordner BACKUP auf den Computer kopieren.
5. USB trennen und Gerät neu starten.

### notes

- Der Roland-Backup-Weg sichert laut Editor-Video Pattern-Daten auf Disk. Das Speichern von Sound-Patches auf den Computer ist eine zusätzliche Funktion des TB-3 Editors.

## restore

### title

Patterns wiederherstellen

### mode

Startup Mode 5

### summary

Kopiert gesicherte Pattern-Dateien zurück in den RESTORE-Ordner des TB-3.

### steps

1. PLAY/STOP gedrückt halten.
2. Gerät neu starten.
3. USB-Kabel verbinden.
4. Pattern-Dateien vom Computer in den RESTORE-Ordner des TB-3 kopieren.
5. USB trennen und Gerät neu starten.

### notes

- Quellenhinweis: Der vorliegende Guide nennt für Backup und Restore dieselbe Startup-Tastenkombination [PLAY/STOP] + Neustart. Das wurde hier bewusst nicht „korrigiert“.
- Dieser Restore-Vorgang betrifft Pattern-Dateien. Für Sound-Patches beschreibt das Editor-Video einen eigenen Load/Save-Workflow im Editor.

## editor-why

### title

Warum der TB-3 Editor?

### mode

Hintergrund / Funktionsumfang

### summary

Ordnet ein, welche Funktionen des TB-3 am Frontpanel nicht oder nur eingeschränkt erreichbar sind und was der Editor zusätzlich ermöglicht.

### stepHeading

Was das Video festhält

### visualHeading

Editor im Überblick

### steps

1. Der TB-3 ist laut Video deutlich mehr als nur ein TB-303-Klon; unter dem reduzierten Frontpanel steckt ein umfangreicherer Synthesizer.
2. Die erweiterten Parameter sind nicht direkt vom Frontpanel erreichbar und werden über System Exclusive (SysEx) angesprochen.
3. Roland stellte ursprünglich keinen direkten Weg bereit, Sound-Patches auf dem Computer zu sichern.
4. Nach Firmware 1.10 konnten Sounds laut Video in 16 Hardware-User-Slots gespeichert werden; auf Disk ließ sich über den Roland-Weg weiterhin nur Pattern-Daten sichern.
5. Per MIDI lassen sich laut Video nur die Preset-Sounds direkt auswählen, nicht die User-Sounds.
6. Der Editor soll diese Lücken schließen: TB-3-Sounds bearbeiten, auf dem Computer speichern und wieder laden.

### notes

- SysEx = herstellerspezifische MIDI-System-Exclusive-Nachrichten zur Kommunikation mit Geräten.
- Die Aussage „16 Hardware-User-Slots“ stammt aus dem Video und weicht vom Frontpanel-Guide ab, der beim Speichern U01–U15 nennt.

### visuals

- Video 00:41.5 – der TB-3 Editor wird als Lösung für Edit/Save/Load vorgestellt.

## editor-setup

### title

Editor einrichten – funktionierende Standalone-Konfiguration

### mode

Windows / Ctrlr Standalone / direkte USB-Verbindung

### summary

Konkrete Erstkonfiguration, mit der die TB-3-Oberfläche in Ctrlr mit der Hardware kommuniziert. Für den ersten Test TB-3 direkt per USB anschließen und keine DAW dazwischenschalten.

### stepHeading

Einrichtung – Schritt für Schritt

### visualHeading

Video-Referenz / Editor

### steps

1. TB-3 zunächst direkt per USB mit dem Windows-PC verbinden und einschalten. Für die Ersteinrichtung Bitwig, Ableton und andere Programme geschlossen lassen, die den TB-3-MIDI-Port belegen könnten.
2. Den Roland-TB-3-Treiber installieren. Der Treiber stellt die USB-MIDI-Verbindung bereit und macht die TB-3 laut Video zusätzlich als 24-Bit-/96-kHz-Audiointerface verfügbar.
3. Firmware prüfen. Für die im Video gezeigte Methode: TB-3 ausschalten, TEMPO gedrückt halten und das Gerät wieder einschalten. Idealerweise wird Version 1.10 angezeigt; mit PLAY/STOP die Versionsanzeige verlassen.
4. Für einen definierten Ausgangspunkt den MIDI-Kanal der TB-3 auf C2 setzen bzw. kontrollieren. Entscheidend ist: Hardware und Ctrlr müssen denselben MIDI-Kanal verwenden. C2 ist laut Frontpanel-Guide der Default.
5. Ctrlr als Standalone-Anwendung starten. Für die erste Inbetriebnahme noch nicht als VST/Plugin innerhalb einer DAW verwenden.
6. In Ctrlr über File → Open Panel das TB-3-Custom-Panel aus dem Editor-Bundle öffnen (die mitgelieferte TB-3-Panel-Datei, typischerweise .bpanelz). Danach muss die grün-schwarze TB-3-Editor-Oberfläche sichtbar sein.
7. In Ctrlr oben im Menü MIDI → Input → Device den Eintrag TB-3 auswählen.
8. In Ctrlr unter MIDI → Input → Channel den Kanal 2 auswählen, wenn die TB-3 auf C2 steht.
9. In Ctrlr unter MIDI → Output → Device ebenfalls TB-3 auswählen.
10. In Ctrlr unter MIDI → Output → Channel ebenfalls Kanal 2 auswählen. Damit sind Sende- und Empfangsrichtung identisch auf die TB-3 geroutet.
11. Danach MIDI → Refresh Devices ausführen, sofern der Menüpunkt vorhanden ist. Alternativ Ctrlr vollständig schließen und neu starten.
12. An der TB-3 einen normalen Preset- oder User-Sound auswählen.
13. Im TB-3-Editor auf RECEIVE klicken. Damit fordert das Panel die aktuellen Patch-Werte von der Hardware an.
14. Erfolgskriterium: Die Regler und Werte der Editor-Oberfläche aktualisieren sich und entsprechen anschließend dem ausgewählten Patch der TB-3. Ab diesem Punkt steht die bidirektionale Editor-Verbindung.

### notes

- Bewährte Signalstrecke für die Ersteinrichtung: TB-3 ⇄ USB ⇄ Roland-Treiber ⇄ Ctrlr Standalone ⇄ TB-3 Editor.
- Wichtig: Die Felder „MIDI OUT CH“ und „MIDI IN CH“ im grünen MISC-Bereich des TB-3-Editors sind nicht die grundlegende Ctrlr-Portauswahl. Die Verbindung zum Gerät wird oben im Ctrlr-Menü MIDI über Input Device/Channel und Output Device/Channel eingerichtet.
- Wenn RECEIVE nichts bewirkt, zuerst nur drei Dinge prüfen: Input Device = TB-3, Output Device = TB-3 und beide Kanäle entsprechen dem MIDI-Kanal der Hardware. Erst danach weitere Ursachen untersuchen.
- Falls die Ports korrekt aussehen und trotzdem keine Kommunikation zustande kommt, für den Test andere MIDI-/DAW-Anwendungen schließen und Ctrlr bzw. die Devices neu starten/aktualisieren.
- Vor dem Laden oder Speichern eines Patches im Editor zuerst RECEIVE ausführen, damit das Panel den aktuellen Zustand der TB-3 enthält.

### visuals

- Video 00:57.5 – zuerst den Roland-TB-3-Treiber installieren.
- Video 01:21.5 – Ctrlr öffnen, Custom Panel laden und MIDI In/Out konfigurieren.
- Video 01:25 – an der TB-3 einen Sound wählen und im Editor RECEIVE drücken.
- Video 01:30 – Erfolg: Das Panel übernimmt sichtbar die Patch-Werte der TB-3.

## editor-firmware-check

### title

Firmware-Version prüfen – Video-Methode

### mode

Startup / alternative Quellenangabe

### summary

Das Editor-Video zeigt eine eigene Tastenkombination zum Prüfen der Firmware-Version.

### steps

1. TEMPO gedrückt halten.
2. Bei gehaltenem TEMPO das Gerät neu starten.
3. Die installierte Firmware-Version erscheint im Display.
4. Die Versionsanzeige bleibt laut Video stehen, bis PLAY/STOP gedrückt wird.

### notes

- Das Video nennt 1.10 als finale Firmware-Version.
- Quellenkonflikt: Der Frontpanel-Guide 1.05 dokumentiert unter „Other Functions → Firmware-Version anzeigen“ eine andere Tastenkombination. Beide Methoden sind daher separat erhalten.

### visuals

- Video 01:01 – das Video nennt Firmware 1.10 als finale Version.
- Video 01:04 – TEMPO gedrückt halten und neu starten.
- Video 01:07 – Version bleibt sichtbar bis PLAY/STOP gedrückt wird.

## editor-sound-sources

### title

Sound Sources: VCO & Ring Mod

### mode

Editor – Syntheseparameter

### summary

Zeigt die im Editor zugänglichen Oszillator- und Ringmodulator-Quellen.

### stepHeading

Verfügbare Parameter

### visualHeading

Sound Sources im Editor

### steps

1. VCO: Saw, Square und eine stimm-/tune-bare Sine-Wellenform.
2. Zusätzliche VCO-Quellen: White Noise und Pink Noise.
3. Ring-Mod-Eingänge: Sawtooth, Square, Ring/Sine sowie White/Pink Noise.
4. Für den Ring Mod nennt das Video zusätzlich Depth und Level.

### visuals

- Video 01:37 – VCO-Wellenformen und Noise-Quellen.
- Video 01:42 – Ring-Mod-Eingänge, Depth und Level.

## editor-vcf

### title

VCF-Sektion

### mode

Editor – Syntheseparameter

### summary

Erweitert den Filterzugriff um mehrere Parameter, die das Frontpanel nicht direkt offenlegt.

### stepHeading

Verfügbare Parameter

### visualHeading

VCF im Editor

### steps

1. Cutoff
2. Resonance
3. Accent
4. Keyfollow
5. Envelope Amount
6. ADSR-Hüllkurve

### visuals

- Video 01:47 – Cutoff, Resonance, Accent, Keyfollow, Env Amount und ADSR.

## editor-lfo

### title

LFO-Sektion

### mode

Editor – Syntheseparameter

### summary

Zeigt die erweiterten LFO-Optionen und deren Modulationsziele.

### stepHeading

Verfügbare Parameter

### visualHeading

LFO im Editor

### steps

1. Vier Wellenformen plus Sample & Hold.
2. LFO-Eingriff bzw. Modulationswege in VCO, VCF und VCA.
3. Zusätzliche Optionen: Sync, Retrig, Delay und CV Offset.

### visuals

- Video 01:52 – Wellenformen, S&H, VCO/VCF/VCA, Sync, Retrig, Delay und CV Offset.

## editor-crossmod

### title

Cross Mod

### mode

Editor – Syntheseparameter

### summary

Bietet acht Cross-Mod-Kombinationen aus den im Video genannten Quellen.

### stepHeading

Verfügbare Quellen

### visualHeading

Cross Mod im Editor

### steps

1. Acht Kombinationen aus Saw, Square, White Noise und Pink Noise.

### visuals

- Video 01:57 – acht Cross-Mod-Kombinationen.

## editor-vca

### title

VCA-Sektion

### mode

Editor – Syntheseparameter

### summary

Erweitert die Verstärkersektion um Hüllkurven- und LFO-bezogene Parameter.

### stepHeading

Verfügbare Parameter

### visualHeading

VCA im Editor

### steps

1. ADSR-Hüllkurve.
2. Input to LFO / LFO-bezogener Eingang laut Video.

### notes

- Die Bezeichnung „INPUT TO LFO“ wird so im Video eingeblendet und hier nicht weiter interpretiert.

### visuals

- Video 02:01 – ADSR Envelope und Input to LFO.

## editor-distortion

### title

Distortion-Sektion

### mode

Editor – Effekte

### summary

Zeigt die erweiterte Distortion-Auswahl und die zugehörigen Klangparameter.

### stepHeading

Verfügbare Parameter

### visualHeading

Distortion im Editor

### steps

1. 25 Distortion-Emulationen.
2. Drive.
3. Bottom.
4. Tone.
5. Color.
6. Wet/Dry Mix.

### visuals

- Video 02:06 – 25 Emulationen plus Drive, Bottom, Tone, Color und Wet/Dry.

## editor-efx1

### title

EFX Section 1

### mode

Editor – Effekte

### summary

Die erste Effektsektion bietet laut Video zehn auswählbare Effekte.

### stepHeading

Funktionsumfang

### visualHeading

EFX 1 im Editor

### steps

1. 10 Effekte zur Auswahl.
2. Pitch Shift ist laut Video exklusiv in EFX Section 1.
3. EQ ist laut Video ebenfalls exklusiv in EFX Section 1.

### visuals

- Video 02:15 – EFX 1 mit 10 Effekten; Pitch Shift und EQ als Besonderheiten.

## editor-efx2

### title

EFX Section 2

### mode

Editor – Effekte

### summary

Die zweite Effektsektion bietet laut Video neun auswählbare Effekte.

### stepHeading

Funktionsumfang

### visualHeading

EFX 2 im Editor

### steps

1. 9 Effekte zur Auswahl.
2. Reverb ist laut Video exklusiv in EFX Section 2.

### visuals

- Video 02:20 – EFX 2 mit 9 Effekten; Reverb als Besonderheit.

## editor-controller-assign

### title

Controller Assignment

### mode

Editor – Parameter Assign

### summary

Weist einen Editor-Parameter dem EFFECT-Knob oder einer der drei Pad-Achsen X/Y/Z zu.

### stepHeading

Zuweisung

### visualHeading

Parameter Assign im Editor

### steps

1. Den Parameter verändern, der zugewiesen werden soll.
2. Den Tab „PARAMETER ASSIGN“ öffnen; dort erscheint der Name des zuletzt geänderten Parameters.
3. Die gewünschte Ziel-Schaltfläche für EFFECT, PAD X, PAD Y oder PAD Z drücken, um den Parameter zuzuweisen.

### notes

- Im Video gezeigtes Beispiel: Parameter name = EFX1 TYPE.
- Beispielbelegungen im Panel: EFFECT → VCF ENVELOPE DEPTH (ENV MOD); PAD X → OFFSET SQR PITCH; PAD Y → VCO WHITE NOISE LEVEL; PAD Z → EFX2 CS SW.
- Die vier Modulations-/Controller-Ziele sind EFFECT KNOB, PAD X, PAD Y und PAD Z.

### visuals

- Video 02:26 – Parameter Assign und beispielhafte Zielbelegungen.

## editor-pattern

### title

Pattern-Sektion im Editor

### mode

Editor – Pattern

### summary

Bearbeitet das aktuell ausgewählte Pattern und macht zusätzliche Timing-/Längenparameter direkt im Editor zugänglich.

### stepHeading

Funktionsumfang

### visualHeading

Pattern im Editor

### steps

1. Das aktuell ausgewählte Pattern bearbeiten.
2. Triplet Timing einstellen.
3. Gate Time einstellen.
4. Pattern Length einstellen.

### notes

- Siehe ergänzend die Frontpanel-Vorgänge „Pattern-Länge festlegen“ und „Triplet Timing ein/aus“. Gate Time wird im Video zusätzlich ausdrücklich als Editor-Funktion genannt.

### visuals

- Video 02:32 – Pattern-Editor mit Triplet Timing, Gate Time und Pattern Length.

## editor-misc

### title

Misc-Sektion im Editor

### mode

Editor – Misc

### summary

Bündelt weitere System-, MIDI- und Patch-Funktionen des Editors.

### stepHeading

Funktionsumfang

### visualHeading

Misc im Editor

### steps

1. Portamento-Einstellungen.
2. MIDI-Einstellungen.
3. Bender-Einstellungen.
4. Control-Change-Parameter.
5. Save/Load-Patch-Funktionen.

### notes

- Wichtiger Hinweis direkt im Editor-Panel des Videos: „Press receive before load or save patch“ – vor dem Laden oder Speichern eines Patches zuerst RECEIVE drücken.

### visuals

- Video 02:38 – Misc mit Portamento/MIDI/Bender, CC-Parametern und Save/Load.

## editor-save-load

### title

Sounds am Computer speichern und laden

### mode

Editor – Patch Library

### summary

Nutzt die editorseitigen Save/Load-Funktionen für eine Sound-Bibliothek außerhalb der Hardware-Slots.

### stepHeading

Möglichkeiten laut Video

### visualHeading

Save/Load im Editor

### steps

1. Eine eigene Bibliothek von TB-3-Sounds auf dem Computer aufbauen.
2. Gespeicherte Sounds mit anderen TB-3-Nutzern austauschen.
3. Sounds direkt laden – laut Video sowohl im Standalone-Betrieb als auch in einer DAW.

### notes

- Vor Load/Save zuerst RECEIVE drücken; dieser Hinweis steht im Misc-Panel des Videos.

### visuals

- Video 02:45 – Save/Load Sounds und Sound-Bibliothek auf dem Computer.

## keyboard-mode

### title

Keyboard Mode einstellen

### mode

Realtime Global Setting

### summary

Wählt Local Off, Local On oder Controller Only.

### steps

1. SCATTER gedrückt halten.
2. Mit VALUE OFF, On oder Ctr wählen.

### notes

- OFF: Sound nur über externe MIDI-Nachrichten; Keypad und Knobs deaktiviert.
- On: Sound über Bedienung am Gerät und externe MIDI-Nachrichten.
- Ctr: kein eigener Sound; nur MIDI-Ausgabe zur Steuerung anderer Synths.

## midi-channel

### title

MIDI-Kanal einstellen

### mode

Startup Mode 1

### summary

Legt MIDI-Sende- und Empfangskanal bzw. Omni fest.

### steps

1. SCATTER gedrückt halten.
2. Gerät neu starten, um Startup Mode 1 zu öffnen.
3. Mit VALUE OFF, C1–C16 oder OnN wählen.

### notes

- Default laut Guide: C2.
- OFF: kein MIDI-Kanal, nur Frontpanel-Eingabe.
- C1–C16: Sende- und Empfangskanal identisch.
- OnN: Omni-Empfang; Senden auf Kanal 2.

## midi-clock

### title

MIDI Clock Source

### mode

Startup Mode 1

### summary

Schaltet zwischen Auto (DIN/USB) und internem Clock-Betrieb.

### steps

1. SCATTER gedrückt halten.
2. Gerät neu starten, um Startup Mode 1 zu öffnen.
3. PAD C: leuchtend = Auto; gedimmt = Internal.

### notes

- Auto akzeptiert DIN- und USB-Clock; wenn beides vorhanden ist, hat USB Priorität.
- Default laut Guide: Lit/Auto.

## midi-thru

### title

MIDI OUT als THRU

### mode

Startup Mode 1

### summary

Schaltet MIDI OUT zwischen normalem Ausgang und MIDI THRU um.

### steps

1. SCATTER gedrückt halten.
2. Gerät neu starten, um Startup Mode 1 zu öffnen.
3. PAD D: leuchtend = THRU an; gedimmt = normaler MIDI OUT.

### notes

- Default laut Guide: Lit/On.

## pad-sens

### title

Keypad-/Pad-Z-Sensitivität

### mode

Startup Mode 1

### summary

Stellt die Pad-Z-Sensitivität von 0 bis 10 ein.

### steps

1. SCATTER gedrückt halten.
2. Gerät neu starten, um Startup Mode 1 zu öffnen.
3. KEYBOARD gedrückt halten.
4. Mit VALUE 0–10 einstellen; 10 = höchste Empfindlichkeit.

### notes

- Default laut Guide: 3.
- Pad Z funktioniert laut Fußnote wie ein Schalter für Parameter mit zwei Zuständen.

## master-tune

### title

Master Tune

### mode

Startup Mode 1

### summary

Stellt die globale Stimmung in 1-Hz-Schritten ein.

### steps

1. SCATTER gedrückt halten.
2. Gerät neu starten, um Startup Mode 1 zu öffnen.
3. ENV MOD gedrückt halten.
4. Mit VALUE 430–450 Hz wählen.

### notes

- Default laut Guide: 440 Hz.

## realtime-tune

### title

Realtime Tuning

### mode

Sequencer, STEP & REALTIME REC OFF

### summary

Verstimmt global in 0,1-Schritten von -7.0 bis +7.0.

### steps

1. ENV MOD gedrückt halten.
2. Mit dem PAD -7.0 bis +7.0 einstellen.

### notes

- 0,1 entspricht laut Guide 10 Cent; Gesamtbereich -700 bis +700 Cent.
- Achtung: global wirksam.

## led-demo

### title

LED Demo Mode

### mode

Startup Mode 1

### summary

Bestimmt, nach wie vielen Minuten die LED-Demo startet.

### steps

1. SCATTER gedrückt halten.
2. Gerät neu starten, um Startup Mode 1 zu öffnen.
3. TEMPO gedrückt halten.
4. Mit VALUE OFF bis 30 Minuten einstellen.

### notes

- Default laut Guide: OFF.

## select-sound

### title

Sound auswählen

### mode

Keyboard Mode

### summary

Navigiert durch User- und Preset-Sounds.

### steps

1. VALUE dreht jeweils einen Sound weiter.
2. Für 10er-Schritte KEYBOARD gedrückt halten.
3. Dann VALUE drehen.

### notes

- U01–U15: User
- A01–A26: TB-303
- b01–b51: Bass
- C01–C40: Lead
- d01–d17: SFX
- Laut Editor-Video lassen sich per MIDI nur Preset-Sounds direkt auswählen; die selbst erstellten User-Sounds sind auf diesem Weg nicht direkt anwählbar.

## select-pattern

### title

Pattern auswählen

### mode

Pattern Select Mode

### summary

Wählt einzelne oder mehrere Patterns zum Abspielen.

### steps

1. Pattern mit VALUE wählen – alternativ PAD + -OCT/+OCT.
2. Mit dem Finger über das PAD fahren, um mehrere Patterns zum Abspielen auszuwählen.

## firmware

### title

Firmware-Version anzeigen

### mode

Startup Mode 2

### summary

Startet den Versionsmodus und zeigt die installierte Firmware an.

### steps

1. STEP REC gedrückt halten.
2. Zusätzlich REALTIME REC gedrückt halten.
3. Gerät neu starten.
4. PLAY/STOP drücken; das Display zeigt die Version.

### notes

- Beispiel im Guide: 104 = Version 1.04.
- Der Guide nennt 1.10 / 110 als finale Version und rät von einem Update ab, wenn diese bereits installiert ist.
- Zusätzliche Quelle: Das Editor-Video zeigt eine abweichende Prüfmethode mit TEMPO + Neustart und nennt 1.10 als finale Firmware. Diese Variante ist separat unter „TB-3 Editor“ dokumentiert und wird hier nicht stillschweigend mit dem Frontpanel-Guide vermischt.

## factory-reset

### title

Factory Reset

### mode

Startup Mode 3

### summary

Setzt das Gerät auf Werkseinstellungen zurück.

### steps

1. REALTIME REC gedrückt halten.
2. Gerät neu starten.
3. Wenn rSt erscheint, das blinkende PLAY/STOP drücken.
4. Nach CNP/CoMPlete erneut starten.

### notes

- Vorher Patterns sichern und Einstellungen notieren; sie werden zurückgesetzt.
- Zum Abbrechen statt Bestätigung neu starten.
- Danach Patterns und Einstellungen bei Bedarf wiederherstellen.

