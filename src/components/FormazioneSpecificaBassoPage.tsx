import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import OnlineLearningBenefits from './OnlineLearningBenefits';
import { Clock, BookOpen, CheckCircle2, Users, FileText, ChevronRight, ShieldCheck, GraduationCap, Scale, Truck, MapPin, Monitor, Video } from 'lucide-react';

interface FormazioneSpecificaBassoPageProps {
  onNavigate: (view: any) => void;
}

const FormazioneSpecificaBassoPage: React.FC<FormazioneSpecificaBassoPageProps> = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Corso Formazione Specifica Lavoratori Rischio Basso | Sicurezza Lavoro Aliseo Academy";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Formazione lavoratori rischio basso (4 ore) obbligatoria per uffici e servizi. Corso sicurezza lavoro D.Lgs 81/08 certificato in modalità e-learning. Formazione lavoratori aziende online.");
    }
  }, []);

  const mailtoLink = "mailto:commerciale@aliseogroup.it?subject=Richiesta%20informazioni%20corso%20Formazione%20Specifica%20Rischio%20Basso&body=Buongiorno%2C%0A%0ASono%20interessato%20al%20corso%20Formazione%20Specifica%20Lavoratori%20Rischio%20Basso%20(4%20ore).%0APotrei%20avere%20maggiori%20informazioni%20su%20modalit%C3%A0%2C%20prossime%20date%20e%20costi%3F%0A%0AGrazie.";

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
              Art. 37 D.Lgs 81/08 - Rischio Basso
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6"
            >
              Corso Formazione <span className="text-brand">Specifica Rischio Basso</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-400 leading-relaxed mb-8"
            >
              Formazione obbligatoria di 4 ore per lavoratori di settori a basso rischio (uffici, commercio, servizi).
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col gap-6"
            >
              <div>
                <p className="text-slate-400 text-sm mb-3 font-medium">
                  Disponibile interamente in modalità E-learning con accesso immediato.
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
                  Formazione Specifica Rischio Basso: Cosa Prevede la Legge
                </h2>
                <div className="text-slate-600 leading-relaxed space-y-6 text-lg">
                  <p>
                    Il <strong>corso sicurezza lavoratori obbligatorio</strong> per il rischio basso è il completamento necessario della formazione generale. Mentre la parte generale fornisce i concetti base, la formazione specifica si focalizza sui rischi reali legati alla mansione e al settore lavorativo. Secondo l'<strong>Art. 37 del D.Lgs 81/08</strong>, questa formazione deve essere erogata a tutti i dipendenti di aziende classificate a <strong>formazione lavoratori rischio basso</strong> (settori ATECO come commercio, uffici, studi professionali, turismo).
                  </p>
                  <p>
                    La <strong>formazione lavoratori aziende</strong> a rischio basso ha una durata minima di 4 ore. Questo percorso formativo analizza i rischi specifici dell'ambiente di lavoro "ufficio" o "negozio", come l'utilizzo di videoterminali, la movimentazione manuale dei carichi leggeri, lo stress lavoro-correlato e i rischi elettrici di base. Per settori più complessi, è invece necessaria la <strong>formazione lavoratori rischio medio alto</strong>.
                  </p>
                  <p>
                    Un <strong>corso sicurezza lavoro D.Lgs 81/08</strong> efficace deve essere calato nella realtà quotidiana dei lavoratori. Aliseo Academy progetta i propri corsi e-learning per essere interattivi e pratici, evitando la pura teoria e concentrandosi su comportamenti sicuri e prevenzione attiva. La nostra formazione online aiuta a ridurre gli infortuni e le malattie professionali, migliorando il benessere organizzativo.
                  </p>
                  <p>
                    Per le aziende con personale distribuito o con esigenze di flessibilità, Aliseo Academy propone la fruizione tramite <strong>piattaforma e-learning</strong> dedicata. Questa modalità permette di seguire il corso da remoto mantenendo un alto standard qualitativo e garantendo la stessa validità legale della formazione in aula. È la soluzione ideale per ottimizzare i tempi di lavoro senza rinunciare alla qualità formativa, eliminando i costi di trasferta e le complessità logistiche.
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
                      Lavoratori di aziende classificate a <strong>Rischio Basso</strong> secondo i settori ATECO (es. uffici, commercio al dettaglio, servizi, studi professionali, turismo). La formazione specifica deve essere preceduta dal modulo di formazione generale (4 ore).
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
                      "Rischi infortuni e meccanici",
                      "Rischi elettrici e attrezzature",
                      "Microclima e illuminazione",
                      "Utilizzo di Videoterminali (VDT)",
                      "Movimentazione manuale carichi",
                      "Stress lavoro-correlato",
                      "Segnaletica di sicurezza",
                      "Procedure di emergenza"
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
                        title: "Modulo 1: Analisi dei Rischi Specifici", 
                        content: "Identificazione dei pericoli tipici del settore a basso rischio. Infortuni comuni e misure di prevenzione." 
                      },
                      { 
                        title: "Modulo 2: Ergonomia e Videoterminali", 
                        content: "Corretta postura, pause, regolazione della postazione di lavoro per chi opera al computer." 
                      },
                      { 
                        title: "Modulo 3: Rischi Psicosociali", 
                        content: "Gestione dello stress, benessere organizzativo e prevenzione del burnout." 
                      },
                      { 
                        title: "Modulo 4: Emergenza e Primo Soccorso", 
                        content: "Cenni sulle procedure di evacuazione e comportamento in caso di emergenza sanitaria." 
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
                      <p className="text-white font-bold text-sm">Lavoratori Rischio Basso</p>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Formazione Generale", desc: "Modulo base 4h", view: 'corso-formazione-lavoratori-generale', icon: GraduationCap },
              { title: "Rischio Medio/Alto", desc: "Formazione Specifica 8-12h", view: 'corso-formazione-lavoratori-rischio-medio-alto', icon: ShieldCheck },
              { title: "Corso RLS", desc: "Rappresentante Lavoratori", view: 'corso-rls-rappresentante-lavoratori-sicurezza', icon: Users },
              { title: "Antincendio L1", desc: "Rischio Basso", view: 'antincendio-l1', icon: Clock },
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

export default FormazioneSpecificaBassoPage;
