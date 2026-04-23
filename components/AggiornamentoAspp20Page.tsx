import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Clock, BookOpen, Euro, CheckCircle2, Users, FileText, ChevronRight, Laptop, Globe, Award, GraduationCap, ShieldCheck, Scale, Shield, HeartHandshake } from 'lucide-react';
import OnlineLearningBenefits from './OnlineLearningBenefits';

interface AggiornamentoAspp20PageProps {
  onNavigate: (view: any) => void;
}

const AggiornamentoAspp20Page: React.FC<AggiornamentoAspp20PageProps> = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Aggiornamento ASPP – 20 ore | Aliseo Academy";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Aggiornamento quinquennale obbligatorio per Addetti al Servizio di Prevenzione e Protezione ai sensi del D.Lgs. 81/08 e Accordo Stato-Regioni 7 luglio 2016.");
    }
  }, []);

  const mailtoLink = "mailto:commerciale@aliseogroup.it?subject=Richiesta%20informazioni%20corso%20Aggiornamento%20ASPP%2020%20ore&body=Buongiorno%2C%0A%0ASono%20interessato%20al%20corso%20Aggiornamento%20ASPP%20%E2%80%93%2020%20ore.%0APotrei%20avere%20maggiori%20informazioni%20sulla%20modalit%C3%A0%20e-learning%20e%20sull'attivazione%3F%0A%0AGrazie.";

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
              Formazione E-learning - Professionisti
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6"
            >
              Aggiornamento ASPP <span className="text-brand">– 20 ore</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-400 leading-relaxed mb-8"
            >
              Aggiornamento quinquennale obbligatorio per Addetti al Servizio di Prevenzione e Protezione ai sensi del D.Lgs. 81/08 e Accordo Stato-Regioni 7 luglio 2016.
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
                    Richiedi informazioni sul corso
                    <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4 px-6 py-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm w-fit">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-brand" />
                  <span className="text-white font-bold">20 ore</span>
                </div>
                <div className="w-px h-6 bg-white/10" />
                <div className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-brand" />
                  <span className="text-white font-bold text-sm">E-learning asincrono</span>
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
                  Descrizione del Corso
                </h2>
                <div className="text-slate-600 leading-relaxed space-y-6 text-lg">
                  <p>
                    Il corso di <strong>Aggiornamento per ASPP – 20 ore</strong> è rivolto agli Addetti al Servizio di Prevenzione e Protezione che devono adempiere all’obbligo di aggiornamento quinquennale previsto dal D.Lgs. 81/2008 e dall’Accordo Stato-Regioni del 7 luglio 2016.
                  </p>
                  <p>
                    Il corso è rivolto esclusivamente a ASPP già in possesso di abilitazione, che devono adempiere all’obbligo di aggiornamento periodico previsto dalla normativa vigente.
                  </p>
                  <p>
                    L’<strong>ASPP</strong> rappresenta una figura fondamentale nel sistema di prevenzione aziendale, supportando il Responsabile del Servizio di Prevenzione e Protezione nelle attività di individuazione, valutazione e gestione dei rischi.
                  </p>
                  <p>
                    Il percorso formativo consente di aggiornare le competenze tecniche, normative e operative necessarie per garantire il mantenimento della qualifica e l’efficace gestione della sicurezza nei luoghi di lavoro.
                  </p>
                  <p>
                    Il corso affronta il quadro legislativo vigente, i ruoli e le responsabilità delle figure della sicurezza, il sistema di prevenzione aziendale, la valutazione dei rischi e le principali misure di prevenzione e protezione.
                  </p>
                  <p>
                    Il percorso è erogato in modalità <strong>e-learning asincrona</strong>, con contenuti multimediali, test intermedi e verifica finale, ed è fruibile per un periodo di 120 giorni dalla data di attivazione.
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
                    Destinatari
                  </h3>
                  <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        "ASPP (Addetti al Servizio di Prevenzione e Protezione) già abilitati",
                        "Figure aziendali coinvolte nel sistema di prevenzione",
                        "Tecnici della sicurezza",
                        "Professionisti che operano nell’ambito salute e sicurezza"
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-600">
                          <CheckCircle2 className="w-5 h-5 text-brand shrink-0" />
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
                      "Aggiornare le competenze normative in materia di sicurezza sul lavoro",
                      "Comprendere ruoli e responsabilità nel sistema prevenzionistico",
                      "Approfondire il funzionamento degli organi di vigilanza",
                      "Migliorare la capacità di supporto al RSPP",
                      "Applicare correttamente le procedure di valutazione dei rischi"
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
                    Programma Didattico (Sintetico)
                  </h3>
                  <div className="space-y-4">
                    {[
                      { title: "01 Normativa e sistema legislativo", content: "D.Lgs. 81/08 e quadro normativo di riferimento" },
                      { title: "02 Sistema di prevenzione aziendale", content: "Ruoli, responsabilità e organizzazione" },
                      { title: "03 Valutazione dei rischi", content: "DVR, metodologie e gestione operativa" },
                      { title: "04 Rischi specifici e prevenzione", content: "Analisi dei principali rischi nei luoghi di lavoro" },
                      { title: "05 Gestione emergenze e DPI", content: "Procedure, protezioni e sicurezza operativa" },
                      { title: "06 Norme tecniche e strumenti", content: "ISO 31000, tecniche di valutazione del rischio" }
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
                      <p className="text-white font-bold">20 ore</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                      <Laptop className="w-5 h-5 text-brand" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs uppercase font-bold tracking-wider">Modalità</p>
                      <p className="text-white font-bold text-sm">E-learning asincrono</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                      <Award className="w-5 h-5 text-brand" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs uppercase font-bold tracking-wider">Certificazione</p>
                      <p className="text-white font-bold text-sm mb-1">Attestato aggiornamento ASPP</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-5 h-5 text-brand" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs font-bold tracking-wider mb-2 leading-relaxed text-left">
                        Valido ai fini dell’aggiornamento professionale, in relazione ai contenuti trattati e alla durata del corso, per:
                      </p>
                      <ul className="text-white text-xs font-bold space-y-1">
                        <li>• ASPP/RSPP ai sensi dell’art. 32 D.Lgs. 81/08</li>
                        <li>• Coordinatori per la sicurezza CSP/CSE</li>
                        <li>• Formatori della sicurezza (D.I. 06/03/2013)</li>
                        <li>• Professionisti HSE (UNI 11720)</li>
                      </ul>
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
              onClick={() => onNavigate('modulo-a-rspp-aspp')}
              className="group p-6 bg-slate-50 rounded-2xl border border-slate-200 hover:border-brand/30 hover:bg-white transition-all text-left shadow-sm"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-brand">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-brand group-hover:translate-x-1 transition-all" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Modulo A RSPP/ASPP</h3>
              <p className="text-sm text-slate-500 mb-4">Corso base obbligatorio per accedere al percorso formativo RSPP/ASPP.</p>
              <div className="flex items-center gap-4 text-xs font-bold text-slate-400">
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> 28h</span>
              </div>
            </button>

            <button 
              onClick={() => onNavigate('rspp-aggiornamento-40')}
              className="group p-6 bg-slate-50 rounded-2xl border border-slate-200 hover:border-brand/30 hover:bg-white transition-all text-left shadow-sm"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-brand">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-brand group-hover:translate-x-1 transition-all" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Aggiornamento RSPP</h3>
              <p className="text-sm text-slate-500 mb-4">Aggiornamento quinquennale da 40 ore per RSPP.</p>
              <div className="flex items-center gap-4 text-xs font-bold text-slate-400">
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> 40h</span>
              </div>
            </button>

            <button 
              onClick={() => onNavigate('hse-specialist')}
              className="group p-6 bg-slate-50 rounded-2xl border border-slate-200 hover:border-brand/30 hover:bg-white transition-all text-left shadow-sm"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-brand">
                  <Shield className="w-5 h-5" />
                </div>
                <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-brand group-hover:translate-x-1 transition-all" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">HSE Specialist</h3>
              <p className="text-sm text-slate-500 mb-4">Profilo professionale HSE conforme alla Norma UNI 11720.</p>
              <div className="flex items-center gap-4 text-xs font-bold text-slate-400">
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> 40h</span>
              </div>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AggiornamentoAspp20Page;
