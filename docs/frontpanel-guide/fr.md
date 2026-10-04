# TB-3 Frontpanel Guide (fr)

## language

fr

## ui

### title

Roland TB-3 – Guide interactif du panneau avant et de l’éditeur

### sub

Fusion du « TB-3 Front Panel Guide 1.05 » et de la vidéo du TB-3 Editor · panneau avant, configuration et paramètres cachés de l’éditeur

### search

Rechercher, p. ex. pattern, Ring Mod, Receive, MIDI, Swing …

### quick

- Copier un pattern
- Enregistrer le son
- MIDI Clock
- Factory Reset
- Configurer l’éditeur

### stepsHeading

Procédure

### visualHeading

Sur l’appareil

### legendHold

[Touche] = maintenir enfoncée selon le guide d’origine

### legendClick

Cliquer sur une étape la met en évidence sur l’image.

### source

Source :

### empty

Aucune procédure correspondante trouvée.

### front

Panneau avant

### rear

Panneau arrière / connexions

### noGraphic

Aucun graphique supplémentaire de l’appareil n’est nécessaire pour cette entrée.

### footer

Sources : TB-3 Front Panel Guide 1.05 et « TB-3 Sound & Pattern Editor – Edit your TB-3 and Backup/Restore Patches! ». Les procédures du panneau avant et le contenu de la vidéo ont été fusionnés. La configuration initiale Ctrlr/TB-3 a en plus été concrétisée sous forme de procédure pas à pas vérifiée en pratique. Les divergences entre les sources n’ont pas été corrigées silencieusement. Lorsque les indications diffèrent, cette différence reste explicitement documentée.

### language

Langue

### holdMatch

Maintenir

## categories

### Patches & Patterns

Patches & Patterns

### TB-3 Editor

TB-3 Editor

### Global Settings

Paramètres globaux

### Navigation

Navigation

### Other Functions

Autres fonctions

## save-sound

### title

Enregistrer un patch sonore

### mode

Séquenceur OFF

### summary

Enregistre le son actuel dans l’un des emplacements utilisateur U01–U15.

### steps

1. Maintenir ENV MOD enfoncé.
2. Avec VALUE, sélectionner un emplacement utilisateur U01–U15.
3. Confirmer avec PLAY/STOP.

### notes

- Le guide ne mentionne que U01–U15 comme emplacements utilisateur enregistrables.
- Divergence entre les sources : la vidéo de l’éditeur indique qu’avec le firmware 1.10, les sons peuvent être enregistrés dans 16 emplacements utilisateur matériels ; le guide du panneau avant mentionne ici U01–U15. Les deux indications restent donc documentées séparément.

## link-sound

### title

Associer un son à un pattern

### mode

STEP ou REALTIME REC ON

### summary

Associe un patch sonore à un pattern.

### steps

1. Sélectionner le pattern souhaité de 1-1 à 8-8.
2. Maintenir ENV MOD enfoncé.
3. Avec VALUE, choisir le numéro du patch.
4. Confirmer avec PLAY/STOP.

## pattern-lock

### title

Pattern Lock

### mode

STEP & REALTIME REC OFF

### summary

Détermine si les modifications du pattern sont enregistrées normalement.

### steps

1. Maintenir PTN SELECT enfoncé.
2. Avec VALUE, choisir entre OFF et Loc.

### notes

- Avec Loc, les modifications du pattern ne sont pas enregistrées normalement selon le guide.

## pattern-steps

### title

Définir la longueur du pattern

### mode

Keyboard Mode

### summary

Règle le nombre de pas d’un pattern de 1 à 32.

### steps

1. Maintenir STEP REC enfoncé.
2. Avec VALUE, choisir de 1 à 32 pas.

### notes

- Ce réglage est enregistré pour chaque pattern.

## copy-pattern

### title

Copier un pattern

### mode

Séquenceur OFF

### summary

Copie un pattern vers un emplacement de destination.

### steps

