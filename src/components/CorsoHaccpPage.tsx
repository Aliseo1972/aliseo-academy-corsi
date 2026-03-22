import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Clock, BookOpen, Euro, CheckCircle2, Users, FileText, ChevronRight, MessageSquare, ShieldCheck, GraduationCap, Briefcase, Scale, Laptop, Globe, Zap, Award } from 'lucide-react';
import { courses } from '../data/courses';
import OnlineLearningBenefits from './OnlineLearningBenefits';

interface CorsoHaccpPageProps {
  onNavigate: (view: any) => void;
}

const CorsoHaccpPage: React.FC<CorsoHaccpPageProps> = ({ onNavigate }) => {
  // Find the course in the data if available, or use defaults
  const course = courses.find(c => c.id === "82") || {
    title: "Corso HACCP Online",
    duration: "20h",
    price: "244,00 €",
    description: "Formazione obbligatoria per operatori del settore alimentare secondo normativa vigente.",
    objectives: ["Comprendere il sistema HACCP", "Applicare le norme igienico-sanitarie", "Prevenire contaminazioni alimentari"],
    references: ["Reg. CE 852/2004", "Normativa nazionale sicurezza alimentare"],
    recipients: "Addetti alla manipolazione alimenti, Operatori del settore food, Personale di ristorazione, bar, mense, industria alimentare",
    syllabus: [
      { title: "Introduzione HACCP", duration: "3h" },
      { title: "Igiene personale e ambientale", duration: "4h" },
      { title: "Controllo alimenti", duration: "5h" },
      { title: "Rischi e contaminazioni", duration: "3h" }
    ]
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    // Update meta tags
    document.title = "Corso HACCP Online | Formazione Sicurezza Alimentare | Aliseo Academy";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Corso HACCP online per operatori del settore alimentare. Formazione obbligatoria sulla sicurezza alimentare conforme alla normativa vigente.");
    }
  }, []);

  const mailtoLink = "mailto:commerciale@aliseogroup.it?subject=Richiesta%20informazioni%20corso%20HACCP&body=Buongiorno%2C%0A%0ASono%20interessato%20al%20corso%20HACCP%20Online.%0APotrei%20avere%20maggiori%20informazioni%20sulla%20modalit%C3%A0%20e-learning%20e%20sull'attivazione%3F%0A%0AGrazie.";

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
              Formazione E-learning - Sicurezza Alimentare
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6"
            >
              Corso <span className="text-brand">HACCP Online</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-400 leading-relaxed mb-8"
            >
              Formazione obbligatoria per operatori del settore alimentare secondo normativa vigente. Il corso HACCP consente di acquisire le competenze necessarie per la gestione della sicurezza alimentare e la prevenzione dei rischi igienico-sanitari.
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
                  Sicurezza Alimentare e Sistema HACCP
                </h2>
                <div className="text-slate-600 leading-relaxed space-y-6 text-lg">
                  <p>
                    Il <strong>corso HACCP</strong> è obbligatorio per tutti gli operatori che lavorano nel settore alimentare. La formazione permette di conoscere le procedure di autocontrollo, le norme igieniche e le corrette pratiche per garantire la sicurezza degli alimenti.
                  </p>
                  <p>
                    L'acronimo HACCP (Hazard Analysis and Critical Control Points) identifica un sistema di controllo preventivo che mira a garantire la salubrità degli alimenti attraverso l'analisi dei rischi e l'individuazione di punti critici di controllo durante tutte le fasi della filiera produttiva, dalla preparazione al confezionamento, fino alla distribuzione e somministrazione.
                  </p>
                  <p>
                    La formazione online di Aliseo Academy è progettata per fornire strumenti pratici e conoscenze teoriche aggiornate, permettendo alle aziende e ai lavoratori di operare nel pieno rispetto della legalità e della salute pubblica. Grazie alla nostra piattaforma e-learning, è possibile assolvere agli obblighi formativi senza interrompere il ciclo produttivo, gestendo lo studio in base alle proprie disponibilità.
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
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        "Addetti alla manipolazione alimenti",
                        "Operatori del settore food",
                        "Personale di ristorazione, bar, mense",
                        "Industria alimentare"
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-600">
                          <Users className="w-5 h-5 text-brand shrink-0" />
                          <span className="font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
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
                      "Comprendere il sistema HACCP",
                      "Applicare le norme igienico-sanitarie",
                      "Prevenire contaminazioni alimentari",
                      "Conoscere la normativa vigente",
                      "Gestire i punti critici di controllo",
                      "Mantenere i registri di autocontrollo"
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
                    {[
                      { title: "Introduzione HACCP", content: "Storia, principi fondamentali e importanza del sistema di autocontrollo alimentare." },
                      { title: "Igiene personale e ambientale", content: "Norme di comportamento, pulizia dei locali, sanificazione delle attrezzature e igiene del personale." },
                      { title: "Controllo alimenti", content: "Ricevimento merci, stoccaggio, conservazione, temperature critiche e tracciabilità." },
                      { title: "Rischi e contaminazioni", content: "Pericoli fisici, chimici e biologici. Prevenzione delle tossinfezioni alimentari." }
                    ].map((module, i) => (
                      <div key={i} className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-brand/30 transition-all shadow-sm">
                        <div className="flex items-center gap-4 mb-3">
                          <div className="w-10 h-10 rounded-full bg-slate-900 text-brand flex items-center justify-center font-bold shrink-0">
                            {String(i + 1).padStart(2, '0')}
                          </div>
                          <h4 className="font-bold text-slate-900 text-lg">{module.title}</h4>
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
                          <p className="font-bold">Regolamento CE 852/2004</p>
                          <p className="text-sm text-slate-400">Stabilisce le norme generali in materia di igiene dei prodotti alimentari per gli operatori del settore.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <FileText className="w-6 h-6 text-brand shrink-0" />
                        <div>
                          <p className="font-bold">Normativa Nazionale Sicurezza Alimentare</p>
                          <p className="text-sm text-slate-400">Integrazioni legislative nazionali per l'applicazione del sistema HACCP e sanzioni correlate.</p>
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
                      <p className="text-slate-400 text-xs uppercase font-bold tracking-wider">Modalità</p>
                      <p className="text-white font-bold">E-learning (Online)</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                      <Globe className="w-5 h-5 text-brand" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs uppercase font-bold tracking-wider">Validità</p>
                      <p className="text-white font-bold">Nazionale</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                      <Award className="w-5 h-5 text-brand" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs uppercase font-bold tracking-wider">Certificazione</p>
                      <p className="text-white font-bold text-sm">Attestato HACCP</p>
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
              onClick={() => onNavigate('corso-formazione-lavoratori-generale')}
              className="group p-6 bg-slate-50 rounded-2xl border border-slate-200 hover:border-brand/30 hover:bg-white transition-all text-left shadow-sm"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-brand">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-brand group-hover:translate-x-1 transition-all" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Formazione Generale Lavoratori</h3>
              <p className="text-sm text-slate-500 mb-4">Concetti base di salute e sicurezza nei luoghi di lavoro.</p>
              <div className="flex items-center gap-4 text-xs font-bold text-slate-400">
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> 4h</span>
                <span className="flex items-center gap-1"><Euro className="w-3.5 h-3.5" /> 48,80 €</span>
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
              <p className="text-sm text-slate-500 mb-4">Formazione obbligatoria per la figura del preposto ai sensi del D.Lgs 81/08.</p>
              <div className="flex items-center gap-4 text-xs font-bold text-slate-400">
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> 8h</span>
                <span className="flex items-center gap-1"><Euro className="w-3.5 h-3.5" /> 120,00 €</span>
              </div>
            </button>

            <button 
              onClick={() => onNavigate('corso-rls-rappresentante-lavoratori-sicurezza')}
              className="group p-6 bg-slate-50 rounded-2xl border border-slate-200 hover:border-brand/30 hover:bg-white transition-all text-left shadow-sm"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-brand">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-brand group-hover:translate-x-1 transition-all" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Corso RLS</h3>
              <p className="text-sm text-slate-500 mb-4">Rappresentante dei Lavoratori per la Sicurezza.</p>
              <div className="flex items-center gap-4 text-xs font-bold text-slate-400">
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> 32h</span>
                <span className="flex items-center gap-1"><Euro className="w-3.5 h-3.5" /> 390,40 €</span>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 uppercase tracking-tight">
            Formazione <span className="text-brand">HACCP</span> Online
          </h2>
          <p className="text-lg text-slate-600 mb-10">
            Soluzioni su misura per la tua impresa alimentare: investi nella sicurezza con una formazione di alto livello, flessibile e certificata 100% online.
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

export default CorsoHaccpPage;
