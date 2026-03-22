import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Clock, BookOpen, Euro, CheckCircle2, Users, FileText, ChevronRight, MessageSquare, ShieldCheck, GraduationCap, HeartPulse, Scale, Truck, MapPin } from 'lucide-react';

interface PrimoSoccorsoGruppoAPageProps {
  onNavigate: (view: any) => void;
}

const PrimoSoccorsoGruppoAPage: React.FC<PrimoSoccorsoGruppoAPageProps> = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Corso Primo Soccorso Gruppo A Aziendale - Formazione 16 ore | Aliseo Academy";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Corso primo soccorso aziendale Gruppo A (16 ore) obbligatorio per aziende ad alto rischio. Formazione on-site in tutta Italia con Aliseo Academy.");
    }
  }, []);

  const mailtoLink = "mailto:commerciale@aliseogroup.it?subject=Richiesta%20informazioni%20corso%20Primo%20Soccorso%20Gruppo%20A&body=Buongiorno%2C%0A%0ASono%20interessato%20al%20corso%20Primo%20Soccorso%20Aziendale%20Gruppo%20A%20(16%20ore).%0APotrei%20avere%20maggiori%20informazioni%20su%20modalit%C3%A0%2C%20prossime%20date%20e%20costi%3F%0A%0AGrazie.";

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
              <HeartPulse className="w-4 h-4" />
              Sicurezza sul Lavoro - DM 388/2003
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6"
            >
              Corso Primo Soccorso <span className="text-brand">Aziendale Gruppo A</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-400 leading-relaxed mb-8"
            >
              Formazione obbligatoria per addetti al primo soccorso in aziende classificate nel Gruppo A (alto rischio) secondo il D.Lgs 81/08.
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
                  <span className="text-white font-bold text-sm">D.Lgs 81/08 & DM 388</span>
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
                  Formazione Primo Soccorso Obbligatoria: Il Gruppo A
                </h2>
                <div className="text-slate-600 leading-relaxed space-y-6 text-lg">
                  <p>
                    Il <strong>corso primo soccorso aziende</strong> per il Gruppo A rappresenta il livello più approfondito di formazione sanitaria previsto per i luoghi di lavoro. Secondo il <strong>D.Lgs 81/08</strong> e il <strong>DM 388/2003</strong>, le aziende appartenenti a questa categoria sono quelle caratterizzate da un elevato indice di inabilità o da particolari rischi legati all'attività svolta (es. centrali termoelettriche, impianti nucleari, aziende estrattive, aziende con oltre 5 dipendenti ad alto indice INAIL).
                  </p>
                  <p>
                    Il <strong>corso primo soccorso obbligatorio aziende</strong> non è solo un adempimento normativo, ma un investimento fondamentale nella tutela della vita umana all'interno del contesto lavorativo. Un addetto al primo soccorso adeguatamente formato è in grado di riconoscere tempestivamente un'emergenza sanitaria, allertare correttamente i soccorsi professionali e attuare le manovre salvavita necessarie per stabilizzare l'infortunato in attesa dell'ambulanza.
                  </p>
                  <p>
                    Il <strong>primo soccorso gruppo A aziende</strong> richiede un percorso formativo della durata di 16 ore, suddiviso in moduli teorici e pratici. Aliseo Academy propone un approccio didattico moderno, che integra le nozioni mediche con esercitazioni realistiche. I nostri docenti, professionisti del settore sanitario, guidano i partecipanti nell'apprendimento delle tecniche di rianimazione cardiopolmonare (RCP), nell'uso del defibrillatore e nella gestione di traumi, emorragie e malori improvvisi.
                  </p>
                  <p>
                    Affidarsi ad Aliseo Academy significa scegliere un partner esperto nella sicurezza sul lavoro. Offriamo la possibilità di svolgere il corso direttamente presso la <strong>sede del cliente</strong>, ottimizzando i tempi e i costi per l'azienda. Grazie alla nostra presenza capillare, garantiamo la <strong>formazione in tutta Italia</strong>, assicurando standard qualitativi elevati e uniformi su tutto il territorio nazionale.
                  </p>
                  <p>
                    Un elemento distintivo della nostra offerta è l'utilizzo del <strong>Safety Truck Aliseo</strong>, il nostro centro formativo mobile all'avanguardia. Questa unità speciale ci permette di portare l'aula e le attrezzature di addestramento direttamente on-site, offrendo un'esperienza formativa immersiva e pratica senza che i dipendenti debbano allontanarsi dal luogo di lavoro. È la soluzione ideale per aziende con turnazioni complesse o situate in zone logisticamente sfidanti.
                  </p>
                </div>
              </article>

              {/* Strategic Block */}
              <section className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-black mb-6 uppercase tracking-tight">
                    Perché scegliere <span className="text-brand">Aliseo Academy</span>?
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="space-y-4">
                      <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-brand" />
                      </div>
                      <h4 className="font-bold text-lg">In tutta Italia</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        Organizziamo sessioni formative in ogni regione, garantendo flessibilità e rapidità di intervento per aziende multi-sede.
                      </p>
                    </div>
                    <div className="space-y-4">
                      <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                        <Users className="w-6 h-6 text-brand" />
                      </div>
                      <h4 className="font-bold text-lg">Presso la tua sede</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        I nostri docenti vengono da te. Riduciamo i tempi di trasferta e personalizziamo l'addestramento sui tuoi rischi specifici.
                      </p>
                    </div>
                    <div className="space-y-4">
                      <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                        <Truck className="w-6 h-6 text-brand" />
                      </div>
                      <h4 className="font-bold text-lg">Safety Truck</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        Il nostro centro mobile attrezzato porta la tecnologia e la pratica direttamente nel tuo piazzale aziendale.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Detailed Sections */}
              <div className="space-y-12">
                <section>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <div className="w-1.5 h-6 bg-brand rounded-full" />
                    A chi è rivolto
                  </h3>
                  <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8">
                    <p className="text-slate-600 leading-relaxed">
                      Il corso è destinato ai lavoratori designati dal datore di lavoro come <strong>addetti al primo soccorso</strong> in aziende classificate nel <strong>Gruppo A</strong>. Questa categoria include aziende con oltre 5 dipendenti ad alto indice infortunistico INAIL, centrali termoelettriche, impianti nucleari, aziende estrattive e altre attività con rischi specifici elevati.
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
                      "Riconoscere un'emergenza sanitaria",
                      "Allertare correttamente il sistema di soccorso",
                      "Attuare manovre di rianimazione (BLS)",
                      "Gestire traumi e ferite sul lavoro",
                      "Conoscere i rischi specifici dell'attività",
                      "Utilizzare i presidi medici aziendali"
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
                        title: "Modulo 1: Allertamento e Riconoscimento", 
                        content: "Cause e circostanze dell'infortunio, comunicazione con il sistema di emergenza (118/112), accertamento delle condizioni psicofisiche dell'infortunato, funzioni vitali." 
                      },
                      { 
                        title: "Modulo 2: Interventi di Primo Soccorso", 
                        content: "Sostenimento delle funzioni vitali, posizionamento dell'infortunato, rianimazione cardiopolmonare, manovre di disostruzione delle vie aeree." 
                      },
                      { 
                        title: "Modulo 3: Conoscenze su Traumi e Patologie", 
                        content: "Cenni di anatomia e fisiologia, lussazioni, fratture, emorragie, shock, ustioni, avvelenamenti, intossicazioni, patologie specifiche del settore." 
                      },
                      { 
                        title: "Modulo 4: Esercitazioni Pratiche", 
                        content: "Tecniche di comunicazione con il sistema di emergenza, tecniche di primo soccorso nelle sindromi cerebrali acute, tecniche di rianimazione cardiopolmonare su manichino, tecniche di tamponamento emorragico." 
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
                      <p className="text-white font-bold text-sm">Addetti Primo Soccorso Gruppo A</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                      <Scale className="w-5 h-5 text-brand" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs uppercase font-bold tracking-wider">Normativa</p>
                      <p className="text-white font-bold text-sm">D.Lgs 81/08, DM 388/03</p>
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
                  Validità
                </h4>
                <p className="text-sm text-slate-600">
                  L'attestato rilasciato ha validità triennale. Al termine dei 3 anni è necessario frequentare un corso di aggiornamento di 6 ore.
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
              { title: "Gruppo B-C", desc: "Corso base 12 ore", view: 'primo-soccorso-bc', icon: HeartPulse },
              { title: "Aggiornamento A", desc: "Rinnovo triennale 6 ore", view: 'aggiornamento-ps-a', icon: Clock },
              { title: "Corso RLS", desc: "Rappresentante Lavoratori", view: 'corso-rls-rappresentante-lavoratori-sicurezza', icon: Users },
              { title: "Antincendio L2", desc: "Rischio Medio", view: 'antincendio-l2', icon: ShieldCheck },
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

export default PrimoSoccorsoGruppoAPage;