1. Sélectionner le pattern source de 1-1 à 8-8.
2. Maintenir PTN SELECT enfoncé.
3. Toucher le PAD correspondant à la source de copie.
4. Choisir la destination avec VALUE – ou avec PAD + -OCT/+OCT.
5. Confirmer avec PLAY/STOP.

### notes

- La formulation « Tap the PAD to copy from » provient telle quelle du guide et n’y est pas expliquée davantage.

## delete-pattern

### title

Supprimer un pattern

### mode

Séquenceur OFF

### summary

Supprime le pattern actuellement sélectionné après confirmation.

### steps

1. Sélectionner un pattern de 1-1 à 8-8.
2. Maintenir PTN SELECT enfoncé.
3. Toucher PAD CLEAR ; Clr apparaît à l’écran.
4. Confirmer avec PLAY/STOP.

## random-notes

### title

Randomiser les notes

### mode

Pattern Select Mode

### summary

Randomise les notes du pattern.

### steps

1. Maintenir PTN SELECT enfoncé.
2. Appuyer sur SCATTER.

## random-extras

### title

Randomiser accents, glides et octaves

### mode

Keyboard Mode

### summary

Semi-randomise les accents, les glides et les octaves.

### steps

1. Maintenir KEYBOARD enfoncé.
2. Appuyer sur SCATTER.

### notes

- D’après la note du guide, le pavé tactile du TB-3 ne réagit pas à la vélocité ; Accent est déclenché par des valeurs de vélocité MIDI externes supérieures à 100.

## transpose

### title

Transposer le pattern

### mode

STEP & REALTIME REC OFF

### summary

Modifie la tonalité de base du pattern par demi-tons sans réécrire les notes du pattern.

### steps

1. Maintenir KEYBOARD enfoncé.
2. Sur le PAD, déplacer la tonalité de base par demi-tons.

### notes

- Le guide décrit Transpose comme non destructif : les notes restent inchangées ; seule la tonalité de départ/de base est enregistrée.

## pitch-shift

### title

Décaler la hauteur du pattern

### mode

STEP ou REALTIME REC ON

### summary

Décale toutes les notes du pattern par demi-tons.

### steps

1. Maintenir KEYBOARD enfoncé.
2. Avec VALUE, décaler toutes les notes du pattern par demi-tons.

### notes

- Attention : selon le guide, Pitch Shift est destructif. Si des notes sont déplacées au-delà de la limite supérieure ou inférieure, il n’est pas toujours possible de retrouver leur hauteur d’origine.

## swing

### title

Régler le swing

### mode

Réglage global en temps réel

### summary

Règle un swing positif ou négatif.

### steps

1. Maintenir TEMPO enfoncé.
2. Avec VALUE, choisir une valeur de -50 à +50.

## triplet

### title

Timing ternaire activé/désactivé

### mode

Keyboard Mode

### summary

Active ou désactive la base temporelle ternaire du pattern.

### steps

1. Maintenir STEP REC enfoncé.
2. Toucher TEMPO pour activer/désactiver Triplet Timing.

### notes

- Ce réglage est enregistré pour chaque pattern.

## tap-tempo

### title

Tap Tempo

### mode

Pattern Select Mode

### summary

Définit le tempo en tapant des noires.

### steps

1. Maintenir TEMPO enfoncé.
2. Toucher SCATTER au rythme des noires.

## backup

### title

Sauvegarder les patterns

### mode

Startup Mode 4

### summary

Démarre le TB-3 en mode sauvegarde et copie les fichiers de patterns sur l’ordinateur.

### steps

1. Maintenir PLAY/STOP enfoncé.
2. Redémarrer l’appareil.
3. Brancher le câble USB.
4. Copier les fichiers de patterns « TB-3 » du dossier BACKUP vers l’ordinateur.
5. Débrancher l’USB et redémarrer l’appareil.

### notes

