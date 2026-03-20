import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Clock, BookOpen, Euro, CheckCircle2, Users, FileText, ChevronRight, MessageSquare, ShieldCheck, GraduationCap, Briefcase, Scale } from 'lucide-react';
import { courses } from '../data/courses';

const RLSPage: React.FC = () => {
  const course = courses.find(c => c.id === "50") || courses.find(c => c.title.includes("RLS"));

  useEffect(() => {
    window.scrollTo(0, 0);
    // Update meta tags
    document.title = "Corso RLS: Rappresentante dei Lavoratori per la Sicurezza | Formazione Sicurezza";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Corso di formazione per RLS (Rappresentante dei Lavoratori per la Sicurezza). Formazione completa secondo il D.Lgs 81/08. Programma, durata e requisiti.");
    }
  }, []);

  const mailtoLink = "mailto:commerciale@aliseogroup.it?subject=Richiesta%20informazioni%20corso%20RLS&body=Buongiorno%2C%0A%0ASono%20interessato%20al%20corso%20RLS%20(Rappresentante%20dei%20Lavoratori%20per%20la%20Sicurezza).%0APotrei%20avere%20maggiori%20informazioni%20su%20modalit%C3%A0%2C%20tempi%20e%20disponibilit%C3%A0%3F%0A%0AGrazie.";

  if (!course) return <div className="py-20 text-center">Corso non trovato</div>;

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section per la Pagina Dedicata */}
      <section className="relative pt-20 pb-16 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,184,0,0.1),transparent_50%)]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand text-xs font-bold uppercase tracking-wider mb-6"
            >
              <ShieldCheck className="w-4 h-4" />
              Sicurezza sul Lavoro - D.Lgs 81/08
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6"
            >
              Corso RLS: <span className="text-brand">Rappresentante dei Lavoratori</span> per la Sicurezza
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-400 leading-relaxed mb-8"
            >
              La figura chiave per la tutela della salute e sicurezza nei luoghi di lavoro. Un percorso formativo completo e certificato secondo le normative vigenti.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col gap-4"
            >
              <div className="flex flex-col gap-2">
                <span className="text-slate-400 text-sm font-bold ml-2">Ti rispondiamo entro 24 ore</span>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href={mailtoLink}
                    className="px-8 py-4 bg-brand text-slate-900 font-black uppercase tracking-tight rounded-2xl hover:bg-brand-light transition-all flex items-center gap-2 group shadow-xl shadow-brand/20"
                  >
                    Ricevi informazioni sul corso
                    <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4 px-6 py-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm w-fit">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-brand" />
                  <span className="text-white font-bold">{course.duration}</span>
                </div>
                <div className="w-px h-6 bg-white/10" />
                <div className="flex items-center gap-2">
                  <Euro className="w-5 h-5 text-brand" />
                  <span className="text-white font-bold">{course.price}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Left Column: Course Details */}
            <div className="lg:col-span-2 space-y-16">
              
              {/* SEO Text Section */}
              <article className="prose prose-slate max-w-none">
                <h2 className="text-3xl font-black text-slate-900 mb-6 flex items-center gap-3">
                  <div className="w-2 h-8 bg-brand rounded-full" />
                  Perché il Corso RLS è Fondamentale?
                </h2>
                <div className="text-slate-600 leading-relaxed space-y-6 text-lg">
                  <p>
                    Il <strong>Rappresentante dei Lavoratori per la Sicurezza (RLS)</strong> è una figura obbligatoria prevista dal <strong>D.Lgs 81/08</strong>, il Testo Unico sulla Salute e Sicurezza sul Lavoro. Questa figura rappresenta il punto di incontro tra i lavoratori e il datore di lavoro per tutto ciò che concerne la prevenzione dei rischi e la tutela della salute in azienda. La sua presenza è fondamentale per garantire che le istanze dei lavoratori in materia di sicurezza siano ascoltate e integrate nei processi decisionali aziendali.
                  </p>
                  <p>
                    Il nostro corso di formazione per RLS è strutturato per fornire non solo le nozioni giuridiche e normative necessarie, ma anche gli strumenti pratici per esercitare il ruolo con efficacia. Essere un RLS significa avere la responsabilità di consultare il datore di lavoro sulla valutazione dei rischi, partecipare alle riunioni periodiche e promuovere la cultura della sicurezza tra i colleghi. Il percorso formativo copre aspetti che vanno dalla legislazione vigente alle tecniche di comunicazione interpersonale, essenziali per mediare tra le diverse figure del sistema di prevenzione aziendale.
                  </p>
                  <p>
                    In un contesto lavorativo in continua evoluzione, la sicurezza non è solo un obbligo di legge, ma un valore aziendale che aumenta la produttività e riduce i costi sociali derivanti dagli infortuni. Il corso affronta temi cruciali come la gestione delle emergenze, l'uso corretto dei Dispositivi di Protezione Individuale (DPI) e la comprensione dei rischi specifici legati alle diverse mansioni. Approfondiremo inoltre il concetto di benessere organizzativo e la prevenzione dello stress lavoro-correlato, temi sempre più centrali nella moderna gestione delle risorse umane.
                  </p>
                  <p>
                    La formazione continua è essenziale: il ruolo dell'RLS richiede un aggiornamento costante per restare al passo con le nuove tecnologie e le modifiche legislative. Partecipare a questo corso garantisce una preparazione solida, riconosciuta a livello nazionale, che permette di operare con competenza e autorevolezza all'interno di qualsiasi realtà produttiva, sia essa una piccola impresa o una grande multinazionale. La nostra metodologia didattica favorisce l'apprendimento attraverso esempi concreti e scenari operativi verosimili.
                  </p>
                  <p>
                    Scegliere la nostra formazione significa affidarsi a esperti del settore che utilizzano metodologie didattiche attive, casi studio reali e simulazioni pratiche. Il nostro obiettivo è trasformare l'obbligo formativo in un'opportunità di crescita professionale per il lavoratore e di miglioramento per l'intera organizzazione aziendale. Al termine del percorso, l'RLS sarà in grado di analizzare i rischi, proporre soluzioni migliorative e collaborare attivamente alla stesura del Documento di Valutazione dei Rischi (DVR).
                  </p>
                  <p>
                    Oltre agli aspetti tecnici, il corso dedica ampio spazio alle relazioni industriali e al ruolo del sindacato nella sicurezza sul lavoro. Comprendere le dinamiche di consultazione e partecipazione è vitale per un RLS che voglia incidere realmente sulle condizioni di lavoro. Forniremo dispense aggiornate, accesso a materiali digitali e un supporto costante da parte dei nostri docenti qualificati, esperti in igiene e sicurezza industriale.
                  </p>
                </div>
              </article>

              {/* Course Content Sections */}
              <div className="space-y-12">
                {/* Descrizione */}
                <section>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <div className="w-1.5 h-6 bg-brand rounded-full" />
                    Descrizione del Corso
                  </h3>
                  <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8">
                    <p className="text-slate-600 leading-relaxed">
                      {course.description}
                    </p>
                    {course.objectives && course.objectives.length > 0 && (
                      <div className="mt-8">
                        <h4 className="font-bold text-slate-900 mb-4">Obiettivi del Corso:</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {course.objectives.map((obj, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                              <CheckCircle2 className="w-5 h-5 text-brand shrink-0" />
                              {obj}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </section>

                {/* Programma */}
                {course.syllabus && (
                  <section>
                    <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                      <div className="w-1.5 h-6 bg-brand rounded-full" />
                      Programma Didattico
                    </h3>
                    <div className="space-y-4">
                      {course.syllabus.map((module, i) => (
                        <div key={i} className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-brand/30 transition-all shadow-sm">
                          <div className="flex justify-between items-start mb-4">
                            <div className="flex items-center gap-4">
                              <div className="w-10 h-10 rounded-full bg-slate-900 text-brand flex items-center justify-center font-bold">
                                {String(i + 1).padStart(2, '0')}
                              </div>
                              <h4 className="font-bold text-slate-900 text-lg">{module.title}</h4>
                            </div>
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider bg-slate-50 px-3 py-1 rounded-full border border-slate-100">
                              {module.duration}
                            </span>
                          </div>
                          {module.lessons && (
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 mt-4 pt-4 border-t border-slate-50">
                              {module.lessons.map((lesson, j) => (
                                <li key={j} className="flex items-start gap-2 text-sm text-slate-500">
                                  <div className="w-1.5 h-1.5 rounded-full bg-brand mt-1.5 shrink-0" />
                                  {lesson}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  </section>
                )}
              </div>
            </div>

            {/* Right Column: Sidebar Info */}
            <div className="space-y-8">
              {/* Info Card */}
              <div className="bg-slate-900 rounded-3xl p-8 sticky top-24 shadow-2xl shadow-slate-200">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <GraduationCap className="w-6 h-6 text-brand" />
                  Dettagli Formazione
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-brand" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs uppercase font-bold tracking-wider">Durata Totale</p>
                      <p className="text-white font-bold">{course.duration}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                      <BookOpen className="w-5 h-5 text-brand" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs uppercase font-bold tracking-wider">Metodologia</p>
                      <p className="text-white font-bold">E-learning / Aula</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                      <Users className="w-5 h-5 text-brand" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs uppercase font-bold tracking-wider">Destinatari</p>
                      <p className="text-white font-bold text-sm leading-tight">
                        {course.recipients || "Lavoratori eletti o designati come RLS"}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                      <Scale className="w-5 h-5 text-brand" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs uppercase font-bold tracking-wider">Normativa</p>
                      <p className="text-white font-bold text-sm leading-tight">
                        {course.references || "D.Lgs 81/08 e s.m.i."}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-white/10">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-slate-400 font-bold uppercase text-xs tracking-widest">Investimento</span>
                    <span className="text-3xl font-black text-brand">{course.price}</span>
                  </div>
                  <div className="space-y-2">
                    <p className="text-slate-400 text-xs font-bold text-center">Ti rispondiamo entro 24 ore</p>
                    <a 
                      href={mailtoLink}
                      className="block w-full py-4 bg-brand text-slate-900 text-center font-black uppercase tracking-tight rounded-2xl hover:bg-brand-light transition-all shadow-lg shadow-brand/20"
                    >
                      Ricevi informazioni sul corso
                    </a>
                  </div>
                </div>
              </div>

              {/* Additional Info Cards */}
              <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8">
                <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-brand" />
                  Certificazione
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Al termine del corso e al superamento del test finale, verrà rilasciato un attestato di formazione valido a norma di legge su tutto il territorio nazionale.
                </p>
              </div>

              <div className="bg-brand/5 border border-brand/10 rounded-3xl p-8">
                <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-brand" />
                  Supporto Didattico
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  I nostri tutor sono a disposizione per chiarimenti sui contenuti e supporto tecnico durante tutto il percorso formativo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">
            Hai bisogno di maggiori informazioni sul corso RLS?
          </h2>
          <p className="text-lg text-slate-600 mb-10">
            Il nostro team di esperti è pronto a rispondere a ogni tua domanda e a guidarti nella scelta del percorso formativo più adatto alle tue esigenze aziendali.
          </p>
          <div className="flex flex-col items-center gap-2">
            <span className="text-slate-500 text-sm font-bold">Ti rispondiamo entro 24 ore</span>
            <a 
              href={mailtoLink}
              className="px-12 py-5 bg-slate-900 text-white font-black uppercase tracking-tight rounded-2xl hover:bg-slate-800 transition-all shadow-xl inline-block"
            >
              Ricevi informazioni sul corso
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RLSPage;
