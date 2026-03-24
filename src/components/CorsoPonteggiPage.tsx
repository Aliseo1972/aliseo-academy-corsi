import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Clock, BookOpen, Euro, CheckCircle2, Users, FileText, ChevronRight, ShieldCheck, GraduationCap, Scale, Truck, MapPin, AlertTriangle, Construction } from 'lucide-react';

interface CorsoPonteggiPageProps {
  onNavigate: (view: any) => void;
}

const CorsoPonteggiPage: React.FC<CorsoPonteggiPageProps> = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Corso Ponteggi 28 ore - Addetti Montaggio e Smontaggio | Aliseo Academy";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Corso Ponteggi (28 ore) obbligatorio ai sensi del D.Lgs. 81/08 per addetti al montaggio, smontaggio e trasformazione. Formazione teorica e pratica in tutta Italia.");
    }
  }, []);

  const mailtoLink = "mailto:commerciale@aliseogroup.it?subject=Richiesta%20informazioni%20Corso%20Ponteggi%2028%20ore&body=Buongiorno%2C%0A%0ASono%20interessato%20al%20Corso%20Ponteggi%20(28%20ore).%0APotrei%20avere%20maggiori%20informazioni%20su%20modalit%C3%A0%2C%20prossime%20date%20e%20costi%3F%0A%0AGrazie.";

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
              Corso <span className="text-brand">Ponteggi – 28 ore</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-400 leading-relaxed mb-8"
            >
              Formazione obbligatoria per addetti al montaggio, smontaggio e trasformazione dei ponteggi, secondo il D.Lgs. 81/08.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col gap-6"
            >
              <div>
                <p className="text-slate-400 text-sm mb-3 font-medium">
                  Assicura la massima sicurezza in cantiere con la formazione professionale Aliseo.
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
                  <span className="text-white font-bold">28 ore</span>
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
                  La Sicurezza nel Montaggio e Smontaggio Ponteggi
                </h2>
                <div className="text-slate-600 leading-relaxed space-y-6 text-lg">
                  <p>
                    Il <strong>corso ponteggi</strong> è un pilastro fondamentale della sicurezza nei cantieri edili e industriali. Ai sensi del <strong>D.Lgs. 81/08 (art. 136 e Allegato XXI)</strong>, tutti i lavoratori addetti al montaggio, allo smontaggio o alla trasformazione di ponteggi metallici devono ricevere una formazione specifica e un addestramento pratico adeguato.
                  </p>
                  <p>
                    I lavori in quota rappresentano una delle principali cause di infortuni gravi nel settore delle costruzioni. L'utilizzo di ponteggi, se non correttamente installati, può comportare rischi elevatissimi di caduta dall'alto o di crollo della struttura stessa. Per questo motivo, la normativa impone un percorso formativo rigoroso che unisca la conoscenza teorica delle strutture alla padronanza pratica delle tecniche di montaggio.
                  </p>
                  <p>
                    Il corso di 28 ore offerto da Aliseo Academy copre ogni aspetto critico: dalla lettura del <strong>Pi.M.U.S. (Piano di Montaggio, Uso e Smontaggio)</strong> alla verifica degli ancoraggi, fino all'utilizzo corretto dei DPI di III categoria. La formazione non si limita a spiegare "come" montare un ponteggio, ma si concentra sul "perché" ogni procedura sia vitale per la stabilità dell'opera e la sicurezza degli operatori.
                  </p>
                  <p>
                    Grazie alla nostra presenza in <strong>tutta Italia</strong>, Aliseo Academy è in grado di erogare questo corso direttamente <strong>presso la tua sede</strong> o cantiere, adattando le esercitazioni pratiche alle specifiche tipologie di ponteggio utilizzate dalla tua azienda. Questo approccio contestualizzato garantisce che l'apprendimento sia immediatamente applicabile alla realtà operativa quotidiana.
                  </p>
                  <p>
                    Per le aziende che necessitano di standard formativi d'eccellenza, il nostro <strong>Safety Truck Aliseo</strong> rappresenta la soluzione ideale. Questa unità mobile attrezzata permette di svolgere sessioni di addestramento avanzato ovunque, portando un vero e proprio laboratorio di sicurezza direttamente sul campo, garantendo uniformità e qualità della formazione per tutto il personale.
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
                        Organizziamo corsi su tutto il territorio nazionale, garantendo flessibilità e tempestività.
                      </p>
                    </div>
                    <div className="space-y-4">
                      <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                        <Users className="w-6 h-6 text-brand" />
                      </div>
                      <h4 className="font-bold text-lg">Presso la tua sede</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        La formazione viene svolta direttamente nei tuoi spazi, riducendo i costi di trasferta per i dipendenti.
                      </p>
                    </div>
                    <div className="space-y-4">
                      <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                        <Truck className="w-6 h-6 text-brand" />
                      </div>
                      <h4 className="font-bold text-lg">Safety Truck</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        Un'aula e un campo prove mobile per un'esperienza formativa pratica e immersiva senza precedenti.
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
                    <p className="text-slate-600 leading-relaxed mb-4">
                      Il corso è destinato a tutto il personale che opera nel montaggio e smontaggio di strutture provvisionali:
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {[
                        "Lavoratori addetti al montaggio ponteggi",
                        "Operatori edili e carpentieri",
                        "Personale di cantiere",
                        "Artigiani e installatori",
                        "Manutentori industriali",
                        "Responsabili tecnici di cantiere"
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
                      "Operare in sicurezza sui ponteggi",
                      "Prevenire rischi nei lavori in quota",
                      "Montare e smontare correttamente le strutture",
                      "Utilizzare attrezzature e DPI specifici",
                      "Applicare procedure operative corrette",
                      "Saper leggere e applicare il Pi.M.U.S."
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
                        content: "Analisi del D.Lgs. 81/08. Obblighi del datore di lavoro, del preposto e dei lavoratori. Norme di buona tecnica." 
                      },
                      { 
                        title: "Modulo 2: Analisi dei Rischi", 
                        content: "Rischi di caduta dall'alto, caduta di materiali, urti e ribaltamento. Valutazione del rischio in cantiere." 
                      },
                      { 
                        title: "Modulo 3: Tipologie di Ponteggi", 
                        content: "Ponteggi a telai prefabbricati, a tubi e giunti, a montanti e traversi prefabbricati (multidirezionali)." 
                      },
                      { 
                        title: "Modulo 4: Il Pi.M.U.S.", 
                        content: "Struttura e contenuti del Piano di Montaggio, Uso e Smontaggio. Documentazione tecnica e autorizzazioni ministeriali." 
                      },
                      { 
                        title: "Modulo 5: DPI e Attrezzature", 
                        content: "Scelta e corretto utilizzo delle imbracature, cordini, assorbitori di energia e connettori. Manutenzione e verifica." 
                      },
                      { 
                        title: "Modulo 6: Tecniche Operative", 
                        content: "Sequenze di montaggio e smontaggio in sicurezza. Realizzazione di ancoraggi e verifiche di stabilità." 
                      },
                      { 
                        title: "Modulo 7: Esercitazioni Pratiche", 
                        content: "Montaggio e smontaggio di diverse tipologie di ponteggio. Simulazione di manovre di emergenza e soccorso." 
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
                      <p className="text-white font-bold">28 ore</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                      <Users className="w-5 h-5 text-brand" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs uppercase font-bold tracking-wider">Destinatari</p>
                      <p className="text-white font-bold text-sm">Addetti Montaggio Ponteggi</p>
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
                    Formazione obbligatoria in presenza
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
                  Al superamento del test finale verrà rilasciato l'attestato di abilitazione valido su tutto il territorio nazionale per il montaggio e smontaggio ponteggi.
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
              { title: "DPI III Categoria", desc: "Lavori in Quota - 8 ore", view: 'corso-dpi-terza-categoria-lavori-quota', icon: ShieldCheck },
              { title: "Lavori su Funi", desc: "Corso 32 ore", view: 'corso-lavori-su-funi', icon: Construction },
              { title: "Spazi Confinati", desc: "Corso 8 ore", view: 'corso-spazi-confinati', icon: AlertTriangle },
              { title: "Primo Soccorso", desc: "Gruppo A - 16 ore", view: 'corso-primo-soccorso-gruppo-a', icon: ShieldCheck },
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

export default CorsoPonteggiPage;
