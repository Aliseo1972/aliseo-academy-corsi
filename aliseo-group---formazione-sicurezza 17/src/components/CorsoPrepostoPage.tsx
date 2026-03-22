import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Clock, BookOpen, Euro, CheckCircle2, Users, FileText, ChevronRight, MessageSquare, ShieldCheck, GraduationCap, Briefcase, Scale, Laptop, Globe, Award, Zap } from 'lucide-react';
import { courses } from '../data/courses';
import OnlineLearningBenefits from './OnlineLearningBenefits';

interface CorsoPrepostoPageProps {
  onNavigate: (view: any) => void;
}

const CorsoPrepostoPage: React.FC<CorsoPrepostoPageProps> = ({ onNavigate }) => {
  const course = courses.find(c => c.id === "76") || {
    title: "Corso Preposto",
    duration: "8h",
    price: "120,00 €",
    description: "Formazione obbligatoria per la figura del preposto ai sensi del D.Lgs 81/08.",
    objectives: ["Ruolo e responsabilità", "Tecniche di vigilanza", "Gestione delle emergenze"],
    references: ["Art. 37 D.Lgs. 81/08", "Accordo Stato-Regioni 21/12/2011"],
    recipients: "Lavoratori che svolgono funzioni di preposto",
    syllabus: [
      { title: "Principali soggetti coinvolti e i relativi obblighi", duration: "2h" },
      { title: "Definizione e individuazione dei fattori di rischio", duration: "2h" },
      { title: "Incidenti e infortuni mancati", duration: "2h" },
      { title: "Tecniche di comunicazione e sensibilizzazione dei lavoratori", duration: "2h" }
    ]
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    // Update meta tags
    document.title = "Corso Preposto Online Obbligatorio | Aliseo Academy";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Corso preposto obbligatorio per aziende secondo D.Lgs 81/08. Formazione 100% online in e-learning con Aliseo Academy.");
    }
  }, []);

  const mailtoLink = "mailto:commerciale@aliseogroup.it?subject=Richiesta%20informazioni%20corso%20Preposto%20Online&body=Buongiorno%2C%0A%0ASono%20interessato%20al%20corso%20Preposto%20obbligatorio%20in%20modalit%C3%A0%20e-learning.%0APotrei%20avere%20maggiori%20informazioni%20sull'attivazione%3F%0A%0AGrazie.";

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,184,0,0.1),transparent_50%)]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand text-xs font-bold uppercase tracking-wider mb-6"
            >
              <Laptop className="w-4 h-4" />
              Formazione E-learning - D.Lgs 81/08
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6"
            >
              Corso <span className="text-brand">Preposto</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-400 leading-relaxed mb-8"
            >
              La formazione obbligatoria per i preposti aziendali ai sensi del <strong>D.Lgs 81/08</strong> e dell'<strong>Accordo Stato-Regioni</strong>. Un percorso essenziale per chi esercita funzioni di vigilanza e controllo.
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
                  <span className="text-white font-bold">{course.duration}</span>
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
                  L'importanza della Formazione Preposto
                </h2>
                <div className="text-slate-600 leading-relaxed space-y-6 text-lg">
                  <p>
                    Il <strong>corso preposto obbligatorio</strong> rappresenta un pilastro fondamentale della sicurezza aziendale, come stabilito in modo inequivocabile dal <strong>corso preposto D.Lgs 81/08</strong>. La figura del preposto riveste un ruolo di vigilanza attiva e costante, garantendo che le direttive impartite dal datore di lavoro e dai dirigenti in materia di salute e sicurezza siano effettivamente applicate dai lavoratori durante lo svolgimento delle loro mansioni quotidiane. Questa responsabilità non è meramente formale, ma richiede una <strong>formazione preposto aziende</strong> specifica e approfondita, che vada ben oltre la formazione generale dei lavoratori, focalizzandosi sulle capacità critiche di supervisione, controllo operativo e intervento immediato in caso di situazioni di pericolo o comportamenti non conformi.
                  </p>
                  <p>
                    Aliseo Academy propone una <strong>formazione online</strong> di altissima qualità, meticolosamente progettata per fornire ai preposti non solo le conoscenze normative indispensabili, ma anche le competenze relazionali, psicologiche e comunicative necessarie per gestire il proprio team con autorevolezza e in totale sicurezza. La nostra modalità <strong>e-learning</strong> permette di contestualizzare l'apprendimento direttamente nell'ambiente di lavoro abituale, rendendo l'apprendimento molto più efficace, immediato e pertinente alle specifiche sfide del settore di riferimento, senza la necessità di trasferte o interruzioni prolungate dell'attività.
                  </p>
                  <p>
                    Grazie alla nostra piattaforma all'avanguardia, portiamo un'aula didattica completa, tecnologicamente avanzata e perfettamente attrezzata direttamente sui dispositivi dei vostri collaboratori. Questo approccio è l'ideale per svolgere la formazione con la massima flessibilità, permettendo ai preposti di confrontarsi con scenari reali, simulazioni operative e analisi dei rischi attraverso materiali multimediali interattivi, ottimizzando così i tempi di produzione e riducendo l'impatto organizzativo per l'azienda.
                  </p>
                  <p>
                    La normativa vigente, rafforzata dalle recenti modifiche legislative, richiede che il preposto riceva una formazione particolare aggiuntiva rispetto a quella prevista per i lavoratori. Questo percorso formativo deve essere aggiornato periodicamente con cadenza biennale per garantire che le competenze rimangano costantemente allineate all'evoluzione dei rischi, delle tecnologie e delle procedure di sicurezza. I nostri docenti, professionisti esperti in sicurezza industriale e prevenzione, guidano i partecipanti attraverso casi studio reali, analisi di infortuni mancati (near miss) e dinamiche di gruppo, promuovendo una cultura della prevenzione proattiva che trasforma il preposto in un vero leader della sicurezza.
                  </p>
                  <p>
                    Investire seriamente nella formazione dei preposti significa ridurre drasticamente la probabilità di infortuni sul lavoro e l'insorgenza di malattie professionali, proteggendo il capitale umano e la continuità operativa dell'impresa. Un preposto ben formato e consapevole è in grado di riconoscere i segnali deboli di pericolo prima che questi si trasformino in incidenti gravi, intervenendo con tempestività e fermezza per correggere prassi lavorative rischiose. Aliseo Academy si impegna a fornire un supporto costante e personalizzato alle aziende, garantendo il rilascio di attestati validi a norma di legge e una preparazione d'eccellenza riconosciuta e apprezzata su tutto il territorio nazionale.
                  </p>
                  <p>
                    La nostra metodologia didattica privilegia l'interazione e il confronto, trasformando ogni sessione formativa in un momento di crescita professionale e consapevolezza. Grazie all'esperienza maturata sul campo, siamo in grado di adattare i contenuti del corso alle specificità di ogni realtà aziendale, dai piccoli laboratori artigianali ai grandi complessi industriali. Scegliere Aliseo Academy significa affidarsi a un partner che mette la sicurezza al centro del business, fornendo strumenti concreti per la gestione quotidiana della prevenzione e la tutela della salute di ogni lavoratore.
                  </p>
                </div>
              </article>

              <OnlineLearningBenefits />

              {/* Course Content Sections */}
              <div className="space-y-12">
                {/* A chi è rivolto */}
                <section>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <div className="w-1.5 h-6 bg-brand rounded-full" />
                    A chi è rivolto
                  </h3>
                  <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8">
                    <p className="text-slate-600 leading-relaxed">
                      Il corso è destinato a tutti i lavoratori che, in ragione delle competenze professionali e nei limiti di poteri gerarchici e funzionali adeguati alla natura dell'incarico conferitogli, sovrintendono alla attività lavorativa e garantiscono l'attuazione delle direttive ricevute, controllandone la corretta esecuzione da parte dei lavoratori ed esercitando un funzionale potere di iniziativa. Tipicamente: capisquadra, capiofficina, caporeparto, responsabili di linea, etc.
                    </p>
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
                      "Conoscere i principali soggetti coinvolti e i relativi obblighi",
                      "Individuare i fattori di rischio e le misure di prevenzione",
                      "Apprendere le tecniche di vigilanza e controllo",
                      "Gestire le relazioni e la comunicazione con i lavoratori",
                      "Intervenire correttamente in caso di emergenza o pericolo",
                      "Analizzare le cause di infortuni e mancati infortuni"
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
                    Programma Didattico
                  </h3>
                  <div className="space-y-4">
                    {course.syllabus?.map((module, i) => (
                      <div key={i} className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-brand/30 transition-all shadow-sm">
                        <div className="flex justify-between items-start">
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-slate-900 text-brand flex items-center justify-center font-bold">
                              {String(i + 1).padStart(2, '0')}
                            </div>
                            <h4 className="font-bold text-slate-900 text-lg">{module.title}</h4>
                          </div>
                          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider bg-slate-50 px-3 py-1 rounded-full border border-slate-100">
                            {module.duration}
                          </span>
                        </div>
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
                    <p className="text-slate-400 mb-6">
                      La formazione del preposto è regolata da disposizioni legislative rigorose per garantire standard di sicurezza uniformi:
                    </p>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <Scale className="w-6 h-6 text-brand shrink-0" />
                        <div>
                          <p className="font-bold">Art. 37 D.Lgs. 81/08</p>
                          <p className="text-sm text-slate-400">Stabilisce l'obbligo di formazione particolare aggiuntiva per i preposti.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <FileText className="w-6 h-6 text-brand shrink-0" />
                        <div>
                          <p className="font-bold">Accordo Stato-Regioni 21/12/2011</p>
                          <p className="text-sm text-slate-400">Definisce contenuti, durata e modalità della formazione.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <ShieldCheck className="w-6 h-6 text-brand shrink-0" />
                        <div>
                          <p className="font-bold">Legge 215/2021</p>
                          <p className="text-sm text-slate-400">Recenti aggiornamenti che rafforzano il ruolo e l'obbligo formativo del preposto.</p>
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
                      <p className="text-white font-bold">{course.duration}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                      <Laptop className="w-5 h-5 text-brand" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs uppercase font-bold tracking-wider">Metodologia</p>
                      <p className="text-white font-bold">E-learning (Online)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                      <Globe className="w-5 h-5 text-brand" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs uppercase font-bold tracking-wider">Copertura</p>
                      <p className="text-white font-bold">Nazionale</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                      <Award className="w-5 h-5 text-brand" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs uppercase font-bold tracking-wider">Certificazione</p>
                      <p className="text-white font-bold">Attestato Normativo</p>
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

              {/* Strategic Block */}
              <div className="bg-brand/5 border border-brand/10 rounded-3xl p-8 space-y-6">
                <h4 className="font-bold text-slate-900 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-brand" />
                  Vantaggi E-learning
                </h4>
                <ul className="space-y-4">
                  {[
                    "Formazione 100% online certificata",
                    "Accesso immediato h24 alla piattaforma",
                    "Nessun costo di trasferta o logistica",
                    "Flessibilità totale per i dipendenti",
                    "Attestato valido a norma di legge"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-700 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-brand shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
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
                <span className="flex items-center gap-1"><Euro className="w-3.5 h-3.5" /> 160,00 €</span>
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
              onClick={() => onNavigate('aggiornamento-preposto')}
              className="group p-6 bg-slate-50 rounded-2xl border border-slate-200 hover:border-brand/30 hover:bg-white transition-all text-left shadow-sm"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-brand">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-brand group-hover:translate-x-1 transition-all" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Aggiornamento Preposto</h3>
              <p className="text-sm text-slate-500 mb-4">Aggiornamento obbligatorio per la figura del preposto ai sensi del D.Lgs 81/08.</p>
              <div className="flex items-center gap-4 text-xs font-bold text-slate-400">
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> 6h</span>
                <span className="flex items-center gap-1"><Euro className="w-3.5 h-3.5" /> 73,20 €</span>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 uppercase tracking-tight">
            Pronto a formare i tuoi <span className="text-brand">Preposti</span>?
          </h2>
          <p className="text-lg text-slate-600 mb-10">
            Soluzioni su misura per la tua impresa: garantisci la massima sicurezza con una formazione professionale, flessibile e certificata 100% online.
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

export default CorsoPrepostoPage;
