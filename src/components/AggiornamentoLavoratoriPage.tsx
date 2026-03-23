import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Clock, BookOpen, Euro, CheckCircle2, Users, FileText, ChevronRight, ShieldCheck, GraduationCap, Scale, Laptop, Globe, Award, RefreshCw } from 'lucide-react';
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
              Aggiornamento Quinquennale - 6 Ore
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
              className="text-xl text-slate-400 leading-relaxed mb-4"
            >
              Rinnova la tua formazione sulla sicurezza con il corso di aggiornamento obbligatorio, 100% in e-learning.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="text-lg text-slate-500 leading-relaxed mb-8"
            >
              Il corso di aggiornamento quinquennale è fondamentale per mantenere attive le competenze in materia di sicurezza e salute sul lavoro, in linea con le evoluzioni normative e tecnologiche.
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
                  L'Importanza dell'Aggiornamento Periodico sulla Sicurezza
                </h2>
                <div className="text-slate-600 leading-relaxed space-y-6 text-lg">
                  <p>
                    La sicurezza sul lavoro non è un concetto statico, ma un processo in continua evoluzione. Il **D.Lgs 81/08**, all'articolo 37, stabilisce chiaramente l'obbligo per il datore di lavoro di assicurare che ogni lavoratore riceva una formazione adeguata e specifica, che deve essere periodicamente ripetuta in relazione all'evoluzione dei rischi o all'insorgenza di nuovi rischi. L'Accordo Stato-Regioni del 21/12/2011 ha poi definito la periodicità quinquennale e la durata minima di 6 ore per questo aggiornamento.
                  </p>
                  <p>
                    Il **corso di aggiornamento lavoratori online** di Aliseo Academy è progettato per rinfrescare le conoscenze acquisite durante la formazione base e per introdurre le novità normative e tecniche più recenti. Partecipare all'aggiornamento non è solo un adempimento burocratico, ma un'opportunità per analizzare criticamente le proprie abitudini lavorative, identificare potenziali pericoli che potrebbero essere stati sottovalutati nel tempo e apprendere nuove strategie di prevenzione.
                  </p>
                  <p>
                    Scegliere la modalità **e-learning** per l'aggiornamento quinquennale offre vantaggi ineguagliabili sia per l'azienda che per il dipendente. La flessibilità della formazione online permette di conciliare l'obbligo formativo con le scadenze lavorative, evitando lunghe assenze dal posto di lavoro. I nostri contenuti multimediali, costantemente aggiornati, garantiscono che le informazioni trasmesse siano sempre attuali e pertinenti. Inoltre, la piattaforma Aliseo Academy consente un monitoraggio trasparente dei progressi, facilitando la gestione della conformità aziendale.
                  </p>
                  <p>
                    Un lavoratore aggiornato è un lavoratore più sicuro e consapevole. La formazione continua contribuisce a creare una cultura della sicurezza solida all'interno dell'organizzazione, riducendo il rischio di infortuni e migliorando il clima lavorativo generale. Al termine del corso, previo superamento del test di verifica, viene rilasciato l'attestato di aggiornamento valido su tutto il territorio nazionale. Con Aliseo Academy, rinnovare la tua sicurezza è semplice, veloce e certificato.
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
                        "Tutti i lavoratori che hanno già completato la formazione generale e specifica",
                        "Lavoratori che devono rinnovare l'attestato entro la scadenza quinquennale",
                        "Personale di ogni settore (Rischio Basso, Medio, Alto)",
                        "Lavoratori che rientrano in attività dopo lunghe assenze"
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
                      "Aggiornare le conoscenze sui rischi specifici",
                      "Conoscere le novità normative (D.Lgs 81/08)",
                      "Approfondire le misure di prevenzione e protezione",
                      "Rafforzare la cultura della sicurezza in azienda"
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
                      { title: "Evoluzione normativa", desc: "Le principali modifiche al Testo Unico Sicurezza e le nuove linee guida." },
                      { title: "Rischi emergenti", desc: "Analisi dei nuovi rischi legati all'innovazione tecnologica e organizzativa." },
                      { title: "Approfondimenti tecnici", desc: "Focus su DPI, segnaletica e procedure di emergenza aggiornate." },
                      { title: "Casi pratici e infortuni", desc: "Analisi di eventi reali per imparare dagli errori e migliorare la prevenzione." }
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
                          <p className="font-bold">D.Lgs 81/08 - Art. 37</p>
                          <p className="text-sm text-slate-400">Obbligo di aggiornamento periodico della formazione dei lavoratori.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <FileText className="w-6 h-6 text-brand shrink-0" />
                        <div>
                          <p className="font-bold">Accordo Stato-Regioni 21/12/2011</p>
                          <p className="text-sm text-slate-400">Definizione della periodicità quinquennale e della durata di 6 ore.</p>
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
