import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Clock, BookOpen, Euro, CheckCircle2, Users, FileText, ChevronRight, MessageSquare, ShieldCheck, GraduationCap, HeartPulse, Scale, Truck, MapPin, Flame } from 'lucide-react';

interface AggiornamentoAPVRPageProps {
  onNavigate: (view: any) => void;
}

const AggiornamentoAPVRPage: React.FC<AggiornamentoAPVRPageProps> = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Aggiornamento Respirazione e Utilizzo Autorespiratore (APVR) - Formazione 4 ore | Aliseo Academy";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Corso di aggiornamento sull'utilizzo degli autorespiratori (APVR) (4 ore) in conformità al D.Lgs 81/08. Mantenimento dell'addestramento per i DPI di III categoria.");
    }
  }, []);

  const mailtoLink = "mailto:commerciale@aliseogroup.it?subject=Richiesta%20informazioni%20Aggiornamento%20APVR&body=Buongiorno%2C%0A%0ASono%20interessato%20all'Aggiornamento%20Respirazione%20e%20Utilizzo%20dell%E2%80%99Autorespiratore%20(APVR)%20-%204%20ore.%0APotrei%20avere%20maggiori%20informazioni%20su%20modalit%C3%A0%2C%20prossime%20date%20e%20costi%3F%0A%0AGrazie.";

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
              DPI III Categoria - D.Lgs 81/08
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6"
            >
              Aggiornamento <span className="text-brand">Utilizzo APVR</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-400 leading-relaxed mb-8"
            >
              Corso di aggiornamento obbligatorio per mantenere l'addestramento all'uso degli autorespiratori in ambienti a rischio.
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
                    Richiedi informazioni sul corso
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
                  <span className="text-white font-bold text-sm">D.Lgs 81/08 - DPI III Cat</span>
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
                  <FileText className="w-8 h-8 text-brand" />
                  Descrizione del Corso
                </h2>
                <div className="text-slate-600 leading-relaxed space-y-4">
                  <p>
                    Il <strong>Corso di Aggiornamento Respirazione e Utilizzo dell’Autorespiratore (APVR) – 4 ore</strong> è rivolto ai lavoratori che utilizzano dispositivi di protezione delle vie respiratorie, in particolare autorespiratori, durante attività svolte in ambienti con atmosfere potenzialmente pericolose o carenza di ossigeno.
                  </p>
                  <p>
                    La formazione rientra tra gli obblighi previsti dal <strong>Decreto Legislativo 81/2008</strong>, in particolare dall’art. 77 relativo all’uso dei Dispositivi di Protezione Individuale (DPI), che stabilisce la necessità di fornire ai lavoratori formazione e addestramento adeguati e aggiornati per l’utilizzo dei <strong>DPI di III categoria</strong>.
                  </p>
                  <p>
                    Il corso di aggiornamento ha l’obiettivo di mantenere e rafforzare le competenze operative degli operatori, attraverso il ripasso delle procedure di utilizzo degli autorespiratori, la verifica delle condizioni di sicurezza e l’addestramento pratico all’impiego dei dispositivi di protezione delle vie respiratorie.
                  </p>
                  <p>
                    Durante la formazione vengono inoltre analizzati i principali rischi legati alla presenza di gas tossici, vapori pericolosi o atmosfere contaminate, con particolare attenzione alle procedure di sicurezza e alle modalità di intervento in caso di emergenza.
                  </p>
                </div>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                    <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <Users className="w-6 h-6 text-brand" />
                      Destinatari
                    </h3>
                    <p className="text-slate-600">
                      Lavoratori già formati che utilizzano autorespiratori o dispositivi di protezione delle vie respiratorie durante attività svolte in ambienti a rischio.
                    </p>
                  </div>
                  <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                    <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <GraduationCap className="w-6 h-6 text-brand" />
                      Obiettivi
                    </h3>
                    <p className="text-slate-600">
                      Mantenere e rafforzare le competenze operative e l'addestramento pratico all'uso degli autorespiratori.
                    </p>
                  </div>
                </div>

                <h2 className="text-3xl font-black text-slate-900 mt-16 mb-8 flex items-center gap-3">
                  <BookOpen className="w-8 h-8 text-brand" />
                  Programma Didattico
                </h2>
                <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm">
                  <ul className="divide-y divide-slate-200">
                    {[
                      "Aggiornamento normativo sull’utilizzo dei DPI",
                      "Ripasso dei rischi legati alle atmosfere pericolose",
                      "Tipologie di dispositivi di protezione delle vie respiratorie",
                      "Verifica e controllo degli autorespiratori (APVR)",
                      "Procedure di utilizzo e manutenzione dei dispositivi",
                      "Vestizione e controllo funzionale dell’autorespiratore",
                      "Procedure operative in ambienti a rischio",
                      "Gestione delle emergenze",
                      "Esercitazioni pratiche"
                    ].map((item, index) => (
                      <li key={index} className="px-6 py-4 flex items-start gap-4 hover:bg-slate-50 transition-colors">
                        <CheckCircle2 className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                        <span className="text-slate-700 font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>

              {/* Delivery Methods */}
              <div className="bg-slate-900 rounded-[3rem] p-8 md:p-12 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand/10 rounded-full blur-3xl -mr-32 -mt-32" />
                <div className="relative z-10">
                  <h2 className="text-3xl font-black mb-8">Modalità di Erogazione</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="space-y-4">
                      <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-brand" />
                      </div>
                      <h3 className="text-xl font-bold">Centro Formativo</h3>
                      <p className="text-slate-400 text-sm">Presso le nostre sedi attrezzate a Siracusa e provincia.</p>
                    </div>
                    <div className="space-y-4">
                      <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                        <Users className="w-6 h-6 text-brand" />
                      </div>
                      <h3 className="text-xl font-bold">Presso il Cliente</h3>
                      <p className="text-slate-400 text-sm">Organizziamo sessioni formative direttamente nella tua azienda in tutta Italia.</p>
                    </div>
                    <div className="space-y-4">
                      <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                        <Truck className="w-6 h-6 text-brand" />
                      </div>
                      <h3 className="text-xl font-bold">Safety Truck</h3>
                      <p className="text-slate-400 text-sm">L'unico centro mobile in Italia per addestramento pratico ovunque tu sia.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-8">
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
                      <p className="text-white font-bold">4 Ore</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-5 h-5 text-brand" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs uppercase font-bold tracking-wider">Validità</p>
                      <p className="text-white font-bold text-sm">D.Lgs 81/08</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                      <GraduationCap className="w-5 h-5 text-brand" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs uppercase font-bold tracking-wider">Certificazione</p>
                      <p className="text-white font-bold text-sm">Attestato di Aggiornamento</p>
                    </div>
                  </div>
                </div>
                <div className="mt-10 pt-8 border-t border-white/10">
                  <p className="text-slate-400 text-sm mb-1 text-center">
                    Ti rispondiamo entro 24 ore
                  </p>
                  <p className="text-white/60 text-[10px] mb-4 text-center uppercase tracking-widest">
                    Formazione certificata per il tuo team
                  </p>
                  <a 
                    href={mailtoLink}
                    className="block w-full py-4 bg-brand text-slate-900 text-center font-black uppercase tracking-tight rounded-2xl hover:bg-brand-light transition-all shadow-lg shadow-brand/20"
                  >
                    Richiedi informazioni sul corso
                  </a>
                  <p className="text-white/40 text-[10px] text-center mt-4 uppercase tracking-widest">
                    commerciale@aliseogroup.it
                  </p>
                </div>
              </div>

              {/* Related Courses */}
              <div className="bg-brand/5 p-8 rounded-[2.5rem] border border-brand/10">
                <h3 className="text-xl font-black text-slate-900 mb-6">Corsi Correlati</h3>
                <div className="space-y-4">
                  <button 
                    onClick={() => onNavigate('corso-apvr')}
                    className="w-full p-4 bg-white rounded-2xl border border-slate-100 hover:border-brand/30 transition-all text-left group"
                  >
                    <p className="text-xs text-brand font-bold uppercase mb-1">DPI III Cat</p>
                    <p className="text-slate-900 font-bold group-hover:text-brand transition-colors">Corso APVR</p>
                  </button>
                  <button 
                    onClick={() => onNavigate('corso-spazi-confinati')}
                    className="w-full p-4 bg-white rounded-2xl border border-slate-100 hover:border-brand/30 transition-all text-left group"
                  >
                    <p className="text-xs text-brand font-bold uppercase mb-1">Ambienti a Rischio</p>
                    <p className="text-slate-900 font-bold group-hover:text-brand transition-colors">Corso Spazi Confinati</p>
                  </button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Potrebbero interessarti anche */}
      <section className="py-16 border-t border-slate-100 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black text-slate-900 mb-8 flex items-center gap-3">
            <div className="w-2 h-6 bg-brand rounded-full" />
            Potrebbero interessarti anche
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Corso APVR", desc: "Formazione 8 ore", view: 'corso-apvr', icon: Clock },
              { title: "Spazi Confinati", desc: "Formazione 8 ore", view: 'corso-spazi-confinati', icon: ShieldCheck },
              { title: "DPI 3° Categoria", desc: "Lavori in Quota", view: 'corso-dpi-terza-categoria-lavori-quota', icon: GraduationCap },
              { title: "Lavori su Funi", desc: "Moduli A/B", view: 'corso-lavori-su-funi', icon: ShieldCheck },
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

export default AggiornamentoAPVRPage;
