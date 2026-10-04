# TB-3 Frontpanel Guide (en)

## language

en

## ui

### title

Roland TB-3 – Interactive Front Panel & Editor Guide

### sub

Combined from “TB-3 Front Panel Guide 1.05” and the TB-3 Editor video · front panel, setup and hidden editor parameters

### search

Search, e.g. pattern, Ring Mod, Receive, MIDI, Swing …

### quick

- Copy pattern
- Save sound
- MIDI Clock
- Factory Reset
- Set up editor

### stepsHeading

Procedure

### visualHeading

On the device

### legendHold

[Button] = hold down as stated in the original guide

### legendClick

Click a step to highlight it on the image.

### source

Source:

### empty

No matching procedure found.

### front

Front panel

### rear

Rear panel / connections

### noGraphic

No additional device graphic is required for this entry.

### footer

Source basis: TB-3 Front Panel Guide 1.05 and “TB-3 Sound & Pattern Editor – Edit your TB-3 and Backup/Restore Patches!”. Front-panel procedures and video content have been combined. The initial Ctrlr/TB-3 setup has additionally been turned into a practically verified step-by-step procedure. Source discrepancies have not been silently corrected. Where the sources differ, the difference remains explicitly documented.

### language

Language

### holdMatch

Hold down

## categories

### Patches & Patterns

Patches & Patterns

### TB-3 Editor

TB-3 Editor

### Global Settings

Global Settings

### Navigation

Navigation

### Other Functions

Other Functions

## save-sound

### title

Save sound patch

### mode

Sequencer OFF

### summary

Saves the current sound to one of the user slots U01–U15.

### steps

1. Hold down ENV MOD.
2. Use VALUE to select a user slot U01–U15.
3. Confirm with PLAY/STOP.

### notes

- The guide lists only U01–U15 as writable user slots.
- Source discrepancy: the editor video says that firmware 1.10 can save sounds in 16 hardware user slots; the front-panel guide lists U01–U15 here. Both statements are therefore documented separately.

## link-sound

### title

Link sound to pattern

### mode

STEP or REALTIME REC ON

### summary

Assigns a sound patch to a pattern.

### steps

1. Select the desired pattern 1-1 through 8-8.
2. Hold down ENV MOD.
3. Use VALUE to choose the patch number.
4. Confirm with PLAY/STOP.

## pattern-lock

### title

Pattern Lock

### mode

STEP & REALTIME REC OFF

### summary

Controls whether pattern changes are saved normally.

### steps

1. Hold down PTN SELECT.
2. Use VALUE to choose between OFF and Loc.

### notes

- With Loc selected, pattern edits are not saved normally according to the guide.

## pattern-steps

### title

Set pattern length

### mode

Keyboard Mode

### summary

Sets the number of steps in a pattern from 1 to 32.

### steps

1. Hold down STEP REC.
2. Use VALUE to choose 1–32 steps.

### notes

- This setting is stored per pattern.

## copy-pattern

### title

Copy pattern

### mode

Sequencer OFF

### summary

Copies a pattern to a destination slot.

### steps

1. Select the source pattern 1-1 through 8-8.
2. Hold down PTN SELECT.
3. Tap the PAD for the copy source.
4. Choose the destination with VALUE – alternatively PAD + -OCT/+OCT.
5. Confirm with PLAY/STOP.

### notes

- The wording “Tap the PAD to copy from” is taken directly from the guide and is not explained further there.

## delete-pattern

### title

Delete pattern

### mode

Sequencer OFF

### summary

Deletes the currently selected pattern after confirmation.

### steps

1. Select pattern 1-1 through 8-8.
2. Hold down PTN SELECT.
3. Tap PAD CLEAR; Clr appears in the display.
4. Confirm with PLAY/STOP.

## random-notes

### title

Randomize notes

### mode

Pattern Select Mode

### summary

Randomizes the notes of the pattern.

### steps

1. Hold down PTN SELECT.
2. Press SCATTER.

## random-extras

### title

Randomize accents, glides & octaves

### mode

Keyboard Mode

### summary

Semi-randomizes accents, glides and octaves.

