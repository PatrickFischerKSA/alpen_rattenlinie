const questions = [
  // Alpenfestung (7)
  {
    id: "a1",
    topic: "alpen",
    q: "Warum änderte Eisenhower die Stoßrichtung vieler Truppen nach Süden?",
    tip: "Es ging um die Sorge vor einem langen Gebirgskrieg.",
    model: "Er verlegte den Schwerpunkt nach Süden, weil Geheimdienstberichte eine angebliche Alpenfestung befürchten ließen und man einen zermürbenden Gebirgskrieg verhindern wollte.",
    accepted: [
      ["geheimdienst", "alpenfestung"],
      ["gebirgskrieg"],
      ["stoßrichtung", "süden", "alpen"],
    ],
  },
  {
    id: "a6",
    topic: "alpen",
    q: "Welche Funktion hatte die Alpenfestung in der NS-Propaganda?",
    tip: "Sie sollte Moral stärken und Gegner täuschen.",
    model: "Sie diente als Propaganda- und Täuschungsinstrument: nach innen zur Durchhalteparole, nach außen zur Irreführung der Alliierten.",
    accepted: [
      ["propaganda"],
      ["täuschung"],
      ["durchhalteparole"],
      ["irreführung"],
    ],
  },
  {
    id: "a7",
    topic: "alpen",
    q: "Welche Person erhielt im April 1945 formal den Auftrag für die Alpenfestung?",
    tip: "Es war ein Gauleiter aus Tirol-Vorarlberg.",
    model: "Franz Hofer wurde Ende April 1945 als Reichsverteidigungskommissar für die Alpenfestung eingesetzt.",
    accepted: [
      ["franz", "hofer"],
      ["hofer"],
    ],
  },
  {
    id: "a2",
    topic: "alpen",
    q: "Was war die Alpenfestung in erster Linie: reale Superfestung oder Propagandamy­thos?",
    tip: "Denke an gezielte Täuschung und übertriebene Darstellung.",
    model: "Sie war vor allem ein Propagandamy­thos und Täuschungsmanöver; reale Verlagerungen gab es, aber keine funktionsfähige Superfestung.",
    accepted: [
      ["propaganda"],
      ["mythos"],
      ["täuschung"],
      ["keine", "superfestung"],
    ],
  },
  {
    id: "a3",
    topic: "alpen",
    q: "Welche reale Maßnahme nährte den Mythos der Alpenfestung?",
    tip: "Es ging um Verlagerungen und unterirdische Anlagen.",
    model: "Die Verlagerung von Rüstungsproduktion und Anlagen in Alpenregionen (unterirdische Stollen, Bunker) nährte den Mythos.",
    accepted: [
      ["verlagerung", "rüstung"],
      ["unterirdisch", "produktion"],
      ["stollen"],
    ],
  },
  {
    id: "a4",
    topic: "alpen",
    q: "Warum wurden Kunstschätze und Reichsbankwerte in den Alpenraum gebracht?",
    tip: "Stichwort: Sicherheit und Nutzung nach dem Krieg.",
    model: "Sie sollten vor Bombenangriffen geschützt und als Wertreserve für die Zeit nach dem Krieg gesichert werden.",
    accepted: [
      ["schutz"],
      ["sichern", "werte"],
      ["wertreserve"],
    ],
  },
  {
    id: "a5",
    topic: "alpen",
    q: "Wie endete die Vorstellung einer Alpenfestung im Frühjahr 1945?",
    tip: "Denke an kampflose Übergaben und fehlende Bastion.",
    model: "Die angebliche Alpenfestung zerfiel: es gab kein uneinnehmbares Bollwerk, viele Einheiten kapitulierten, ein großer Gebirgskrieg blieb aus.",
    accepted: [
      ["kein", "bollwerk"],
      ["kapitulierten"],
      ["kein", "gebirgskrieg"],
    ],
  },

  // Rattenlinie (7)
  {
    id: "r1",
    topic: "ratten",
    q: "Welche Region war ein zentrales Durchgangsgebiet der Rattenlinie?",
    tip: "Es lag zwischen Italien, Österreich und der Schweiz.",
    model: "Südtirol war ein zentrales Durchgangsgebiet der Rattenlinie.",
    accepted: [
      ["südtirol"],
    ],
  },
  {
    id: "r6",
    topic: "ratten",
    q: "Nenne zwei bekannte Täter, die über die Rattenlinie nach Südamerika gelangten.",
    tip: "Denk an Eichmann und Mengele/Barbie.",
    model: "Beispiele sind Adolf Eichmann, Josef Mengele oder Klaus Barbie.",
    accepted: [
      ["eichmann", "mengele"],
      ["eichmann", "barbie"],
      ["mengele", "barbie"],
    ],
  },
  {
    id: "r7",
    topic: "ratten",
    q: "Welche Motivation hatten manche Helfer, Fluchten zu unterstützen?",
    tip: "Nicht nur Ideologie, auch Geld und Antikommunismus.",
    model: "Neben ideologischer Nähe spielten Geld, Angst vor Kommunismus und Eigeninteressen eine Rolle.",
    accepted: [
      ["geld"],
      ["antikommunismus"],
      ["eigeninteressen"],
      ["angst", "kommunismus"],
    ],
  },
  {
    id: "r2",
    topic: "ratten",
    q: "Nenne zwei Arten von Helfernetzwerken, die Fluchten unterstützten.",
    tip: "Es gab zivile Helfer und kirchliche Kontakte.",
    model: "Unterstützt wurde die Flucht durch ehemalige Parteigenossen/Sympathisanten und auch durch Teile kirchlicher Strukturen (z. B. Priester).",
    accepted: [
      ["parteigenossen", "priester"],
      ["sympathisanten", "kirche"],
      ["kirchlich", "helfer"],
    ],
  },
  {
    id: "r3",
    topic: "ratten",
    q: "Warum blieb die Rattenlinie nach Kriegsende möglich?",
    tip: "Denke an Chaos, politische Interessen und fehlende Kontrolle.",
    model: "Weil es nach Kriegsende institutionelle Lücken, politische Interessen und teilweise fehlende Kontrolle gab, die Fluchtwege nutzten.",
    accepted: [
      ["lücken", "kontrolle"],
      ["politisch", "interessen"],
      ["chaos"],
    ],
  },
  {
    id: "r4",
    topic: "ratten",
    q: "Wohin führten viele Rattenlinien-Fluchten über Rom/Genua?",
    tip: "Übersee, besonders nach Südamerika.",
    model: "Viele Fluchten gingen über Rom/Genua nach Südamerika (z. B. Argentinien).",
    accepted: [
      ["südamerika"],
      ["argentinien"],
      ["übersee"],
    ],
  },
  {
    id: "r5",
    topic: "ratten",
    q: "Welche Rolle spielten neue Papiere für die Flucht?",
    tip: "Ohne Papiere keine Reise.",
    model: "Neue/gefälschte Papiere und Visa ermöglichten die Ausreise und verschleierten Identitäten.",
    accepted: [
      ["papiere"],
      ["visa"],
      ["identität", "verschleiern"],
    ],
  },

  // Odessa (7)
  {
    id: "o1",
    topic: "odessa",
    q: "Was ist an der Existenz einer zentralen " +
      "Odessa-Organisation im Material umstritten?",
    tip: "Es gibt Indizien, aber keinen eindeutigen Beweis.",
    model: "Die zentrale Odessa-Organisation bleibt umstritten; es gibt Indizien und Gerüchte, aber keinen schlüssigen Beweis für eine einheitliche SS-Nachfolgeorganisation.",
    accepted: [
      ["umstritten"],
      ["kein", "beweis"],
      ["indizien"],
    ],
  },
  {
    id: "o2",
    topic: "odessa",
    q: "Welches Ziel hatten viele SS-Flüchtige unmittelbar nach 1945?",
    tip: "Denke an Entgehen der Siegerjustiz.",
    model: "Viele SS-Flüchtige wollten sich der Strafverfolgung/Siegerjustiz entziehen und untertauchen.",
    accepted: [
      ["strafverfolgung"],
      ["siegerjustiz"],
      ["untertauchen"],
    ],
  },
  {
    id: "o3",
    topic: "odessa",
    q: "Nenne einen Grund, warum die Alpen für SS-Leute ein Rückzugsraum waren.",
    tip: "Abgeschiedene Bergregionen boten Schutz.",
    model: "Abgeschiedene Bergregionen boten Verstecke und erschwerten die Fahndung.",
    accepted: [
      ["abgeschieden"],
      ["versteck"],
      ["fahndung", "erschwert"],
    ],
  },
  {
    id: "o4",
    topic: "odessa",
    q: "Welche Kritik wird an der Nachkriegsjustiz im Material geäußert?",
    tip: "Viele Täter wurden lange nicht verfolgt.",
    model: "Es wird kritisiert, dass viele Täter lange unbehelligt blieben und nur begrenzt juristisch verfolgt wurden.",
    accepted: [
      ["unbehelligt"],
      ["kaum", "verfolgt"],
      ["begrenzte", "justiz"],
    ],
  },
  {
    id: "o5",
    topic: "odessa",
    q: "Welche Gefahr zeigt die Doku im Blick auf heutige rechtsextreme Netzwerke?",
    tip: "Die Ideologie kann fortwirken.",
    model: "Die Ideologie und Netzwerke können fortwirken; rechtsextreme Strukturen unterstützen sich und halten den Ungeist am Leben.",
    accepted: [
      ["fortwirken"],
      ["rechtsextrem"],
      ["netzwerke"],
    ],
  },
  {
    id: "o6",
    topic: "odessa",
    q: "Welches Merkmal verriet viele SS-Männer bei Kontrollen?",
    tip: "Es war am Arm.",
    model: "Die Blutgruppen-Tätowierung am Arm verriet viele SS-Männer.",
    accepted: [
      ["blutgruppe"],
      ["tätowierung"],
      ["tatowierung"],
    ],
  },
  {
    id: "o7",
    topic: "odessa",
    q: "Warum bleibt " +
      "die Rede von einer einzigen zentralen Odessa-Organisation problematisch?",
    tip: "Es gab eher viele kleine Netzwerke.",
    model: "Weil vieles auf lose Kameradschaften und Hilfswerke hinweist und der Nachweis einer einzigen zentralen Organisation fehlt.",
    accepted: [
      ["lose", "netzwerke"],
      ["kameradschaften"],
      ["kein", "nachweis"],
    ],
  },
];

