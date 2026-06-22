import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Clock, BookOpen, Euro, CheckCircle2, Users, FileText, ChevronRight, ShieldCheck, GraduationCap, Scale, Laptop, Globe, Award, RefreshCw, Monitor } from 'lucide-react';
import { courses } from '../data/courses';
import OnlineLearningBenefits from './OnlineLearningBenefits';

interface AggiornamentoLavoratoriPageProps {
  onNavigate: (view: any) => void;
}

const AggiornamentoLavoratoriPage: React.FC<AggiornamentoLavoratoriPageProps> = ({ onNavigate }) => {
  const course = courses.find(c => c.id === "18") || {
    duration: "6h",
    price: "73,20 €",
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Corso Aggiornamento Lavoratori Online | Formazione Obbligatoria 6 Ore";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Corso di aggiornamento quinquennale obbligatorio per lavoratori online. Formazione e-learning 6 ore conforme al D.Lgs 81/08 e Accordo Stato-Regioni.");
    }
  }, []);

  const mailtoLink = "mailto:commerciale@aliseogroup.it?subject=Richiesta%20informazioni%20corso%20Aggiornamento%20Lavoratori&body=Buongiorno%2C%0A%0ASono%20interessato%20al%20corso%20Aggiornamento%20Lavoratori%20Online.%0APotrei%20avere%20maggiori%20informazioni%3F%0A%0AGrazie.";

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
              Aggiornamento Periodico - 6 Ore
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6"
            >
              Corso <span className="text-brand">Aggiornamento Lavoratori</span> Online
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-400 leading-relaxed mb-8"
            >
              Corso di aggiornamento periodico per lavoratori, obbligatorio in materia di salute e sicurezza sul lavoro, erogato in modalità e-learning.
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
                  Descrizione del Corso
                </h2>
                <div className="text-slate-600 leading-relaxed space-y-6 text-lg">
                  <p>
                    Il corso Aggiornamento Lavoratori Online è rivolto a tutti i lavoratori che devono aggiornare periodicamente la propria formazione in materia di salute e sicurezza sul lavoro.
                  </p>
                  <p>
                    Il percorso formativo è conforme a quanto previsto dal D.Lgs. 81/08 e dall’Accordo Stato-Regioni 17/04/2025, e consente di mantenere aggiornate le conoscenze sui principali rischi lavorativi, sulle misure di prevenzione e protezione e sulle procedure di sicurezza.
                  </p>
                  <p>
                    Durante il corso vengono approfonditi i concetti fondamentali relativi al rischio, al pericolo, alla protezione e alla prevenzione, insieme ai principali riferimenti normativi in materia di sicurezza e salute nei luoghi di lavoro.
                  </p>
                  <p>
                    Il programma è strutturato in moduli didattici progressivi, con contenuti multimediali, quiz e verifica finale, per garantire un aggiornamento efficace e immediatamente applicabile.
                  </p>
                  <p>
                    La modalità e-learning consente di seguire il corso in autonomia, con accesso flessibile e continuità formativa, senza interrompere l’attività lavorativa.
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
                        "Tutti i lavoratori che devono aggiornare la formazione obbligatoria",
                        "Lavoratori che hanno già completato la formazione generale e specifica",
                        "Personale soggetto ad aggiornamento periodico in materia di sicurezza",
                        "Lavoratori rientrati dopo lunghi periodi di assenza"
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
                      "Aggiornare le conoscenze in materia di salute e sicurezza",
                      "Richiamare i principali concetti di rischio, pericolo, protezione e prevenzione",
                      "Comprendere i riferimenti normativi applicabili",
                      "Rafforzare comportamenti sicuri nello svolgimento delle mansioni"
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
                    Programma
                  </h3>
                  <div className="space-y-4">
                    {[
                      { title: "Documento Progettuale", content: "0m" },
                      { title: "Aggiornamento Lavoratori", content: "5h 53m" },
                      { title: "Quiz di Verifica", content: "10m" },
                      { title: "Questionario di Gradimento", content: "9m" }
                    ].map((item, i) => (
                      <div key={i} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                        <div className="flex justify-between items-start">
                          <h4 className="font-bold text-slate-900">{item.title}</h4>
                          <span className="text-slate-500 font-mono text-sm font-bold bg-slate-100 px-2 py-1 rounded-lg shrink-0 ml-4">{item.content}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <div className="w-1.5 h-6 bg-brand rounded-full" />
                    Quadro Normativo
                  </h3>
                  <div className="bg-slate-900 rounded-3xl p-8 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand/10 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-brand/20 transition-colors" />
                    <div className="relative space-y-4">
                      {[
                        { title: "Art. 37 D.Lgs. 81/08", desc: "Formazione dei lavoratori", icon: Scale },
                        { title: "Accordo Stato-Regioni 17/04/2025", desc: "(Rep. Atti n. 59/CSR)", icon: ShieldCheck }
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

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="bg-slate-900 rounded-3xl p-8 sticky top-24">
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
                      <p className="text-white font-bold">6h</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/5">
                      <Monitor className="w-5 h-5 text-brand" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs uppercase font-bold tracking-wider">Modalità</p>
                      <p className="text-white font-bold">E-learning</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/5">
                      <Award className="w-5 h-5 text-brand" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs uppercase font-bold tracking-wider">Certificazione</p>
                      <p className="text-white font-bold text-sm leading-tight">Attestato valido ai sensi della normativa vigente</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/5">
                      <Laptop className="w-5 h-5 text-brand" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs uppercase font-bold tracking-wider">Fruibilità</p>
                      <p className="text-white font-bold text-sm">90 giorni dalla data di attivazione</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/5 bg-brand/5 border-brand/20">
                      <Euro className="w-5 h-5 text-brand" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs uppercase font-bold tracking-wider">Prezzo</p>
                      <p className="text-white font-bold text-sm">
                        € 73,20 <span className="text-[10px] text-brand font-medium lowercase">iva inclusa</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-10 pt-8 border-t border-white/10">
                  <p className="text-slate-400 text-sm mb-4 text-center">
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
              { title: "Sicurezza Lavoratori", desc: "Pagina principale formazione", view: 'dlgs-81-08', icon: ShieldCheck },
              { title: "Formazione Generale", desc: "Corso base 4h", view: 'corso-formazione-lavoratori-generale', icon: BookOpen },
              { title: "Rischio Basso Uffici", desc: "Modulo specifico uffici", view: 'corso-lavoratori-rischio-basso-uffici', icon: Laptop },
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

export default AggiornamentoLavoratoriPage;
