# Mariachi Fiesta México — hemsida

Engsidig hemsida (HTML/CSS/JS, inga ramverk) publicerad via **GitHub Pages**.

## Filer

| Fil | Beskrivning |
|---|---|
| `index.html` | Hela hemsidan (HTML, CSS och JS i en fil) |
| `Hero.jpg`, `Logo_Transparent.png`, `grona-lund2.jpg`, `Gallery Photo-3.jpg` m.fl. | Bilder som används på sidan |
| `gigs.json` | *(Valfri)* spelningsfeed — se "Spelningar" nedan |

## Publicera ändringar

1. Gå till repot på GitHub → **Add file → Upload files**
2. Dra in `index.html` (och eventuellt ändrade bilder)
3. **Commit changes** → live på GitHub Pages inom 1–2 minuter

## Språk

Sidan har tre språk (SV/EN/ES) med flaggknappar uppe till höger. All text finns i `i18n`-objektet i `<script>`-delen av `index.html` — ändra texten i alla tre språkblocken (sv/en/es) när något uppdateras.

## Spelningslistan (gigs.json)

Sektionen "Kommande spelningar" visar först en hårdkodad fallback-spelning. Om en fil `gigs.json` finns i repot hämtas listan automatiskt därifrån istället (små bokningar/tillfälligheter kan läggas dit utan att röra HTML-koden). Format:

```json
[
  {
    "date": "2026-10-31",
    "title": "Fiesta en el cementerio — Fest på kyrkogården",
    "place": "Etnografiska museet",
    "time": "kl 11:00–17:00"
  }
]
```

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