### steps

1. Hold down KEYBOARD.
2. Press SCATTER.

### notes

- According to the footnote, the TB-3 touchpad does not respond to velocity; Accent is triggered by external MIDI velocity values above 100.

## transpose

### title

Transpose pattern

### mode

STEP & REALTIME REC OFF

### summary

Changes the root key of the pattern in semitone steps without rewriting the pattern notes themselves.

### steps

1. Hold down KEYBOARD.
2. Use the PAD to shift the root key in semitone steps.

### notes

- The guide describes Transpose as non-destructive: the notes remain unchanged; the start/root key is stored.

## pitch-shift

### title

Shift pattern pitch

### mode

STEP or REALTIME REC ON

### summary

Shifts all pattern notes in semitone steps.

### steps

1. Hold down KEYBOARD.
2. Use VALUE to shift all pattern notes in semitone steps.

### notes

- Caution: according to the guide, Pitch Shift is destructive. If notes are shifted beyond the upper/lower limit, they cannot necessarily be returned to their original pitch.

## swing

### title

Set swing

### mode

Realtime Global Setting

### summary

Sets positive or negative swing.

### steps

1. Hold down TEMPO.
2. Use VALUE to choose a value from -50 to +50.

## triplet

### title

Triplet timing on/off

### mode

Keyboard Mode

### summary

Toggles the triplet time base of the pattern.

### steps

1. Hold down STEP REC.
2. Tap TEMPO to toggle Triplet Timing on/off.

### notes

- This setting is stored per pattern.

## tap-tempo

### title

Tap Tempo

### mode

Pattern Select Mode

### summary

Sets the tempo by tapping quarter notes.

### steps

1. Hold down TEMPO.
2. Tap SCATTER in quarter-note rhythm.

## backup

### title

Back up patterns

### mode

Startup Mode 4

### summary

Starts the TB-3 in backup mode and copies pattern files to the computer.

### steps

1. Hold down PLAY/STOP.
2. Restart the device.
3. Connect the USB cable.
4. Copy the “TB-3” pattern files from the BACKUP folder to the computer.
5. Disconnect USB and restart the device.

### notes

- According to the editor video, the Roland backup method saves pattern data to disk. Saving sound patches to the computer is an additional function of the TB-3 Editor.

## restore

### title

Restore patterns

### mode

Startup Mode 5

### summary

Copies backed-up pattern files back to the TB-3 RESTORE folder.

### steps

1. Hold down PLAY/STOP.
2. Restart the device.
3. Connect the USB cable.
4. Copy the pattern files from the computer into the TB-3 RESTORE folder.
5. Disconnect USB and restart the device.

### notes

- Source note: the available guide specifies the same startup key combination, [PLAY/STOP] + restart, for both backup and restore. This has deliberately not been “corrected” here.
- This restore procedure applies to pattern files. For sound patches, the editor video describes a separate load/save workflow in the editor.

## editor-why

### title

Why use the TB-3 Editor?

### mode

Background / feature scope

### summary

Explains which TB-3 functions are unavailable or only partly accessible from the front panel and what the editor adds.

### stepHeading

What the video establishes

### visualHeading

Editor overview

### steps

1. According to the video, the TB-3 is much more than a TB-303 clone; beneath the reduced front panel is a more extensive synthesizer.
2. The extended parameters cannot be accessed directly from the front panel and are addressed via System Exclusive (SysEx).
3. Roland originally provided no direct way to save sound patches to a computer.
4. After firmware 1.10, sounds could be stored in 16 hardware user slots according to the video; through Roland’s own method, only pattern data could still be saved to disk.
5. According to the video, MIDI can directly select only preset sounds, not user sounds.
6. The editor is intended to close these gaps: edit TB-3 sounds, save them to the computer and load them again.

### notes

- SysEx = manufacturer-specific MIDI System Exclusive messages used to communicate with devices.
- The statement “16 hardware user slots” comes from the video and differs from the front-panel guide, which lists U01–U15 when saving.

### visuals

- Video 00:41.5 – the TB-3 Editor is presented as the solution for edit/save/load.

