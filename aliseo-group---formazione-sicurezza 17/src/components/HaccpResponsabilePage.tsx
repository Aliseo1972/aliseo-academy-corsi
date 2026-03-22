import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Clock, BookOpen, Euro, CheckCircle2, Users, FileText, ChevronRight, ShieldCheck, GraduationCap, Scale, Laptop, Globe, Award } from 'lucide-react';
import { courses } from '../data/courses';
import OnlineLearningBenefits from './OnlineLearningBenefits';

interface HaccpResponsabilePageProps {
  onNavigate: (view: any) => void;
}

const HaccpResponsabilePage: React.FC<HaccpResponsabilePageProps> = ({ onNavigate }) => {
  const course = courses.find(c => c.id === "82")!;

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Corso Responsabile HACCP Online | Aliseo Academy";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Corso HACCP online per responsabili dell'industria alimentare. Formazione completa per titolari e gestori. 20 ore di formazione certificata.");
    }
  }, []);

  const mailtoLink = "mailto:commerciale@aliseogroup.it?subject=Richiesta%20informazioni%20corso%20HACCP%20Responsabile&body=Buongiorno%2C%0A%0ASono%20interessato%20al%20corso%20HACCP%20per%20Responsabili.%0APotrei%20avere%20maggiori%20informazioni%3F%0A%0AGrazie.";

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
              <ShieldCheck className="w-4 h-4" />
              Alta Formazione - Reg. CE 852/04
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6"
            >
              Corso <span className="text-brand">Responsabile HACCP</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-400 leading-relaxed mb-8"
            >
              Il percorso formativo completo per chi deve gestire e supervisionare il sistema di autocontrollo aziendale. Diventa il garante della sicurezza alimentare.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col gap-6"
            >
              <div>
                <p className="text-slate-400 text-sm mb-3 font-medium">
                  Corso completo disponibile 100% online in modalità e-learning.
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
                  Il ruolo del Responsabile HACCP nell'impresa alimentare
                </h2>
                <div className="text-slate-600 leading-relaxed space-y-6 text-lg">
                  <p>
                    Il <strong>corso HACCP per responsabili dell'industria alimentare</strong> è il percorso formativo di più alto livello previsto dalla normativa sulla sicurezza alimentare. Questa figura, identificata spesso nel titolare dell'azienda o in un consulente/manager dedicato, ha la responsabilità legale e operativa di implementare, gestire e mantenere aggiornato il Piano di Autocontrollo basato sui principi del sistema HACCP (Hazard Analysis and Critical Control Points).
                  </p>
                  <p>
                    Essere un responsabile HACCP significa possedere una visione d'insieme dell'intero ciclo produttivo: dall'approvvigionamento delle materie prime alla trasformazione, fino alla distribuzione e vendita al consumatore finale. Il corso approfondisce i 7 principi fondamentali del sistema, insegnando come condurre un'analisi dei pericoli efficace, come identificare i Punti Critici di Controllo (CCP) e come stabilire i relativi limiti critici e le azioni correttive.
                  </p>
                  <p>
                    La formazione proposta da Aliseo Academy copre aspetti tecnici e normativi complessi, tra cui la progettazione dei locali, la gestione dei rifiuti, il controllo degli infestanti e la rintracciabilità dei prodotti. Un responsabile competente deve saper coordinare il proprio staff, assicurandosi che ogni addetto applichi correttamente le procedure igieniche e che la documentazione aziendale (registri delle temperature, schede di pulizia, ecc.) sia sempre accurata e aggiornata.
                  </p>
                  <p>
                    Attraverso la nostra piattaforma <strong>e-learning</strong>, offriamo un percorso di 20 ore estremamente strutturato ma flessibile. Il corso è suddiviso in moduli didattici che alternano teoria e applicazioni pratiche, permettendo di acquisire le competenze necessarie per affrontare con sicurezza le ispezioni delle autorità di controllo. La formazione online elimina le barriere geografiche e temporali, consentendo ai professionisti di formarsi con i propri ritmi senza trascurare la gestione quotidiana dell'attività.
                  </p>
                  <p>
                    Investire in un corso di alta qualità per responsabili è una scelta strategica per la tutela del business. Una gestione impeccabile della sicurezza alimentare riduce drasticamente il rischio di incidenti, protegge la salute dei consumatori e valorizza l'immagine aziendale sul mercato. Con l'attestato rilasciato da Aliseo Academy, avrai la certezza di operare nel pieno rispetto della legge, garantendo standard di sicurezza d'eccellenza per la tua impresa alimentare.
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
                      Il corso è rivolto a <strong>titolari di attività alimentari, legali rappresentanti, responsabili del controllo qualità, direttori di stabilimento</strong> e chiunque sia designato come responsabile del sistema di autocontrollo in ristoranti, hotel, mense, industrie di trasformazione, laboratori artigianali e aziende di logistica alimentare.
                    </p>
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <div className="w-1.5 h-6 bg-brand rounded-full" />
                    Obiettivi del corso
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
                      <span className="text-sm font-medium text-slate-700">Validazione piano HACCP</span>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-white border border-slate-200 rounded-2xl shadow-sm">
                      <CheckCircle2 className="w-5 h-5 text-brand shrink-0" />
                      <span className="text-sm font-medium text-slate-700">Gestione Audit</span>
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
                        <p className="text-sm text-slate-500 leading-relaxed">Modulo approfondito per la gestione manageriale e tecnica della sicurezza alimentare.</p>
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
                            <p className="text-sm text-slate-400">Normativa quadro per l'igiene dei prodotti alimentari e i compiti del responsabile.</p>
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
                      <p className="text-white font-bold text-sm">Attestato Responsabile</p>
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
              { title: "Aggiornamento Responsabile", desc: "Rinnovo periodico", view: 'corso-haccp-responsabile-aggiornamento', icon: Clock },
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

export default HaccpResponsabilePage;
