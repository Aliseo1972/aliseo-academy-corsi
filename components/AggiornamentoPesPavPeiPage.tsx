import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Clock, BookOpen, Euro, CheckCircle2, Users, FileText, ChevronRight, ShieldCheck, GraduationCap, Scale, Laptop, Globe, Award, AlertTriangle, Monitor, Volume2, Info, Zap, Shield, RefreshCw } from 'lucide-react';
import { courses } from '../data/courses';
import OnlineLearningBenefits from './OnlineLearningBenefits';

interface AggiornamentoPesPavPeiPageProps {
  onNavigate: (view: any) => void;
}

const AggiornamentoPesPavPeiPage: React.FC<AggiornamentoPesPavPeiPageProps> = ({ onNavigate }) => {
  const course = courses.find(c => c.id === "26") || {
    duration: "6h",
    price: "73,20 €",
    lessons: 21,
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Aggiornamento PES PAV PEI Online | Sicurezza Elettrica | Aliseo Academy";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Corso di aggiornamento PES PAV PEI online. Formazione periodica obbligatoria conforme alla norma CEI 11-27 e al D.Lgs. 81/08 in modalità e-learning.");
    }
  }, []);

  const mailtoLink = "mailto:commerciale@aliseogroup.it?subject=Richiesta%20informazioni%20aggiornamento%20PES%20PAV%20PEI&body=Buongiorno%2C%0A%0ASono%20interessato%20al%20corso%20Addetto%20ai%20lavori%20elettrici%20(PES%20PAV%20PEI)%20-%20Aggiornamento%20Online.%0APotrei%20avere%20maggiori%20informazioni%3F%0A%0AGrazie.";

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
              <RefreshCw className="w-4 h-4" />
              Aggiornamento Quinquennale - Norma CEI 11-27
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6"
            >
              Aggiornamento <span className="text-brand">PES PAV PEI</span> online, fruibile in e-learning su piattaforma certificata, valido ai fini normativi.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-400 leading-relaxed mb-8"
            >
              Mantieni la tua qualifica per i lavori elettrici con l'aggiornamento periodico obbligatorio. Formazione conforme alla norma CEI 11-27 e al D.Lgs. 81/08.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col gap-6"
            >
              <div>
                <div className="flex flex-col gap-2">
                  <p className="text-brand text-xs font-bold uppercase tracking-wider">
                    Ti rispondiamo entro 24 ore
                  </p>
                  <a 
                    href={mailtoLink}
                    className="px-8 py-4 bg-brand text-slate-900 font-black uppercase tracking-tight rounded-2xl hover:bg-brand-light transition-all flex items-center gap-2 group shadow-xl shadow-brand/20 w-fit"
                  >
                    Ricevi informazioni sull'aggiornamento
                    <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-16">
              {/* SEO Content Section */}
              <article className="prose prose-slate max-w-none">
                <h2 className="text-3xl font-black text-slate-900 mb-6 flex items-center gap-3">
                  <div className="w-2 h-8 bg-brand rounded-full" />
                  Descrizione del corso
                </h2>
                <div className="text-slate-600 leading-relaxed space-y-6 text-lg">
                  <p>
                    La sicurezza nei lavori elettrici richiede una vigilanza costante e un aggiornamento continuo delle competenze. La norma tecnica <strong>CEI 11-27</strong> prevede che il personale qualificato come Persona Esperta (PES), Persona Avvertita (PAV) o Persona Idonea (PEI) debba seguire percorsi di aggiornamento periodico per mantenere la propria idoneità operativa e la conoscenza delle evoluzioni normative e tecnologiche.
                  </p>
                  <p>
                    <strong>Il corso di aggiornamento è disponibile in modalità e-learning asincrona, accessibile in qualsiasi momento</strong>. Questa flessibilità è fondamentale per i professionisti del settore elettrico, che possono così assolvere all'obbligo formativo senza allontanarsi dal cantiere o dall'officina per lunghi periodi. La nostra piattaforma di e-learning offre contenuti multimediali interattivi, casi studio reali e approfondimenti tecnici che rendono l'aggiornamento un'esperienza formativa di alto livello.
                  </p>
                  <p>
                    Durante il percorso di aggiornamento, vengono analizzate le novità introdotte dalle ultime edizioni della norma CEI 11-27, con un focus particolare sulla gestione del rischio elettrico in scenari complessi. Si approfondiscono le procedure di manutenzione, l'uso corretto dei nuovi Dispositivi di Protezione Individuale (DPI) e l'analisi degli infortuni più comuni, al fine di trarre insegnamenti pratici per la prevenzione quotidiana.
                  </p>
                  <p className="bg-blue-50 p-6 rounded-2xl border-l-4 border-blue-500 font-medium italic">
                    "Su richiesta, il corso può essere organizzato anche in presenza presso la sede aziendale, con docente qualificato. L’attivazione delle sessioni in presenza è subordinata al raggiungimento di un numero minimo di partecipanti."
                  </p>
                  <p>
                    Aliseo Academy garantisce che ogni corso di aggiornamento rispetti rigorosamente i requisiti previsti dal <strong>D.Lgs. 81/08</strong> e dalle norme CEI. Al termine del percorso, previo superamento del test finale, viene rilasciato un attestato di aggiornamento valido a tutti gli effetti di legge, indispensabile per il datore di lavoro per confermare o rinnovare le nomine PES, PAV e PEI dei propri dipendenti.
                  </p>
                  <p>
                    Investire nell'aggiornamento continuo non è solo un obbligo di legge, ma una scelta strategica per ridurre gli infortuni e aumentare l'efficienza operativa. Un operatore consapevole delle ultime procedure di sicurezza è un operatore più sicuro e produttivo, capace di gestire con professionalità anche le situazioni di emergenza legate al rischio elettrico.
                  </p>
                </div>
              </article>

              <OnlineLearningBenefits />

              {/* Detailed Sections */}
              <div className="space-y-12">
                <section>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <div className="w-1.5 h-6 bg-brand rounded-full" />
                    Destinatari
                  </h3>
                  <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8">
                    <p className="text-slate-600 mb-6">
                      Il corso è destinato al personale che ha già acquisito la qualifica PES, PAV o PEI e deve assolvere all'obbligo di aggiornamento periodico (consigliato ogni 5 anni).
                    </p>
                    <ul className="space-y-3">
                      {[
                        "Personale già qualificato PES (Persona Esperta)",
                        "Personale già qualificato PAV (Persona Avvertita)",
                        "Personale già idoneo PEI (Persona Idonea ai lavori sotto tensione)",
                        "Responsabili tecnici e preposti ai lavori elettrici",
                        "Datori di lavoro che intendono aggiornare le competenze del proprio staff"
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                          <Users className="w-5 h-5 text-brand shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <div className="w-1.5 h-6 bg-brand rounded-full" />
                    Obiettivi formativi
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "Aggiornare le conoscenze sulla norma CEI 11-27",
                      "Analizzare le novità legislative in materia di sicurezza elettrica",
                      "Approfondire le procedure per lavori fuori e sotto tensione",
                      "Revisionare l'uso dei DPI e delle attrezzature di lavoro",
                      "Analizzare casi reali di infortuni per scopi preventivi",
                      "Rinnovare l'idoneità ai lavori elettrici"
                    ].map((obj, i) => (
                      <div key={i} className="flex items-center gap-3 p-4 bg-white border border-slate-200 rounded-2xl shadow-sm">
                        <CheckCircle2 className="w-5 h-5 text-brand shrink-0" />
                        <span className="text-sm font-medium text-slate-700">{obj}</span>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <div className="w-1.5 h-6 bg-brand rounded-full" />
                    Programma del corso
                  </h3>
                  <div className="space-y-4">
                    {[
                      { title: "Evoluzione Normativa", desc: "Aggiornamenti sulle ultime edizioni della norma CEI 11-27 e CEI 64-8." },
                      { title: "Revisione delle Procedure", desc: "Approfondimento sulle procedure di messa in sicurezza e pianificazione del lavoro." },
                      { title: "Nuove Tecnologie e DPI", desc: "Analisi di nuovi strumenti di misura e dispositivi di protezione individuale per il rischio elettrico." },
                      { title: "Analisi degli Infortuni", desc: "Studio di casi reali, dinamiche di infortunio e misure correttive adottate." },
                      { title: "Lavori Sotto Tensione in BT", desc: "Aggiornamento specifico sulle tecniche e le attrezzature per lavori sotto tensione." },
                      { title: "Verifica Finale", desc: "Test di valutazione per il rilascio dell'attestato di aggiornamento." }
                    ].map((item, i) => (
                      <div key={i} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                        <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                        <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <div className="w-1.5 h-6 bg-brand rounded-full" />
                    Quadro Normativo
                  </h3>
                  <div className="bg-slate-900 text-white rounded-3xl p-8">
                    <div className="text-slate-400 text-sm mb-6 leading-relaxed">
                      L'aggiornamento è un requisito fondamentale per garantire la conformità continua ai dettami della sicurezza sul lavoro.
                    </div>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <Scale className="w-6 h-6 text-brand shrink-0" />
                        <div>
                          <p className="font-bold">D.Lgs 81/08 - Art. 37</p>
                          <p className="text-sm text-slate-400">Sancisce l'obbligo di aggiornamento periodico della formazione dei lavoratori.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Shield className="w-6 h-6 text-brand shrink-0" />
                        <div>
                          <p className="font-bold">Norma CEI 11-27 (V Edizione)</p>
                          <p className="text-sm text-slate-400">Specifica la necessità di aggiornamento per mantenere le qualifiche PES, PAV e PEI.</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </section>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="bg-slate-900 rounded-3xl p-8 sticky top-24">
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
                  <p className="text-slate-400 text-sm mb-1 text-center">
                    Ti rispondiamo entro 24 ore
                  </p>
                  <a 
                    href={mailtoLink}
                    className="block w-full py-4 bg-brand text-slate-900 text-center font-black uppercase tracking-tight rounded-2xl hover:bg-brand-light transition-all shadow-lg shadow-brand/20"
                  >
                    Ricevi informazioni
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Internal Navigation */}
      <section className="py-16 border-t border-slate-100 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black text-slate-900 mb-8 flex items-center gap-3">
            <div className="w-2 h-6 bg-brand rounded-full" />
            Potrebbero interessarti anche
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Corso PES PAV PEI", desc: "Formazione completa 16h", view: 'corso-pes-pav-pei', icon: Zap },
              { title: "Aggiornamento Lavoratori", desc: "Aggiornamento quinquennale 6h", view: 'aggiornamento-lavoratori', icon: Clock },
              { title: "Rischio Videoterminali", desc: "Formazione specifica VDT", view: 'corso-videoterminali', icon: Monitor },
            ].map((item, i) => (
              <button 
                key={i}
                onClick={() => onNavigate(item.view)}
                className="group p-6 bg-white rounded-2xl border border-slate-200 hover:border-brand/30 hover:shadow-lg hover:shadow-brand/5 transition-all text-left flex flex-col h-full"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center mb-4 group-hover:bg-brand/10 transition-colors">
                  <item.icon className="w-5 h-5 text-slate-400 group-hover:text-brand transition-colors" />
                </div>
                <h3 className="font-bold text-slate-900 mb-1 text-sm">{item.title}</h3>
                <p className="text-xs text-slate-500 mb-4 flex-grow">{item.desc}</p>
                <div className="flex items-center gap-1 text-brand text-[10px] font-bold uppercase mt-auto">
                  Vedi <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AggiornamentoPesPavPeiPage;
