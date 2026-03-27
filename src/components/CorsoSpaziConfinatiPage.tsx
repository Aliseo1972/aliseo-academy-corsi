import React, { useEffect } from 'react';
import DeliveryMethods from './DeliveryMethods';
import { motion } from 'motion/react';
import { Clock, BookOpen, Euro, CheckCircle2, Users, FileText, ChevronRight, ShieldCheck, GraduationCap, Scale, Truck, MapPin, AlertTriangle } from 'lucide-react';

interface CorsoSpaziConfinatiPageProps {
  onNavigate: (view: any) => void;
}

const CorsoSpaziConfinatiPage: React.FC<CorsoSpaziConfinatiPageProps> = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Corso Spazi Confinati – 12 ore | Formazione Obbligatoria DPR 177/2011 | Aliseo Academy";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Corso Spazi Confinati (12 ore) obbligatorio ai sensi del D.Lgs. 81/08 e D.P.R. 177/2011. Formazione teorico-pratica on-site in tutta Italia con Safety Truck.");
    }
  }, []);

  const mailtoLink = "mailto:commerciale@aliseogroup.it?subject=Richiesta%20preventivo%20corso%20Spazi%20Confinati&body=Buongiorno%2C%0A%0ASono%20interessato%20al%20Corso%20Attivit%C3%A0%20in%20Spazi%20Confinati%20(12%20ore).%0APotrei%20ricevere%20un%20preventivo%20per%20la%20mia%20azienda%3F%0A%0AGrazie.";

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(245,158,11,0.1),transparent_50%)]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider mb-6"
            >
              <AlertTriangle className="w-4 h-4" />
              Sicurezza sul Lavoro - D.P.R. 177/2011
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6"
            >
              Corso <span className="text-brand">Spazi Confinati</span> – 12 ore
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-400 leading-relaxed mb-8"
            >
              Formazione obbligatoria per lavoratori che operano in ambienti confinati o sospetti di inquinamento, secondo D.Lgs. 81/08 e D.P.R. 177/2011.
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
                  <span className="text-white font-bold">12 ore</span>
                </div>
                <div className="w-px h-6 bg-white/10" />
                <div className="flex items-center gap-2">
                  <Scale className="w-5 h-5 text-brand" />
                  <span className="text-white font-bold text-sm">D.Lgs 81/08 & DPR 177/11</span>
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
                  Lavorare in Sicurezza negli Spazi Confinati
                </h2>
                <div className="text-slate-600 leading-relaxed space-y-6 text-lg">
                  <p>
                    Il <strong>corso spazi confinati</strong> è un requisito fondamentale per tutte le aziende che operano in ambienti caratterizzati da accessi limitati, ventilazione insufficiente e possibile presenza di sostanze tossiche o atmosfere esplosive. Tra questi ambienti rientrano tipicamente <strong>cisterne, silos, serbatoi, pozzi, condotte, gallerie, canalizzazioni e vasche</strong>.
                  </p>
                  <p>
                    La normativa di riferimento, il <strong>D.P.R. 177/2011</strong>, impone criteri rigorosi per la qualificazione delle imprese e dei lavoratori che operano in questi contesti ad alto rischio. Non si tratta solo di un obbligo di legge, ma di una necessità operativa per prevenire incidenti che, in tali ambienti, risultano spesso fatali.
                  </p>
                  <p>
                    Il nostro percorso formativo di <strong>12 ore</strong> è progettato per fornire competenze teoriche solide e, soprattutto, abilità pratiche indispensabili. Aliseo Academy pone un forte accento sulla <strong>componente pratica</strong>: i partecipanti imparano a utilizzare correttamente i rilevatori di gas, i dispositivi di protezione delle vie respiratorie (APVR) e i sistemi di recupero e salvataggio.
                  </p>
                  <p>
                    Affidarsi ad Aliseo Academy significa scegliere un partner con esperienza consolidata nella sicurezza sul lavoro. Offriamo la possibilità di svolgere il corso direttamente presso la <strong>sede del cliente</strong>, personalizzando l'addestramento sulle specifiche tipologie di spazi confinati presenti in azienda. Garantiamo la <strong>formazione in tutta Italia</strong>, assicurando standard qualitativi elevati.
                  </p>
                  <p>
                    Un elemento distintivo della nostra offerta è l'utilizzo del <strong>Safety Truck Aliseo</strong>. Questo centro formativo mobile all'avanguardia ci permette di portare l'aula e le attrezzature di addestramento (compresi simulatori di accesso e recupero) direttamente on-site. È la soluzione ideale per offrire un'esperienza formativa immersiva e pratica senza che i dipendenti debbano allontanarsi dal luogo di lavoro.
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
                    <p className="text-slate-600 leading-relaxed">
                      Il corso è destinato a <strong>lavoratori, preposti e datori di lavoro</strong> che operano o supervisionano attività in ambienti confinati o sospetti di inquinamento. È fondamentale per chiunque debba accedere a cisterne, silos, reti fognarie, serbatoi o gallerie, dove il rischio di infortunio grave è elevato.
                    </p>
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <div className="w-1.5 h-6 bg-brand rounded-full" />
                    Obiettivi del corso
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "Riconoscere i rischi negli spazi confinati",
                      "Utilizzare rilevatori di gas e monitoraggio",
                      "Indossare correttamente DPI di III categoria",
                      "Utilizzare APVR (autorespiratori, maschere)",
                      "Applicare procedure di accesso e lavoro",
                      "Gestire emergenze e manovre di recupero"
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
                        title: "Modulo 1: Quadro Normativo e Responsabilità", 
                        content: "Analisi del D.Lgs 81/08 e del D.P.R. 177/2011. Ruoli, obblighi e responsabilità del datore di lavoro, dei preposti e dei lavoratori." 
                      },
                      { 
                        title: "Modulo 2: Identificazione dei Rischi e Procedure", 
                        content: "Caratteristiche degli spazi confinati. Rischi di asfissia, intossicazione, incendio ed esplosione. Procedure di autorizzazione all'accesso (permessi di lavoro)." 
                      },
                      { 
                        title: "Modulo 3: Strumentazione e DPI", 
                        content: "Utilizzo di rilevatori di gas e ossigeno. Scelta e uso dei DPI di III categoria: imbracature, sistemi anticaduta e dispositivi di protezione delle vie respiratorie (APVR)." 
                      },
                      { 
                        title: "Modulo 4: Addestramento Pratico e Recupero", 
                        content: "Simulazione di accesso in spazio confinato. Tecniche di monitoraggio costante. Procedure di emergenza e utilizzo di treppiedi e sistemi di recupero operatori." 
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
                      <p className="text-white font-bold">12 ore</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                      <Users className="w-5 h-5 text-brand" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs uppercase font-bold tracking-wider">Destinatari</p>
                      <p className="text-white font-bold text-sm">Lavoratori e Preposti</p>
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
                    Richiedi preventivo gratuito
                  </a>
                  <p className="text-white/40 text-[10px] text-center mt-4 uppercase tracking-widest">
                    commerciale@aliseogroup.it
                  </p>
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8">
                <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-brand" />
                  Validità
                </h4>
                <p className="text-sm text-slate-600">
                  L'attestato rilasciato ha validità quinquennale (5 anni). Al termine del periodo è necessario frequentare un corso di aggiornamento.
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
              { title: "Lavori in Quota", desc: "DPI III Categoria", view: 'corso-pes-pav-pei', icon: ShieldCheck },
              { title: "DPI III Categoria", desc: "Formazione specifica", view: 'corso-diisocianati', icon: GraduationCap },
              { title: "Antincendio L2", desc: "Rischio Medio", view: 'antincendio-l2', icon: AlertTriangle },
              { title: "Primo Soccorso A", desc: "Aziende Gruppo A", view: 'corso-primo-soccorso-gruppo-a', icon: Users },
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

export default CorsoSpaziConfinatiPage;
