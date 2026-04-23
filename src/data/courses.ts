import { Course } from "../types";

export const courses: Course[] = [
  {
    id: "19",
    title: "Formazione generale per lavoratore",
    lessons: 16,
    duration: "4h",
    price: "48,80",
    category: "Sicurezza lavoratori",
    description: "Il corso è destinato a tutti i lavoratori e lavoratrici e mira a fornire le informazioni di base in materia di salute e sicurezza nei luoghi di lavoro.",
    objectives: ["Concetti di rischio e pericolo", "Prevenzione e protezione", "Organizzazione della sicurezza aziendale"],
    references: ["Art. 37 D.Lgs. 81/08", "Accordo Stato-Regioni 17/04/2025 (Rep. Atti n. 59/CSR)"],
    recipients: "Tutti i lavoratori",
    syllabus: [
      { title: "Concetti di rischio e danno", lessonsCount: 4, duration: "1h" },
      { title: "Prevenzione e protezione", lessonsCount: 4, duration: "1h" },
      { title: "Organizzazione della prevenzione aziendale", lessonsCount: 4, duration: "1h" },
      { title: "Diritti, doveri e sanzioni", lessonsCount: 3, duration: "45m" },
      { title: "Test finale di apprendimento", lessonsCount: 1, duration: "15m" }
    ]
  },
  {
    id: "50",
    title: "RLS: Rappresentante dei lavoratori per la sicurezza",
    lessons: 146,
    duration: "32h",
    price: "390,40",
    category: "RLS",
    description: "Corso abilitante per la figura del Rappresentante dei Lavoratori per la Sicurezza, con approfondimenti su normativa e tecniche di controllo.",
    objectives: ["Ruolo e compiti del RLS", "Tecniche di comunicazione", "Analisi dei rischi specifici"],
    references: ["Art. 37 e 47 D.Lgs. 81/08", "Accordo Stato-Regioni 21/12/2011"],
    recipients: "Lavoratori eletti o designati come RLS",
    syllabus: [
      { title: "Principi giuridici nazionali ed europei", lessonsCount: 25, duration: "6h" },
      { title: "Legislazione specifica sulla salute e sicurezza", lessonsCount: 30, duration: "8h" },
      { title: "Il ruolo del RLS nel sistema aziendale", lessonsCount: 20, duration: "4h" },
      { title: "Rischi specifici e misure di prevenzione", lessonsCount: 40, duration: "8h" },
      { title: "Nozioni di tecnica della comunicazione", lessonsCount: 20, duration: "4h" },
      { title: "Test finale di valutazione", lessonsCount: 11, duration: "2h" }
    ]
  },
  {
    id: "52",
    title: "Formazione uso industriale e professionale dei Diisocianati - Base",
    lessons: 12,
    duration: "2h",
    price: "24,40",
    category: "Utilizzo diisocianati",
    description: "Corso obbligatorio per chi manipola diisocianati in ambito industriale o professionale, livello base.",
    objectives: ["Rischi per la salute", "Misure di prevenzione", "Uso dei DPI"],
    references: ["Regolamento (UE) 2020/1149"],
    recipients: "Lavoratori che utilizzano diisocianati",
    syllabus: [
      { title: "Proprietà chimico-fisiche dei diisocianati", lessonsCount: 3, duration: "30m" },
      { title: "Rischi per la salute ed effetti tossicologici", lessonsCount: 3, duration: "30m" },
      { title: "Misure di controllo dell'esposizione", lessonsCount: 3, duration: "30m" },
      { title: "Uso corretto dei DPI e igiene", lessonsCount: 2, duration: "20m" },
      { title: "Test di apprendimento", lessonsCount: 1, duration: "10m" }
    ]
  },
  {
    id: "70",
    title: "Responsabile del Servizio di Prevenzione e Protezione Datore di Lavoro Rischio Basso - Moduli 1 e 2",
    lessons: 40,
    duration: "8h",
    price: "97,60",
    category: "Datore di lavoro",
    description: "Corso per datori di lavoro che intendono svolgere direttamente i compiti di RSPP in aziende a rischio basso.",
    objectives: ["Quadro normativo", "Valutazione dei rischi", "Gestione delle emergenze"],
    references: ["Art. 34 D.Lgs. 81/08", "Accordo Stato-Regioni 21/12/2011"],
    recipients: "Datori di lavoro (Rischio Basso)",
    syllabus: [
      { title: "Modulo 1: Giuridico - Normativo", lessonsCount: 15, duration: "3h" },
      { title: "Modulo 2: Gestionale - Gestione ed organizzazione della sicurezza", lessonsCount: 15, duration: "3h" },
      { title: "Approfondimenti tecnici", lessonsCount: 8, duration: "1h 30m" },
      { title: "Test di verifica", lessonsCount: 2, duration: "30m" }
    ]
  },
  {
    id: "72",
    title: "Corso per Incaricato al Trattamento dei dati personali",
    lessons: 7,
    duration: "2h",
    price: "24,40",
    category: "Privacy e protezione dei dati",
    description: "Formazione obbligatoria per chiunque tratti dati personali all'interno di un'organizzazione.",
    objectives: ["Principi del GDPR", "Diritti degli interessati", "Misure di sicurezza"],
    references: ["Regolamento UE 2016/679 (GDPR)"],
    recipients: "Dipendenti e collaboratori che trattano dati",
    syllabus: [
      { title: "Introduzione al GDPR e definizioni", lessonsCount: 2, duration: "30m" },
      { title: "I principi del trattamento", lessonsCount: 2, duration: "30m" },
      { title: "Diritti dell'interessato e data breach", lessonsCount: 2, duration: "45m" },
      { title: "Test di verifica", lessonsCount: 1, duration: "15m" }
    ]
  },
  {
    id: "73",
    title: "Corso per Incaricato al Trattamento dei dati personali del settore Sanitario",
    lessons: 9,
    duration: "4h",
    price: "48,80",
    category: "Privacy e protezione dei dati",
    description: "Approfondimento specifico sul trattamento dei dati sensibili e sanitari nel rispetto della privacy.",
    objectives: ["Dati particolari", "Consenso informato", "Sicurezza informatica in sanità"],
    references: ["GDPR", "D.Lgs. 196/2003"],
    recipients: "Personale sanitario e amministrativo del settore",
    syllabus: [
      { title: "Documento Progettuale", lessonsCount: 1, duration: "0m" },
      { title: "Introduzione alla Privacy in Sanità", lessonsCount: 2, duration: "1h" },
      { title: "Il Trattamento dei Dati Particolari", lessonsCount: 2, duration: "1h" },
      { title: "Consenso e Diritti dell'Interessato", lessonsCount: 2, duration: "1h" },
      { title: "Sicurezza e Data Breach in ambito Sanitario", lessonsCount: 1, duration: "45m" },
      { title: "Quiz di Verifica", lessonsCount: 1, duration: "15m" }
    ]
  },
  {
    id: "74",
    title: "Corso Dirigente",
    lessons: 37,
    duration: "12h",
    price: "195,20",
    category: "Dirigente - Preposto",
    description: "Formazione specifica per la figura del dirigente, focalizzata sulle responsabilità civili e penali.",
    objectives: ["Gestione della sicurezza", "Responsabilità del dirigente", "Modelli organizzativi"],
    references: ["Art. 37 D.Lgs. 81/08", "Accordo Stato-Regioni 21/12/2011"],
    recipients: "Dirigenti aziendali",
    syllabus: [
      { title: "Documento Progettuale", lessonsCount: 1, duration: "0m" },
      { title: "Modulo Giuridico Organizzativo", lessonsCount: 13, duration: "4h 5m" },
      { title: "Quiz di verifica", lessonsCount: 1, duration: "15m" },
      { title: "Introduzione alla figura del Dirigente", lessonsCount: 1, duration: "23m" },
      { title: "Il Dirigente, Il dirigente Delegato, Il Dirigente di Fatto", lessonsCount: 3, duration: "1h 51m" },
      { title: "Esempio Struttura di Sicurezza", lessonsCount: 2, duration: "1h 16m" },
      { title: "Risorse e Benessere Organizzativo", lessonsCount: 3, duration: "1h 46m" },
      { title: "Gli aspetti dell'efficacia Personale e Organizzativa", lessonsCount: 3, duration: "1h 58m" },
      { title: "Guida allo Smart Working", lessonsCount: 3, duration: "1h 53m" },
      { title: "Lo Stress lavoro Correlato", lessonsCount: 5, duration: "57m" },
      { title: "Quiz di Verifica", lessonsCount: 1, duration: "16m" },
      { title: "Questionario di Gradimento", lessonsCount: 1, duration: "9m" }
    ]
  },
  {
    id: "75",
    title: "Aggiornamento Dirigente",
    lessons: 23,
    duration: "6h",
    price: "73,20",
    category: "Dirigente - Preposto",
    description: "Aggiornamento quinquennale obbligatorio per la figura del dirigente ai sensi del D.Lgs 81/08.",
    objectives: ["Evoluzione normativa", "Giurisprudenza", "Sistemi di gestione"],
    references: ["Art. 37 D.Lgs. 81/08", "Accordo Stato-Regioni 17/04/2025 (Rep. Atti n. 59/CSR)"],
    recipients: "Dirigenti che hanno già effettuato la formazione base",
    syllabus: [
      { title: "Evoluzione della normativa e giurisprudenza", lessonsCount: 5, duration: "1h 30m" },
      { title: "Il sistema istituzionale e gli organi di vigilanza", lessonsCount: 4, duration: "1h" },
      { title: "Modelli di organizzazione e gestione (MOG) e responsabilità", lessonsCount: 5, duration: "1h 30m" },
      { title: "Valutazione dei rischi e gestione delle emergenze", lessonsCount: 5, duration: "1h" },
      { title: "Leadership, comunicazione e cultura della sicurezza", lessonsCount: 4, duration: "1h" }
    ]
  },
  {
    id: "77",
    title: "Aggiornamento Preposto",
    lessons: 22,
    duration: "6h",
    price: "73,20",
    category: "Dirigente - Preposto",
    description: "Aggiornamento biennale obbligatorio per la figura del preposto ai sensi del D.Lgs 81/08.",
    objectives: ["Ruolo e responsabilità", "Tecniche di vigilanza", "Gestione delle emergenze"],
    references: ["Art. 37 D.Lgs. 81/08", "Accordo Stato-Regioni 17/04/2025 (Rep. Atti n. 59/CSR)"],
    recipients: "Preposti che hanno già effettuato la formazione base",
    syllabus: [
      { title: "Principali soggetti coinvolti e i relativi obblighi", lessonsCount: 6, duration: "1h 30m" },
      { title: "Definizione e individuazione dei fattori di rischio", lessonsCount: 6, duration: "1h 30m" },
      { title: "Incidenti e infortuni mancati", lessonsCount: 5, duration: "1h 30m" },
      { title: "Tecniche di comunicazione e sensibilizzazione", lessonsCount: 5, duration: "1h 30m" }
    ]
  },
  {
    id: "78",
    title: "Personale addetto alla manipolazione degli alimenti",
    lessons: 40,
    duration: "8h",
    price: "97,60",
    category: "HACCP",
    description: "Corso per operatori del settore alimentare che manipolano cibi, sostitutivo del libretto sanitario.",
    objectives: ["Igiene del personale", "Contaminazioni alimentari", "Conservazione dei prodotti"],
    references: ["Reg. CE 852/04"],
    recipients: "Cuochi, camerieri, addetti banco",
    syllabus: [
      { title: "Igiene alimentare e normativa", lessonsCount: 10, duration: "2h" },
      { title: "Contaminazioni e malattie alimentari", lessonsCount: 10, duration: "2h" },
      { title: "Procedure di autocontrollo e pulizia", lessonsCount: 10, duration: "2h" },
      { title: "Conservazione e stoccaggio", lessonsCount: 8, duration: "1h 30m" },
      { title: "Test finale", lessonsCount: 2, duration: "30m" }
    ]
  },
  {
    id: "80",
    title: "Responsabile dell'industria alimentare e del sistema HACCP - Aggiornamento",
    lessons: 40,
    duration: "8h",
    price: "97,60",
    category: "HACCP",
    description: "Aggiornamento periodico per responsabili del piano di autocontrollo HACCP.",
    objectives: ["Revisione del piano HACCP", "Nuove normative", "Audit interni"],
    references: ["Reg. CE 852/04"],
    recipients: "Titolari e responsabili di attività alimentari",
    syllabus: [
      { title: "Documento Progettuale", lessonsCount: 1, duration: "0m" },
      { title: "Evoluzione della normativa alimentare", lessonsCount: 10, duration: "2h" },
      { title: "Revisione del sistema di autocontrollo", lessonsCount: 10, duration: "2h" },
      { title: "Gestione delle allerte e rintracciabilità", lessonsCount: 10, duration: "2h" },
      { title: "Audit e verifiche ispettive", lessonsCount: 8, duration: "1h 45m" },
      { title: "Quiz di Verifica", lessonsCount: 1, duration: "15m" }
    ]
  },
  {
    id: "81",
    title: "Personale addetto alla manipolazione degli alimenti - Aggiornamento",
    lessons: 34,
    duration: "6h",
    price: "73,20",
    category: "HACCP",
    description: "Il corso si propone un'efficace formazione finalizzata alla corretta attuazione di tutte le misure di buona prassi igienica, per garantire una reale prevenzione delle tossinfezioni alimentari.",
    objectives: ["Formare il personale addetto alla manipolazione degli alimenti", "Garantire la sicurezza e la qualità degli alimenti", "Applicare le conoscenze nel contesto delle Imprese Alimentari"],
    references: ["Pacchetto Igiene (Regolamenti Europei 852/853/854 del 2004)"],
    recipients: "A tutti gli operatori del settore alimentare indipendentemente dalla mansione svolta (cuochi, pizzaioli, barman, ecc.)",
    syllabus: [
      { title: "Documento Progettuale", lessonsCount: 1, duration: "0m" },
      { title: "Sicurezza e Igiene Alimentare", lessonsCount: 31, duration: "5h 30m" },
      { title: "Quiz di Verifica", lessonsCount: 1, duration: "15m" },
      { title: "Questionario di Gradimento", lessonsCount: 1, duration: "15m" }
    ]
  },
  {
    id: "82",
    title: "Responsabile dell'industria alimentare e del sistema HACCP",
    lessons: 62,
    duration: "20h",
    price: "244,00",
    category: "HACCP",
    description: "Corso completo per la gestione del sistema di autocontrollo nelle imprese alimentari.",
    objectives: ["Analisi dei pericoli", "Punti critici di controllo", "Documentazione"],
    references: ["Reg. CE 852/04"],
    recipients: "Titolari e responsabili",
    syllabus: [
      { title: "Introduzione all'HACCP", lessonsCount: 10, duration: "3h" },
      { title: "Normativa e requisiti strutturali", lessonsCount: 12, duration: "4h" },
      { title: "I 7 principi del sistema HACCP", lessonsCount: 15, duration: "5h" },
      { title: "Gestione delle non conformità", lessonsCount: 10, duration: "3h" },
      { title: "Documentazione e registri", lessonsCount: 10, duration: "3h" },
      { title: "Test finale", lessonsCount: 5, duration: "2h" }
    ]
  },
  {
    id: "86",
    title: "Personale addetto che non manipola alimenti",
    lessons: 23,
    duration: "4h",
    price: "48,80",
    category: "HACCP",
    description: "Formazione per addetti che operano in ambienti alimentari senza contatto diretto con il cibo.",
    objectives: ["Igiene generale", "Comportamenti corretti", "Prevenzione"],
    references: ["Reg. CE 852/04"],
    recipients: "Magazzinieri, trasportatori, addetti alla vendita di prodotti confezionati",
    syllabus: [
      { title: "Documento Progettuale", lessonsCount: 1, duration: "0m" },
      { title: "Basi dell'igiene alimentare", lessonsCount: 7, duration: "1h 15m" },
      { title: "Rischi di contaminazione indiretta", lessonsCount: 7, duration: "1h 15m" },
      { title: "Procedure di pulizia e sanificazione", lessonsCount: 7, duration: "1h 15m" },
      { title: "Quiz di Verifica", lessonsCount: 1, duration: "15m" }
    ]
  },
  {
    id: "20",
    title: "Formazione specifica per lavoratore - rischio basso",
    lessons: 17,
    duration: "4h",
    price: "48,80",
    category: "Sicurezza lavoratori",
    description: "Modulo specifico per lavoratori operanti in settori a rischio basso (uffici, commercio).",
    objectives: ["Rischi in ufficio", "Ergonomia", "Stress lavoro-correlato"],
    references: ["Art. 37 D.Lgs. 81/08", "Accordo Stato-Regioni 21/12/2011"],
    recipients: "Lavoratori Rischio Basso",
    syllabus: [
      { title: "Documento Progettuale", lessonsCount: 1, duration: "0m" },
      { title: "Rischi infortuni e meccanici", lessonsCount: 4, duration: "1h" },
      { title: "Ergonomia e videoterminali", lessonsCount: 4, duration: "1h" },
      { title: "Stress lavoro-correlato e benessere", lessonsCount: 4, duration: "1h" },
      { title: "Emergenze e primo soccorso", lessonsCount: 3, duration: "45m" },
      { title: "Quiz di Verifica", lessonsCount: 1, duration: "15m" }
    ]
  },
  {
    id: "48",
    title: "RLS: Rappresentante dei lavoratori per la sicurezza - Aggiornamento 4 ore",
    lessons: 18,
    duration: "4h",
    price: "48,80",
    category: "RLS",
    description: "Aggiornamento annuale obbligatorio per RLS in aziende fino a 50 dipendenti.",
    objectives: ["Novità normative", "Analisi infortuni", "Miglioramento sicurezza"],
    references: ["Art. 37 D.Lgs. 81/08", "Accordo Stato-Regioni 17/04/2025 (Rep. Atti n. 59/CSR)"],
    recipients: "RLS",
    syllabus: [
      { title: "Documento Progettuale", lessonsCount: 1, duration: "0m" },
      { title: "Evoluzione del quadro normativo", lessonsCount: 4, duration: "1h" },
      { title: "Approfondimenti su rischi specifici", lessonsCount: 6, duration: "1h 30m" },
      { title: "Tecniche di consultazione e partecipazione", lessonsCount: 6, duration: "1h 15m" },
      { title: "Quiz di Verifica", lessonsCount: 1, duration: "15m" }
    ]
  },
  {
    id: "53",
    title: "Formazione uso industriale e professionale dei Diisocianati - Intermedio",
    lessons: 16,
    duration: "3h",
    price: "36,60",
    category: "Utilizzo diisocianati",
    description: "Corso di livello intermedio per l'uso sicuro dei diisocianati.",
    objectives: ["Rischi chimici avanzati", "Procedure operative", "Primo soccorso"],
    references: ["Regolamento (UE) 2020/1149"],
    recipients: "Lavoratori e preposti",
    syllabus: [
      { title: "Approfondimento tossicologico", lessonsCount: 4, duration: "45m" },
      { title: "Gestione delle fuoriuscite e contaminazioni", lessonsCount: 4, duration: "45m" },
      { title: "Manutenzione delle attrezzature", lessonsCount: 4, duration: "45m" },
      { title: "Primo soccorso specifico", lessonsCount: 3, duration: "30m" },
      { title: "Test finale", lessonsCount: 1, duration: "15m" }
    ]
  },
  {
    id: "54",
    title: "Abilitazione alla conduzione di carrelli - Modulo Teorico",
    lessons: 31,
    duration: "8h",
    price: "97,60",
    category: "Attrezzature",
    description: "Parte teorica per l'abilitazione all'uso di carrelli elevatori semoventi.",
    objectives: ["Norme di guida", "Stabilità del carico", "Manutenzione"],
    references: ["Art. 73 D.Lgs. 81/08", "Accordo Stato-Regioni 22/02/2012"],
    recipients: "Addetti alla conduzione di carrelli",
    syllabus: [
      { title: "Modulo Giuridico - Normativo", lessonsCount: 5, duration: "1h" },
      { title: "Modulo Tecnico: tipologie di carrelli", lessonsCount: 10, duration: "3h" },
      { title: "Rischi connessi all'uso dei carrelli", lessonsCount: 10, duration: "3h" },
      { title: "Manutenzione e verifiche giornaliere", lessonsCount: 5, duration: "50m" },
      { title: "Test di verifica finale", lessonsCount: 1, duration: "10m" }
    ]
  },
  {
    id: "71",
    title: "Responsabile del Servizio di Prevenzione e Protezione Datore di Lavoro Rischio Medio - Moduli 1 e 2",
    lessons: 67,
    duration: "16h",
    price: "195,20",
    category: "Datore di lavoro",
    description: "Corso per datori di lavoro RSPP in aziende a rischio medio (agricoltura, trasporti).",
    objectives: ["Valutazione rischi specifici", "Piani di sicurezza", "Formazione"],
    references: ["Art. 34 D.Lgs. 81/08", "Accordo Stato-Regioni 21/12/2011"],
    recipients: "Datori di lavoro (Rischio Medio)",
    syllabus: [
      { title: "Documento Progettuale", lessonsCount: 1, duration: "0m" },
      { title: "Modulo 1: Giuridico - Normativo", lessonsCount: 20, duration: "5h" },
      { title: "Modulo 2: Gestionale - Organizzazione sicurezza", lessonsCount: 20, duration: "5h" },
      { title: "Modulo 3: Tecnico - Rischi specifici medio", lessonsCount: 25, duration: "5h 45m" },
      { title: "Quiz di Verifica", lessonsCount: 1, duration: "15m" }
    ]
  },
  {
    id: "22",
    title: "Formazione specifica per lavoratore - rischio basso del settore uffici",
    lessons: 22,
    duration: "4h",
    price: "48,80",
    category: "Sicurezza lavoratori",
    description: "Corso mirato ai rischi specifici del lavoro d'ufficio e amministrativo.",
    objectives: ["Postura e VDT", "Illuminazione", "Ambiente di lavoro"],
    references: ["Art. 37 D.Lgs. 81/08", "Accordo Stato-Regioni 17/04/2025 (Rep. Atti n. 59/CSR)"],
    recipients: "Impiegati e addetti uffici",
    syllabus: [
      { title: "Documento Progettuale", lessonsCount: 1, duration: "0m" },
      { title: "Ergonomia della postazione", lessonsCount: 7, duration: "1h 30m" },
      { title: "Uso dei videoterminali", lessonsCount: 7, duration: "1h 30m" },
      { title: "Microclima e illuminazione", lessonsCount: 6, duration: "45m" },
      { title: "Quiz di Verifica", lessonsCount: 1, duration: "15m" }
    ]
  },
  {
    id: "49",
    title: "RLS: Rappresentante dei lavoratori per la sicurezza - Aggiornamento 8 ore",
    lessons: 34,
    duration: "8h",
    price: "97,60",
    category: "RLS",
    description: "Aggiornamento annuale obbligatorio per RLS in aziende con oltre 50 dipendenti.",
    objectives: ["Tecniche di audit", "Partecipazione alla sicurezza", "Approfondimenti tecnici"],
    references: ["Art. 37 D.Lgs. 81/08", "Accordo Stato-Regioni 17/04/2025 (Rep. Atti n. 59/CSR)"],
    recipients: "RLS",
    syllabus: [
      { title: "Documento Progettuale", lessonsCount: 1, duration: "0m" },
      { title: "Novità legislative e giurisprudenziali", lessonsCount: 8, duration: "2h" },
      { title: "Sistemi di gestione della sicurezza", lessonsCount: 8, duration: "2h" },
      { title: "Comunicazione e negoziazione", lessonsCount: 8, duration: "2h" },
      { title: "Analisi dei rischi complessi", lessonsCount: 8, duration: "1h 45m" },
      { title: "Quiz di Verifica", lessonsCount: 1, duration: "15m" }
    ]
  },
  {
    id: "51",
    title: "Formazione uso industriale e professionale dei Diisocianati - Avanzato",
    lessons: 19,
    duration: "4h",
    price: "48,80",
    category: "Utilizzo diisocianati",
    description: "Livello avanzato per la gestione complessa di prodotti contenenti diisocianati.",
    objectives: ["Gestione emergenze chimiche", "Misure tecniche avanzate", "Monitoraggio"],
    references: ["Regolamento (UE) 2020/1149"],
    recipients: "Lavoratori esperti e responsabili",
    syllabus: [
      { title: "Documento Progettuale", lessonsCount: 1, duration: "0m" },
      { title: "Comportamento chimico avanzato", lessonsCount: 5, duration: "1h" },
      { title: "Sistemi di ventilazione e abbattimento", lessonsCount: 6, duration: "1h 30m" },
      { title: "Gestione delle emergenze ambientali", lessonsCount: 6, duration: "1h 15m" },
      { title: "Quiz di Verifica", lessonsCount: 1, duration: "15m" }
    ]
  },
  {
    id: "62",
    title: "Abilitazione alla conduzione di trattori - Modulo Teorico",
    lessons: 13,
    duration: "3h",
    price: "36,60",
    category: "Attrezzature",
    description: "Teoria per l'abilitazione alla guida di trattori agricoli o forestali.",
    objectives: ["Componenti del trattore", "Rischi di ribaltamento", "Dispositivi di sicurezza"],
    references: ["Art. 73 D.Lgs. 81/08", "Accordo Stato-Regioni 22/02/2012"],
    recipients: "Operatori agricoli",
    syllabus: [
      { title: "Normativa e responsabilità dell'operatore", lessonsCount: 3, duration: "45m" },
      { title: "Componenti e dispositivi di sicurezza", lessonsCount: 4, duration: "1h" },
      { title: "Rischi specifici: ribaltamento e schiacciamento", lessonsCount: 4, duration: "1h" },
      { title: "Test finale", lessonsCount: 2, duration: "15m" }
    ]
  },
  {
    id: "69",
    title: "Responsabile del Servizio di Prevenzione e Protezione Datore di Lavoro Rischio Alto - Moduli 1 e 2",
    lessons: 93,
    duration: "24h",
    price: "292,80",
    category: "Datore di lavoro",
    description: "Corso per datori di lavoro RSPP in aziende a rischio alto (edilizia, chimica).",
    objectives: ["Analisi rischi complessi", "Procedure di lavoro sicuro", "Gestione appalti"],
    references: ["Art. 34 D.Lgs. 81/08", "Accordo Stato-Regioni 21/12/2011"],
    recipients: "Datori di lavoro (Rischio Alto)",
    syllabus: [
      { title: "Documento Progettuale", lessonsCount: 1, duration: "0m" },
      { title: "Modulo 1: Giuridico - Normativo", lessonsCount: 25, duration: "7h" },
      { title: "Modulo 2: Gestionale - Organizzazione sicurezza", lessonsCount: 25, duration: "7h" },
      { title: "Modulo 3: Tecnico - Rischi specifici alto", lessonsCount: 41, duration: "9h 45m" },
      { title: "Quiz di Verifica", lessonsCount: 1, duration: "15m" }
    ]
  },
  {
    id: "76",
    title: "Corso Preposto",
    lessons: 20,
    duration: "5h",
    price: "61,00",
    category: "Dirigente - Preposto",
    description: "Modulo aggiuntivo per chi svolge funzioni di preposto, focalizzato sulla vigilanza.",
    objectives: ["Compiti di sorveglianza", "Gestione dei conflitti", "Intervento in caso di pericolo"],
    references: ["Art. 37 D.Lgs. 81/08", "Accordo n°221 del 21/12/2011"],
    recipients: "Preposti",
    syllabus: [
      { title: "Documento Progettuale", lessonsCount: 1, duration: "0m" },
      { title: "Modulo Giuridico Organizzativo", lessonsCount: 13, duration: "4h 5m" },
      { title: "Quiz di Verifica", lessonsCount: 1, duration: "45m" },
      { title: "Corso Formazione Preposto", lessonsCount: 3, duration: "1h 33m" },
      { title: "Quiz di Verifica", lessonsCount: 1, duration: "48m" },
      { title: "Questionario di Gradimento", lessonsCount: 1, duration: "9m" }
    ]
  },
  {
    id: "21",
    title: "Formazione generale e specifica per lavoratore - rischio basso",
    lessons: 31,
    duration: "8h",
    price: "97,60",
    category: "Sicurezza lavoratori",
    description: "Percorso completo (Generale + Specifica) per lavoratori a rischio basso.",
    objectives: ["Basi della sicurezza", "Rischi specifici uffici/commercio", "Test finale"],
    references: ["Art. 37 D.Lgs. 81/08", "Accordo Stato-Regioni 17/04/2025 (Rep. Atti n. 59/CSR)"],
    recipients: "Nuovi assunti (Rischio Basso)",
    syllabus: [
      { title: "Documento Progettuale", lessonsCount: 1, duration: "0m" },
      { title: "Modulo Generale: concetti base", lessonsCount: 12, duration: "4h" },
      { title: "Modulo Specifico: rischi uffici e commercio", lessonsCount: 17, duration: "3h 45m" },
      { title: "Quiz di Verifica", lessonsCount: 1, duration: "15m" }
    ]
  },
  {
    id: "60",
    title: "Abilitazione alla conduzione di piattaforme di lavoro elevabili (PLE) - Modulo Teorico",
    lessons: 15,
    duration: "4h",
    price: "48,80",
    category: "Attrezzature",
    description: "Teoria per l'uso di piattaforme aeree con e senza stabilizzatori.",
    objectives: ["Tipologie di PLE", "Controlli pre-utilizzo", "Manovre di emergenza"],
    references: ["Art. 73 D.Lgs. 81/08", "Accordo Stato-Regioni 22/02/2012"],
    recipients: "Operatori PLE",
    syllabus: [
      { title: "Normativa generale e responsabilità", lessonsCount: 3, duration: "1h" },
      { title: "Categorie di PLE e componenti", lessonsCount: 4, duration: "1h" },
      { title: "Dispositivi di comando e sicurezza", lessonsCount: 4, duration: "1h" },
      { title: "Procedure operative e salvataggio", lessonsCount: 3, duration: "50m" },
      { title: "Test di valutazione", lessonsCount: 1, duration: "10m" }
    ]
  },
  {
    id: "24",
    title: "Formazione generale e specifica per lavoratore - rischio basso del settore uffici",
    lessons: 36,
    duration: "8h",
    price: "97,60",
    category: "Sicurezza lavoratori",
    description: "Corso completo mirato specificamente al personale amministrativo.",
    objectives: ["Postazione di lavoro", "Software e vista", "Organizzazione"],
    references: ["Art. 37 D.Lgs. 81/08", "Accordo Stato-Regioni 17/04/2025 (Rep. Atti n. 59/CSR)"],
    recipients: "Personale uffici",
    syllabus: [
      { title: "Documento Progettuale", lessonsCount: 1, duration: "0m" },
      { title: "Modulo Generale", lessonsCount: 12, duration: "4h" },
      { title: "Modulo Specifico Uffici", lessonsCount: 22, duration: "3h 45m" },
      { title: "Quiz di Verifica", lessonsCount: 1, duration: "15m" }
    ]
  },
  {
    id: "57",
    title: "Abilitazione alla conduzione di gru su autocarro - Modulo Teorico",
    lessons: 15,
    duration: "4h",
    price: "48,80",
    category: "Attrezzature",
    description: "Teoria per l'abilitazione all'uso di gru installate su autocarro.",
    objectives: ["Stabilità del mezzo", "Sistemi di comando", "Carichi sospesi"],
    references: ["Art. 73 D.Lgs. 81/08", "Accordo Stato-Regioni 22/02/2012"],
    recipients: "Operatori gru su autocarro",
    syllabus: [
      { title: "Legislazione e norme di riferimento", lessonsCount: 3, duration: "1h" },
      { title: "Terminologia e caratteristiche delle gru", lessonsCount: 4, duration: "1h" },
      { title: "Sistemi di controllo e limitatori", lessonsCount: 4, duration: "1h" },
      { title: "Operazioni di carico e scarico", lessonsCount: 3, duration: "50m" },
      { title: "Verifica finale", lessonsCount: 1, duration: "10m" }
    ]
  },
  {
    id: "68",
    title: "Formazione per Datore di Lavoro che svolge direttamente i compiti di prevenzione e protezione dai rischi - Aggiornamento",
    lessons: 46,
    duration: "8h",
    price: "122,00",
    category: "Datore di lavoro",
    description: "Aggiornamento quinquennale per datori di lavoro RSPP.",
    objectives: ["Revisione DVR", "Sistemi di gestione", "Cultura della sicurezza"],
    references: ["Art. 34 D.Lgs. 81/08", "Accordo Stato-Regioni 21/12/2011"],
    recipients: "Datori di lavoro RSPP",
    syllabus: [
      { title: "Documento Progettuale", lessonsCount: 1, duration: "0m" },
      { title: "Aggiornamento normativo e giurisprudenziale", lessonsCount: 15, duration: "2h 30m" },
      { title: "Approfondimenti tecnici sui rischi", lessonsCount: 15, duration: "2h 30m" },
      { title: "Sistemi di gestione e modelli organizzativi", lessonsCount: 14, duration: "2h 45m" },
      { title: "Quiz di Verifica", lessonsCount: 1, duration: "15m" }
    ]
  },
  {
    id: "18",
    title: "Formazione per lavoratore - aggiornamento",
    lessons: 23,
    duration: "6h",
    price: "73,20",
    category: "Sicurezza lavoratori",
    description: "Aggiornamento quinquennale obbligatorio per tutti i lavoratori.",
    objectives: ["Ripasso concetti base", "Novità normative", "Analisi infortuni"],
    references: ["Art. 37 D.Lgs. 81/08", "Accordo Stato-Regioni 17/04/2025 (Rep. Atti n. 59/CSR)"],
    recipients: "Tutti i lavoratori",
    syllabus: [
      { title: "Evoluzione della normativa", lessonsCount: 5, duration: "1h 30m" },
      { title: "Approfondimenti su rischi specifici", lessonsCount: 8, duration: "2h" },
      { title: "Procedure di emergenza e primo soccorso", lessonsCount: 5, duration: "1h 30m" },
      { title: "Casi studio e infortuni recenti", lessonsCount: 4, duration: "50m" },
      { title: "Test di verifica", lessonsCount: 1, duration: "10m" }
    ]
  },
  {
    id: "56",
    title: "Abilitazione alla conduzione di gru mobili - Modulo Teorico",
    lessons: 26,
    duration: "7h",
    price: "85,40",
    category: "Attrezzature",
    description: "Teoria per l'uso di autogru e gru mobili.",
    objectives: ["Diagrammi di carico", "Segnaletica", "Sicurezza in cantiere"],
    references: ["Art. 73 D.Lgs. 81/08", "Accordo Stato-Regioni 22/02/2012"],
    recipients: "Operatori gru mobili",
    syllabus: [
      { title: "Documento Progettuale", lessonsCount: 1, duration: "0m" },
      { title: "Modulo Giuridico - Normativo", lessonsCount: 5, duration: "1h" },
      { title: "Modulo Tecnico: terminologia e componenti", lessonsCount: 10, duration: "3h" },
      { title: "Stabilità e diagrammi di carico", lessonsCount: 9, duration: "2h 45m" },
      { title: "Quiz di Verifica", lessonsCount: 1, duration: "15m" }
    ]
  },
  {
    id: "23",
    title: "Formazione per lavoratori - Rischio Lavoro su Videoterminali",
    lessons: 7,
    duration: "1h",
    price: "24,40",
    category: "Sicurezza lavoratori",
    description: "Modulo specifico sull'uso corretto dei videoterminali.",
    objectives: ["Prevenzione disturbi visivi", "Ergonomia fisica", "Pause e riposo"],
    references: ["Titolo VII D.Lgs. 81/08", "Accordo Stato-Regioni 21/12/2011"],
    recipients: "Addetti VDT",
    syllabus: [
      { title: "Rischi per la vista e l'apparato muscolo-scheletrico", lessonsCount: 3, duration: "30m" },
      { title: "Ergonomia della postazione di lavoro", lessonsCount: 2, duration: "20m" },
      { title: "Esercizi di rilassamento e pause", lessonsCount: 1, duration: "5m" },
      { title: "Test finale", lessonsCount: 1, duration: "5m" }
    ]
  },
  {
    id: "55",
    title: "Abilitazione alla conduzione di gru a torre - Modulo Teorico",
    lessons: 42,
    duration: "8h",
    price: "97,60",
    category: "Attrezzature",
    description: "Teoria per l'abilitazione alla guida di gru a torre (rotazione in alto/basso).",
    objectives: ["Stabilità della torre", "Freni e limitatori", "Manovre"],
    references: ["Art. 73 D.Lgs. 81/08", "Accordo Stato-Regioni 22/02/2012"],
    recipients: "Gruisti",
    syllabus: [
      { title: "Documento Progettuale", lessonsCount: 1, duration: "0m" },
      { title: "Modulo Giuridico - Normativo", lessonsCount: 5, duration: "1h" },
      { title: "Modulo Tecnico: tipologie di gru a torre", lessonsCount: 15, duration: "3h" },
      { title: "Dispositivi di sicurezza e manovre", lessonsCount: 20, duration: "3h 45m" },
      { title: "Quiz di Verifica", lessonsCount: 1, duration: "15m" }
    ]
  },
  {
    id: "65",
    title: "Formazione per Datore di lavoro",
    lessons: 72,
    duration: "16h",
    price: "292,80",
    category: "Datore di lavoro",
    description: "Corso completo sulle responsabilità e compiti del datore di lavoro.",
    objectives: ["Organizzazione aziendale", "Delega di funzioni", "Sanzioni"],
    references: ["D.Lgs. 81/08", "Accordo Stato-Regioni 17/04/2025 (Rep. Atti n. 59/CSR)"],
    recipients: "Datori di lavoro",
    syllabus: [
      { title: "Documento Progettuale", lessonsCount: 1, duration: "0m" },
      { title: "Quadro normativo e responsabilità", lessonsCount: 20, duration: "5h" },
      { title: "Gestione ed organizzazione della sicurezza", lessonsCount: 25, duration: "5h" },
      { title: "Modelli organizzativi e 231/01", lessonsCount: 25, duration: "5h 45m" },
      { title: "Quiz di Verifica", lessonsCount: 1, duration: "15m" }
    ]
  },
  {
    id: "46",
    title: "Formazione per lavoratori - Rischio Stress Lavoro Correlato",
    lessons: 8,
    duration: "1h",
    price: "24,40",
    category: "Sicurezza lavoratori",
    description: "Sensibilizzazione e prevenzione dello stress occupazionale.",
    objectives: ["Indicatori di stress", "Fattori di rischio", "Benessere organizzativo"],
    references: ["Art. 28 D.Lgs. 81/08", "Accordo Stato-Regioni 21/12/2011"],
    recipients: "Tutti i lavoratori",
    syllabus: [
      { title: "Definizione di stress e meccanismi biologici", lessonsCount: 3, duration: "20m" },
      { title: "Fattori di rischio oggettivi e soggettivi", lessonsCount: 3, duration: "25m" },
      { title: "Strategie di coping e prevenzione", lessonsCount: 1, duration: "10m" },
      { title: "Test finale", lessonsCount: 1, duration: "5m" }
    ]
  },
  {
    id: "61",
    title: "Abilitazione alla conduzione di pompe per calcestruzzo - Modulo Teorico",
    lessons: 27,
    duration: "7h",
    price: "85,40",
    category: "Attrezzature",
    description: "Teoria per l'uso sicuro di pompe per la distribuzione del calcestruzzo.",
    objectives: ["Posizionamento del braccio", "Pressione di pompaggio", "Pulizia"],
    references: ["Art. 73 D.Lgs. 81/08", "Accordo Stato-Regioni 22/02/2012"],
    recipients: "Operatori pompe calcestruzzo",
    syllabus: [
      { title: "Documento Progettuale", lessonsCount: 1, duration: "0m" },
      { title: "Modulo Giuridico - Normativo", lessonsCount: 5, duration: "1h" },
      { title: "Modulo Tecnico: componenti della pompa", lessonsCount: 10, duration: "3h" },
      { title: "Procedure operative e sicurezza", lessonsCount: 10, duration: "2h 45m" },
      { title: "Quiz di Verifica", lessonsCount: 1, duration: "15m" }
    ]
  },
  {
    id: "64",
    title: "Formazione Datore di lavoro - Modulo Cantieri",
    lessons: 30,
    duration: "6h",
    price: "195,20",
    category: "Datore di lavoro",
    description: "Modulo specifico per datori di lavoro operanti nel settore edile.",
    objectives: ["Titolo IV D.Lgs. 81/08", "PSC e POS", "Costi della sicurezza"],
    references: ["D.Lgs. 81/08", "Accordo Stato-Regioni 21/12/2011"],
    recipients: "Datori di lavoro edili",
    syllabus: [
      { title: "Documento Progettuale", lessonsCount: 1, duration: "0m" },
      { title: "Il Titolo IV del D.Lgs. 81/08", lessonsCount: 10, duration: "2h" },
      { title: "La gestione della sicurezza in cantiere", lessonsCount: 10, duration: "2h" },
      { title: "POS, PSC e documentazione di cantiere", lessonsCount: 8, duration: "1h 45m" },
      { title: "Quiz di Verifica", lessonsCount: 1, duration: "15m" }
    ]
  },
  {
    id: "39",
    title: "Formazione per lavoratori - Rischio Microclimatico",
    lessons: 11,
    duration: "2h",
    price: "24,40",
    category: "Sicurezza lavoratori",
    description: "Gestione dei rischi legati a temperatura, umidità e correnti d'aria.",
    objectives: ["Comfort termico", "Stress da calore/freddo", "Ventilazione"],
    references: ["D.Lgs. 81/08", "Accordo Stato-Regioni 21/12/2011"],
    recipients: "Lavoratori in ambienti estremi",
    syllabus: [
      { title: "Documento Progettuale", lessonsCount: 1, duration: "0m" },
      { title: "Parametri microclimatici", lessonsCount: 3, duration: "30m" },
      { title: "Effetti sulla salute", lessonsCount: 3, duration: "30m" },
      { title: "Misure di prevenzione", lessonsCount: 3, duration: "45m" },
      { title: "Quiz di Verifica", lessonsCount: 1, duration: "15m" }
    ]
  },
  {
    id: "58",
    title: "Abilitazione alla conduzione di Macchine Movimento Terra - Modulo Teorico",
    lessons: 16,
    duration: "4h",
    price: "36,60",
    category: "Attrezzature",
    description: "Teoria per escavatori, caricatori e terne.",
    objectives: ["Meccanica del terreno", "Sistemi idraulici", "Scavi e rinterri"],
    references: ["Art. 73 D.Lgs. 81/08", "Accordo Stato-Regioni 17/04/2025 (Rep. Atti n. 59/CSR)"],
    recipients: "Operatori MMT",
    syllabus: [
      { title: "Normativa e responsabilità", lessonsCount: 3, duration: "1h" },
      { title: "Categorie di macchine e componenti", lessonsCount: 4, duration: "1h" },
      { title: "Controlli pre-utilizzo e manutenzione", lessonsCount: 4, duration: "1h" },
      { title: "Tecniche di scavo e sicurezza", lessonsCount: 4, duration: "50m" },
      { title: "Test finale", lessonsCount: 1, duration: "10m" }
    ]
  },
  {
    id: "40",
    title: "Formazione per lavoratori - Rischio Movimentazione Manuale dei Carichi",
    lessons: 8,
    duration: "1h",
    price: "24,40",
    category: "Sicurezza lavoratori",
    description: "Prevenzione delle patologie muscolo-scheletriche da sollevamento.",
    objectives: ["Tecniche di sollevamento", "Limiti di peso", "Uso di ausili"],
    references: ["Titolo VI D.Lgs. 81/08", "Accordo Stato-Regioni 21/12/2011"],
    recipients: "Addetti logistica e produzione",
    syllabus: [
      { title: "Documento Progettuale", lessonsCount: 1, duration: "0m" },
      { title: "Anatomia e biomeccanica", lessonsCount: 2, duration: "15m" },
      { title: "Tecniche di sollevamento sicuro", lessonsCount: 2, duration: "15m" },
      { title: "Ausili meccanici", lessonsCount: 2, duration: "15m" },
      { title: "Quiz di Verifica", lessonsCount: 1, duration: "15m" }
    ]
  },
  {
    id: "28",
    title: "Formazione per lavoratori - Rischio Biologico",
    lessons: 8,
    duration: "1h",
    price: "24,40",
    category: "Sicurezza lavoratori",
    description: "Prevenzione dell'esposizione ad agenti biologici (virus, batteri).",
    objectives: ["Catena del contagio", "Misure di igiene", "Vaccinazioni"],
    references: ["Titolo X D.Lgs. 81/08", "Accordo Stato-Regioni 21/12/2011"],
    recipients: "Personale sanitario, pulizie",
    syllabus: [
      { title: "Documento Progettuale", lessonsCount: 1, duration: "0m" },
      { title: "Agenti biologici e classificazione", lessonsCount: 2, duration: "15m" },
      { title: "Vie di trasmissione", lessonsCount: 2, duration: "15m" },
      { title: "DPI e igiene", lessonsCount: 2, duration: "15m" },
      { title: "Quiz di Verifica", lessonsCount: 1, duration: "15m" }
    ]
  },
  {
    id: "41",
    title: "Formazione per lavoratori - Rischio Radiazioni Ottiche Artificiali",
    lessons: 6,
    duration: "30m",
    price: "24,40",
    category: "Sicurezza lavoratori",
    description: "Rischi legati a lampade, laser e processi di saldatura.",
    objectives: ["Effetti su occhi e pelle", "DPI specifici", "Schermature"],
    references: ["Capo V Titolo VIII D.Lgs. 81/08", "Accordo Stato-Regioni 21/12/2011"],
    recipients: "Saldatori, addetti laboratori",
    syllabus: [
      { title: "Documento Progettuale", lessonsCount: 1, duration: "0m" },
      { title: "Sorgenti di ROA", lessonsCount: 2, duration: "5m" },
      { title: "Danni alla salute", lessonsCount: 2, duration: "10m" },
      { title: "Quiz di Verifica", lessonsCount: 1, duration: "15m" }
    ]
  },
  {
    id: "38",
    title: "Formazione per lavoratori - Rischio Legionella",
    lessons: 5,
    duration: "30m",
    price: "24,40",
    category: "Sicurezza lavoratori",
    description: "Prevenzione della legionellosi negli impianti idrici e aeraulici.",
    objectives: ["Ciclo di vita del batterio", "Manutenzione impianti", "Sanificazione"],
    references: ["Linee guida nazionali Legionella"],
    recipients: "Manutentori, addetti strutture ricettive",
    syllabus: [
      { title: "Documento Progettuale", lessonsCount: 1, duration: "0m" },
      { title: "Biologia della Legionella", lessonsCount: 1, duration: "5m" },
      { title: "Prevenzione tecnica", lessonsCount: 2, duration: "10m" },
      { title: "Quiz di Verifica", lessonsCount: 1, duration: "15m" }
    ]
  },
  {
    id: "27",
    title: "Formazione per lavoratori - Rischio Agenti Cancerogeni, Mutageni, Teratogeni",
    lessons: 5,
    duration: "30m",
    price: "24,40",
    category: "Sicurezza lavoratori",
    description: "Gestione dei rischi legati a sostanze che possono causare tumori o mutazioni.",
    objectives: ["Etichettatura", "Sostituzione sostanze", "Monitoraggio"],
    references: ["Titolo IX D.Lgs. 81/08", "Accordo Stato-Regioni 21/12/2011"],
    recipients: "Addetti laboratori e industria chimica",
    syllabus: [
      { title: "Documento Progettuale", lessonsCount: 1, duration: "0m" },
      { title: "Definizioni e classificazione", lessonsCount: 1, duration: "5m" },
      { title: "Misure di protezione collettiva", lessonsCount: 2, duration: "10m" },
      { title: "Quiz di Verifica", lessonsCount: 1, duration: "15m" }
    ]
  },
  {
    id: "29",
    title: "Formazione per lavoratori - Rischio Amianto",
    lessons: 10,
    duration: "2h",
    price: "24,40",
    category: "Sicurezza lavoratori",
    description: "Informazione sui rischi dell'amianto e procedure di sicurezza.",
    objectives: ["Riconoscimento materiali", "Procedure di bonifica", "DPI"],
    references: ["D.Lgs. 81/08", "Accordo Stato-Regioni 21/12/2011"],
    recipients: "Edili, idraulici, manutentori",
    syllabus: [
      { title: "Documento Progettuale", lessonsCount: 1, duration: "0m" },
      { title: "Proprietà dell'amianto e rischi", lessonsCount: 3, duration: "30m" },
      { title: "Normativa di riferimento", lessonsCount: 2, duration: "30m" },
      { title: "Gestione del rischio e DPI", lessonsCount: 3, duration: "45m" },
      { title: "Quiz di Verifica", lessonsCount: 1, duration: "15m" }
    ]
  },
  {
    id: "31",
    title: "Formazione per lavoratori - Rischio Chimico",
    lessons: 12,
    duration: "2h",
    price: "24,40",
    category: "Sicurezza lavoratori",
    description: "Uso sicuro di sostanze chimiche e lettura delle schede di sicurezza.",
    objectives: ["Pittogrammi CLP", "Frasi H e P", "Stoccaggio"],
    references: ["Titolo IX D.Lgs. 81/08", "Accordo Stato-Regioni 21/12/2011"],
    recipients: "Tutti i lavoratori esposti",
    syllabus: [
      { title: "Classificazione ed etichettatura (CLP)", lessonsCount: 4, duration: "40m" },
      { title: "Schede di dati di sicurezza (SDS)", lessonsCount: 3, duration: "30m" },
      { title: "Misure di prevenzione e DPI", lessonsCount: 4, duration: "40m" },
      { title: "Test finale", lessonsCount: 1, duration: "10m" }
    ]
  },
  {
    id: "35",
    title: "Formazione per lavoratori - Rischio Incendio",
    lessons: 11,
    duration: "2h",
    price: "24,40",
    category: "Sicurezza lavoratori",
    description: "Informazione generale sulla prevenzione incendi ed evacuazione.",
    objectives: ["Triangolo del fuoco", "Estintori", "Piano di emergenza"],
    references: ["D.M. 02/09/2021"],
    recipients: "Tutti i lavoratori",
    syllabus: [
      { title: "Principi della combustione", lessonsCount: 3, duration: "30m" },
      { title: "Sostanze estinguenti e attrezzature", lessonsCount: 3, duration: "30m" },
      { title: "Procedure di evacuazione e chiamata", lessonsCount: 4, duration: "50m" },
      { title: "Test finale", lessonsCount: 1, duration: "10m" }
    ]
  },
  {
    id: "43",
    title: "Formazione per lavoratori - Rischio Rapina",
    lessons: 5,
    duration: "30m",
    price: "24,40",
    category: "Sicurezza lavoratori",
    description: "Procedure comportamentali in caso di rapina o aggressione.",
    objectives: ["Dissuasione", "Gestione del panico", "Post-evento"],
    references: ["D.Lgs. 81/08", "Accordo Stato-Regioni 21/12/2011"],
    recipients: "Addetti banche, gioiellerie, farmacie",
    syllabus: [
      { title: "Documento Progettuale", lessonsCount: 1, duration: "0m" },
      { title: "Analisi del fenomeno e prevenzione", lessonsCount: 1, duration: "5m" },
      { title: "Comportamento durante l'evento", lessonsCount: 2, duration: "10m" },
      { title: "Gestione post-traumatica", lessonsCount: 1, duration: "10m" },
      { title: "Quiz di Verifica", lessonsCount: 1, duration: "15m" }
    ]
  },
  {
    id: "34",
    title: "Formazione per lavoratori - Rischio Esposizione al Rumore",
    lessons: 12,
    duration: "2h",
    price: "24,40",
    category: "Sicurezza lavoratori",
    description: "Prevenzione dell'ipoacusia da rumore professionale.",
    objectives: ["Livelli di esposizione", "Otoprotettori", "Segnaletica"],
    references: ["Capo II Titolo VIII D.Lgs. 81/08", "Accordo Stato-Regioni 21/12/2011"],
    recipients: "Operai metalmeccanici, edili",
    syllabus: [
      { title: "Fisica del suono e misurazione", lessonsCount: 4, duration: "40m" },
      { title: "Effetti del rumore sull'udito", lessonsCount: 3, duration: "30m" },
      { title: "DPI: scelta e uso degli otoprotettori", lessonsCount: 4, duration: "40m" },
      { title: "Test finale", lessonsCount: 1, duration: "10m" }
    ]
  },
  {
    id: "36",
    title: "Formazione per lavoratori - Rischio Interferenze",
    lessons: 11,
    duration: "2h",
    price: "24,40",
    category: "Sicurezza lavoratori",
    description: "Gestione della sicurezza in presenza di ditte esterne o appalti.",
    objectives: ["DUVRI", "Coordinamento", "Rischi introdotti"],
    references: ["Art. 26 D.Lgs. 81/08", "Accordo Stato-Regioni 21/12/2011"],
    recipients: "Tutti i lavoratori",
    syllabus: [
      { title: "Documento Progettuale", lessonsCount: 1, duration: "0m" },
      { title: "Il concetto di interferenza", lessonsCount: 3, duration: "30m" },
      { title: "Obblighi del committente e dell'appaltatore", lessonsCount: 3, duration: "30m" },
      { title: "Il DUVRI: contenuti e finalità", lessonsCount: 3, duration: "45m" },
      { title: "Quiz di Verifica", lessonsCount: 1, duration: "15m" }
    ]
  },
  {
    id: "47",
    title: "Formazione per lavoratori - Rischio Vibrazioni",
    lessons: 5,
    duration: "30m",
    price: "24,40",
    category: "Sicurezza lavoratori",
    description: "Rischi da vibrazioni mano-braccio (HAV) e corpo intero (WBV).",
    objectives: ["Sindrome del dito bianco", "Sospensioni e sedili", "Tempi di esposizione"],
    references: ["Capo III Titolo VIII D.Lgs. 81/08", "Accordo Stato-Regioni 21/12/2011"],
    recipients: "Utilizzatori martelli pneumatici, autisti",
    syllabus: [
      { title: "Documento Progettuale", lessonsCount: 1, duration: "0m" },
      { title: "Tipologie di vibrazioni", lessonsCount: 1, duration: "5m" },
      { title: "Prevenzione e protezione", lessonsCount: 2, duration: "10m" },
      { title: "Quiz di Verifica", lessonsCount: 1, duration: "15m" }
    ]
  },
  {
    id: "45",
    title: "Formazione per lavoratori - Rischio Sismico",
    lessons: 5,
    duration: "30m",
    price: "24,40",
    category: "Sicurezza lavoratori",
    description: "Comportamenti corretti da adottare durante e dopo un terremoto.",
    objectives: ["Punti sicuri", "Evacuazione", "Primo soccorso"],
    references: ["D.Lgs. 81/08", "Accordo Stato-Regioni 21/12/2011"],
    recipients: "Tutti i lavoratori",
    syllabus: [
      { title: "Documento Progettuale", lessonsCount: 1, duration: "0m" },
      { title: "Natura dei terremoti", lessonsCount: 1, duration: "5m" },
      { title: "Procedure di emergenza sismica", lessonsCount: 2, duration: "10m" },
      { title: "Quiz di Verifica", lessonsCount: 1, duration: "15m" }
    ]
  },
  {
    id: "42",
    title: "Formazione per lavoratori - Rischio Radiazioni UV",
    lessons: 5,
    duration: "30m",
    price: "24,40",
    category: "Sicurezza lavoratori",
    description: "Protezione dalle radiazioni solari e artificiali ultraviolette.",
    objectives: ["Protezione solare", "Indumenti tecnici", "Idratazione"],
    references: ["D.Lgs. 81/08", "Accordo Stato-Regioni 21/12/2011"],
    recipients: "Lavoratori all'aperto, agricoltori",
    syllabus: [
      { title: "Documento Progettuale", lessonsCount: 1, duration: "0m" },
      { title: "Rischi da esposizione a UV", lessonsCount: 1, duration: "5m" },
      { title: "Misure di protezione individuale", lessonsCount: 2, duration: "10m" },
      { title: "Quiz di Verifica", lessonsCount: 1, duration: "15m" }
    ]
  },
  {
    id: "30",
    title: "Formazione per lavoratori - Rischio Atmosfere Esplosive",
    lessons: 11,
    duration: "2h",
    price: "24,40",
    category: "Sicurezza lavoratori",
    description: "Prevenzione esplosioni in ambienti con polveri o gas infiammabili.",
    objectives: ["Classificazione zone ATEX", "Sorgenti di innesco", "DPI antistatici"],
    references: ["Titolo XI D.Lgs. 81/08", "Accordo Stato-Regioni 21/12/2011"],
    recipients: "Addetti verniciatura, falegnamerie, silos",
    syllabus: [
      { title: "Documento Progettuale", lessonsCount: 1, duration: "0m" },
      { title: "Definizione di atmosfera esplosiva", lessonsCount: 3, duration: "30m" },
      { title: "Sorgenti di accensione", lessonsCount: 3, duration: "30m" },
      { title: "Misure di protezione ATEX", lessonsCount: 3, duration: "45m" },
      { title: "Quiz di Verifica", lessonsCount: 1, duration: "15m" }
    ]
  },
  {
    id: "44",
    title: "Formazione per lavoratori - Rischio Scariche Atmosferiche",
    lessons: 6,
    duration: "30m",
    price: "24,40",
    category: "Sicurezza lavoratori",
    description: "Protezione dai fulmini e gestione degli impianti di terra.",
    objectives: ["Parafulmini", "Equipotenzialità", "Comportamento all'aperto"],
    references: ["D.Lgs. 81/08", "Accordo Stato-Regioni 21/12/2011"],
    recipients: "Tutti i lavoratori",
    syllabus: [
      { title: "Documento Progettuale", lessonsCount: 1, duration: "0m" },
      { title: "Fenomenologia del fulmine", lessonsCount: 2, duration: "5m" },
      { title: "Sistemi di protezione", lessonsCount: 2, duration: "10m" },
      { title: "Quiz di Verifica", lessonsCount: 1, duration: "15m" }
    ]
  },
  {
    id: "32",
    title: "Formazione per lavoratori - Rischio Elettrico",
    lessons: 18,
    duration: "4h",
    price: "48,80",
    category: "Sicurezza lavoratori",
    description: "Informazione sui pericoli della corrente elettrica e contatti diretti/indiretti.",
    objectives: ["Effetti della corrente", "Impianti a norma", "Lavori in prossimità"],
    references: ["Titolo IX D.Lgs. 81/08", "Accordo Stato-Regioni 21/12/2011"],
    recipients: "Tutti i lavoratori",
    syllabus: [
      { title: "Documento Progettuale", lessonsCount: 1, duration: "0m" },
      { title: "Grandezze elettriche e rischi", lessonsCount: 5, duration: "1h" },
      { title: "Sistemi di protezione elettrica", lessonsCount: 5, duration: "1h 15m" },
      { title: "Primo soccorso al folgorato", lessonsCount: 6, duration: "1h 30m" },
      { title: "Quiz di Verifica", lessonsCount: 1, duration: "15m" }
    ]
  },
  {
    id: "33",
    title: "Formazione per lavoratori - Rischio Esposizione ai Campi Elettromagnetici",
    lessons: 11,
    duration: "2h",
    price: "24,40",
    category: "Sicurezza lavoratori",
    description: "Rischi legati a macchinari industriali e trasmettitori.",
    objectives: ["Effetti termici", "Pacemaker e impianti", "Distanze di sicurezza"],
    references: ["Capo IV Titolo VIII D.Lgs. 81/08", "Accordo Stato-Regioni 21/12/2011"],
    recipients: "Addetti saldatura induzione, manutentori",
    syllabus: [
      { title: "Documento Progettuale", lessonsCount: 1, duration: "0m" },
      { title: "Sorgenti di CEM", lessonsCount: 3, duration: "30m" },
      { title: "Effetti biologici e limiti", lessonsCount: 3, duration: "30m" },
      { title: "Misure di tutela", lessonsCount: 3, duration: "45m" },
      { title: "Quiz di Verifica", lessonsCount: 1, duration: "15m" }
    ]
  },
  {
    id: "25",
    title: "Addetto ai lavori elettrici (PES PAV PEI)",
    lessons: 58,
    duration: "16h",
    price: "195,20",
    category: "Sicurezza lavoratori",
    description: "Corso completo per la qualifica di personale esperto o avvertito nei lavori elettrici.",
    objectives: ["Norma CEI 11-27", "Lavori sotto tensione", "Procedure di sicurezza"],
    references: ["CEI 11-27"],
    recipients: "Elettricisti, manutentori",
    syllabus: [
      { title: "Legislazione sulla sicurezza elettrica", lessonsCount: 10, duration: "3h" },
      { title: "Effetti della corrente sul corpo umano", lessonsCount: 10, duration: "3h" },
      { title: "Norma CEI 11-27: definizioni e ruoli", lessonsCount: 15, duration: "4h" },
      { title: "Procedure per lavori fuori tensione", lessonsCount: 10, duration: "3h" },
      { title: "Procedure per lavori sotto tensione", lessonsCount: 10, duration: "2h" },
      { title: "Test di valutazione finale", lessonsCount: 3, duration: "1h" }
    ]
  },
  {
    id: "26",
    title: "Addetto ai lavori elettrici (PES PAV PEI) - Aggiornamento",
    lessons: 21,
    duration: "6h",
    price: "73,20",
    category: "Sicurezza lavoratori",
    description: "Aggiornamento periodico per mantenere la qualifica PES PAV PEI.",
    objectives: ["Revisione Norma CEI 11-27", "Nuove tecnologie", "Casi studio"],
    references: ["CEI 11-27"],
    recipients: "Personale qualificato",
    syllabus: [
      { title: "Documento Progettuale", lessonsCount: 1, duration: "0m" },
      { title: "Aggiornamento normativo CEI 11-27", lessonsCount: 10, duration: "3h" },
      { title: "Analisi di infortuni elettrici", lessonsCount: 5, duration: "1h 30m" },
      { title: "Nuove procedure di lavoro", lessonsCount: 4, duration: "1h 15m" },
      { title: "Quiz di Verifica", lessonsCount: 1, duration: "15m" }
    ]
  },
  {
    id: "hse-specialist-40",
    title: "HSE Specialist - 40 ore",
    lessons: 95,
    duration: "40h",
    price: "427,00 € incluso iva",
    category: "Corsi per Professionisti",
    description: "Corso conforme alla Norma UNI 11720:2025 per il profilo professionale HSE Specialist. Sviluppa competenze tecnico-operative nei processi di salute, sicurezza e ambiente.",
    fullDescription: [
      "Corso conforme alla Norma UNI 11720:2025 – Profilo Professionale HSE Specialist",
      "Per la prima volta, grazie alla Norma UNI 11720:2025, anche la figura dello HSE Specialist – il professionista tecnico-operativo che lavora quotidianamente nei processi di salute, sicurezza e ambiente – ottiene un riconoscimento formale che ne definisce ruolo, competenze e affidabilità.",
      "La Norma UNI 11720:2025 definisce i requisiti di conoscenze, abilità e responsabilità delle figure professionali che operano nei sistemi di gestione integrati in ambito Salute, Sicurezza e Ambiente (HSE). La norma distingue due profili: HSE Specialist (figura tecnico-operativa) e HSE Manager (figura di coordinamento strategico).",
      "Il presente corso da 40 ore, completamente in modalità asincrona, sviluppa le competenze richieste dalla UNI 11720:2025 per lo HSE Specialist, con un percorso strutturato su moduli reali e contenuti effettivi già disponibili in piattaforma.",
      "Lo HSE Specialist rappresenta il punto di riferimento operativo nei processi HSE dell’organizzazione: supporta concretamente l’implementazione delle misure di prevenzione e protezione, contribuisce alla gestione dei sistemi di gestione integrati e assicura la corretta applicazione delle normative in vigore.",
      "Il corso è inoltre valido come aggiornamento professionale per RSPP/ASPP e come aggiornamento per Coordinatori della Sicurezza nei Cantieri (CSP/CSE).",
      "Al termine del corso saranno rilasciati due attestati: HSE SPECIALIST 40 ORE (Valido come aggiornamento RSPP/ASPP e CSP/CSE) e Attestato di Qualità dei Servizi Professionali AIFES."
    ],
    objectives: [
      "Fornire conoscenze operative sulla normativa e sulle responsabilità aziendali",
      "Sviluppare competenze nella gestione dei Sistemi di Gestione Integrati (ISO 9001, 14001, 45001)",
      "Acquisire padronanza del Risk Assessment secondo ISO 31000, 12100 e IEC 31010",
      "Saper analizzare e gestire i rischi interferenti tramite DUVRI",
      "Rafforzare l’efficacia operativa nella gestione dei rifiuti e processi documentali"
    ],
    references: ["Norma UNI 11720:2025", "D.Lgs. 81/08", "Accordo Stato-Regioni 17/04/2025", "Legge 4/2013"],
    recipients: "Professionisti, Tecnici HSE, RSPP, ASPP, Consulenti e Addetti sicurezza/ambiente/qualità che intendono qualificarsi come HSE Specialist.",
    syllabus: [
      { 
        title: "MODULO I – NORMATIVA, OBBLIGHI E RESPONSABILITÀ (680 min)", 
        duration: "11h 20m",
        lessons: [
          "Corporate Governance e Responsabilità – D.Lgs. 231-01",
          "Guida Generale al D.Lgs. 231-01",
          "Video Approfondimento D.Lgs. 231-01 e gli impatti nella gestione aziendale",
          "Video Approfondiva La Responsabilità Amministrativa degli enti",
          "Video Approfondimento Strumenti e soluzioni per valutazione rischi MOG e ODV",
          "Video Approfondimento D.Lgs. 231/01 parte 1",
          "Video Approfondimento D.Lgs. 231/01 parte 2",
          "La Social Accountability – SA 8000",
          "Transizione allo standard SA 8000-2014",
          "Standard Internazionale elaborato da Social Accountability 8000",
          "Linee guida UNI ISO 26000-2010 Responsabilità Sociale delle Organizzazioni",
          "Guida alla Responsabilità Sociale",
          "Manuale della responsabilità sociale: Esempi Calzaturificio Olip",
          "Manuale della responsabilità sociale: Esempi Pastificio Garofalo",
          "L’Auditor interno dei sistemi di Corporate Social Responsability – CSR",
          "La Matrice di Materialità",
          "Il processo di integrazione con la SA 8000",
          "Video approfondimento i principi della SA 8000"
        ]
      },
      { 
        title: "MODULO II – SISTEMI DI GESTIONE INTEGRATA E ATTIVITÀ DI AUDIT (1811 min)", 
        duration: "30h 11m",
        lessons: [
          "Introduzione alla ISO 9001:2015",
          "Il contesto dell’organizzazione",
          "Pianificazione, Supporto, Operazione, Valutazione, Miglioramento",
          "Documentazione ISO 9001:2015 e Manuale della Qualità",
          "Auditor interno sistemi gestione qualità",
          "Sistema di gestione ambientale UNI EN ISO 14001:2015",
          "Regolamento EMAS ed Etichette Ambientali",
          "Gestione dei rifiuti – aspetti normativi-tecnici",
          "Introduzione norma ISO 45001:2018",
          "Leadership e partecipazione dei lavoratori",
          "Valutazione delle prestazioni e Miglioramento",
          "Metodologia di Audit UNI EN ISO 19011:2018"
        ]
      },
      { 
        title: "MODULO III – ANALISI E GESTIONE DEL RISCHIO (476 min)", 
        duration: "7h 56m",
        lessons: [
          "Ruolo e responsabilità del RSPP",
          "Sentenze e casi giuridici con responsabilità penale del RSPP",
          "10 regole fondamentali per l’attività del RSPP",
          "Percorso storico della normativa sulla sicurezza",
          "ISO 31000: principi, struttura e processo del rischio",
          "Tecniche della norma UNI CEI EN IEC 31010",
          "UNI EN ISO 12100: fasi del processo di Risk Assessment",
          "Esempio pratico di DVR",
          "Interferenze lavorative e DUVRI",
          "Esempio pratico di DUVRI (modello INAIL)"
        ]
      }
    ]
  },
  {
    id: "master-hse-manager-120",
    title: "Master HSE Manager – Health, Safety & Environment",
    lessons: 264,
    duration: "120h",
    price: "854,00 € iva inclusa",
    category: "Corsi per Professionisti",
    description: "Percorso formativo completo per formare professionisti in grado di gestire, coordinare e migliorare i sistemi integrati aziendali HSE.",
    fullDescription: [
      "Il Master HSE Manager – Health, Safety & Environment è un percorso formativo completo e aggiornato, erogato interamente in modalità e-learning asincrona, progettato per formare professionisti in grado di gestire, coordinare e migliorare i sistemi integrati aziendali in materia di salute, sicurezza e ambiente.",
      "La Norma UNI 11720:2025 definisce i requisiti di conoscenze, abilità e responsabilità per le figure professionali che operano nei sistemi di gestione integrati Salute, Sicurezza e Ambiente (HSE). La norma identifica due profili principali: HSE Specialist (40 ore) e HSE Manager (120 ore).",
      "Il presente percorso formativo da 120 ore consente l’acquisizione delle competenze previste per la figura dell’HSE Manager, in linea con i requisiti formativi, professionali e comportamentali indicati dalla norma.",
      "Il corso è inoltre valido come aggiornamento professionale per RSPP/ASPP e come aggiornamento per Coordinatori della Sicurezza nei Cantieri (CSP/CSE).",
      "Al termine del corso saranno rilasciati due attestati: HSE Manager – Health, Safety, Environment 120 ore (Valido come aggiornamento RSPP/ASPP e CSP/CSE) e Attestato di Qualità dei Servizi Professionali AIFES, ai sensi della Legge 4/2013.",
      "La formazione è erogata interamente in modalità e-learning asincrona su piattaforma LMS, accessibile 24 ore su 24. Il percorso comprende videolezioni, materiali multimediali, test intermedi e una prova finale a risposta multipla."
    ],
    objectives: [
      "Gestire, coordinare e migliorare i sistemi integrati aziendali HSE",
      "Acquisire il ruolo strategico e gestionale previsto dalla UNI 11720:2025",
      "Sviluppare competenze in Energy Management e aspetti relazionali",
      "Padronanza avanzata di Risk Assessment e gestione DUVRI",
      "Monitoraggio completo dell'apprendimento tramite piattaforma LMS"
    ],
    references: ["Norma UNI 11720:2025", "D.Lgs. 81/08", "Accordo Stato-Regioni 17/04/2025", "Legge 4/2013"],
    recipients: "Professionisti, HSE Manager, RSPP, ASPP, CSP/CSE e consulenti che mirano a un ruolo di coordinamento strategico.",
    syllabus: [
      { title: "Il Ruolo del HSE Manager", duration: "15h" },
      { title: "Normativa, obblighi e responsabilità", duration: "20h" },
      { title: "Sistemi di gestione integrata e audit", duration: "25h" },
      { title: "Energy Management", duration: "10h" },
      { title: "Aspetti relazionali e comportamentali", duration: "15h" },
      { title: "Ruolo e responsabilità del RSPP", duration: "10h" },
      { title: "Risk Assessment", duration: "15h" },
      { title: "DUVRI e gestione dei rischi interferenti", duration: "10h" }
    ]
  },
  {
    id: "aggiornamento-rspp-40",
    title: "Aggiornamento per RSPP - Responsabile del Servizio Prevenzione e Protezione",
    lessons: 142,
    duration: "40h",
    price: "488,00 € iva inclusa",
    category: "Corsi per Professionisti",
    description: "Il Corso di Aggiornamento per Responsabile del Servizio Prevenzione e Protezione (RSPP) è progettato per garantire l'adeguato aggiornamento quinquennale richiesto dalla normativa vigente (D.Lgs. 81/2008 e Accordo Stato-Regioni 17/04/2025).",
    fullDescription: [
      "Il Corso di Aggiornamento per Responsabile del Servizio Prevenzione e Protezione (RSPP) è progettato per garantire l'adeguato aggiornamento quinquennale richiesto dalla normativa vigente (D.Lgs. 81/2008 e Accordo Stato-Regioni 17/04/2025).",
      "La durata complessiva è di 40 ore, suddivise in 139 moduli formativi, e si conclude con un test finale a risposta multipla. Il corso è accessibile per 120 giorni dalla data di attivazione.",
      "Il corso consente ai Responsabili del Servizio di Prevenzione e Protezione di aggiornare le proprie competenze normative, gestionali e tecniche in materia di salute e sicurezza sul lavoro, garantendo conformità alle disposizioni del D.Lgs. 81/2008 e migliorando la capacità di valutare e prevenire i rischi in azienda."
    ],
    objectives: [
      "Conoscere il quadro legislativo della sicurezza, i ruoli e le responsabilità del sistema prevenzionistico",
      "Comprendere il funzionamento degli organi di vigilanza",
      "Applicare il Testo Unico nei cantieri",
      "Gestire correttamente la valutazione dei rischi, il DVR, il DUVRI e le misure di prevenzione e protezione"
    ],
    references: [
      "N.A.S.R. 17/04/2025 Aggiornamento quinquennale di: ASPP/RSPP ex art. 32 D.Lgs. 81/08; Coordinatore della Sicurezza (CSP/CSE) ex art. 98 D.Lgs. 81/08",
      "Aggiornamento triennale di Formatore SSL ai sensi del D.I. 06/03/2013",
      "Aggiornamento Professionista HSE - UNI 11720"
    ],
    recipients: "RSPP esterni o interni, Responsabili del Servizio di Prevenzione e Protezione, già abilitati, che devono mantenere valida la propria qualifica attraverso l’aggiornamento periodico previsto dalla normativa.",
    syllabus: [
      { 
        title: "Documento Progettuale", 
        duration: "0m", 
        lessons: ["Documento Progettuale"] 
      },
      { 
        title: "L’approccio alla Prevenzione nel D.Lgs. 81/2008", 
        duration: "1h 5m", 
        lessons: [
          "1-Introduzione al D.lgs. 81/08 e alla valutazione dei rischi",
          "2-Definizione di concetti base della salute e sicurezza nei luoghi di lavoro",
          "3-Principi del D.lgs. 81/08: Informazione ai lavoratori",
          "4-Principi del D.lgs. 81/08: Formazione dei lavoratori e dei loro rappresentanti"
        ] 
      },
      { 
        title: "Il Sistema Legislativo: Esame delle Normative di Riferimento", 
        duration: "2h 2m", 
        lessons: [
          "1-Introduzione alla storia legislativa a tema salute e sicurezza sul lavoro",
          "2-L’evoluzione dell’approccio alla salute e sicurezza sul lavoro, istituzione dell’assicurazione, il Codice civile",
          "3-La Costituzione, il Codice penale, i DPR degli anni ’50",
          "4-Lo Statuto dei lavoratori, principi cardine dell’art. 2087 del CC, la legislazione degli anni ’80 e ’90",
          "5-Struttura e contenuti del D.lgs. 81/08",
          "6-Il quadro giuridico europeo, i profili di responsabilità amministrativa",
          "7. La legislazione relativa a categorie particolari di lavoratori",
          "8-Il quadro legislativo antincendio"
        ] 
      },
      { 
        title: "Prevenzione della Violenza e delle Molestie sul Luogo di Lavoro", 
        duration: "27m", 
        lessons: [
          "1. La Convenzione 190 e la Raccomandazione 206 ILO",
          "2-La Convenzione 190 e la Raccomandazione 206 ILO"
        ] 
      },
      { 
        title: "Inserimento di Lavoratori Disabili e loro Tutela", 
        duration: "1h 11m", 
        lessons: [
          "1-Collocamento mirato e obbligatorio, percentuali di invalidità, quote obbligatorie di assunzione",
          "2-Accertamento commissione medica",
          "3-Ruolo del medico competente, requisiti di salute e sicurezza degli ambienti di lavoro",
          "4-La normativa antidiscriminatoria italiana (D.Lgs. 216/2003) e comunitaria (Direttiva 2000/78)",
          "5-Soluzioni ragionevoli per la parità di trattamento e la L. 99/2013"
        ] 
      },
      { 
        title: "Il Sistema Istituzionale della Prevenzione", 
        duration: "24m", 
        lessons: [
          "1-Il sistema istituzionale, comitato per le politiche attive e le attività di vigilanza",
          "2. Enti con compiti in materia di salute e sicurezza"
        ] 
      },
      { 
        title: "Il Sistema di Vigilanza e Assistenza", 
        duration: "2h 13m", 
        lessons: [
          "1-Organi di controllo e vigilanza",
          "2-Sistema delle prescrizioni e delle sanzioni: esempi di sentenze",
          "3-Il ruolo di ASL, INL, VV.F., INAIL, ARPA",
          "4-Organismi normatori, controlli e verifiche sulle attrezzature, obblighi generali del DdL",
          "5-Obblighi specifici del DdL",
          "6-Modalità di effettuazione delle verifiche periodiche",
          "7-Modalità e tariffe per le verifiche, suddivisione dei gruppi di attrezzature, impianti esclusi",
          "8-Impianti e apparecchiature elettriche",
          "9-Informazione, assistenza e consulenza, collaborazione con organismi paritetici"
        ] 
      },
      { 
        title: "I Soggetti del Sistema di Prevenzione Aziendale", 
        duration: "4h 2m", 
        lessons: [
          "1-Introduzione alle figure principali della sicurezza in azienda",
          "2-Datore di Lavoro e Dirigente per la sicurezza",
          "3-Individuazione del Datore di Lavoro",
          "4-Requisiti e adempimenti per la delega di funzione",
          "5-Responsabilità amministrativa",
          "6-Modelli di organizzazione e gestione, obbligo formativo del DdL",
          "7-Incapacità tecnica del DdL, obbligo di formazione preventiva del personale",
          "8-Responsabilità civile e penale del DdL: esempi di sentenze",
          "9-Il ruolo del Preposto",
          "10-Il ruolo del Responsabile del Servizio di Prevenzione e Protezione",
          "11-RSPP interno o esterno, ruolo del ASPP, individuazione e valutazione dei rischi",
          "12-Elaborazione delle misure preventive e delle procedure",
          "13-Il ruolo del Medico Competente e del Rappresentante dei Lavoratori per la Sicurezza",
          "14-Individuazione e segnalazione dei rischi",
          "15-Comunicazione funzionale ed efficace",
          "16-Ruolo proattivo del RLS",
          "17-Il ruolo dei Lavoratori e degli Addetti alle Emergenze",
          "18-Obblighi dei progettisti"
        ] 
      },
      { 
        title: "Il Processo di Valutazione dei Rischi - parte 1", 
        duration: "4h 15m", 
        lessons: [
          "1-Concetti di pericolo, rischio, danno, prevenzione e protezione",
          "2-Principio di precauzione",
          "3-Infortuni: definizione, condizioni necessarie ed esempi",
          "4-Infortuni: infortunio in itinere e tutela INAIL",
          "5-Malattie professionali: definizione",
          "6-Dati statistici INAIL sugli infortuni",
          "7-Dati statistici INAIL sulle malattie professionali, cause degli infortuni",
          "8-Fattori oggettivi e soggettivi degli infortuni sul lavoro",
          "9-Valutazione dei rischi: DVR, modalità di effettuazione e oggetto della valutazione",
          "10-Valutazione dei rischi",
          "11-Valutazione dei rischi: riferimenti e obblighi normativi",
          "12-Valutazione dei rischi",
          "13-Fasi della valutazione dei rischi",
          "14-Fasi della valutazione dei rischi",
          "15-Applicazione delle procedure standardizzate per la valutazione dei rischi"
        ] 
      },
      { 
        title: "Il Processo di Valutazione dei Rischi - parte 2", 
        duration: "2h 1m", 
        lessons: [
          "1-Valutazione dei rischi da interferenze",
          "2-Luoghi di lavoro e stress lavoro-correlato",
          "3-Movimentazione manuale dei carichi e movimenti ripetitivi",
          "4-Lavoro al videoterminale",
          "5-Attrezzature di lavoro, rischi meccanici e da esposizione a vibrazioni",
          "6-Rischio elettrico e campi elettromagnetici",
          "7-Rischio chimico",
          "8-Contenuti e organizzazione del DVR"
        ] 
      },
      { 
        title: "Il Processo di Valutazione dei Rischi - parte 3", 
        duration: "1h 36m", 
        lessons: [
          "1-Sicurezza o produzione?",
          "2-I costi della NON sicurezza",
          "3-I costi degli infortuni",
          "4-Costi palesi e costi nascosti",
          "5-MOG di tipo volontario - D.Lgs. 231/01",
          "6-MOG di tipo volontario",
          "7. MOG di tipo volontario: 231 e 81/08, sanzioni interdittive"
        ] 
      },
      { 
        title: "I Dispositivi di Protezione Collettiva e Individuale", 
        duration: "28m", 
        lessons: [
          "1-DPI per la protezione degli occhi",
          "2-DPI per la protezione di mani e vie respiratorie"
        ] 
      },
      { 
        title: "La Gestione delle Emergenze", 
        duration: "2h 11m", 
        lessons: [
          "1-Gestione delle emergenze",
          "2-Rischio incendio e cenni di primo soccorso",
          "3-Addetti alla gestione delle emergenze",
          "4-Normativa antincendio e piano di emergenza ed evacuazione (PEE)",
          "5-Contenuti del PEE",
          "6-Gestione della sicurezza antincendio in esercizio ed in emergenza",
          "7-Esempio di PEE e procedure per la gestione delle emergenze"
        ] 
      },
      { 
        title: "La Sorveglianza Sanitaria", 
        duration: "1h 17m", 
        lessons: [
          "1-Introduzione alla sorveglianza sanitaria",
          "2-Sorveglianza sanitaria: principi fondamentali",
          "3-Sorveglianza sanitaria: visite mediche",
          "4-Sorveglianza sanitaria: attività di prevenzione",
          "5-Sorveglianza sanitaria: titoli, ruolo e compiti del medico competente",
          "6-Sorveglianza sanitaria: sorveglianza preventiva",
          "7-Tutela per le lavoratrici madri"
        ] 
      },
      { 
        title: "Consultazione e Partecipazione - Informazione, Formazione e Addestramento", 
        duration: "3h 32m", 
        lessons: [
          "1-Introduzione alla comunicazione nei luoghi di lavoro, stili comunicativi",
          "2-Comunicazione assertiva e destinatari della formazione",
          "3-Difficoltà dei discenti, contenuto e motivazione della formazione",
          "4-Metodo e processo formativo, la formazione nel D.Lgs. 81/08",
          "5-Cultura della sicurezza e formazione, formazione dei preposti e degli RLS",
          "6-Valutazione dei rischi e formazione per l’utilizzo dei macchinari",
          "7-Formazione dei lavoratori: generale, specifica e aggiornamento",
          "8-Formazione e addestramento, qualifiche dei formatori, formazione particolare",
          "9-Formazione per le attrezzature di lavoro, per il DdL e i dirigenti",
          "10-Formazione degli addetti alle emergenze",
          "11-Comunicare in azienda: strumenti di intelligenza artificiale, comunicazione empatica",
          "12-Comunicare in azienda: gestione delle riunioni",
          "13-Comunicare in azienda: responsabilità, condivisione e disponibilità",
          "14-Comunicare in azienda: feedback, barriere linguistiche e di linguaggio"
        ] 
      },
      { 
        title: "Il ruolo e le responsabilità del RSPP", 
        duration: "1h 39m", 
        lessons: [
          "1. Ruolo e responsabilità del RSPP",
          "2. Esempi di sentenze e casi giuridici con responsabilità penale del RSPP",
          "3. Tracciabilità dell’operato del RSPP, responsabilità civile e assicurazioni, gradi di giudizio e condizionale",
          "4. 10 regole fondamentali per l’attività del RSPP - Parte 1",
          "5. 10 regole fondamentali per l’attività del RSPP - Parte 2",
          "6. 10 regole fondamentali per l’attività del RSPP - Parte 3"
        ] 
      },
      { 
        title: "Il processo di valutazione dei rischi (Risk Assessment): metodologia e norme tecniche", 
        duration: "3h 39m", 
        lessons: [
          "1. Percorso storico della normativa sulla sicurezza - Parte 1",
          "2. Percorso storico della normativa sulla sicurezza - Parte 2",
          "3. Definizioni delle figure e dei concetti della SSL",
          "4. Misure generali di tutela, oggetto e contenuti della valutazione dei rischi",
          "5. Norme e standard nazionali e internazionali",
          "6. ISO 31000: principi, struttura, processo, identificazione e trattamento del rischio",
          "7. Descrizioni delle tecniche della norma UNI CEI EN IEC 31010",
          "8. UNI EN ISO 12100: fasi del processo di Risk Assessment",
          "9. ISO/TR 14121-2: metodi per l’analisi del rischio",
          "10. Metodo grafico, metodo a matrice e metodo ibrido",
          "11. Esempio pratico di DVR - Parte 1",
          "12. Esempio pratico di DVR - Parte 2",
          "13. Esempio pratico di DVR - Parte 3",
          "14. ISO 45001: come funziona un sistema di gestione"
        ] 
      },
      { 
        title: "Il DUVRI: come redigerlo per valutare e gestire i rischi interferenti", 
        duration: "2h 37m", 
        lessons: [
          "1. Interferenze lavorative nell’evoluzione della normativa, committente e appaltatore",
          "2. Prevenzione e protezione, cooperazione e coordinamento",
          "3. Interferenze e rischi interferenti, DUVRI nei cantieri temporanei e mobili",
          "4. Reperire le informazioni per elaborare il DUVRI, definizione DUVRI",
          "5. Caratteristiche e contenuti del DUVRI - Parte 1",
          "6. Caratteristiche e contenuti del DUVRI - Parte 2",
          "7. Interferenze con gli utenti esterni, casi nei quali non è obbligatorio il DUVRI",
          "8. Esempio pratico di DUVRI (modello INAIL) - Parte 1",
          "9. Esempio pratico di DUVRI (modello INAIL) - Parte 2",
          "10. Esempio pratico di DUVRI (modello INAIL) - Parte 3",
          "11. Esempio pratico di DUVRI (modello INAIL) - Parte 4"
        ] 
      },
      { 
        title: "Quiz di verifica finale", 
        duration: "1h 15m", 
        lessons: ["Quiz di Verifica dell'apprendimento - Corso Aggiornamento RSPP 40 ore"] 
      },
      { 
        title: "Questionario di Gradimento", 
        duration: "0m", 
        lessons: ["Questionario di gradimento - Aggiornamento per RSPP - Responsabile del Servizio Prevenzione e Protezione"] 
      }
    ]
  },
  {
    id: "sa-8000-8",
    title: "La Responsabilità sociale d’impresa e lo standard SA 8000: Principi, requisiti e applicazione",
    lessons: 17,
    duration: "8h",
    price: "97,60 € iva inclusa",
    category: "Corsi per Professionisti",
    description: "La Responsabilità Sociale d’impresa implica che un’organizzazione certificata SA 8000 abbia verificato che tutti gli attori che si interfacciano con essa adottino comportamenti socialmente responsabili.",
    fullDescription: [
      "La Responsabilità Sociale d’impresa implica che un’organizzazione certificata SA 8000 abbia verificato che tutti gli attori che si interfacciano con essa adottino comportamenti socialmente responsabili.",
      "Il corso presenta 11 moduli di lavoro con contenuti multimediali. Ha una durata complessiva di 8 ore con test intermedi e test finale a risposta multipla con una sola risposta corretta in modalità e-learning.",
      "Il corso sarà fruibile per 120 giorni dalla data di attivazione.",
      "Il corso fornisce un panoramica su Social Accountability (SA 8000:2014), Responsabilità Sociale delle Organizzazioni (ISO 26000) e Corporate Social Responsibility (CSR), approfondendo la gestione dei sistemi organizzativi, l’integrazione dei principi di responsabilità sociale in azienda e le metodologie per audit interni e valutazione della conformità."
    ],
    objectives: [
      "Riconoscere gli elementi essenziali dei sistemi SA 8000",
      "Interpretare i requisiti dello standard e comprendere gli impatti organizzativi della responsabilità sociale",
      "Valutare il ruolo dei codici di condotta e del bilancio sociale",
      "Orientarsi nei processi di integrazione tra responsabilità sociale d’impresa e SA 8000 nelle organizzazioni"
    ],
    references: [
      "UNI EN ISO 26000 e SA 8000 - N.A.S.R. 17/04/2025 Aggiornamento quinquennale di: ASPP/RSPP ex art. 32 D.Lgs. 81/08; Coordinatore della Sicurezza (CSP/CSE) ex art. 98 D.Lgs. 81/08",
      "Aggiornamento triennale di Formatore SSL ai sensi del D.I. 06/03/2013",
      "Aggiornamento Professionista HSE - UNI 11720"
    ],
    recipients: "Professionisti e figure aziendali che operano nei sistemi di gestione, nella sicurezza sul lavoro, nelle risorse umane e nelle attività legate alla responsabilità sociale, tra cui consulenti, auditor interni, addetti alla qualità, tecnici della sicurezza, dirigenti, datori di lavoro e collaboratori coinvolti nella gestione etica dell’organizzazione.",
    syllabus: [
      { title: "Documento Progettuale", duration: "0m", lessons: ["Documento Progettuale"] },
      { title: "La responsabilità sociale d’impresa: La Social Accountability SA 8000", duration: "39m", lessons: ["La Social Accountability - SA 8000"] },
      { title: "La Social Accountability SA 8000:2014", duration: "55m", lessons: ["Transizione allo standard SA 8000-2014", "Standard Internazionale elaborato da Social Accountability 8000"] },
      { title: "Responsabilità sociale delle organizzazioni", duration: "50m", lessons: ["Linee guida UNI ISO 26000-2010 Responsabilità Sociale delle Organizzazioni", "Guida alla Responsabilità Sociale", "Manuale Responsabilità Sociale Esempi: Pastificio Garofalo", "Manuale Responsabilità Sociale Esempi: Calzaturificio Olip"] },
      { title: "Video Approfondimento CSR", duration: "47m", lessons: ["L'Auditor interno dei sistemi di Corporate Social Responsability - CSR"] },
      { title: "Test di Verifica Video Approfondimento CSR", duration: "30m", lessons: ["Test di Verifica dell'apprendimento - Video Approfondimento CSR"] },
      { title: "Video Approfondimento Matrice di Materialità", duration: "42m", lessons: ["La Matrice di Materialità"] },
      { title: "Test di Verifica Video Approfondimento Matrice di Materialità", duration: "30m", lessons: ["Test di Verifica dell'apprendimento - Video Approfondimento La Matrice di Materialità"] },
      { title: "Video Approfondimento Integrazione SA 8000", duration: "40m", lessons: ["Il processo di integrazione con la SA 8000"] },
      { title: "Test di Verifica Video Approfondimento Integrazione SA 8000", duration: "30m", lessons: ["Test di Verifica dell'apprendimento - Video Approfondimento Il processo di integrazione con la SA 8000"] },
      { title: "Video Approfondimento Principi SA 8000", duration: "1h 3m", lessons: ["I Principi della SA 8000"] },
      { title: "Quiz di Verifica FInale", duration: "2h 20m", lessons: ["Quiz di Verifica dell'apprendimento - La Responsabilità Sociale d'Impresa: UNI EN ISO 26000 E SA 8000 8 ORE"] },
      { title: "Questionario di Gradimento", duration: "0m", lessons: ["Questionario di gradimento - La Responsabilità Sociale d'Impresa: UNI EN ISO 26000 E SA 8000"] }
    ]
  },
  {
    id: "dlgs-231-01-8",
    title: "Responsabilità amministrativa degli enti ex D.Lgs. 231/2001 e progettazione dei modelli organizzativi",
    lessons: 10,
    duration: "8h",
    price: "134,20 € iva inclusa",
    category: "Corsi per Professionisti",
    description: "Il corso fornisce una panoramica completa sulla responsabilità amministrativa degli enti ai sensi del D.Lgs. 231/2001, analizzandone i principi, gli impatti sulla governance aziendale e le ricadute organizzative.",
    fullDescription: [
      "Il corso fornisce una panoramica completa sulla responsabilità amministrativa degli enti ai sensi del D.Lgs. 231/2001, analizzandone i principi, gli impatti sulla governance aziendale e le ricadute organizzative.",
      "Approfondisce il ruolo dei modelli organizzativi (MOG), dell’Organismo di Vigilanza e degli strumenti di valutazione dei rischi, evidenziando il collegamento tra gestione aziendale, compliance normativa e tutela della salute e sicurezza sul lavoro.",
      "Il corso presenta 7 moduli di lavoro con contenuti multimediali. Ha una durata complessiva di 8 ore con test intermedi e test finale a risposta multipla con una sola risposta corretta in modalità e-learning.",
      "Il corso sarà fruibile per 120 giorni dalla data di attivazione."
    ],
    objectives: [
      "Analizzare il contesto organizzativo e contribuire alla progettazione e all’aggiornamento dei modelli di organizzazione, gestione e controllo",
      "Applicare i principi base della gestione del rischio",
      "Supportare le attività dell’Organismo di Vigilanza, garantendo una corretta attuazione del Modello 231"
    ],
    references: [
      "D.Lgs. 231/01- N.A.S.R. 17/04/2025 Aggiornamento quinquennale di: ASPP/RSPP ex art. 32 D.Lgs. 81/08; Coordinatore della Sicurezza (CSP/CSE) ex art. 98 D.Lgs. 81/08",
      "Aggiornamento triennale di Formatore SSL ai sensi del D.I. 06/03/2013",
      "Aggiornamento Professionista HSE - UNI 11720"
    ],
    recipients: "Professionisti e figure aziendali coinvolte nei sistemi di gestione e nelle attività di controllo interno, tra cui consulenti, tecnici della sicurezza, datori di lavoro, dirigenti, lavoratori, amministratori di società, ASPP e RSPP.",
    syllabus: [
      { title: "Documento Progettuale", duration: "0m", lessons: ["Documento Progettuale"] },
      { 
        title: "Moduli Didattici", 
        duration: "1h 45m", 
        lessons: [
          "01 - Corporate Governance e Responsabilità - D.Lgs. 231-01",
          "02 - Guida Generale al D.Lgs. 231-01"
        ] 
      },
      { 
        title: "Video Approfondimenti", 
        duration: "3h 54m", 
        lessons: [
          "01-Video Approfondimento D.Lgs 231-01 e gli impatti nella gestione aziendale",
          "02-Video Approfondimento La Responsabilità Amministrativa degli enti",
          "03-Video Approfondimento Strumenti e soluzioni per valutazione rischi MOG e ODV",
          "04 Video Approfondimento D.Lgs. 231/01 parte 1",
          "05 Video Approfondimento D.Lgs. 231/01 parte 2"
        ] 
      },
      { 
        title: "Test di Verifica FInale", 
        duration: "2h 20m", 
        lessons: ["Test di verifica dell'apprendimento - La Responsabilità Amministrativa d’Impresa: D.Lgs. 231/01"] 
      },
      { title: "Questionario di Gradimento", duration: "0m", lessons: ["Questionario di gradimento"] }
    ]
  },
  {
    id: "modulo-a-rspp-aspp",
    title: "Modulo A - Formazione di base propedeutica per RSPP e ASPP",
    lessons: 116,
    duration: "28h",
    price: "305,00 € iva inclusa",
    category: "Corsi per Professionisti",
    description: "Il Modulo A fornisce la formazione di base propedeutica per RSPP e ASPP, offrendo le conoscenze fondamentali sulla salute e sicurezza sul lavoro.",
    fullDescription: [
      "Il Modulo A fornisce la formazione di base propedeutica per RSPP e ASPP, offrendo le conoscenze fondamentali sulla salute e sicurezza sul lavoro.",
      "La durata complessiva del corso è di 28 ore, suddivise in 108 moduli formativi, e comprende test intermedi e test finale a risposta multipla.",
      "Il corso è accessibile per 120 giorni dalla data di attivazione.",
      "Il Modulo A approfondisce il quadro normativo del D.Lgs. 81/08, i soggetti del sistema di prevenzione, i ruoli, le responsabilità e gli organi di vigilanza. Costituisce il percorso propedeutico e obbligatorio per l’accesso ai Moduli B e C per ASPP e RSPP."
    ],
    objectives: [
      "Comprendere il sistema di prevenzione previsto dal D.Lgs. 81 del 2008",
      "Approfondire i principi della prevenzione e l’organizzazione dei sistemi di vigilanza",
      "Analizzare il processo di valutazione dei rischi",
      "Integrare la sicurezza nei modelli organizzativi aziendali"
    ],
    references: [
      "D.Lgs. 81/2008",
      "Accordo Stato-Regioni 17/04/2025"
    ],
    recipients: "Il Modulo A è rivolto a chi intende avviare il percorso per RSPP e ASPP, oltre a dirigenti, preposti, responsabili dei sistemi di gestione, auditor, consulenti e professionisti del settore.",
    syllabus: [
      { title: "Documento Progettuale", duration: "0m", lessons: ["Documento Progettuale"] },
      { 
        title: "L’approccio alla Prevenzione nel D.Lgs. 81/2008", 
        duration: "1h 7m", 
        lessons: [
          "1-Introduzione al D.lgs. 81/08 e alla valutazione dei rischi",
          "2-Definizione di concetti base della salute e sicurezza nei luoghi di lavoro",
          "3-Principi del D.lgs. 81/08: Informazione ai lavoratori",
          "4-Principi del D.lgs. 81/08: Formazione dei lavoratori e dei loro rappresentanti"
        ] 
      },
      { 
        title: "Il Sistema Legislativo: Esame delle Normative di Riferimento", 
        duration: "2h 7m", 
        lessons: [
          "1-Introduzione alla storia legislativa a tema salute e sicurezza sul lavoro",
          "2-L’evoluzione dell’approccio alla salute e sicurezza sul lavoro, istituzione dell’assicurazione, il Codice civile",
          "3-La Costituzione, il Codice penale, i DPR degli anni ’50",
          "4-Lo Statuto dei lavoratori, principi cardine dell’art. 2087 del CC, la legislazione degli anni ’80 e ’90",
          "5-Struttura e contenuti del D.lgs. 81/08",
          "6-Il quadro giuridico europeo, i profili di responsabilità amministrativa",
          "7. La legislazione relativa a categorie particolari di lavoratori",
          "8-Il quadro legislativo antincendio"
        ] 
      },
      { 
        title: "Prevenzione della Violenza e delle Molestie sul Luogo di Lavoro", 
        duration: "28m", 
        lessons: [
          "1. La Convenzione 190 e la Raccomandazione 206 ILO",
          "2-La Convenzione 190 e la Raccomandazione 206 ILO"
        ] 
      },
      { 
        title: "Inserimento di Lavoratori Disabili e loro Tutela", 
        duration: "1h 15m", 
        lessons: [
          "1-Collocamento mirato e obbligatorio, percentuali di invalidità, quote obbligatorie di assunzione",
          "2-Accertamento commissione medica",
          "3-Ruolo del medico competente, requisiti di salute e sicurezza degli ambienti di lavoro",
          "4-La normativa antidiscriminatoria italiana (D.Lgs. 216/2003) e comunitaria (Direttiva 2000/78)",
          "5-Soluzioni ragionevoli per la parità di trattamento e la L. 99/2013"
        ] 
      },
      { 
        title: "Il Sistema Istituzionale della Prevenzione", 
        duration: "25m", 
        lessons: [
          "1-Il sistema istituzionale, comitato per le politiche attive e le attività di vigilanza",
          "2. Enti con compiti in materia di salute e sicurezza"
        ] 
      },
      { 
        title: "Il Sistema di Vigilanza e Assistenza", 
        duration: "2h 19m", 
        lessons: [
          "1-Organi di controllo e vigilanza",
          "2-Sistema delle prescrizioni e delle sanzioni: esempi di sentenze",
          "3-Il ruolo di ASL, INL, VV.F., INAIL, ARPA",
          "4-Organismi normatori, controlli e verifiche sulle attrezzature, obblighi generali del DdL",
          "5-Obblighi specifici del DdL",
          "6-Modalità di effettuazione delle verifiche periodiche",
          "7-Modalità e tariffe per le verifiche, suddivisione dei gruppi di attrezzature, impianti esclusi",
          "8-Impianti e apparecchiature elettriche",
          "9-Informazione, assistenza e consulenza, collaborazione con organismi paritetici"
        ] 
      },
      { title: "Quiz intermedio Unità didattica A1", duration: "3m", lessons: ["Quiz di verifica dell'apprendimento | Unità didattica A1"] },
      { 
        title: "I Soggetti del Sistema di Prevenzione Aziendale", 
        duration: "4h 14m", 
        lessons: [
          "1-Introduzione alle figure principali della sicurezza in azienda",
          "2-Datore di Lavoro e Dirigente per la sicurezza",
          "3-Individuazione del Datore di Lavoro",
          "4-Requisiti e adempimenti per la delega di funzione",
          "5-Responsabilità amministrativa",
          "6-Modelli di organizzazione e gestione, obbligo formativo del DdL",
          "7-Incapacità tecnica del DdL, obbligo di formazione preventiva del personale",
          "8-Responsabilità civile e penale del DdL: esempi di sentenze",
          "9-Il ruolo del Preposto",
          "10-Il ruolo del Responsabile del Servizio di Prevenzione e Protezione",
          "11-RSPP interno o esterno, ruolo del ASPP, individuazione e valutazione dei rischi",
          "12-Elaborazione delle misure preventive e delle procedure",
          "13-Il ruolo del Medico Competente e del Rappresentante dei Lavoratori per la Sicurezza",
          "14-Individuazione e segnalazione dei rischi",
          "15-Comunicazione funzionale ed efficace",
          "16-Ruolo proattivo del RLS",
          "17-Il ruolo dei Lavoratori e degli Addetti alle Emergenze",
          "18-Obblighi dei progettisti"
        ] 
      },
      { title: "Quiz intermedio Unità didattica A2", duration: "3m", lessons: ["Quiz di verifica dell'apprendimento | Unità didattica A2"] },
      { 
        title: "Il Processo di Valutazione dei Rischi - parte 1", 
        duration: "4h 25m", 
        lessons: [
          "1-Concetti di pericolo, rischio, danno, prevenzione e protezione",
          "2-Principio di precauzione",
          "3-Infortuni: definizione, condizioni necessarie ed esempi",
          "4-Infortuni: infortunio in itinere e tutela INAIL",
          "5-Malattie professionali: definizione",
          "6-Dati statistici INAIL sugli infortuni",
          "7-Dati statistici INAIL sulle malattie professionali, cause degli infortuni",
          "8-Fattori oggettivi e soggettivi degli infortuni sul lavoro",
          "9-Valutazione dei rischi: DVR, modalità di effettuazione e oggetto della valutazione",
          "10-Valutazione dei rischi",
          "11-Valutazione dei rischi: riferimenti e obblighi normativi",
          "12-Valutazione dei rischi",
          "13-Fasi della valutazione dei rischi",
          "14-Fasi della valutazione dei rischi",
          "15-Applicazione delle procedure standardizzate per la valutazione dei rischi"
        ] 
      },
      { 
        title: "Il Processo di Valutazione dei Rischi - parte 2", 
        duration: "2h 6m", 
        lessons: [
          "1-Valutazione dei rischi da interferenze",
          "2-Luoghi di lavoro e stress lavoro-correlato",
          "3-Movimentazione manuale dei carichi e movimenti ripetitivi",
          "4-Lavoro al videoterminale",
          "5-Attrezzature di lavoro, rischi meccanici e da esposizione a vibrazioni",
          "6-Rischio elettrico e campi elettromagnetici",
          "7-Rischio chimico",
          "8-Contenuti e organizzazione del DVR"
        ] 
      },
      { 
        title: "Il Processo di Valutazione dei Rischi - parte 3", 
        duration: "1h 41m", 
        lessons: [
          "1-Sicurezza o produzione?",
          "2-I costi della NON sicurezza",
          "3-I costi degli infortuni",
          "4-Costi palesi e costi nascosti",
          "5-MOG di tipo volontario - D.Lgs. 231/01",
          "6-MOG di tipo volontario",
          "7. MOG di tipo volontario: 231 e 81/08, sanzioni interdittive"
        ] 
      },
      { title: "Quiz intermedio Unità didattica A3", duration: "3m", lessons: ["Quiz di verifica dell'apprendimento | Unità didattica A3"] },
      { 
        title: "I Dispositivi di Protezione Collettiva e Individuale", 
        duration: "30m", 
        lessons: [
          "1-DPI per la protezione degli occhi",
          "2-DPI per la protezione di mani e vie respiratorie"
        ] 
      },
      { 
        title: "La Gestione delle Emergenze", 
        duration: "2h 15m", 
        lessons: [
          "1-Gestione delle emergenze",
          "2-Rischio incendio e cenni di primo soccorso",
          "3-Addetti alla gestione delle emergenze",
          "4-Normativa antincendio e piano di emergenza ed evacuazione (PEE)",
          "5-Contenuti del PEE",
          "6-Gestione della sicurezza antincendio in esercizio ed in emergenza",
          "7-Esempio di PEE e procedure per la gestione delle emergenze"
        ] 
      },
      { 
        title: "La Sorveglianza Sanitaria", 
        duration: "1h 22m", 
        lessons: [
          "1-Introduzione alla sorveglianza sanitaria",
          "2-Sorveglianza sanitaria: principi fondamentali",
          "3-Sorveglianza sanitaria: visite mediche",
          "4-Sorveglianza sanitaria: attività di prevenzione",
          "5-Sorveglianza sanitaria: titoli, ruolo e compiti del medico competente",
          "6-Sorveglianza sanitaria: sorveglianza preventiva",
          "7-Tutela per le lavoratrici madri"
        ] 
      },
      { title: "Quiz intermedio Unità didattica A4", duration: "3m", lessons: ["Quiz di verifica dell'apprendimento | Unità didattica A4"] },
      { 
        title: "Consultazione e Partecipazione - Informazione, Formazione e Addestramento", 
        duration: "3h 41m", 
        lessons: [
          "1-Introduzione alla comunicazione nei luoghi di lavoro, stili comunicativi",
          "2-Comunicazione assertiva e destinatari della formazione",
          "3-Difficoltà dei discenti, contenuto e motivazione della formazione",
          "4-Metodo e processo formativo, la formazione nel D.Lgs. 81/08",
          "5-Cultura della sicurezza e formazione, formazione dei preposti e degli RLS",
          "6-Valutazione dei rischi e formazione per l’utilizzo dei macchinari",
          "7-Formazione dei lavoratori: generale, specifica e aggiornamento",
          "8-Formazione e addestramento, qualifiche dei formatori, formazione particolare",
          "9-Formazione per le attrezzature di lavoro, per il DdL e i dirigenti",
          "10-Formazione degli addetti alle emergenze",
          "11-Comunicare in azienda: strumenti di intelligenza artificiale, comunicazione empatica",
          "12-Comunicare in azienda: gestione delle riunioni",
          "13-Comunicare in azienda: responsabilità, condivisione e disponibilità",
          "14-Comunicare in azienda: feedback, barriere linguistiche e di linguaggio"
        ] 
      },
      { title: "Quiz intermedio Unità didattica A5", duration: "3m", lessons: ["Quiz di verifica dell'apprendimento | Unità didattica A5"] },
      { title: "Quiz di Verifica Finale", duration: "1h 15m", lessons: ["Quiz di verifica finale Modulo A - Formazione di base propedeutica per RSPP e ASPP"] },
      { title: "Questionario di Gradimento", duration: "0m", lessons: ["Questionario di gradimento - Modulo A - Formazione di base propedeutica per RSPP e ASPP"] }
    ]
  },
  {
    id: "risk-assessment-8",
    title: "Risk Assessment per la sicurezza sul lavoro: Responsabilità, strumenti e tecniche di analisi",
    lessons: 34,
    duration: "8h",
    price: "183,00 € iva inclusa",
    category: "Corsi per Professionisti",
    description: "Il corso per la Valutazione dei Rischi è progettato per fornire ai professionisti della sicurezza le competenze avanzate necessarie per condurre valutazioni dei rischi efficaci.",
    fullDescription: [
      "Il corso per la Valutazione dei Rischi è progettato per fornire ai professionisti della sicurezza le competenze avanzate necessarie per condurre valutazioni dei rischi efficaci e conformi alle normative vigenti.",
      "Il corso fornisce le competenze per identificare, analizzare e gestire i rischi sul lavoro, applicando metodologie conformi alle normative vigenti e agli standard internazionali di gestione del rischio.",
      "La durata complessiva è di 8 ore, suddivise in 31 moduli formativi, e si conclude con un test finale a risposta multipla.",
      "Il corso è accessibile per 120 giorni dalla data di attivazione."
    ],
    objectives: [
      "Applicare correttamente i principali metodi di valutazione del rischio",
      "Supportare il datore di lavoro nelle scelte di prevenzione e protezione",
      "Identificare, analizzare e gestire i rischi sul lavoro secondo standard internazionali"
    ],
    references: [
      "T.U. 81/08",
      "UNI EN ISO 12100",
      "ISO/TR 14121-2",
      "Aggiornamento quinquennale RSPP/ASPP/CSP/CSE",
      "Aggiornamento triennale Formatore SSL",
      "Aggiornamento Professionista HSE - UNI 11720"
    ],
    recipients: "RSPP, ASPP, consulenti, tecnici della prevenzione, datori di lavoro, dirigenti, coordinatori per la sicurezza nei cantieri, HSE Manager e formatori sulla sicurezza.",
    syllabus: [
      { title: "Documento Progettuale", duration: "0m", lessons: ["Documento Progettuale"] },
      { 
        title: "Il ruolo e le responsabilità del RSPP", 
        duration: "1h 39m", 
        lessons: [
          "1. Ruolo e responsabilità del RSPP",
          "2. Esempi di sentenze e casi giuridici con responsabilità penale del RSPP",
          "3. Tracciabilità dell’operato del RSPP, responsabilità civile e assicurazioni",
          "4. 10 regole fondamentali per l’attività del RSPP - Parte 1",
          "5. 10 regole fondamentali per l’attività del RSPP - Parte 2",
          "6. 10 regole fondamentali per l’attività del RSPP - Parte 3"
        ] 
      },
      { 
        title: "Il processo di valutazione dei rischi (Risk Assessment)", 
        duration: "3h 39m", 
        lessons: [
          "1. Percorso storico della normativa sulla sicurezza - Parte 1",
          "2. Percorso storico della normativa sulla sicurezza - Parte 2",
          "3. Definizioni delle figure e dei concetti della SSL",
          "4. Misure generali di tutela, oggetto e contenuti della valutazione dei rischi",
          "5. Norme e standard nazionali e internazionali",
          "6. ISO 31000: principi, struttura, processo",
          "7. Descrizioni delle tecniche della norma UNI CEI EN IEC 31010",
          "8. UNI EN ISO 12100: fasi del processo di Risk Assessment",
          "9. ISO/TR 14121-2: metodi per l’analisi del rischio",
          "10. Metodo grafico, metodo a matrice e metodo ibrido",
          "11. Esempio pratico di DVR - Parte 1",
          "12. Esempio pratico di DVR - Parte 2",
          "13. Esempio pratico di DVR - Parte 3",
          "14. ISO 45001: come funziona un sistema di gestione"
        ] 
      },
      { 
        title: "Il DUVRI: come redigerlo per valutare e gestire i rischi interferenti", 
        duration: "2h 37m", 
        lessons: [
          "1. Interferenze lavorative nell’evoluzione della normativa",
          "2. Prevenzione e protezione, cooperazione e coordinamento",
          "3. Interferenze e rischi interferenti, DUVRI nei cantieri",
          "4. Reperire le informazioni per elaborare il DUVRI",
          "5. Caratteristiche e contenuti del DUVRI - Parte 1",
          "6. Caratteristiche e contenuti del DUVRI - Parte 2",
          "7. Interferenze con gli utenti esterni",
          "8. Esempio pratico di DUVRI (modello INAIL) - Parte 1",
          "9. Esempio pratico di DUVRI (modello INAIL) - Parte 2",
          "10. Esempio pratico di DUVRI (modello INAIL) - Parte 3",
          "11. Esempio pratico di DUVRI (modello INAIL) - Parte 4"
        ] 
      },
      { 
        title: "Quiz di Verifica", 
        duration: "36m", 
        lessons: ["Quiz di Verifica dell'apprendimento - Corso Risk Assessment 8 ore"] 
      },
      { title: "Questionario di Gradimento", duration: "0m", lessons: ["Questionario di gradimento - Risk Assessment"] }
    ]
  },
  {
    id: "aggiornamento-aspp-20",
    title: "Aggiornamento per ASPP - Addetto al Servizio Prevenzione e Protezione",
    lessons: 87,
    duration: "20h",
    price: "244,00 € iva inclusa",
    category: "Corsi per Professionisti",
    description: "Il Corso di Aggiornamento per Addetto al Servizio Prevenzione e Protezione (ASPP) è progettato per garantire l'adeguato aggiornamento quinquennale richiesto dalla normativa vigente.",
    fullDescription: [
      "Il Corso di Aggiornamento per Addetto al Servizio Prevenzione e Protezione (ASPP) è progettato per garantire l'adeguato aggiornamento quinquennale richiesto dalla normativa vigente (D.lgs. 81/2008 e Accordo Stato-Regioni del 7 luglio 2016).",
      "L’Aggiornamento ASPP permette agli Addetti al Servizio di Prevenzione e Protezione di mantenere aggiornate le proprie competenze in materia di salute e sicurezza sul lavoro, assicurando l’applicazione corretta delle normative.",
      "La durata complessiva è di 20 ore, suddivise in 84 moduli formativi, e si conclude con un test finale a risposta multipla.",
      "Il corso è accessibile per 120 giorni dalla data di attivazione."
    ],
    objectives: [
      "Comprendere il quadro legislativo della sicurezza",
      "Conoscere i ruoli e le responsabilità delle figure del sistema prevenzionistico",
      "Comprendere il funzionamento degli organi di vigilanza",
      "Assicurare l'applicazione corretta delle normative e la gestione delle misure preventive"
    ],
    references: [
      "D.Lgs. 81/2008",
      "Accordo Stato-Regioni 07/07/2016",
      "N.A.S.R. 17/04/2025 Aggiornamento quinquennale ASPP/RSPP/CSP/CSE",
      "Aggiornamento triennale Formatore SSL",
      "Aggiornamento Professionista HSE - UNI 11720"
    ],
    recipients: "ASPP esterni o interni, Addetti al Servizio di Prevenzione e Protezione, già abilitati, che devono mantenere valida la propria qualifica attraverso l’aggiornamento periodico.",
    syllabus: [
      { title: "Documento Progettuale", duration: "0m", lessons: ["Documento Progettuale"] },
      { 
        title: "1-L’approccio alla Prevenzione nel D.Lgs. 81/2008", 
        duration: "1h 5m", 
        lessons: [
          "1-Introduzione al D.lgs. 81/08 e alla valutazione dei rischi",
          "2-Definizione di concetti base della salute e sicurezza nei luoghi di lavoro",
          "3-Principi del D.lgs. 81/08: Informazione ai lavoratori",
          "4-Principi del D.lgs. 81/08: Formazione dei lavoratori e dei loro rappresentanti"
        ] 
      },
      { 
        title: "2-Il Sistema Legislativo: Esame delle Normative di Riferimento", 
        duration: "2h 2m", 
        lessons: [
          "1-Introduzione alla storia legislativa a tema salute e sicurezza sul lavoro",
          "2-L’evoluzione dell’approccio alla salute e sicurezza sul lavoro, istituzione dell’assicurazione, il Codice civile",
          "3-La Costituzione, il Codice penale, i DPR degli anni ’50",
          "4-Lo Statuto dei lavoratori, principi cardine dell’art. 2087 del CC, la legislazione degli anni ’80 e ’90",
          "5-Struttura e contenuti del D.lgs. 81/08",
          "6-Il quadro giuridico europeo, i profili di responsabilità amministrativa",
          "7. La legislazione relativa a categorie particolari di lavoratori",
          "8-Il quadro legislativo antincendio"
        ] 
      },
      { 
        title: "3-Il sistema di prevenzione aziendale", 
        duration: "4h 2m", 
        lessons: [
          "1-Introduzione alle figure principali della sicurezza in azienda",
          "2-Datore di Lavoro e Dirigente per la sicurezza",
          "3-Individuazione del Datore di Lavoro",
          "4-Requisiti e adempimenti per la delega di funzione",
          "5-Responsabilità amministrativa",
          "6-Modelli di organizzazione e gestione, obbligo formativo del DdL",
          "7-Incapacità tecnica del DdL, obbligo di formazione preventiva del personale",
          "8-Responsabilità civile e penale del DdL: esempi di sentenze",
          "9-Il ruolo del Preposto",
          "10-Il ruolo del Responsabile del Servizio di Prevenzione e Protezione",
          "11-RSPP interno o esterno, ruolo del ASPP, individuazione e valutazione dei rischi",
          "12-Elaborazione delle misure preventive e delle procedure",
          "13-Il ruolo del Medico Competente e del Rappresentante dei Lavoratori per la Sicurezza",
          "14-Individuazione e segnalazione dei rischi",
          "15-Comunicazione funzionale ed efficace",
          "16-Ruolo proattivo del RLS",
          "17-Il ruolo dei Lavoratori e degli Addetti alle Emergenze",
          "18-Obblighi dei progettisti"
        ] 
      },
      { 
        title: "4-Valutazione dei rischi - Parte 1: fondamenti", 
        duration: "2h 26m", 
        lessons: [
          "1-Concetti di pericolo, rischio, danno, prevenzione e protezione",
          "2-Principio di precauzione",
          "3-Valutazione dei rischi: DVR, modalità di effettuazione e oggetto della valutazione",
          "4-Valutazione dei rischi",
          "5-Valutazione dei rischi: riferimenti e obblighi normativi",
          "6-Valutazione dei rischi",
          "7-Fasi della valutazione dei rischi",
          "8-Fasi della valutazione dei rischi"
        ] 
      },
      { 
        title: "5-Valutazione dei rischi - Parte 2: rischi specifici", 
        duration: "1h 50m", 
        lessons: [
          "1-Valutazione dei rischi da interferenze",
          "2-Luoghi di lavoro e stress lavoro-correlato",
          "3-Movimentazione manuale dei carichi e movimenti ripetitivi",
          "4-Lavoro al videoterminale",
          "5-Attrezzature di lavoro, rischi meccanici e da esposizione a vibrazioni",
          "6-Rischio elettrico e campi elettromagnetici",
          "7-Rischio chimico"
        ] 
      },
      { 
        title: "6-Prevenzione della Violenza e delle Molestie sul Luogo di Lavoro", 
        duration: "27m", 
        lessons: [
          "1. La Convenzione 190 e la Raccomandazione 206 ILO",
          "2-La Convenzione 190 e la Raccomandazione 206 ILO"
        ] 
      },
      { 
        title: "7-Inserimento di Lavoratori Disabili e loro Tutela", 
        duration: "1h 11m", 
        lessons: [
          "1-Collocamento mirato e obbligatorio, percentuali di invalidità, quote obbligatorie di assunzione",
          "2-Accertamento commissione medica",
          "3-Ruolo del medico competente, requisiti di salute e sicurezza degli ambienti di lavoro",
          "4-La normativa antidiscriminatoria italiana (D.Lgs. 216/2003) e comunitaria (Direttiva 2000/78)",
          "5-Soluzioni ragionevoli per la parità di trattamento e la L. 99/2013"
        ] 
      },
      { 
        title: "8-Dispositivi di protezione e sorveglianza sanitaria", 
        duration: "1h 46m", 
        lessons: [
          "1-DPI per la protezione degli occhi",
          "2-DPI per la protezione di mani e vie respiratorie",
          "3-Introduzione alla sorveglianza sanitaria",
          "4-Sorveglianza sanitaria: principi fondamentali",
          "5-Sorveglianza sanitaria: visite mediche",
          "6-Sorveglianza sanitaria: attività di prevenzione",
          "7-Sorveglianza sanitaria: titoli, ruolo e compiti del medico competente",
          "8-Sorveglianza sanitaria: sorveglianza preventiva",
          "9-Tutela per le lavoratrici madri"
        ] 
      },
      { 
        title: "9-Gestione delle emergenze", 
        duration: "2h 11m", 
        lessons: [
          "1-Gestione delle emergenze",
          "2-Rischio incendio e cenni di primo soccorso",
          "3-Addetti alla gestione delle emergenze",
          "4-Normativa antincendio e piano di emergenza ed evacuazione (PEE)",
          "5-Contenuti del PEE",
          "6-Gestione della sicurezza antincendio in esercizio ed in emergenza",
          "7-Esempio di PEE e procedure per la gestione delle emergenze"
        ] 
      },
      { 
        title: "10-Norme tecniche e strumenti di valutazione", 
        duration: "1h 59m", 
        lessons: [
          "1. ISO 31000: principi, struttura, processo",
          "2. Descrizioni delle tecniche della norma UNI CEI EN IEC 31010",
          "3. UNI EN ISO 12100: fasi del processo di Risk Assessment",
          "4. ISO/TR 14121-2: metodi per l’analisi del rischio",
          "5. Metodo grafico, metodo a matrice e metodo ibrido",
          "6. Esempio pratico di DVR - Parte 1",
          "7. Esempio pratico di DVR - Parte 2",
          "8. Esempio pratico di DVR - Parte 3"
        ] 
      },
      { 
        title: "11-Comunicazione e formazione", 
        duration: "1h 59m", 
        lessons: [
          "1-Introduzione alla comunicazione nei luoghi di lavoro, stili comunicativi",
          "2-Comunicazione assertiva e destinatari della formazione",
          "3-Metodo e processo formativo, la formazione nel D.Lgs. 81/08",
          "4-Cultura della sicurezza e formazione, formazione dei preposti e degli RLS",
          "5-Formazione dei lavoratori: generale, specifica e aggiornamento",
          "6-Formazione e addestramento, qualifiche dei formatori, formazione particolare",
          "7-Comunicare in azienda: strumenti di intelligenza artificiale, comunicazione empatica",
          "8-Comunicare in azienda: feedback, barriere linguistiche e di linguaggio"
        ] 
      },
      { 
        title: "Quiz di Verifica", 
        duration: "45m", 
        lessons: ["Quiz di Verifica dell'apprendimento - Aggiornamento ASPP 20 ore"] 
      },
      { title: "Questionario di Gradimento", duration: "0m", lessons: ["Questionario di gradimento - Aggiornamento per ASPP | Addetto al Servizio Prevenzione e Protezione | 20 Ore"] }
    ]
  },
  {
    id: "coordinatore-sicurezza-giuridico-28",
    title: "Coordinatori per la Sicurezza in fase di progettazione e di esecuzione - Modulo Giuridico",
    lessons: 139,
    duration: "28h",
    price: "305,00 € iva inclusa",
    category: "Corsi per Professionisti",
    description: "Il Modulo Giuridico Coordinatore CSP/CSE fornisce le conoscenze legislative e normative essenziali per chi vuole abilitarsi al ruolo di Coordinatore.",
    fullDescription: [
      "Il Modulo Giuridico Coordinatore CSP/CSE fornisce le conoscenze legislative e normative essenziali per chi vuole abilitarsi al ruolo di Coordinatori CSP/CSE.",
      "Approfondisce ruoli, responsabilità e obblighi previsti dal D.Lgs. 81/2008, garantendo una corretta gestione della sicurezza e la conformità alle norme vigenti.",
      "La durata complessiva è di 32 ore (coprendo le 28 ore minime richieste), suddivise in 135 moduli formativi, e comprende test intermedi e test finale a risposta multipla.",
      "Il corso è accessibile per 120 giorni dalla data di attivazione."
    ],
    objectives: [
      "Fornire conoscenze essenziali sul quadro normativo e giuridico in materia di salute e sicurezza",
      "Approfondire responsabilità e ruoli di committente, CSP, CSE, imprese e lavoratori",
      "Comprendere il sistema sanzionatorio e le implicazioni legali",
      "Analizzare i contenuti del Titolo IV del D.Lgs. 81/08 sui cantieri temporanei o mobili"
    ],
    references: [
      "D.Lgs. 81/2008 Art. 98",
      "Accordo Stato Regioni 17/04/2025"
    ],
    recipients: "Laureati in Architettura, Ingegneria, Geologia, Scienze Agrarie/Forestali o professionisti con Laurea triennale specifica e comprovata esperienza nel settore costruzioni.",
    syllabus: [
      { title: "Documento Progettuale", duration: "0m", lessons: ["Documento Progettuale"] },
      { 
        title: "L’approccio alla Prevenzione nel D.Lgs. 81/2008", 
        duration: "1h 5m", 
        lessons: [
          "1-Introduzione al D.lgs. 81/08 e alla valutazione dei rischi",
          "2-Definizione di concetti base della salute e sicurezza nei luoghi di lavoro",
          "3-Principi del D.lgs. 81/08: Informazione ai lavoratori",
          "4-Principi del D.lgs. 81/08: Formazione dei lavoratori e dei loro rappresentanti"
        ] 
      },
      { 
        title: "Il Sistema Legislativo: Esame delle Normative di Riferimento", 
        duration: "2h 2m", 
        lessons: [
          "1-Introduzione alla storia legislativa a tema salute e sicurezza sul lavoro",
          "2-L’evoluzione dell’approccio alla salute e sicurezza sul lavoro, istituzione dell’assicurazione, il Codice civile",
          "3-La Costituzione, il Codice penale, i DPR degli anni ’50",
          "4-Lo Statuto dei lavoratori, principi cardine dell’art. 2087 del CC, la legislazione degli anni ’80 e ’90",
          "5-Struttura e contenuti del D.lgs. 81/08",
          "6-Il quadro giuridico europeo, i profili di responsabilità amministrativa",
          "7. La legislazione relativa a categorie particolari di lavoratori",
          "8-Il quadro legislativo antincendio"
        ] 
      },
      { 
        title: "Prevenzione della Violenza e delle Molestie sul Luogo di Lavoro", 
        duration: "27m", 
        lessons: [
          "1. La Convenzione 190 e la Raccomandazione 206 ILO",
          "2-La Convenzione 190 e la Raccomandazione 206 ILO"
        ] 
      },
      { 
        title: "Inserimento di Lavoratori Disabili e loro Tutela", 
        duration: "1h 11m", 
        lessons: [
          "1-Collocamento mirato e obbligatorio, percentuali di invalidità, quote obbligatorie di assunzione",
          "2-Accertamento commissione medica",
          "3-Ruolo del medico competente, requisiti di salute e sicurezza degli ambienti di lavoro",
          "4-La normativa antidiscriminatoria italiana (D.Lgs. 216/2003) e comunitaria (Direttiva 2000/78)",
          "5-Soluzioni ragionevoli per la parità di trattamento e la L. 99/2013"
        ] 
      },
      { 
        title: "Il Sistema Istituzionale della Prevenzione", 
        duration: "24m", 
        lessons: [
          "1-Il sistema istituzionale, comitato per le politiche attive e le attività di vigilanza",
          "2. Enti con compiti in materia di salute e sicurezza"
        ] 
      },
      { 
        title: "Il Sistema di Vigilanza e Assistenza", 
        duration: "2h 13m", 
        lessons: [
          "1-Organi di controllo e vigilanza",
          "2-Sistema delle prescrizioni e delle sanzioni: esempi di sentenze",
          "3-Il ruolo di ASL, INL, VV.F., INAIL, ARPA",
          "4-Organismi normatori, controlli e verifiche sulle attrezzature, obblighi generali del DdL",
          "5-Obblighi specifici del DdL",
          "6-Modalità di effettuazione delle verifiche periodiche",
          "7-Modalità e tariffe per le verifiche, suddivisione dei gruppi di attrezzature, impianti esclusi",
          "8-Impianti e apparecchiature elettriche",
          "9-Informazione, assistenza e consulenza, collaborazione con organismi paritetici"
        ] 
      },
      { 
        title: "I Soggetti del Sistema di Prevenzione Aziendale", 
        duration: "4h 2m", 
        lessons: [
          "1-Introduzione alle figure principali della sicurezza in azienda",
          "2-Datore di Lavoro e Dirigente per la sicurezza",
          "3-Individuazione del Datore di Lavoro",
          "4-Requisiti e adempimenti per la delega di funzione",
          "5-Responsabilità amministrativa",
          "6-Modelli di organizzazione e gestione, obbligo formativo del DdL",
          "7-Incapacità tecnica del DdL, obbligo di formazione preventiva del personale",
          "8-Responsabilità civile e penale del DdL: esempi di sentenze",
          "9-Il ruolo del Preposto",
          "10-Il ruolo del Responsabile del Servizio di Prevenzione e Protezione",
          "11-RSPP interno o esterno, ruolo del ASPP, individuazione e valutazione dei rischi",
          "12-Elaborazione delle misure preventive e delle procedure",
          "13-Il ruolo del Medico Competente e del Rappresentante dei Lavoratori per la Sicurezza",
          "14-Individuazione e segnalazione dei rischi",
          "15-Comunicazione funzionale ed efficace",
          "16-Ruolo proattivo del RLS",
          "17-Il ruolo dei Lavoratori e degli Addetti alle Emergenze",
          "18-Obblighi dei progettisti"
        ] 
      },
      { 
        title: "Il Processo di Valutazione dei Rischi - parte 1", 
        duration: "4h 15m", 
        lessons: [
          "1-Concetti di pericolo, rischio, danno, prevenzione e protezione",
          "2-Principio di precauzione",
          "3-Infortuni: definizione, condizioni necessarie ed esempi",
          "4-Infortuni: infortunio in itinere e tutela INAIL",
          "5-Malattie professionali: definizione",
          "6-Dati statistici INAIL sugli infortuni",
          "7-Dati statistici INAIL sulle malattie professionali, cause degli infortuni",
          "8-Fattori oggettivi e soggettivi degli infortuni sul lavoro",
          "9-Valutazione dei rischi: DVR, modalità di effettuazione e oggetto della valutazione",
          "10-Valutazione dei rischi",
          "11-Valutazione dei rischi: riferimenti e obblighi normativi",
          "12-Valutazione dei rischi",
          "13-Fasi della valutazione dei rischi",
          "14-Fasi della valutazione dei rischi",
          "15-Applicazione delle procedure standardizzate per la valutazione dei rischi"
        ] 
      },
      { 
        title: "Il Processo di Valutazione dei Rischi - parte 2", 
        duration: "2h 1m", 
        lessons: [
          "1-Valutazione dei rischi da interferenze",
          "2-Luoghi di lavoro e stress lavoro-correlato",
          "3-Movimentazione manuale dei carichi e movimenti ripetitivi",
          "4-Lavoro al videoterminale",
          "5-Attrezzature di lavoro, rischi meccanici e da esposizione a vibrazioni",
          "6-Rischio elettrico e campi elettromagnetici",
          "7-Rischio chimico",
          "8-Contenuti e organizzazione del DVR"
        ] 
      },
      { 
        title: "Il Processo di Valutazione dei Rischi - parte 3", 
        duration: "1h 36m", 
        lessons: [
          "1-Sicurezza o produzione?",
          "2-I costi della NON sicurezza",
          "3-I costi degli infortuni",
          "4-Costi palesi e costi nascosti",
          "5-MOG di tipo volontario - D.Lgs. 231/01",
          "6-MOG di tipo volontario",
          "7. MOG di tipo volontario: 231 e 81/08, sanzioni interdittive"
        ] 
      },
      { 
        title: "I Dispositivi di Protezione Collettiva e Individuale", 
        duration: "28m", 
        lessons: [
          "1-DPI per la protezione degli occhi",
          "2-DPI per la protezione di mani e vie respiratorie"
        ] 
      },
      { 
        title: "La Gestione delle Emergenze", 
        duration: "2h 11m", 
        lessons: [
          "1-Gestione delle emergenze",
          "2-Rischio incendio e cenni di primo soccorso",
          "3-Addetti alla gestione delle emergenze",
          "4-Normativa antincendio e piano di emergenza ed evacuazione (PEE)",
          "5-Contenuti del PEE",
          "6-Gestione della sicurezza antincendio in esercizio ed in emergenza",
          "7-Esempio di PEE e procedure per la gestione delle emergenze"
        ] 
      },
      { 
        title: "La Sorveglianza Sanitaria", 
        duration: "1h 17m", 
        lessons: [
          "1-Introduzione alla sorveglianza sanitaria",
          "2-Sorveglianza sanitaria: principi fondamentali",
          "3-Sorveglianza sanitaria: visite mediche",
          "4-Sorveglianza sanitaria: attività di prevenzione",
          "5-Sorveglianza sanitaria: titoli, ruolo e compiti del medico competente",
          "6-Sorveglianza sanitaria: sorveglianza preventiva",
          "7-Tutela per le lavoratrici madri"
        ] 
      },
      { 
        title: "Consultazione e Partecipazione - Informazione, Formazione e Addestramento", 
        duration: "3h 32m", 
        lessons: [
          "1-Introduzione alla comunicazione nei luoghi di lavoro, stili comunicativi",
          "2-Comunicazione assertiva e destinatari della formazione",
          "3-Difficoltà dei discenti, contenuto e motivazione della formazione",
          "4-Metodo e processo formativo, la formazione nel D.Lgs. 81/08",
          "5-Cultura della sicurezza e formazione, formazione dei preposti e degli RLS",
          "6-Valutazione dei rischi e formazione per l’utilizzo dei macchinari",
          "7-Formazione dei lavoratori: generale, specifica e aggiornamento",
          "8-Formazione e addestramento, qualifiche dei formatori, formazione particolare",
          "9-Formazione per le attrezzature di lavoro, per il DdL e i dirigenti",
          "10-Formazione degli addetti alle emergenze",
          "11-Comunicare in azienda: strumenti di intelligenza artificiale, comunicazione empatica",
          "12-Comunicare in azienda: gestione delle riunioni",
          "13-Comunicare in azienda: responsabilità, condivisione e disponibilità",
          "14-Comunicare in azienda: feedback, barriere linguistiche e di linguaggio"
        ] 
      },
      { 
        title: "Quiz di Verifica", 
        duration: "30m", 
        lessons: ["Quiz di verifica Coordinatori per la Sicurezza in fase di Progettazione e di Esecuzione"] 
      },
      { 
        title: "Modulo Cantieri", 
        duration: "5h 51m", 
        lessons: [
          "01-Normativa e principi generali",
          "02-Progettazione sicurezza del cantiere, campo di applicazione della norma",
          "03-Definizioni figure della sicurezza in cantiere",
          "04-Valutazione dei rischi, prevenzione e protezione",
          "05-Contenuti minimi del POS",
          "06-Coordinatori della sicurezza in cantiere",
          "07-Contenuti minimi del PSC - Parte 1",
          "08-Contenuti minimi del PSC - Parte 2",
          "09-Principali rischi dell’attività di cantiere",
          "10-Misure generali di tutela - Parte 1",
          "11-Misure generali di tutela - Parte 2",
          "12-Misure generali di tutela - Parte 3",
          "13-Misure generali di tutela - Parte 4",
          "14-Misure generali di tutela - Parte 5",
          "15-Obblighi del Datore di Lavoro",
          "16-Ruolo del committente e del responsabile dei lavori",
          "17-Idoneità tecnico-professionale e responsabilità penale",
          "18-Piano Operativo di Sicurezza",
          "19-Attrezzature di lavoro, opere provvisionali, PiMUS",
          "20-Vigilanza del Datore di Lavoro e del preposto, multilinguismo e multiculturalità",
          "21-Gestione di tutti i rischi del cantiere: CSP e CSE",
          "22-Strumenti informatici per la comunicazione",
          "23-I 3 livelli della comunicazione",
          "24-Empatia e contesto relazionale nella comunicazione",
          "25-Limiti del linguaggio e tecniche di comunicazione efficace",
          "26-Il tempo nella comunicazione, percezione del rischio, responsabilizzazione lavoratori",
          "27-Ascolto, chiarezza e completezza della comunicazione, messaggistica su smartphone"
        ] 
      },
      { 
        title: "Quiz di verifica", 
        duration: "1h 50m", 
        lessons: ["Quiz di verifica dell'apprendimento Formazione per Datore di Lavoro-Modulo Cantieri"] 
      },
      { title: "Questionario di Gradimento", duration: "0m", lessons: ["Questionario di gradimento - Coordinatori per la Sicurezza in fase di progettazione e di esecuzione - Modulo Giuridico ( 28 ore)"] }
    ]
  },
  {
    id: "aggiornamento-coordinatore-sicurezza-40",
    title: "Aggiornamento Coordinatori per la Sicurezza nei Cantieri CSP - CSE",
    lessons: 169,
    duration: "40h",
    price: "488,00 € iva inclusa",
    category: "Corsi per Professionisti",
    description: "Il corso aggiorna i Coordinatori per la Sicurezza su normative, ruoli e responsabilità nei cantieri, fornendo strumenti pratici per gestire la sicurezza.",
    fullDescription: [
      "Il corso aggiorna i Coordinatori per la Sicurezza su normative, ruoli e responsabilità nei cantieri, fornendo strumenti pratici per gestire la sicurezza, valutare i rischi e garantire la conformità alle disposizioni del D.Lgs. 81/2008.",
      "La durata complessiva del corso è di 40 ore, suddivise in 166 moduli formativi, e comprende test intermedi e test finale a risposta multipla.",
      "Il corso è accessibile per 120 giorni dalla data di attivazione.",
      "Al termine, verrà rilasciato un certificato di formazione valido ai fini di legge."
    ],
    objectives: [
      "Fornire un aggiornamento completo sulle più recenti disposizioni legislative e regolamentari",
      "Integrare le norme di buona tecnica e i criteri operativi per la gestione in sicurezza delle attività di cantiere"
    ],
    references: [
      "N.A.S.R. 17/04/2025 Aggiornamento quinquennale di: ASPP/RSPP ex art. 32 D.Lgs. 81/08; Coordinatore della Sicurezza (CSP/CSE) ex art. 98 D.Lgs. 81/08",
      "Aggiornamento triennale di Formatore SSL ai sensi del D.I. 06/03/2013",
      "Aggiornamento Professionista HSE - UNI 11720"
    ],
    recipients: "Coordinatori per la Sicurezza nei cantieri temporanei o mobili (CSP/CSE) già abilitati, nonché ai professionisti che operano nel settore dei cantieri e che necessitano di assolvere all’obbligo di aggiornamento periodico.",
    syllabus: [
      { title: "Documento Progettuale", duration: "0m", lessons: ["Documento Progettuale"] },
      { 
        title: "L’approccio alla Prevenzione nel D.Lgs. 81/2008", 
        duration: "1h 5m", 
        lessons: [
          "1-Introduzione al D.lgs. 81/08 e alla valutazione dei rischi",
          "2-Definizione di concetti base della salute e sicurezza nei luoghi di lavoro",
          "3-Principi del D.lgs. 81/08: Informazione ai lavoratori",
          "4-Principi del D.lgs. 81/08: Formazione dei lavoratori e dei loro rappresentanti"
        ] 
      },
      { 
        title: "Il Sistema Legislativo: Esame delle Normative di Riferimento", 
        duration: "2h 2m", 
        lessons: [
          "1-Introduzione alla storia legislativa a tema salute e sicurezza sul lavoro",
          "2-L’evoluzione dell’approccio alla salute e sicurezza sul lavoro, istituzione dell’assicurazione, il Codice civile",
          "3-La Costituzione, il Codice penale, i DPR degli anni ’50",
          "4-Lo Statuto dei lavoratori, principi cardine dell’art. 2087 del CC, la legislazione degli anni ’80 e ’90",
          "5-Struttura e contenuti del D.lgs. 81/08",
          "6-Il quadro giuridico europeo, i profili di responsabilità amministrativa",
          "7. La legislazione relativa a categorie particolari di lavoratori",
          "8-Il quadro legislativo antincendio"
        ] 
      },
      { 
        title: "Prevenzione della Violenza e delle Molestie sul Luogo di Lavoro", 
        duration: "27m", 
        lessons: [
          "1. La Convenzione 190 e la Raccomandazione 206 ILO",
          "2-La Convenzione 190 e la Raccomandazione 206 ILO"
        ] 
      },
      { 
        title: "Inserimento di Lavoratori Disabili e loro Tutela", 
        duration: "1h 11m", 
        lessons: [
          "1-Collocamento mirato e obbligatorio, percentuali di invalidità, quote obbligatorie di assunzione",
          "2-Accertamento commissione medica",
          "3-Ruolo del medico competente, requisiti di salute e sicurezza degli ambienti di lavoro",
          "4-La normativa antidiscriminatoria italiana (D.Lgs. 216/2003) e comunitaria (Direttiva 2000/78)",
          "5-Soluzioni ragionevoli per la parità di trattamento e la L. 99/2013"
        ] 
      },
      { 
        title: "Il Sistema Istituzionale della Prevenzione", 
        duration: "24m", 
        lessons: [
          "1-Il sistema istituzionale, comitato per le politiche attive e le attività di vigilanza",
          "2. Enti con compiti in materia di salute e sicurezza"
        ] 
      },
      { 
        title: "Il Sistema di Vigilanza e Assistenza", 
        duration: "2h 13m", 
        lessons: [
          "1-Organi di controllo e vigilanza",
          "2-Sistema delle prescrizioni e delle sanzioni: esempi di sentenze",
          "3-Il ruolo di ASL, INL, VV.F., INAIL, ARPA",
          "4-Organismi normatori, controlli e verifiche sulle attrezzature, obblighi generali del DdL",
          "5-Obblighi specifici del DdL",
          "6-Modalità di effettuazione delle verifiche periodiche",
          "7-Modalità e tariffe per le verifiche, suddivisione dei gruppi di attrezzature, impianti esclusi",
          "8-Impianti e apparecchiature elettriche",
          "9-Informazione, assistenza e consulenza, collaborazione con organismi paritetici"
        ] 
      },
      { 
        title: "I Soggetti del Sistema di Prevenzione Aziendale", 
        duration: "4h 2m", 
        lessons: [
          "1-Introduzione alle figure principali della sicurezza in azienda",
          "2-Datore di Lavoro e Dirigente per la sicurezza",
          "3-Individuazione del Datore di Lavoro",
          "4-Requisiti e adempimenti per la delega di funzione",
          "5-Responsabilità amministrativa",
          "6-Modelli di organizzazione e gestione, obbligo formativo del DdL",
          "7-Incapacità tecnica del DdL, obbligo di formazione preventiva del personale",
          "8-Responsabilità civile e penale del DdL: esempi di sentenze",
          "9-Il ruolo del Preposto",
          "10-Il ruolo del Responsabile del Servizio di Prevenzione e Protezione",
          "11-RSPP interno o esterno, ruolo del ASPP, individuazione e valutazione dei rischi",
          "12-Elaborazione delle misure preventive e delle procedure",
          "13-Il ruolo del Medico Competente e del Rappresentante dei Lavoratori per la Sicurezza",
          "14-Individuazione e segnalazione dei rischi",
          "15-Comunicazione funzionale ed efficace",
          "16-Ruolo proattivo del RLS",
          "17-Il ruolo dei Lavoratori e degli Addetti alle Emergenze",
          "18-Obblighi dei progettisti"
        ] 
      },
      { 
        title: "Il Processo di Valutazione dei Rischi - parte 1", 
        duration: "4h 15m", 
        lessons: [
          "1-Concetti di pericolo, rischio, danno, prevenzione e protezione",
          "2-Principio di precauzione",
          "3-Infortuni: definizione, condizioni necessarie ed esempi",
          "4-Infortuni: infortunio in itinere e tutela INAIL",
          "5-Malattie professionali: definizione",
          "6-Dati statistici INAIL sugli infortuni",
          "7-Dati statistici INAIL sulle malattie professionali, cause degli infortuni",
          "8-Fattori oggettivi e soggettivi degli infortuni sul lavoro",
          "9-Valutazione dei rischi: DVR, modalità di effettuazione e oggetto della valutazione",
          "10-Valutazione dei rischi",
          "11-Valutazione dei rischi: riferimenti e obblighi normativi",
          "12-Valutazione dei rischi",
          "13-Fasi della valutazione dei rischi",
          "14-Fasi della valutazione dei rischi",
          "15-Applicazione delle procedure standardizzate per la valutazione dei rischi"
        ] 
      },
      { 
        title: "Il Processo di Valutazione dei Rischi - parte 2", 
        duration: "2h 1m", 
        lessons: [
          "1-Valutazione dei rischi da interferenze",
          "2-Luoghi di lavoro e stress lavoro-correlato",
          "3-Movimentazione manuale dei carichi e movimenti ripetitivi",
          "4-Lavoro al videoterminale",
          "5-Attrezzature di lavoro, rischi meccanici e da esposizione a vibrazioni",
          "6-Rischio elettrico e campi elettromagnetici",
          "7-Rischio chimico",
          "8-Contenuti e organizzazione del DVR"
        ] 
      },
      { 
        title: "Il Processo di Valutazione dei Rischi - parte 3", 
        duration: "1h 36m", 
        lessons: [
          "1-Sicurezza o produzione?",
          "2-I costi della NON sicurezza",
          "3-I costi degli infortuni",
          "4-Costi palesi e costi nascosti",
          "5-MOG di tipo volontario - D.Lgs. 231/01",
          "6-MOG di tipo volontario",
          "7. MOG di tipo volontario: 231 e 81/08, sanzioni interdittive"
        ] 
      },
      { 
        title: "I Dispositivi di Protezione Collettiva e Individuale", 
        duration: "28m", 
        lessons: [
          "1-DPI per la protezione degli occhi",
          "2-DPI per la protezione di mani e vie respiratorie"
        ] 
      },
      { 
        title: "La Gestione delle Emergenze", 
        duration: "2h 11m", 
        lessons: [
          "1-Gestione delle emergenze",
          "2-Rischio incendio e cenni di primo soccorso",
          "3-Addetti alla gestione delle emergenze",
          "4-Normativa antincendio e piano di emergenza ed evacuazione (PEE)",
          "5-Contenuti del PEE",
          "6-Gestione della sicurezza antincendio in esercizio ed in emergenza",
          "7-Esempio di PEE e procedure per la gestione delle emergenze"
        ] 
      },
      { 
        title: "La Sorveglianza Sanitaria", 
        duration: "1h 17m", 
        lessons: [
          "1-Introduzione alla sorveglianza sanitaria",
          "2-Sorveglianza sanitaria: principi fondamentali",
          "3-Sorveglianza sanitaria: visite mediche",
          "4-Sorveglianza sanitaria: attività di prevenzione",
          "5-Sorveglianza sanitaria: titoli, ruolo e compiti del medico competente",
          "6-Sorveglianza sanitaria: sorveglianza preventiva",
          "7-Tutela per le lavoratrici madri"
        ] 
      },
      { 
        title: "Consultazione e Partecipazione - Informazione, Formazione e Addestramento", 
        duration: "3h 32m", 
        lessons: [
          "1-Introduzione alla comunicazione nei luoghi di lavoro, stili comunicativi",
          "2-Comunicazione assertiva e destinatari della formazione",
          "3-Difficoltà dei discenti, contenuto e motivazione della formazione",
          "4-Metodo e processo formativo, la formazione nel D.Lgs. 81/08",
          "5-Cultura della sicurezza e formazione, formazione dei preposti e degli RLS",
          "6-Valutazione dei rischi e formazione per l’utilizzo dei macchinari",
          "7-Formazione dei lavoratori: generale, specifica e aggiornamento",
          "8-Formazione e addestramento, qualifiche dei formatori, formazione particolare",
          "9-Formazione per le attrezzature di lavoro, per il DdL e i dirigenti",
          "10-Formazione degli addetti alle emergenze",
          "11-Comunicare in azienda: strumenti di intelligenza artificiale, comunicazione empatica",
          "12-Comunicare in azienda: gestione delle riunioni",
          "13-Comunicare in azienda: responsabilità, condivisione e disponibilità",
          "14-Comunicare in azienda: feedback, barriere linguistiche e di linguaggio"
        ] 
      },
      { 
        title: "Modulo Cantieri", 
        duration: "5h 51m", 
        lessons: [
          "01-Normativa e principi generali",
          "02-Progettazione sicurezza del cantiere, campo di applicazione della norma",
          "03-Definizioni figure della sicurezza in cantiere",
          "04-Valutazione dei rischi, prevenzione e protezione",
          "05-Contenuti minimi del POS",
          "06-Coordinatori della sicurezza in cantiere",
          "07-Contenuti minimi del PSC - Parte 1",
          "08-Contenuti minimi del PSC - Parte 2",
          "09-Principali rischi dell’attività di cantiere",
          "10-Misure generali di tutela - Parte 1",
          "11-Misure generali di tutela - Parte 2",
          "12-Misure generali di tutela - Parte 3",
          "13-Misure generali di tutela - Parte 4",
          "14-Misure generali di tutela - Parte 5",
          "15-Obblighi del Datore di Lavoro",
          "16-Ruolo del committente e del responsabile dei lavori",
          "17-Idoneità tecnico-professionale e responsabilità penale",
          "18-Piano Operativo di Sicurezza",
          "19-Attrezzature di lavoro, opere provvisionali, PiMUS",
          "20-Vigilanza del Datore di Lavoro e del preposto, multilinguismo e multiculturalità",
          "21-Gestione di tutti i rischi del cantiere: CSP e CSE",
          "22-Strumenti informatici per la comunicazione",
          "23-I 3 livelli della comunicazione",
          "24-Empatia e contesto relazionale nella comunicazione",
          "25-Limiti del linguaggio e tecniche di comunicazione efficace",
          "26-Il tempo nella comunicazione, percezione del rischio, responsabilizzazione lavoratori",
          "27-Ascolto, chiarezza e completezza della comunicazione, messaggistica su smartphone"
        ] 
      },
      { 
        title: "Il ruolo e le responsabilità del RSPP", 
        duration: "1h 39m", 
        lessons: [
          "1. Ruolo e responsabilità del RSPP",
          "2. Esempi di sentenze e casi giuridici con responsabilità penale del RSPP",
          "3. Tracciabilità dell’operato del RSPP, responsabilità civile e assicurazioni",
          "4. 10 regole fondamentali per l’attività del RSPP - Parte 1",
          "5. 10 regole fondamentali per l’attività del RSPP - Parte 2",
          "6. 10 regole fondamentali per l’attività del RSPP - Parte 3"
        ] 
      },
      { 
        title: "Il processo di valutazione dei rischi (Risk Assessment)", 
        duration: "3h 39m", 
        lessons: [
          "1. Percorso storico della normativa sulla sicurezza - Parte 1",
          "2. Percorso storico della normativa sulla sicurezza - Parte 2",
          "3. Definizioni delle figure e dei concetti della SSL",
          "4. Misure generali di tutela, oggetto e contenuti della valutazione dei rischi",
          "5. Norme e standard nazionali e internazionali",
          "6. ISO 31000: principi, struttura, processo",
          "7. Descrizioni delle tecniche della norma UNI CEI EN IEC 31010",
          "8. UNI EN ISO 12100: fasi del processo di Risk Assessment",
          "9. ISO/TR 14121-2: metodi per l’analisi del rischio",
          "10. Metodo grafico, metodo a matrice e metodo ibrido",
          "11. Esempio pratico di DVR - Parte 1",
          "12. Esempio pratico di DVR - Parte 2",
          "13. Esempio pratico di DVR - Parte 3",
          "14. ISO 45001: come funziona un sistema di gestione"
        ] 
      },
      { 
        title: "Il DUVRI: come redigerlo per valutare e gestire i rischi interferenti", 
        duration: "2h 37m", 
        lessons: [
          "1. Interferenze lavorative nell’evoluzione della normativa",
          "2. Prevenzione e protezione, cooperazione e coordinamento",
          "3. Interferenze e rischi interferenti, DUVRI nei cantieri",
          "4. Reperire le informazioni per elaborare il DUVRI",
          "5. Caratteristiche e contenuti del DUVRI - Parte 1",
          "6. Caratteristiche e contenuti del DUVRI - Parte 2",
          "7. Interferenze con gli utenti esterni",
          "8. Esempio pratico di DUVRI (modello INAIL) - Parte 1",
          "9. Esempio pratico di DUVRI (modello INAIL) - Parte 2",
          "10. Esempio pratico di DUVRI (modello INAIL) - Parte 3",
          "11. Esempio pratico di DUVRI (modello INAIL) - Parte 4"
        ] 
      },
      { 
        title: "Quiz di Verifica", 
        duration: "1h 0m", 
        lessons: ["Quiz di Verifica dell'apprendimento - Aggiornamento Coordinatori per la Sicurezza nei Cantieri CSP - CSE"] 
      },
      { title: "Questionario di Gradimento", duration: "0m", lessons: ["Questionario di gradimento - Aggiornamento Coordinatori per la Sicurezza nei Cantieri CSP - CSE"] }
    ]
  },
  {
    id: "soft-1",
    title: "Comunicazione Efficace e Leadership",
    lessons: 12,
    duration: "4h",
    price: "55,00",
    category: "Soft Skills",
    description: "Sviluppa le tue abilità comunicative e impara a guidare un team con successo attraverso tecniche di leadership moderna.",
    objectives: ["Migliorare la comunicazione interpersonale", "Gestire i conflitti", "Ispirare e motivare il team"],
    references: ["Best Practices di Management"],
    recipients: "Manager, Team Leader e chiunque voglia migliorare le proprie soft skills",
    syllabus: [
      { title: "Fondamenti della comunicazione", lessonsCount: 3, duration: "1h" },
      { title: "Leadership e stili di comando", lessonsCount: 3, duration: "1h" },
      { title: "Gestione dei conflitti", lessonsCount: 3, duration: "1h" },
      { title: "Motivazione e feedback", lessonsCount: 3, duration: "1h" }
    ]
  },
  {
    id: "soft-2",
    title: "Gestione del Tempo e dello Stress",
    lessons: 10,
    duration: "3h",
    price: "45,00",
    category: "Soft Skills",
    description: "Impara a organizzare la tua giornata lavorativa in modo efficiente e a gestire lo stress per una maggiore produttività e benessere.",
    objectives: ["Tecniche di time management", "Identificare le priorità", "Strategie di coping per lo stress"],
    references: ["Metodologie Agile e Lean"],
    recipients: "Professionisti e dipendenti di ogni settore",
    syllabus: [
      { title: "Analisi del tempo e ladri di tempo", lessonsCount: 3, duration: "1h" },
      { title: "Matrice di Eisenhower e priorità", lessonsCount: 3, duration: "1h" },
      { title: "Tecniche di rilassamento e focus", lessonsCount: 3, duration: "1h" },
      { title: "Test di autovalutazione", lessonsCount: 1, duration: "15m" }
    ]
  },
  {
    id: "blsd-dae",
    title: "Corso BLSD – Uso del Defibrillatore (5 ore)",
    lessons: 6,
    duration: "5 ore",
    price: "70,00",
    category: "Sicurezza lavoratori",
    description: "Il Corso BLSD (Basic Life Support and Defibrillation) da 5 ore fornisce le competenze necessarie per intervenire tempestivamente in caso di arresto cardiaco improvviso, utilizzando correttamente il defibrillatore semiautomatico esterno (DAE) e applicando le manovre di rianimazione cardiopolmonare.",
    objectives: [
      "Riconoscimento dell'arresto cardiaco",
      "Attivazione del sistema di emergenza (118/112)",
      "Tecniche di rianimazione cardiopolmonare (RCP) nell'adulto",
      "Utilizzo del defibrillatore semiautomatico esterno (DAE)",
      "Gestione delle vie aeree e posizione laterale di sicurezza"
    ],
    references: ["Linee guida internazionali sulla rianimazione cardiopolmonare", "D.Lgs. 81/08"],
    recipients: "Lavoratori, addetti alla sicurezza, personale aziendale e cittadini.",
    syllabus: [
      { title: "Riconoscimento dell'arresto cardiaco e attivazione emergenza", duration: "1h" },
      { title: "Tecniche di rianimazione cardiopolmonare (RCP)", duration: "1h 30m" },
      { title: "Utilizzo del defibrillatore semiautomatico esterno (DAE)", duration: "1h" },
      { title: "Gestione delle vie aeree e manovre di disostruzione", duration: "1h" },
      { title: "Simulazioni pratiche di intervento con manichino e DAE", duration: "30m" }
    ]
  }
];


export const categories: string[] = [
  "Tutti i corsi",
  "Sicurezza lavoratori",
  "Attrezzature",
  "Dirigente - Preposto",
  "Utilizzo diisocianati",
  "Datore di lavoro",
  "HACCP",
  "RLS",
  "Privacy e protezione dei dati"
];
