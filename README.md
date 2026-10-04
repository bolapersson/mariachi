# mariachi.se — hemsida (designutkast)

Så här publicerar du på ditt personliga GitHub-konto (flyttas till bandkontot senare):

## Steg för steg — GitHub Pages

1. Gå till **github.com/new** (du är redan inloggad)
2. Repository name: **mariachi** (eller vad du vill) — välj **Public**, klicka "Create repository"
3. På den nya repots sida: klicka **"uploading an existing file"**-länken
4. Dra in **index.html** (och README.md) från den här mappen, klicka **"Commit changes"**
5. Gå till repots **Settings → Pages**
6. Under "Build and deployment": Source = **Deploy from a branch**, Branch = **main** /(root), klicka Save
7. Vänta 1–2 minuter — sidan blir live på:
   **https://DIN-ANVÄNDARNAMN.github.io/mariachi/**

## När bandet ska ta över (flytt till bandkontot)

GitHub har inbyggd transfer: **Settings → General → Danger Zone → Transfer ownership** — ange bandets kontonamn. Repot behåller historik, stars och GitHub Pages-adressen byts till bandets (`bandkonto.github.io/mariachi`). Ingen kod behöver ändras.

Senare kan ni koppa egen domän (mariachi.se) till samma repo: Settings → Pages → Custom domain.

## Att lägga till senare (markerat i koden)

- Riktig logga: byt text-logotypen i headern mot `<img src="Logo_Transparent.png" ...>` (kommentar i koden visar raden)
- Foton: Karen Pérez Guzmán + psp.gallery (ersätter platshållarna)
- YouTube-länk för "Nunca es Suficiente"-kortet
- gigs.json-feed från Group Planner (kravspec till Thomas/Resultit)
