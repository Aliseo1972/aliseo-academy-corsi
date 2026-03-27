import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Clock, BookOpen, Euro, CheckCircle2, Users, FileText, ChevronRight, ShieldCheck, GraduationCap, Laptop, Award, Zap, Activity, AlertTriangle, Radio } from 'lucide-react';
import { courses } from '../data/courses';
import OnlineLearningBenefits from './OnlineLearningBenefits';

interface CorsoCEMPageProps {
  onNavigate: (view: any) => void;
  onOpenCourse: (courseId: string) => void;
}

const CorsoCEMPage: React.FC<CorsoCEMPageProps> = ({ onNavigate, onOpenCourse }) => {
  const course = courses.find(c => c.id === "33");

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Corso Campi Elettromagnetici (CEM) | Formazione E-learning Sicurezza";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Corso di formazione online sul rischio da Campi Elettromagnetici (CEM). Effetti biologici, limiti di esposizione e misure di tutela. Formazione certificata D.Lgs. 81/08.");
    }
  }, []);

  const mailtoLink = "mailto:commerciale@aliseogroup.it?subject=Richiesta%20informazioni%20corso%20Campi%20Elettromagnetici&body=Buongiorno%2C%0A%0ASono%20interessato%20al%20corso%20e-learning%20sui%20Campi%20Elettromagnetici%20(CEM).%0APotrei%20avere%20maggiori%20informazioni%3F%0A%0AGrazie.";

  if (!course) return <div className="py-20 text-center font-bold text-slate-900">Corso non trovato</div>;

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(0,184,255,0.1),transparent_50%)]" />
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
              Corso <span className="text-brand">Campi Elettromagnetici</span> (CEM)
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-400 leading-relaxed mb-8"
            >
              Formazione specifica sui rischi derivanti dall'esposizione ai campi elettromagnetici in ambito lavorativo, con focus sugli effetti biologici e le misure di protezione.
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
                  <Euro className="w-5 h-5 text-brand" />
                  <span className="text-white font-bold">{course.price}</span>
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
              
              {/* Descrizione Sviluppata */}
              <article className="prose prose-slate max-w-none">
                <h2 className="text-3xl font-black text-slate-900 mb-6 flex items-center gap-3">
                  <div className="w-2 h-8 bg-brand rounded-full" />
                  La Gestione del Rischio CEM in Azienda
                </h2>
                <div className="text-slate-600 leading-relaxed space-y-6 text-lg">
                  <p>
                    I <strong>Campi Elettromagnetici (CEM)</strong> sono fenomeni fisici legati alla presenza di cariche elettriche e al loro movimento. In ambito industriale, le sorgenti di CEM sono molteplici: dai sistemi di trasmissione radio e TV ai macchinari per la saldatura a induzione, dai motori elettrici di grande potenza ai sistemi di riscaldamento industriale.
                  </p>
                  <p>
                    Il nostro corso e-learning sul Rischio CEM approfondisce gli obblighi previsti dal <strong>Capo IV del Titolo VIII del D.Lgs. 81/08</strong>. La normativa impone al datore di lavoro di valutare i rischi derivanti dall'esposizione ai campi elettromagnetici, con l'obiettivo di prevenire gli effetti nocivi sulla salute dei lavoratori, sia a breve che a lungo termine.
                  </p>
                  <p>
                    Il percorso formativo analizza dettagliatamente gli effetti biologici dei CEM, distinguendo tra <strong>effetti termici</strong> (riscaldamento dei tessuti) ed <strong>effetti non termici</strong> (stimolazione di nervi e muscoli). Particolare attenzione viene dedicata ai soggetti "particolarmente sensibili", come i portatori di dispositivi medici impiantabili (pacemaker, defibrillatori) o protesi metalliche, per i quali i livelli di esposizione devono essere monitorati con estrema cautela.
                  </p>
                  <p>
                    La formazione fornisce indicazioni pratiche sulle misure di tutela, come il rispetto delle distanze di sicurezza dalle sorgenti, l'uso di schermature e la corretta segnaletica nelle aree a rischio. La metodologia didattica online permette di affrontare temi tecnici e normativi complessi attraverso moduli interattivi, video esplicativi e test di autovalutazione.
                  </p>
                  <p>
                    Aliseo Academy garantisce una formazione di alto livello, curata da esperti in igiene industriale e sicurezza sul lavoro. Al termine del corso, il partecipante sarà in grado di identificare le sorgenti di rischio nel proprio ambiente di lavoro e di applicare correttamente i protocolli di sicurezza, contribuendo a un ambiente di lavoro più protetto e conforme alle normative vigenti.
                  </p>
                </div>
              </article>

              <OnlineLearningBenefits />

              {/* Dettagli Corso */}
              <div className="space-y-12">
                <section>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <div className="w-1.5 h-6 bg-brand rounded-full" />
                    Obiettivi del Corso
                  </h3>
                  <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <li className="flex items-start gap-3 text-slate-600">
                        <CheckCircle2 className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                        <span>Identificare le sorgenti di CEM in azienda</span>
                      </li>
                      <li className="flex items-start gap-3 text-slate-600">
                        <CheckCircle2 className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                        <span>Comprendere gli effetti termici e non termici</span>
                      </li>
                      <li className="flex items-start gap-3 text-slate-600">
                        <CheckCircle2 className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                        <span>Conoscere i limiti di esposizione e i livelli di azione</span>
                      </li>
                      <li className="flex items-start gap-3 text-slate-600">
                        <CheckCircle2 className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                        <span>Gestire i rischi per i portatori di pacemaker</span>
                      </li>
                      <li className="flex items-start gap-3 text-slate-600">
                        <CheckCircle2 className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                        <span>Apprendere le misure di prevenzione e protezione</span>
                      </li>
                      <li className="flex items-start gap-3 text-slate-600">
                        <CheckCircle2 className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                        <span>Conoscere gli obblighi normativi del D.Lgs. 81/08</span>
                      </li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <div className="w-1.5 h-6 bg-brand rounded-full" />
                    Destinatari
                  </h3>
                  <div className="bg-white border border-slate-200 rounded-3xl p-8 flex items-center gap-6 shadow-sm">
                    <div className="w-16 h-16 rounded-2xl bg-brand/10 flex items-center justify-center shrink-0">
                      <Users className="w-8 h-8 text-brand" />
                    </div>
                    <div>
                      <p className="text-slate-600 leading-relaxed">
                        Il corso è rivolto a <strong>lavoratori esposti a CEM</strong>, come addetti alla saldatura a induzione, manutentori elettrici, operatori di sistemi di trasmissione e chiunque operi in prossimità di sorgenti di campi elettromagnetici.
                      </p>
                    </div>
                  </div>
                </section>

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
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
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

              <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8">
                <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-brand" />
                  Certificazione
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Al termine del corso e al superamento del test finale, verrà rilasciato un attestato di formazione valido ai sensi del D.Lgs. 81/08.
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
            Necessiti di formazione sul rischio CEM?
          </h2>
          <p className="text-lg text-slate-600 mb-10">
            Il nostro team è a disposizione per supportarti nella valutazione dei rischi e nella messa in sicurezza dei tuoi ambienti di lavoro.
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

      {/* Internal Navigation */}
      <section className="py-16 border-t border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black text-slate-900 mb-8 flex items-center gap-3">
            <div className="w-2 h-6 bg-brand rounded-full" />
            Potrebbero interessarti anche
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Radiazioni Ottiche Artificiali", desc: "Rischi legati a lampade, laser e processi di saldatura", view: 'corso-radiazioni-ottiche-artificiali', icon: Radio },
              { title: "Rischio Elettrico", desc: "Prevenzione dei rischi da contatto elettrico", view: 'corso-rischio-elettrico', icon: AlertTriangle },
              { title: "Rischio Chimico", desc: "Uso sicuro di sostanze chimiche e SDS", view: 'corso-rischio-chimico', icon: Activity },
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

export default CorsoCEMPage;