- Selon la vidéo de l’éditeur, la méthode de sauvegarde Roland enregistre les données de patterns sur disque. L’enregistrement des patches sonores sur l’ordinateur est une fonction supplémentaire du TB-3 Editor.

## restore

### title

Restaurer les patterns

### mode

Startup Mode 5

### summary

Recopie les fichiers de patterns sauvegardés dans le dossier RESTORE du TB-3.

### steps

1. Maintenir PLAY/STOP enfoncé.
2. Redémarrer l’appareil.
3. Brancher le câble USB.
4. Copier les fichiers de patterns de l’ordinateur dans le dossier RESTORE du TB-3.
5. Débrancher l’USB et redémarrer l’appareil.

### notes

- Remarque sur les sources : le guide disponible indique la même combinaison de démarrage, [PLAY/STOP] + redémarrage, pour la sauvegarde et la restauration. Cela n’a volontairement pas été « corrigé » ici.
- Cette procédure de restauration concerne les fichiers de patterns. Pour les patches sonores, la vidéo de l’éditeur décrit un workflow Load/Save distinct dans l’éditeur.

## editor-why

### title

Pourquoi utiliser le TB-3 Editor ?

### mode

Contexte / fonctions disponibles

### summary

Explique quelles fonctions du TB-3 ne sont pas accessibles, ou seulement de manière limitée, depuis le panneau avant et ce que l’éditeur ajoute.

### stepHeading

Ce que la vidéo établit

### visualHeading

Vue d’ensemble de l’éditeur

### steps

1. D’après la vidéo, le TB-3 est bien plus qu’un simple clone du TB-303 ; derrière le panneau avant simplifié se trouve un synthétiseur plus complet.
2. Les paramètres avancés ne sont pas accessibles directement depuis le panneau avant et sont pilotés via System Exclusive (SysEx).
3. À l’origine, Roland ne proposait aucun moyen direct de sauvegarder les patches sonores sur un ordinateur.
4. Après le firmware 1.10, les sons pouvaient, d’après la vidéo, être enregistrés dans 16 emplacements utilisateur matériels ; via la méthode Roland, seules les données de patterns pouvaient toujours être sauvegardées sur disque.
5. D’après la vidéo, le MIDI permet de sélectionner directement uniquement les sons Preset, pas les sons User.
6. L’éditeur vise à combler ces lacunes : éditer les sons du TB-3, les enregistrer sur l’ordinateur et les recharger.

### notes

- SysEx = messages MIDI System Exclusive spécifiques au fabricant, utilisés pour communiquer avec les appareils.
- L’indication « 16 emplacements utilisateur matériels » provient de la vidéo et diffère du guide du panneau avant, qui mentionne U01–U15 lors de l’enregistrement.

### visuals

- Vidéo 00:41.5 – le TB-3 Editor est présenté comme la solution pour Edit/Save/Load.

## editor-setup

### title

Configurer l’éditeur – configuration standalone fonctionnelle

### mode

Windows / Ctrlr Standalone / connexion USB directe

### summary

Configuration initiale concrète permettant à l’interface TB-3 dans Ctrlr de communiquer avec le matériel. Pour le premier test, connecter le TB-3 directement en USB et ne pas intercaler de DAW.

### stepHeading

Configuration – étape par étape

### visualHeading

Référence vidéo / éditeur

### steps

