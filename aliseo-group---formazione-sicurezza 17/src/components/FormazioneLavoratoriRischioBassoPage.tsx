import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Clock, BookOpen, CheckCircle2, Users, FileText, ChevronRight, ShieldCheck, GraduationCap, Scale, Monitor, Shield, ArrowRight } from 'lucide-react';
import OnlineLearningBenefits from './OnlineLearningBenefits';

interface FormazioneLavoratoriRischioBassoPageProps {
  onNavigate: (view: any) => void;
}

const FormazioneLavoratoriRischioBassoPage: React.FC<FormazioneLavoratoriRischioBassoPageProps> = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Corso Formazione Lavoratori Rischio Basso | Aliseo Academy";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Corso formazione lavoratori rischio basso obbligatorio secondo D.Lgs 81/08. Formazione online in e-learning con Aliseo Academy.");
    }
  }, []);

  const mailtoLink = "mailto:commerciale@aliseogroup.it?subject=Richiesta%20informazioni%20corso%20Formazione%20Lavoratori%20Rischio%20Basso&body=Buongiorno%2C%0A%0ASono%20interessato%20al%20Corso%20Formazione%20Lavoratori%20Rischio%20Basso%20(4%20ore).%0APotrei%20avere%20maggiori%20informazioni%20su%20modalit%C3%A0%2C%20costi%20e%20attivazione%20online%3F%0A%0AGrazie.";

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
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-6"
            >
              <ShieldCheck className="w-4 h-4" />
              Formazione Obbligatoria D.Lgs 81/08
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6"
            >
              Corso Formazione <span className="text-brand">Lavoratori Rischio Basso</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-400 leading-relaxed mb-8"
            >
              Percorso formativo specifico di 4 ore per dipendenti di aziende a basso rischio. 
              Disponibile interamente online in modalità e-learning.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col gap-6"
            >
              <div>
                <p className="text-slate-400 text-sm mb-3 font-medium">
                  Validità nazionale e attestato immediato a norma di legge.
                </p>
                <div className="flex flex-col gap-2">
                  <p className="text-brand text-xs font-bold uppercase tracking-wider">
                    Ti rispondiamo entro 24 ore
                  </p>
                  <a 
                    href={mailtoLink}
                    className="px-8 py-4 bg-brand text-slate-900 font-black uppercase tracking-tight rounded-2xl hover:bg-brand-light transition-all flex items-center gap-2 group shadow-xl shadow-brand/20 w-fit"
                  >
                    Ricevi informazioni sul corso
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
                  <span className="text-white font-bold text-sm">Accordo Stato-Regioni 2011</span>
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
                  Sicurezza sul Lavoro: Formazione Lavoratori Rischio Basso
                </h2>
                <div className="text-slate-600 leading-relaxed space-y-6 text-lg">
                  <p>
                    Il <strong>Corso Formazione Lavoratori Rischio Basso</strong> rappresenta un pilastro fondamentale della sicurezza sul lavoro in Italia. Ai sensi del <strong>D.Lgs 81/08</strong>, ogni lavoratore deve ricevere una formazione adeguata e specifica in relazione ai rischi presenti nel proprio ambiente di lavoro. Per le aziende classificate a rischio basso, come uffici, studi professionali, negozi e attività di servizi, il percorso formativo è studiato per fornire le competenze necessarie a prevenire infortuni e malattie professionali senza appesantire eccessivamente l'operatività aziendale.
                  </p>
                  <p>
                    La <strong>formazione lavoratori rischio basso</strong> non è solo un obbligo di legge, ma un'opportunità per migliorare la cultura della sicurezza all'interno dell'organizzazione. Un lavoratore consapevole è un lavoratore più sicuro e produttivo. Il <strong>corso sicurezza lavoratori rischio basso</strong> offerto da Aliseo Academy è progettato per essere estremamente pratico e focalizzato sui rischi reali che si incontrano quotidianamente in questi settori, come l'uso dei videoterminali, la postura corretta, lo stress lavoro-correlato e la gestione delle emergenze di base.
                  </p>
                  <p>
                    Il <strong>corso lavoratori D.Lgs 81/08</strong> per il rischio basso ha una durata di 4 ore, che si aggiungono alle 4 ore di formazione generale obbligatoria per tutti i settori. Questo modulo specifico approfondisce le tematiche legate all'ambiente di lavoro "ufficio" o "servizi", analizzando i pericoli meno evidenti ma comunque impattanti sulla salute a lungo termine. La normativa di riferimento, l'Accordo Stato-Regioni del 21/12/2011, definisce chiaramente i contenuti e le modalità di erogazione di questa formazione.
                  </p>
                  <p>
                    Scegliere la modalità e-learning per la formazione lavoratori rischio basso offre numerosi vantaggi. Aliseo Academy mette a disposizione una piattaforma online moderna e intuitiva, accessibile 24 ore su 24, 7 giorni su 7. Questo permette ai lavoratori di seguire le lezioni nei momenti di minor carico lavorativo, garantendo la massima flessibilità sia per l'azienda che per il dipendente. La validità dell'attestato rilasciato è garantita su tutto il territorio nazionale, rispettando rigorosamente i requisiti previsti dalla legge.
                  </p>
                  <p>
                    Investire nella formazione con Aliseo Academy significa scegliere la qualità e l'affidabilità di un partner esperto. La nostra missione è rendere la sicurezza sul lavoro un valore condiviso, accessibile e semplice da gestire grazie alle tecnologie digitali più avanzate. Ogni modulo è curato da esperti del settore per assicurare un apprendimento efficace e duraturo.
                  </p>
                </div>
              </article>

              <OnlineLearningBenefits />

              {/* Detailed Sections */}
              <div className="space-y-12">
                <section>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <div className="w-1.5 h-6 bg-brand rounded-full" />
                    A chi è rivolto
                  </h3>
                  <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8">
                    <p className="text-slate-600 leading-relaxed">
                      Il corso è destinato a tutti i lavoratori, sia neoassunti che già in forza, impiegati in aziende la cui classe di rischio ATECO è definita "bassa". Tra queste rientrano uffici, banche, assicurazioni, commercio al dettaglio, attività artigianali non produttive e servizi alla persona. È fondamentale che la formazione avvenga all'inizio del rapporto di lavoro o in occasione di cambiamenti di mansione.
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
                      "Conoscenza dei rischi specifici del settore",
                      "Apprendimento delle procedure di prevenzione",
                      "Sensibilizzazione sui comportamenti sicuri",
                      "Conformità normativa D.Lgs 81/08",
                      "Identificazione dei pericoli in ufficio",
                      "Gestione corretta delle emergenze"
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
                    Programma dettagliato
                  </h3>
                  <div className="space-y-4">
                    {[
                      { 
                        title: "Modulo 1: Rischi dell'ambiente di lavoro", 
                        content: "Analisi di illuminazione, microclima, ergonomia e spazi di lavoro comuni." 
                      },
                      { 
                        title: "Modulo 2: Videoterminali e Postura", 
                        content: "Corretto utilizzo del PC, regolazione della sedia e prevenzione disturbi muscolo-scheletrici." 
                      },
                      { 
                        title: "Modulo 3: Rischi Elettrici e Incendio", 
                        content: "Prevenzione dei rischi elettrici di base e comportamento in caso di principio di incendio." 
                      },
                      { 
                        title: "Modulo 4: Stress e Benessere", 
                        content: "Gestione dello stress lavoro-correlato e promozione del benessere organizzativo." 
                      }
                    ].map((item, i) => (
                      <div key={i} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                        <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                        <p className="text-sm text-slate-500 leading-relaxed">{item.content}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <div className="w-1.5 h-6 bg-brand rounded-full" />
                    Normativa di riferimento
                  </h3>
                  <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8">
                    <p className="text-slate-600 leading-relaxed">
                      La normativa di riferimento principale è il <strong>D.Lgs 81/08</strong> (Testo Unico sulla Sicurezza), integrato dall'<strong>Accordo Stato-Regioni del 21/12/2011</strong> e successive modifiche. Aliseo Academy assicura che ogni contenuto sia costantemente aggiornato rispetto alle ultime evoluzioni legislative e tecniche.
                    </p>
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
                      <p className="text-white font-bold">4 ore</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                      <Users className="w-5 h-5 text-brand" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs uppercase font-bold tracking-wider">Destinatari</p>
                      <p className="text-white font-bold text-sm">Lavoratori Rischio Basso</p>
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
                  Aggiornamento
                </h4>
                <p className="text-sm text-slate-600">
                  L'aggiornamento della formazione specifica è obbligatorio ogni 5 anni con un modulo di 6 ore.
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Formazione Generale", desc: "Modulo base 4h", view: 'corso-formazione-lavoratori-generale', icon: GraduationCap },
              { title: "Rischio Medio", desc: "Formazione Specifica 8h", view: 'corso-formazione-lavoratori-rischio-medio', icon: ShieldCheck },
              { title: "Rischio Alto", desc: "Formazione Specifica 12h", view: 'corso-formazione-lavoratori-rischio-alto', icon: Shield },
              { title: "Aggiornamento", desc: "Rinnovo Quinquennale 6h", view: 'aggiornamento-formazione-lavoratori', icon: Clock },
              { title: "Corso Preposto", desc: "Responsabile Sicurezza", view: 'corso-preposto', icon: Users },
              { title: "Corso RLS", desc: "Rappresentante Lavoratori", view: 'corso-rls-rappresentante-lavoratori-sicurezza', icon: Users },
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

export default FormazioneLavoratoriRischioBassoPage;
