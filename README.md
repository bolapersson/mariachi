# Mariachi Fiesta México — hemsida

Engsidig hemsida (HTML/CSS/JS, inga ramverk) publicerad via **GitHub Pages**.

## Filer

| Fil | Beskrivning |
|---|---|
| `index.html` | Hela hemsidan (HTML, CSS och JS i en fil) |
| `Hero.jpg`, `Logo_Transparent.png`, `grona-lund2.jpg`, `Gallery Photo-3.jpg` m.fl. | Bilder som används på sidan |
| `gigs.json` | Spelningsfeed — se "Spelningslistan" nedan |

## Publicera ändringar

1. Gå till repot på GitHub → **Add file → Upload files**
2. Dra in `index.html` (och eventuellt ändrade bilder)
3. **Commit changes** → live på GitHub Pages inom 1–2 minuter

## Språk

Sidan har tre språk (SV/EN/ES) med flaggknappar uppe till höger. All text finns i `i18n`-objektet i `<script>`-delen av `index.html` — ändra texten i alla tre språkblocken (sv/en/es) när något uppdateras.

## Spelningslistan (gigs.json)

Sektionen "Kommande spelningar" visar först en hårdkodad fallback-spelning. Om filen `gigs.json` finns i repot hämtas listan automatiskt därifrån istället — nya spelningar läggs till i filen utan att röra HTML-koden.

**Fält (svenska fältnamn!):**

| Fält | Obligatoriskt | Beskrivning |
|---|---|---|
| `datum` | ✅ | ÅÅÅÅ-MM-DD (styr sorteringen och datumrutan) |
| `titel` | ✅ | Spelningens namn (kan länkas med `url`) |
| `plats` | ✅ | Plats/lokal |
| `starttid` | – | `"11:00"` |
| `sluttid` | – | `"17:00"` |
| `beskrivning` | – | Kort info, visas efter plats/tid |
| `url` | – | Länk (t.ex. event-sida) — titeln blir klickbar |

**Exempel — en spelning:**

```json
[
  {
    "datum": "2026-10-31",
    "titel": "Fiesta en el cementerio — Fest på kyrkogården",
    "plats": "Etnografiska museet",
    "starttid": "11:00",
    "sluttid": "17:00",
    "beskrivning": "Día de Muertos med folkdans, mariachi & marknad"
  }
]
```

**Flera spelningar:** lägg till fler objekt i samma lista — skilj dem med komma. Sorteringen sköter sig själv (tidigaste datumet först). Spelningar som passerats tas bara bort ur filen.

```json
[
  {
    "datum": "2026-10-31",
    "titel": "Fiesta en el cementerio",
    "plats": "Etnografiska museet",
    "starttid": "11:00"
  },
  {
    "datum": "2026-12-12",
    "titel": "Julbord med mariachi",
    "plats": "Stockholm",
    "starttid": "18:00",
    "url": "https://exempel.se/julbord"
  }
]
```

**Viktigt:**

- Filen måste vara giltig JSON: **komma mellan** objekten, men **inget komma** efter det sista
- Datumformatet `ÅÅÅÅ-MM-DD` (fyrsiffrigt år, nollförskriven månad) krävs för att sorteringen ska fungera
- Redigera enklast direkt på GitHub: klicka på `gigs.json` → pennan → ändra → **Commit changes**
- Tänk på att varje `"` ska vara vanliga raka citattecken — kopiera inte från Word som kan ge "typografiska" citattecken
- Om filen saknas eller hämtningen misslyckas visas fallback-spelningen igen

## Besöksstatistik — GoatCounter (INTE aktiverad ännu)

Längst ner i `index.html` ligger ett förberett skript för [GoatCounter](https://goatcounter.com) — en cookie-fri, GDPR-vänlig besöksräknare (öppen källkod, gratis för icke-kommersiell användning).

**Status:** platshallaren `ERAT-KOD` är ännu inte utbytt → inget räknas, sidan påverkas inte.

**Aktivera (när band-accesserna är klara):**

1. Skapa gratiskonto på goatcounter.com → välj en kod, t.ex. `mariachifiesta`
2. I `index.html`, ersätt `ERAT-KOD` i denna rad med er kod:
   ```html
   <script data-goatcounter="https://ERAT-KOD.goatcounter.com/count" async src="//gc.zgo.at/count.js"></script>
   ```
3. Commit → räknaren börjar räkna vid nästa sidvisning
4. Statistik visas på `dinkod.goatcounter.com` (kan göras publik i inställningarna, men beslutat: **ingen publik länk på hemsidan tills vidare**)

## GDPR / personuppgifter

Bokningsformuläret skickar namn/e-post/telefon till bandets e-post. Texten i formuläret anger att uppgifterna endast används för att planera bokningen, inte delas med tredje part och inte används för marknadsföring. Ingen cookie-banner krävs (inga cookies, ingen tracking) — GoatCounter använder ingen persondata.

## Bilder & rättigheter

Foto: © Karen Pérez Guzmán, © Nina m.fl. — ange fotograf vid nya bilder i videokortens underrubriker.
