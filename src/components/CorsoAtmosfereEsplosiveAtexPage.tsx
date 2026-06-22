import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Clock, BookOpen, Euro, CheckCircle2, Users, FileText, ChevronRight, ShieldCheck, GraduationCap, Scale, Laptop, Award, Zap, AlertTriangle, Monitor } from 'lucide-react';
import { courses } from '../data/courses';
import OnlineLearningBenefits from './OnlineLearningBenefits';

interface CorsoAtmosfereEsplosiveAtexPageProps {
  onNavigate: (view: any) => void;
  onOpenCourse: (courseId: string) => void;
}

const CorsoAtmosfereEsplosiveAtexPage: React.FC<CorsoAtmosfereEsplosiveAtexPageProps> = ({ onNavigate, onOpenCourse }) => {
  const course = courses.find(c => c.id === "30") || {
    id: "30",
    duration: "2h",
    price: "24,40",
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Corso Rischio Atmosfere Esplosive (ATEX) Online | Aliseo Academy";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Corso di formazione per lavoratori sul rischio di atmosfere esplosive (ATEX). Corso online asincrono in e-learning conforme al D.Lgs 81/08.");
    }
  }, []);

  const mailtoLink = "mailto:commerciale@aliseogroup.it?subject=Richiesta%20informazioni%20corso%20ATEX&body=Buongiorno%2C%0A%0ASono%20interessato%20al%20corso%20Formazione%20per%20lavoratori%20-%20Rischio%20Atmosfere%20Esplosive%20(ATEX).%0APotrei%20avere%20maggiori%20informazioni%3F%0A%0AGrazie.";

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(245,158,11,0.1),transparent_50%)]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand text-xs font-bold uppercase tracking-wider mb-6"
            >
              <ShieldCheck className="w-4 h-4" />
              Sicurezza sul Lavoro - E-learning
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6"
            >
              Corso Formazione per Lavoratori <span className="text-brand">Rischio Atmosfere Esplosive (ATEX)</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-400 leading-relaxed mb-8"
            >
              Il corso ha una durata di 2 ore. È composto da 8 moduli didattici con contenuti multimediali. Al termine dovrà essere svolto un test finale con domande a risposta multipla, con una sola risposta esatta. L'iscrizione al corso ha una durata di 90 giorni, a partire dal giorno dell'iscrizione stessa.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center gap-6"
            >
              <div className="flex flex-col gap-2">
                <p className="text-brand text-xs font-bold uppercase tracking-wider">
                  Ti rispondiamo entro 24 ore
                </p>
                <a
                  href={mailtoLink}
                  className="px-8 py-4 bg-brand text-slate-900 font-black uppercase tracking-tight rounded-2xl hover:bg-brand-light transition-all flex items-center gap-2 group shadow-xl shadow-brand/20"
                >
                  RICEVI INFORMAZIONI SUL CORSO
                  <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
              <div className="flex items-center gap-4 px-6 py-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm w-fit h-fit mt-6 sm:mt-0">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-brand" />
                  <span className="text-white font-bold">2 ore</span>
                </div>
                <div className="w-px h-6 bg-white/10" />
                <div className="flex items-center gap-2">
                  <Euro className="w-5 h-5 text-brand" />
                  <span className="text-white font-bold">€ 24,40</span>
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
            
            {/* Left Content Column */}
            <div className="lg:col-span-2 space-y-16">
              
              {/* Descrizione Corso */}
              <article className="prose prose-slate max-w-none">
                <h2 className="text-3xl font-black text-slate-900 mb-6 flex items-center gap-3">
                  <div className="w-2 h-8 bg-brand rounded-full" />
                  Descrizione del Corso
                </h2>
                <div className="text-slate-600 leading-relaxed space-y-6 text-lg">
                  <p>
                    Le atmosfere esplosive (ATEX) rappresentano un rischio rilevante in numerosi ambienti di lavoro dove possono essere presenti gas, vapori, nebbie o polveri combustibili.
                  </p>
                  <p>
                    Il corso fornisce ai lavoratori le conoscenze fondamentali per comprendere le cause che determinano la formazione di atmosfere esplosive e i principali rischi associati.
                  </p>
                  <p>
                    Particolare attenzione viene dedicata alle sorgenti di innesco, alle misure di prevenzione e protezione e alle corrette procedure operative da adottare negli ambienti classificati ATEX.
                  </p>
                  <p>
                    La formazione consente di riconoscere le situazioni potenzialmente pericolose e di collaborare attivamente all'applicazione delle misure di sicurezza previste dalla normativa vigente.
                  </p>
                </div>
              </article>

              {/* Online Learning Benefits */}
              <OnlineLearningBenefits />

              {/* Detailed Sections */}
              <div className="space-y-12">
                
                {/* Obiettivi */}
                <section>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <div className="w-1.5 h-6 bg-brand rounded-full" />
                    Obiettivi del Corso
                  </h3>
                  <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        "Fornire ai lavoratori le conoscenze fondamentali sui rischi connessi alla formazione di atmosfere esplosive (ATEX)",
                        "Illustrare le cause, le misure di prevenzione e le procedure di sicurezza previste dalla normativa vigente",
                        "Riconoscere le condizioni che possono generare un'esplosione",
                        "Adottare comportamenti sicuri e utilizzare correttamente attrezzature e procedure"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-600">
                          <CheckCircle2 className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>

                {/* Destinatari */}
                <section>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <div className="w-1.5 h-6 bg-brand rounded-full" />
                    Destinatari
                  </h3>
                  <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-brand/10 flex items-center justify-center shrink-0 mt-1">
                      <Users className="w-8 h-8 text-brand" />
                    </div>
                    <div>
                      <p className="text-slate-600 leading-relaxed font-medium">
                        Il corso è destinato a tutti i lavoratori che operano in ambienti dove possono essere presenti sostanze infiammabili o combustibili, come impianti industriali, officine, depositi, laboratori, aree di ricarica batterie e altri contesti a potenziale rischio ATEX.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Programma Didattico */}
                <section>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <div className="w-1.5 h-6 bg-brand rounded-full" />
                    Programma Didattico
                  </h3>
                  <div className="space-y-4">
                    {[
                      { title: "Documento Progettuale", duration: "1 lezione - 0m" },
                      { title: "Rischio Atmosfere Esplosive", duration: "8 lezioni - 1h 58m" },
                      { title: "Quiz di Verifica", duration: "1 lezione - 4m" },
                      { title: "Questionario di Gradimento", duration: "1 lezione - 9m" }
                    ].map((module, i) => (
                      <div key={i} className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-brand/30 transition-all shadow-sm">
                        <div className="flex justify-between items-start">
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-slate-900 text-brand flex items-center justify-center font-bold">
                              {String(i + 1).padStart(2, '0')}
                            </div>
                            <h4 className="font-bold text-slate-900 text-lg">{module.title}</h4>
                          </div>
                          <span className="text-slate-500 font-mono text-sm font-bold bg-slate-100 px-2 py-1 rounded-lg shrink-0 ml-4">
                            {module.duration}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Quadro Normativo */}
                <section>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <div className="w-1.5 h-6 bg-brand rounded-full" />
                    Quadro Normativo
                  </h3>
                  <div className="bg-slate-900 rounded-3xl p-8 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand/10 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-brand/20 transition-colors" />
                    <div className="relative space-y-4">
                      {[
                        { title: "Art. 37 e Titolo XI del D.Lgs. 81/08", desc: "Formazione dei lavoratori e disposizioni relative alla protezione da atmosfere esplosive.", icon: Scale }
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-2xl">
                          <div className="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center">
                            <item.icon className="w-5 h-5 text-brand" />
                          </div>
                          <div>
                            <p className="text-white font-bold">{item.title}</p>
                            <p className="text-slate-400 text-sm font-medium">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>
              </div>
            </div>

            {/* Right Sidebar Column */}
            <div className="space-y-8">
              <div className="bg-slate-900 rounded-3xl p-8 sticky top-24 border border-white/5 shadow-2xl">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <GraduationCap className="w-6 h-6 text-brand" />
                  Scheda Corso
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/5">
                      <Clock className="w-5 h-5 text-brand" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs uppercase font-bold tracking-wider">Durata</p>
                      <p className="text-white font-bold">2h</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/5">
                      <BookOpen className="w-5 h-5 text-brand" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs uppercase font-bold tracking-wider">Lezioni</p>
                      <p className="text-white font-bold">11</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/5">
                      <Monitor className="w-5 h-5 text-brand" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs uppercase font-bold tracking-wider">Formato</p>
                      <p className="text-white font-bold">E-learning</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/5">
                      <Laptop className="w-5 h-5 text-brand" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs uppercase font-bold tracking-wider">Lingua / Livello</p>
                      <p className="text-white font-bold text-sm">Italiano / Intermedio</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/5">
                      <Award className="w-5 h-5 text-brand" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs uppercase font-bold tracking-wider">Certificazione / Quiz</p>
                      <p className="text-white font-bold text-sm">Attestato (Sì) / Quiz (Sì)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/5 bg-brand/5 border-brand/20">
                      <Euro className="w-5 h-5 text-brand" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs uppercase font-bold tracking-wider">Prezzo</p>
                      <p className="text-white font-bold text-sm">
                        € 24,40 <span className="text-[10px] text-brand font-medium lowercase">iva inclusa</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-white/10">
                  <div className="flex flex-col gap-2">
                    <a
                      href={mailtoLink}
                      className="block w-full py-4 bg-brand text-slate-900 text-center font-black uppercase tracking-tight rounded-2xl hover:bg-brand-light transition-all shadow-lg shadow-brand/20"
                    >
                      RICEVI INFORMAZIONI SUL CORSO
                    </a>
                  </div>
                </div>
              </div>

              {/* Box Certificazione sotto la sidebar */}
              <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-xl shadow-slate-100/50">
                <h4 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-brand" />
                  Certificazione
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Al termine del corso e previo superamento del test finale, verrà rilasciato un attestato valido ai sensi del D.Lgs. 81/08.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">
            Proteggi i tuoi lavoratori dal rischio di atmosfere esplosive
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            La corretta formazione rappresenta il primo strumento di prevenzione negli ambienti a rischio ATEX. Contattaci per attivare il corso e-learning.
          </p>
          <div className="flex justify-center">
            <a
              href={mailtoLink}
              className="px-12 py-5 bg-slate-900 text-white font-black uppercase tracking-tight rounded-2xl hover:bg-slate-800 transition-all shadow-xl inline-block"
            >
              RICEVI INFORMAZIONI SUL CORSO
            </a>
          </div>
        </div>
      </section>

      {/* Related Courses Section */}
      <section className="py-16 border-t border-slate-100 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black text-slate-900 mb-8 flex items-center gap-3">
            <div className="w-2 h-6 bg-brand rounded-full" />
            Potrebbero interessarti anche
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { id: "32", title: "Rischio Elettrico", desc: "Informazione sui pericoli legati all'utilizzo dell'energia elettrica", icon: AlertTriangle },
              { id: "44", title: "Rischio Scariche Atmosferiche", desc: "Prevenzione dei rischi derivanti dai fulmini e scariche", icon: Zap },
              { id: "31", title: "Spazi Confinati", desc: "Formazione per attività in ambienti con sospetto inquinamento", icon: ShieldCheck }
            ].map((item, i) => (
              <button 
                key={i}
                onClick={() => onOpenCourse(item.id)}
                className="group p-6 bg-white rounded-2xl border border-slate-200 hover:border-brand/30 hover:shadow-lg hover:shadow-brand/5 transition-all text-left flex flex-col h-full"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center mb-4 group-hover:bg-brand/10 transition-colors">
                  <item.icon className="w-5 h-5 text-slate-400 group-hover:text-brand transition-colors" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-4 flex-grow">{item.desc}</p>
                <div className="flex items-center gap-1 text-brand text-xs font-bold uppercase tracking-wider mt-auto group-hover:text-brand-dark">
                  Scopri il Corso
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CorsoAtmosfereEsplosiveAtexPage;