const synonymMap = {
  "suedtirol": "südtirol",
  "sued": "süd",
  "sueden": "süden",
  "propaganda": "propaganda",
  "mythos": "mythos",
  "täuschung": "täuschung",
  "taeuschung": "täuschung",
  "geheimdienst": "geheimdienst",
  "gebirgskrieg": "gebirgskrieg",
  "rüstung": "rüstung",
  "ruestung": "rüstung",
  "stollen": "stollen",
  "bunker": "bunker",
  "schutz": "schutz",
  "sichern": "sichern",
  "wertreserve": "wertreserve",
  "kapitulieren": "kapitulierten",
  "kapitulierten": "kapitulierten",
  "kirche": "kirche",
  "priester": "priester",
  "sympathisant": "sympathisanten",
  "sympathisanten": "sympathisanten",
  "parteigenossen": "parteigenossen",
  "übersee": "übersee",
  "uebersee": "übersee",
  "südamerika": "südamerika",
  "argentinien": "argentinien",
  "papiere": "papiere",
  "visa": "visa",
  "identität": "identität",
  "identitaet": "identität",
  "umstritten": "umstritten",
  "beweis": "beweis",
  "indizien": "indizien",
  "strafverfolgung": "strafverfolgung",
  "siegerjustiz": "siegerjustiz",
  "untertauchen": "untertauchen",
  "abgeschieden": "abgeschieden",
  "versteck": "versteck",
  "fahndung": "fahndung",
  "justiz": "justiz",
  "unbehelligt": "unbehelligt",
  "rechtsextrem": "rechtsextrem",
  "netzwerke": "netzwerke",
  "fortwirken": "fortwirken",
  "chaos": "chaos",
  "kontrolle": "kontrolle",
  "lücken": "lücken",
  "luecken": "lücken",
  "interessen": "interessen",
  "politisch": "politisch",
  "alliierten": "alliierten",
  "irrefuehrung": "irreführung",
  "irreführung": "irreführung",
  "durchhalteparole": "durchhalteparole",
  "gauleiter": "gauleiter",
  "hofer": "hofer",
  "franz": "franz",
  "eichmann": "eichmann",
  "mengele": "mengele",
  "barbie": "barbie",
  "geld": "geld",
  "antikommunismus": "antikommunismus",
  "eigeninteressen": "eigeninteressen",
  "blutgruppe": "blutgruppe",
  "tatowierung": "tätowierung",
  "tätowierung": "tätowierung",
  "kameradschaften": "kameradschaften",
};

