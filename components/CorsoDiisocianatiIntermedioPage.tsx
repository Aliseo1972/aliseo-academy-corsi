import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Clock, BookOpen, Euro, CheckCircle2, Users, FileText, ChevronRight, ShieldCheck, GraduationCap, Scale, Laptop, Globe, Award, Beaker } from 'lucide-react';
import { courses } from '../data/courses';
import OnlineLearningBenefits from './OnlineLearningBenefits';

interface CorsoDiisocianatiIntermedioPageProps {
  onNavigate: (view: any) => void;
}

const CorsoDiisocianatiIntermedioPage: React.FC<CorsoDiisocianatiIntermedioPageProps> = ({ onNavigate }) => {
  const course = courses.find(c => c.id === "53") || {
    duration: "3h",
    price: "36,60 €",
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Corso Diisocianati Intermedio Online | Sicurezza Chimica REACH";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Corso obbligatorio diisocianati livello intermedio online. Formazione e-learning per lavoratori e preposti conforme normativa europea.");
    }
  }, []);

  const mailtoLink = "mailto:commerciale@aliseogroup.it?subject=Richiesta%20informazioni%20corso%20Utilizzo%20Diisocianati%20Intermedio&body=Buongiorno%2C%0A%0ASono%20interessato%20al%20corso%20Utilizzo%20Diisocianati%20Intermedio%20Online.%0APotrei%20avere%20maggiori%20informazioni%3F%0A%0AGrazie.";

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
              <Beaker className="w-4 h-4" />
              Livello Intermedio - Regolamento REACH
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6"
            >
              Corso <span className="text-brand">Diisocianati Intermedio</span> Online
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-400 leading-relaxed mb-4"
            >
              Formazione obbligatoria di secondo livello per l'uso professionale dei diisocianati.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="text-lg text-slate-500 leading-relaxed mb-8"
            >
              Il corso diisocianati livello intermedio è progettato per lavoratori e preposti che operano in contesti con maggiore esposizione potenziale o che gestiscono miscele complesse.
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
                    Ricevi informazioni sul corso
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
                  Approfondimento sulla Sicurezza Chimica: Livello Intermedio
                </h2>
                <div className="text-slate-600 leading-relaxed space-y-6 text-lg">
                  <p>
                    Il corso diisocianati di livello intermedio rappresenta un passo avanti cruciale nella gestione dei rischi chimici sul luogo di lavoro. Mentre il livello base fornisce le fondamenta, il percorso intermedio è specificamente strutturato per chi affronta scenari operativi più dinamici, come l'applicazione a spruzzo in cabine ventilate, la manipolazione di miscele a temperatura ambiente o la gestione di piccoli lotti di produzione.
                  </p>
                  <p>
                    Secondo il Regolamento (UE) 2020/1149, la formazione deve essere adeguata al compito svolto. Il livello intermedio si focalizza non solo sulla prevenzione passiva, ma anche sulla gestione attiva delle procedure operative. Questo include la conoscenza approfondita del comportamento dei diisocianati durante le diverse fasi di lavorazione, la comprensione dei fattori ambientali che possono influenzare la volatilità delle sostanze e la capacità di valutare l'efficacia delle misure tecniche di controllo, come i sistemi di aspirazione localizzata.
                  </p>
                  <p>
                    Un aspetto centrale di questo corso online è la gestione delle anomalie e delle emergenze. I partecipanti impareranno come comportarsi in caso di fuoriuscite accidentali, come decontaminare correttamente le superfici e le attrezzature e quali sono le procedure di primo soccorso specifiche per l'esposizione ai diisocianati. La sensibilizzazione respiratoria rimane il rischio principale, ma a questo livello si approfondiscono anche i rischi legati alla degradazione termica dei poliuretani e alla formazione di sottoprodotti pericolosi durante le lavorazioni a caldo.
                  </p>
                  <p>
                    La formazione e-learning di Aliseo Academy permette di acquisire queste competenze avanzate senza la necessità di spostamenti fisici, ottimizzando i tempi aziendali. Il corso è interattivo e aggiornato alle ultime linee guida tecniche, garantendo che preposti e lavoratori esperti abbiano gli strumenti necessari per supervisionare le attività in sicurezza. Al termine del percorso, il superamento del test finale attesta la competenza acquisita, fornendo all'azienda la documentazione necessaria per dimostrare la conformità ai requisiti REACH.
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
                    <ul className="space-y-3">
                      {[
                        "Lavoratori addetti ad applicazioni a spruzzo o manipolazione aperta",
                        "Preposti alla sicurezza in reparti chimici o manifatturieri",
                        "Personale addetto alla manutenzione di impianti con diisocianati",
                        "Responsabili di linea e coordinatori tecnici"
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
                    Obiettivi del corso
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "Gestire rischi chimici avanzati e scenari complessi",
                      "Implementare procedure operative di sicurezza",
                      "Conoscere il primo soccorso specifico",
                      "Supervisionare l'uso corretto dei DPI nel team"
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
                    Programma Didattico
                  </h3>
                  <div className="space-y-4">
                    {[
                      { title: "Approfondimento tossicologico", desc: "Meccanismi di sensibilizzazione e monitoraggio biologico." },
                      { title: "Gestione fuoriuscite", desc: "Procedure di contenimento e decontaminazione." },
                      { title: "Manutenzione attrezzature", desc: "Pulizia e gestione sicura dei residui chimici." },
                      { title: "Primo soccorso specifico", desc: "Interventi immediati in caso di contatto o inalazione." }
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
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <Scale className="w-6 h-6 text-brand shrink-0" />
                        <div>
                          <p className="font-bold">Regolamento (UE) 2020/1149</p>
                          <p className="text-sm text-slate-400">Requisiti per la formazione di livello intermedio.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <FileText className="w-6 h-6 text-brand shrink-0" />
                        <div>
                          <p className="font-bold">Normativa REACH</p>
                          <p className="text-sm text-slate-400">Restrizioni sull'immissione sul mercato e l'uso di diisocianati.</p>
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
              { title: "Corso Diisocianati", desc: "Pagina principale cluster", view: 'corso-diisocianati', icon: Beaker },
              { title: "Formazione Lavoratori", desc: "Corso Generale 4h", view: 'corso-formazione-lavoratori-generale', icon: ShieldCheck },
              { title: "Corso Preposto", desc: "Responsabile Sicurezza 8h", view: 'corso-preposto', icon: Users },
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

export default CorsoDiisocianatiIntermedioPage;
