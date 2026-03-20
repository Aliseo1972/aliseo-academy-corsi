import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Clock, BookOpen, Euro, CheckCircle2, Users, FileText, ChevronRight, MessageSquare, ShieldCheck, GraduationCap, Flame, Scale } from 'lucide-react';

interface AntincendioL1PageProps {
  onNavigate: (view: any) => void;
}

const AntincendioL1Page: React.FC<AntincendioL1PageProps> = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Corso Antincendio Livello 1 (L1) Rischio Basso | Aliseo Academy";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Ottieni l'abilitazione con il corso di formazione antincendio rischio basso (Livello 1) di Aliseo Academy. Corso obbligatorio per aziende conforme al DM 02/09/2021.");
    }
  }, []);

  const mailtoLink = "mailto:commerciale@aliseogroup.it?subject=Richiesta%20informazioni%20corso%20Antincendio%20Livello%201&body=Buongiorno%2C%0A%0ASono%20interessato%20al%20corso%20Antincendio%20Livello%201%20(L1%20-%20Rischio%20Basso).%0APotrei%20avere%20maggiori%20informazioni%20su%20modalit%C3%A0%2C%20prossime%20date%20e%20costi%3F%0A%0AGrazie.";

  return (
    <div className="bg-white min-h-screen">
      <section className="relative pt-20 pb-16 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(239,68,68,0.1),transparent_50%)]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-bold uppercase tracking-wider mb-6"
            >
              <Flame className="w-4 h-4" />
              Sicurezza Antincendio - DM 02/09/2021
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6"
            >
              Corso Antincendio <span className="text-brand">Livello 1 (L1)</span>: Rischio Basso
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-400 leading-relaxed mb-8"
            >
              Formazione obbligatoria per addetti alla prevenzione incendi in attività classificate a livello di rischio basso (ex rischio basso).
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col gap-6"
            >
              <div>
                <p className="text-slate-400 text-sm mb-3 font-medium">
                  Richiedi subito informazioni sul corso Antincendio per la tua azienda.
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
                  <span className="text-white font-bold text-sm">D.Lgs 81/08</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-16">
              <article className="prose prose-slate max-w-none">
                <h2 className="text-3xl font-black text-slate-900 mb-6 flex items-center gap-3">
                  <div className="w-2 h-8 bg-brand rounded-full" />
                  La Nuova Normativa Antincendio: Il Livello 1
                </h2>
                <div className="text-slate-600 leading-relaxed space-y-6 text-lg">
                  <p>
                    Il percorso di <strong>formazione antincendio rischio basso</strong> (denominato Livello 1) rappresenta il percorso formativo fondamentale per i lavoratori incaricati dell'attuazione delle misure di prevenzione incendi, lotta antincendio e gestione delle emergenze in attività classificate a <strong>rischio di incendio basso</strong>. Con l'entrata in vigore del <strong>D.M. 2 settembre 2021</strong>, la precedente denominazione "Rischio Basso" è stata ufficialmente sostituita dal termine "Livello 1", armonizzando la formazione alle nuove necessità di sicurezza nei luoghi di lavoro.
                  </p>
                  <p>
                    Secondo il <strong>D.Lgs 81/08</strong>, il datore di lavoro ha l'obbligo di designare uno o più lavoratori incaricati dell'attuazione delle misure di prevenzione incendi. Questi addetti devono ricevere una formazione adeguata e specifica, che nel caso del Livello 1 ha una durata di 4 ore. Le attività che rientrano in questa categoria sono generalmente quelle in cui sono presenti sostanze a bassa infiammabilità e dove le condizioni locali e d'esercizio offrono scarse possibilità di sviluppo di focolai, con una probabilità di propagazione delle fiamme limitata (es. uffici, piccoli negozi, studi professionali).
                  </p>
                  <p>
                    Il nostro programma formativo è progettato per fornire non solo le basi teoriche sulla combustione e sulla prevenzione, ma anche le competenze pratiche essenziali. Un addetto antincendio deve essere in grado di intervenire tempestivamente utilizzando correttamente gli <strong>estintori portatili</strong> e coordinando l'evacuazione dei colleghi in modo calmo e ordinato. La sicurezza non è solo una conformità burocratica, ma una cultura operativa che Aliseo Academy promuove attraverso docenti esperti e metodologie didattiche efficaci.
                  </p>
                  <p>
                    Affidarsi ad Aliseo Academy per la formazione antincendio significa garantire alla propria azienda un servizio professionale, aggiornato alle ultime disposizioni legislative. Il corso prevede una parte teorica dedicata ai principi della combustione, alle misure di protezione e alle procedure da adottare in caso di incendio, seguita da una <strong>prova pratica di spegnimento</strong>, fondamentale per acquisire la necessaria confidenza con le attrezzature di emergenza.
                  </p>
                </div>
              </article>

              <div className="space-y-12">
                <section>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <div className="w-1.5 h-6 bg-brand rounded-full" />
                    Descrizione Completa
                  </h3>
                  <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8">
                    <p className="text-slate-600 leading-relaxed">
                      Questo <strong>corso antincendio obbligatorio aziende</strong> fornisce le conoscenze necessarie per ricoprire il ruolo di addetto antincendio in attività a rischio basso. Il percorso formativo abilita l'operatore alla gestione delle prime fasi di un'emergenza, all'uso dei mezzi di estinzione e alla supervisione delle procedure di evacuazione, in piena conformità con il D.Lgs. 81/08 e il DM 02/09/2021.
                    </p>
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <div className="w-1.5 h-6 bg-brand rounded-full" />
                    Programma del Corso
                  </h3>
                  <div className="space-y-4">
                    {[
                      { title: "L'incendio e la prevenzione", duration: "1.5h", content: "Principi della combustione, prodotti della combustione, sostanze estinguenti, triangolo del fuoco, principali cause di incendio." },
                      { title: "Protezione antincendio e procedure", duration: "1.5h", content: "Misure di protezione passiva e attiva, estintori portatili, segnaletica di sicurezza, procedure di evacuazione e chiamata soccorsi." },
                      { title: "Esercitazioni pratiche", duration: "1h", content: "Presa visione e chiarimenti sugli estintori portatili, istruzioni sull'uso degli estintori portatili e prova pratica di spegnimento." }
                    ].map((item, i) => (
                      <div key={i} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-bold text-slate-900">{item.title}</h4>
                          <span className="text-xs font-bold text-slate-400 bg-slate-50 px-2 py-1 rounded-md">{item.duration}</span>
                        </div>
                        <p className="text-sm text-slate-500">{item.content}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-slate-900 rounded-3xl p-8 sticky top-24">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <GraduationCap className="w-6 h-6 text-brand" />
                  Scheda Tecnica
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
                      <p className="text-white font-bold text-sm">Addetti Antincendio Rischio Basso</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                      <Scale className="w-5 h-5 text-brand" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs uppercase font-bold tracking-wider">Normativa</p>
                      <p className="text-white font-bold text-sm">D.Lgs 81/08, DM 02/09/21</p>
                    </div>
                  </div>
                </div>
                <div className="mt-10 pt-8 border-t border-white/10">
                  <p className="text-slate-400 text-sm mb-4">
                    Richiedi subito informazioni sul corso Antincendio per la tua azienda.
                  </p>
                  <p className="text-brand text-xs font-bold uppercase tracking-wider mb-2 text-center">
                    Ti rispondiamo entro 24 ore
                  </p>
                  <a 
                    href={mailtoLink}
                    className="block w-full py-4 bg-brand text-slate-900 text-center font-black uppercase tracking-tight rounded-2xl hover:bg-brand-light transition-all shadow-lg shadow-brand/20"
                  >
                    Ricevi informazioni sul corso
                  </a>
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8">
                <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-brand" />
                  Aggiornamento
                </h4>
                <p className="text-sm text-slate-600">
                  La normativa prevede un aggiornamento obbligatorio ogni 5 anni della durata di 2 ore per mantenere la validità della qualifica.
                </p>
              </div>
            </div>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Livello 2 (L2)", desc: "Rischio Medio - 8 ore", view: 'antincendio-l2', icon: Flame },
              { title: "Livello 3 (L3)", desc: "Rischio Alto - 16 ore", view: 'antincendio-l3', icon: Flame },
              { title: "Aggiornamento L1", desc: "Rinnovamento - 2 ore", view: 'antincendio-update-l1', icon: Clock },
              { title: "Corso RLS", desc: "Base 32 ore", view: 'rls-page', icon: Users },
              { title: "Aggiornamento RLS", desc: "4 ore - Aziende < 50 dip.", view: 'rls-update-page', icon: Clock },
              { title: "Aggiornamento RLS", desc: "8 ore - Aziende > 50 dip.", view: 'rls-update-8-page', icon: Clock }
            ].map((item, i) => (
              <button 
                key={i}
                onClick={() => onNavigate(item.view)}
                className="group p-6 bg-white rounded-2xl border border-slate-200 hover:border-brand/30 hover:shadow-lg hover:shadow-brand/5 transition-all text-left flex flex-col h-full"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center mb-4 group-hover:bg-brand/10 transition-colors">
                  <item.icon className="w-5 h-5 text-slate-400 group-hover:text-brand transition-colors" />
                </div>
                <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                <p className="text-sm text-slate-500 mb-4 flex-grow">{item.desc}</p>
                <div className="flex items-center gap-1 text-brand text-xs font-bold uppercase mt-auto">
                  Vedi corso <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AntincendioL1Page;