1. Commencer par connecter le TB-3 directement au PC Windows via USB et l’allumer. Pour la configuration initiale, laisser Bitwig, Ableton et les autres programmes fermés s’ils peuvent occuper le port MIDI du TB-3.
2. Installer le pilote Roland TB-3. Il fournit la connexion USB-MIDI et, d’après la vidéo, rend également le TB-3 disponible comme interface audio 24 bits/96 kHz.
3. Vérifier le firmware. Pour la méthode montrée dans la vidéo : éteindre le TB-3, maintenir TEMPO enfoncé et rallumer l’appareil. Idéalement, la version 1.10 s’affiche ; appuyer sur PLAY/STOP pour quitter l’affichage de version.
4. Pour partir d’un état défini, régler ou vérifier le canal MIDI du TB-3 sur C2. L’essentiel est que le matériel et Ctrlr utilisent le même canal MIDI. D’après le guide du panneau avant, C2 est la valeur par défaut.
5. Lancer Ctrlr comme application standalone. Pour la première mise en service, ne pas encore l’utiliser comme VST/plugin dans une DAW.
6. Dans Ctrlr, utiliser File → Open Panel pour ouvrir le panneau personnalisé TB-3 du bundle de l’éditeur (le fichier de panneau TB-3 fourni, généralement .bpanelz). L’interface verte et noire du TB-3 Editor doit alors être visible.
7. Dans Ctrlr, sélectionner TB-3 dans MIDI → Input → Device.
8. Dans Ctrlr, sélectionner le canal 2 dans MIDI → Input → Channel si le TB-3 est réglé sur C2.
9. Dans Ctrlr, sélectionner également TB-3 dans MIDI → Output → Device.
10. Dans Ctrlr, sélectionner également le canal 2 dans MIDI → Output → Channel. L’envoi et la réception sont ainsi routés de façon identique vers le TB-3.
11. Exécuter ensuite MIDI → Refresh Devices si cette entrée de menu est disponible. Sinon, fermer complètement Ctrlr puis le relancer.
12. Sélectionner sur le TB-3 un son Preset ou User normal.
13. Cliquer sur RECEIVE dans le TB-3 Editor. Le panneau demande alors au matériel les valeurs actuelles du patch.
14. Critère de réussite : les contrôles et valeurs de l’interface de l’éditeur se mettent à jour et correspondent ensuite au patch sélectionné sur le TB-3. À partir de là, la connexion bidirectionnelle de l’éditeur est établie.

### notes

- Chaîne de signal validée pour la première configuration : TB-3 ⇄ USB ⇄ pilote Roland ⇄ Ctrlr Standalone ⇄ TB-3 Editor.
- Important : les champs « MIDI OUT CH » et « MIDI IN CH » dans la zone verte MISC du TB-3 Editor ne constituent pas la sélection de port de base de Ctrlr. La connexion à l’appareil se configure en haut dans le menu MIDI de Ctrlr via Input Device/Channel et Output Device/Channel.
- Si RECEIVE ne produit aucun effet, vérifier d’abord seulement trois points : Input Device = TB-3, Output Device = TB-3 et les deux canaux correspondent au canal MIDI du matériel. N’examiner d’autres causes qu’ensuite.
- Si les ports semblent corrects mais qu’aucune communication ne s’établit, fermer pour le test les autres applications MIDI/DAW et redémarrer/actualiser Ctrlr ou les périphériques.
- Avant de charger ou d’enregistrer un patch dans l’éditeur, exécuter d’abord RECEIVE afin que le panneau contienne l’état actuel du TB-3.

### visuals

- Vidéo 00:57.5 – installer d’abord le pilote Roland TB-3.
- Vidéo 01:21.5 – ouvrir Ctrlr, charger le Custom Panel et configurer MIDI In/Out.
- Vidéo 01:25 – choisir un son sur le TB-3 et appuyer sur RECEIVE dans l’éditeur.
- Vidéo 01:30 – réussite : le panneau reprend visiblement les valeurs du patch du TB-3.

## editor-firmware-check

### title

Vérifier la version du firmware – méthode vidéo

### mode

Démarrage / indication alternative de la source

### summary

La vidéo de l’éditeur montre sa propre combinaison de touches pour vérifier la version du firmware.

### steps

1. Maintenir TEMPO enfoncé.
2. Redémarrer l’appareil en maintenant TEMPO enfoncé.
3. La version du firmware installé apparaît à l’écran.
4. D’après la vidéo, l’affichage de version reste visible jusqu’à ce que PLAY/STOP soit pressé.

### notes

