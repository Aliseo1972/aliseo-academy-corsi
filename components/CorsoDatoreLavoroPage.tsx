import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import OnlineLearningBenefits from './OnlineLearningBenefits';
import { Clock, BookOpen, Euro, CheckCircle2, Users, FileText, ChevronRight, ShieldCheck, GraduationCap, Scale, Laptop, Globe, Award, AlertTriangle, Construction, ArrowRight } from 'lucide-react';

interface CorsoDatoreLavoroPageProps {
  onNavigate: (view: any) => void;
}

const CorsoDatoreLavoroPage: React.FC<CorsoDatoreLavoroPageProps> = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Formazione Datore di Lavoro: Guida Completa D.Lgs 81/08 | Aliseo Academy";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Guida completa alla formazione per Datore di Lavoro (RSPP). Scopri gli obblighi, i livelli di rischio (Basso, Medio, Alto) e i corsi necessari secondo il D.Lgs 81/08.");
    }
  }, []);

  const mailtoLink = "mailto:commerciale@aliseogroup.it?subject=Richiesta%20consulenza%20formazione%20Datore%20di%20Lavoro&body=Buongiorno%2C%0A%0AAvrei%20bisogno%20di%20aiuto%20per%20individuare%20il%20corso%20corretto%20per%20Datore%20di%20Lavoro%20per%20la%20mia%20azienda.%0A%0AGrazie.";

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.15),transparent_50%)]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-8"
          >
            <ShieldCheck className="w-4 h-4" />
            Guida alla Sicurezza sul Lavoro
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[0.9] mb-8 tracking-tighter"
          >
            Formazione <span className="text-brand">Datore di Lavoro</span>:<br />
            obblighi e percorsi
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-400 max-w-4xl mx-auto leading-relaxed mb-12 font-light"
          >
            Scopri quale corso è obbligatorio per la tua azienda in base al livello di rischio (basso, medio, alto) e agli aggiornamenti previsti dalla normativa D.Lgs. 81/08.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button 
              onClick={() => {
                const element = document.getElementById('come-scegliere');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-10 py-5 bg-brand text-slate-900 font-black uppercase tracking-tight rounded-2xl hover:bg-brand-light transition-all flex items-center gap-2 group shadow-2xl shadow-brand/20"
            >
              Scopri il corso giusto per te
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
            <a 
              href={mailtoLink}
              className="px-10 py-5 bg-white/5 text-white border border-white/10 font-black uppercase tracking-tight rounded-2xl hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              Contattaci per una consulenza
            </a>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 uppercase tracking-tight">
              Il Ruolo del Datore di Lavoro nella Sicurezza
            </h2>
            <div className="w-20 h-1.5 bg-brand mx-auto rounded-full mb-8" />
          </div>
          <div className="prose prose-slate max-w-none text-lg text-slate-600 leading-relaxed space-y-8">
            <p>
              Il <strong>Datore di Lavoro</strong> è la figura centrale del sistema di prevenzione aziendale. Secondo il <strong>D.Lgs. 81/08</strong>, egli ha la responsabilità primaria di garantire la salute e la sicurezza dei propri lavoratori, un obbligo che non può essere delegato nella sua interezza.
            </p>
            <p>
              Tra i compiti principali figurano la valutazione di tutti i rischi presenti in azienda e la nomina del <strong>Responsabile del Servizio di Prevenzione e Protezione (RSPP)</strong>. In molte realtà aziendali (piccole e medie imprese), il Datore di Lavoro può scegliere di svolgere direttamente i compiti di RSPP, assumendo su di sé la gestione operativa della sicurezza.
            </p>
            <p>
              Per poter esercitare legalmente questa funzione, la normativa impone la frequenza di un percorso formativo specifico, la cui durata e i cui contenuti dipendono strettamente dal <strong>Codice ATECO</strong> dell'azienda e dal relativo livello di rischio.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 mb-12 relative z-20">
        <OnlineLearningBenefits />
      </div>

      {/* How to Choose Section */}
      <section id="come-scegliere" className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tight">
              Come scegliere il corso corretto?
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">
              La durata della formazione varia in base alla categoria di rischio della tua azienda.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Rischio Basso",
                duration: "16 ore",
                ateco: "Uffici, Commercio, Servizi",
                view: 'corso-datore-di-lavoro-rspp-basso',
                color: "bg-emerald-500"
              },
              {
                title: "Rischio Medio",
                duration: "32 ore",
                ateco: "Agricoltura, Pesca, P.A.",
                view: 'corso-datore-di-lavoro-rspp-medio',
                color: "bg-amber-500"
              },
              {
                title: "Rischio Alto",
                duration: "48 ore",
                ateco: "Edilizia, Industria, Chimica",
                view: 'corso-datore-di-lavoro-rspp-alto',
                color: "bg-rose-500"
              }
            ].map((card, i) => (
              <div key={i} className="bg-white rounded-[32px] p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all flex flex-col group">
                <div className={`w-12 h-1.5 ${card.color} rounded-full mb-6`} />
                <h3 className="text-2xl font-black text-slate-900 mb-2 uppercase tracking-tight">{card.title}</h3>
                <p className="text-slate-400 text-sm font-bold mb-4 uppercase tracking-widest">{card.duration}</p>
                <p className="text-slate-600 mb-8 flex-grow">
                  Ideale per aziende che operano in settori come {card.ateco}. Formazione completa per assumere il ruolo di RSPP.
                </p>
                <button 
                  onClick={() => onNavigate(card.view)}
                  className="w-full py-4 bg-slate-900 text-white font-bold uppercase tracking-tight rounded-2xl hover:bg-brand hover:text-slate-900 transition-all flex items-center justify-center gap-2 group-hover:shadow-lg"
                >
                  Vai al corso
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Update Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 text-xs font-bold uppercase tracking-widest mb-6">
                <Clock className="w-4 h-4" />
                Aggiornamento Periodico
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 uppercase tracking-tight">
                L'obbligo di Aggiornamento
              </h2>
              <div className="text-slate-600 text-lg leading-relaxed space-y-6 mb-8">
                <p>
                  La formazione del Datore di Lavoro RSPP non termina con il corso iniziale. La normativa prevede un <strong>aggiornamento quinquennale obbligatorio</strong> per mantenere valide le proprie competenze e l'abilitazione al ruolo.
                </p>
                <p>
                  L'aggiornamento ha una durata fissa di <strong>6 ore</strong> (o superiore in base agli Accordi Stato-Regioni) e può essere svolto interamente in modalità e-learning, permettendo al Datore di Lavoro di gestire la formazione secondo i propri tempi.
                </p>
              </div>
              <button 
                onClick={() => onNavigate('aggiornamento-datore-di-lavoro-rspp')}
                className="px-8 py-4 bg-slate-100 text-slate-900 font-bold uppercase tracking-tight rounded-2xl hover:bg-slate-200 transition-all flex items-center gap-2"
              >
                Vedi corso aggiornamento
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <div className="order-1 lg:order-2 bg-slate-900 rounded-[40px] p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-50" />
              <div className="relative z-10">
                <div className="text-6xl font-black text-brand mb-4">5 anni</div>
                <p className="text-white text-xl font-bold uppercase tracking-tight mb-8">Frequenza obbligatoria</p>
                <div className="space-y-4">
                  {[
                    "Revisione normativa",
                    "Nuovi rischi emergenti",
                    "Gestione documentale",
                    "Responsabilità civili e penali"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-slate-300">
                      <CheckCircle2 className="w-5 h-5 text-brand" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Construction Module Section */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_10%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="bg-white/5 border border-white/10 rounded-[40px] p-8 md:p-12 backdrop-blur-sm">
              <Construction className="w-16 h-16 text-brand mb-8" />
              <h2 className="text-3xl md:text-4xl font-black mb-6 uppercase tracking-tight leading-none">
                Modulo <span className="text-brand">Cantieri</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                Per i Datori di Lavoro che operano nel settore dell'edilizia o in cantieri temporanei e mobili, è necessario integrare la formazione con il modulo specifico previsto dall'Allegato XIV del D.Lgs. 81/08.
              </p>
              <button 
                onClick={() => onNavigate('corso-datore-di-lavoro-modulo-cantieri')}
                className="px-8 py-4 bg-brand text-slate-900 font-black uppercase tracking-tight rounded-2xl hover:bg-brand-light transition-all flex items-center gap-2 group"
              >
                Scopri il Modulo Cantieri
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="space-y-8">
              <h3 className="text-2xl font-bold uppercase tracking-tight">Quando è necessario?</h3>
              <div className="space-y-6">
                {[
                  { title: "Settore Edile", desc: "Aziende che operano direttamente in cantiere." },
                  { title: "Coordinamento", desc: "Datori di lavoro che svolgono funzioni di coordinatore." },
                  { title: "Responsabilità", desc: "Gestione dei rischi specifici del cantiere e interferenze." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-8 h-8 rounded-lg bg-brand/20 flex items-center justify-center shrink-0">
                      <div className="w-2 h-2 bg-brand rounded-full" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-slate-100 rounded-3xl flex items-center justify-center mx-auto mb-8">
            <AlertTriangle className="w-10 h-10 text-brand" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tight">
            Non sai quale corso scegliere?
          </h2>
          <p className="text-slate-500 text-xl mb-12 leading-relaxed font-light">
            Il nostro team di esperti è a tua disposizione per analizzare il profilo della tua azienda e individuare il percorso formativo corretto per essere in regola con il D.Lgs. 81/08.
          </p>
          <a 
            href={mailtoLink}
            className="inline-flex items-center gap-3 px-12 py-6 bg-slate-900 text-white font-black uppercase tracking-tight rounded-2xl hover:bg-brand hover:text-slate-900 transition-all shadow-2xl shadow-slate-900/20"
          >
            Contattaci per una consulenza gratuita
            <ChevronRight className="w-6 h-6" />
          </a>
          <p className="mt-8 text-slate-400 text-sm font-medium uppercase tracking-widest">
            Ti rispondiamo entro 24 ore • commerciale@aliseogroup.it
          </p>
        </div>
      </section>
    </div>
  );
};

export default CorsoDatoreLavoroPage;
