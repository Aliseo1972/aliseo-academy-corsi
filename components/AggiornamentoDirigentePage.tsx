import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Clock, BookOpen, Euro, CheckCircle2, Users, FileText, ChevronRight, ShieldCheck, GraduationCap, Laptop, Globe, Zap, Award, Scale, CalendarClock } from 'lucide-react';
import { courses } from '../data/courses';
import OnlineLearningBenefits from './OnlineLearningBenefits';

interface AggiornamentoDirigentePageProps {
  onNavigate: (view: any) => void;
}

const AggiornamentoDirigentePage: React.FC<AggiornamentoDirigentePageProps> = ({ onNavigate }) => {
  // Find the course in the data if available (ID 75)
  const course = courses.find(c => c.id === "75") || {
    title: "Dirigente - Aggiornamento",
    duration: "6h",
    price: "73,20 €",
    description: "Aggiornamento quinquennale obbligatorio per la figura del dirigente ai sensi del D.Lgs 81/08.",
    objectives: ["Evoluzione normativa", "Giurisprudenza", "Sistemi di gestione"],
    references: ["Art. 37 D.Lgs. 81/08", "Accordo Stato-Regioni 17/04/2025 (Rep. Atti n. 59/CSR)"],
    recipients: "Dirigenti che hanno già effettuato la formazione base",
    syllabus: [
      { title: "Evoluzione della normativa e giurisprudenza", duration: "1h 30m", lessons: 5 },
      { title: "Il sistema istituzionale e gli organi di vigilanza", duration: "1h", lessons: 4 },
      { title: "Modelli di organizzazione e gestione (MOG) e responsabilità", duration: "1h 30m", lessons: 5 },
      { title: "Valutazione dei rischi e gestione delle emergenze", duration: "1h", lessons: 5 },
      { title: "Leadership, comunicazione e cultura della sicurezza", duration: "1h", lessons: 4 }
    ]
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    // Update meta tags
    document.title = "Aggiornamento Dirigente Sicurezza Online | Aliseo Academy";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Aggiornamento dirigente obbligatorio per aziende secondo D.Lgs 81/08. Corso online in e-learning per dirigenti con Aliseo Academy.");
    }
  }, []);

  const mailtoLink = "mailto:commerciale@aliseogroup.it?subject=Richiesta%20informazioni%20aggiornamento%20Dirigente&body=Buongiorno%2C%0A%0ASono%20interessato%20al%20corso%20di%20aggiornamento%20Dirigente%20(6%20ore).%0APotrei%20avere%20maggiori%20informazioni%20sull'attivazione%20in%20e-learning%3F%0A%0AGrazie.";

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
              <Laptop className="w-4 h-4" />
              Aggiornamento E-learning - D.Lgs 81/08
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6"
            >
              Aggiornamento Dirigente <span className="text-brand">Sicurezza sul Lavoro</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-400 leading-relaxed mb-8"
            >
              Il percorso di <strong>aggiornamento dirigente obbligatorio</strong> per mantenere valide le competenze e la conformità normativa. Disponibile interamente online.
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
                  <span className="text-white font-bold">6 ore</span>
                </div>
                <div className="w-px h-6 bg-white/10" />
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-brand" />
                  <span className="text-white font-bold">23 lezioni</span>
                </div>
                <div className="w-px h-6 bg-white/10" />
                <div className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-brand" />
                  <span className="text-white font-bold text-sm">100% Online</span>
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
                  Manutenzione delle Competenze del Dirigente
                </h2>
                <div className="text-slate-600 leading-relaxed space-y-6 text-lg">
                  <p>
                    L'<strong>aggiornamento dirigente obbligatorio</strong> è un requisito fondamentale stabilito dal Testo Unico sulla Sicurezza per garantire che le figure apicali dell'azienda mantengano un livello di preparazione adeguato all'evoluzione del panorama normativo e tecnologico. Il <strong>corso aggiornamento dirigente D.Lgs 81/08</strong> deve essere effettuato con cadenza quinquennale e ha una durata minima di 6 ore, come previsto dall'Accordo Stato-Regioni.
                  </p>
                  <p>
                    L'<strong>aggiornamento dirigenti sicurezza</strong> non è solo un obbligo di legge, ma un momento cruciale di riflessione sulle dinamiche organizzative e sulla cultura della prevenzione. In un contesto legislativo in continua mutazione, dove nuove sentenze e interpretazioni giurisprudenziali ridefiniscono costantemente i confini della responsabilità datoriale e dirigenziale, restare aggiornati è l'unico modo per operare con la necessaria tutela legale e professionale. Aliseo Academy propone un percorso di aggiornamento di alta qualità, focalizzato sugli aspetti pratici e gestionali del ruolo.
                  </p>
                  <p>
                    La nostra soluzione in <strong>e-learning</strong> è stata studiata appositamente per i professionisti che devono conciliare obblighi formativi e impegni manageriali. La piattaforma online permette di fruire dell'<strong>aggiornamento dirigenti sicurezza</strong> in totale autonomia, con la possibilità di interrompere e riprendere le lezioni in base alle proprie disponibilità. Questo approccio garantisce la massima flessibilità per le aziende, eliminando i costi di trasferta e riducendo al minimo l'impatto sull'operatività quotidiana del management.
                  </p>
                  <p>
                    Il programma del corso affronta temi di grande attualità, come i nuovi modelli di leadership per la sicurezza, la gestione dello stress lavoro-correlato in contesti complessi e l'integrazione della sicurezza nei processi di digitalizzazione aziendale. Investire in un aggiornamento costante significa promuovere un ambiente di lavoro più sicuro e produttivo, dove la prevenzione diventa un valore condiviso e un motore di innovazione. Con Aliseo Academy, avrai la garanzia di un percorso formativo accreditato, con il rilascio di un attestato valido su tutto il territorio nazionale.
                  </p>
                  <p>
                    La formazione continua è la chiave per una gestione del rischio efficace. Un dirigente aggiornato è in grado di interpretare correttamente i segnali di cambiamento, di implementare misure di prevenzione all'avanguardia e di guidare l'azienda verso standard di sicurezza sempre più elevati. Scegliere Aliseo Academy per il proprio aggiornamento significa affidarsi a esperti del settore, capaci di trasformare la teoria normativa in strumenti gestionali concreti e immediatamente applicabili nella realtà aziendale.
                  </p>
                </div>
              </article>

              <OnlineLearningBenefits />

              {/* Detailed Sections */}
              <div className="space-y-12">
                {/* A chi è rivolto */}
                <section>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <div className="w-1.5 h-6 bg-brand rounded-full" />
                    A chi è rivolto
                  </h3>
                  <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8">
                    <p className="text-slate-600 leading-relaxed">
                      Il corso è destinato a tutti i <strong>dirigenti aziendali</strong> che hanno già completato il percorso di formazione base di 12 ore. La figura del dirigente, come definita dall'art. 2 del D.Lgs. 81/08, include coloro che attuano le direttive del datore di lavoro organizzando l'attività lavorativa e vigilando su di essa.
                    </p>
                  </div>
                </section>

                {/* Quando è necessario */}
                <section>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <div className="w-1.5 h-6 bg-brand rounded-full" />
                    Quando è necessario l'aggiornamento
                  </h3>
                  <div className="bg-brand/5 border border-brand/10 rounded-3xl p-8">
                    <div className="flex gap-4 items-start">
                      <CalendarClock className="w-8 h-8 text-brand shrink-0" />
                      <div>
                        <p className="text-slate-700 font-medium leading-relaxed">
                          L'aggiornamento deve essere effettuato ogni <strong>5 anni</strong> a partire dalla data di rilascio dell'attestato di formazione base o dell'ultimo aggiornamento effettuato. Il mancato aggiornamento entro i termini previsti comporta la perdita della validità della formazione e l'impossibilità di esercitare legittimamente il ruolo in materia di sicurezza.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Obiettivi */}
                <section>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <div className="w-1.5 h-6 bg-brand rounded-full" />
                    Obiettivi del corso
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "Aggiornare le conoscenze sulle novità legislative",
                      "Analizzare l'evoluzione della giurisprudenza",
                      "Approfondire i sistemi di gestione della sicurezza",
                      "Rafforzare le competenze di leadership e comunicazione",
                      "Valutare l'efficacia dei modelli organizzativi 231",
                      "Promuovere il benessere organizzativo"
                    ].map((obj, i) => (
                      <div key={i} className="flex items-start gap-3 p-4 bg-white border border-slate-200 rounded-2xl shadow-sm">
                        <CheckCircle2 className="w-5 h-5 text-brand shrink-0" />
                        <span className="text-slate-700 text-sm font-medium">{obj}</span>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Programma */}
                <section>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <div className="w-1.5 h-6 bg-brand rounded-full" />
                    Programma Didattico (6 ore - 23 lezioni)
                  </h3>
                  <div className="space-y-4">
                    {[
                      { title: "Modulo 1: Evoluzione della normativa e giurisprudenza", content: "Analisi delle modifiche al D.Lgs. 81/08, nuove direttive europee, aggiornamenti tecnici e standard di sicurezza.", lessons: 5 },
                      { title: "Modulo 2: Il sistema istituzionale e gli organi di vigilanza", content: "Organizzazione del sistema di prevenzione nazionale, ruolo degli organi di controllo e modalità di ispezione.", lessons: 4 },
                      { title: "Modulo 3: Modelli di organizzazione e gestione (MOG) e responsabilità", content: "Implementazione dei modelli 231, responsabilità civile e penale del dirigente, delega di funzioni.", lessons: 5 },
                      { title: "Modulo 4: Valutazione dei rischi e gestione delle emergenze", content: "Criteri di valutazione, gestione dei rischi emergenti (stress, digitalizzazione), piani di emergenza e continuità operativa.", lessons: 5 },
                      { title: "Modulo 5: Leadership, comunicazione e cultura della sicurezza", content: "Tecniche di coinvolgimento dei lavoratori, gestione dei conflitti e promozione di una cultura della sicurezza proattiva.", lessons: 4 }
                    ].map((module, i) => (
                      <div key={i} className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-brand/30 transition-all shadow-sm">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-slate-900 text-brand flex items-center justify-center font-bold shrink-0">
                              {String(i + 1).padStart(2, '0')}
                            </div>
                            <h4 className="font-bold text-slate-900 text-lg">{module.title}</h4>
                          </div>
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider bg-slate-50 px-2 py-1 rounded-md border border-slate-100">
                            {module.lessons} lezioni
                          </span>
                        </div>
                        <p className="text-slate-500 text-sm leading-relaxed ml-14">{module.content}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Normativa */}
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
                          <p className="font-bold">D.Lgs. 81/08 - Art. 37</p>
                          <p className="text-sm text-slate-400">Sancisce l'obbligo di aggiornamento periodico per i dirigenti.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <FileText className="w-6 h-6 text-brand shrink-0" />
                        <div>
                          <p className="font-bold">Accordo Stato-Regioni 21/12/2011</p>
                          <p className="text-sm text-slate-400">Definisce la durata di 6 ore e la periodicità quinquennale dell'aggiornamento.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <ShieldCheck className="w-6 h-6 text-brand shrink-0" />
                        <div>
                          <p className="font-bold">Accordo Stato-Regioni 07/07/2016</p>
                          <p className="text-sm text-slate-400">Conferma la validità della modalità e-learning per l'aggiornamento dei dirigenti.</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </section>
              </div>
            </div>

            {/* Right Column: Sidebar Info */}
            <div className="space-y-8">
              {/* Info Card */}
              <div className="bg-slate-900 rounded-3xl p-8 sticky top-24 shadow-2xl shadow-slate-200">
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
                      <p className="text-white font-bold">6 ore</p>
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
            </div>
          </div>
        </div>
      </section>

      {/* Potrebbero interessarti anche */}
      <section className="py-16 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-black text-slate-900 mb-8 flex items-center gap-3">
            <div className="w-2 h-6 bg-brand rounded-full" />
            Potrebbero interessarti anche
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <button 
              onClick={() => onNavigate('corso-dirigente')}
              className="group p-6 bg-slate-50 rounded-2xl border border-slate-200 hover:border-brand/30 hover:bg-white transition-all text-left shadow-sm"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-brand">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-brand group-hover:translate-x-1 transition-all" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Corso Dirigente</h3>
              <p className="text-sm text-slate-500 mb-4">Formazione obbligatoria per dirigenti ai sensi del D.Lgs 81/08.</p>
              <div className="flex items-center gap-4 text-xs font-bold text-slate-400">
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> 12h</span>
                <span className="flex items-center gap-1"><BookOpen className="w-3.5 h-3.5" /> 37 lezioni</span>
                <span className="flex items-center gap-1"><Euro className="w-3.5 h-3.5" /> 195,20 €</span>
              </div>
            </button>

            <button 
              onClick={() => onNavigate('corso-preposto')}
              className="group p-6 bg-slate-50 rounded-2xl border border-slate-200 hover:border-brand/30 hover:bg-white transition-all text-left shadow-sm"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-brand">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-brand group-hover:translate-x-1 transition-all" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Corso Preposto</h3>
              <p className="text-sm text-slate-500 mb-4">Formazione aggiuntiva e integrativa per la figura del preposto ai sensi del D.Lgs 81/08.</p>
              <div className="flex items-center gap-4 text-xs font-bold text-slate-400">
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> 5h</span>
                <span className="flex items-center gap-1"><BookOpen className="w-3.5 h-3.5" /> 20 lezioni</span>
                <span className="flex items-center gap-1"><Euro className="w-3.5 h-3.5" /> 61,00 €</span>
              </div>
            </button>

            <button 
              onClick={() => onNavigate('aggiornamento-preposto')}
              className="group p-6 bg-slate-50 rounded-2xl border border-slate-200 hover:border-brand/30 hover:bg-white transition-all text-left shadow-sm"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-brand">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-brand group-hover:translate-x-1 transition-all" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2">Aggiornamento Preposto</h3>
              <p className="text-sm text-slate-500 mb-4">Aggiornamento obbligatorio per la figura del preposto ai sensi del D.Lgs 81/08.</p>
              <div className="flex items-center gap-4 text-xs font-bold text-slate-400">
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> 6h</span>
                <span className="flex items-center gap-1"><Euro className="w-3.5 h-3.5" /> 73,20 €</span>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 uppercase tracking-tight">
            Mantieni la tua azienda <span className="text-brand">Conforme</span>
          </h2>
          <p className="text-lg text-slate-600 mb-10">
            Soluzioni su misura per la tua impresa: mantieni la tua leadership aggiornata e in regola con una formazione flessibile, certificata e 100% online.
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

export default AggiornamentoDirigentePage;
