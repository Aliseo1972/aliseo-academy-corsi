import React, { useEffect } from 'react';
import DeliveryMethods from './DeliveryMethods';
import { motion } from 'motion/react';
import { Clock, BookOpen, Euro, CheckCircle2, Users, FileText, ChevronRight, MessageSquare, ShieldCheck, GraduationCap, HeartPulse, Scale, Truck, MapPin, AlertTriangle } from 'lucide-react';

interface CorsoDPITerzaCategoriaLavoriQuotaPageProps {
  onNavigate: (view: any) => void;
}

const CorsoDPITerzaCategoriaLavoriQuotaPage: React.FC<CorsoDPITerzaCategoriaLavoriQuotaPageProps> = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Corso DPI III Categoria per Lavori in Quota 8 ore - Formazione Obbligatoria | Aliseo Academy";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Corso DPI III categoria per lavori in quota (8 ore) obbligatorio per lavoratori a rischio caduta dall'alto. Formazione on-site in tutta Italia con Aliseo Academy.");
    }
  }, []);

  const mailtoLink = "mailto:commerciale@aliseogroup.it?subject=Richiesta%20informazioni%20corso%20DPI%20III%20Categoria%20Lavori%20in%20Quota&body=Buongiorno%2C%0A%0ASono%20interessato%20al%20corso%20DPI%20III%20Categoria%20per%20Lavori%20in%20Quota%20(8%20ore).%0APotrei%20avere%20maggiori%20informazioni%20su%20modalit%C3%A0%2C%20prossime%20date%20e%20costi%3F%0A%0AGrazie.";

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
              Corso DPI III Categoria <span className="text-brand">per Lavori in Quota – 8 ore</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-400 leading-relaxed mb-8"
            >
              Formazione obbligatoria per lavoratori che utilizzano dispositivi di protezione individuale di terza categoria per lavori in quota, secondo il D.Lgs. 81/08.
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
                  DPI III Categoria e Lavori in Quota: Sicurezza e Obblighi
                </h2>
                <div className="text-slate-600 leading-relaxed space-y-6 text-lg">
                  <p>
                    I <strong>lavori in quota</strong> rappresentano una delle attività a più alto rischio nel settore della sicurezza sul lavoro. Secondo il <strong>D.Lgs 81/08</strong>, si definisce lavoro in quota qualsiasi attività che esponga il lavoratore al rischio di caduta da una quota posta ad altezza superiore a 2 metri rispetto ad un piano stabile. Per prevenire infortuni gravi, è obbligatorio l'utilizzo di <strong>DPI di III categoria</strong> (Dispositivi di Protezione Individuale di progettazione complessa destinati a salvaguardare da rischi di morte o di lesioni gravi e di carattere permanente).
                  </p>
                  <p>
                    Il <strong>corso DPI III categoria lavori in quota</strong> è un adempimento normativo essenziale per tutti i lavoratori che operano in altezza. La formazione non si limita alla teoria, ma include un addestramento pratico rigoroso sull'uso corretto di imbracature, cordini, assorbitori di energia, connettori e sistemi di ancoraggio. Un utilizzo errato di questi dispositivi può annullarne l'efficacia, rendendo vano l'investimento in sicurezza.
                  </p>
                  <p>
                    Durante il percorso formativo di 8 ore, Aliseo Academy approfondisce la classificazione dei DPI, le procedure operative di sicurezza e la gestione delle emergenze, inclusi i protocolli di recupero dell'operatore sospeso. I nostri docenti esperti guidano i partecipanti nell'apprendimento delle tecniche di ancoraggio e nell'ispezione pre-uso dei dispositivi, garantendo che ogni lavoratore sia in grado di operare in totale autonomia e sicurezza.
                  </p>
                  <p>
                    Affidarsi ad Aliseo Academy significa scegliere un partner che porta la formazione direttamente nella tua azienda. Grazie alla nostra presenza in <strong>tutta Italia</strong>, organizziamo corsi <strong>on-site</strong> personalizzati sulle specifiche esigenze del tuo cantiere o stabilimento. Questo approccio permette di contestualizzare l'addestramento sugli impianti e sulle attrezzature realmente utilizzate dai dipendenti.
                  </p>
                  <p>
                    Per massimizzare l'efficacia della parte pratica, mettiamo a disposizione il <strong>Safety Truck Aliseo</strong>. Questa unità mobile all'avanguardia è dotata di strutture certificate per simulare lavori in quota e manovre di recupero in totale sicurezza, direttamente nel piazzale della tua azienda. È la soluzione definitiva per un addestramento pratico di alto livello senza necessità di trasferte.
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
                      Il corso è destinato a tutto il personale che opera ad altezze superiori a 2 metri:
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {[
                        "Lavoratori che operano in quota",
                        "Operatori su tetti e coperture",
                        "Addetti al montaggio ponteggi",
                        "Personale manutentivo su impianti",
                        "Installatori e antennisti",
                        "Lattonieri e carpentieri"
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
                      "Utilizzare correttamente i DPI anticaduta",
                      "Riconoscere i rischi nei lavori in quota",
                      "Applicare procedure di sicurezza",
                      "Prevenire cadute dall'alto",
                      "Gestire situazioni di emergenza",
                      "Eseguire ispezioni pre-uso dei DPI"
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
                        content: "Quadro normativo (D.Lgs. 81/08). Obblighi del datore di lavoro e del lavoratore. Definizioni di lavoro in quota." 
                      },
                      { 
                        title: "Modulo 2: Classificazione e Scelta dei DPI", 
                        content: "Categorie dei DPI. Requisiti dei DPI di III categoria. Criteri di scelta e compatibilità tra dispositivi." 
                      },
                      { 
                        title: "Modulo 3: Sistemi Anticaduta e Ancoraggi", 
                        content: "Sistemi di posizionamento, trattenuta e arresto caduta. Tipologie di ancoraggi (EN 795) e linee vita." 
                      },
                      { 
                        title: "Modulo 4: Procedure Operative", 
                        content: "Pianificazione del lavoro in quota. Accesso e posizionamento. Fattore di caduta e tirante d'aria." 
                      },
                      { 
                        title: "Modulo 5: Gestione Emergenze", 
                        content: "Sindrome da sospensione. Procedure di soccorso e recupero dell'operatore. Kit di salvataggio." 
                      },
                      { 
                        title: "Modulo 6: Esercitazioni Pratiche", 
                        content: "Vestizione e regolazione imbracatura. Prove di salita, discesa e posizionamento. Simulazione di recupero." 
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
                      <p className="text-white font-bold text-sm">Lavoratori in Quota</p>
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
                  L'attestato rilasciato certifica l'avvenuta formazione e addestramento all'uso dei DPI di III categoria per lavori in quota, obbligatorio per legge.
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
              { title: "Antincendio L2", desc: "Rischio Medio - 8 ore", view: 'antincendio-l2', icon: ShieldCheck },
              { title: "RLS", desc: "Rappresentante Lavoratori", view: 'corso-rls-rappresentante-lavoratori-sicurezza', icon: Users },
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

export default CorsoDPITerzaCategoriaLavoriQuotaPage;
