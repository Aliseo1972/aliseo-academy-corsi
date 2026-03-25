import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Clock, BookOpen, Euro, CheckCircle2, Users, FileText, ChevronRight, ShieldCheck, GraduationCap, Scale, Laptop, Globe, Award, Volume2, Monitor, Thermometer } from 'lucide-react';
import { courses } from '../data/courses';
import OnlineLearningBenefits from './OnlineLearningBenefits';

interface CorsoRumorePageProps {
  onNavigate: (view: any) => void;
}

const CorsoRumorePage: React.FC<CorsoRumorePageProps> = ({ onNavigate }) => {
  const course = courses.find(c => c.id === "34") || {
    duration: "2h",
    price: "24,40 €",
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Corso Formazione Lavoratori Rischio Rumore Online | Aliseo Academy";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Corso di formazione specifica per lavoratori sull'esposizione al rumore. Formazione obbligatoria online conforme al D.Lgs 81/08 Titolo VIII Capo II.");
    }
  }, []);

  const mailtoLink = "mailto:commerciale@aliseogroup.it?subject=Richiesta%20informazioni%20corso%20Rumore&body=Buongiorno%2C%0A%0ASono%20interessato%20al%20corso%20Formazione%20per%20lavoratori%20-%20Rischio%20Esposizione%20al%20Rumore.%0APotrei%20avere%20maggiori%20informazioni%3F%0A%0AGrazie.";

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
              <Volume2 className="w-4 h-4" />
              Sicurezza Lavoratori - Rischio Rumore
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6"
            >
              Corso Formazione <span className="text-brand">Lavoratori Rischio Rumore</span> Online
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-400 leading-relaxed mb-8"
            >
              Formazione specifica obbligatoria sulla prevenzione dei rischi derivanti dall'esposizione al rumore professionale ai sensi del D.Lgs. 81/08. Percorso 100% online.
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
                    L'esposizione al rumore negli ambienti di lavoro rappresenta uno dei rischi fisici più diffusi e, purtroppo, spesso sottovalutati. L'ipoacusia da rumore, ovvero la perdita progressiva e irreversibile dell'udito, è una delle malattie professionali più denunciate in Italia. Il rischio rumore non riguarda solo i settori tradizionalmente rumorosi come la metalmeccanica o l'edilizia, ma può interessare una vasta gamma di attività produttive e di servizio.
                  </p>
                  <p>
                    Questo corso di formazione specialistica, erogato interamente in modalità e-learning da Aliseo Academy, fornisce ai lavoratori le conoscenze necessarie per comprendere i pericoli legati all'esposizione sonora e le misure di prevenzione da adottare. La normativa vigente, il D.Lgs. 81/08 al Titolo VIII Capo II, stabilisce obblighi precisi per la valutazione del rumore e per la formazione dei lavoratori esposti a livelli superiori ai valori inferiori di azione.
                  </p>
                  <p>
                    Attraverso il nostro percorso formativo online, i partecipanti approfondiranno la fisica del suono, imparando a distinguere tra intensità e frequenza, e comprenderanno come vengono misurati i livelli di esposizione quotidiana e di picco. Verrà data particolare enfasi all'uso corretto dei Dispositivi di Protezione Individuale (DPI) dell'udito, come tappi e cuffie, analizzando i criteri di scelta, l'indossamento corretto e la manutenzione.
                  </p>
                  <p>
                    La formazione e-learning di Aliseo Academy permette di assolvere agli obblighi normativi con la massima flessibilità, garantendo contenuti multimediali di alta qualità e test di verifica dell'apprendimento. Il corso analizza anche gli effetti extra-uditivi del rumore, come lo stress, l'aumento della pressione arteriosa e la riduzione della concentrazione, che possono aumentare il rischio di infortuni sul lavoro. Al termine del percorso, verrà rilasciato un attestato di formazione certificato, valido su tutto il territorio nazionale.
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
                      Il corso è rivolto a tutti i lavoratori esposti a livelli di rumore che superano i valori di azione previsti dalla normativa, indipendentemente dal settore di appartenenza.
                    </p>
                    <ul className="space-y-3">
                      {[
                        "Operai del settore metalmeccanico e siderurgico",
                        "Lavoratori del settore edile e delle costruzioni",
                        "Addetti alla lavorazione del legno e del marmo",
                        "Operatori in impianti di produzione rumorosi",
                        "Personale addetto all'uso di macchinari e attrezzature rumorose"
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
                      "Comprendere la natura del rischio rumore",
                      "Conoscere i livelli di esposizione e i valori limite",
                      "Identificare gli effetti del rumore sull'udito",
                      "Scegliere e utilizzare correttamente gli otoprotettori",
                      "Interpretare la segnaletica di sicurezza",
                      "Adottare comportamenti preventivi sul lavoro"
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
                      { title: "Fisica del suono e misurazione", desc: "Concetti di decibel, frequenza e strumenti di misura del rumore." },
                      { title: "Effetti del rumore sulla salute", desc: "L'ipoacusia professionale e gli effetti extra-uditivi (stress, fatica)." },
                      { title: "Valutazione dell'esposizione", desc: "Valori limite di esposizione e valori di azione previsti dal D.Lgs. 81/08." },
                      { title: "DPI dell'udito: otoprotettori", desc: "Tipologie di tappi e cuffie, criteri di scelta, indossamento e manutenzione." },
                      { title: "Test finale", lessonsCount: 1, duration: "10m" }
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
                      Il D.Lgs. 81/2008 dedica il Capo II del Titolo VIII alla protezione dei lavoratori contro i rischi derivanti dall'esposizione al rumore durante il lavoro. La norma stabilisce l'obbligo di valutazione del rischio e definisce le misure di prevenzione da attuare in base ai livelli di esposizione rilevati.
                    </div>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <Scale className="w-6 h-6 text-brand shrink-0" />
                        <div>
                          <p className="font-bold">D.Lgs 81/08 - Titolo VIII Capo II</p>
                          <p className="text-sm text-slate-400">Protezione dei lavoratori contro i rischi di esposizione al rumore.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <FileText className="w-6 h-6 text-brand shrink-0" />
                        <div>
                          <p className="font-bold">Art. 189 D.Lgs 81/08</p>
                          <p className="text-sm text-slate-400">Valori limite di esposizione e valori di azione per il rumore.</p>
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
              { title: "Rischio Videoterminali", desc: "Formazione specifica VDT", view: 'corso-videoterminali', icon: Monitor },
              { title: "Rischio Microclimatico", desc: "Formazione specifica microclima", view: 'corso-microclima', icon: Thermometer },
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

export default CorsoRumorePage;