- La vidéo indique 1.10 comme version finale du firmware.
- Conflit entre les sources : le Front Panel Guide 1.05 documente une autre combinaison de touches sous « Other Functions → Firmware-Version anzeigen ». Les deux méthodes sont donc conservées séparément.

### visuals

- Vidéo 01:01 – la vidéo indique le firmware 1.10 comme version finale.
- Vidéo 01:04 – maintenir TEMPO enfoncé et redémarrer.
- Vidéo 01:07 – la version reste visible jusqu’à l’appui sur PLAY/STOP.

## editor-sound-sources

### title

Sound Sources : VCO & Ring Mod

### mode

Éditeur – paramètres de synthèse

### summary

Montre les sources d’oscillateur et de modulation en anneau accessibles dans l’éditeur.

### stepHeading

Paramètres disponibles

### visualHeading

Sound Sources dans l’éditeur

### steps

1. VCO : Saw, Square et une onde Sine accordable.
2. Sources VCO supplémentaires : White Noise et Pink Noise.
3. Entrées Ring Mod : Sawtooth, Square, Ring/Sine ainsi que White/Pink Noise.
4. Pour le Ring Mod, la vidéo mentionne également Depth et Level.

### visuals

- Vidéo 01:37 – formes d’onde VCO et sources de bruit.
- Vidéo 01:42 – entrées Ring Mod, Depth et Level.

## editor-vcf

### title

Section VCF

### mode

Éditeur – paramètres de synthèse

### summary

Étend l’accès au filtre avec plusieurs paramètres qui ne sont pas exposés directement sur le panneau avant.

### stepHeading

Paramètres disponibles

### visualHeading

VCF dans l’éditeur

### steps

1. Cutoff
2. Resonance
3. Accent
4. Keyfollow
5. Envelope Amount
6. Enveloppe ADSR

### visuals

- Vidéo 01:47 – Cutoff, Resonance, Accent, Keyfollow, Env Amount et ADSR.

## editor-lfo

### title

Section LFO

### mode

Éditeur – paramètres de synthèse

### summary

Montre les options LFO avancées et leurs destinations de modulation.

### stepHeading

Paramètres disponibles

### visualHeading

LFO dans l’éditeur

### steps

1. Quatre formes d’onde plus Sample & Hold.
2. Modulation/routage LFO vers VCO, VCF et VCA.
3. Options supplémentaires : Sync, Retrig, Delay et CV Offset.

### visuals

- Vidéo 01:52 – formes d’onde, S&H, VCO/VCF/VCA, Sync, Retrig, Delay et CV Offset.

## editor-crossmod

### title

Cross Mod

### mode

Éditeur – paramètres de synthèse

### summary

Propose huit combinaisons Cross Mod à partir des sources citées dans la vidéo.

### stepHeading

Sources disponibles

### visualHeading

Cross Mod dans l’éditeur

### steps

1. Huit combinaisons de Saw, Square, White Noise et Pink Noise.

### visuals

- Vidéo 01:57 – huit combinaisons Cross Mod.

## editor-vca

### title

Section VCA

### mode

Éditeur – paramètres de synthèse

### summary

Étend la section d’amplification avec des paramètres liés à l’enveloppe et au LFO.

### stepHeading

Paramètres disponibles

### visualHeading

VCA dans l’éditeur

### steps

1. Enveloppe ADSR.
2. Input to LFO / entrée liée au LFO d’après la vidéo.

### notes

- L’intitulé « INPUT TO LFO » apparaît ainsi dans la vidéo et n’est pas interprété davantage ici.

### visuals

- Vidéo 02:01 – ADSR Envelope et Input to LFO.

## editor-distortion

### title

Section Distortion

### mode

Éditeur – effets

### summary

Montre le choix étendu de distorsions et les paramètres sonores associés.

### stepHeading

Paramètres disponibles

### visualHeading

Distortion dans l’éditeur

### steps

