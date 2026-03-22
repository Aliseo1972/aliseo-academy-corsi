import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Clock, BookOpen, Euro, CheckCircle2, Users, FileText, ChevronRight, ShieldCheck, GraduationCap, Scale, Laptop, Globe, Award, Beaker } from 'lucide-react';
import { courses } from '../data/courses';
import OnlineLearningBenefits from './OnlineLearningBenefits';

interface CorsoDiisocianatiBasePageProps {
  onNavigate: (view: any) => void;
}

const CorsoDiisocianatiBasePage: React.FC<CorsoDiisocianatiBasePageProps> = ({ onNavigate }) => {
  const course = courses.find(c => c.id === "52") || {
    duration: "2h",
    price: "24,40 €",
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Corso Diisocianati Base Online | Formazione Obbligatoria REACH";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Corso obbligatorio diisocianati livello base online. Formazione e-learning conforme normativa europea per la sicurezza sul lavoro.");
    }
  }, []);

  const mailtoLink = "mailto:commerciale@aliseogroup.it?subject=Richiesta%20informazioni%20corso%20Utilizzo%20Diisocianati%20Base&body=Buongiorno%2C%0A%0ASono%20interessato%20al%20corso%20Utilizzo%20Diisocianati%20Base%20Online.%0APotrei%20avere%20maggiori%20informazioni%3F%0A%0AGrazie.";

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
              <Beaker className="w-4 h-4" />
              Livello Base - Regolamento REACH
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6"
            >
              Corso <span className="text-brand">Diisocianati Base</span> Online
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-400 leading-relaxed mb-4"
            >
              Formazione obbligatoria di primo livello per l'uso sicuro dei diisocianati.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="text-lg text-slate-500 leading-relaxed mb-8"
            >
              Il corso diisocianati livello base è il punto di partenza fondamentale per tutti i lavoratori che manipolano prodotti contenenti diisocianati in concentrazioni superiori allo 0,1%.
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
                  Perché la Formazione Base sui Diisocianati è Obbligatoria?
                </h2>
                <div className="text-slate-600 leading-relaxed space-y-6 text-lg">
                  <p>
                    L'introduzione della restrizione REACH (Regolamento UE 2020/1149) ha reso la formazione sull'uso dei diisocianati un requisito legale imprescindibile per chiunque operi con queste sostanze. Il livello base è rivolto a tutti gli utilizzatori professionali e industriali che effettuano operazioni semplici o in sistemi chiusi, dove il rischio di esposizione è comunque presente ma gestibile attraverso procedure standardizzate.
                  </p>
                  <p>
                    I diisocianati sono componenti chimici essenziali per la produzione di poliuretani, ampiamente utilizzati in vernici, sigillanti, schiume isolanti e adesivi. Tuttavia, la loro manipolazione impropria può portare a gravi problemi di salute, in particolare la sensibilizzazione respiratoria (asma professionale) e dermatiti da contatto. Una volta che un lavoratore è diventato sensibilizzato, anche un'esposizione minima può scatenare reazioni allergiche severe, rendendo spesso impossibile il proseguimento dell'attività lavorativa in quel settore.
                  </p>
                  <p>
                    Il corso online di Aliseo Academy fornisce le basi teoriche necessarie per comprendere la natura di queste sostanze e come proteggersi efficacemente. Attraverso la nostra piattaforma e-learning, i lavoratori possono apprendere le proprietà chimico-fisiche dei diisocianati, i segnali di pericolo sulle etichette dei prodotti e le schede di sicurezza (SDS). La formazione base si concentra in particolare sulle misure di igiene industriale e sull'uso corretto dei Dispositivi di Protezione Individuale (DPI), come guanti specifici e maschere respiratorie, fondamentali per prevenire l'assorbimento cutaneo e l'inalazione dei vapori.
                  </p>
                  <p>
                    Adempiere a questo obbligo formativo non è solo una questione di conformità normativa per evitare sanzioni amministrative e penali, ma rappresenta un investimento diretto nella salute a lungo termine dei dipendenti e nella stabilità operativa dell'azienda. La formazione base è il primo passo di un percorso di consapevolezza che Aliseo Academy supporta con contenuti aggiornati e una modalità di fruizione flessibile, ideale per non interrompere i flussi produttivi aziendali.
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
                        "Lavoratori che utilizzano prodotti con diisocianati a livello base",
                        "Operatori che manipolano sigillanti e schiume poliuretaniche",
                        "Personale addetto al confezionamento e stoccaggio",
                        "Artigiani e professionisti del settore edile e manifatturiero"
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
                      "Identificare i prodotti contenenti diisocianati",
                      "Comprendere i rischi per la salute (sensibilizzazione)",
                      "Applicare le misure di igiene e protezione base",
                      "Conoscere le procedure di emergenza iniziali"
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
                      { title: "Proprietà dei diisocianati", desc: "Chimica di base e comportamento delle sostanze." },
                      { title: "Rischi per la salute", desc: "Effetti tossicologici e sensibilizzazione." },
                      { title: "Misure di controllo", desc: "Gestione dell'esposizione e igiene sul lavoro." },
                      { title: "Uso dei DPI", desc: "Scelta e manutenzione dei dispositivi di protezione." }
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
                          <p className="font-bold">Regolamento (UE) 2020/1149</p>
                          <p className="text-sm text-slate-400">Restrizione REACH specifica per i diisocianati.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <FileText className="w-6 h-6 text-brand shrink-0" />
                        <div>
                          <p className="font-bold">D.Lgs 81/08</p>
                          <p className="text-sm text-slate-400">Obblighi generali di formazione e sicurezza chimica.</p>
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
              { title: "Corso Diisocianati", desc: "Pagina principale cluster", view: 'corso-diisocianati', icon: Beaker },
              { title: "Formazione Lavoratori", desc: "Corso Generale 4h", view: 'corso-formazione-lavoratori-generale', icon: ShieldCheck },
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

export default CorsoDiisocianatiBasePage;
