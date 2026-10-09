  // === Kommande spelningar: hämtas från Group Planner-feeden (gigs.json) ===
  // Feed: JSON-array med { datum, starttid, sluttid, titel, plats, beskrivning, url }
  // Fallback-listan ovan visas tills feeden finns / om hämtningen misslyckas.
  (function loadGigs() {
    var list = document.getElementById("gig-list");
    var fallback = document.getElementById("gig-list-fallback");
    var note = document.getElementById("gig-note");
    var months = ["JAN","FEB","MAR","APR","MAJ","JUN","JUL","AUG","SEP","OKT","NOV","DEC"];
    function esc(s) {
      return String(s).replace(/[&<>"']/g, function (c) {
        return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
      });
    }
    function render(gigs) {
      gigs.sort(function (a, b) { return (a.datum || "").localeCompare(b.datum || ""); });
      var dict = I18N[curLang] || {};
      var html = "";
      gigs.forEach(function (g) {
        var d = new Date(g.datum + "T00:00:00");
        if (isNaN(d)) return;
        var day = d.getDate();
        var mon = months[d.getMonth()] || "";
        var time = (g.starttid ? "kl " + g.starttid + (g.sluttid ? "–" + g.sluttid : "") : "");
        var desc = [g.plats, time, g.beskrivning].filter(Boolean).map(esc).join(" · ");
        var title = esc(g.titel);
        var cta = g.url
          ? '<a class="gig-cta" href="' + esc(g.url) + '" target="_blank" rel="noopener">' + (dict["gig-tickets"] || "Köp biljetter") + '</a>'
          : "";
        html += '<div class="gig">' +
                  '<div class="gig-date"><b>' + day + '</b><span>' + mon + '</span></div>' +
                  '<div class="gig-info"><div class="gig-tag">' + (dict["gig-tag"] || "Publik spelning") + '</div>' +
                  '<div class="t">' + title + '</div>' +
                  '<div class="d">' + desc + '</div></div>' +
                  cta +
                '</div>';
      });
      if (!html) { note.style.display = "none"; return; } // tom feed → behåll fallback
      list.innerHTML = html +
        '<div class="gig-empty" data-i18n="gig-empty">' + (dict["gig-empty"] || fallback.querySelector(".gig-empty").innerHTML) + '</div>';
      fallback.style.display = "none";
      list.style.display = "";
      note.style.display = "";
    }
    fetch("gigs.json?t=" + Date.now())
      .then(function (r) { return r.ok ? r.json() : Promise.reject(); })
      .then(render)
      .catch(function () { /* feeden ej på plats ännu → fallback visas */ });
  })();