1. 25 émulations de distorsion.
2. Drive.
3. Bottom.
4. Tone.
5. Color.
6. Wet/Dry Mix.

### visuals

- Vidéo 02:06 – 25 émulations plus Drive, Bottom, Tone, Color et Wet/Dry.

## editor-efx1

### title

EFX Section 1

### mode

Éditeur – effets

### summary

D’après la vidéo, la première section d’effets propose dix effets sélectionnables.

### stepHeading

Fonctions disponibles

### visualHeading

EFX 1 dans l’éditeur

### steps

1. 10 effets au choix.
2. D’après la vidéo, Pitch Shift est exclusif à EFX Section 1.
3. D’après la vidéo, EQ est également exclusif à EFX Section 1.

### visuals

- Vidéo 02:15 – EFX 1 avec 10 effets ; Pitch Shift et EQ comme particularités.

## editor-efx2

### title

EFX Section 2

### mode

Éditeur – effets

### summary

D’après la vidéo, la deuxième section d’effets propose neuf effets sélectionnables.

### stepHeading

Fonctions disponibles

### visualHeading

EFX 2 dans l’éditeur

### steps

1. 9 effets au choix.
2. D’après la vidéo, Reverb est exclusif à EFX Section 2.

### visuals

- Vidéo 02:20 – EFX 2 avec 9 effets ; Reverb comme particularité.

## editor-controller-assign

### title

Controller Assignment

### mode

Éditeur – Parameter Assign

### summary

Assigne un paramètre de l’éditeur au potentiomètre EFFECT ou à l’un des trois axes du pad X/Y/Z.

### stepHeading

Assignation

### visualHeading

Parameter Assign dans l’éditeur

### steps

1. Modifier le paramètre à assigner.
2. Ouvrir l’onglet « PARAMETER ASSIGN » ; le nom du dernier paramètre modifié y apparaît.
3. Appuyer sur le bouton de destination souhaité pour EFFECT, PAD X, PAD Y ou PAD Z afin d’assigner le paramètre.

### notes

- Exemple montré dans la vidéo : Parameter name = EFX1 TYPE.
- Exemples d’assignations dans le panneau : EFFECT → VCF ENVELOPE DEPTH (ENV MOD) ; PAD X → OFFSET SQR PITCH ; PAD Y → VCO WHITE NOISE LEVEL ; PAD Z → EFX2 CS SW.
- Les quatre destinations de modulation/contrôle sont EFFECT KNOB, PAD X, PAD Y et PAD Z.

### visuals

- Vidéo 02:26 – Parameter Assign et exemples d’assignations de destinations.

## editor-pattern

### title

Section Pattern dans l’éditeur

### mode

Éditeur – Pattern

### summary

Édite le pattern actuellement sélectionné et rend directement accessibles dans l’éditeur des paramètres supplémentaires de timing et de longueur.

### stepHeading

Fonctions disponibles

### visualHeading

Pattern dans l’éditeur

### steps

1. Éditer le pattern actuellement sélectionné.
2. Régler Triplet Timing.
3. Régler Gate Time.
4. Régler Pattern Length.

### notes

- Voir aussi les procédures du panneau avant « Définir la longueur du pattern » et « Timing ternaire activé/désactivé ». Gate Time est en plus explicitement mentionné dans la vidéo comme fonction de l’éditeur.

### visuals

- Vidéo 02:32 – éditeur de pattern avec Triplet Timing, Gate Time et Pattern Length.

## editor-misc

### title

Section Misc dans l’éditeur

### mode

Éditeur – Misc

### summary

Regroupe d’autres fonctions système, MIDI et de patch de l’éditeur.

### stepHeading

Fonctions disponibles

### visualHeading

Misc dans l’éditeur

### steps

1. Réglages de Portamento.
2. Réglages MIDI.
3. Réglages de Bender.
4. Paramètres Control Change.
5. Fonctions Save/Load de patch.

### notes

