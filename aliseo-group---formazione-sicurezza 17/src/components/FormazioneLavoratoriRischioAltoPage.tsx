import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Clock, BookOpen, CheckCircle2, Users, FileText, ChevronRight, ShieldCheck, GraduationCap, Scale, Monitor, Shield, ArrowRight } from 'lucide-react';
import OnlineLearningBenefits from './OnlineLearningBenefits';

interface FormazioneLavoratoriRischioAltoPageProps {
  onNavigate: (view: any) => void;
}

const FormazioneLavoratoriRischioAltoPage: React.FC<FormazioneLavoratoriRischioAltoPageProps> = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Corso Formazione Lavoratori Rischio Alto | Aliseo Academy";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Corso formazione lavoratori rischio alto obbligatorio secondo D.Lgs 81/08. Formazione online in e-learning con Aliseo Academy.");
    }
  }, []);

  const mailtoLink = "mailto:commerciale@aliseogroup.it?subject=Richiesta%20informazioni%20Corso%20Formazione%20Lavoratori%20Rischio%20Alto&body=Buongiorno%2C%0A%0ASono%20interessato%20al%20Corso%20Formazione%20Lavoratori%20Rischio%20Alto%20(12%20ore).%0APotrei%20avere%20maggiori%20informazioni%20su%20modalit%C3%A0%2C%20costi%20e%20attivazione%20online%3F%0A%0AGrazie.";

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
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-wider mb-6"
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
              Corso Formazione <span className="text-brand">Lavoratori Rischio Alto</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-400 leading-relaxed mb-8"
            >
              Percorso formativo specifico di 12 ore per dipendenti di aziende a rischio alto. 
              Disponibile interamente online in modalità e-learning certificata.
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
                  <span className="text-white font-bold">12 ore</span>
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
                  Sicurezza sul Lavoro: Formazione Lavoratori Rischio Alto
                </h2>
                <div className="text-slate-600 leading-relaxed space-y-6 text-lg">
                  <p>
                    Il <strong>Corso Formazione Lavoratori Rischio Alto</strong> costituisce l'obbligo formativo più rigoroso previsto dal <strong>D.Lgs 81/08</strong> per la tutela della salute e sicurezza nei luoghi di lavoro. Le aziende che operano in settori ad alta criticità, come l'edilizia, l'industria chimica, la produzione di energia, la gestione dei rifiuti e la sanità, sono tenute per legge a garantire ai propri dipendenti una preparazione approfondita e specifica. La <strong>formazione lavoratori rischio alto</strong> ha una durata complessiva di 12 ore, che si sommano alle 4 ore di formazione generale.
                  </p>
                  <p>
                    La complessità degli ambienti di lavoro a rischio elevato richiede un <strong>corso sicurezza lavoratori rischio alto</strong> che non si limiti alla teoria, ma che analizzi nel dettaglio i pericoli concreti. Durante il percorso, vengono esaminati i rischi legati all'uso di macchinari complessi, l'esposizione ad agenti cancerogeni o biologici, i lavori in quota, gli spazi confinati e le atmosfere esplosive. Il <strong>corso lavoratori D.Lgs 81/08</strong> di Aliseo Academy è progettato per trasformare gli obblighi normativi in competenze operative reali, riducendo drasticamente il tasso di infortuni gravi.
                  </p>
                  <p>
                    L'Accordo Stato-Regioni del 21/12/2011 stabilisce i contenuti minimi e le modalità di erogazione per questa tipologia di rischio. Aliseo Academy offre la possibilità di seguire la formazione specifica in modalità e-learning, garantendo la massima flessibilità organizzativa. Questa soluzione permette alle aziende di formare il personale senza bloccare i cantieri o le linee di produzione, ottimizzando i tempi e riducendo i costi logistici. La nostra piattaforma online è studiata per mantenere alto il livello di attenzione attraverso moduli interattivi e test di verifica costanti.
                  </p>
                  <p>
                    La validità della formazione lavoratori rischio alto erogata da Aliseo Academy è riconosciuta su tutto il territorio nazionale. Al termine del corso, previo superamento dell'esame finale, viene rilasciato un attestato certificato che attesta l'avvenuta formazione secondo gli standard di legge. Questo documento è fondamentale per la conformità aziendale e deve essere rinnovato ogni 5 anni con un modulo di aggiornamento specifico di 6 ore.
                  </p>
                  <p>
                    Affidarsi ad Aliseo Academy per la sicurezza sul lavoro significa scegliere un partner che mette al centro la qualità della formazione. Crediamo che la prevenzione sia l'investimento più importante per ogni impresa. I nostri esperti sono a disposizione per supportare le aziende nella scelta del percorso formativo più adatto, garantendo sempre la massima professionalità e il rispetto delle scadenze normative.
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
                      Il corso è obbligatorio per tutti i lavoratori impiegati in aziende classificate a <strong>Rischio Alto</strong> secondo i codici ATECO. Tra i settori principali figurano: edilizia, industria estrattiva, chimica, metalmeccanica pesante, sanità, servizi residenziali, gestione rifiuti e produzione di energia. La formazione deve essere erogata all'atto dell'assunzione o in caso di trasferimento in mansioni a rischio elevato.
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
                      "Analisi dei rischi specifici di settore",
                      "Prevenzione infortuni gravi e mortali",
                      "Uso corretto dei DPI di III categoria",
                      "Gestione delle emergenze complesse",
                      "Conoscenza delle procedure operative sicure",
                      "Sensibilizzazione sulla cultura della sicurezza",
                      "Identificazione dei pericoli chimici e biologici",
                      "Rischi legati a macchinari e attrezzature"
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
                        title: "Modulo 1: Rischi Meccanici ed Elettrici", 
                        content: "Approfondimento su macchine, attrezzature, impianti elettrici e rischi di folgorazione." 
                      },
                      { 
                        title: "Modulo 2: Rischi Chimici, Fisici e Biologici", 
                        content: "Esposizione ad agenti pericolosi, rumore, vibrazioni e radiazioni nel contesto industriale." 
                      },
                      { 
                        title: "Modulo 3: Lavori in Quota e Spazi Confinati", 
                        content: "Procedure di sicurezza per attività ad alto rischio di caduta o in ambienti sospetti di inquinamento." 
                      },
                      { 
                        title: "Modulo 4: Gestione Emergenze e Primo Soccorso", 
                        content: "Piani di evacuazione complessi e primo intervento in caso di infortunio grave." 
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
                      La normativa cardine è il <strong>D.Lgs 81/08</strong> (Testo Unico Sicurezza), integrato dall'<strong>Accordo Stato-Regioni del 21/12/2011</strong>. Quest'ultimo stabilisce la durata di 12 ore per la formazione specifica a rischio alto e ne definisce i contenuti minimi obbligatori. Aliseo Academy assicura la piena conformità legale di ogni percorso formativo erogato.
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
                      <p className="text-white font-bold">12 ore</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                      <Users className="w-5 h-5 text-brand" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs uppercase font-bold tracking-wider">Destinatari</p>
                      <p className="text-white font-bold text-sm">Lavoratori Rischio Alto</p>
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
                  L'aggiornamento della formazione specifica è obbligatorio ogni 5 anni con un modulo di 6 ore per tutte le classi di rischio.
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
              { title: "Rischio Basso", desc: "Formazione Specifica 4h", view: 'corso-formazione-lavoratori-rischio-basso', icon: ShieldCheck },
              { title: "Rischio Medio", desc: "Formazione Specifica 8h", view: 'corso-formazione-lavoratori-rischio-medio', icon: ShieldCheck },
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

export default FormazioneLavoratoriRischioAltoPage;