function normalize(text) {
  return text
    .toLowerCase()
    .replace(/[ä]/g, "ae")
    .replace(/[ö]/g, "oe")
    .replace(/[ü]/g, "ue")
    .replace(/[ß]/g, "ss")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tokenize(text) {
  const tokens = normalize(text).split(" ");
  return tokens
    .map(t => synonymMap[t] || t)
    .filter(Boolean);
}

function hasToken(tokens, term) {
  if (term.endsWith("*")) {
    const prefix = term.slice(0, -1);
    for (const t of tokens) {
      if (t.startsWith(prefix)) return true;
    }
    return false;
  }
  return tokens.has(term);
}

function matchesAnswer(answer, accepted) {
  const normalized = normalize(answer);
  const tokenSet = new Set(tokenize(answer));

  for (const requirement of accepted) {
    const reqList = Array.isArray(requirement) ? requirement : [requirement];
    let ok = true;

    for (const req of reqList) {
      if (req.includes(" ")) {
        const phrase = normalize(req);
        if (!normalized.includes(phrase)) {
          ok = false;
          break;
        }
      } else {
        const term = synonymMap[req] || req;
        if (!hasToken(tokenSet, term)) {
          ok = false;
          break;
        }
      }
    }

    if (ok) return true;
  }

  return false;
}

const listEl = document.getElementById("question-list");
const template = document.getElementById("question-card");
const progressEl = document.getElementById("progress");
const correctEl = document.getElementById("correct");
let correctCount = 0;

function renderQuestions(topic = "all") {
  listEl.innerHTML = "";
  const filtered = topic === "all" ? questions : questions.filter(q => q.topic === topic);
  filtered.forEach(q => listEl.appendChild(renderCard(q)));
}

function renderCard(q) {
  const node = template.content.firstElementChild.cloneNode(true);
  node.dataset.id = q.id;
  const statusEl = node.querySelector(".status");
  const topicEl = node.querySelector(".topic");
  const qEl = node.querySelector(".q");
  const input = node.querySelector(".answer");
  const btn = node.querySelector(".check");
  const feedback = node.querySelector(".feedback");
  const countEl = node.querySelector(".count");

  topicEl.textContent = labelForTopic(q.topic);
  qEl.textContent = q.q;

  let attempts = 0;
  let done = false;

  function setFeedback(type, text) {
    feedback.className = `feedback ${type}`.trim();
    feedback.textContent = text;
  }

  function finalizeCorrect() {
    done = true;
    statusEl.textContent = "richtig";
    statusEl.style.color = "var(--ok)";
    input.disabled = true;
    btn.disabled = true;
    correctCount += 1;
    updateScore();
  }

  btn.addEventListener("click", () => {
    if (done) return;
    const answer = input.value;
    attempts += 1;
    countEl.textContent = String(attempts);

    if (matchesAnswer(answer, q.accepted)) {
      setFeedback("ok", "Richtig.");
      finalizeCorrect();
      return;
    }

    if (attempts === 1) {
      setFeedback("error", "Falsch. Versuch es noch einmal.");
    } else if (attempts === 2) {
      setFeedback("tip", `Tipp: ${q.tip}`);
    } else {
      setFeedback("model", `Modellantwort: ${q.model}`);
      statusEl.textContent = "gelöst";
      statusEl.style.color = "var(--accent-2)";
      input.disabled = true;
      btn.disabled = true;
    }
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") btn.click();
  });

  return node;
}

function labelForTopic(topic) {
  if (topic === "alpen") return "Alpenfestung";
  if (topic === "ratten") return "Rattenlinie";
  return "Odessa";
}

function updateScore() {
  progressEl.textContent = `${correctCount}/${questions.length}`;
  correctEl.textContent = `${correctCount} richtig`;
}

updateScore();
renderQuestions();

const filterButtons = Array.from(document.querySelectorAll(".filter"));
filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderQuestions(btn.dataset.topic);
  });
});
filterButtons[0].classList.add("active");