## editor-setup

### title

Set up the editor – working standalone configuration

### mode

Windows / Ctrlr Standalone / direct USB connection

### summary

Concrete initial setup that allows the TB-3 interface in Ctrlr to communicate with the hardware. For the first test, connect the TB-3 directly via USB and do not place a DAW in between.

### stepHeading

Setup – step by step

### visualHeading

Video reference / editor

### steps

1. First connect the TB-3 directly to the Windows PC via USB and switch it on. For initial setup, keep Bitwig, Ableton and other programs closed if they might occupy the TB-3 MIDI port.
2. Install the Roland TB-3 driver. The driver provides the USB MIDI connection and, according to the video, also makes the TB-3 available as a 24-bit/96-kHz audio interface.
3. Check the firmware. For the method shown in the video: switch off the TB-3, hold down TEMPO and switch the unit on again. Ideally version 1.10 is shown; press PLAY/STOP to leave the version display.
4. For a defined starting point, set or verify the TB-3 MIDI channel as C2. The key point is that hardware and Ctrlr must use the same MIDI channel. According to the front-panel guide, C2 is the default.
5. Start Ctrlr as a standalone application. For the initial setup, do not yet use it as a VST/plugin inside a DAW.
6. In Ctrlr, use File → Open Panel to open the TB-3 custom panel from the editor bundle (the supplied TB-3 panel file, typically .bpanelz). The green-and-black TB-3 editor interface should then be visible.
7. In Ctrlr, select TB-3 under MIDI → Input → Device.
8. In Ctrlr, select channel 2 under MIDI → Input → Channel if the TB-3 is set to C2.
9. In Ctrlr, also select TB-3 under MIDI → Output → Device.
10. In Ctrlr, also select channel 2 under MIDI → Output → Channel. Send and receive are now routed identically to the TB-3.
11. Then run MIDI → Refresh Devices if that menu item is available. Alternatively, close Ctrlr completely and restart it.
12. Select a normal preset or user sound on the TB-3.
13. Click RECEIVE in the TB-3 Editor. This makes the panel request the current patch values from the hardware.
14. Success criterion: the controls and values in the editor interface update and then match the selected TB-3 patch. At this point the bidirectional editor connection is established.

### notes

- Proven signal path for initial setup: TB-3 ⇄ USB ⇄ Roland driver ⇄ Ctrlr Standalone ⇄ TB-3 Editor.
- Important: the “MIDI OUT CH” and “MIDI IN CH” fields in the green MISC section of the TB-3 Editor are not the basic Ctrlr port selection. The device connection is configured in Ctrlr’s top MIDI menu via Input Device/Channel and Output Device/Channel.
- If RECEIVE does nothing, first check only three things: Input Device = TB-3, Output Device = TB-3, and both channels match the hardware MIDI channel. Investigate other causes only after that.
- If the ports look correct but communication still fails, close other MIDI/DAW applications for the test and restart/refresh Ctrlr or the devices.
- Before loading or saving a patch in the editor, run RECEIVE first so that the panel contains the current state of the TB-3.

### visuals

- Video 00:57.5 – first install the Roland TB-3 driver.
- Video 01:21.5 – open Ctrlr, load the custom panel and configure MIDI In/Out.
- Video 01:25 – select a sound on the TB-3 and press RECEIVE in the editor.
- Video 01:30 – success: the panel visibly adopts the TB-3 patch values.

## editor-firmware-check

### title

Check firmware version – video method

### mode

Startup / alternative source method

### summary

The editor video shows its own key combination for checking the firmware version.

### steps

1. Hold down TEMPO.
2. Restart the device while keeping TEMPO held down.
3. The installed firmware version appears in the display.
4. According to the video, the version display remains until PLAY/STOP is pressed.

### notes

- The video names 1.10 as the final firmware version.
- Source conflict: Front Panel Guide 1.05 documents a different key combination under “Other Functions → Firmware version”. Both methods are therefore retained separately.

### visuals

- Video 01:01 – the video identifies firmware 1.10 as the final version.
- Video 01:04 – hold down TEMPO and restart.
- Video 01:07 – the version remains visible until PLAY/STOP is pressed.

