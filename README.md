# Sumes + Restes — Practica els números

Aplicació web per practicar sumes i restes, pensada per a l'alumnat de 1r i 2n de primària. Funciona directament al navegador, sense instal·lació ni connexió a internet.

🔗 **[Obre l'aplicació](https://albertgodina.github.io/sumesrestes)**

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

---

## 🎨 Representacions visuals (Mons 1 i 2)

Durant el joc, cada pregunta s'acompanya de dues representacions manipulatives alternables:

### Regletes de Cuisenaire
Les regletes apareixen **una al costat de l'altra**, alineades per la base, amb els colors oficials:

| Valor | Color |
|-------|-------|
| 1 | Blanc |
| 2 | Vermell |
| 3 | Verd clar |
| 4 | Morat |
| 5 | Groc |
| 6 | Verd fosc |
| 7 | Negre |
| 8 | Marró |
| 9 | Blau |
| 10 | Taronja |

Per a números superiors a 10 (Món 2), es combinen regletes de 10 + les unitats restants. En les **restes**, la regreta B apareix desvanida per indicar que es "treu". Quan es revela el resultat, apareix la regreta total a sota amb una animació suau.

### Recta numèrica
Mostra **fletxes horitzontals animades** sobre la recta:
- **Sumes**: fletxa blava de 0→A, després fletxa verda de A→resultat
- **Restes**: fletxa blava de 0→A, després fletxa vermella cap a l'esquerra de A→resultat

Cada fletxa inclou l'etiqueta del valor que representa (`+A`, `+B` o `−B`) i els punts clau es marquen sobre la recta.

### Comportament pedagògic
- Les representacions es mostren **durant tota la pregunta** (sense el resultat)
- En **encertar**: apareix el resultat durant 0,6 s abans de passar a la pregunta
- En **fallar**: el resultat es revela i apareix el missatge *"Mira les regletes"* amb 1,8 s per observar-ho
- Al **Món 3** les representacions s'amaguen automàticament (poc pràctic per a números grans)

---

## 🎮 Gamificació
- ⭐ Sistema de punts amb bonus de combo (ratxa × punts extra)
- 🔥 Indicador de ratxa en temps real
- 🏅 11 medalles desbloqueables
- 📈 11 nivells amb noms motivadors (*Estrella nova → Llegenda*)
- 🌍 Progrés visual dels mons amb barra de percentatge

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

## 👤 Perfils i progrés

- Múltiples perfils d'alumne en el mateix dispositiu
- Progrés guardat automàticament en local (`localStorage`)
- Historial d'errors per món i operació
- Rècord personal en mode rellotge
- Dificultat adaptativa: les operacions amb pitjor rendiment o temps de resposta alt apareixen amb més freqüència

---

## 🚀 Com utilitzar-lo

### Opció 1 — GitHub Pages (recomanat)

1. Fes un **fork** d'aquest repositori
2. Ves a **Settings → Pages**
3. A *Source*, selecciona la branca `main` i la carpeta `/ (root)`
4. Guarda i espera uns segons: l'aplicació estarà disponible a `https://el-teu-usuari.github.io/sumesrestes`

### Opció 2 — En local

Obre el fitxer `index.html` amb qualsevol navegador modern. No cal servidor ni instal·lació.

---

## 📁 Estructura del repositori

```
sumesrestes/
├── index.html   # Aplicació completa (un sol fitxer)
└── README.md
```

Tota l'aplicació és un únic fitxer HTML autònom, sense dependències externes ni processos de build.

---

## 🎮 Com funciona el sistema de punts

- Cada resposta correcta suma **10 punts**
- Les respostes en ratxa afegeixen **+2 punts per encert addicional**
- Cada encert dona **5 XP** i cada punt de ratxa **2 XP addicionals**

---

## 🧠 Decisions pedagògiques

**Progressió controlada** — Els mons es desbloquegen per rendiment real, no per temps jugat. Això assegura que l'alumne consolida cada rang abans de passar al següent.

**Restes sense negatius** — El generador de preguntes garanteix sempre que `a ≥ b`, evitant resultats negatius que podrien confondre l'alumnat de 1r-2n de primària.

**Regletes de Cuisenaire** — Representació manipulativa clàssica que permet veure la relació entre els valors de forma visual i proporcional. Les regletes s'ajunten (sumes) o es mostren desvanides (restes) per reforçar el concepte de l'operació.

**Recta numèrica amb fletxes** — Mostra el moviment sobre la recta de manera direccional: les sumes van cap a la dreta i les restes cap a l'esquerra, reforçant la idea de sentit i magnitud.

**Feedback visual en errors** — Quan l'alumne s'equivoca, la representació revela la resposta correcta i dona temps per observar-la abans de continuar, convertint l'error en una oportunitat d'aprenentatge.

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
- SVG per a la recta numèrica (dibuix dinàmic i animat)
- `localStorage` per persistència de dades
- Sense dependències externes · Sense frameworks · Sense servidor

---

## 🔗 Projectes relacionats

Aquest projecte forma part d'una sèrie d'aplicacions de pràctica matemàtica:

- **[Taules ×](https://albertgodina.github.io/taules)** — Practica les taules de multiplicar (cicle mitjà i superior)
- **Sumes + Restes** — Practica sumes i restes (1r i 2n de primària) ← estàs aquí

---

## 📄 Llicència

[MIT](LICENSE) — Lliure per usar, modificar i distribuir.
