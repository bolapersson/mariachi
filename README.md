# Mariachi Fiesta México — webbsidan

En sida + EN gemensam medlemsida. Allt ligger i repo-roten och publiceras
direkt på https://bolapersson.github.io/mariachi/ (senare: mariachi.se).

## Filer

- **index.html** — hela sajten på en sida: hero med event-banner (31 OKT →
  Köp biljetter), spelningar, videos, foton, om oss, bokning, e-postlista,
  footer med sociala medier. Musikerkorten (foto + namn + instrument, inga
  bios) klickas vidare till medlem.html.
- **medlem.html** — visar ett medlemskort i samma stil + "Tillbaka till
  startsidan"-knapp.
- **members.js** — kortens innehåll samlade (redigera medlemmar här).
- **i18n.js** — alla texter på svenska, engelska och spanska.
- **style.css** — design.
- **gigs.js** — spelningslogik (gigs.json laddas automatiskt om den finns).
- **sitemap.xml, robots.txt** — sökmotor-optimering (SEO).

## Bilder/media i samma mapp

- Logo_Transparent.png, Hero.jpg
- Alejandro.jpg, Annemarieke.jpg, Daniel.jpg, Daniela.jpg, Eric.jpg,
  Helena.jpg, Niklas.jpg, Ola.jpg, Sebastian.jpg, Sigrid.jpg, Simone.jpg
- grona-lund.jpg, grona-lund2.jpg
- gigs.json (valfritt — automatisk spelningsfeed; annars visas fallbacken)

## Underhåll

- **Medlemsändring:** ändra i members.js (och motsvarande kort i index.html).
- **Nytt event:** uppdatera event-bannern i heron på index.html (datum,
  namn, länk) + sektionen "Kommande spelningar".
- **Språktexter:** i18n.js — alla tre språk samlade.

## SEO-redo

Meta-titel, beskrivning, Schema.org (MusicGroup + event) och Open Graph är
konfigurerade. När mariachi.se aktiveras: uppdatera URL:erna i index.html
(Schema/og), sitemap.xml och robots.txt, samt verifiera i Google Search
Console och begär indexering.
