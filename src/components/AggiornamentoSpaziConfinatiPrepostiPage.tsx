import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Clock, BookOpen, Euro, CheckCircle2, Users, FileText, ChevronRight, MessageSquare, ShieldCheck, GraduationCap, HeartPulse, Scale, Truck, MapPin, AlertTriangle } from 'lucide-react';

interface AggiornamentoSpaziConfinatiPrepostiPageProps {
  onNavigate: (view: any) => void;
}

const AggiornamentoSpaziConfinatiPrepostiPage: React.FC<AggiornamentoSpaziConfinatiPrepostiPageProps> = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Aggiornamento Spazi Confinati Avanzato Preposti 8 ore - Formazione Obbligatoria | Aliseo Academy";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Corso di aggiornamento obbligatorio (8 ore) per preposti che coordinano attività in spazi confinati o sospetti di inquinamento. Formazione on-site in tutta Italia.");
    }
  }, []);

  const mailtoLink = "mailto:commerciale@aliseogroup.it?subject=Richiesta%20informazioni%20aggiornamento%20Spazi%20Confinati%20Preposti&body=Buongiorno%2C%0A%0ASono%20interessato%20al%20corso%20di%20Aggiornamento%20Attivit%C3%A0%20in%20Spazi%20Confinati%20Avanzato%20%E2%80%93%20Preposti%20(8%20ore).%0APotrei%20avere%20maggiori%20informazioni%20su%20modalit%C3%A0%2C%20prossime%20date%20e%20costi%3F%0A%0AGrazie.";

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
              Aggiornamento <span className="text-brand text-nowrap">Spazi Confinati Avanzato</span> <span className="text-brand">per Preposti – 8 ore</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-400 leading-relaxed mb-8"
            >
              Corso di aggiornamento obbligatorio per preposti che coordinano attività in ambienti confinati o sospetti di inquinamento, secondo D.Lgs. 81/08, D.P.R. 177/2011 e Accordo Stato-Regioni.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col gap-6"
            >
              <div>
                <p className="text-slate-400 text-sm mb-3 font-medium">
                  Richiedi informazioni per organizzare l'aggiornamento avanzato presso la tua azienda.
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
                    L'<strong>aggiornamento avanzato per preposti in spazi confinati</strong> è un percorso formativo cruciale per chi ricopre ruoli di responsabilità e coordinamento in ambienti ad alto rischio. La complessità normativa e tecnica del <strong>D.P.R. 177/2011</strong> impone ai preposti una conoscenza approfondita non solo dei rischi operativi, ma anche delle dinamiche organizzative e di vigilanza necessarie per prevenire infortuni gravi.
                  </p>
                  <p>
                    Il corso di 8 ore mira a consolidare le competenze di supervisione, focalizzandosi sulla corretta applicazione delle procedure di lavoro e sulla gestione del personale operativo. Il preposto deve essere in grado di verificare costantemente l'adeguatezza delle misure di prevenzione, il corretto utilizzo dei DPI di III categoria e l'efficacia dei sistemi di monitoraggio atmosferico.
                  </p>
                  <p>
                    In conformità con il <strong>D.Lgs 81/08</strong> e il nuovo <strong>Accordo Stato-Regioni</strong>, l'aggiornamento affronta le criticità tipiche del coordinamento: dalla pianificazione degli accessi alla gestione delle interferenze, fino alla supervisione delle procedure di emergenza. La sicurezza in spazi confinati non ammette errori di valutazione, e il ruolo del preposto è il primo baluardo contro il rischio di incidenti collettivi.
                  </p>
                  <p>
                    Aliseo Academy offre soluzioni di <strong>formazione on-site in tutta Italia</strong>, portando l'aggiornamento direttamente presso la vostra sede. Questo permette di analizzare i rischi specifici dei vostri impianti e di calibrare le procedure di coordinamento sulle reali necessità operative della vostra azienda, garantendo un impatto immediato sulla sicurezza dei lavoratori.
                  </p>
                  <p>
                    Per un addestramento ancora più efficace, il nostro <strong>Safety Truck Aliseo</strong> può essere impiegato per simulazioni pratiche di supervisione. Il preposto può così esercitarsi nel coordinamento di una squadra durante manovre di accesso e recupero in un ambiente controllato ma estremamente realistico, migliorando la capacità di reazione e di comando in situazioni di stress.
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
                    <p className="text-slate-600 leading-relaxed mb-4">
                      Il corso è specificamente progettato per figure con responsabilità di vigilanza:
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {[
                        "Preposti alla sicurezza",
                        "Capisquadra operativi",
                        "Responsabili di cantiere",
                        "Supervisori di attività in spazi confinati",
                        "Responsabili operativi",
                        "Coordinatori della sicurezza"
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
                      "Aggiornare competenze di coordinamento",
                      "Migliorare la gestione operativa",
                      "Verificare le procedure di sicurezza",
                      "Rafforzare la gestione delle emergenze",
                      "Controllare l'utilizzo corretto dei DPI",
                      "Affrontare criticità organizzative"
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
                        title: "Modulo 1: Aggiornamenti Normativi e Responsabilità", 
                        content: "Evoluzione della normativa (D.Lgs. 81/08, DPR 177/11). Analisi approfondita delle responsabilità civili e penali del preposto." 
                      },
                      { 
                        title: "Modulo 2: Analisi dei Rischi Avanzata", 
                        content: "Metodologie di valutazione dei rischi specifici. Identificazione di pericoli latenti e gestione delle atmosfere pericolose." 
                      },
                      { 
                        title: "Modulo 3: Procedure Operative e Supervisione", 
                        content: "Organizzazione del lavoro, sistemi di autorizzazione (permessi di lavoro), coordinamento delle squadre e vigilanza attiva." 
                      },
                      { 
                        title: "Modulo 4: Monitoraggio e Strumentazione", 
                        content: "Tecniche avanzate di monitoraggio dell'atmosfera. Interpretazione dei dati dei rilevatori gas e procedure di allarme." 
                      },
                      { 
                        title: "Modulo 5: Gestione Emergenze e Recupero", 
                        content: "Pianificazione del soccorso, procedure di evacuazione e recupero infortunato. Coordinamento con i soccorsi esterni." 
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
                      <p className="text-white font-bold">8 ore</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                      <Users className="w-5 h-5 text-brand" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs uppercase font-bold tracking-wider">Destinatari</p>
                      <p className="text-white font-bold text-sm">Preposti e Supervisori</p>
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
                  Validità
                </h4>
                <p className="text-sm text-slate-600">
                  L'aggiornamento ha validità periodica secondo quanto stabilito dall'Accordo Stato-Regioni. Al termine viene rilasciato attestato di frequenza specifico per preposti.
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
              { title: "Spazi Confinati base", desc: "Corso 12 ore", view: 'corso-spazi-confinati', icon: AlertTriangle },
              { title: "Spazi Confinati Preposti", desc: "Corso 16 ore", view: 'corso-spazi-confinati-preposti', icon: Users },
              { title: "Aggiornamento Spazi Confinati", desc: "Corso 4 ore", view: 'aggiornamento-spazi-confinati', icon: Clock },
              { title: "Primo Soccorso", desc: "Gruppo A - 16 ore", view: 'corso-primo-soccorso-gruppo-a', icon: HeartPulse },
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

export default AggiornamentoSpaziConfinatiPrepostiPage;
