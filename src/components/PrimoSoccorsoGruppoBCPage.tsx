import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Clock, BookOpen, Euro, CheckCircle2, Users, FileText, ChevronRight, MessageSquare, ShieldCheck, GraduationCap, HeartPulse, Scale, Truck, MapPin, Mail } from 'lucide-react';

interface PrimoSoccorsoGruppoBCPageProps {
  onNavigate: (view: any) => void;
}

const PrimoSoccorsoGruppoBCPage: React.FC<PrimoSoccorsoGruppoBCPageProps> = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Corso Primo Soccorso Gruppo B-C Aziendale - Formazione 12 ore | Aliseo Academy";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Corso primo soccorso aziendale Gruppo B-C (12 ore) obbligatorio per aziende a rischio medio-basso. Formazione presso sede cliente in tutta Italia.");
    }
  }, []);

  const mailtoLink = "mailto:commerciale@aliseogroup.it?subject=Richiesta%20informazioni%20corso%20Primo%20Soccorso%20Gruppo%20B-C&body=Buongiorno%2C%0A%0ASono%20interessato%20al%20corso%20Primo%20Soccorso%20Aziendale%20Gruppo%20B-C%20(12%20ore).%0APotrei%20avere%20maggiori%20informazioni%20su%20modalit%C3%A0%2C%20prossime%20date%20e%20costi%3F%0A%0AGrazie.";

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
              Sicurezza sul Lavoro - DM 388/2003
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6"
            >
              Corso Primo Soccorso <span className="text-brand">Aziendale Gruppo B-C</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-400 leading-relaxed mb-8"
            >
              Formazione obbligatoria per addetti al primo soccorso in aziende classificate nei Gruppi B e C secondo il D.Lgs 81/08.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col gap-6"
            >
              <div>
                <p className="text-slate-400 text-sm mb-3 font-medium">
                  Organizza il corso direttamente presso la tua azienda in tutta Italia.
                </p>
                <div className="flex flex-col gap-2">
                  <p className="text-brand text-xs font-bold uppercase tracking-wider">
                    Preventivi personalizzati entro 24 ore
                  </p>
                  <a 
                    href={mailtoLink}
                    className="px-8 py-4 bg-brand text-slate-900 font-black uppercase tracking-tight rounded-2xl hover:bg-brand-light transition-all flex items-center gap-2 group shadow-xl shadow-brand/20 w-fit"
                  >
                    Richiedi informazioni sul corso
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
                  Formazione Primo Soccorso Obbligatoria: Gruppo B e C
                </h2>
                <div className="text-slate-600 leading-relaxed space-y-6 text-lg">
                  <p>
                    Il <strong>corso primo soccorso aziende</strong> per i Gruppi B e C è un pilastro fondamentale della sicurezza sul lavoro in Italia. Aliseo Academy eroga questa <strong>formazione in presenza conforme D.Lgs 81/08</strong> e al <strong>DM 388/2003</strong> in <strong>tutta Italia</strong>, garantendo che ogni azienda possa formare i propri addetti con <strong>sessioni pratiche con docenti qualificati</strong> (medici e infermieri esperti).
                  </p>
                  <p>
                    La nostra offerta si distingue per la flessibilità: organizziamo la <strong>formazione presso sede cliente</strong> per minimizzare l'impatto sull'operatività aziendale. Inoltre, grazie al <strong>centro formativo mobile Aliseo</strong> (Safety Truck), possiamo portare un'aula didattica completa e attrezzata direttamente nel vostro piazzale, offrendo un ambiente ideale per l'addestramento pratico sulle manovre salvavita e l'uso dei presidi medici.
                  </p>
                  <p>
                    Il <strong>primo soccorso gruppo b-c aziende</strong> affronta tematiche cruciali come la rianimazione cardiopolmonare (RCP), la gestione delle ostruzioni delle vie aeree, il trattamento di ferite, ustioni e traumi, oltre alla corretta comunicazione con il sistema di emergenza (118/112). Aliseo Academy propone un percorso formativo che bilancia perfettamente la teoria con l'addestramento pratico, utilizzando manichini di ultima generazione e simulatori realistici.
                  </p>
                  <p>
                    Un vantaggio competitivo di Aliseo Academy è la flessibilità operativa. Offriamo la possibilità di svolgere la <strong>formazione presso la sede del cliente</strong>, eliminando i costi di trasferta per i dipendenti e permettendo di contestualizzare l'addestramento nell'ambiente di lavoro reale. Grazie alla nostra rete di docenti qualificati, garantiamo la copertura del servizio in <strong>tutta Italia</strong>, mantenendo standard qualitativi d'eccellenza da Nord a Sud.
                  </p>
                  <p>
                    Inoltre, per le aziende che necessitano di spazi attrezzati ma non dispongono di aule interne, Aliseo Academy mette a disposizione il proprio <strong>centro formativo mobile</strong> (Safety Truck). Questa unità speciale è un'aula didattica itinerante, completamente attrezzata per la formazione teorica e pratica, che può essere posizionata direttamente nel piazzale aziendale, offrendo una soluzione logistica imbattibile e un'esperienza formativa di alto impatto.
                  </p>
                </div>
              </article>

              {/* Strategic Block */}
              <section className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-black mb-6 uppercase tracking-tight">
                    Soluzioni Formative <span className="text-brand">Su Misura</span>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="space-y-4">
                      <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-brand" />
                      </div>
                      <h4 className="font-bold text-lg">Copertura Nazionale</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        Siamo presenti in tutta Italia. Organizziamo corsi per singole aziende o gruppi, garantendo uniformità didattica su tutto il territorio.
                      </p>
                    </div>
                    <div className="space-y-4">
                      <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                        <Users className="w-6 h-6 text-brand" />
                      </div>
                      <h4 className="font-bold text-lg">In-Company Training</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        Portiamo la formazione da te. I nostri istruttori si recano presso la tua sede per minimizzare l'impatto sull'operatività aziendale.
                      </p>
                    </div>
                    <div className="space-y-4">
                      <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                        <Truck className="w-6 h-6 text-brand" />
                      </div>
                      <h4 className="font-bold text-lg">Safety Truck Mobile</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        L'innovazione Aliseo: un'aula mobile attrezzata che arriva direttamente nel tuo piazzale per sessioni pratiche e teoriche.
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
                      Il corso è rivolto ai lavoratori designati dal datore di lavoro come addetti al primo soccorso in aziende appartenenti ai <strong>Gruppi B e C</strong>. 
                      <br /><br />
                      - <strong>Gruppo B</strong>: Aziende con 3 o più lavoratori che non rientrano nel Gruppo A.
                      <br />
                      - <strong>Gruppo C</strong>: Aziende con meno di 3 lavoratori che non rientrano nel Gruppo A.
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
                      "Riconoscere l'emergenza sanitaria",
                      "Attuare manovre di primo soccorso",
                      "Allertare i soccorsi professionali",
                      "Gestire i traumi in ambiente di lavoro",
                      "Prevenire complicanze post-infortunio",
                      "Conoscere i presidi medici aziendali"
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
                    Programma del Corso
                  </h3>
                  <div className="space-y-4">
                    {[
                      { 
                        title: "Modulo 1: Allertamento e Riconoscimento (4 ore)", 
                        content: "Sistema di emergenza sanitaria, allertamento del 118/112, riconoscimento dell'emergenza, accertamento delle condizioni dell'infortunato, funzioni vitali." 
                      },
                      { 
                        title: "Modulo 2: Interventi di Primo Soccorso (4 ore)", 
                        content: "Sostenimento delle funzioni vitali, massaggio cardiaco, respirazione artificiale, manovre di disostruzione, posizionamento dell'infortunato." 
                      },
                      { 
                        title: "Modulo 3: Traumi e Patologie Specifiche (4 ore)", 
                        content: "Emorragie, lussazioni, fratture, ustioni, shock, malori improvvisi, esercitazioni pratiche su manichino e simulazioni." 
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
                  Dettagli Corso
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
                      <p className="text-white font-bold text-sm">Addetti Primo Soccorso Gruppo B-C</p>
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
                    Supporto qualificato per la tua impresa
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
                  Aggiornamento
                </h4>
                <p className="text-sm text-slate-600">
                  La validità della formazione è di 3 anni. L'aggiornamento triennale obbligatorio ha una durata di 4 ore.
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
              { title: "Gruppo A", desc: "Corso base 16 ore", view: 'corso-primo-soccorso-gruppo-a', icon: HeartPulse },
              { title: "Aggiornamento B-C", desc: "Rinnovo triennale 4 ore", view: 'aggiornamento-ps-bc', icon: Clock },
              { title: "Corso RLS", desc: "Rappresentante Lavoratori", view: 'rls-page', icon: Users },
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

export default PrimoSoccorsoGruppoBCPage;
