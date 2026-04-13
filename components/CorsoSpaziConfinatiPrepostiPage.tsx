import React, { useEffect } from 'react';
import DeliveryMethods from './DeliveryMethods';
import { motion } from 'motion/react';
import { Clock, BookOpen, Euro, CheckCircle2, Users, FileText, ChevronRight, MessageSquare, ShieldCheck, GraduationCap, HeartPulse, Scale, Truck, MapPin, AlertTriangle } from 'lucide-react';

interface CorsoSpaziConfinatiPrepostiPageProps {
  onNavigate: (view: any) => void;
}

const CorsoSpaziConfinatiPrepostiPage: React.FC<CorsoSpaziConfinatiPrepostiPageProps> = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Corso Spazi Confinati Avanzato Preposti 16 ore - Formazione Sicurezza | Aliseo Academy";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Corso avanzato per preposti (16 ore) per il coordinamento di attività in spazi confinati o sospetti di inquinamento. Formazione on-site in tutta Italia.");
    }
  }, []);

  const mailtoLink = "mailto:commerciale@aliseogroup.it?subject=Richiesta%20informazioni%20corso%20Spazi%20Confinati%20Avanzato%20Preposti&body=Buongiorno%2C%0A%0ASono%20interessato%20al%20corso%20Spazi%20Confinati%20Avanzato%20per%20Preposti%20(16%20ore).%0APotrei%20avere%20maggiori%20informazioni%20su%20modalit%C3%A0%2C%20prossime%20date%20e%20costi%3F%0A%0AGrazie.";

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
              <AlertTriangle className="w-4 h-4" />
              Sicurezza sul Lavoro - DPR 177/2011
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6"
            >
              Corso Spazi Confinati <span className="text-brand">Avanzato per Preposti – 16 ore</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-400 leading-relaxed mb-8"
            >
              Formazione obbligatoria per preposti che coordinano attività in ambienti confinati o sospetti di inquinamento, secondo D.Lgs. 81/08, D.P.R. 177/2011 e Accordo Stato-Regioni.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col gap-6"
            >
              <div>
                <p className="text-slate-400 text-sm mb-3 font-medium">
                  Richiedi informazioni per organizzare il corso presso la tua azienda.
                </p>
                <div className="flex flex-col gap-2">
                  <p className="text-brand text-xs font-bold uppercase tracking-wider">
                    Servizio disponibile in tutta Italia
                  </p>
                  <a 
                    href={mailtoLink}
                    className="px-8 py-4 bg-brand text-slate-900 font-black uppercase tracking-tight rounded-2xl hover:bg-brand-light transition-all flex items-center gap-2 group shadow-xl shadow-brand/20 w-fit"
                  >
                    Richiedi preventivo gratuito
                    <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4 px-6 py-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm w-fit">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-brand" />
                  <span className="text-white font-bold">16 ore</span>
                </div>
                <div className="w-px h-6 bg-white/10" />
                <div className="flex items-center gap-2">
                  <Scale className="w-5 h-5 text-brand" />
                  <span className="text-white font-bold text-sm">D.Lgs 81/08 & DPR 177/2011</span>
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
                  Coordinamento e Supervisione in Spazi Confinati
                </h2>
                <div className="text-slate-600 leading-relaxed space-y-6 text-lg">
                  <p>
                    Il <strong>corso spazi confinati avanzato per preposti</strong> è un percorso formativo specialistico progettato per chi riveste ruoli di responsabilità e coordinamento in ambienti ad alto rischio. Operare in spazi confinati o sospetti di inquinamento richiede non solo competenze tecniche operative, ma soprattutto una solida capacità di supervisione e gestione delle procedure di sicurezza.
                  </p>
                  <p>
                    Il ruolo del preposto in questi contesti è cruciale: egli deve garantire che ogni fase dell'intervento, dall'accesso al monitoraggio dell'atmosfera, avvenga nel pieno rispetto del <strong>D.Lgs 81/08</strong> e del <strong>D.P.R. 177/2011</strong>. La normativa vigente impone standard rigorosi per prevenire incidenti legati alla presenza di gas tossici, atmosfere esplosive o carenza di ossigeno, rischi che possono avere conseguenze fatali se non gestiti correttamente.
                  </p>
                  <p>
                    La formazione di 16 ore approfondisce le responsabilità operative e organizzative del preposto, fornendo gli strumenti per una valutazione dinamica dei rischi e per il controllo costante dell'uso corretto dei DPI di III categoria. Aliseo Academy integra la teoria con simulazioni di coordinamento, preparando le figure apicali a gestire non solo il lavoro ordinario, ma anche le situazioni di emergenza e le procedure di recupero.
                  </p>
                  <p>
                    Scegliere Aliseo Academy significa affidarsi a professionisti della sicurezza. Organizziamo il <strong>corso spazi confinati preposti on-site</strong> direttamente presso la vostra sede, permettendo di calibrare l'addestramento sulle specifiche tipologie di ambienti confinati presenti in azienda (silos, cisterne, pozzi, ecc.). Garantiamo la <strong>formazione in tutta Italia</strong> con docenti esperti e attrezzature all'avanguardia.
                  </p>
                  <p>
                    Per un'esperienza formativa ancora più efficace, mettiamo a disposizione il <strong>Safety Truck Aliseo</strong>. Questa unità mobile attrezzata consente di svolgere esercitazioni pratiche di accesso e recupero in totale sicurezza, portando un vero e proprio centro di addestramento nel piazzale della vostra azienda, riducendo al minimo i tempi di inattività del personale e massimizzando l'apprendimento pratico.
                  </p>
                </div>
              </article>

              <DeliveryMethods />

              {/* Detailed Sections */}
              <div className="space-y-12">
                <section>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <div className="w-1.5 h-6 bg-brand rounded-full" />
                    A chi è rivolto
                  </h3>
                  <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8">
                    <p className="text-slate-600 leading-relaxed mb-4">
                      Il corso è specificamente progettato per figure che ricoprono ruoli di responsabilità:
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {[
                        "Preposti alla sicurezza",
                        "Responsabili di squadra",
                        "Figure di coordinamento operativo",
                        "Capisquadra in ambienti sospetti di inquinamento"
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-slate-700 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-brand" />
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
                      "Coordinare le attività in sicurezza",
                      "Verificare le condizioni operative",
                      "Applicare procedure di accesso",
                      "Gestire i lavoratori e le emergenze",
                      "Controllare l'uso corretto dei DPI",
                      "Supervisionare il monitoraggio atmosferico"
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
                    Programma Dettagliato
                  </h3>
                  <div className="space-y-4">
                    {[
                      { 
                        title: "Modulo 1: Normativa e Responsabilità", 
                        content: "D.Lgs. 81/08, D.P.R. 177/2011 e Accordo Stato-Regioni. Il ruolo giuridico e operativo del preposto." 
                      },
                      { 
                        title: "Modulo 2: Caratteristiche degli Ambienti", 
                        content: "Definizione e classificazione degli spazi confinati e degli ambienti sospetti di inquinamento." 
                      },
                      { 
                        title: "Modulo 3: Analisi dei Rischi e Monitoraggio", 
                        content: "Valutazione dei rischi specifici, monitoraggio dell'atmosfera e utilizzo degli strumenti di rilevazione." 
                      },
                      { 
                        title: "Modulo 4: DPI e Procedure Operative", 
                        content: "Scelta e controllo dei DPI di III categoria. Procedure di accesso, coordinamento e supervisione." 
                      },
                      { 
                        title: "Modulo 5: Gestione Emergenze", 
                        content: "Pianificazione dell'emergenza, procedure di recupero e primo soccorso in ambienti confinati." 
                      }
                    ].map((item, i) => (
                      <div key={i} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                        <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                        <p className="text-sm text-slate-500 leading-relaxed">{item.content}</p>
                      </div>
                    ))}
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
                      <p className="text-white font-bold">16 ore</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                      <Users className="w-5 h-5 text-brand" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs uppercase font-bold tracking-wider">Destinatari</p>
                      <p className="text-white font-bold text-sm">Preposti e Coordinatori</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                      <Scale className="w-5 h-5 text-brand" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs uppercase font-bold tracking-wider">Normativa</p>
                      <p className="text-white font-bold text-sm">D.Lgs 81/08, DPR 177/11</p>
                    </div>
                  </div>
                </div>
                <div className="mt-10 pt-8 border-t border-white/10">
                  <p className="text-slate-400 text-sm mb-1 text-center">
                    Ti rispondiamo entro 24 ore
                  </p>
                  <p className="text-white/60 text-[10px] mb-4 text-center uppercase tracking-widest">
                    Soluzioni su misura per la tua azienda
                  </p>
                  <a 
                    href={mailtoLink}
                    className="block w-full py-4 bg-brand text-slate-900 text-center font-black uppercase tracking-tight rounded-2xl hover:bg-brand-light transition-all shadow-lg shadow-brand/20"
                  >
                    Ricevi informazioni sul corso
                  </a>
                  <p className="text-white/40 text-[10px] text-center mt-4 uppercase tracking-widest">
                    commerciale@aliseogroup.it
                  </p>
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8">
                <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-brand" />
                  Certificazione
                </h4>
                <p className="text-sm text-slate-600">
                  Al termine del corso viene rilasciato un attestato di formazione abilitante per preposti operanti in spazi confinati, valido ai sensi di legge.
                </p>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Spazi Confinati", desc: "Corso base 12 ore", view: 'corso-spazi-confinati', icon: AlertTriangle },
              { title: "Primo Soccorso", desc: "Gruppo A - 16 ore", view: 'corso-primo-soccorso-gruppo-a', icon: HeartPulse },
              { title: "Antincendio L3", desc: "Rischio Alto - 16 ore", view: 'antincendio-l3', icon: ShieldCheck },
              { title: "Lavori in Quota", desc: "DPI III Categoria", view: 'corso-dpi-terza-categoria-lavori-quota', icon: GraduationCap },
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

export default CorsoSpaziConfinatiPrepostiPage;
