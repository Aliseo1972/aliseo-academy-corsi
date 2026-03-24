import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Clock, BookOpen, Euro, CheckCircle2, Users, FileText, ChevronRight, ShieldCheck, GraduationCap, Laptop, Globe, Zap, Award, Scale, CalendarClock } from 'lucide-react';
import { courses } from '../data/courses';
import OnlineLearningBenefits from './OnlineLearningBenefits';

interface AggiornamentoPrepostoPageProps {
  onNavigate: (view: any) => void;
}

const AggiornamentoPrepostoPage: React.FC<AggiornamentoPrepostoPageProps> = ({ onNavigate }) => {
  // Find the course in the data if available (ID 77)
  const course = courses.find(c => c.id === "77") || {
    title: "Preposto - Aggiornamento",
    duration: "6h",
    price: "73,20 €",
    description: "Aggiornamento obbligatorio per la figura del preposto ai sensi del D.Lgs 81/08.",
    objectives: ["Ruolo e responsabilità", "Tecniche di vigilanza", "Gestione delle emergenze"],
    references: ["Art. 37 D.Lgs. 81/08", "Accordo Stato-Regioni 17/04/2025 (Rep. Atti n. 59/CSR)"],
    recipients: "Preposti che hanno già effettuato la formazione base",
    syllabus: [
      { title: "Principali soggetti coinvolti e i relativi obblighi", duration: "1h 30m", lessonsCount: 6 },
      { title: "Definizione e individuazione dei fattori di rischio", duration: "1h 30m", lessonsCount: 6 },
      { title: "Incidenti e infortuni mancati", duration: "1h 30m", lessonsCount: 5 },
      { title: "Tecniche di comunicazione e sensibilizzazione", duration: "1h 30m", lessonsCount: 5 }
    ]
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    // Update meta tags
    document.title = "Aggiornamento Preposto Obbligatorio Online | Aliseo Academy";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Aggiornamento preposto obbligatorio per aziende secondo D.Lgs 81/08. Corso online in e-learning con Aliseo Academy.");
    }
  }, []);

  const mailtoLink = "mailto:commerciale@aliseogroup.it?subject=Richiesta%20informazioni%20aggiornamento%20Preposto&body=Buongiorno%2C%0A%0ASono%20interessato%20al%20corso%20di%20aggiornamento%20Preposto%20(6%20ore).%0APotrei%20avere%20maggiori%20informazioni%20sull'attivazione%20in%20e-learning%3F%0A%0AGrazie.";

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-6"
            >
              <Laptop className="w-4 h-4" />
              Aggiornamento E-learning - D.Lgs 81/08
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6"
            >
              Aggiornamento Preposto <span className="text-brand">Sicurezza sul Lavoro</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-400 leading-relaxed mb-8"
            >
              Il percorso di <strong>aggiornamento preposto obbligatorio</strong> per garantire la continuità della vigilanza operativa in azienda. Formazione flessibile 100% online.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col gap-4"
            >
              <div className="flex flex-col gap-2">
                <span className="text-slate-400 text-sm font-bold ml-2">Ti rispondiamo entro 24 ore</span>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href={mailtoLink}
                    className="px-8 py-4 bg-brand text-slate-900 font-black uppercase tracking-tight rounded-2xl hover:bg-brand-light transition-all flex items-center gap-2 group shadow-xl shadow-brand/20"
                  >
                    Ricevi informazioni sul corso
                    <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4 px-6 py-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm w-fit">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-brand" />
                  <span className="text-white font-bold">6 ore</span>
                </div>
                <div className="w-px h-6 bg-white/10" />
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-brand" />
                  <span className="text-white font-bold">22 lezioni</span>
                </div>
                <div className="w-px h-6 bg-white/10" />
                <div className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-brand" />
                  <span className="text-white font-bold text-sm">100% Online</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Left Column: Course Details */}
            <div className="lg:col-span-2 space-y-16">
              
              {/* SEO Text Section */}
              <article className="prose prose-slate max-w-none">
                <h2 className="text-3xl font-black text-slate-900 mb-6 flex items-center gap-3">
                  <div className="w-2 h-8 bg-brand rounded-full" />
                  Perché aggiornare la formazione del Preposto?
                </h2>
                <div className="text-slate-600 leading-relaxed space-y-6 text-lg">
                  <p>
                    L'<strong>aggiornamento preposto obbligatorio</strong> è un adempimento normativo di cruciale importanza per la sicurezza operativa di ogni azienda. La figura del preposto, infatti, rappresenta l'anello di congiunzione tra le direttive strategiche dei dirigenti e l'esecuzione pratica dei lavoratori. Il <strong>corso aggiornamento preposto D.Lgs 81/08</strong> mira a rinfrescare e potenziare le capacità di vigilanza e controllo, garantendo che chi sovrintende alle attività lavorative sia sempre al passo con le ultime disposizioni legislative e le migliori prassi di prevenzione.
                  </p>
                  <p>
                    L'<strong>aggiornamento preposto sicurezza</strong> non deve essere vissuto come un mero obbligo burocratico, ma come un'opportunità per affinare le tecniche di comunicazione e sensibilizzazione dei lavoratori. Un preposto aggiornato è in grado di riconoscere tempestivamente i comportamenti a rischio e di intervenire con autorevolezza per correggere le prassi non conformi, riducendo drasticamente la probabilità di infortuni e "near miss". Aliseo Academy offre un percorso di aggiornamento di 6 ore, meticolosamente strutturato per fornire strumenti pratici e immediatamente applicabili nel contesto lavorativo quotidiano.
                  </p>
                  <p>
                    La scelta della modalità <strong>e-learning</strong> per l'aggiornamento dei preposti risponde alla necessità delle aziende di ottimizzare i tempi e le risorse. La nostra piattaforma online permette ai preposti di accedere ai contenuti formativi in modo flessibile, gestendo lo studio nei momenti di minore carico lavorativo. Questo approccio garantisce una formazione di alta qualità senza la necessità di lunghe assenze dal reparto o dal cantiere, mantenendo alta la produttività aziendale pur garantendo la massima tutela legale e la sicurezza dei lavoratori.
                  </p>
                  <p>
                    Investire nella formazione continua del personale di supervisione significa promuovere una cultura della sicurezza proattiva e condivisa. Le recenti modifiche normative hanno ulteriormente rafforzato il ruolo del preposto, rendendo l'aggiornamento periodico ancora più determinante per evitare sanzioni e, soprattutto, per proteggere la salute di tutti i collaboratori. Con Aliseo Academy, avrai la certezza di un percorso formativo certificato, aggiornato alle più recenti interpretazioni dell'Accordo Stato-Regioni e supportato da tutor esperti pronti a chiarire ogni dubbio normativo o tecnico.
                  </p>
                  <p>
                    Il programma del corso affronta in modo dinamico l'analisi dei rischi specifici, la gestione delle emergenze e le responsabilità civili e penali connesse al ruolo. Al termine delle 6 ore di formazione online, il preposto riceverà un attestato valido a norma di legge su tutto il territorio nazionale, confermando la propria idoneità a svolgere le delicate funzioni di vigilanza e controllo affidategli dal datore di lavoro.
                  </p>
                </div>
              </article>

              <OnlineLearningBenefits />

              {/* Detailed Sections */}
              <div className="space-y-12">
                {/* A chi è rivolto */}
                <section>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <div className="w-1.5 h-6 bg-brand rounded-full" />
                    A chi è rivolto
                  </h3>
                  <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8">
                    <p className="text-slate-600 leading-relaxed">
                      Il corso è destinato a tutti i lavoratori che ricoprono il ruolo di <strong>Preposto</strong> (capisquadra, capiofficina, responsabili di reparto, etc.) e che hanno già frequentato il corso di formazione base particolare aggiuntiva. L'aggiornamento è necessario per mantenere l'abilitazione allo svolgimento delle funzioni di vigilanza e controllo.
                    </p>
                  </div>
                </section>

                {/* Quando è necessario */}
                <section>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <div className="w-1.5 h-6 bg-brand rounded-full" />
                    Quando è necessario l'aggiornamento
                  </h3>
                  <div className="bg-brand/5 border border-brand/10 rounded-3xl p-8">
                    <div className="flex gap-4 items-start">
                      <CalendarClock className="w-8 h-8 text-brand shrink-0" />
                      <div>
                        <p className="text-slate-700 font-medium leading-relaxed">
                          Secondo le disposizioni dell'Accordo Stato-Regioni e le recenti integrazioni normative, l'aggiornamento per il preposto deve essere effettuato con cadenza <strong>biennale</strong>. È fondamentale non far scadere l'attestato per non incorrere in sanzioni e per garantire la piena validità della copertura assicurativa e legale dell'azienda.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Obiettivi */}
                <section>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <div className="w-1.5 h-6 bg-brand rounded-full" />
                    Obiettivi del corso
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "Ripassare i compiti e le responsabilità del preposto",
                      "Aggiornare le conoscenze sui rischi specifici",
                      "Migliorare le capacità di vigilanza operativa",
                      "Approfondire le tecniche di comunicazione efficace",
                      "Analizzare casi studio di infortuni e mancati infortuni",
                      "Gestire correttamente le situazioni di emergenza"
                    ].map((obj, i) => (
                      <div key={i} className="flex items-start gap-3 p-4 bg-white border border-slate-200 rounded-2xl shadow-sm">
                        <CheckCircle2 className="w-5 h-5 text-brand shrink-0" />
                        <span className="text-slate-700 text-sm font-medium">{obj}</span>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Programma */}
                <section>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <div className="w-1.5 h-6 bg-brand rounded-full" />
                    Programma Didattico (6 ore - 22 lezioni)
                  </h3>
                  <div className="space-y-4">
                    {[
                      { title: "Modulo 1: Quadro Normativo e Responsabilità", content: "Evoluzione della normativa, il ruolo del preposto dopo le recenti riforme, responsabilità civili e penali.", lessons: 6 },
                      { title: "Modulo 2: Gestione dei Rischi e Vigilanza", content: "Individuazione dei fattori di rischio, misure di prevenzione e protezione, tecniche di controllo dei comportamenti.", lessons: 6 },
                      { title: "Modulo 3: Comunicazione e Leadership", content: "Come sensibilizzare i lavoratori, gestione dei conflitti, promozione della cultura della sicurezza in reparto.", lessons: 5 },
                      { title: "Modulo 4: Analisi degli Infortuni e Emergenze", content: "Analisi delle cause di infortunio, gestione dei near miss, procedure di intervento in caso di pericolo grave e immediato.", lessons: 5 }
                    ].map((module, i) => (
                      <div key={i} className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-brand/30 transition-all shadow-sm">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-slate-900 text-brand flex items-center justify-center font-bold shrink-0">
                              {String(i + 1).padStart(2, '0')}
                            </div>
                            <h4 className="font-bold text-slate-900 text-lg">{module.title}</h4>
                          </div>
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider bg-slate-50 px-2 py-1 rounded-md border border-slate-100">
                            {module.lessons} lezioni
                          </span>
                        </div>
                        <p className="text-slate-500 text-sm leading-relaxed ml-14">{module.content}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Normativa */}
                <section>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <div className="w-1.5 h-6 bg-brand rounded-full" />
                    Quadro Normativo
                  </h3>
                  <div className="bg-slate-900 text-white rounded-3xl p-8">
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <Scale className="w-6 h-6 text-brand shrink-0" />
                        <div>
                          <p className="font-bold">D.Lgs. 81/08 - Art. 37</p>
                          <p className="text-sm text-slate-400">Stabilisce l'obbligo di formazione e aggiornamento per i preposti.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <FileText className="w-6 h-6 text-brand shrink-0" />
                        <div>
                          <p className="font-bold">Accordo Stato-Regioni 21/12/2011</p>
                          <p className="text-sm text-slate-400">Definisce i contenuti minimi e la durata dell'aggiornamento.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <ShieldCheck className="w-6 h-6 text-brand shrink-0" />
                        <div>
                          <p className="font-bold">Legge 215/2021</p>
                          <p className="text-sm text-slate-400">Rafforza l'obbligo di aggiornamento biennale per la figura del preposto.</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </section>
              </div>
            </div>

            {/* Right Column: Sidebar Info */}
            <div className="space-y-8">
              {/* Info Card */}
              <div className="bg-slate-900 rounded-3xl p-8 sticky top-24 shadow-2xl shadow-slate-200">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <GraduationCap className="w-6 h-6 text-brand" />
                  Scheda Corso
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-brand" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs uppercase font-bold tracking-wider">Durata</p>
                      <p className="text-white font-bold">6 ore</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                      <BookOpen className="w-5 h-5 text-brand" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs uppercase font-bold tracking-wider">Lezioni</p>
                      <p className="text-white font-bold">22 moduli</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                      <Laptop className="w-5 h-5 text-brand" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs uppercase font-bold tracking-wider">Modalità</p>
                      <p className="text-white font-bold">E-learning (Online)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                      <Globe className="w-5 h-5 text-brand" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs uppercase font-bold tracking-wider">Validità</p>
                      <p className="text-white font-bold">Nazionale</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                      <CalendarClock className="w-5 h-5 text-brand" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs uppercase font-bold tracking-wider">Frequenza</p>
                      <p className="text-white font-bold text-sm">Ogni 2 anni</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-white/10">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-slate-400 font-bold uppercase text-xs tracking-widest">Prezzo</span>
                    <span className="text-3xl font-black text-brand">{course.price}</span>
                  </div>
                  <div className="space-y-2">
                    <p className="text-slate-400 text-xs font-bold text-center">Ti rispondiamo entro 24 ore</p>
                    <a 
                      href={mailtoLink}
                      className="block w-full py-4 bg-brand text-slate-900 text-center font-black uppercase tracking-tight rounded-2xl hover:bg-brand-light transition-all shadow-lg shadow-brand/20"
                    >
                      Ricevi informazioni sul corso
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Potrebbero interessarti anche */}
      <section className="py-16 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black text-slate-900 mb-8 flex items-center gap-3">
            <div className="w-2 h-6 bg-brand rounded-full" />
            Potrebbero interessarti anche
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <button 
              onClick={() => onNavigate('corso-dirigente')}
              className="group p-6 bg-slate-50 rounded-2xl border border-slate-200 hover:border-brand/30 hover:bg-white transition-all text-left shadow-sm"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-brand">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-brand group-hover:translate-x-1 transition-all" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Corso Dirigente</h3>
              <p className="text-sm text-slate-500 mb-4">Formazione obbligatoria per dirigenti ai sensi del D.Lgs 81/08.</p>
              <div className="flex items-center gap-4 text-xs font-bold text-slate-400">
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> 12h</span>
                <span className="flex items-center gap-1"><BookOpen className="w-3.5 h-3.5" /> 37 lezioni</span>
                <span className="flex items-center gap-1"><Euro className="w-3.5 h-3.5" /> 195,20 €</span>
              </div>
            </button>

            <button 
              onClick={() => onNavigate('aggiornamento-dirigente')}
              className="group p-6 bg-slate-50 rounded-2xl border border-slate-200 hover:border-brand/30 hover:bg-white transition-all text-left shadow-sm"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-brand">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-brand group-hover:translate-x-1 transition-all" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Aggiornamento Dirigente</h3>
              <p className="text-sm text-slate-500 mb-4">Aggiornamento quinquennale obbligatorio per la figura del dirigente.</p>
              <div className="flex items-center gap-4 text-xs font-bold text-slate-400">
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> 6h</span>
                <span className="flex items-center gap-1"><Euro className="w-3.5 h-3.5" /> 73,20 €</span>
              </div>
            </button>

            <button 
              onClick={() => onNavigate('corso-preposto')}
              className="group p-6 bg-slate-50 rounded-2xl border border-slate-200 hover:border-brand/30 hover:bg-white transition-all text-left shadow-sm"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-brand">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-brand group-hover:translate-x-1 transition-all" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Corso Preposto</h3>
              <p className="text-sm text-slate-500 mb-4">Formazione aggiuntiva e integrativa per la figura del preposto ai sensi del D.Lgs 81/08.</p>
              <div className="flex items-center gap-4 text-xs font-bold text-slate-400">
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> 5h</span>
                <span className="flex items-center gap-1"><BookOpen className="w-3.5 h-3.5" /> 20 lezioni</span>
                <span className="flex items-center gap-1"><Euro className="w-3.5 h-3.5" /> 61,00 €</span>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 uppercase tracking-tight">
            Vigilanza <span className="text-brand">Efficace</span> e Sicura
          </h2>
          <p className="text-lg text-slate-600 mb-10">
            Soluzioni su misura per la tua impresa: assicura ai tuoi preposti la migliore formazione online. Attiva subito l'aggiornamento in e-learning e mantieni la tua azienda protetta e in regola.
          </p>
          <div className="flex flex-col items-center gap-2">
            <span className="text-slate-500 text-sm font-bold">Ti rispondiamo entro 24 ore</span>
            <a 
              href={mailtoLink}
              className="px-12 py-5 bg-slate-900 text-white font-black uppercase tracking-tight rounded-2xl hover:bg-slate-800 transition-all shadow-xl inline-block"
            >
              Ricevi informazioni sul corso
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AggiornamentoPrepostoPage;
