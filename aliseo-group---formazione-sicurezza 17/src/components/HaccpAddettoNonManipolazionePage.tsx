import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Clock, BookOpen, Euro, CheckCircle2, Users, FileText, ChevronRight, ShieldCheck, GraduationCap, Scale, Laptop, Globe, Award } from 'lucide-react';
import { courses } from '../data/courses';
import OnlineLearningBenefits from './OnlineLearningBenefits';

interface HaccpAddettoNonManipolazionePageProps {
  onNavigate: (view: any) => void;
}

const HaccpAddettoNonManipolazionePage: React.FC<HaccpAddettoNonManipolazionePageProps> = ({ onNavigate }) => {
  const course = courses.find(c => c.id === "86")!;

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Corso HACCP Addetto Non Manipolazione | Aliseo Academy";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Corso HACCP online per addetti che non manipolano alimenti. Formazione obbligatoria per magazzinieri e trasportatori. 100% online.");
    }
  }, []);

  const mailtoLink = "mailto:commerciale@aliseogroup.it?subject=Richiesta%20informazioni%20corso%20HACCP%20Addetto%20Non%20Manipolazione&body=Buongiorno%2C%0A%0ASono%20interessato%20al%20corso%20HACCP%20per%20Addetti%20che%20non%20manipolano%20alimenti.%0APotrei%20avere%20maggiori%20informazioni%3F%0A%0AGrazie.";

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
              Reg. CE 852/04 - Sicurezza Alimentare
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6"
            >
              Corso HACCP <span className="text-brand">Addetto Non Manipolazione</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-400 leading-relaxed mb-8"
            >
              La formazione obbligatoria per chi opera in ambienti alimentari senza contatto diretto con il cibo. Sicurezza e igiene per magazzino e logistica.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col gap-6"
            >
              <div>
                <p className="text-slate-400 text-sm mb-3 font-medium">
                  Corso disponibile 100% online in modalità e-learning.
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
                  <span className="text-white font-bold">{course.duration}</span>
                </div>
                <div className="w-px h-6 bg-white/10" />
                <div className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-brand" />
                  <span className="text-white font-bold text-sm">Validità Nazionale</span>
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
                  HACCP per personale che non manipola alimenti
                </h2>
                <div className="text-slate-600 leading-relaxed space-y-6 text-lg">
                  <p>
                    Il <strong>corso HACCP per addetti che non manipolano alimenti</strong> è un pilastro fondamentale della sicurezza alimentare all'interno di una filiera complessa. Sebbene questi operatori non entrino in contatto diretto con il cibo "nudo", la loro attività si svolge in ambienti dove gli alimenti vengono stoccati, trasportati o venduti in confezioni sigillate. La prevenzione dei rischi, in questo contesto, si focalizza sulla protezione dell'integrità del prodotto e dell'ambiente circostante.
                  </p>
                  <p>
                    Il Regolamento CE 852/04 stabilisce che tutto il personale operante nel settore alimentare debba ricevere una formazione adeguata in relazione alle proprie mansioni. Per chi si occupa di logistica, magazzino o vendita di prodotti confezionati, il rischio principale non è la contaminazione diretta durante la preparazione, ma la contaminazione crociata indiretta, il deterioramento dovuto a temperature errate o la rottura accidentale degli imballaggi.
                  </p>
                  <p>
                    Il programma didattico offerto da Aliseo Academy approfondisce le basi dell'igiene alimentare, ponendo l'accento sui comportamenti corretti da tenere all'interno dei locali di stoccaggio. Vengono analizzate le procedure di pulizia e sanificazione degli ambienti, la gestione dei rifiuti e l'importanza del monitoraggio delle temperature nelle celle frigorifere o nei mezzi di trasporto. Comprendere come un errore nella movimentazione possa compromettere la salubrità di un intero lotto è essenziale per ogni addetto.
                  </p>
                  <p>
                    La nostra soluzione <strong>e-learning</strong> permette di formare il personale in modo rapido ed efficace, minimizzando l'impatto sull'operatività aziendale. Il corso di 4 ore è strutturato per fornire nozioni chiare e immediatamente applicabili, con un linguaggio accessibile anche a chi non ha una formazione scientifica specifica. La flessibilità dell'online consente di seguire le lezioni da qualsiasi dispositivo, garantendo un apprendimento di qualità certificata.
                  </p>
                  <p>
                    Ottenere l'attestato HACCP per addetti non manipolatori è un requisito indispensabile per la conformità aziendale. Un magazziniere o un trasportatore consapevole è in grado di identificare tempestivamente anomalie, come confezioni danneggiate o segni di infestazione, agendo come prima linea di difesa per la sicurezza alimentare. Investire in questa formazione significa elevare la professionalità di tutto lo staff e garantire una catena del valore solida e sicura per il consumatore finale.
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
                      Il corso è rivolto a tutti gli operatori che lavorano nel settore alimentare senza contatto diretto con il cibo: <strong>magazzinieri, trasportatori, autisti di mezzi refrigerati, addetti alla vendita di prodotti confezionati, scaffalisti di supermercati, promoter</strong> e personale addetto alle pulizie in ambienti alimentari.
                    </p>
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <div className="w-1.5 h-6 bg-brand rounded-full" />
                    Obiettivi del corso
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {course.objectives.map((obj, i) => (
                      <div key={i} className="flex items-center gap-3 p-4 bg-white border border-slate-200 rounded-2xl shadow-sm">
                        <CheckCircle2 className="w-5 h-5 text-brand shrink-0" />
                        <span className="text-sm font-medium text-slate-700">{obj}</span>
                      </div>
                    ))}
                    <div className="flex items-center gap-3 p-4 bg-white border border-slate-200 rounded-2xl shadow-sm">
                      <CheckCircle2 className="w-5 h-5 text-brand shrink-0" />
                      <span className="text-sm font-medium text-slate-700">Gestione magazzino</span>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-white border border-slate-200 rounded-2xl shadow-sm">
                      <CheckCircle2 className="w-5 h-5 text-brand shrink-0" />
                      <span className="text-sm font-medium text-slate-700">Monitoraggio CCP</span>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <div className="w-1.5 h-6 bg-brand rounded-full" />
                    Programma Didattico
                  </h3>
                  <div className="space-y-4">
                    {course.syllabus.map((item, i) => (
                      <div key={i} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-bold text-slate-900">{item.title}</h4>
                          <span className="text-xs font-bold text-brand bg-brand/10 px-2 py-1 rounded-md">{item.duration}</span>
                        </div>
                        <p className="text-sm text-slate-500 leading-relaxed">Modulo focalizzato sull'igiene generale e sulla prevenzione dei rischi indiretti.</p>
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
                      {course.references.map((ref, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Scale className="w-6 h-6 text-brand shrink-0" />
                          <div>
                            <p className="font-bold">{ref}</p>
                            <p className="text-sm text-slate-400">Normativa di riferimento per l'igiene dei prodotti alimentari applicabile a tutta la filiera.</p>
                          </div>
                        </li>
                      ))}
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
                      <Users className="w-5 h-5 text-brand" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs uppercase font-bold tracking-wider">Destinatari</p>
                      <p className="text-white font-bold text-sm">Addetti Non Manipolazione</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                      <Award className="w-5 h-5 text-brand" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs uppercase font-bold tracking-wider">Certificazione</p>
                      <p className="text-white font-bold text-sm">Attestato HACCP</p>
                    </div>
                  </div>
                </div>
                <div className="mt-10 pt-8 border-t border-white/10">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-slate-400 font-bold uppercase text-xs tracking-widest">Prezzo</span>
                    <span className="text-3xl font-black text-brand">{course.price}</span>
                  </div>
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
              { title: "Pagina Madre HACCP", desc: "Tutti i corsi HACCP", view: 'corso-haccp', icon: BookOpen },
              { title: "Addetto Manipolazione", desc: "Corso per operatori", view: 'corso-haccp-addetto-manipolazione', icon: GraduationCap },
              { title: "Responsabile HACCP", desc: "Corso per titolari", view: 'corso-haccp-responsabile', icon: Users },
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

export default HaccpAddettoNonManipolazionePage;
