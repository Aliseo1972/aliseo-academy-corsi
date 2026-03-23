import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Clock, BookOpen, Euro, CheckCircle2, Users, FileText, ChevronRight, ShieldCheck, GraduationCap, Scale, Laptop, Globe, Award, AlertTriangle, Monitor, Volume2, Info, Zap, Shield } from 'lucide-react';
import { courses } from '../data/courses';
import OnlineLearningBenefits from './OnlineLearningBenefits';

interface CorsoPesPavPeiPageProps {
  onNavigate: (view: any) => void;
}

const CorsoPesPavPeiPage: React.FC<CorsoPesPavPeiPageProps> = ({ onNavigate }) => {
  const course = courses.find(c => c.id === "25") || {
    duration: "16h",
    price: "195,20 €",
    lessons: 58,
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Corso PES PAV PEI Online | Addetto Lavori Elettrici | Aliseo Academy";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Corso PES PAV PEI online per addetti ai lavori elettrici. Formazione certificata CEI 11-27 e D.Lgs. 81/08 in modalità e-learning asincrona.");
    }
  }, []);

  const mailtoLink = "mailto:commerciale@aliseogroup.it?subject=Richiesta%20informazioni%20corso%20PES%20PAV%20PEI&body=Buongiorno%2C%0A%0ASono%20interessato%20al%20corso%20Addetto%20ai%20lavori%20elettrici%20(PES%20PAV%20PEI)%20Online.%0APotrei%20avere%20maggiori%20informazioni%3F%0A%0AGrazie.";

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
              <Zap className="w-4 h-4" />
              Sicurezza Elettrica - Norma CEI 11-27
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6"
            >
              Corso <span className="text-brand">PES PAV PEI</span> online, fruibile in e-learning su piattaforma certificata, valido ai fini normativi.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-400 leading-relaxed mb-8"
            >
              Ottieni la qualifica per lavori elettrici sotto tensione e fuori tensione. Formazione completa conforme alla norma CEI 11-27 e al D.Lgs. 81/08.
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
                  Descrizione del corso
                </h2>
                <div className="text-slate-600 leading-relaxed space-y-6 text-lg">
                  <p>
                    Il rischio elettrico rappresenta una delle principali cause di infortuni gravi e mortali nei luoghi di lavoro. Per questo motivo, il legislatore e gli enti normatori hanno stabilito requisiti rigorosi per chiunque operi su impianti elettrici. Il corso per <strong>Addetto ai lavori elettrici (PES PAV PEI)</strong> è il percorso formativo fondamentale per acquisire le competenze necessarie a operare in sicurezza, minimizzando il rischio di folgorazione e arco elettrico.
                  </p>
                  <p>
                    <strong>Il corso è disponibile in modalità e-learning asincrona, accessibile in qualsiasi momento</strong> attraverso la nostra piattaforma certificata. Questa modalità permette ai lavoratori di gestire la propria formazione in totale autonomia, conciliando lo studio con le esigenze operative aziendali. Ogni partecipante può seguire le lezioni, consultare i materiali didattici e svolgere i test di verifica secondo i propri ritmi, garantendo un apprendimento profondo e duraturo.
                  </p>
                  <p>
                    La formazione affronta in modo dettagliato le prescrizioni della norma <strong>CEI 11-27</strong>, che definisce i profili professionali di Persona Esperta (PES), Persona Avvertita (PAV) e Persona Idonea (PEI). Vengono analizzate le procedure per i lavori fuori tensione, in prossimità e sotto tensione, fornendo gli strumenti teorici indispensabili per la corretta valutazione dei rischi e la scelta dei Dispositivi di Protezione Individuale (DPI) idonei.
                  </p>
                  <p className="bg-blue-50 p-6 rounded-2xl border-l-4 border-blue-500 font-medium italic">
                    "Su richiesta, il corso può essere organizzato anche in presenza presso la sede aziendale, con docente qualificato. L’attivazione delle sessioni in presenza è subordinata al raggiungimento di un numero minimo di partecipanti."
                  </p>
                  <p>
                    Aliseo Academy si impegna a fornire una formazione che non sia solo un adempimento normativo, ma un reale valore aggiunto per la sicurezza dei lavoratori. Il nostro supporto tecnico e commerciale è sempre a disposizione per guidare le aziende nella scelta del percorso più adatto, garantendo attestati validi su tutto il territorio nazionale e conformi alle più recenti evoluzioni normative del settore elettrico.
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
                      Il corso si rivolge a tutto il personale tecnico che svolge attività lavorative su impianti elettrici, sia fuori tensione che sotto tensione (in bassa tensione).
                    </p>
                    <ul className="space-y-3">
                      {[
                        "Elettricisti installatori e manutentori",
                        "Responsabili tecnici di aziende elettriche",
                        "Personale addetto alla manutenzione di impianti industriali",
                        "Tecnici che operano in prossimità di parti attive",
                        "Lavoratori che devono essere qualificati PES o PAV dal datore di lavoro"
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
                      "Conoscere le prescrizioni della norma CEI 11-27",
                      "Identificare i pericoli legati all'energia elettrica",
                      "Apprendere le procedure per lavori fuori tensione",
                      "Gestire i lavori in prossimità di parti attive",
                      "Acquisire i requisiti per l'idoneità ai lavori sotto tensione (PEI)",
                      "Saper scegliere e utilizzare correttamente i DPI specifici"
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
                      { title: "Legislazione e Normativa", desc: "Quadro normativo nazionale (D.Lgs. 81/08) e norme tecniche CEI (11-27 e 64-8)." },
                      { title: "Rischio Elettrico e Sicurezza", desc: "Effetti della corrente sul corpo umano, archi elettrici, distanze di sicurezza e zone di lavoro." },
                      { title: "Ruoli e Responsabilità", desc: "Definizioni di PES, PAV, PEI, URI, RI, URL e PL secondo la norma CEI 11-27." },
                      { title: "Procedure Operative", desc: "Lavori fuori tensione, lavori in prossimità e lavori sotto tensione in BT. Gestione delle emergenze." },
                      { title: "DPI e Attrezzature", desc: "Scelta, verifica e conservazione dei dispositivi di protezione e degli attrezzi isolati." },
                      { title: "Verifica Finale", desc: "Test a risposta multipla per la valutazione delle competenze acquisite." }
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
                      La sicurezza nei lavori elettrici è garantita dall'integrazione tra la legge dello Stato e le norme tecniche di settore.
                    </div>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <Scale className="w-6 h-6 text-brand shrink-0" />
                        <div>
                          <p className="font-bold">D.Lgs 81/08 - Titolo III Capo III</p>
                          <p className="text-sm text-slate-400">Disciplina la protezione dei lavoratori dai rischi di natura elettrica.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Shield className="w-6 h-6 text-brand shrink-0" />
                        <div>
                          <p className="font-bold">Norma CEI 11-27</p>
                          <p className="text-sm text-slate-400">La norma tecnica di riferimento per l'esecuzione dei lavori su impianti elettrici.</p>
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
                      <BookOpen className="w-5 h-5 text-brand" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs uppercase font-bold tracking-wider">Lezioni</p>
                      <p className="text-white font-bold">{course.lessons} Moduli</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                      <Laptop className="w-5 h-5 text-brand" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs uppercase font-bold tracking-wider">Modalità</p>
                      <p className="text-white font-bold">E-learning Asincrono</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                      <Euro className="w-5 h-5 text-brand" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs uppercase font-bold tracking-wider">Prezzo</p>
                      <p className="text-white font-bold">{course.price} + IVA</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-4 bg-white/5 rounded-2xl border border-white/10">
                  <div className="flex gap-3 items-start">
                    <Info className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Corso valido per la qualifica PES, PAV e l'idoneità PEI. Attestato rilasciato post-test.
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
              { title: "Aggiornamento Lavoratori", desc: "Aggiornamento quinquennale 6h", view: 'aggiornamento-lavoratori', icon: Clock },
              { title: "Lavoratori Rischio Basso", desc: "Formazione generale e specifica", view: 'corso-lavoratori-rischio-basso-uffici', icon: ShieldCheck },
              { title: "Rischio Videoterminali", desc: "Formazione specifica VDT", view: 'corso-videoterminali', icon: Monitor },
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

export default CorsoPesPavPeiPage;
