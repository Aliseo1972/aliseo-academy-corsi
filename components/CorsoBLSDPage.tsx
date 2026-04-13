import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import DeliveryMethods from './DeliveryMethods';
import { Clock, Euro, CheckCircle2, Users, FileText, ChevronRight, MessageSquare, ShieldCheck, GraduationCap, Award, HeartPulse, Activity, AlertTriangle } from 'lucide-react';
import { courses } from '../data/courses';

interface CorsoBLSDPageProps {
  onNavigate: (view: any) => void;
}

const CorsoBLSDPage: React.FC<CorsoBLSDPageProps> = ({ onNavigate }) => {
  const course = courses.find(c => c.id === "blsd-dae");

  useEffect(() => {
    window.scrollTo(0, 0);
    // Update meta tags
    document.title = "Corso BLSD: Uso del Defibrillatore (5 ore) | Formazione Sicurezza";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Corso BLSD (Basic Life Support and Defibrillation) da 5 ore. Impara a usare il defibrillatore (DAE) e le manovre di rianimazione. Formazione pratica a norma di legge.");
    }
  }, []);

  const mailtoLink = "mailto:commerciale@aliseogroup.it?subject=Richiesta%20informazioni%20corso%20BLSD&body=Buongiorno%2C%0A%0ASono%20interessato%20al%20corso%20BLSD%20-%20Uso%20del%20Defibrillatore%20(5%20ore).%0APotrei%20avere%20maggiori%20informazioni%20su%20date%2C%20sedi%20e%20costi%3F%0A%0AGrazie.";

  if (!course) return <div className="py-20 text-center">Corso non trovato</div>;

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
              <HeartPulse className="w-4 h-4" />
              Primo Soccorso - BLSD
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6"
            >
              Corso BLSD: <span className="text-brand">Uso del Defibrillatore</span> (5 ore)
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-400 leading-relaxed mb-8"
            >
              Acquisisci le competenze necessarie per intervenire tempestivamente in caso di arresto cardiaco improvviso, utilizzando correttamente il defibrillatore (DAE).
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
                    Richiedi preventivo per il corso
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
                  <Euro className="w-5 h-5 text-brand" />
                  <span className="text-white font-bold">{course.price}</span>
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
                  Perché il Corso BLSD è Vitale?
                </h2>
                <div className="text-slate-600 leading-relaxed space-y-6 text-lg">
                  <p>
                    L'arresto cardiaco improvviso è una delle principali cause di morte in Europa. Intervenire nei primi minuti con le manovre di rianimazione e l'uso del <strong>defibrillatore semiautomatico esterno (DAE)</strong> può triplicare le possibilità di sopravvivenza. Il nostro <strong>corso BLSD da 5 ore</strong> è progettato per fornire a chiunque, anche senza background medico, le competenze per salvare una vita.
                  </p>
                  <p>
                    La formazione BLSD (Basic Life Support and Defibrillation) non è solo un obbligo per molte categorie professionali e società sportive, ma è un atto di responsabilità civile. Durante il corso, i partecipanti imparano a riconoscere i segni di un arresto cardiaco, ad allertare correttamente i soccorsi e a praticare il massaggio cardiaco di alta qualità.
                  </p>
                  <p>
                    Il cuore del nostro percorso formativo è la <strong>pratica su manichini di ultima generazione</strong>. Crediamo che la sicurezza nell'intervento nasca dalla ripetizione e dalla simulazione di scenari reali. I nostri istruttori certificati guidano ogni allievo nell'uso del DAE, spiegando come il dispositivo analizzi il ritmo cardiaco e guidi l'operatore passo dopo passo.
                  </p>
                  <p>
                    Oltre alla gestione dell'adulto, il corso affronta anche le manovre di disostruzione delle vie aeree, fondamentali per intervenire in caso di soffocamento da corpo estraneo. La formazione è erogata in conformità alle più recenti linee guida internazionali e alla normativa italiana vigente, garantendo un attestato valido e riconosciuto.
                  </p>
                </div>
              </article>

              <DeliveryMethods />

              {/* Course Content Sections */}
              <div className="space-y-12">
                {/* Descrizione */}
                <section>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <div className="w-1.5 h-6 bg-brand rounded-full" />
                    Descrizione del Corso
                  </h3>
                  <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8">
                    <p className="text-slate-600 leading-relaxed">
                      {course.description}
                    </p>
                    {course.objectives && course.objectives.length > 0 && (
                      <div className="mt-8">
                        <h4 className="font-bold text-slate-900 mb-4">Cosa imparerai:</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {course.objectives.map((obj, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                              <CheckCircle2 className="w-5 h-5 text-brand shrink-0" />
                              {obj}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </section>

                {/* Programma */}
                {course.syllabus && (
                  <section>
                    <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                      <div className="w-1.5 h-6 bg-brand rounded-full" />
                      Programma Didattico
                    </h3>
                    <div className="space-y-4">
                      {course.syllabus.map((module, i) => (
                        <div key={i} className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-brand/30 transition-all shadow-sm">
                          <div className="flex justify-between items-start mb-4">
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
                )}
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
                      <Users className="w-5 h-5 text-brand" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs uppercase font-bold tracking-wider">Modalità</p>
                      <p className="text-white font-bold">In Presenza / On-site</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                      <Award className="w-5 h-5 text-brand" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs uppercase font-bold tracking-wider">Abilitazione</p>
                      <p className="text-white font-bold text-sm">Uso del Defibrillatore (DAE)</p>
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
                      Richiedi informazioni
                    </a>
                  </div>
                </div>
              </div>

              {/* Additional Info Cards */}
              <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8">
                <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Activity className="w-5 h-5 text-brand" />
                  Esercitazioni Pratiche
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Il corso prevede un'ampia parte pratica con l'utilizzo di manichini e simulatori DAE per garantire l'acquisizione reale delle competenze.
                </p>
              </div>

              <div className="bg-brand/5 border border-brand/10 rounded-3xl p-8">
                <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-brand" />
                  Validità Normativa
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  L'attestato rilasciato è valido ai sensi della normativa vigente e abilita all'utilizzo del defibrillatore semiautomatico esterno.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">
            Vuoi organizzare un corso BLSD presso la tua sede?
          </h2>
          <p className="text-lg text-slate-600 mb-10">
            Siamo specializzati nella formazione aziendale e possiamo organizzare sessioni dedicate presso la vostra azienda, adattando gli orari alle vostre necessità produttive.
          </p>
          <div className="flex flex-col items-center gap-2">
            <span className="text-slate-500 text-sm font-bold">Ti rispondiamo entro 24 ore</span>
            <a 
              href={mailtoLink}
              className="px-12 py-5 bg-slate-900 text-white font-black uppercase tracking-tight rounded-2xl hover:bg-slate-800 transition-all shadow-xl inline-block"
            >
              Richiedi un preventivo dedicato
            </a>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Primo Soccorso", desc: "Gruppo A - 16 ore", view: 'corso-primo-soccorso-gruppo-a', icon: HeartPulse },
              { title: "Primo Soccorso", desc: "Gruppi B/C - 12 ore", view: 'primo-soccorso-bc', icon: Activity },
              { title: "Antincendio L3", desc: "Rischio Alto - 16 ore", view: 'antincendio-l3', icon: ShieldCheck },
              { title: "Spazi Confinati", desc: "Corso base 12 ore", view: 'corso-spazi-confinati', icon: AlertTriangle },
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

export default CorsoBLSDPage;
