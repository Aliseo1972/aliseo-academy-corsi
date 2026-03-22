import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Clock, BookOpen, Euro, CheckCircle2, Users, FileText, ChevronRight, ShieldCheck, GraduationCap, Scale, Laptop, Globe, Award, RefreshCw } from 'lucide-react';
import { courses } from '../data/courses';
import OnlineLearningBenefits from './OnlineLearningBenefits';

interface HaccpResponsabileAggiornamentoPageProps {
  onNavigate: (view: any) => void;
}

const HaccpResponsabileAggiornamentoPage: React.FC<HaccpResponsabileAggiornamentoPageProps> = ({ onNavigate }) => {
  const course = courses.find(c => c.id === "80")!;

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Aggiornamento Responsabile HACCP Online | Aliseo Academy";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Corso di aggiornamento HACCP per responsabili dell'industria alimentare. Formazione obbligatoria periodica 100% online per titolari e manager.");
    }
  }, []);

  const mailtoLink = "mailto:commerciale@aliseogroup.it?subject=Richiesta%20informazioni%20aggiornamento%20HACCP%20Responsabile&body=Buongiorno%2C%0A%0ASono%20interessato%20all'aggiornamento%20HACCP%20per%20Responsabili.%0APotrei%20avere%20maggiori%20informazioni%3F%0A%0AGrazie.";

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
              Aggiornamento Obbligatorio - Reg. CE 852/04
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6"
            >
              Aggiornamento <span className="text-brand">Responsabile HACCP</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-400 leading-relaxed mb-8"
            >
              Il rinnovo periodico delle competenze per chi gestisce il piano di autocontrollo. Resta in regola con le ultime novità normative e tecniche.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col gap-6"
            >
              <div>
                <p className="text-slate-400 text-sm mb-3 font-medium">
                  Corso di aggiornamento disponibile 100% online.
                </p>
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
              <div className="flex items-center gap-4 px-6 py-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm w-fit">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-brand" />
                  <span className="text-white font-bold">{course.duration}</span>
                </div>
                <div className="w-px h-6 bg-white/10" />
                <div className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-brand" />
                  <span className="text-white font-bold text-sm">Validità Nazionale</span>
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
                  Perché aggiornare la formazione Responsabile HACCP
                </h2>
                <div className="text-slate-600 leading-relaxed space-y-6 text-lg">
                  <p>
                    L'<strong>aggiornamento del corso HACCP per responsabili</strong> è un obbligo periodico fondamentale per garantire che chi gestisce il sistema di autocontrollo sia sempre allineato alle evoluzioni normative e tecnologiche del settore alimentare. La figura del responsabile (spesso il titolare dell'azienda o un manager delegato) ha il compito critico di supervisionare l'intero processo produttivo, garantendo che ogni fase rispetti i criteri di sicurezza stabiliti dal Regolamento CE 852/04.
                  </p>
                  <p>
                    La normativa alimentare è in costante mutamento. Nuove scoperte scientifiche sui rischi emergenti, aggiornamenti sulle procedure di rintracciabilità e modifiche ai requisiti di etichettatura richiedono un richiamo formativo costante. L'aggiornamento non è solo un adempimento formale per evitare sanzioni durante le ispezioni delle autorità competenti (NAS, ASL), ma uno strumento strategico per mantenere elevati gli standard qualitativi dell'impresa.
                  </p>
                  <p>
                    Il corso di aggiornamento proposto da Aliseo Academy si focalizza sulla revisione critica del piano HACCP aziendale. Vengono analizzati i casi studio più recenti, le migliori pratiche per la gestione delle allerte alimentari e le tecniche di audit interno. Un responsabile aggiornato è in grado di prevenire con maggiore efficacia le non conformità, ottimizzando i processi di pulizia, sanificazione e manutenzione delle attrezzature.
                  </p>
                  <p>
                    Attraverso la nostra piattaforma <strong>e-learning</strong>, i professionisti possono assolvere a questo obbligo formativo senza interrompere l'attività lavorativa. Il percorso didattico è strutturato per essere concreto e immediatamente applicabile, fornendo soluzioni ai problemi quotidiani della gestione alimentare. La flessibilità dell'online permette di gestire il tempo in autonomia, garantendo comunque un supporto costante e materiali didattici sempre aggiornati.
                  </p>
                  <p>
                    Mantenere la validità dell'attestato HACCP è essenziale per la continuità aziendale. Un certificato scaduto può invalidare l'intero sistema di autocontrollo, esponendo l'azienda a rischi legali e d'immagine. Con Aliseo Academy, l'aggiornamento diventa un'opportunità di crescita professionale e un investimento sulla sicurezza dei propri clienti e sulla solidità del proprio brand nel mercato alimentare.
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
                    <p className="text-slate-600 leading-relaxed">
                      Il corso è destinato a <strong>titolari di aziende alimentari, responsabili del piano di autocontrollo, gestori di attività di ristorazione, bar, mense, laboratori artigianali</strong> e chiunque ricopra un ruolo di coordinamento e supervisione della sicurezza alimentare e abbia già conseguito la formazione base.
                    </p>
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <div className="w-1.5 h-6 bg-brand rounded-full" />
                    Obiettivi dell'aggiornamento
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {course.objectives.map((obj, i) => (
                      <div key={i} className="flex items-center gap-3 p-4 bg-white border border-slate-200 rounded-2xl shadow-sm">
                        <CheckCircle2 className="w-5 h-5 text-brand shrink-0" />
                        <span className="text-sm font-medium text-slate-700">{obj}</span>
                      </div>
                    ))}
                    <div className="flex items-center gap-3 p-4 bg-white border border-slate-200 rounded-2xl shadow-sm">
                      <CheckCircle2 className="w-5 h-5 text-brand shrink-0" />
                      <span className="text-sm font-medium text-slate-700">Gestione allerte</span>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-white border border-slate-200 rounded-2xl shadow-sm">
                      <CheckCircle2 className="w-5 h-5 text-brand shrink-0" />
                      <span className="text-sm font-medium text-slate-700">Rintracciabilità avanzata</span>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <div className="w-1.5 h-6 bg-brand rounded-full" />
                    Programma Didattico
                  </h3>
                  <div className="space-y-4">
                    {course.syllabus.map((item, i) => (
                      <div key={i} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-bold text-slate-900">{item.title}</h4>
                          <span className="text-xs font-bold text-brand bg-brand/10 px-2 py-1 rounded-md">{item.duration}</span>
                        </div>
                        <p className="text-sm text-slate-500 leading-relaxed">Modulo focalizzato sull'aggiornamento delle competenze e delle normative vigenti.</p>
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
                      {course.references.map((ref, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Scale className="w-6 h-6 text-brand shrink-0" />
                          <div>
                            <p className="font-bold">{ref}</p>
                            <p className="text-sm text-slate-400">Riferimento normativo per l'aggiornamento periodico della formazione HACCP.</p>
                          </div>
                        </li>
                      ))}
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
                  Scheda Aggiornamento
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
                      <p className="text-slate-400 text-xs uppercase font-bold tracking-wider">Destinatari</p>
                      <p className="text-white font-bold text-sm">Responsabili HACCP</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                      <Award className="w-5 h-5 text-brand" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs uppercase font-bold tracking-wider">Certificazione</p>
                      <p className="text-white font-bold text-sm">Attestato Aggiornamento</p>
                    </div>
                  </div>
                </div>
                <div className="mt-10 pt-8 border-t border-white/10">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-slate-400 font-bold uppercase text-xs tracking-widest">Prezzo</span>
                    <span className="text-3xl font-black text-brand">{course.price}</span>
                  </div>
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
              { title: "Pagina Madre HACCP", desc: "Tutti i corsi HACCP", view: 'corso-haccp', icon: BookOpen },
              { title: "Corso Responsabile", desc: "Corso base 20 ore", view: 'corso-haccp-responsabile', icon: Users },
              { title: "Addetto Manipolazione", desc: "Corso per operatori", view: 'corso-haccp-addetto-manipolazione', icon: GraduationCap },
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

export default HaccpResponsabileAggiornamentoPage;