- Remarque importante affichée directement dans le panneau de l’éditeur dans la vidéo : « Press receive before load or save patch » – appuyer sur RECEIVE avant de charger ou d’enregistrer un patch.

### visuals

- Vidéo 02:38 – Misc avec Portamento/MIDI/Bender, paramètres CC et Save/Load.

## editor-save-load

### title

Enregistrer et charger des sons sur l’ordinateur

### mode

Éditeur – bibliothèque de patches

### summary

Utilise les fonctions Save/Load de l’éditeur pour créer une bibliothèque de sons en dehors des emplacements matériels.

### stepHeading

Possibilités selon la vidéo

### visualHeading

Save/Load dans l’éditeur

### steps

1. Créer sa propre bibliothèque de sons TB-3 sur l’ordinateur.
2. Échanger les sons enregistrés avec d’autres utilisateurs de TB-3.
3. Charger directement des sons – d’après la vidéo, aussi bien en mode standalone que dans une DAW.

### notes

- Appuyer sur RECEIVE avant Load/Save ; cette remarque apparaît dans le panneau Misc de la vidéo.

### visuals

- Vidéo 02:45 – Save/Load Sounds et bibliothèque de sons sur l’ordinateur.

## keyboard-mode

### title

Régler le Keyboard Mode

### mode

Réglage global en temps réel

### summary

Sélectionne Local Off, Local On ou Controller Only.

### steps

1. Maintenir SCATTER enfoncé.
2. Avec VALUE, choisir OFF, On ou Ctr.

### notes

- OFF : son uniquement via des messages MIDI externes ; keypad et potentiomètres désactivés.
- On : son via les commandes de l’appareil et les messages MIDI externes.
- Ctr : aucun son interne ; sortie MIDI uniquement pour piloter d’autres synthétiseurs.

## midi-channel

### title

Régler le canal MIDI

### mode

Startup Mode 1

### summary

Définit le canal MIDI d’émission et de réception ou le mode Omni.

### steps

1. Maintenir SCATTER enfoncé.
2. Redémarrer l’appareil pour ouvrir Startup Mode 1.
3. Avec VALUE, choisir OFF, C1–C16 ou OnN.

### notes

- Valeur par défaut selon le guide : C2.
- OFF : aucun canal MIDI, saisie uniquement depuis le panneau avant.
- C1–C16 : canal d’émission et de réception identique.
- OnN : réception Omni ; émission sur le canal 2.

## midi-clock

### title

Source MIDI Clock

### mode

Startup Mode 1

### summary

Bascule entre Auto (DIN/USB) et l’horloge interne.

### steps

1. Maintenir SCATTER enfoncé.
2. Redémarrer l’appareil pour ouvrir Startup Mode 1.
3. PAD C : allumé = Auto ; atténué = Internal.

### notes

- Auto accepte l’horloge DIN et USB ; si les deux sont présentes, l’USB est prioritaire.
- Valeur par défaut selon le guide : Lit/Auto.

## midi-thru

### title

Utiliser MIDI OUT comme THRU

### mode

Startup Mode 1

### summary

Bascule MIDI OUT entre sortie normale et MIDI THRU.

### steps

1. Maintenir SCATTER enfoncé.
2. Redémarrer l’appareil pour ouvrir Startup Mode 1.
3. PAD D : allumé = THRU activé ; atténué = MIDI OUT normal.

### notes

- Valeur par défaut selon le guide : Lit/On.

## pad-sens

### title

Sensibilité Keypad/Pad-Z

### mode

Startup Mode 1

### summary

Règle la sensibilité de Pad Z de 0 à 10.

### steps

1. Maintenir SCATTER enfoncé.
2. Redémarrer l’appareil pour ouvrir Startup Mode 1.
3. Maintenir KEYBOARD enfoncé.
4. Avec VALUE, régler de 0 à 10 ; 10 = sensibilité maximale.

### notes

- Valeur par défaut selon le guide : 3.
- Selon la note du guide, Pad Z fonctionne comme un interrupteur pour les paramètres à deux états.

