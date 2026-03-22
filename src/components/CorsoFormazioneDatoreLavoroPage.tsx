import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Clock, BookOpen, Euro, CheckCircle2, Users, FileText, ChevronRight, ShieldCheck, GraduationCap, Scale, Laptop, Globe, Award } from 'lucide-react';
import { courses } from '../data/courses';
import OnlineLearningBenefits from './OnlineLearningBenefits';

interface CorsoFormazioneDatoreLavoroPageProps {
  onNavigate: (view: any) => void;
}

const CorsoFormazioneDatoreLavoroPage: React.FC<CorsoFormazioneDatoreLavoroPageProps> = ({ onNavigate }) => {
  const course = courses.find(c => c.id === "65");

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Corso Formazione Datore di Lavoro Online | Aliseo Academy";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Corso di formazione per datori di lavoro in modalità online. Approfondisci ruoli, responsabilità e obblighi previsti dal D.Lgs 81/08.");
    }
  }, []);

  const mailtoLink = "mailto:commerciale@aliseogroup.it?subject=Richiesta%20informazioni%20corso%20Formazione%20Datore%20di%20Lavoro&body=Buongiorno%2C%0A%0ASono%20interessato%20al%20corso%20di%20Formazione%20Datore%20di%20Lavoro%20Online.%0APotrei%20avere%20maggiori%20informazioni%3F%0A%0AGrazie.";

  return (
    <div className="bg-white min-h-screen">
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
              D.Lgs 81/08 - Formazione Dirigenziale
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6"
            >
              Corso Formazione <span className="text-brand">Datore di Lavoro</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-400 leading-relaxed mb-8"
            >
              Percorso formativo completo sulle responsabilità civili e penali, l'organizzazione della sicurezza e i compiti del datore di lavoro.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col gap-6"
            >
              <div>
                <p className="text-brand text-xs font-bold uppercase tracking-wider mb-2">
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
                  Descrizione del Corso
                </h2>
                <div className="text-slate-600 leading-relaxed space-y-6 text-lg">
                  <p>
                    Il ruolo del datore di lavoro all'interno del sistema di prevenzione aziendale è di primaria importanza. Il D.Lgs 81/08 definisce il datore di lavoro come il soggetto titolare del rapporto di lavoro con il lavoratore o, comunque, il soggetto che ha la responsabilità dell'organizzazione stessa o dell'unità produttiva. Questo corso online mira a fornire una panoramica esaustiva degli <strong>obblighi e delle responsabilità</strong> che derivano da tale posizione.
                  </p>
                  <p>
                    La formazione affronta i temi cardine della sicurezza sul lavoro: dalla valutazione dei rischi alla nomina delle figure sensibili (RSPP, Medico Competente, RLS), dalla gestione degli appalti alla vigilanza sull'operato dei dipendenti. Attraverso la nostra piattaforma e-learning, è possibile approfondire gli aspetti giuridici e organizzativi con la massima flessibilità, acquisendo le competenze necessarie per gestire correttamente la sicurezza in azienda e prevenire sanzioni civili e penali.
                  </p>
                  <p>
                    Il percorso formativo è strutturato per essere immediatamente applicabile alla realtà aziendale, fornendo strumenti pratici per l'organizzazione del Servizio di Prevenzione e Protezione e per l'implementazione di modelli di gestione della sicurezza efficaci.
                  </p>
                </div>
              </article>

              <OnlineLearningBenefits />

              <div className="space-y-12">
                <section>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <div className="w-1.5 h-6 bg-brand rounded-full" />
                    A chi è rivolto
                  </h3>
                  <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8">
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3 text-slate-700 font-medium">
                        <Users className="w-5 h-5 text-brand shrink-0" />
                        Datori di lavoro e titolari di impresa
                      </li>
                      <li className="flex items-center gap-3 text-slate-700 font-medium">
                        <Users className="w-5 h-5 text-brand shrink-0" />
                        Amministratori delegati e direttori generali
                      </li>
                      <li className="flex items-center gap-3 text-slate-700 font-medium">
                        <Users className="w-5 h-5 text-brand shrink-0" />
                        Responsabili di unità produttive con poteri decisionali
                      </li>
                    </ul>
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <div className="w-1.5 h-6 bg-brand rounded-full" />
                    Obiettivi del corso
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {course?.objectives.map((obj, i) => (
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
                    Programma
                  </h3>
                  <div className="space-y-4">
                    {course?.syllabus?.map((item, i) => (
                      <div key={i} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex justify-between items-center">
                        <h4 className="font-bold text-slate-900">{item.title}</h4>
                        <span className="text-sm font-medium text-brand bg-brand/5 px-3 py-1 rounded-full">{item.duration}</span>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <div className="w-1.5 h-6 bg-brand rounded-full" />
                    Quadro Normativo
                  </h3>
                  <div className="bg-slate-900 text-white rounded-3xl p-8">
                    <ul className="space-y-4">
                      {course?.references.map((ref, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Scale className="w-6 h-6 text-brand shrink-0" />
                          <p className="font-bold">{ref}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>
              </div>
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
                      <p className="text-white font-bold">{course?.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                      <Laptop className="w-5 h-5 text-brand" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs uppercase font-bold tracking-wider">Modalità</p>
                      <p className="text-white font-bold">E-learning</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                      <Award className="w-5 h-5 text-brand" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs uppercase font-bold tracking-wider">Certificazione</p>
                      <p className="text-white font-bold text-sm">Attestato a norma di legge</p>
                    </div>
                  </div>
                </div>
                <div className="mt-10 pt-8 border-t border-white/10">
                  <p className="text-slate-400 text-sm mb-1 text-center">
                    Ti rispondiamo entro 24 ore
                  </p>
                  <a 
                    href={mailtoLink}
                    className="block w-full py-4 bg-brand text-slate-900 text-center font-black uppercase tracking-tight rounded-2xl hover:bg-brand-light transition-all shadow-lg shadow-brand/20"
                  >
                    Ricevi informazioni
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-slate-100 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black text-slate-900 mb-8 flex items-center gap-3">
            <div className="w-2 h-6 bg-brand rounded-full" />
            Potrebbero interessarti anche
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <button 
              onClick={() => onNavigate('corso-datore-di-lavoro')}
              className="group p-6 bg-white rounded-2xl border border-slate-200 hover:border-brand/30 hover:shadow-lg transition-all text-left"
            >
              <h3 className="font-bold text-slate-900 mb-1">Corso Datore di Lavoro</h3>
              <p className="text-xs text-slate-500 mb-4">Pagina principale cluster</p>
              <div className="flex items-center gap-1 text-brand text-[10px] font-bold uppercase">
                Vedi <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
            <button 
              onClick={() => onNavigate('corso-dirigente')}
              className="group p-6 bg-white rounded-2xl border border-slate-200 hover:border-brand/30 hover:shadow-lg transition-all text-left"
            >
              <h3 className="font-bold text-slate-900 mb-1">Corso Dirigente</h3>
              <p className="text-xs text-slate-500 mb-4">Formazione dirigenziale</p>
              <div className="flex items-center gap-1 text-brand text-[10px] font-bold uppercase">
                Vedi <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
            <button 
              onClick={() => onNavigate('corso-preposto')}
              className="group p-6 bg-white rounded-2xl border border-slate-200 hover:border-brand/30 hover:shadow-lg transition-all text-left"
            >
              <h3 className="font-bold text-slate-900 mb-1">Corso Preposto</h3>
              <p className="text-xs text-slate-500 mb-4">Responsabile sicurezza</p>
              <div className="flex items-center gap-1 text-brand text-[10px] font-bold uppercase">
                Vedi <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CorsoFormazioneDatoreLavoroPage;
