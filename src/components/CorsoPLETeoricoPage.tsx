import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Clock, BookOpen, Euro, CheckCircle2, Users, FileText, ChevronRight, ShieldCheck, GraduationCap, Scale, Laptop, Globe, Award, AlertTriangle, Monitor, Volume2, Info } from 'lucide-react';
import { courses } from '../data/courses';
import OnlineLearningBenefits from './OnlineLearningBenefits';

interface CorsoPLETeoricoPageProps {
  onNavigate: (view: any) => void;
}

const CorsoPLETeoricoPage: React.FC<CorsoPLETeoricoPageProps> = ({ onNavigate }) => {
  const course = courses.find(c => c.id === "60") || {
    duration: "4h",
    price: "48,80 €",
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Corso PLE Modulo Teorico Online | Aliseo Academy";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Corso online per il modulo teorico dell'abilitazione alla conduzione di piattaforme di lavoro elevabili (PLE). Formazione obbligatoria conforme all'Accordo Stato-Regioni.");
    }
  }, []);

  const mailtoLink = "mailto:commerciale@aliseogroup.it?subject=Richiesta%20informazioni%20corso%20PLE%20Teorico&body=Buongiorno%2C%0A%0ASono%20interessato%20al%20corso%20Abilitazione%20alla%20conduzione%20di%20piattaforme%20di%20lavoro%20elevabili%20(PLE)%20–%20Modulo%20Teorico%20Online.%0APotrei%20avere%20maggiori%20informazioni%3F%0A%0AGrazie.";

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
              <FileText className="w-4 h-4" />
              Abilitazione Attrezzature - Modulo Teorico
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6"
            >
              Abilitazione <span className="text-brand">PLE</span> Modulo Teorico Online
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-400 leading-relaxed mb-8"
            >
              Assolvi alla parte teorica obbligatoria per l'abilitazione all'uso di piattaforme aeree comodamente online. Formazione certificata ai sensi dell'Accordo Stato-Regioni del 22/02/2012.
            </motion.p>
            
            {/* Warning Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="bg-amber-500/10 border border-amber-500/20 rounded-2xl p-6 mb-8 flex gap-4 items-start"
            >
              <AlertTriangle className="w-6 h-6 text-amber-500 shrink-0 mt-1" />
              <div>
                <p className="text-amber-200 font-bold mb-1">Nota Importante:</p>
                <p className="text-amber-200/80 text-sm leading-relaxed">
                  Questo corso copre <strong>SOLO la parte teorica</strong> dell'abilitazione. Per ottenere l'abilitazione completa, è obbligatorio completare anche la parte pratica.
                </p>
              </div>
            </motion.div>

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
                  Descrizione del corso
                </h2>
                <div className="text-slate-600 leading-relaxed space-y-6 text-lg">
                  <p>
                    L'utilizzo di Piattaforme di Lavoro Elevabili (PLE) richiede una specifica abilitazione degli operatori, come stabilito dall'Accordo Stato-Regioni del 22 febbraio 2012. Questo percorso formativo è essenziale per garantire la sicurezza durante i lavori in quota, riducendo drasticamente il rischio di cadute e incidenti legati all'uso improprio delle attrezzature.
                  </p>
                  <p>
                    Il corso proposto da Aliseo Academy permette di completare l'intero <strong>modulo teorico in modalità e-learning</strong>. Questa soluzione è ideale per aziende e professionisti che desiderano ottimizzare i tempi, consentendo ai lavoratori di apprendere le nozioni fondamentali sulla sicurezza, la meccanica e le procedure operative direttamente dal proprio PC o tablet, senza dover interrompere l'attività lavorativa per intere giornate in aula.
                  </p>
                  <p>
                    La formazione online offre una flessibilità senza precedenti: i contenuti multimediali, i video esplicativi e i test intermedi garantiscono un apprendimento efficace e verificabile. Il modulo teorico affronta temi cruciali come le tipologie di PLE (con e senza stabilizzatori), i dispositivi di comando, i sistemi di sicurezza e le procedure di emergenza.
                  </p>
                  <p className="bg-blue-50 p-6 rounded-2xl border-l-4 border-blue-500 font-medium italic">
                    "La formazione pratica e l’abilitazione completa possono essere organizzate su richiesta, presso le nostre sedi o direttamente presso l’azienda cliente."
                  </p>
                  <p>
                    È fondamentale ricordare che, per legge, la sola teoria non abilita all'uso del mezzo. Una volta superato il test finale del modulo teorico online, il lavoratore dovrà affrontare la prova pratica su una piattaforma aerea sotto la supervisione di un istruttore qualificato. Aliseo Academy supporta le aziende in tutto questo processo, garantendo una formazione di alta qualità conforme agli standard di sicurezza più rigorosi.
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
                    <p className="text-slate-600 mb-6">
                      Il corso è rivolto a lavoratori, disoccupati o professionisti che intendono acquisire le competenze teoriche necessarie per la conduzione di PLE.
                    </p>
                    <ul className="space-y-3">
                      {[
                        "Operatori del settore edile e impiantistico",
                        "Addetti alle manutenzioni in quota",
                        "Personale addetto alla potatura e cura del verde",
                        "Installatori di insegne e luminarie",
                        "Aziende che devono regolarizzare la posizione dei propri dipendenti"
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
                      "Conoscere la normativa vigente (Accordo 22/02/2012)",
                      "Apprendere le tipologie di PLE e loro componenti",
                      "Identificare i dispositivi di comando e sicurezza",
                      "Comprendere i controlli pre-utilizzo e periodici",
                      "Conoscere le manovre di emergenza e salvataggio",
                      "Superare il test teorico propedeutico alla pratica"
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
                      { title: "Modulo Giuridico - Normativo", desc: "Cenni su igiene e sicurezza sul lavoro con particolare riferimento all'uso di attrezzature di lavoro semoventi con conducente a bordo." },
                      { title: "Modulo Tecnico: categorie di PLE", desc: "Componenti principali, dispositivi di comando e di sicurezza, controlli pre-utilizzo." },
                      { title: "Procedure operative e di sicurezza", desc: "Posizionamento della PLE sul luogo di lavoro, manovre di emergenza, DPI da utilizzare." },
                      { title: "Manutenzione e verifiche periodiche", desc: "Controlli visivi e funzionali, ricarica batterie, rifornimento e manutenzione periodica." },
                      { title: "Test di verifica finale", desc: "Questionario a risposta multipla per la valutazione dell'apprendimento teorico." }
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
                    <div className="text-slate-400 text-sm mb-6 leading-relaxed">
                      L'abilitazione all'uso delle attrezzature di lavoro è disciplinata dall'Art. 73 del D.Lgs. 81/08 e specificata nei dettagli dall'Accordo Stato-Regioni del 22 febbraio 2012.
                    </div>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <Scale className="w-6 h-6 text-brand shrink-0" />
                        <div>
                          <p className="font-bold">D.Lgs 81/08 - Art. 73</p>
                          <p className="text-sm text-slate-400">Obbligo di informazione, formazione e addestramento per l'uso di attrezzature.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <FileText className="w-6 h-6 text-brand shrink-0" />
                        <div>
                          <p className="font-bold">Accordo Stato-Regioni 22/02/2012</p>
                          <p className="text-sm text-slate-400">Individuazione delle attrezzature di lavoro per le quali è richiesta una specifica abilitazione degli operatori.</p>
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
                
                <div className="mt-8 p-4 bg-white/5 rounded-2xl border border-white/10">
                  <div className="flex gap-3 items-start">
                    <Info className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Per l'abilitazione completa è necessaria la prova pratica. Contattaci per organizzarla.
                    </p>
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
              { title: "Rischio Videoterminali", desc: "Formazione specifica VDT", view: 'corso-videoterminali', icon: Monitor },
              { title: "Rischio Rumore", desc: "Formazione specifica rumore", view: 'corso-rumore', icon: Volume2 },
              { title: "Aggiornamento Lavoratori", desc: "Aggiornamento quinquennale 6h", view: 'aggiornamento-lavoratori', icon: Clock },
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

export default CorsoPLETeoricoPage;
