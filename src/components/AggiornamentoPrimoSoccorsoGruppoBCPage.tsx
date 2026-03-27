import React, { useEffect } from 'react';
import DeliveryMethods from './DeliveryMethods';
import { motion } from 'motion/react';
import { Clock, BookOpen, Euro, CheckCircle2, Users, FileText, ChevronRight, MessageSquare, ShieldCheck, GraduationCap, HeartPulse, Scale, Truck, MapPin, Mail, AlertCircle } from 'lucide-react';

interface AggiornamentoPrimoSoccorsoGruppoBCPageProps {
  onNavigate: (view: any) => void;
}

const AggiornamentoPrimoSoccorsoGruppoBCPage: React.FC<AggiornamentoPrimoSoccorsoGruppoBCPageProps> = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Aggiornamento Primo Soccorso Gruppo B-C - Rinnovo 4 ore | Aliseo Academy";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Aggiornamento triennale obbligatorio primo soccorso Gruppo B-C (4 ore) per aziende. Formazione presso sede cliente e Safety Truck Aliseo.");
    }
  }, []);

  const mailtoLink = "mailto:commerciale@aliseogroup.it?subject=Richiesta%20informazioni%20aggiornamento%20Primo%20Soccorso%20Gruppo%20B-C&body=Buongiorno%2C%0A%0ASono%20interessato%20all'aggiornamento%20Primo%20Soccorso%20Aziendale%20Gruppo%20B-C%20(4%20ore).%0APotrei%20avere%20maggiori%20informazioni%20su%20modalit%C3%A0%2C%20prossime%20date%20e%20costi%3F%0A%0AGrazie.";

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.1),transparent_50%)]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-bold uppercase tracking-wider mb-6"
            >
              <HeartPulse className="w-4 h-4" />
              Aggiornamento Obbligatorio - DM 388/2003
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6"
            >
              Aggiornamento Primo Soccorso <span className="text-brand">Gruppo B-C</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-400 leading-relaxed mb-8"
            >
              Rinnovo triennale obbligatorio per addetti al primo soccorso in aziende dei Gruppi B e C. Formazione pratica e teorica di 4 ore.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col gap-6"
            >
              <div>
                <p className="text-slate-400 text-sm mb-3 font-medium">
                  Organizza l'aggiornamento presso la tua azienda in tutta Italia.
                </p>
                <div className="flex flex-col gap-2">
                  <p className="text-brand text-xs font-bold uppercase tracking-wider">
                    Preventivi personalizzati entro 24 ore
                  </p>
                  <a 
                    href={mailtoLink}
                    className="px-8 py-4 bg-brand text-slate-900 font-black uppercase tracking-tight rounded-2xl hover:bg-brand-light transition-all flex items-center gap-2 group shadow-xl shadow-brand/20 w-fit"
                  >
                    Richiedi informazioni aggiornamento
                    <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4 px-6 py-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm w-fit">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-brand" />
                  <span className="text-white font-bold">4 ore</span>
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
                  L'Aggiornamento Primo Soccorso Obbligatorio per i Gruppi B e C
                </h2>
                <div className="text-slate-600 leading-relaxed space-y-6 text-lg">
                  <p>
                    L'<strong>aggiornamento primo soccorso obbligatorio</strong> è un adempimento normativo essenziale per tutte le aziende classificate nei Gruppi B e C. Aliseo Academy eroga questa <strong>formazione in presenza conforme D.Lgs 81/08</strong> e al <strong>DM 388/2003</strong> in <strong>tutta Italia</strong>, garantendo che gli addetti mantengano la necessaria prontezza operativa attraverso <strong>sessioni pratiche con docenti qualificati</strong> (medici e infermieri esperti).
                  </p>
                  <p>
                    La nostra offerta si distingue per la flessibilità: organizziamo la <strong>formazione presso sede cliente</strong> per minimizzare l'impatto sull'operatività aziendale. Inoltre, grazie al <strong>centro formativo mobile Aliseo</strong> (Safety Truck), possiamo portare un'aula didattica completa e attrezzata direttamente nel vostro piazzale, offrendo un ambiente ideale per l'addestramento pratico sulle manovre salvavita e l'uso dei presidi medici.
                  </p>
                  <p>
                    L'<strong>aggiornamento primo soccorso gruppo B-C</strong> affronta le manovre fondamentali di rianimazione cardiopolmonare (RCP), la gestione delle ostruzioni delle vie aeree e il trattamento delle emergenze mediche più comuni. In un contesto lavorativo, la rapidità del primo intervento può fare la differenza tra un infortunio gestito correttamente e una tragedia. Rinnovare le proprie competenze ogni tre anni assicura che gli addetti non dimentichino i protocolli vitali e siano aggiornati sulle ultime tecniche di soccorso.
                  </p>
                  <p>
                    Aliseo Academy offre la massima flessibilità organizzativa, permettendo di svolgere la <strong>formazione presso la sede del cliente</strong> in tutta Italia. Questo servizio "in-company" è ideale per le aziende che desiderano minimizzare i tempi di inattività dei dipendenti, permettendo loro di formarsi direttamente nel proprio ambiente di lavoro. La nostra rete di istruttori qualificati garantisce standard elevati e uniformi, indipendentemente dalla localizzazione geografica della tua impresa.
                  </p>
                  <p>
                    Inoltre, Aliseo Academy mette a disposizione il proprio <strong>centro formativo mobile</strong> (Safety Truck). Questa soluzione innovativa porta un'aula didattica itinerante e tutte le attrezzature di addestramento (manichini, simulatori DAE, presidi medici) direttamente nel piazzale della tua azienda. È la scelta perfetta per chi non dispone di spazi interni adeguati ma vuole garantire ai propri dipendenti un'esperienza formativa di alto livello tecnologico e pratico.
                  </p>
                </div>
              </article>

              {/* Delivery Methods */}
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
                      L'aggiornamento è rivolto ai lavoratori già formati come <strong>addetti al primo soccorso in aziende dei Gruppi B e C</strong>. 
                      <br /><br />
                      - <strong>Gruppo B</strong>: Aziende con 3 o più lavoratori non classificate nel Gruppo A.
                      <br />
                      - <strong>Gruppo C</strong>: Aziende con meno di 3 lavoratori non classificate nel Gruppo A.
                    </p>
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <div className="w-1.5 h-6 bg-brand rounded-full" />
                    Quando è necessario l'aggiornamento
                  </h3>
                  <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm flex items-start gap-4">
                    <AlertCircle className="w-6 h-6 text-brand shrink-0 mt-1" />
                    <div>
                      <p className="text-slate-700 font-medium mb-2">Cadenza Triennale</p>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        La normativa vigente (DM 388/2003) impone che l'aggiornamento della formazione per gli addetti al primo soccorso avvenga <strong>ogni 3 anni</strong>. È responsabilità del datore di lavoro monitorare le scadenze degli attestati per garantire la conformità normativa e la sicurezza aziendale.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <div className="w-1.5 h-6 bg-brand rounded-full" />
                    Programma del corso
                  </h3>
                  <div className="space-y-4">
                    {[
                      { 
                        title: "Richiami Teorici", 
                        content: "Allertamento del sistema di soccorso, riconoscimento dell'emergenza, accertamento delle condizioni dell'infortunato." 
                      },
                      { 
                        title: "Protocolli di Intervento", 
                        content: "Gestione delle emorragie, dei traumi, dei malori improvvisi e delle ostruzioni delle vie aeree." 
                      },
                      { 
                        title: "Addestramento Pratico", 
                        content: "Esercitazioni di rianimazione cardiopolmonare (RCP) su manichino, posizionamento dell'infortunato e tecniche di primo soccorso." 
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
                  Scheda Aggiornamento
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-brand" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs uppercase font-bold tracking-wider">Durata</p>
                      <p className="text-white font-bold">4 ore</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                      <Users className="w-5 h-5 text-brand" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs uppercase font-bold tracking-wider">Destinatari</p>
                      <p className="text-white font-bold text-sm">Addetti PS Gruppo B-C (Rinnovo)</p>
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
                    Sicurezza e conformità per la tua azienda
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
                  Rinnovo
                </h4>
                <p className="text-sm text-slate-600">
                  L'attestato rilasciato rinnova l'abilitazione per altri 3 anni, in piena conformità con le normative vigenti sulla sicurezza sul lavoro.
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
              { title: "Corso Base Gruppo B-C", desc: "Formazione 12 ore", view: 'primo-soccorso-bc', icon: HeartPulse },
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

export default AggiornamentoPrimoSoccorsoGruppoBCPage;
