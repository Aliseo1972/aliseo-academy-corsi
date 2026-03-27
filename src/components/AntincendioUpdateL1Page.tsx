import React, { useEffect } from 'react';
import DeliveryMethods from './DeliveryMethods';
import { motion } from 'motion/react';
import { Clock, BookOpen, Euro, CheckCircle2, Users, FileText, ChevronRight, MessageSquare, ShieldCheck, GraduationCap, Flame, Scale } from 'lucide-react';

interface AntincendioUpdateL1PageProps {
  onNavigate: (view: any) => void;
}

const AntincendioUpdateL1Page: React.FC<AntincendioUpdateL1PageProps> = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Aggiornamento Antincendio Livello 1 (L1) | Aliseo Academy";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Resta in regola con l'aggiornamento antincendio obbligatorio Livello 1 (L1) di Aliseo Academy. Formazione periodica per addetti emergenze a norma DM 02/09/2021.");
    }
  }, []);

  const mailtoLink = "mailto:commerciale@aliseogroup.it?subject=Richiesta%20informazioni%20aggiornamento%20Antincendio%20Livello%201&body=Buongiorno%2C%0A%0ASono%20interessato%20all'aggiornamento%20Antincendio%20Livello%201%20(L1).%0APotrei%20avere%20maggiori%20informazioni%20su%20modalit%C3%A0%2C%20prossime%20date%20e%20costi%3F%0A%0AGrazie.";

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
              Aggiornamento Sicurezza - DM 02/09/2021
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6"
            >
              Aggiornamento Antincendio <span className="text-brand">Livello 1 (L1)</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-400 leading-relaxed mb-8"
            >
              Corso di aggiornamento quinquennale obbligatorio per addetti alla prevenzione incendi in attività di Livello 1 (ex rischio basso).
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
                  <span className="text-white font-bold">2 ore</span>
                </div>
                <div className="w-px h-6 bg-white/10" />
                <div className="flex items-center gap-2">
                  <Scale className="w-5 h-5 text-brand" />
                  <span className="text-white font-bold text-sm">Aggiornamento 5 anni</span>
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
                  Perché l'Aggiornamento Antincendio è Obbligatorio?
                </h2>
                <div className="text-slate-600 leading-relaxed space-y-6 text-lg">
                  <p>
                    L'<strong>aggiornamento antincendio obbligatorio</strong> Livello 1 (L1) è un adempimento fondamentale sancito dal <strong>D.Lgs 81/08</strong> e dal <strong>D.M. 2 settembre 2021</strong>. Aliseo Academy eroga questa <strong>formazione in presenza conforme D.Lgs 81/08</strong> in tutta Italia, garantendo che gli addetti mantengano la necessaria prontezza operativa attraverso <strong>sessioni pratiche con docenti qualificati</strong>.
                  </p>
                  <p>
                    Offriamo la massima flessibilità organizzativa con la <strong>formazione presso sede cliente</strong> o tramite il nostro <strong>centro formativo mobile Aliseo</strong> (Safety Truck). Questa unità speciale ci permette di allestire un'aula e un'area per le <strong>prove pratiche di spegnimento</strong> direttamente nel vostro piazzale aziendale, rinfrescando le competenze dei lavoratori sull'uso degli estintori in modo realistico e professionale, senza necessità di spostamenti esterni.
                  </p>
                  <p>
                    Il corso di aggiornamento proposto da Aliseo Academy permette di ripassare i concetti chiave della prevenzione incendi e di testare nuovamente le proprie abilità manuali attraverso <strong>prove pratiche di spegnimento</strong>. Spesso, con il passare degli anni, la confidenza con i mezzi di estinzione può diminuire; l'aggiornamento serve proprio a rinfrescare la memoria e a garantire che, in caso di necessità reale, l'intervento sia efficace e sicuro.
                  </p>
                  <p>
                    Partecipare all'aggiornamento non è solo un modo per evitare sanzioni amministrative e penali, ma un investimento nella sicurezza dei lavoratori e nella protezione del patrimonio aziendale. Un addetto formato e aggiornato è la prima linea di difesa contro lo sviluppo di incendi che potrebbero avere conseguenze devastanti.
                  </p>
                </div>
              </article>

              <div className="space-y-12">
                <section>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <div className="w-1.5 h-6 bg-brand rounded-full" />
                    Obiettivi dell'Aggiornamento
                  </h3>
                  <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8">
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3 text-slate-600">
                        <CheckCircle2 className="w-6 h-6 text-brand shrink-0" />
                        Ripasso delle procedure di emergenza e di evacuazione.
                      </li>
                      <li className="flex items-start gap-3 text-slate-600">
                        <CheckCircle2 className="w-6 h-6 text-brand shrink-0" />
                        Aggiornamento sulle novità legislative introdotte dal DM 02/09/2021.
                      </li>
                      <li className="flex items-start gap-3 text-slate-600">
                        <CheckCircle2 className="w-6 h-6 text-brand shrink-0" />
                        Esercitazione pratica sull'uso degli estintori portatili.
                      </li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <div className="w-1.5 h-6 bg-brand rounded-full" />
                    Programma Sintetico
                  </h3>
                  <div className="space-y-4">
                    {[
                      { title: "Richiami teorici", content: "Principali cause di incendio, misure di prevenzione, comportamento in caso di incendio." },
                      { title: "Esercitazioni pratiche", content: "Presa visione dei mezzi di estinzione, prova pratica di utilizzo dell'estintore su apposito focolare." }
                    ].map((item, i) => (
                      <div key={i} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                        <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                        <p className="text-sm text-slate-500">{item.content}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
              <DeliveryMethods />
            </div>

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
                      <p className="text-white font-bold">2 ore</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                      <Scale className="w-5 h-5 text-brand" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs uppercase font-bold tracking-wider">Validità</p>
                      <p className="text-white font-bold text-sm">5 anni</p>
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
              { title: "Aggiornamento L2", desc: "Rischio Medio - 5 ore", view: 'antincendio-update-l2', icon: Clock },
              { title: "Aggiornamento L3", desc: "Rischio Alto - 8 ore", view: 'antincendio-update-l3', icon: Clock },
              { title: "Livello 1 (L1)", desc: "Base - 4 ore", view: 'antincendio-l1', icon: Flame },
              { title: "Corso RLS", desc: "Base 32 ore", view: 'corso-rls-rappresentante-lavoratori-sicurezza', icon: Users },
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

export default AntincendioUpdateL1Page;
