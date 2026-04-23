import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Clock, ChevronRight, Laptop, Award, GraduationCap, ShieldCheck, Users, CheckCircle2 } from 'lucide-react';
import OnlineLearningBenefits from './OnlineLearningBenefits';

interface AggiornamentoCoordinatoreSicurezza40PageProps {
  onNavigate: (view: any) => void;
}

const AggiornamentoCoordinatoreSicurezza40Page: React.FC<AggiornamentoCoordinatoreSicurezza40PageProps> = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Aggiornamento Coordinatori Sicurezza CSP/CSE – 40 ore | Aliseo Academy";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Aggiornamento quinquennale obbligatorio per Coordinatori della Sicurezza nei cantieri temporanei o mobili ai sensi dell’art. 98 del D.Lgs. 81/08.");
    }
  }, []);

  const mailtoLink = "mailto:commerciale@aliseogroup.it?subject=Richiesta%20informazioni%20Corso%20Aggiornamento%20Coordinatori%20CSP/CSE&body=Buongiorno%2C%0A%0ASono%20interessato%20al%20corso%20di%20Aggiornamento%20Coordinatori%20Sicurezza%20CSP/CSE%20%E2%80%93%2040%20ore.%0APotrei%20avere%20maggiori%20informazioni%20sulla%20modalit%C3%A0%20e-learning%20e%20sull'attivazione%3F%0A%0AGrazie.";

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
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand text-xs font-bold uppercase tracking-wider mb-6"
            >
              <GraduationCap className="w-4 h-4" />
              Corsi per Professionisti
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6"
            >
              Aggiornamento Coordinatori Sicurezza <span className="text-brand">CSP/CSE – 40 ore</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-400 leading-relaxed mb-8"
            >
              Aggiornamento quinquennale obbligatorio per Coordinatori della Sicurezza nei cantieri temporanei o mobili ai sensi dell’art. 98 del D.Lgs. 81/08.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col gap-4"
            >
              <div className="flex flex-col gap-2">
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
                  <span className="text-white font-bold">40 ore</span>
                </div>
                <div className="w-px h-6 bg-white/10" />
                <div className="flex items-center gap-2">
                  <Laptop className="w-5 h-5 text-brand" />
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
              
              {/* Description Section */}
              <article className="prose prose-slate max-w-none">
                <h2 className="text-3xl font-black text-slate-900 mb-6 flex items-center gap-3">
                  <div className="w-2 h-8 bg-brand rounded-full" />
                  Descrizione del Corso
                </h2>
                <div className="text-slate-600 leading-relaxed space-y-6 text-lg">
                  <p>
                    Il corso di <strong>Aggiornamento Coordinatori per la Sicurezza CSP/CSE – 40 ore</strong> è rivolto ai professionisti già abilitati che devono adempiere all’obbligo di aggiornamento quinquennale previsto dall’art. 98 del D.Lgs. 81/2008.
                  </p>
                  <p>
                    Il Coordinatore per la Sicurezza nei cantieri temporanei o mobili (CSP/CSE) svolge un ruolo centrale nella pianificazione, gestione e controllo delle attività di sicurezza durante le fasi di progettazione ed esecuzione delle opere.
                  </p>
                  <p>
                    Il percorso formativo fornisce un aggiornamento completo sulle disposizioni legislative più recenti, sui criteri operativi e sulle norme di buona tecnica applicabili alla sicurezza nei cantieri.
                  </p>
                  <p>
                    Particolare attenzione è dedicata alla gestione dei rischi specifici di cantiere, alla redazione e verifica dei documenti di sicurezza (PSC, POS), al coordinamento tra le imprese e alla corretta applicazione delle misure di prevenzione e protezione.
                  </p>
                  <p>
                    Il corso è erogato in modalità <strong>e-learning asincrona</strong>, con contenuti multimediali, test intermedi e verifica finale, ed è fruibile per un periodo di 120 giorni dalla data di attivazione.
                  </p>
                </div>
              </article>

              <OnlineLearningBenefits />

              {/* Detailed Sections */}
              <div className="space-y-12">
                {/* Destinatari */}
                <section>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <div className="w-1.5 h-6 bg-brand rounded-full" />
                    Destinatari
                  </h3>
                  <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        "Coordinatori per la Sicurezza CSP/CSE già abilitati",
                        "Professionisti del settore cantieri e costruzioni",
                        "Tecnici della sicurezza",
                        "Ingegneri, architetti, geometri",
                        "Consulenti in materia di salute e sicurezza"
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
                    Obiettivi
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "Aggiornare le competenze normative sulla sicurezza nei cantieri",
                      "Approfondire ruoli e responsabilità del Coordinatore CSP/CSE",
                      "Migliorare la gestione dei rischi specifici di cantiere",
                      "Rafforzare le capacità di coordinamento tra imprese",
                      "Applicare correttamente PSC, POS e documentazione tecnica"
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
                      { title: "01 Normativa e sicurezza nei cantieri", content: "D.Lgs. 81/08 Titolo IV e aggiornamenti normativi" },
                      { title: "02 Ruolo del Coordinatore", content: "Compiti, responsabilità e gestione operativa" },
                      { title: "03 Documentazione di cantiere", content: "PSC, POS, verifica e coordinamento" },
                      { title: "04 Valutazione dei rischi", content: "Analisi dei rischi specifici nei cantieri" },
                      { title: "05 Gestione sicurezza operativa", content: "Misure di prevenzione e coordinamento" },
                      { title: "06 Comunicazione e coordinamento", content: "Gestione imprese e sicurezza condivisa" }
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
                  <ShieldCheck className="w-6 h-6 text-brand" />
                  Scheda Corso
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-brand" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs uppercase font-bold tracking-wider">Durata</p>
                      <p className="text-white font-bold">40 ore</p>
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
                      <p className="text-white font-bold text-sm mb-1">Attestato aggiornamento CSP/CSE</p>
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
                        <li>• Coordinatori per la sicurezza CSP/CSE (art. 98 D.Lgs. 81/08)</li>
                        <li>• ASPP/RSPP ai sensi dell’art. 32 D.Lgs. 81/08</li>
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
              onClick={() => onNavigate('hse-specialist')}
              className="group p-6 bg-slate-50 rounded-2xl border border-slate-200 hover:border-brand/30 hover:bg-white transition-all text-left shadow-sm"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-brand">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-brand group-hover:translate-x-1 transition-all" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">HSE Specialist</h3>
              <p className="text-sm text-slate-500 mb-4">Corso conforme alla Norma UNI 11720 per il profilo professionale HSE Specialist.</p>
              <div className="flex items-center gap-4 text-xs font-bold text-slate-400">
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> 40h</span>
              </div>
            </button>

            <button 
              onClick={() => onNavigate('corso-dirigente')}
              className="group p-6 bg-slate-50 rounded-2xl border border-slate-200 hover:border-brand/30 hover:bg-white transition-all text-left shadow-sm"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-brand">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-brand group-hover:translate-x-1 transition-all" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Corso Dirigente</h3>
              <p className="text-sm text-slate-500 mb-4">Formazione obbligatoria per la figura del Dirigente ai sensi del D.Lgs 81/08.</p>
              <div className="flex items-center gap-4 text-xs font-bold text-slate-400">
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> 16h</span>
              </div>
            </button>

            <button 
              onClick={() => onNavigate('rls-update-page')}
              className="group p-6 bg-slate-50 rounded-2xl border border-slate-200 hover:border-brand/30 hover:bg-white transition-all text-left shadow-sm"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-brand">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-brand group-hover:translate-x-1 transition-all" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Aggiornamento RLS</h3>
              <p className="text-sm text-slate-500 mb-4">Aggiornamento annuale obbligatorio per Rappresentanti dei Lavoratori per la Sicurezza.</p>
              <div className="flex items-center gap-4 text-xs font-bold text-slate-400">
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> 4-8h</span>
              </div>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AggiornamentoCoordinatoreSicurezza40Page;
