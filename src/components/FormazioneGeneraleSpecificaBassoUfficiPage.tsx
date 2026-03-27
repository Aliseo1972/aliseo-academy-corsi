import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Clock, BookOpen, Euro, CheckCircle2, Users, FileText, ChevronRight, ShieldCheck, GraduationCap, Scale, Laptop, Globe, Award, Monitor } from 'lucide-react';
import { courses } from '../data/courses';
import OnlineLearningBenefits from './OnlineLearningBenefits';

interface FormazioneGeneraleSpecificaBassoUfficiPageProps {
  onNavigate: (view: any) => void;
}

const FormazioneGeneraleSpecificaBassoUfficiPage: React.FC<FormazioneGeneraleSpecificaBassoUfficiPageProps> = ({ onNavigate }) => {
  const course = courses.find(c => c.id === "24") || {
    duration: "8h",
    price: "97,60 €",
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Corso Formazione Generale e Specifica Rischio Basso Uffici Online | Aliseo Academy";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Corso completo di formazione generale e specifica per lavoratori a rischio basso settore uffici. Formazione obbligatoria 8 ore online conforme al D.Lgs 81/08.");
    }
  }, []);

  const mailtoLink = "mailto:commerciale@aliseogroup.it?subject=Richiesta%20informazioni%20corso%20Generale%20e%20Specifica%20Rischio%20Basso%20Uffici&body=Buongiorno%2C%0A%0ASono%20interessato%20al%20corso%20Formazione%20Generale%20e%20Specifica%20Lavoratori%20Rischio%20Basso%20Settore%20Uffici%20Online.%0APotrei%20avere%20maggiori%20informazioni%3F%0A%0AGrazie.";

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
              Percorso Completo 8 Ore - Settore Uffici
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6"
            >
              Corso <span className="text-brand">Generale e Specifica</span> Uffici Online
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-400 leading-relaxed mb-4"
            >
              La soluzione formativa completa per il personale amministrativo, 100% online.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="text-lg text-slate-500 leading-relaxed mb-8"
            >
              Un unico corso e-learning che copre sia la formazione generale che quella specifica per i rischi del lavoro d'ufficio, garantendo la piena conformità al D.Lgs 81/08.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col gap-6"
            >
              <div>
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
                  Formazione Completa per Lavoratori d'Ufficio: Generale e Specifica
                </h2>
                <div className="text-slate-600 leading-relaxed space-y-6 text-lg">
                  <p>
                    Il corso è disponibile online in modalità e-learning. Per aziende o gruppi che desiderano organizzare la formazione anche in presenza con nostro docente, è possibile richiedere una soluzione dedicata contattandoci.
                  </p>
                  <p>
                    Il **corso di formazione generale e specifica per lavoratori a rischio basso del settore uffici** è il percorso formativo obbligatorio per eccellenza per tutto il personale amministrativo, tecnico e gestionale. Secondo il **D.Lgs 81/08** e l'Accordo Stato-Regioni del 2011, ogni nuovo assunto deve ricevere una formazione completa sulla sicurezza prima di iniziare le proprie attività o comunque entro 60 giorni dall'assunzione.
                  </p>
                  <p>
                    Questo corso integrato di 8 ore è suddiviso in due moduli fondamentali. Il primo modulo riguarda la **Formazione Generale (4 ore)**, che introduce i concetti base della sicurezza sul lavoro, i diritti e i doveri dei lavoratori, e l'organizzazione della prevenzione in azienda. Il secondo modulo è la **Formazione Specifica (4 ore)**, focalizzata esclusivamente sui rischi dell'ambiente d'ufficio: ergonomia della postazione, uso corretto dei videoterminali, gestione dello stress lavoro-correlato e fattori ambientali come illuminazione e microclima.
                  </p>
                  <p>
                    La modalità **e-learning** offerta da Aliseo Academy rappresenta la soluzione ideale per le aziende moderne. Grazie alla nostra piattaforma intuitiva, i lavoratori possono seguire il corso direttamente dalla propria postazione, ottimizzando i tempi e riducendo i costi logistici. Il percorso è arricchito da materiali multimediali, casi pratici e test di autovalutazione che rendono l'apprendimento dinamico e memorabile. La formazione online non è solo una comodità, ma un modo efficace per garantire che ogni dipendente acquisisca le competenze necessarie per proteggere la propria salute a lungo termine.
                  </p>
                  <p>
                    L'adempimento a questo obbligo formativo è un pilastro della conformità aziendale. Un personale ben formato è un personale più consapevole, capace di prevenire disturbi comuni come il mal di schiena o l'affaticamento visivo, migliorando così il benessere generale e la produttività. Al termine del corso, Aliseo Academy rilascia un attestato certificato, valido su tutto il territorio nazionale, che documenta l'avvenuta formazione sia generale che specifica per il settore uffici.
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
                    <ul className="space-y-3">
                      {[
                        "Nuovi assunti in ambito amministrativo e gestionale",
                        "Personale d'ufficio che deve assolvere l'obbligo formativo completo",
                        "Apprendisti e stagisti operanti in settori a rischio basso",
                        "Lavoratori che necessitano di regolarizzare la propria posizione formativa"
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                          <Users className="w-5 h-5 text-brand shrink-0" />
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
                      "Conoscere il sistema istituzionale della prevenzione",
                      "Identificare i rischi specifici del lavoro d'ufficio",
                      "Apprendere le corrette posture al videoterminale",
                      "Gestire i fattori di stress e benessere organizzativo"
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
                    Programma del corso
                  </h3>
                  <div className="space-y-4">
                    {[
                      { title: "Modulo Generale (4h)", desc: "Concetti di rischio, danno, prevenzione, protezione, organizzazione della prevenzione aziendale, diritti e doveri." },
                      { title: "Modulo Specifico Uffici (4h)", desc: "Ergonomia della postazione, uso dei VDT, illuminazione, microclima e stress lavoro-correlato." },
                      { title: "Salute e Benessere", desc: "Prevenzione dei disturbi muscolo-scheletrici e affaticamento visivo." },
                      { title: "Procedure di Sicurezza", desc: "Comportamenti sicuri, segnaletica e gestione delle emergenze in ufficio." }
                    ].map((item, i) => (
                      <div key={i} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                        <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                        <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
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
                      <li className="flex items-start gap-3">
                        <Scale className="w-6 h-6 text-brand shrink-0" />
                        <div>
                          <p className="font-bold">D.Lgs 81/08</p>
                          <p className="text-sm text-slate-400">Artt. 36 e 37: Obblighi di informazione e formazione dei lavoratori.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <FileText className="w-6 h-6 text-brand shrink-0" />
                        <div>
                          <p className="font-bold">Accordo Stato-Regioni 21/12/2011</p>
                          <p className="text-sm text-slate-400">Standardizzazione dei percorsi formativi per i lavoratori.</p>
                        </div>
                      </li>
                    </ul>
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
                      <p className="text-white font-bold">{course.duration}</p>
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

      {/* Internal Navigation */}
      <section className="py-16 border-t border-slate-100 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black text-slate-900 mb-8 flex items-center gap-3">
            <div className="w-2 h-6 bg-brand rounded-full" />
            Potrebbero interessarti anche
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Sicurezza Lavoratori", desc: "Pagina principale formazione", view: 'dlgs-81-08', icon: ShieldCheck },
              { title: "Formazione Generale", desc: "Corso base 4h", view: 'corso-formazione-lavoratori-generale', icon: BookOpen },
              { title: "Rischio Basso Uffici", desc: "Modulo specifico uffici", view: 'corso-lavoratori-rischio-basso-uffici', icon: Monitor },
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

export default FormazioneGeneraleSpecificaBassoUfficiPage;
