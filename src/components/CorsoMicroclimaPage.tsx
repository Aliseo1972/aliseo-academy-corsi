import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Clock, BookOpen, Euro, CheckCircle2, Users, FileText, ChevronRight, ShieldCheck, GraduationCap, Scale, Laptop, Globe, Award, Thermometer, Monitor } from 'lucide-react';
import { courses } from '../data/courses';
import OnlineLearningBenefits from './OnlineLearningBenefits';

interface CorsoMicroclimaPageProps {
  onNavigate: (view: any) => void;
}

const CorsoMicroclimaPage: React.FC<CorsoMicroclimaPageProps> = ({ onNavigate }) => {
  const course = courses.find(c => c.id === "39") || {
    duration: "2h",
    price: "24,40 €",
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Corso Formazione Lavoratori Rischio Microclimatico Online | Aliseo Academy";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Corso di formazione specifica per lavoratori sul rischio microclimatico. Formazione obbligatoria online conforme al D.Lgs 81/08 su temperatura, umidità e comfort termico.");
    }
  }, []);

  const mailtoLink = "mailto:commerciale@aliseogroup.it?subject=Richiesta%20informazioni%20corso%20Microclima&body=Buongiorno%2C%0A%0ASono%20interessato%20al%20corso%20Formazione%20per%20lavoratori%20-%20Rischio%20Microclimatico.%0APotrei%20avere%20maggiori%20informazioni%3F%0A%0AGrazie.";

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
              <Thermometer className="w-4 h-4" />
              Sicurezza Lavoratori - Rischio Microclimatico
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6"
            >
              Corso Formazione <span className="text-brand">Lavoratori Rischio Microclimatico</span> Online
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-400 leading-relaxed mb-8"
            >
              Formazione specifica obbligatoria sulla gestione dei rischi legati a temperatura, umidità e correnti d'aria ai sensi del D.Lgs. 81/08. Percorso 100% online.
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
                  Descrizione del corso
                </h2>
                <div className="text-slate-600 leading-relaxed space-y-6 text-lg">
                  <p>
                    Il rischio microclimatico rappresenta una delle componenti fondamentali della valutazione dei rischi negli ambienti di lavoro, influenzando direttamente il benessere psicofisico, la salute e la produttività dei lavoratori. Il microclima è l'insieme dei parametri fisici (temperatura, umidità, velocità dell'aria) che caratterizzano l'ambiente di lavoro e che determinano gli scambi termici tra l'individuo e l'ambiente circostante.
                  </p>
                  <p>
                    Questo corso di formazione specialistica, erogato interamente in modalità e-learning da Aliseo Academy, approfondisce le dinamiche del comfort termico e dello stress termico. La normativa vigente, in particolare il D.Lgs. 81/08, impone al datore di lavoro l'obbligo di valutare e gestire i rischi derivanti da condizioni microclimatiche sfavorevoli, sia in ambienti "moderati" (uffici, negozi) che in ambienti "severi" (celle frigorifere, fonderie, cantieri all'aperto).
                  </p>
                  <p>
                    Attraverso il nostro percorso formativo online, i lavoratori impareranno a riconoscere i segnali di disagio termico e a comprendere le misure di prevenzione e protezione da adottare. Si analizzeranno i parametri microclimatici fondamentali, come la temperatura dell'aria, l'umidità relativa e la velocità dell'aria, e come questi interagiscano con l'attività metabolica e l'abbigliamento del lavoratore.
                  </p>
                  <p>
                    La formazione e-learning offre il vantaggio di poter gestire i tempi di studio in modo autonomo, garantendo al contempo contenuti aggiornati e certificati. Il corso include moduli dedicati agli effetti sulla salute derivanti dall'esposizione a temperature estreme (colpi di calore, ipotermia) e alle strategie per ottimizzare la ventilazione e il microclima negli spazi chiusi. Al termine del corso, il superamento del test finale permetterà il rilascio di un attestato valido ai fini di legge, documentando l'assolvimento degli obblighi formativi previsti dal Testo Unico sulla Sicurezza.
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
                      Il corso è rivolto a tutti i lavoratori che operano in ambienti dove le condizioni microclimatiche possono rappresentare un rischio per la salute o un fattore di disagio significativo.
                    </p>
                    <ul className="space-y-3">
                      {[
                        "Lavoratori in ambienti d'ufficio e terziario",
                        "Operatori in ambienti industriali (officine, magazzini)",
                        "Lavoratori in ambienti severi caldi (fonderie, lavanderie industriali)",
                        "Lavoratori in ambienti severi freddi (celle frigorifere, logistica del freddo)",
                        "Personale che opera in cantieri all'aperto esposto ad agenti atmosferici"
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
                      "Definire i parametri del microclima",
                      "Valutare il benessere termico globale",
                      "Prevenire lo stress da calore e da freddo",
                      "Conoscere le misure di protezione collettiva",
                      "Gestire correttamente la ventilazione",
                      "Riconoscere i sintomi di malessere termico"
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
                      { title: "Introduzione al rischio microclimatico", desc: "Definizioni, concetti di comfort e stress termico negli ambienti di lavoro." },
                      { title: "Parametri microclimatici", desc: "Temperatura, umidità relativa, velocità dell'aria e calore radiante." },
                      { title: "Effetti sulla salute", desc: "Patologie da calore (colpo di calore, disidratazione) e da freddo (congelamento, ipotermia)." },
                      { title: "Misure di prevenzione e protezione", desc: "Interventi tecnici, organizzativi e dispositivi di protezione individuale (DPI)." },
                      { title: "Quiz di Verifica", lessonsCount: 1, duration: "15m" }
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
                      Il D.Lgs. 81/2008 inquadra il microclima tra gli agenti fisici (Titolo VIII) e ne stabilisce i requisiti minimi per i luoghi di lavoro nell'Allegato IV. Il datore di lavoro ha l'obbligo di garantire condizioni di comfort termico e di proteggere i lavoratori dai rischi di stress termico.
                    </div>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <Scale className="w-6 h-6 text-brand shrink-0" />
                        <div>
                          <p className="font-bold">D.Lgs 81/08 - Titolo VIII</p>
                          <p className="text-sm text-slate-400">Agenti fisici: valutazione e gestione dei rischi microclimatici.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <FileText className="w-6 h-6 text-brand shrink-0" />
                        <div>
                          <p className="font-bold">Allegato IV D.Lgs 81/08</p>
                          <p className="text-sm text-slate-400">Requisiti dei luoghi di lavoro: temperatura, umidità e aerazione.</p>
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
                      <Euro className="w-5 h-5 text-brand" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs uppercase font-bold tracking-wider">Prezzo</p>
                      <p className="text-white font-bold">{course.price} + IVA</p>
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
              { title: "Rischio Videoterminali", desc: "Formazione specifica VDT", view: 'corso-videoterminali', icon: Laptop },
              { title: "Rischio Basso Uffici", desc: "Formazione specifica uffici", view: 'corso-lavoratori-rischio-basso-uffici', icon: Monitor },
              { title: "Aggiornamento Lavoratori", desc: "Aggiornamento quinquennale 6h", view: 'aggiornamento-lavoratori', icon: Clock },
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

export default CorsoMicroclimaPage;
