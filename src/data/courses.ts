import { Course } from "../types";

export const courses: Course[] = [
  {
    id: "19",
    title: "Formazione generale per lavoratore",
    lessons: 16,
    duration: "4h",
    price: "48,80 €",
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
    price: "390,40 €",
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
    price: "24,40 €",
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
    price: "97,60 €",
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
    price: "24,40 €",
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
    price: "48,80 €",
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
    title: "Dirigente",
    lessons: 37,
    duration: "12h",
    price: "195,20 €",
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
    id: "78",
    title: "Personale addetto alla manipolazione degli alimenti",
    lessons: 40,
    duration: "8h",
    price: "97,60 €",
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
    price: "97,60 €",
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
    price: "73,20 €",
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
    price: "244,00 €",
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
    price: "48,80 €",
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
    price: "48,80 €",
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
    price: "48,80 €",
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
    price: "36,60 €",
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
    price: "97,60 €",
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
    price: "195,20 €",
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
    id: "75",
    title: "Dirigente - Aggiornamento",
    lessons: 23,
    duration: "6h",
    price: "73,20 €",
    category: "Dirigente - Preposto",
    description: "Aggiornamento quinquennale obbligatorio per la figura del dirigente.",
    objectives: ["Evoluzione normativa", "Giurisprudenza", "Sistemi di gestione"],
    references: ["Art. 37 D.Lgs. 81/08", "Accordo Stato-Regioni 17/04/2025 (Rep. Atti n. 59/CSR)"],
    recipients: "Dirigenti",
    syllabus: [
      { title: "Novità legislative e giurisprudenziali", lessonsCount: 6, duration: "2h" },
      { title: "Sistemi di gestione della sicurezza (SGSL)", lessonsCount: 6, duration: "1h 30m" },
      { title: "Modelli organizzativi e responsabilità", lessonsCount: 6, duration: "1h 30m" },
      { title: "Cultura della sicurezza in azienda", lessonsCount: 4, duration: "50m" },
      { title: "Test di valutazione", lessonsCount: 1, duration: "10m" }
    ]
  },
  {
    id: "22",
    title: "Formazione specifica per lavoratore - rischio basso del settore uffici",
    lessons: 22,
    duration: "4h",
    price: "48,80 €",
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
    price: "97,60 €",
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
    price: "48,80 €",
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
    price: "36,60 €",
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
    price: "292,80 €",
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
    title: "Formazione particolare aggiuntiva per il Preposto (Moduli da 1 a 5)",
    lessons: 20,
    duration: "5h",
    price: "61,00 €",
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
    price: "97,60 €",
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
    price: "48,80 €",
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
    id: "77",
    title: "Formazione particolare aggiuntiva per il Preposto - Aggiornamento",
    lessons: 22,
    duration: "6h",
    price: "73,20 €",
    category: "Dirigente - Preposto",
    description: "Aggiornamento biennale obbligatorio per la figura del preposto.",
    objectives: ["Nuovi compiti di vigilanza", "Analisi dei comportamenti", "Aggiornamenti tecnici"],
    references: ["Art. 37 D.Lgs. 81/08", "Accordo Stato-Regioni 17/04/2025 (Rep. Atti n. 59/CSR)"],
    recipients: "Preposti",
    syllabus: [
      { title: "Evoluzione normativa per il preposto", lessonsCount: 5, duration: "1h 30m" },
      { title: "Tecniche di vigilanza e controllo", lessonsCount: 6, duration: "2h" },
      { title: "Gestione delle emergenze e criticità", lessonsCount: 5, duration: "1h 30m" },
      { title: "Comunicazione efficace con i lavoratori", lessonsCount: 5, duration: "50m" },
      { title: "Test di verifica finale", lessonsCount: 1, duration: "10m" }
    ]
  },
  {
    id: "24",
    title: "Formazione generale e specifica per lavoratore - rischio basso del settore uffici",
    lessons: 36,
    duration: "8h",
    price: "97,60 €",
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
    price: "48,80 €",
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
    price: "122,00 €",
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
    price: "73,20 €",
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
    price: "85,40 €",
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
    price: "24,40 €",
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
    price: "97,60 €",
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
    price: "292,80 €",
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
    price: "24,40 €",
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
    price: "85,40 €",
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
    price: "195,20 €",
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
    price: "24,40 €",
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
    price: "36,60 €",
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
    price: "24,40 €",
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
    price: "24,40 €",
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
    price: "24,40 €",
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
    price: "24,40 €",
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
    price: "24,40 €",
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
    price: "24,40 €",
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
    price: "24,40 €",
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
    price: "24,40 €",
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
    price: "24,40 €",
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
    price: "24,40 €",
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
    price: "24,40 €",
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
    price: "24,40 €",
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
    price: "24,40 €",
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
    price: "24,40 €",
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
    price: "24,40 €",
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
    price: "24,40 €",
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
    price: "48,80 €",
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
    price: "24,40 €",
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
    id: "37",
    title: "Formazione per lavoratori - Rischio Lavori in Quota",
    lessons: 22,
    duration: "4h",
    price: "48,80 €",
    category: "Sicurezza lavoratori",
    description: "Prevenzione delle cadute dall'alto per attività sopra i 2 metri.",
    objectives: ["Sistemi anticaduta", "Scale e trabattelli", "Punti di ancoraggio"],
    references: ["Titolo IV D.Lgs. 81/08", "Accordo Stato-Regioni 21/12/2011"],
    recipients: "Edili, manutentori, antennisti",
    syllabus: [
      { title: "Normativa sui lavori in quota", lessonsCount: 5, duration: "1h" },
      { title: "DPI di III categoria: imbracature e cordini", lessonsCount: 6, duration: "1h" },
      { title: "Sistemi di ancoraggio e linee vita", lessonsCount: 6, duration: "1h" },
      { title: "Procedure di emergenza e recupero", lessonsCount: 4, duration: "50m" },
      { title: "Test finale", lessonsCount: 1, duration: "10m" }
    ]
  },
  {
    id: "25",
    title: "Addetto ai lavori elettrici (PES PAV PEI)",
    lessons: 58,
    duration: "16h",
    price: "195,20 €",
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
    price: "73,20 €",
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
    price: "350,00 € + iva",
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
    price: "700,00 € + iva",
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
  "Privacy e protezione dei dati",
  "Corsi per Professionisti"
];
