# Hybrida versionen — en sida + EN gemensam medlemsida

Struktur (endast två HTML-filer):
- index.html — hela sajten på en sida: hero, spelningar, videos, foton, om oss (kompakta medlemskort), boka
- medlem.html — EN sida för alla tolv musiker; vem som visas styrs av länken: medlem.html?n=sebastian
- members.js — all medlemsdata (namn, roll, bio, foto) samlad på ett ställe
- style.css, i18n.js, gigs.js — delade filer

Underhåll:
- Ny medlem: (1) lägg till i members.js, (2) lägg ett kompakt kort i index.html, (3) översättningsnycklar m-<namn>-role/bio i i18n.js
- Byta bio/foto/roll: ändra bara i members.js
- Spelningar: gigs.json laddas automatiskt på index

Bilder/media som måste ligga i samma mapp som HTML-filerna:
- Logo_Transparent.png, Hero.jpg
- Alejandro.jpg, Annemarieke.jpg, Daniel.jpg, Daniela.jpg, Eric.jpg, Helena.jpg, Niklas.jpg, Ola.jpg, Sebastian.jpg, Sigrid.jpg, Simone.jpg
- grona-lund.jpg, grona-lund2.jpg
- gigs.json (valfritt — automatisk spelningsfeed; annars visas fallbacken)

Publicering: lägg mappens innehåll i repot (t.ex. under /hybrid) — mappens namn ger versionen sin egen URL.
