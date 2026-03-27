import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Clock, BookOpen, Euro, CheckCircle2, Users, FileText, ChevronRight, ShieldCheck, GraduationCap, Scale, Laptop, Globe, Award, Monitor } from 'lucide-react';
import { courses } from '../data/courses';
import OnlineLearningBenefits from './OnlineLearningBenefits';

interface CorsoLavoratoriRischioBassoUfficiPageProps {
  onNavigate: (view: any) => void;
}

const CorsoLavoratoriRischioBassoUfficiPage: React.FC<CorsoLavoratoriRischioBassoUfficiPageProps> = ({ onNavigate }) => {
  const course = courses.find(c => c.id === "22") || {
    duration: "4h",
    price: "48,80 €",
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Corso Sicurezza Lavoratori Rischio Basso Uffici Online | Aliseo Academy";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Corso di formazione specifica per lavoratori a rischio basso settore uffici. Formazione obbligatoria online conforme al D.Lgs 81/08.");
    }
  }, []);

  const mailtoLink = "mailto:commerciale@aliseogroup.it?subject=Richiesta%20informazioni%20corso%20Lavoratori%20Rischio%20Basso%20Uffici&body=Buongiorno%2C%0A%0ASono%20interessato%20al%20corso%20Formazione%20Specifica%20Lavoratori%20Rischio%20Basso%20Settore%20Uffici%20Online.%0APotrei%20avere%20maggiori%20informazioni%3F%0A%0AGrazie.";

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
              Sicurezza Lavoratori - Rischio Basso
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6"
            >
              Corso Lavoratori <span className="text-brand">Rischio Basso Uffici</span> Online
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-400 leading-relaxed mb-4"
            >
              Corso di formazione specifica per lavoratori a rischio basso del settore uffici, obbligatorio ai sensi del D.Lgs. 81/08. Il percorso è erogato interamente in modalità e-learning certificata, conforme alla normativa vigente.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="text-lg text-slate-500 leading-relaxed mb-8"
            >
              Valido per personale amministrativo, impiegati e lavoratori che operano in ambienti d’ufficio.
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
                  La Formazione Specifica per il Settore Uffici
                </h2>
                <div className="text-slate-600 leading-relaxed space-y-6 text-lg">
                  <p>
                    Il corso è disponibile online in modalità e-learning. Per aziende o gruppi che desiderano organizzare la formazione anche in presenza con nostro docente, è possibile richiedere una soluzione dedicata contattandoci.
                  </p>
                  <p>
                    La sicurezza sul lavoro non riguarda solo i cantieri o le fabbriche. Anche l'ambiente d'ufficio presenta rischi specifici che, se trascurati, possono portare a disturbi muscolo-scheletrici, affaticamento visivo e stress. Il **corso di formazione specifica per lavoratori a rischio basso del settore uffici** è progettato per rispondere a queste esigenze, fornendo ai dipendenti gli strumenti per operare in modo sano e sicuro.
                  </p>
                  <p>
                    Secondo il **D.Lgs 81/08** e l'Accordo Stato-Regioni, ogni lavoratore deve ricevere una formazione adeguata ai rischi presenti nella propria mansione. Per chi lavora in ufficio, i rischi principali sono legati all'uso prolungato dei **videoterminali (VDT)**, alla postura scorretta e a fattori ambientali come l'illuminazione e il microclima. La formazione online di Aliseo Academy affronta questi temi in modo pratico e interattivo, permettendo ai lavoratori di apprendere come regolare la propria postazione, come gestire le pause e come prevenire l'insorgenza di patologie professionali.
                  </p>
                  <p>
                    Scegliere la modalità **e-learning** per la formazione sulla sicurezza offre numerosi vantaggi. Le aziende possono formare il proprio personale senza interrompere le attività lavorative, poiché ogni dipendente può seguire le lezioni secondo i propri ritmi e orari. La nostra piattaforma garantisce un monitoraggio costante dell'apprendimento attraverso test intermedi e un quiz finale, assicurando che le competenze vengano effettivamente acquisite.
                  </p>
                  <p>
                    L'adempimento agli obblighi formativi è fondamentale non solo per la tutela della salute dei lavoratori, ma anche per la conformità legale dell'azienda. La mancanza di formazione specifica può esporre il datore di lavoro a pesanti sanzioni. Con Aliseo Academy, avrai la certezza di un percorso formativo aggiornato alle ultime normative, con il rilascio di un attestato valido su tutto il territorio nazionale. Investire nella sicurezza d'ufficio significa migliorare il benessere dei dipendenti e, di conseguenza, la produttività aziendale.
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
                        "Impiegati amministrativi e contabili",
                        "Addetti al front-office e segreteria",
                        "Personale che utilizza il computer per più di 20 ore settimanali",
                        "Lavoratori di aziende classificate a rischio basso (uffici, servizi)"
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
                      "Riconoscere i rischi legati all'ambiente d'ufficio",
                      "Apprendere l'ergonomia della postazione di lavoro",
                      "Prevenire i disturbi legati all'uso dei VDT",
                      "Conoscere le procedure di emergenza e primo soccorso"
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
                      { title: "Ergonomia della postazione", desc: "Regolazione di sedia, scrivania e monitor per una postura corretta." },
                      { title: "Uso dei videoterminali (VDT)", desc: "Rischi per la vista e l'apparato muscolo-scheletrico, pause obbligatorie." },
                      { title: "Microclima e illuminazione", desc: "Gestione della temperatura, umidità e luce nell'ambiente di lavoro." },
                      { title: "Fattori di rischio trasversali", desc: "Stress lavoro-correlato, organizzazione del lavoro e benessere." }
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
                          <p className="font-bold">D.Lgs 81/08 - Testo Unico Sicurezza</p>
                          <p className="text-sm text-slate-400">Art. 37: Obblighi di formazione e addestramento dei lavoratori.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <FileText className="w-6 h-6 text-brand shrink-0" />
                        <div>
                          <p className="font-bold">Accordo Stato-Regioni</p>
                          <p className="text-sm text-slate-400">Definizione dei contenuti minimi e della durata della formazione specifica.</p>
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
              { title: "Corso Preposto", desc: "Responsabile Sicurezza 8h", view: 'corso-preposto', icon: Users },
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

export default CorsoLavoratoriRischioBassoUfficiPage;
