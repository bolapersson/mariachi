# Hybrida versionen — en sida + EN gemensam medlemsida

Struktur (endast två HTML-filer):
- index.html — hela sajten på en sida, medlemsrutnaget är IDENTISKT med en-sidans layout (fulla kort med bios); hela kortet är klickbart
- medlem.html — visar medlemmens kort i exakt samma stil/storlek som i rutnaget + länk "← Alla medlemmar" tillbaka till galleriet
- members.js — kortens innehåll samlade (redigera medlemmar här)
- style.css, i18n.js, gigs.js — delade filer

Underhåll:
- Medlemsändring: ändra i members.js (och motsvarande kort i index.html)
- Spelningar: gigs.json laddas automatiskt på index

Bilder/media som måste ligga i samma mapp som HTML-filerna:
- Logo_Transparent.png, Hero.jpg
- Alejandro.jpg, Annemarieke.jpg, Daniel.jpg, Daniela.jpg, Eric.jpg, Helena.jpg, Niklas.jpg, Ola.jpg, Sebastian.jpg, Sigrid.jpg, Simone.jpg
- grona-lund.jpg, grona-lund2.jpg
- gigs.json (valfritt — automatisk spelningsfeed; annars visas fallbacken)

Publicering: mappens innehåll i repot — mappens namn blir URL:en.