## editor-sound-sources

### title

Sound Sources: VCO & Ring Mod

### mode

Editor – synthesis parameters

### summary

Shows the oscillator and ring-modulator sources accessible in the editor.

### stepHeading

Available parameters

### visualHeading

Sound Sources in the editor

### steps

1. VCO: Saw, Square and a tunable Sine waveform.
2. Additional VCO sources: White Noise and Pink Noise.
3. Ring Mod inputs: Sawtooth, Square, Ring/Sine, plus White/Pink Noise.
4. For Ring Mod, the video also lists Depth and Level.

### visuals

- Video 01:37 – VCO waveforms and noise sources.
- Video 01:42 – Ring Mod inputs, Depth and Level.

## editor-vcf

### title

VCF section

### mode

Editor – synthesis parameters

### summary

Extends filter access with several parameters that are not exposed directly on the front panel.

### stepHeading

Available parameters

### visualHeading

VCF in the editor

### steps

1. Cutoff
2. Resonance
3. Accent
4. Keyfollow
5. Envelope Amount
6. ADSR envelope

### visuals

- Video 01:47 – Cutoff, Resonance, Accent, Keyfollow, Env Amount and ADSR.

## editor-lfo

### title

LFO section

### mode

Editor – synthesis parameters

### summary

Shows the extended LFO options and their modulation destinations.

### stepHeading

Available parameters

### visualHeading

LFO in the editor

### steps

1. Four waveforms plus Sample & Hold.
2. LFO modulation/routing to VCO, VCF and VCA.
3. Additional options: Sync, Retrig, Delay and CV Offset.

### visuals

- Video 01:52 – waveforms, S&H, VCO/VCF/VCA, Sync, Retrig, Delay and CV Offset.

## editor-crossmod

### title

Cross Mod

### mode

Editor – synthesis parameters

### summary

Provides eight cross-mod combinations based on the sources named in the video.

### stepHeading

Available sources

### visualHeading

Cross Mod in the editor

### steps

1. Eight combinations of Saw, Square, White Noise and Pink Noise.

### visuals

- Video 01:57 – eight Cross Mod combinations.

## editor-vca

### title

VCA section

### mode

Editor – synthesis parameters

### summary

Extends the amplifier section with envelope- and LFO-related parameters.

### stepHeading

Available parameters

### visualHeading

VCA in the editor

### steps

1. ADSR envelope.
2. Input to LFO / LFO-related input according to the video.

### notes

- The label “INPUT TO LFO” is shown exactly this way in the video and is not interpreted further here.

### visuals

- Video 02:01 – ADSR Envelope and Input to LFO.

## editor-distortion

### title

Distortion section

### mode

Editor – effects

### summary

Shows the expanded distortion selection and its associated sound parameters.

### stepHeading

Available parameters

### visualHeading

Distortion in the editor

### steps

1. 25 distortion emulations.
2. Drive.
3. Bottom.
4. Tone.
5. Color.
6. Wet/Dry Mix.

### visuals

- Video 02:06 – 25 emulations plus Drive, Bottom, Tone, Color and Wet/Dry.

## editor-efx1

### title

EFX Section 1

### mode

Editor – effects

### summary

According to the video, the first effects section offers ten selectable effects.

### stepHeading

Feature scope

### visualHeading

EFX 1 in the editor

### steps

1. 10 effects to choose from.
2. According to the video, Pitch Shift is exclusive to EFX Section 1.
3. According to the video, EQ is also exclusive to EFX Section 1.

### visuals

- Video 02:15 – EFX 1 with 10 effects; Pitch Shift and EQ as special features.

## editor-efx2

### title

EFX Section 2

### mode

Editor – effects

### summary

According to the video, the second effects section offers nine selectable effects.

### stepHeading

Feature scope

### visualHeading

EFX 2 in the editor

### steps

1. 9 effects to choose from.
2. According to the video, Reverb is exclusive to EFX Section 2.

### visuals

- Video 02:20 – EFX 2 with 9 effects; Reverb as a special feature.

