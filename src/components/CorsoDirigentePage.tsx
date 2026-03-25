import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Clock, BookOpen, Euro, CheckCircle2, Users, FileText, ChevronRight, MessageSquare, ShieldCheck, GraduationCap, Briefcase, Scale, Laptop, Globe, Zap, Award } from 'lucide-react';
import { courses } from '../data/courses';
import OnlineLearningBenefits from './OnlineLearningBenefits';

interface CorsoDirigentePageProps {
  onNavigate: (view: any) => void;
}

const CorsoDirigentePage: React.FC<CorsoDirigentePageProps> = ({ onNavigate }) => {
  // Find the course in the data if available, or use defaults
  const course = courses.find(c => c.id === "74") || {
    title: "Corso Dirigente",
    duration: "12h",
    price: "160,00 €",
    description: "Formazione obbligatoria per dirigenti ai sensi del D.Lgs 81/08 e Accordo Stato-Regioni.",
    objectives: ["Quadro normativo", "Gestione della sicurezza", "Responsabilità civili e penali"],
    references: ["Art. 37 D.Lgs. 81/08", "Accordo Stato-Regioni 21/12/2011"],
    recipients: "Dirigenti aziendali",
    syllabus: [
      { title: "Modulo Giuridico Organizzativo", duration: "4h 5m", lessons: 13 },
      { title: "Introduzione alla figura del Dirigente", duration: "23m", lessons: 1 },
      { title: "Il Dirigente, Il dirigente Delegato, Il Dirigente di Fatto", duration: "1h 51m", lessons: 3 },
      { title: "Risorse e Benessere Organizzativo", duration: "1h 46m", lessons: 3 },
      { title: "Efficacia Personale e Organizzativa", duration: "1h 58m", lessons: 3 },
      { title: "Guida allo Smart Working", duration: "1h 53m", lessons: 3 },
      { title: "Lo Stress lavoro Correlato", duration: "57m", lessons: 5 }
    ]
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    // Update meta tags
    document.title = "Corso Dirigente Sicurezza Online | Aliseo Academy";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Corso dirigente obbligatorio per aziende secondo D.Lgs 81/08. Formazione online in e-learning con Aliseo Academy.");
    }
  }, []);

  const mailtoLink = "mailto:commerciale@aliseogroup.it?subject=Richiesta%20informazioni%20corso%20Dirigente&body=Buongiorno%2C%0A%0ASono%20interessato%20al%20corso%20Dirigente%20Sicurezza%20sul%20Lavoro%20(12%20ore).%0APotrei%20avere%20maggiori%20informazioni%20sulla%20modalit%C3%A0%20e-learning%20e%20sull'attivazione%3F%0A%0AGrazie.";

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
              Formazione E-learning - D.Lgs 81/08
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6"
            >
              Corso Dirigente <span className="text-brand">Sicurezza sul Lavoro</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-400 leading-relaxed mb-8"
            >
              Percorso di <strong>formazione dirigenti aziende</strong> obbligatorio secondo il D.Lgs 81/08. Disponibile interamente in <strong>e-learning</strong> per la massima flessibilità operativa.
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
                  <span className="text-white font-bold">12 ore</span>
                </div>
                <div className="w-px h-6 bg-white/10" />
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-brand" />
                  <span className="text-white font-bold">37 lezioni</span>
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
                  La Responsabilità del Dirigente nella Sicurezza
                </h2>
                <div className="text-slate-600 leading-relaxed space-y-6 text-lg">
                  <p>
                    Il <strong>corso dirigente obbligatorio</strong> rappresenta un pilastro fondamentale per la gestione della salute e sicurezza nei luoghi di lavoro, costituendo un obbligo indeclinabile per chiunque ricopra ruoli di vertice all'interno di un'organizzazione. Secondo la definizione rigorosa fornita dal <strong>corso dirigente sicurezza D.Lgs 81/08</strong>, il dirigente è colui che, in ragione delle competenze professionali e dei poteri gerarchici e funzionali adeguati alla natura dell'incarico conferitogli, attua le direttive del datore di lavoro, organizzando l'attività lavorativa e vigilando su di essa. Questa figura riveste un ruolo di "garante" della sicurezza, con responsabilità civili e penali che richiedono una preparazione tecnica, giuridica e gestionale di altissimo livello.
                  </p>
                  <p>
                    La <strong>formazione dirigenti aziende</strong> non deve essere intesa come un semplice adempimento burocratico o un costo da sostenere, ma come un'opportunità strategica per migliorare l'efficienza complessiva dei processi aziendali e la reputazione del brand. Un dirigente consapevole dei rischi e delle proprie responsabilità è in grado di integrare la sicurezza nelle scelte organizzative quotidiane, riducendo drasticamente la probabilità di infortuni e ottimizzando i costi legati alla non-sicurezza, come le interruzioni produttive o le sanzioni amministrative. Aliseo Academy offre un percorso formativo completo, strutturato meticolosamente secondo i criteri dell'Accordo Stato-Regioni del 21/12/2011, che copre tutti gli aspetti necessari per esercitare il ruolo con competenza, autorevolezza e serenità.
                  </p>
                  <p>
                    Il nostro corso è progettato specificamente per rispondere alle esigenze di flessibilità e ottimizzazione del tempo proprie del management moderno. Grazie alla modalità <strong>e-learning</strong> all'avanguardia, i dirigenti possono accedere ai contenuti formativi in qualsiasi momento della giornata e da qualsiasi dispositivo, gestendo i propri tempi di apprendimento in totale autonomia senza interferire con gli impegni lavorativi o le riunioni strategiche. La piattaforma online di Aliseo Academy garantisce un'esperienza di studio fluida e coinvolgente, con materiali didattici multimediali, video-lezioni interattive, test di autovalutazione e un sistema di tracciamento costante dei progressi che permette di riprendere lo studio esattamente da dove era stato interrotto.
                  </p>
                  <p>
                    Investire in una formazione di qualità superiore significa proteggere non solo l'integrità fisica dei lavoratori, ma anche la stabilità finanziaria dell'azienda stessa e la propria carriera professionale. Il mancato assolvimento dell'obbligo formativo per i dirigenti comporta sanzioni severe per il datore di lavoro e può aggravare pesantemente la posizione del dirigente in caso di incidente sul lavoro, portando a conseguenze penali rilevanti. Con Aliseo Academy, avrai la certezza di seguire un percorso certificato, costantemente aggiornato alle ultime novità legislative e alle più recenti sentenze della giurisprudenza, fornendo una base solida per la gestione del rischio.
                  </p>
                  <p>
                    Al termine del percorso formativo di 12 ore, il dirigente avrà acquisito una visione chiara e strutturata del sistema istituzionale della prevenzione, dei modelli di gestione della sicurezza (SGSL) e delle tecniche di comunicazione e leadership necessarie per promuovere una cultura della sicurezza condivisa e proattiva all'interno dell'organizzazione. La nostra assistenza tecnica e didattica è sempre attiva per supportare i partecipanti durante tutto il periodo di fruizione del corso online, garantendo che ogni dubbio venga chiarito tempestivamente. La formazione online permette inoltre di abbattere i costi di trasferta e di minimizzare l'impatto ambientale, rendendo la sicurezza un valore sostenibile per l'impresa moderna.
                  </p>
                  <p>
                    In un mercato sempre più attento alla responsabilità sociale d'impresa, dimostrare un impegno concreto nella formazione del proprio management è un segnale di serietà e affidabilità verso clienti, partner e investitori. Il corso dirigente di Aliseo Academy è la scelta ideale per chi cerca un partner affidabile, capace di coniugare rigore normativo e innovazione tecnologica. Ogni modulo è stato sviluppato da esperti del settore, con l'obiettivo di trasformare la teoria in pratica gestionale immediatamente applicabile, fornendo strumenti concreti per la valutazione dei rischi e la pianificazione degli interventi di prevenzione e protezione.
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
                      Il corso è destinato ai <strong>dirigenti</strong>, ovvero alle persone che, in ragione delle competenze professionali e di poteri gerarchici e funzionali adeguati alla natura dell'incarico conferitogli, attuano le direttive del datore di lavoro organizzando l'attività lavorativa e vigilando su di essa. Sono inclusi i responsabili di area, i direttori tecnici, i responsabili di stabilimento e tutte le figure apicali che esercitano poteri decisionali e di spesa.
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
                      "Conoscere il sistema istituzionale della prevenzione",
                      "Analizzare le responsabilità civili e penali del dirigente",
                      "Apprendere i criteri di valutazione dei rischi",
                      "Gestire l'organizzazione della sicurezza aziendale",
                      "Implementare modelli di gestione (SGSL)",
                      "Sviluppare competenze relazionali e comunicative"
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
                    Programma Didattico (12 ore - 37 lezioni)
                  </h3>
                  <div className="space-y-4">
                    {[
                      { title: "Modulo 1: Quadro Giuridico - Normativo", content: "Sistema istituzionale della prevenzione, soggetti del sistema di prevenzione aziendale, responsabilità civile e penale, tutela assicurativa.", lessons: 13 },
                      { title: "Modulo 2: La Figura del Dirigente", content: "Definizione, ruoli, deleghe di funzioni e responsabilità specifiche del dirigente di fatto e di diritto.", lessons: 4 },
                      { title: "Modulo 3: Organizzazione e Gestione della Sicurezza", content: "Modelli di organizzazione e di gestione (SGSL), organi di vigilanza e controllo, gestione degli appalti.", lessons: 5 },
                      { title: "Modulo 4: Rischi Psicosociali e Benessere", content: "Analisi e gestione dello stress lavoro-correlato, benessere organizzativo e nuove modalità di lavoro (Smart Working).", lessons: 8 },
                      { title: "Modulo 5: Efficacia Personale e Leadership", content: "Tecniche di comunicazione, leadership per la sicurezza e gestione delle risorse umane.", lessons: 7 }
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
                          <p className="text-sm text-slate-400">Definisce l'obbligo di formazione specifica per i dirigenti in materia di salute e sicurezza.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <FileText className="w-6 h-6 text-brand shrink-0" />
                        <div>
                          <p className="font-bold">Accordo Stato-Regioni 21/12/2011</p>
                          <p className="text-sm text-slate-400">Specifica i contenuti minimi, la durata e le modalità di erogazione del corso.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <ShieldCheck className="w-6 h-6 text-brand shrink-0" />
                        <div>
                          <p className="font-bold">D.Lgs. 231/01</p>
                          <p className="text-sm text-slate-400">Rilevanza della formazione per l'efficacia dei modelli organizzativi e l'esimente della responsabilità amministrativa.</p>
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
                      <p className="text-white font-bold">12 ore</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                      <Laptop className="w-5 h-5 text-brand" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs uppercase font-bold tracking-wider">Modalità</p>
                      <p className="text-white font-bold">E-learning</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                      <Award className="w-5 h-5 text-brand" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs uppercase font-bold tracking-wider">Certificazione</p>
                      <p className="text-white font-bold text-sm">Attestato a norma di legge</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-white/10">
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
                <span className="flex items-center gap-1"><BookOpen className="w-3.5 h-3.5" /> 23 lezioni</span>
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
                <span className="flex items-center gap-1"><BookOpen className="w-3.5 h-3.5" /> 22 lezioni</span>
                <span className="flex items-center gap-1"><Euro className="w-3.5 h-3.5" /> 73,20 €</span>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 uppercase tracking-tight">
            Formazione <span className="text-brand">Dirigenti</span> Online
          </h2>
          <p className="text-lg text-slate-600 mb-10">
            Soluzioni su misura per la tua impresa: investi nella leadership della sicurezza con una formazione di alto livello, flessibile e certificata 100% online.
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

export default CorsoDirigentePage;
