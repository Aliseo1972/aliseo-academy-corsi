import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Clock, BookOpen, Euro, CheckCircle2, Users, FileText, ChevronRight, ShieldCheck, GraduationCap, Laptop, Award, Zap, AlertTriangle, Home, CloudLightning } from 'lucide-react';
import { courses } from '../data/courses';
import OnlineLearningBenefits from './OnlineLearningBenefits';

interface CorsoScaricheAtmosferichePageProps {
  onNavigate: (view: any) => void;
  onOpenCourse: (id: string) => void;
}

const CorsoScaricheAtmosferichePage: React.FC<CorsoScaricheAtmosferichePageProps> = ({ onNavigate, onOpenCourse }) => {
  const course = courses.find(c => c.id === "44");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!course) return null;

  const relatedCourses = [
    { id: "32", title: "Rischio Elettrico" },
    { id: "33", title: "Campi Elettromagnetici" },
    { id: "41", title: "Radiazioni Ottiche Artificiali" }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav className="flex mb-8 text-sm text-slate-500" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2">
            <li>
              <button onClick={() => onNavigate('home')} className="hover:text-brand flex items-center">
                <Home className="w-4 h-4 mr-1" />
                Home
              </button>
            </li>
            <ChevronRight className="w-4 h-4" />
            <li>
              <button onClick={() => onNavigate('home')} className="hover:text-brand">
                Corsi E-learning
              </button>
            </li>
            <ChevronRight className="w-4 h-4" />
            <li className="text-slate-900 font-medium truncate">{course.title}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Hero Section */}
            <section>
              <div className="relative h-80 rounded-3xl overflow-hidden mb-8 group">
                <img 
                  src="https://images.unsplash.com/photo-1492011221367-f47b3ccd77a0?auto=format&fit=crop&q=80&w=1200" 
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent flex flex-col justify-end p-8">
                  <div className="flex items-center gap-2 text-brand-light mb-4">
                    <div className="p-2 bg-brand/20 backdrop-blur-md rounded-lg">
                      <CloudLightning className="w-6 h-6 text-brand" />
                    </div>
                    <span className="font-bold tracking-wider uppercase text-sm">E-learning Professionale</span>
                  </div>
                  <h1 className="text-3xl md:text-4xl font-black text-white mb-4 uppercase tracking-tighter">
                    {course.title}
                  </h1>
                  <p className="text-slate-200 text-lg max-w-2xl font-medium leading-tight">
                    Corso di formazione obbligatorio sulla protezione dai fulmini e gestione degli impianti di terra ai sensi del D.Lgs. 81/08.
                  </p>
                </div>
              </div>

              <div className="prose prose-slate max-w-none">
                <h2 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-tight flex items-center gap-2">
                  <FileText className="w-6 h-6 text-brand" />
                  Descrizione del Corso
                </h2>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Il rischio derivante dalle scariche atmosferiche rappresenta una minaccia significativa per la sicurezza dei lavoratori e l'integrità delle infrastrutture aziendali. Questo corso di formazione e-learning è progettato per fornire le conoscenze necessarie a comprendere la fenomenologia del fulmine, valutare i rischi associati e implementare le corrette misure di prevenzione e protezione, in conformità con quanto previsto dal Testo Unico sulla Sicurezza (D.Lgs. 81/08).
                </p>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Le scariche atmosferiche possono causare infortuni gravi, incendi, esplosioni e danni irreparabili alle apparecchiature elettroniche. La normativa vigente impone al datore di lavoro l'obbligo di valutare il rischio di fulminazione della struttura e di adottare i necessari sistemi di protezione (LPS - Lightning Protection System). La formazione dei lavoratori è un pilastro fondamentale di questa strategia di prevenzione, garantendo che il personale sappia come comportarsi correttamente sia all'interno che all'esterno degli edifici durante un temporale.
                </p>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Il programma didattico approfondisce gli aspetti tecnici degli impianti di protezione, il concetto di equipotenzialità e l'importanza della manutenzione periodica degli impianti di terra. Vengono inoltre fornite linee guida comportamentali pratiche per minimizzare il rischio individuale, analizzando scenari specifici come il lavoro in quota, in spazi aperti o in prossimità di strutture metalliche.
                </p>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Attraverso moduli interattivi e test di verifica, il corso assicura un apprendimento efficace e misurabile. La modalità e-learning permette di conciliare le esigenze formative con l'attività lavorativa, offrendo flessibilità totale nell'accesso ai contenuti e garantendo al contempo un elevato standard qualitativo della formazione erogata.
                </p>
              </div>
            </section>

            <OnlineLearningBenefits />

            {/* Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <section className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2 uppercase tracking-tight">
                  <Users className="w-5 h-5 text-brand" />
                  Destinatari
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {course.recipients}. Il corso è particolarmente indicato per addetti alla manutenzione, preposti, RLS e lavoratori che operano in ambienti esterni o in prossimità di impianti elettrici e strutture metalliche.
                </p>
              </section>

              <section className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
                <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2 uppercase tracking-tight">
                  <GraduationCap className="w-5 h-5 text-brand" />
                  Obiettivi
                </h3>
                <ul className="space-y-3">
                  {course.objectives.map((obj, index) => (
                    <li key={index} className="flex items-start gap-3 text-slate-600">
                      <CheckCircle2 className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            {/* Syllabus */}
            <section className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
              <h3 className="text-xl font-bold text-slate-900 mb-8 flex items-center gap-2 uppercase tracking-tight">
                <BookOpen className="w-5 h-5 text-brand" />
                Programma Didattico
              </h3>
              <div className="space-y-4">
                {course.syllabus.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-100 group hover:border-brand/30 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center font-bold text-slate-400 group-hover:text-brand transition-colors shadow-sm">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      <span className="font-semibold text-slate-700">{item.title}</span>
                    </div>
                    <div className="flex items-center gap-6 text-sm text-slate-500">
                      <span className="flex items-center gap-1.5">
                        <Laptop className="w-4 h-4" />
                        {item.lessonsCount} lezioni
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4" />
                        {item.duration}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Related Courses */}
            <section>
              <h3 className="text-xl font-bold text-slate-900 mb-8 uppercase tracking-tight">Potrebbero interessarti anche</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedCourses.map((related) => (
                  <button
                    key={related.id}
                    onClick={() => onOpenCourse(related.id)}
                    className="p-6 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-brand/30 transition-all text-left group"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center mb-4 group-hover:bg-brand/10 transition-colors">
                      <Zap className="w-6 h-6 text-slate-400 group-hover:text-brand" />
                    </div>
                    <h4 className="font-bold text-slate-900 mb-2 leading-tight">{related.title}</h4>
                    <div className="flex items-center text-brand font-bold text-sm">
                      Dettagli <ChevronRight className="w-4 h-4 ml-1" />
                    </div>
                  </button>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 sticky top-24">
              <div className="mb-8">
                <div className="text-sm text-slate-500 mb-1 uppercase tracking-widest font-bold">Prezzo del corso</div>
                <div className="text-4xl font-black text-slate-900">{course.price} <span className="text-lg text-slate-400 font-medium">+ IVA</span></div>
              </div>

              <div className="space-y-6 mb-8">
                <div className="flex items-center justify-between py-3 border-b border-slate-50">
                  <div className="flex items-center gap-3 text-slate-600">
                    <Clock className="w-5 h-5 text-brand" />
                    <span className="font-medium">Durata</span>
                  </div>
                  <span className="font-bold text-slate-900">{course.duration}</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-slate-50">
                  <div className="flex items-center gap-3 text-slate-600">
                    <Laptop className="w-5 h-5 text-brand" />
                    <span className="font-medium">Modalità</span>
                  </div>
                  <span className="font-bold text-slate-900">E-learning</span>
                </div>
                <div className="flex items-center justify-between py-3 border-b border-slate-50">
                  <div className="flex items-center gap-3 text-slate-600">
                    <Award className="w-5 h-5 text-brand" />
                    <span className="font-medium">Certificato</span>
                  </div>
                  <span className="font-bold text-slate-900 text-right text-xs">A norma di legge</span>
                </div>
              </div>

              <button className="w-full bg-brand hover:bg-brand-dark text-white py-4 rounded-2xl font-bold text-lg shadow-lg shadow-brand/20 transition-all transform hover:-translate-y-1 mb-4 flex items-center justify-center gap-2">
                ISCRIVITI ORA
                <ChevronRight className="w-5 h-5" />
              </button>
              
              <p className="text-center text-xs text-slate-400 font-medium">
                Accesso immediato dopo il pagamento
              </p>

              <div className="mt-8 pt-8 border-t border-slate-100">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-brand/10 flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-brand" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 leading-tight">Corso Certificato</div>
                    <div className="text-xs text-slate-500">Valido su tutto il territorio nazionale</div>
                  </div>
                </div>
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <div className="flex items-center gap-2 text-amber-600 mb-2">
                    <AlertTriangle className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-wider">Riferimenti Normativi</span>
                  </div>
                  <div className="text-xs text-slate-600 leading-relaxed font-medium">
                    {course.references.join(', ')}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorsoScaricheAtmosferichePage;
