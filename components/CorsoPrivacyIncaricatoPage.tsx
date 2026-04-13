import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Clock, BookOpen, Euro, CheckCircle2, Users, FileText, ChevronRight, ShieldCheck, GraduationCap, Scale, Laptop, Globe, Award, Lock, Database, Eye } from 'lucide-react';
import { courses } from '../data/courses';
import OnlineLearningBenefits from './OnlineLearningBenefits';

interface CorsoPrivacyIncaricatoPageProps {
  onNavigate: (view: any) => void;
}

const CorsoPrivacyIncaricatoPage: React.FC<CorsoPrivacyIncaricatoPageProps> = ({ onNavigate }) => {
  const course = courses.find(c => c.id === "72") || {
    duration: "2h",
    price: "24,40 €",
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Corso Privacy Incaricato Trattamento Dati Online | GDPR 2016/679";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Corso obbligatorio per Incaricato al Trattamento dei dati personali online. Formazione GDPR 2h in e-learning con attestato certificato.");
    }
  }, []);

  const mailtoLink = "mailto:commerciale@aliseogroup.it?subject=Richiesta%20informazioni%20corso%20Privacy%20Incaricato%20Trattamento%20Dati&body=Buongiorno%2C%0A%0ASono%20interessato%20al%20corso%20Privacy%20Incaricato%20Trattamento%20Dati%20Online.%0APotrei%20avere%20maggiori%20informazioni%3F%0A%0AGrazie.";

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
              <Lock className="w-4 h-4" />
              Formazione Obbligatoria GDPR - 2 Ore
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6"
            >
              Corso <span className="text-brand">Incaricato Trattamento Dati</span> Online
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-400 leading-relaxed mb-4"
            >
              Assolvi agli obblighi del Regolamento UE 2016/679 con la formazione e-learning per il personale.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="text-lg text-slate-500 leading-relaxed mb-8"
            >
              Il corso fornisce le competenze necessarie per gestire correttamente i dati personali all'interno dell'organizzazione, garantendo la protezione della privacy e la conformità normativa.
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
                  Formazione Privacy GDPR: Il Ruolo dell'Incaricato al Trattamento
                </h2>
                <div className="text-slate-600 leading-relaxed space-y-6 text-lg">
                  <p>
                    Il **Regolamento UE 2016/679 (GDPR)** ha introdotto una visione moderna e rigorosa della protezione dei dati personali, ponendo al centro la responsabilità (accountability) del Titolare del trattamento. In questo scenario, la formazione degli **Incaricati al Trattamento** (o persone autorizzate) non è solo un obbligo di legge, ma un pilastro fondamentale per la sicurezza delle informazioni aziendali. Ogni dipendente o collaboratore che manipola dati personali deve essere istruito sulle modalità corrette di gestione, per evitare sanzioni e violazioni della privacy (data breach).
                  </p>
                  <p>
                    Il **corso per incaricato al trattamento dei dati personali online** di Aliseo Academy offre un percorso formativo rapido ed efficace di 2 ore, progettato specificamente per la modalità **e-learning**. Questa soluzione permette a tutto il personale aziendale di acquisire le nozioni fondamentali senza interrompere i flussi di lavoro, accedendo ai contenuti in qualsiasi momento e da qualsiasi dispositivo. La formazione online garantisce uniformità nei messaggi trasmessi e la possibilità di verificare immediatamente l'apprendimento attraverso test interattivi.
                  </p>
                  <p>
                    Durante il corso, vengono analizzati i principi cardine della privacy: dalla liceità del trattamento alla minimizzazione dei dati, fino ai diritti degli interessati. Particolare attenzione viene rivolta alle misure di sicurezza tecniche e organizzative che ogni incaricato deve adottare quotidianamente: gestione delle password, archiviazione sicura dei documenti cartacei, uso corretto della posta elettronica e consapevolezza dei rischi legati al phishing e all'ingegneria sociale.
                  </p>
                  <p>
                    Investire nella formazione privacy significa proteggere il patrimonio informativo dell'azienda e costruire un rapporto di fiducia con clienti e fornitori. Un personale istruito è la prima linea di difesa contro le minacce informatiche e gli errori umani. Al termine del percorso, Aliseo Academy rilascia un attestato certificato che documenta l'avvenuta formazione, assolvendo così agli obblighi previsti dal GDPR in materia di istruzioni impartite agli autorizzati al trattamento.
                  </p>
                </div>
              </article>

              <OnlineLearningBenefits />

              {/* Detailed Sections */}
              <div className="space-y-12">
                <section>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <div className="w-1.5 h-6 bg-brand rounded-full" />
                    Descrizione del corso
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Il corso mira a fornire una panoramica completa sugli obblighi derivanti dal GDPR per chiunque tratti dati personali. Attraverso un linguaggio semplice e casi pratici, i partecipanti impareranno a distinguere tra dati comuni e particolari, a comprendere il ruolo dei vari soggetti (Titolare, Responsabile, Incaricato) e ad applicare le misure di sicurezza necessarie per prevenire la perdita o l'accesso non autorizzato alle informazioni.
                  </p>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <div className="w-1.5 h-6 bg-brand rounded-full" />
                    Destinatari
                  </h3>
                  <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8">
                    <ul className="space-y-3">
                      {[
                        "Dipendenti che gestiscono dati di clienti o fornitori",
                        "Personale amministrativo e delle risorse umane",
                        "Collaboratori esterni autorizzati al trattamento",
                        "Addetti al marketing e alle vendite",
                        "Tutti i lavoratori che utilizzano strumenti informatici aziendali"
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
                    Obiettivi formativi
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "Comprendere i principi del GDPR",
                      "Identificare i dati personali e particolari",
                      "Conoscere i diritti degli interessati",
                      "Applicare le misure di sicurezza quotidiane",
                      "Gestire correttamente i consensi",
                      "Riconoscere e segnalare un data breach"
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
                      { title: "Introduzione al GDPR", desc: "Definizioni, ambito di applicazione e principi fondamentali della protezione dati." },
                      { title: "I soggetti della Privacy", desc: "Ruoli e responsabilità: Titolare, Responsabile, DPO e Incaricato." },
                      { title: "Diritti e Adempimenti", desc: "Informativa, consenso, diritto all'oblio e accesso ai dati." },
                      { title: "Sicurezza del Trattamento", desc: "Misure tecniche, gestione password, sicurezza fisica e data breach." }
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
                          <p className="font-bold">Regolamento UE 2016/679 (GDPR)</p>
                          <p className="text-sm text-slate-400">Il quadro normativo europeo unico per la protezione dei dati personali.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <FileText className="w-6 h-6 text-brand shrink-0" />
                        <div>
                          <p className="font-bold">D.Lgs 101/2018</p>
                          <p className="text-sm text-slate-400">Decreto di armonizzazione del Codice Privacy italiano al GDPR.</p>
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
              { title: "Privacy Sanitaria", desc: "Incaricato nel settore sanitario", view: 'corso-privacy-sanitario', icon: Database },
              { title: "Sicurezza Lavoratori", desc: "Formazione obbligatoria 81/08", view: 'corso-formazione-lavoratori-generale', icon: ShieldCheck },
              { title: "HACCP", desc: "Igiene e sicurezza alimentare", view: 'corso-haccp', icon: GraduationCap },
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

export default CorsoPrivacyIncaricatoPage;
