# Sumes + Restes — Practica els números

Aplicació web per practicar sumes i restes, pensada per a l'alumnat de primària. Funciona directament al navegador, sense instal·lació ni connexió a internet.

---

## ✨ Funcionalitats

### 3 mons progressius
| Món | Rang | Desbloqueja quan... |
|-----|------|---------------------|
| 🌱 Món 1 | Fins a 10 | Disponible des del principi |
| 🌊 Món 2 | Fins a 20 | ≥ 75% d'encerts al Món 1 amb mínim 20 intents |
| 🌟 Món 3 | Fins a 100 | ≥ 75% d'encerts al Món 2 amb mínim 20 intents |

Al Món 3, la meitat de les operacions prioritzen desenes senceres (10, 20, 30...) per facilitar la transició als números grans.

### Selecció d'operació
A cada partida l'alumne tria lliurement entre **sumes**, **restes** o **les dues barrejades**. Les restes sempre garanteixen un resultat ≥ 0 (mai negatius).

### 4 modes de joc
| Mode | Descripció |
|------|------------|
| 📖 Pràctica lliure | Practica al teu ritme sense límit de temps |
| ⏱ Contra rellotge | 1 o 2 minuts: quantes operacions pots fer? |
| 📶 Seqüencial | Operacions ordenades per dificultat creixent, ideal per introduir un concepte nou |
| 🎯 Mode errors | Repassa les operacions que has fallat en sessions anteriors |

### Gamificació
- ⭐ Sistema de punts amb bonus de combo (ratxa × punts extra)
- 🔥 Indicador de ratxa en temps real
- 🏅 11 medalles desbloqueables
- 📈 11 nivells amb noms motivadors (*Estrella nova → Llegenda*)
- 🌍 Progrés visual dels mons amb barra de percentatge

### Perfils i progrés
- Múltiples perfils d'alumne en el mateix dispositiu
- Progrés guardat automàticament en local (`localStorage`)
- Historial d'errors per món i operació
- Rècord personal en mode rellotge

---

## 🚀 Com utilitzar-lo

### Opció 1 — GitHub Pages (recomanat)

1. Fes un **fork** d'aquest repositori
2. Ves a **Settings → Pages**
3. A *Source*, selecciona la branca `main` i la carpeta `/ (root)`
4. Guarda i espera uns segons: l'aplicació estarà disponible a `https://el-teu-usuari.github.io/sumes-restes`

### Opció 2 — En local

Obre el fitxer `index.html` amb qualsevol navegador modern. No cal servidor ni instal·lació.

---

## 📁 Estructura del repositori

```
sumes-restes/
├── index.html   # Aplicació completa (un sol fitxer)
└── README.md
```

Tota l'aplicació és un únic fitxer HTML autònom, sense dependències externes ni processos de build.

---

## 🎮 Com funciona el sistema de punts

- Cada resposta correcta suma **10 punts**
- Les respostes en ratxa afegeixen **+2 punts per encert addicional**
- Cada encert dona **5 XP** i cada punt de ratxa **2 XP addicionals**

### Medalles disponibles

| Medalla | Condició |
|---------|----------|
| 🌟 Primera! | Completar la primera partida |
| 🔥 Ratxa x5 | 5 encerts seguits |
| 💥 Ratxa x10 | 10 encerts seguits |
| 💯 100 pts | 100 punts totals |
| 🏅 500 pts | 500 punts totals |
| 🥇 1000 pts | 1000 punts totals |
| 🌊 Món 2! | Desbloqueja el Món 2 |
| 🌟 Món 3! | Desbloqueja el Món 3 |
| ⚡ Llamp | 15 encerts en mode rellotge |
| 🚀 Nivell 5 | Arribar al nivell 5 |
| ✨ Perfecte! | Partida sense cap error (mínim 5 preguntes) |

---

## 🧠 Decisions pedagògiques

**Progressió controlada** — Els mons es desbloquegen per rendiment real, no per temps jugat. Això assegura que l'alumne consolida cada rang abans de passar al següent.

**Restes sense negatius** — El generador de preguntes garanteix sempre que `a ≥ b`, evitant resultats negatius que podrien confondre l'alumnat de 1r-2n de primària.

**Dificultat adaptativa** — Les operacions amb pitjor percentatge d'encerts o temps de resposta alt apareixen amb més freqüència en les sessions de pràctica lliure i rellotge.

**Mode seqüencial** — Especialment dissenyat per usar quan s'introdueix un concepte per primera vegada a l'aula: les operacions apareixen ordenades de menor a major dificultat.

**Mode presentació** — Permet al docent projectar les operacions a la pissarra i gestionar la participació col·lectiva, amb marcador en temps real i control d'operació i món des de la mateixa pantalla.

---

## 📊 Exportació per al docent

El tauler de cada perfil inclou un botó **Exportar progrés (CSV)** que genera un fitxer amb:

- Encerts, errors, precisió i temps mitjà per cada combinació de món i operació
- Punts totals, XP, nivell i millor ratxa
- Data d'exportació

El fitxer es pot obrir directament amb Excel, LibreOffice Calc o Google Sheets.

---

## 🛠 Tecnologies

- HTML5, CSS3, JavaScript (Vanilla)
- `localStorage` per persistència de dades
- Sense dependències externes · Sense frameworks · Sense servidor

---


## 📄 Llicència

[MIT](LICENSE) — Lliure per usar, modificar i distribuir.