## master-tune

### title

Master Tune

### mode

Startup Mode 1

### summary

Règle l’accordage global par pas de 1 Hz.

### steps

1. Maintenir SCATTER enfoncé.
2. Redémarrer l’appareil pour ouvrir Startup Mode 1.
3. Maintenir ENV MOD enfoncé.
4. Avec VALUE, choisir 430–450 Hz.

### notes

- Valeur par défaut selon le guide : 440 Hz.

## realtime-tune

### title

Realtime Tuning

### mode

Séquenceur, STEP & REALTIME REC OFF

### summary

Désaccorde globalement par pas de 0,1 entre -7.0 et +7.0.

### steps

1. Maintenir ENV MOD enfoncé.
2. Avec le PAD, régler de -7.0 à +7.0.

### notes

- Selon le guide, 0,1 correspond à 10 cents ; plage totale de -700 à +700 cents.
- Attention : agit globalement sur l’appareil.

## led-demo

### title

LED Demo Mode

### mode

Startup Mode 1

### summary

Détermine après combien de minutes la démo LED démarre.

### steps

1. Maintenir SCATTER enfoncé.
2. Redémarrer l’appareil pour ouvrir Startup Mode 1.
3. Maintenir TEMPO enfoncé.
4. Avec VALUE, régler de OFF à 30 minutes.

### notes

- Valeur par défaut selon le guide : OFF.

## select-sound

### title

Sélectionner un son

### mode

Keyboard Mode

### summary

Parcourt les sons User et Preset.

### steps

1. Tourner VALUE pour avancer d’un son à la fois.
2. Pour avancer par pas de 10, maintenir KEYBOARD enfoncé.
3. Puis tourner VALUE.

### notes

- U01–U15 : User
- A01–A26 : TB-303
- b01–b51 : Bass
- C01–C40 : Lead
- d01–d17 : SFX
- D’après la vidéo de l’éditeur, le MIDI permet de sélectionner directement uniquement les sons Preset ; les sons User créés par l’utilisateur ne peuvent pas être sélectionnés directement de cette façon.

## select-pattern

### title

Sélectionner un pattern

### mode

Pattern Select Mode

### summary

Sélectionne un ou plusieurs patterns pour la lecture.

### steps

1. Choisir le pattern avec VALUE – ou avec PAD + -OCT/+OCT.
2. Faire glisser le doigt sur le PAD pour sélectionner plusieurs patterns à lire.

## firmware

### title

Afficher la version du firmware

### mode

Startup Mode 2

### summary

Démarre le mode version et affiche le firmware installé.

### steps

1. Maintenir STEP REC enfoncé.
2. Maintenir également REALTIME REC enfoncé.
3. Redémarrer l’appareil.
4. Appuyer sur PLAY/STOP ; l’écran affiche la version.

### notes

- Exemple du guide : 104 = version 1.04.
- Le guide indique 1.10 / 110 comme version finale et déconseille une mise à jour si celle-ci est déjà installée.
- Source supplémentaire : la vidéo de l’éditeur montre une autre méthode de vérification avec TEMPO + redémarrage et indique 1.10 comme firmware final. Cette variante est documentée séparément sous « TB-3 Editor » et n’est pas fusionnée silencieusement avec le guide du panneau avant.

## factory-reset

### title

Factory Reset

### mode

Startup Mode 3

### summary

Réinitialise l’appareil aux réglages d’usine.

### steps

1. Maintenir REALTIME REC enfoncé.
2. Redémarrer l’appareil.
3. Lorsque rSt apparaît, appuyer sur PLAY/STOP qui clignote.
4. Après CNP/CoMPlete, redémarrer à nouveau.

### notes

- Sauvegarder d’abord les patterns et noter les réglages ; ils seront réinitialisés.
- Pour annuler, redémarrer au lieu de confirmer.
- Restaurer ensuite les patterns et les réglages si nécessaire.

