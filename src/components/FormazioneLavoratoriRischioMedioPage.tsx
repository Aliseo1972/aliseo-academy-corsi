import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { Clock, BookOpen, CheckCircle2, Users, FileText, ChevronRight, ShieldCheck, GraduationCap, Scale, Monitor, Shield, ArrowRight } from 'lucide-react';

interface FormazioneLavoratoriRischioMedioPageProps {
  onNavigate: (view: any) => void;
}

const FormazioneLavoratoriRischioMedioPage: React.FC<FormazioneLavoratoriRischioMedioPageProps> = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Corso Formazione Lavoratori Rischio Medio | Aliseo Academy";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Corso formazione lavoratori rischio medio obbligatorio secondo D.Lgs 81/08. Formazione specifica con docente qualificato con Aliseo Academy.");
    }
  }, []);

  const mailtoLink = "mailto:commerciale@aliseogroup.it?subject=Richiesta%20informazioni%20Corso%20Formazione%20Lavoratori%20Rischio%20Medio&body=Buongiorno%2C%0A%0ASono%20interessato%20al%20Corso%20Formazione%20Lavoratori%20Rischio%20Medio%20(8%20ore).%0APotrei%20avere%20maggiori%20informazioni%20su%20modalit%C3%A0%20e%20costi%3F%0A%0AGrazie.";

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
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-wider mb-6"
            >
              <ShieldCheck className="w-4 h-4" />
              Formazione Obbligatoria D.Lgs 81/08
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6"
            >
              Corso Formazione <span className="text-brand">Lavoratori Rischio Medio</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-400 leading-relaxed mb-8"
            >
              Il corso di formazione specifica per lavoratori a rischio medio viene erogato in presenza oppure in modalità conforme alla normativa vigente, con docente qualificato.
              La modalità di erogazione (presenza o videoconferenza sincrona) viene definita in base alle esigenze aziendali. Su richiesta, è possibile organizzare sessioni dedicate o inserimenti in classi già pianificate.
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
                  <span className="text-white font-bold">8 ore</span>
                </div>
                <div className="w-px h-6 bg-white/10" />
                <div className="flex items-center gap-2">
                  <Scale className="w-5 h-5 text-brand" />
                  <span className="text-white font-bold text-sm">Accordo Stato-Regioni 2011</span>
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
                  Sicurezza sul Lavoro: Formazione Lavoratori Rischio Medio
                </h2>
                <div className="text-slate-600 leading-relaxed space-y-6 text-lg">
                  <p>
                    Il <strong>Corso Formazione Lavoratori Rischio Medio</strong> è un requisito legale imprescindibile per tutte le aziende che operano in settori classificati a rischio intermedio. Ai sensi del <strong>D.Lgs 81/08</strong> e dell'Accordo Stato-Regioni del 21/12/2011, la formazione dei lavoratori deve essere adeguata ai rischi specifici presenti in azienda. Per le attività a rischio medio, come agricoltura, pesca, trasporti, magazzinaggio e alcune tipologie di servizi pubblici, il legislatore prevede un approfondimento mirato della durata di 8 ore.
                  </p>
                  <p>
                    La <strong>formazione lavoratori rischio medio</strong> costituisce la seconda parte del percorso formativo obbligatorio, integrando le 4 ore di formazione generale. Questo modulo specifico si concentra sull'analisi dei pericoli reali e sulle misure di prevenzione e protezione da adottare quotidianamente. Il <strong>corso sicurezza lavoratori rischio medio</strong> di Aliseo Academy è strutturato per fornire competenze pratiche su rischi meccanici, elettrici, chimici e legati all'organizzazione del lavoro, garantendo una preparazione d'eccellenza.
                  </p>
                  <p>
                    Partecipare a un <strong>corso lavoratori D.Lgs 81/08</strong> per il rischio medio significa non solo adempiere a un obbligo normativo, ma investire concretamente nella salute del capitale umano. Un dipendente ben formato è in grado di riconoscere tempestivamente le situazioni di pericolo, riducendo drasticamente la probabilità di infortuni sul lavoro e l'insorgenza di malattie professionali. La nostra metodologia didattica privilegia l'interattività, rendendo i contenuti facilmente assimilabili e applicabili nel contesto operativo reale.
                  </p>
                  <p>
                    Il corso di formazione specifica per lavoratori a rischio medio viene erogato in presenza oppure in modalità conforme alla normativa vigente, con docente qualificato. La modalità di erogazione (presenza o videoconferenza sincrona) viene definita in base alle esigenze aziendali. Su richiesta, è possibile organizzare sessioni dedicate o inserimenti in classi già pianificate.
                  </p>
                  <p>
                    Ogni modulo del corso è costantemente aggiornato rispetto alle ultime evoluzioni legislative e tecniche. Al termine del percorso e al superamento del test di verifica, viene rilasciato un attestato certificato con validità nazionale, fondamentale per dimostrare la conformità dell'azienda durante le ispezioni degli organi di vigilanza. Affidarsi ad Aliseo Academy significa scegliere un partner esperto nella sicurezza sul lavoro, capace di guidare l'impresa verso una gestione virtuosa e sicura.
                  </p>
                </div>
              </article>

              <section className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-black mb-6 uppercase tracking-tight">
                    Qualità della <span className="text-brand">Formazione</span>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="space-y-4">
                      <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                        <Users className="w-6 h-6 text-brand" />
                      </div>
                      <h4 className="font-bold text-lg">Docenti Esperti</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        Formatori qualificati con esperienza pluriennale nella sicurezza sul lavoro per settori a rischio medio.
                      </p>
                    </div>
                    <div className="space-y-4">
                      <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                        <ShieldCheck className="w-6 h-6 text-brand" />
                      </div>
                      <h4 className="font-bold text-lg">Conformità</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        Programmi didattici pienamente conformi all'Accordo Stato-Regioni e costantemente aggiornati.
                      </p>
                    </div>
                    <div className="space-y-4">
                      <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                        <Clock className="w-6 h-6 text-brand" />
                      </div>
                      <h4 className="font-bold text-lg">Sincronia</h4>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        Interazione diretta con il docente in tempo reale, sia in aula che in videoconferenza.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Detailed Sections */}
              <div className="space-y-12">
                <section>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <div className="w-1.5 h-6 bg-brand rounded-full" />
                    A chi è rivolto
                  </h3>
                  <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8">
                    <p className="text-slate-600 leading-relaxed">
                      Il corso è destinato a tutti i lavoratori impiegati in aziende classificate a <strong>Rischio Medio</strong> secondo i codici ATECO. Tra i settori principali rientrano: agricoltura, pesca, trasporti, magazzinaggio, assistenza sociale non residenziale, pubblica amministrazione e istruzione. La formazione specifica è obbligatoria per tutti i dipendenti, indipendentemente dalla tipologia contrattuale, e deve essere completata entro 60 giorni dall'assunzione.
                    </p>
                  </div>
                </section>

                <section>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <div className="w-1.5 h-6 bg-brand rounded-full" />
                    Obiettivi del corso
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "Identificazione dei rischi specifici di settore",
                      "Conoscenza delle misure di prevenzione",
                      "Uso corretto dei DPI necessari",
                      "Gestione delle procedure di emergenza",
                      "Comprensione del quadro normativo",
                      "Promozione di comportamenti sicuri",
                      "Analisi dei rischi meccanici ed elettrici",
                      "Prevenzione delle malattie professionali"
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
                        title: "Modulo 1: Rischi Infortunistici", 
                        content: "Analisi dei rischi legati a macchine, attrezzature, cadute dall'alto e movimentazione carichi." 
                      },
                      { 
                        title: "Modulo 2: Rischi Igienico-Ambientali", 
                        content: "Esposizione ad agenti chimici, fisici e biologici tipici delle attività a rischio medio." 
                      },
                      { 
                        title: "Modulo 3: Organizzazione del Lavoro", 
                        content: "Gestione dei turni, stress lavoro-correlato e segnaletica di sicurezza." 
                      },
                      { 
                        title: "Modulo 4: Procedure di Sicurezza", 
                        content: "Piani di emergenza, primo soccorso e lotta antincendio nel contesto specifico." 
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
                      La base normativa è costituita dal <strong>D.Lgs 81/08</strong> (Testo Unico Sicurezza), integrato dall'<strong>Accordo Stato-Regioni del 21 dicembre 2011</strong>. Quest'ultimo definisce la durata (8 ore per il rischio medio) e i contenuti minimi della formazione specifica. Aliseo Academy garantisce che ogni corso sia perfettamente allineato alle disposizioni vigenti, assicurando la massima tutela legale per l'azienda.
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
                      <p className="text-white font-bold">8 ore</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                      <Users className="w-5 h-5 text-brand" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs uppercase font-bold tracking-wider">Destinatari</p>
                      <p className="text-white font-bold text-sm">Lavoratori Rischio Medio</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                      <Scale className="w-5 h-5 text-brand" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs uppercase font-bold tracking-wider">Normativa</p>
                      <p className="text-white font-bold text-sm">D.Lgs 81/08</p>
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
                  Aggiornamento
                </h4>
                <p className="text-sm text-slate-600">
                  L'aggiornamento della formazione specifica è obbligatorio ogni 5 anni con un modulo di 6 ore, indipendentemente dalla classe di rischio.
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
              { title: "Rischio Alto", desc: "Formazione Specifica 12h", view: 'corso-formazione-lavoratori-rischio-alto', icon: Shield },
              { title: "Aggiornamento", desc: "Rinnovo Quinquennale 6h", view: 'aggiornamento-formazione-lavoratori', icon: Clock },
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

export default FormazioneLavoratoriRischioMedioPage;