## editor-controller-assign

### title

Controller Assignment

### mode

Editor – Parameter Assign

### summary

Assigns an editor parameter to the EFFECT knob or to one of the three pad axes X/Y/Z.

### stepHeading

Assignment

### visualHeading

Parameter Assign in the editor

### steps

1. Change the parameter that you want to assign.
2. Open the “PARAMETER ASSIGN” tab; it shows the name of the most recently changed parameter.
3. Press the desired destination button for EFFECT, PAD X, PAD Y or PAD Z to assign the parameter.

### notes

- Example shown in the video: Parameter name = EFX1 TYPE.
- Example assignments in the panel: EFFECT → VCF ENVELOPE DEPTH (ENV MOD); PAD X → OFFSET SQR PITCH; PAD Y → VCO WHITE NOISE LEVEL; PAD Z → EFX2 CS SW.
- The four modulation/controller destinations are EFFECT KNOB, PAD X, PAD Y and PAD Z.

### visuals

- Video 02:26 – Parameter Assign and example destination assignments.

## editor-pattern

### title

Pattern section in the editor

### mode

Editor – Pattern

### summary

Edits the currently selected pattern and exposes additional timing/length parameters directly in the editor.

### stepHeading

Feature scope

### visualHeading

Pattern in the editor

### steps

1. Edit the currently selected pattern.
2. Set Triplet Timing.
3. Set Gate Time.
4. Set Pattern Length.

### notes

- See also the front-panel procedures “Set pattern length” and “Triplet timing on/off”. Gate Time is additionally named explicitly as an editor function in the video.

### visuals

- Video 02:32 – Pattern editor with Triplet Timing, Gate Time and Pattern Length.

## editor-misc

### title

Misc section in the editor

### mode

Editor – Misc

### summary

Groups additional system, MIDI and patch functions of the editor.

### stepHeading

Feature scope

### visualHeading

Misc in the editor

### steps

1. Portamento settings.
2. MIDI settings.
3. Bender settings.
4. Control Change parameters.
5. Save/Load patch functions.

### notes

- Important note shown directly in the editor panel in the video: “Press receive before load or save patch” – press RECEIVE before loading or saving a patch.

### visuals

- Video 02:38 – Misc with Portamento/MIDI/Bender, CC parameters and Save/Load.

## editor-save-load

### title

Save and load sounds on the computer

### mode

Editor – Patch Library

### summary

Uses the editor’s Save/Load functions for a sound library outside the hardware slots.

### stepHeading

Options according to the video

### visualHeading

Save/Load in the editor

### steps

1. Build your own library of TB-3 sounds on the computer.
2. Exchange saved sounds with other TB-3 users.
3. Load sounds directly – according to the video, both in standalone operation and in a DAW.

### notes

- Press RECEIVE before Load/Save; this note appears in the Misc panel in the video.

### visuals

- Video 02:45 – Save/Load Sounds and a sound library on the computer.

## keyboard-mode

### title

Set Keyboard Mode

### mode

Realtime Global Setting

### summary

Selects Local Off, Local On or Controller Only.

### steps

1. Hold down SCATTER.
2. Use VALUE to choose OFF, On or Ctr.

### notes

- OFF: sound only via external MIDI messages; keypad and knobs disabled.
- On: sound via the device controls and external MIDI messages.
- Ctr: no internal sound; MIDI output only, for controlling other synths.

## midi-channel

### title

Set MIDI channel

### mode

Startup Mode 1

### summary

Sets the MIDI transmit/receive channel or Omni mode.

### steps

1. Hold down SCATTER.
2. Restart the device to open Startup Mode 1.
3. Use VALUE to choose OFF, C1–C16 or OnN.

### notes

- Default according to the guide: C2.
- OFF: no MIDI channel, front-panel input only.
- C1–C16: transmit and receive channels are identical.
- OnN: Omni receive; transmit on channel 2.

## midi-clock

### title

MIDI Clock Source

### mode

Startup Mode 1

### summary

Switches between Auto (DIN/USB) and internal clock operation.

### steps

