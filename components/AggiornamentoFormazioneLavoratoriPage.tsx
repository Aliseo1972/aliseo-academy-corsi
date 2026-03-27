import React, { useEffect } from 'react';
import OnlineLearningBenefits from './OnlineLearningBenefits';
import { motion } from 'motion/react';
import { Clock, BookOpen, CheckCircle2, Users, FileText, ChevronRight, ShieldCheck, GraduationCap, Scale, Monitor, Shield, ArrowRight, AlertCircle, Laptop, Award } from 'lucide-react';

interface AggiornamentoFormazioneLavoratoriPageProps {
  onNavigate: (view: any) => void;
}

const AggiornamentoFormazioneLavoratoriPage: React.FC<AggiornamentoFormazioneLavoratoriPageProps> = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Aggiornamento Formazione Lavoratori | Aliseo Academy";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Aggiornamento formazione lavoratori obbligatorio secondo D.Lgs 81/08. Corso online in e-learning con Aliseo Academy.");
    }
  }, []);

  const mailtoLink = "mailto:commerciale@aliseogroup.it?subject=Richiesta%20informazioni%20Aggiornamento%20Formazione%20Lavoratori&body=Buongiorno%2C%0A%0ASono%20interessato%20al%20corso%20di%20Aggiornamento%20Formazione%20Lavoratori%20(6%20ore).%0APotrei%20avere%20maggiori%20informazioni%20su%20modalit%C3%A0%2C%20costi%20e%20attivazione%20online%3F%0A%0AGrazie.";

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
              Aggiornamento Quinquennale Obbligatorio
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6"
            >
              Aggiornamento <span className="text-brand">Formazione Lavoratori</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-400 leading-relaxed mb-8"
            >
              Corso di aggiornamento di 6 ore obbligatorio ogni 5 anni per tutti i settori di rischio. 
              Formazione 100% online in modalità e-learning.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col gap-6"
            >
              <div>
                <p className="text-slate-400 text-sm mb-3 font-medium">
                  Validità nazionale e attestato immediato a norma di legge.
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
                  <span className="text-white font-bold">6 ore</span>
                </div>
                <div className="w-px h-6 bg-white/10" />
                <div className="flex items-center gap-2">
                  <Scale className="w-5 h-5 text-brand" />
                  <span className="text-white font-bold text-sm">D.Lgs 81/08 Art. 37</span>
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
                  L'importanza dell'Aggiornamento Formazione Lavoratori
                </h2>
                <div className="text-slate-600 leading-relaxed space-y-6 text-lg">
                  <p>
                    L'<strong>aggiornamento formazione lavoratori</strong> è un pilastro fondamentale del sistema di prevenzione aziendale delineato dal <strong>D.Lgs 81/08</strong>. La normativa stabilisce che la formazione in materia di salute e sicurezza sul lavoro non sia un evento isolato, ma un processo continuo di apprendimento e sensibilizzazione. Per questo motivo, l'<strong>aggiornamento lavoratori obbligatorio</strong> deve essere effettuato con cadenza quinquennale, garantendo che le competenze acquisite rimangano attuali rispetto all'evoluzione dei rischi e delle tecnologie.
                  </p>
                  <p>
                    Il percorso di <strong>aggiornamento sicurezza lavoratori D.Lgs 81/08</strong> ha una durata minima di 6 ore per tutti i lavoratori, indipendentemente dal livello di rischio (basso, medio o alto) della propria azienda. Questo corso mira a rinfrescare i concetti base della sicurezza, analizzare le novità legislative e approfondire le buone pratiche per la prevenzione degli infortuni e delle malattie professionali. Aliseo Academy offre questo percorso interamente in modalità e-learning, permettendo una gestione agile e flessibile della compliance normativa.
                  </p>
                  <p>
                    Non effettuare l'aggiornamento entro i termini previsti espone l'azienda a sanzioni severe e, soprattutto, priva i lavoratori di strumenti critici per la propria protezione. La sicurezza sul lavoro è una materia dinamica: nuovi macchinari, diverse procedure operative e l'emergere di rischi psicosociali o legati a nuovi agenti chimici richiedono una costante revisione delle conoscenze. Il nostro corso di aggiornamento è studiato per essere interattivo e coinvolgente, trasformando l'obbligo burocratico in un reale valore aggiunto per la sicurezza quotidiana.
                  </p>
                  <p>
                    La modalità e-learning di Aliseo Academy è progettata per rispondere alle esigenze delle aziende moderne. Grazie all'accesso online 24/7, i lavoratori possono seguire il corso senza interrompere i flussi produttivi, gestendo i moduli formativi in base alla propria disponibilità. La validità dell'attestato rilasciato è garantita su tutto il territorio nazionale, assicurando la piena conformità durante le ispezioni degli organi di vigilanza.
                  </p>
                  <p>
                    Affidarsi ad Aliseo Academy per l'aggiornamento della sicurezza significa scegliere un partner esperto che semplifica la gestione della formazione. I nostri contenuti sono costantemente revisionati da professionisti del settore per riflettere le ultime tendenze in ambito di prevenzione e protezione, garantendo un'esperienza formativa di alta qualità e di immediata applicazione pratica.
                  </p>
                </div>
              </article>

              <OnlineLearningBenefits />

              {/* Detailed Sections */}
              <div className="space-y-12">
                <section>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <div className="w-1.5 h-6 bg-brand rounded-full" />
                    A chi è rivolto
                  </h3>
                  <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8">
                    <p className="text-slate-600 leading-relaxed">
                      Il corso è destinato a tutti i lavoratori che hanno già completato il percorso di formazione generale e specifica (rischio basso, medio o alto). È obbligatorio per ogni dipendente, indipendentemente dal settore ATECO di appartenenza, che operi in un'azienda con almeno un lavoratore.
                    </p>
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <div className="w-1.5 h-6 bg-brand rounded-full" />
                    Quando è necessario l’aggiornamento
                  </h3>
                  <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8">
                    <div className="flex items-start gap-4">
                      <AlertCircle className="w-6 h-6 text-brand shrink-0 mt-1" />
                      <p className="text-slate-600 leading-relaxed">
                        L'aggiornamento deve essere effettuato <strong>ogni 5 anni</strong> a partire dalla data di rilascio dell'ultimo attestato di formazione specifica o dell'ultimo aggiornamento effettuato. La scadenza è perentoria e il mancato aggiornamento invalida l'abilitazione del lavoratore.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <div className="w-1.5 h-6 bg-brand rounded-full" />
                    Obiettivi del corso
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "Richiamo dei concetti base di prevenzione",
                      "Aggiornamento sulle novità legislative",
                      "Analisi di infortuni e mancati infortuni",
                      "Approfondimento sui rischi emergenti",
                      "Rafforzamento della cultura della sicurezza",
                      "Revisione delle procedure di emergenza",
                      "Focus su DPI e segnaletica",
                      "Promozione del benessere organizzativo"
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
                    Programma dettagliato
                  </h3>
                  <div className="space-y-4">
                    {[
                      { 
                        title: "Modulo 1: Quadro Normativo e Giuridico", 
                        content: "Evoluzione della normativa, responsabilità delle figure aziendali e sistema sanzionatorio." 
                      },
                      { 
                        title: "Modulo 2: Gestione della Sicurezza", 
                        content: "Valutazione dei rischi, misure di prevenzione e protezione, importanza della segnalazione." 
                      },
                      { 
                        title: "Modulo 3: Rischi Specifici e Novità", 
                        content: "Focus sui rischi legati alle mansioni, nuovi agenti pericolosi e rischi psicosociali." 
                      },
                      { 
                        title: "Modulo 4: Comportamenti e Procedure", 
                        content: "Uso dei DPI, procedure di emergenza, evacuazione e primo soccorso." 
                      }
                    ].map((item, i) => (
                      <div key={i} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                        <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                        <p className="text-sm text-slate-500 leading-relaxed">{item.content}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <div className="w-1.5 h-6 bg-brand rounded-full" />
                    Normativa di riferimento
                  </h3>
                  <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8">
                    <p className="text-slate-600 leading-relaxed">
                      Il corso risponde ai requisiti dell'<strong>Art. 37 del D.Lgs 81/08</strong> e dell'<strong>Accordo Stato-Regioni del 21/12/2011</strong>, che definisce la periodicità quinquennale e la durata minima di 6 ore per l'aggiornamento della formazione dei lavoratori di tutti i settori.
                    </p>
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
                      <p className="text-white font-bold">6 ore</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                      <Laptop className="w-5 h-5 text-brand" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs uppercase font-bold tracking-wider">Modalità</p>
                      <p className="text-white font-bold text-sm">E-learning</p>
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
                  <p className="text-white/60 text-[10px] mb-4 text-center uppercase tracking-widest">
                    Soluzioni su misura per la tua azienda
                  </p>
                  <a 
                    href={mailtoLink}
                    className="block w-full py-4 bg-brand text-slate-900 text-center font-black uppercase tracking-tight rounded-2xl hover:bg-brand-light transition-all shadow-lg shadow-brand/20"
                  >
                    Ricevi informazioni sul corso
                  </a>
                  <p className="text-white/40 text-[10px] text-center mt-4 uppercase tracking-widest">
                    commerciale@aliseogroup.it
                  </p>
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8">
                <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-brand" />
                  Validità
                </h4>
                <p className="text-sm text-slate-600">
                  L'attestato rilasciato ha validità di 5 anni su tutto il territorio nazionale per qualsiasi settore ATECO.
                </p>
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
              { title: "Formazione Generale", desc: "Modulo base 4h", view: 'corso-formazione-lavoratori-generale', icon: GraduationCap },
              { title: "Rischio Basso", desc: "Formazione Specifica 4h", view: 'corso-formazione-lavoratori-rischio-basso', icon: ShieldCheck },
              { title: "Rischio Medio", desc: "Formazione Specifica 8h", view: 'corso-formazione-lavoratori-rischio-medio', icon: ShieldCheck },
              { title: "Rischio Alto", desc: "Formazione Specifica 12h", view: 'corso-formazione-lavoratori-rischio-alto', icon: Shield },
              { title: "Corso Preposto", desc: "Responsabile Sicurezza", view: 'corso-preposto', icon: Users },
              { title: "Corso RLS", desc: "Rappresentante Lavoratori", view: 'corso-rls-rappresentante-lavoratori-sicurezza', icon: Users },
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

export default AggiornamentoFormazioneLavoratoriPage;
