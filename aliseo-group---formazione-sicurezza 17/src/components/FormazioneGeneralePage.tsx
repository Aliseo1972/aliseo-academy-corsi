import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import OnlineLearningBenefits from './OnlineLearningBenefits';
import { Clock, BookOpen, CheckCircle2, Users, FileText, ChevronRight, ShieldCheck, GraduationCap, Scale, Truck, MapPin, Monitor, Video, Shield } from 'lucide-react';

interface FormazioneGeneralePageProps {
  onNavigate: (view: any) => void;
}

const FormazioneGeneralePage: React.FC<FormazioneGeneralePageProps> = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Corso Formazione Generale Lavoratori | Aliseo Academy";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Corso formazione generale lavoratori obbligatorio (4 ore) secondo D.Lgs 81/08. Formazione online in e-learning con Aliseo Academy.");
    }
  }, []);

  const mailtoLink = "mailto:commerciale@aliseogroup.it?subject=Richiesta%20informazioni%20corso%20Formazione%20Generale%20Lavoratori&body=Buongiorno%2C%0A%0ASono%20interessato%20al%20corso%20Formazione%20Generale%20Lavoratori%20(4%20ore).%0APotrei%20avere%20maggiori%20informazioni%20su%20modalit%C3%A0%2C%20prossime%20date%20e%20costi%3F%0A%0AGrazie.";

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
              Art. 37 D.Lgs 81/08 - Accordo Stato-Regioni
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6"
            >
              Corso Formazione <span className="text-brand">Lavoratori Generale</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-400 leading-relaxed mb-8"
            >
              La base fondamentale della sicurezza sul lavoro: 4 ore di formazione obbligatoria per tutti i lavoratori di ogni settore ATECO.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col gap-6"
            >
              <div>
                <p className="text-slate-400 text-sm mb-3 font-medium">
                  Disponibile esclusivamente in modalità E-learning su piattaforma certificata.
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
                  <span className="text-white font-bold text-sm">D.Lgs 81/08 Art. 37</span>
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
                  Formazione Lavoratori: L'Obbligo dell'Art. 37
                </h2>
                <div className="text-slate-600 leading-relaxed space-y-6 text-lg">
                  <p>
                    Il <strong>corso sicurezza lavoratori obbligatorio</strong> rappresenta il primo passo fondamentale per ogni dipendente che entra a far parte di un'organizzazione. Secondo quanto stabilito dall'<strong>Art. 37 del D.Lgs 81/08</strong> e disciplinato dall'Accordo Stato-Regioni del 21/12/2011, ogni lavoratore deve ricevere una formazione sufficiente ed adeguata in materia di salute e sicurezza.
                  </p>
                  <p>
                    La <strong>formazione lavoratori aziende</strong> si divide in due moduli: la formazione generale (comune a tutti i settori) e la formazione specifica, che può essere una <strong>formazione lavoratori rischio basso</strong> o una <strong>formazione lavoratori rischio medio alto</strong> in base al settore ATECO di appartenenza. Il modulo di formazione generale ha una durata di 4 ore e non ha scadenza, costituendo un credito formativo permanente.
                  </p>
                  <p>
                    Scegliere un <strong>corso sicurezza lavoro D.Lgs 81/08</strong> con Aliseo Academy significa garantire ai propri collaboratori una preparazione di alto livello, capace di trasmettere non solo i concetti normativi, ma una vera e propria cultura della prevenzione. La nostra missione è trasformare un obbligo di legge in un'opportunità di crescita e consapevolezza per l'intera struttura aziendale.
                  </p>
                  <p>
                    La flessibilità è uno dei nostri punti di forza. Per la formazione generale, Aliseo Academy offre una soluzione all'avanguardia che si adatta alle esigenze logistiche delle imprese moderne. Attraverso la nostra piattaforma <strong>e-learning</strong> certificata, i lavoratori possono formarsi in totale autonomia, accedendo ai contenuti da remoto e ottimizzando i tempi di apprendimento senza necessità di spostamenti fisici.
                  </p>
                  <p>
                    La nostra piattaforma online garantisce un tracciamento rigoroso dei progressi e una fruizione interattiva dei contenuti. Questo approccio permette alle aziende di gestire grandi gruppi di lavoratori in modo efficiente, garantendo al contempo la massima efficacia didattica e il pieno rispetto della normativa vigente.
                  </p>
                </div>
              </article>

              <OnlineLearningBenefits />

              {/* Detailed Sections */}
              <div className="space-y-12">
                <section>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <div className="w-1.5 h-6 bg-brand rounded-full" />
                    Destinatari
                  </h3>
                  <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8">
                    <p className="text-slate-600 leading-relaxed">
                      Il corso di formazione generale è obbligatorio per <strong>tutti i lavoratori</strong> (come definiti dall'art. 2 del D.Lgs 81/08) di qualsiasi settore ATECO, indipendentemente dalla tipologia contrattuale. Deve essere erogato al momento dell'assunzione o comunque entro 60 giorni dalla stessa.
                    </p>
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <div className="w-1.5 h-6 bg-brand rounded-full" />
                    Argomenti Trattati
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "Concetti di rischio e danno",
                      "Prevenzione e protezione",
                      "Organizzazione della prevenzione aziendale",
                      "Diritti e doveri dei vari soggetti aziendali",
                      "Organi di vigilanza, controllo e assistenza",
                      "Sanzioni per le violazioni"
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
                    Programma Didattico
                  </h3>
                  <div className="space-y-4">
                    {[
                      { 
                        title: "Modulo 1: Il Sistema Legislativo", 
                        content: "Evoluzione normativa, il D.Lgs 81/08, il ruolo dell'Accordo Stato-Regioni nella formazione." 
                      },
                      { 
                        title: "Modulo 2: Soggetti del Sistema di Prevenzione", 
                        content: "Datore di Lavoro, Dirigenti, Preposti, Lavoratori, RSPP, Medico Competente e RLS." 
                      },
                      { 
                        title: "Modulo 3: Concetti Base della Sicurezza", 
                        content: "Definizione di pericolo, rischio, danno. La gerarchia delle misure di prevenzione." 
                      },
                      { 
                        title: "Modulo 4: Vigilanza e Sanzioni", 
                        content: "Il ruolo di ASL e INAIL. Quadro sanzionatorio per lavoratori e figure apicali." 
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
                      <p className="text-white font-bold">4 ore</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                      <Users className="w-5 h-5 text-brand" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs uppercase font-bold tracking-wider">Destinatari</p>
                      <p className="text-white font-bold text-sm">Tutti i lavoratori</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                      <Scale className="w-5 h-5 text-brand" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs uppercase font-bold tracking-wider">Normativa</p>
                      <p className="text-white font-bold text-sm">Art. 37 D.Lgs 81/08</p>
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
                  L'attestato di formazione generale ha validità permanente e costituisce credito formativo su tutto il territorio nazionale.
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
              { title: "Rischio Basso", desc: "Formazione Specifica 4h", view: 'corso-formazione-lavoratori-rischio-basso', icon: ShieldCheck },
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

export default FormazioneGeneralePage;