1. Hold down SCATTER.
2. Restart the device to open Startup Mode 1.
3. PAD C: lit = Auto; dimmed = Internal.

### notes

- Auto accepts DIN and USB clock; if both are present, USB has priority.
- Default according to the guide: Lit/Auto.

## midi-thru

### title

Use MIDI OUT as THRU

### mode

Startup Mode 1

### summary

Switches MIDI OUT between normal output and MIDI THRU.

### steps

1. Hold down SCATTER.
2. Restart the device to open Startup Mode 1.
3. PAD D: lit = THRU on; dimmed = normal MIDI OUT.

### notes

- Default according to the guide: Lit/On.

## pad-sens

### title

Keypad/Pad-Z sensitivity

### mode

Startup Mode 1

### summary

Sets Pad-Z sensitivity from 0 to 10.

### steps

1. Hold down SCATTER.
2. Restart the device to open Startup Mode 1.
3. Hold down KEYBOARD.
4. Use VALUE to set 0–10; 10 = highest sensitivity.

### notes

- Default according to the guide: 3.
- According to the footnote, Pad Z works like a switch for parameters with two states.

## master-tune

### title

Master Tune

### mode

Startup Mode 1

### summary

Sets the global tuning in 1 Hz steps.

### steps

1. Hold down SCATTER.
2. Restart the device to open Startup Mode 1.
3. Hold down ENV MOD.
4. Use VALUE to choose 430–450 Hz.

### notes

- Default according to the guide: 440 Hz.

## realtime-tune

### title

Realtime Tuning

### mode

Sequencer, STEP & REALTIME REC OFF

### summary

Globally detunes in 0.1 steps from -7.0 to +7.0.

### steps

1. Hold down ENV MOD.
2. Use the PAD to set -7.0 to +7.0.

### notes

- According to the guide, 0.1 corresponds to 10 cents; total range -700 to +700 cents.
- Caution: affects the device globally.

## led-demo

### title

LED Demo Mode

### mode

Startup Mode 1

### summary

Sets after how many minutes the LED demo starts.

### steps

1. Hold down SCATTER.
2. Restart the device to open Startup Mode 1.
3. Hold down TEMPO.
4. Use VALUE to set OFF through 30 minutes.

### notes

- Default according to the guide: OFF.

## select-sound

### title

Select sound

### mode

Keyboard Mode

### summary

Navigates through user and preset sounds.

### steps

1. Turn VALUE to move one sound at a time.
2. For steps of 10, hold down KEYBOARD.
3. Then turn VALUE.

### notes

- U01–U15: User
- A01–A26: TB-303
- b01–b51: Bass
- C01–C40: Lead
- d01–d17: SFX
- According to the editor video, MIDI can directly select only preset sounds; custom user sounds cannot be selected directly this way.

## select-pattern

### title

Select pattern

### mode

Pattern Select Mode

### summary

Selects one or multiple patterns for playback.

### steps

1. Choose the pattern with VALUE – alternatively PAD + -OCT/+OCT.
2. Move your finger across the PAD to select multiple patterns for playback.

## firmware

### title

Display firmware version

### mode

Startup Mode 2

### summary

Starts version mode and displays the installed firmware.

### steps

1. Hold down STEP REC.
2. Also hold down REALTIME REC.
3. Restart the device.
4. Press PLAY/STOP; the display shows the version.

### notes

- Example in the guide: 104 = version 1.04.
- The guide names 1.10 / 110 as the final version and advises against updating if it is already installed.
- Additional source: the editor video shows a different check method using TEMPO + restart and names 1.10 as the final firmware. That method is documented separately under “TB-3 Editor” and is not silently merged with the front-panel guide here.

## factory-reset

### title

Factory Reset

### mode

Startup Mode 3

### summary

Resets the device to factory settings.

### steps

1. Hold down REALTIME REC.
2. Restart the device.
3. When rSt appears, press the flashing PLAY/STOP.
4. After CNP/CoMPlete, restart again.

### notes

- Back up patterns and note your settings first; they will be reset.
- To cancel, restart instead of confirming.
- Afterwards, restore patterns and settings if required.

