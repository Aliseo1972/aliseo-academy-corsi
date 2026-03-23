import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Clock, BookOpen, Euro, CheckCircle2, Users, FileText, ChevronRight, ShieldCheck, GraduationCap, Scale, Laptop, Globe, Award, Lock, Database, HeartPulse, Stethoscope } from 'lucide-react';
import { courses } from '../data/courses';
import OnlineLearningBenefits from './OnlineLearningBenefits';

interface CorsoPrivacySanitarioPageProps {
  onNavigate: (view: any) => void;
}

const CorsoPrivacySanitarioPage: React.FC<CorsoPrivacySanitarioPageProps> = ({ onNavigate }) => {
  const course = courses.find(c => c.id === "73") || {
    duration: "4h",
    price: "48,80 €",
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Corso Privacy Settore Sanitario Online | GDPR Art. 9 Dati Particolari";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Corso obbligatorio per Incaricato al Trattamento dei dati sanitari online. Formazione GDPR 4h specifica per medici, cliniche e operatori sanitari.");
    }
  }, []);

  const mailtoLink = "mailto:commerciale@aliseogroup.it?subject=Richiesta%20informazioni%20corso%20Privacy%20Settore%20Sanitario&body=Buongiorno%2C%0A%0ASono%20interessato%20al%20corso%20Privacy%20Settore%20Sanitario%20Online.%0APotrei%20avere%20maggiori%20informazioni%3F%0A%0AGrazie.";

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
              <HeartPulse className="w-4 h-4" />
              Specialistico Sanità - 4 Ore
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6"
            >
              Corso <span className="text-brand">Privacy Settore Sanitario</span> Online
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-400 leading-relaxed mb-4"
            >
              Proteggi i dati sensibili dei pazienti in conformità all'Art. 9 del GDPR con la formazione e-learning specifica.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="text-lg text-slate-500 leading-relaxed mb-8"
            >
              Il trattamento dei dati sanitari richiede competenze specialistiche e una consapevolezza profonda dei rischi. Assicura la massima riservatezza e conformità normativa alla tua struttura sanitaria.
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
                  Il Trattamento dei Dati Particolari in Ambito Sanitario
                </h2>
                <div className="text-slate-600 leading-relaxed space-y-6 text-lg">
                  <p>
                    Nel settore sanitario, la protezione dei dati personali assume una rilevanza critica. Il **Regolamento UE 2016/679 (GDPR)** classifica i dati relativi alla salute come "categorie particolari di dati personali" (Art. 9), vietandone il trattamento a meno che non ricorrano specifiche condizioni, come la finalità di diagnosi, assistenza o terapia sanitaria. Per medici, infermieri, personale amministrativo di cliniche e studi medici, la conoscenza approfondita di queste regole non è solo un obbligo formativo, ma una necessità operativa per garantire l'etica professionale e la sicurezza del paziente.
                  </p>
                  <p>
                    Il **corso per incaricato al trattamento dei dati sanitari online** di Aliseo Academy è un percorso di 4 ore focalizzato sulle sfide uniche della sanità digitale e fisica. Attraverso la nostra piattaforma **e-learning**, i professionisti della salute possono formarsi senza sottrarre tempo prezioso alla cura dei pazienti. La flessibilità del corso online permette di approfondire temi complessi come il consenso informato, il segreto professionale, la gestione del fascicolo sanitario elettronico e la protezione dei dati genetici e biometrici, tutto nel rispetto dei tempi individuali.
                  </p>
                  <p>
                    La formazione e-learning specifica per il settore sanitario analizza i rischi concreti: dalla perdita di referti cartacei all'accesso non autorizzato a database digitali, fino alle violazioni della privacy durante le comunicazioni con i familiari del paziente. Ogni modulo è pensato per fornire soluzioni pratiche e istruzioni chiare su come comportarsi quotidianamente per minimizzare il rischio di **data breach**, che in ambito sanitario può avere conseguenze devastanti per la dignità e la vita delle persone interessate.
                  </p>
                  <p>
                    Scegliere Aliseo Academy significa affidarsi a esperti della formazione privacy che comprendono le dinamiche di ospedali, laboratori di analisi e centri medici. Un personale sanitario consapevole delle proprie responsabilità è il miglior investimento per prevenire sanzioni pecuniarie elevatissime e danni reputazionali irreparabili. Al termine del corso, viene rilasciato l'attestato di formazione obbligatoria per incaricati al trattamento dati sanitari, valido ai fini della conformità normativa e della dimostrazione dell'accountability aziendale.
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
                    Il corso approfondisce le regole specifiche per il trattamento dei dati sensibili e sanitari. Vengono esaminate le basi giuridiche del trattamento in sanità, le modalità di raccolta del consenso, le misure di sicurezza per la conservazione dei dati (cartacei e digitali) e le procedure corrette per la comunicazione dei dati a terzi. Un focus particolare è dedicato alla gestione delle emergenze e alla segnalazione tempestiva delle violazioni.
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
                        "Medici di medicina generale e specialisti",
                        "Personale infermieristico e socio-sanitario (OSS)",
                        "Addetti all'accettazione e segreteria medica",
                        "Amministratori di cliniche, ospedali e RSA",
                        "Farmacisti e tecnici di laboratorio",
                        "Responsabili IT di strutture sanitarie"
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                          <Stethoscope className="w-5 h-5 text-brand shrink-0" />
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
                      "Padroneggiare l'Art. 9 del GDPR",
                      "Gestire correttamente i dati sensibili",
                      "Applicare il segreto professionale",
                      "Proteggere il fascicolo sanitario",
                      "Riconoscere i rischi della sanità digitale",
                      "Assicurare la riservatezza dei pazienti"
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
                      { title: "Privacy in Sanità: Introduzione", desc: "Il contesto normativo specifico e le definizioni di dati sanitari, genetici e biometrici." },
                      { title: "Il Trattamento dei Dati Particolari", desc: "Condizioni di liceità, consenso informato e finalità di cura." },
                      { title: "Diritti del Paziente", desc: "Accesso ai dati, portabilità, rettifica e diritto all'oblio in ambito medico." },
                      { title: "Sicurezza e Data Breach Sanitario", desc: "Misure di protezione, crittografia, gestione referti e procedure in caso di violazione." }
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
                          <p className="font-bold">GDPR - Regolamento UE 2016/679</p>
                          <p className="text-sm text-slate-400">Focus particolare sull'Articolo 9 relativo al trattamento di categorie particolari di dati.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <FileText className="w-6 h-6 text-brand shrink-0" />
                        <div>
                          <p className="font-bold">Codice Privacy (D.Lgs 196/2003 e s.m.i.)</p>
                          <p className="text-sm text-slate-400">Integrazione delle norme nazionali per il settore sanitario e della ricerca.</p>
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
              { title: "Privacy Incaricato", desc: "Corso base per dipendenti", view: 'corso-privacy-incaricato-trattamento-dati', icon: Lock },
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

export default CorsoPrivacySanitarioPage;
