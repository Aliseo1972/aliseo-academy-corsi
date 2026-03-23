import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Clock, BookOpen, Euro, CheckCircle2, Users, FileText, ChevronRight, ShieldCheck, GraduationCap, Scale, Laptop, Globe, Award, Activity, Monitor, Thermometer, Volume2 } from 'lucide-react';
import { courses } from '../data/courses';
import OnlineLearningBenefits from './OnlineLearningBenefits';

interface CorsoVibrazioniPageProps {
  onNavigate: (view: any) => void;
}

const CorsoVibrazioniPage: React.FC<CorsoVibrazioniPageProps> = ({ onNavigate }) => {
  const course = courses.find(c => c.id === "47") || {
    duration: "30m",
    price: "24,40 €",
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Corso Formazione Lavoratori Rischio Vibrazioni Online | Aliseo Academy";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Corso di formazione specifica per lavoratori sull'esposizione alle vibrazioni meccaniche. Formazione obbligatoria online conforme al D.Lgs 81/08 Titolo VIII Capo III.");
    }
  }, []);

  const mailtoLink = "mailto:commerciale@aliseogroup.it?subject=Richiesta%20informazioni%20corso%20Vibrazioni&body=Buongiorno%2C%0A%0ASono%20interessato%20al%20corso%20Formazione%20per%20lavoratori%20-%20Rischio%20Vibrazioni.%0APotrei%20avere%20maggiori%20informazioni%3F%0A%0AGrazie.";

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
              <Activity className="w-4 h-4" />
              Sicurezza Lavoratori - Rischio Vibrazioni
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6"
            >
              Corso Formazione <span className="text-brand">Lavoratori Rischio Vibrazioni</span> Online
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-400 leading-relaxed mb-8"
            >
              Formazione specifica obbligatoria sulla prevenzione dei rischi derivanti dall'esposizione alle vibrazioni meccaniche (sistema mano-braccio e corpo intero) ai sensi del D.Lgs. 81/08. Percorso 100% online.
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
                    L'esposizione alle vibrazioni meccaniche rappresenta un rischio fisico significativo per molte categorie di lavoratori, in particolare per coloro che utilizzano utensili manuali vibranti o che operano su macchine semoventi e mezzi di trasporto. Le vibrazioni possono causare danni permanenti alla salute, interessando il sistema vascolare, nervoso, osteoarticolare e muscolare.
                  </p>
                  <p>
                    Questo corso di formazione specialistica, erogato interamente in modalità e-learning da Aliseo Academy, approfondisce le due principali tipologie di rischio vibrazioni: il sistema mano-braccio (HAV - Hand-Arm Vibration), derivante dall'uso di martelli pneumatici, smerigliatrici o motoseghe, e il sistema corpo intero (WBV - Whole-Body Vibration), tipico di chi guida trattori, carrelli elevatori o mezzi pesanti su terreni sconnessi.
                  </p>
                  <p>
                    La normativa vigente, il D.Lgs. 81/08 al Titolo VIII Capo III, impone al datore di lavoro l'obbligo di valutare il rischio vibrazioni e di formare adeguatamente i lavoratori esposti. Attraverso il nostro percorso formativo online, i partecipanti impareranno a riconoscere i sintomi precoci delle patologie correlate, come la sindrome del dito bianco (fenomeno di Raynaud secondario) o le patologie della colonna vertebrale, e a comprendere l'importanza delle misure di prevenzione tecniche e organizzative.
                  </p>
                  <p>
                    Scegliere la formazione online di Aliseo Academy significa accedere a contenuti multimediali aggiornati, fruibili in qualsiasi momento e da qualsiasi dispositivo. Il corso analizza i valori limite di esposizione e i valori di azione, l'importanza della manutenzione delle attrezzature, l'uso corretto dei dispositivi di protezione individuale e le tecniche per ridurre la trasmissione delle vibrazioni all'operatore. Al termine del corso, previo superamento del test finale, verrà rilasciato un attestato di formazione valido ai fini di legge, documentando l'assolvimento degli obblighi formativi previsti dal Testo Unico sulla Sicurezza.
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
                      Il corso è rivolto a tutti i lavoratori esposti a vibrazioni meccaniche durante lo svolgimento delle proprie mansioni, in diversi settori produttivi.
                    </p>
                    <ul className="space-y-3">
                      {[
                        "Operatori del settore edile e stradale (uso di martelli demolitori, costipatori)",
                        "Addetti alla manutenzione del verde (uso di motoseghe, decespugliatori)",
                        "Autisti di mezzi pesanti, trattori agricoli e macchine movimento terra",
                        "Operai metalmeccanici che utilizzano utensili vibranti manuali",
                        "Magazzinieri addetti alla conduzione di carrelli elevatori"
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
                      "Distinguere tra vibrazioni HAV e WBV",
                      "Conoscere i valori limite di esposizione",
                      "Identificare gli effetti sulla salute (vascolari, nervosi)",
                      "Valutare l'importanza della manutenzione",
                      "Adottare corrette posture e tecniche di lavoro",
                      "Scegliere e utilizzare i DPI specifici"
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
                      { title: "Introduzione al rischio vibrazioni", desc: "Definizioni, grandezze fisiche e tipologie di vibrazioni meccaniche." },
                      { title: "Vibrazioni mano-braccio (HAV)", desc: "Sorgenti, effetti sulla salute e misure di prevenzione specifiche." },
                      { title: "Vibrazioni corpo intero (WBV)", desc: "Sorgenti, rischi per la colonna vertebrale e comfort ergonomico." },
                      { title: "Misure di prevenzione e protezione", desc: "Interventi sulle macchine, organizzazione del lavoro e DPI." },
                      { title: "Quiz di Verifica", lessonsCount: 1, duration: "15m" }
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
                      Il D.Lgs. 81/2008 dedica il Capo III del Titolo VIII alla protezione dei lavoratori contro i rischi derivanti dall'esposizione alle vibrazioni meccaniche. La norma stabilisce l'obbligo di valutazione del rischio e definisce le azioni da intraprendere al superamento dei valori di azione.
                    </div>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <Scale className="w-6 h-6 text-brand shrink-0" />
                        <div>
                          <p className="font-bold">D.Lgs 81/08 - Titolo VIII Capo III</p>
                          <p className="text-sm text-slate-400">Protezione dei lavoratori contro i rischi di esposizione a vibrazioni.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <FileText className="w-6 h-6 text-brand shrink-0" />
                        <div>
                          <p className="font-bold">Art. 201 D.Lgs 81/08</p>
                          <p className="text-sm text-slate-400">Valori limite di esposizione e valori di azione per le vibrazioni.</p>
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
                      <Euro className="w-5 h-5 text-brand" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs uppercase font-bold tracking-wider">Prezzo</p>
                      <p className="text-white font-bold">{course.price} + IVA</p>
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
              { title: "Rischio Rumore", desc: "Formazione specifica rumore", view: 'corso-rumore', icon: Volume2 },
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

export default CorsoVibrazioniPage;
