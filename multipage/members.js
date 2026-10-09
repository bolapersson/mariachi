// All medlemsdata för medlem.html — redigeras här på ett ställe.
// Varje "card" är exakt samma kort-markup som i rutnätet på index.html.
var MEMBERS = {
  "alejandro": {
    "name": "Alejandro",
    "card": "\n        <div class=\"member-photo\">\n          <img src=\"Alejandro.jpg\" alt=\"Alejandro — fiol, vihuela och sång\" loading=\"lazy\" onerror=\"this.replaceWith(Object.assign(document.createElement('div'),{className:'member-ph',style:'aspect-ratio:3/4;background:linear-gradient(150deg,#7a2d14,#3a1a0e);'}));\" />\n        </div>\n        <div class=\"member-name\">Alejandro</div>\n        <div class=\"member-role\" data-i18n=\"m-alejandro-role\">Fiol, vihuela &amp; sång</div>\n        <p class=\"member-bio\" data-i18n=\"m-alejandro-bio\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>"
  },
  "annemarieke": {
    "name": "Annemarieke",
    "card": "\n        <div class=\"member-photo\">\n          <img src=\"Annemarieke.jpg\" alt=\"Annemarieke\" loading=\"lazy\" onerror=\"this.replaceWith(Object.assign(document.createElement('div'),{className:'member-ph',style:'aspect-ratio:3/4;background:linear-gradient(150deg,#7a2d14,#3a1a0e);'}));\" />\n        </div>\n        <div class=\"member-name\">Annemarieke</div>\n        <div class=\"member-role\" data-i18n=\"m-annemarieke-role\">Fiol &amp; sång</div>\n        <p class=\"member-bio\" data-i18n=\"m-annemarieke-bio\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>"
  },
  "daniel": {
    "name": "Daniel",
    "card": "\n        <div class=\"member-photo\">\n          <img src=\"Daniel.jpg\" alt=\"Daniel — guitarrón\" loading=\"lazy\" onerror=\"this.replaceWith(Object.assign(document.createElement('div'),{className:'member-ph',style:'aspect-ratio:3/4;background:linear-gradient(150deg,#7a2d14,#3a1a0e);'}));\" />\n        </div>\n        <div class=\"member-name\">Daniel</div>\n        <div class=\"member-role\" data-i18n=\"m-daniel-role\">Trumpet</div>\n        <p class=\"member-bio\" data-i18n=\"m-daniel-bio\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>"
  },
  "daniela": {
    "name": "Daniela",
    "card": "\n        <div class=\"member-photo\">\n          <img src=\"Daniela.jpg\" alt=\"Daniela\" loading=\"lazy\" onerror=\"this.replaceWith(Object.assign(document.createElement('div'),{className:'member-ph',style:'aspect-ratio:3/4;background:linear-gradient(150deg,#7a2d14,#3a1a0e);'}));\" />\n        </div>\n        <div class=\"member-name\">Daniela</div>\n        <div class=\"member-role\" data-i18n=\"m-daniela-role\">Fiol &amp; sång</div>\n        <p class=\"member-bio\" data-i18n=\"m-daniela-bio\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>"
  },
  "eric": {
    "name": "Eric",
    "card": "\n        <div class=\"member-photo\">\n          <img src=\"Eric.jpg\" alt=\"Eric\" loading=\"lazy\" onerror=\"this.replaceWith(Object.assign(document.createElement('div'),{className:'member-ph',style:'aspect-ratio:3/4;background:linear-gradient(150deg,#7a2d14,#3a1a0e);'}));\" />\n        </div>\n        <div class=\"member-name\">Eric</div>\n        <div class=\"member-role\" data-i18n=\"m-eric-role\">Gitarr &amp; sång</div>\n        <p class=\"member-bio\" data-i18n=\"m-eric-bio\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>"
  },
  "fernando": {
    "name": "Fernando",
    "card": "\n        <div class=\"member-photo\">\n          <div class=\"member-ph\" style=\"aspect-ratio:3/4;background:linear-gradient(150deg,#7a2d14,#3a1a0e);display:flex;align-items:center;justify-content:center;\">\n            <span style=\"color:rgba(255,255,255,.55);font-size:.85rem;letter-spacing:.06em;text-transform:uppercase;\" data-i18n=\"m-fernando-photo\">foto saknas</span>\n          </div>\n        </div>\n        <div class=\"member-name\">Fernando</div>\n        <div class=\"member-role\" data-i18n=\"m-fernando-role\">Gitarr &amp; sång</div>\n        <p class=\"member-bio\" data-i18n=\"m-fernando-bio\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>"
  },
  "helena": {
    "name": "Helena",
    "card": "\n        <div class=\"member-photo\">\n          <img src=\"Helena.jpg\" alt=\"Helena\" loading=\"lazy\" onerror=\"this.replaceWith(Object.assign(document.createElement('div'),{className:'member-ph',style:'aspect-ratio:3/4;background:linear-gradient(150deg,#7a2d14,#3a1a0e);'}));\" />\n        </div>\n        <div class=\"member-name\">Helena</div>\n        <div class=\"member-role\" data-i18n=\"m-helena-role\">Fiol</div>\n        <p class=\"member-bio\" data-i18n=\"m-helena-bio\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>"
  },
  "niklas": {
    "name": "Niklas",
    "card": "\n        <div class=\"member-photo\">\n          <img src=\"Niklas.jpg\" alt=\"Niklas\" loading=\"lazy\" style=\"transform:translateY(-8%) scale(1.15);\" onerror=\"this.replaceWith(Object.assign(document.createElement('div'),{className:'member-ph',style:'aspect-ratio:3/4;background:linear-gradient(150deg,#7a2d14,#3a1a0e);'}));\" />\n        </div>\n        <div class=\"member-name\">Niklas</div>\n        <div class=\"member-role\" data-i18n=\"m-niklas-role\">Guitarrón</div>\n        <p class=\"member-bio\" data-i18n=\"m-niklas-bio\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>"
  },
  "ola": {
    "name": "Ola",
    "card": "\n        <div class=\"member-photo\">\n          <img src=\"Ola.jpg\" alt=\"Ola — trumpet och sång\" loading=\"lazy\" onerror=\"this.replaceWith(Object.assign(document.createElement('div'),{className:'member-ph',style:'aspect-ratio:3/4;background:linear-gradient(150deg,#7a2d14,#3a1a0e);'}));\" />\n        </div>\n        <div class=\"member-name\">Ola</div>\n        <div class=\"member-role\" data-i18n=\"m-ola-role\">Trumpet &amp; sång</div>\n        <p class=\"member-bio\" data-i18n=\"m-ola-bio\">Skolad i kulturskolans trumpetklass och hos erfarna sångpedagoger. Har spelat i kommunal musikkår, sjungit i motettkörer och Kungliga Filharmoniska kören. Med i Mariachi Fiesta México nästan från början.</p>"
  },
  "sebastian": {
    "name": "Sebastian",
    "card": "\n        <div class=\"member-photo\">\n          <img src=\"Sebastian.jpg\" alt=\"Sebastian\" loading=\"lazy\" style=\"object-position:50% 0%;\" onerror=\"this.replaceWith(Object.assign(document.createElement('div'),{className:'member-ph',style:'aspect-ratio:3/4;background:linear-gradient(150deg,#7a2d14,#3a1a0e);'}));\" />\n        </div>\n        <div class=\"member-name\">Sebastian</div>\n        <div class=\"member-role\" data-i18n=\"m-sebastian-role\">Vihuela &amp; sång</div>\n        <p class=\"member-bio\" data-i18n=\"m-sebastian-bio\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>"
  },
  "sigrid": {
    "name": "Sigrid",
    "card": "\n        <div class=\"member-photo\">\n          <img src=\"Sigrid.jpg\" alt=\"Sigrid\" loading=\"lazy\" style=\"transform-origin:50% 100%;transform:scale(1.12);\" onerror=\"this.replaceWith(Object.assign(document.createElement('div'),{className:'member-ph',style:'aspect-ratio:3/4;background:linear-gradient(150deg,#7a2d14,#3a1a0e);'}));\" />\n        </div>\n        <div class=\"member-name\">Sigrid</div>\n        <div class=\"member-role\" data-i18n=\"m-sigrid-role\">Fiol</div>\n        <p class=\"member-bio\" data-i18n=\"m-sigrid-bio\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>"
  },
  "simone": {
    "name": "Simone",
    "card": "\n        <div class=\"member-photo\">\n          <img src=\"Simone.jpg\" alt=\"Simone\" loading=\"lazy\" onerror=\"this.replaceWith(Object.assign(document.createElement('div'),{className:'member-ph',style:'aspect-ratio:3/4;background:linear-gradient(150deg,#7a2d14,#3a1a0e);'}));\" />\n        </div>\n        <div class=\"member-name\">Simone</div>\n        <div class=\"member-role\" data-i18n=\"m-simone-role\">Fiol</div>\n        <p class=\"member-bio\" data-i18n=\"m-simone-bio\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.</p>"
  }
};

