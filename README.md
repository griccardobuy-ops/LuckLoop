# 🌀 Luck Loop

> Missioni quotidiane per aumentare le tue opportunità reali.  
> Nessuna magia. Solo probabilità.

---

## Cosa fa

Ogni giorno Luck Loop genera:

1. **Missione Reale** — un'azione concreta (sociale, esplorativa, abitudinale) che aumenta statisticamente l'esposizione a opportunità nella vita reale
2. **Gioco Simbolico** — un rituale scaramantico dichiarato come puro intrattenimento (ruota, numeri, colori, parole)

L'app non afferma mai che la fortuna sia magica o causale.

---

## Stack

- **React 18** + **Vite 5**
- **TailwindCSS 3**
- **localStorage** per la persistenza (nessun backend)
- Deploy su **GitHub Pages** con GitHub Actions

---

## Avvio locale

```bash
# 1. Clona il repo
git clone https://github.com/TUO_USERNAME/luck-loop.git
cd luck-loop

# 2. Installa dipendenze
npm install

# 3. Avvia in dev mode
npm run dev
# → http://localhost:5173

# 4. Build di produzione
npm run build

# 5. Preview della build
npm run preview
```

---

## Deploy su GitHub Pages

### Metodo automatico (GitHub Actions)

1. Crea un repo su GitHub e fai push del codice
2. Vai su **Settings → Pages**
3. Source: **GitHub Actions**
4. Ogni push su `main` triggera il deploy automatico

### Metodo manuale

```bash
npm run build
# Copia il contenuto di /dist sul branch gh-pages
```

> **Nota:** il `vite.config.js` usa `base: './'` che funziona sia con dominio personalizzato che con `username.github.io/luck-loop`. Se usi un dominio personalizzato, puoi lasciarlo così. Se invece vuoi il path `/luck-loop/`, cambia `base` in `'/luck-loop/'`.

---

## Struttura cartelle

```
luck-loop/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Navigazione principale
│   │   ├── EnergySelector.jsx  # Selezione livello energetico
│   │   ├── RealMissionCard.jsx # Card missione reale
│   │   ├── SupMissionCard.jsx  # Card missione scaramantica
│   │   ├── SpinWheel.jsx       # Ruota della fortuna SVG
│   │   ├── StreakBar.jsx       # Barra streak + badge
│   │   ├── BadgeToast.jsx      # Notifica nuovo badge
│   │   ├── HowItWorks.jsx      # Pagina "come funziona"
│   │   └── HistoryPage.jsx     # Archivio + badge
│   ├── data/
│   │   └── missions.js         # Tutte le missioni e i dati
│   ├── hooks/
│   │   └── useDailyLoop.js     # Logica centrale dell'app
│   ├── utils/
│   │   ├── storage.js          # Abstraction layer localStorage
│   │   └── seed.js             # Generatore pseudo-random seedato
│   ├── App.jsx                 # Root component + routing
│   ├── main.jsx                # Entry point React
│   └── index.css               # Tailwind + stili globali
├── .github/
│   └── workflows/
│       └── deploy.yml          # CI/CD GitHub Pages
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## Personalizzazione

### Cambiare il nome dell'app
Cerca `Luck Loop` in `index.html`, `App.jsx` e `Header.jsx`.

### Aggiungere missioni reali
Apri `src/data/missions.js` e aggiungi oggetti all'array `REAL_MISSIONS`:

```js
{
  id: 'r99',
  category: 'sociale', // 'sociale' | 'esplorazione' | 'abitudini'
  energy: ['media', 'alta'], // livelli energetici compatibili
  title: 'Titolo della missione',
  description: 'Descrizione concreta.',
  impact: 'alto', // 'basso' | 'medio' | 'alto'
  impactNote: 'Perché questa azione funziona scientificamente.',
}
```

### Migrare a un database
`src/utils/storage.js` è un abstraction layer: sostituisci le funzioni con chiamate API mantenendo la stessa interfaccia esportata.

---

## Filosofia

Luck Loop nasce dall'osservazione che le persone percepite come "fortunate" condividono comportamenti specifici e misurabili. Il sito non vende superstizione: la separa nettamente dalle azioni reali, la dichiara come gioco, e mette la scienza davanti.

La parte scaramantica esiste perché i rituali simbolici hanno un effetto psicologico documentato (riduzione ansia, aumento perceived control) — ma questo è dichiarato, non spacciato come magia.

---

MIT License
