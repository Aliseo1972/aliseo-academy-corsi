import React, { useEffect } from 'react';
import DeliveryMethods from './DeliveryMethods';
import { motion } from 'motion/react';
import { Clock, BookOpen, Euro, CheckCircle2, Users, FileText, ChevronRight, MessageSquare, ShieldCheck, GraduationCap, HeartPulse, Scale, Truck, MapPin, AlertTriangle, Anchor } from 'lucide-react';

interface CorsoPrepostoLavoriSuFuniPageProps {
  onNavigate: (view: any) => void;
}

const CorsoPrepostoLavoriSuFuniPage: React.FC<CorsoPrepostoLavoriSuFuniPageProps> = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Corso Preposto Lavori su Funi 8 ore - Formazione Obbligatoria | Aliseo Academy";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Corso Preposto Lavori su Funi (8 ore) obbligatorio ai sensi del D.Lgs. 81/08 (art. 116 e Allegato XXI). Formazione per coordinatori e capisquadra in tutta Italia.");
    }
  }, []);

  const mailtoLink = "mailto:commerciale@aliseogroup.it?subject=Richiesta%20informazioni%20corso%20Preposto%20Lavori%20su%20Funi&body=Buongiorno%2C%0A%0ASono%20interessato%20al%20corso%20Preposto%20Lavori%20su%20Funi%20(8%20ore).%0APotrei%20avere%20maggiori%20informazioni%20su%20modalit%C3%A0%2C%20prossime%20date%20e%20costi%3F%0A%0AGrazie.";

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
              <ShieldCheck className="w-4 h-4" />
              Sicurezza sul Lavoro - D.Lgs 81/08
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6"
            >
              Corso Preposto per <span className="text-brand">Lavori su Funi – 8 ore</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-400 leading-relaxed mb-8"
            >
              Formazione obbligatoria per preposti che coordinano attività in quota mediante sistemi di accesso e posizionamento su funi, secondo il D.Lgs. 81/08.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col gap-6"
            >
              <div>
                <p className="text-slate-400 text-sm mb-3 font-medium">
                  Richiedi informazioni per organizzare il corso preposti presso la tua azienda.
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
                  <span className="text-white font-bold">8 ore</span>
                </div>
                <div className="w-px h-6 bg-white/10" />
                <div className="flex items-center gap-2">
                  <Scale className="w-5 h-5 text-brand" />
                  <span className="text-white font-bold text-sm">D.Lgs 81/08</span>
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
                  Il Ruolo del Preposto nei Lavori su Fune
                </h2>
                <div className="text-slate-600 leading-relaxed space-y-6 text-lg">
                  <p>
                    Il <strong>preposto per i lavori su fune</strong> riveste un ruolo di fondamentale importanza nella catena della sicurezza aziendale. Ai sensi del <strong>D.Lgs. 81/08 (art. 116 e Allegato XXI)</strong>, le attività di accesso e posizionamento mediante funi devono essere costantemente supervisionate da un preposto specificamente formato, in grado di coordinare le manovre e vigilare sul corretto utilizzo dei DPI.
                  </p>
                  <p>
                    Questo corso di 8 ore è progettato per fornire ai <strong>capisquadra e ai responsabili operativi</strong> le competenze necessarie per gestire la complessità dei cantieri in quota. Non si tratta solo di conoscere la tecnica, ma di saper organizzare il lavoro, verificare l'idoneità dei sistemi di ancoraggio e assicurare che ogni operatore segua scrupolosamente le procedure di sicurezza stabilite.
                  </p>
                  <p>
                    Le responsabilità del preposto includono il controllo quotidiano delle attrezzature, la supervisione delle fasi di montaggio e smontaggio dei sistemi di accesso e, soprattutto, la <strong>gestione delle emergenze</strong>. In caso di imprevisto, il preposto deve essere in grado di coordinare le manovre di soccorso e recupero, garantendo la massima tempestività e precisione nell'intervento.
                  </p>
                  <p>
                    Aliseo Academy porta la formazione per preposti direttamente nella tua azienda. Grazie alla nostra presenza in <strong>tutta Italia</strong>, offriamo sessioni <strong>on-site</strong> che permettono di contestualizzare l'addestramento sulle reali strutture e sui rischi specifici che la tua squadra affronta ogni giorno. Un approccio pratico e diretto che trasforma la teoria normativa in capacità operativa reale.
                  </p>
                  <p>
                    Per un addestramento di eccellenza, utilizziamo il <strong>Safety Truck Aliseo</strong>. Questa unità mobile all'avanguardia consente di simulare scenari complessi di coordinamento e supervisione, mettendo alla prova le capacità decisionali del preposto in situazioni di stress operativo o emergenza simulata, direttamente presso il tuo stabilimento o cantiere.
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
                      Il corso è destinato a figure con responsabilità di coordinamento:
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {[
                        "Preposti alla sicurezza",
                        "Capisquadra operativi su fune",
                        "Responsabili di cantiere",
                        "Coordinatori di lavori in quota",
                        "Supervisori tecnici",
                        "Responsabili manutentivi"
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
                      "Coordinare attività in sicurezza",
                      "Verificare procedure operative",
                      "Controllare utilizzo DPI",
                      "Gestire e vigilare sui lavoratori",
                      "Supervisionare emergenze",
                      "Organizzare il cantiere su fune"
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
                        title: "Modulo 1: Normativa di Riferimento", 
                        content: "Approfondimento D.Lgs. 81/08 e Allegato XXI. Responsabilità civili e penali del preposto." 
                      },
                      { 
                        title: "Modulo 2: Ruolo e Responsabilità", 
                        content: "Compiti di vigilanza e controllo. Gestione della comunicazione con la squadra e il datore di lavoro." 
                      },
                      { 
                        title: "Modulo 3: Organizzazione delle Attività", 
                        content: "Pianificazione del lavoro su fune. Scelta dei sistemi di accesso e posizionamento. Gestione logistica." 
                      },
                      { 
                        title: "Modulo 4: Analisi dei Rischi", 
                        content: "Valutazione dei rischi ambientali e operativi. Misure di prevenzione e protezione collettiva." 
                      },
                      { 
                        title: "Modulo 5: Verifica DPI e Attrezzature", 
                        content: "Procedure di controllo pre-operativo. Verifica dell'idoneità e della corretta manutenzione." 
                      },
                      { 
                        title: "Modulo 6: Sistemi di Sicurezza e Ancoraggi", 
                        content: "Supervisione del montaggio degli ancoraggi. Verifica della catena di assicurazione." 
                      },
                      { 
                        title: "Modulo 7: Gestione Emergenze", 
                        content: "Coordinamento delle procedure di soccorso. Gestione del panico e primo intervento." 
                      },
                      { 
                        title: "Modulo 8: Esercitazioni Pratiche", 
                        content: "Simulazioni di coordinamento operativo e gestione di scenari critici su strutture dedicate." 
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
                      <p className="text-white font-bold">8 ore</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                      <Users className="w-5 h-5 text-brand" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs uppercase font-bold tracking-wider">Destinatari</p>
                      <p className="text-white font-bold text-sm">Preposti / Capisquadra</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                      <Scale className="w-5 h-5 text-brand" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs uppercase font-bold tracking-wider">Normativa</p>
                      <p className="text-white font-bold text-sm">D.Lgs 81/08</p>
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
                  L'attestato rilasciato certifica l'abilitazione al ruolo di preposto per lavori su fune ai sensi dell'art. 116 e Allegato XXI del D.Lgs. 81/08.
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
              { title: "Lavori su Funi base", desc: "Corso 32 ore", view: 'corso-lavori-su-funi', icon: Anchor },
              { title: "Aggiornamento Funi", desc: "Corso 8 ore", view: 'aggiornamento-lavori-su-funi', icon: Clock },
              { title: "DPI III Categoria", desc: "Lavori in Quota - 8 ore", view: 'corso-dpi-terza-categoria-lavori-quota', icon: ShieldCheck },
              { title: "Spazi Confinati", desc: "Corso base 12 ore", view: 'corso-spazi-confinati', icon: AlertTriangle },
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

export default CorsoPrepostoLavoriSuFuniPage;
