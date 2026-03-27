import React, { useEffect } from 'react';
import DeliveryMethods from './DeliveryMethods';
import { motion } from 'motion/react';
import { Clock, BookOpen, Euro, CheckCircle2, Users, FileText, ChevronRight, MessageSquare, ShieldCheck, GraduationCap, HeartPulse, Scale, Truck, MapPin, AlertTriangle, Anchor } from 'lucide-react';

interface AggiornamentoLavoriSuFuniPageProps {
  onNavigate: (view: any) => void;
}

const AggiornamentoLavoriSuFuniPage: React.FC<AggiornamentoLavoriSuFuniPageProps> = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Aggiornamento Corso Lavori su Funi 8 ore - Formazione Obbligatoria | Aliseo Academy";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Corso di aggiornamento obbligatorio (8 ore) per lavoratori che operano in quota mediante sistemi di accesso e posizionamento su funi. Formazione on-site in tutta Italia.");
    }
  }, []);

  const mailtoLink = "mailto:commerciale@aliseogroup.it?subject=Richiesta%20informazioni%20aggiornamento%20corso%20Lavori%20su%20Funi&body=Buongiorno%2C%0A%0ASono%20interessato%20al%20corso%20di%20Aggiornamento%20Lavori%20su%20Funi%20(8%20ore).%0APotrei%20avere%20maggiori%20informazioni%20su%20modalit%C3%A0%2C%20prossime%20date%20e%20costi%3F%0A%0AGrazie.";

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
              Sicurezza sul Lavoro - D.Lgs 81/08
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6"
            >
              Aggiornamento Corso <span className="text-brand">Lavori su Funi – 8 ore</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-400 leading-relaxed mb-8"
            >
              Corso di aggiornamento obbligatorio per lavoratori che operano in quota mediante sistemi di accesso e posizionamento su funi, secondo il D.Lgs. 81/08.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col gap-6"
            >
              <div>
                <p className="text-slate-400 text-sm mb-3 font-medium">
                  Richiedi informazioni per organizzare l'aggiornamento periodico presso la tua azienda.
                </p>
                <div className="flex flex-col gap-2">
                  <p className="text-brand text-xs font-bold uppercase tracking-wider">
                    Servizio disponibile in tutta Italia
                  </p>
                  <a 
                    href={mailtoLink}
                    className="px-8 py-4 bg-brand text-slate-900 font-black uppercase tracking-tight rounded-2xl hover:bg-brand-light transition-all flex items-center gap-2 group shadow-xl shadow-brand/20 w-fit"
                  >
                    Richiedi preventivo gratuito
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
                  <span className="text-white font-bold text-sm">D.Lgs 81/08</span>
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
                  Mantenimento delle Competenze per Lavori su Fune
                </h2>
                <div className="text-slate-600 leading-relaxed space-y-6 text-lg">
                  <p>
                    L'<strong>aggiornamento periodico per i lavori su fune</strong> è un requisito normativo essenziale stabilito dal <strong>D.Lgs. 81/08 (art. 116 e Allegato XXI)</strong>. In un contesto operativo ad alto rischio come quello del posizionamento su funi, mantenere aggiornate le proprie competenze tecniche e la padronanza delle procedure di emergenza non è solo un obbligo di legge, ma una necessità vitale per ogni operatore.
                  </p>
                  <p>
                    Il corso di 8 ore è strutturato come un richiamo intensivo sia teorico che pratico. Si parte dall'analisi dei rischi specifici e dagli aggiornamenti normativi, per poi passare all'addestramento sul campo. L'obiettivo è verificare la corretta esecuzione delle manovre di accesso, posizionamento, discesa e risalita, correggendo eventuali abitudini errate consolidate nel tempo.
                  </p>
                  <p>
                    Un focus particolare è dedicato alla <strong>gestione delle emergenze e al recupero dell'operatore</strong>. La capacità di intervenire prontamente in caso di infortunio o malore di un collega sospeso è una competenza che richiede esercizio costante. L'aggiornamento permette di testare i sistemi di soccorso e di assicurare che ogni membro della squadra sappia esattamente come agire sotto pressione.
                  </p>
                  <p>
                    Aliseo Academy offre la possibilità di svolgere l'<strong>aggiornamento on-site in tutta Italia</strong>. Portiamo la formazione direttamente presso la vostra sede, permettendo ai lavoratori di esercitarsi sulle strutture e con le attrezzature che utilizzano quotidianamente. Questo approccio rende l'aggiornamento estremamente pertinente e riduce al minimo l'interruzione delle attività lavorative.
                  </p>
                  <p>
                    Per elevare ulteriormente la qualità dell'addestramento pratico, mettiamo a disposizione il <strong>Safety Truck Aliseo</strong>. Questa unità mobile attrezzata consente di eseguire manovre complesse e simulazioni di soccorso in un ambiente controllato e sicuro, direttamente nel piazzale della tua azienda. È lo strumento ideale per un aggiornamento pratico efficace, rapido e certificato.
                  </p>
                </div>
              </article>

              <DeliveryMethods />

              {/* Detailed Sections */}
              <div className="space-y-12">
                <section>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <div className="w-1.5 h-6 bg-brand rounded-full" />
                    A chi è rivolto
                  </h3>
                  <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8">
                    <p className="text-slate-600 leading-relaxed mb-4">
                      Il corso è destinato a personale già formato che deve rinnovare l'abilitazione:
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {[
                        "Lavoratori già formati per lavori su fune",
                        "Operatori esperti in quota",
                        "Personale manutentivo su funi",
                        "Tecnici installatori su strutture elevate",
                        "Addetti al soccorso in quota",
                        "Squadre operative su fune"
                      ].map((item, i) => (
                        <li key={i} className="flex items-center gap-2 text-slate-700 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-brand" />
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
                      "Aggiornare competenze tecniche",
                      "Migliorare la sicurezza operativa",
                      "Ripassare procedure corrette",
                      "Verificare l'uso di attrezzature",
                      "Gestire emergenze e recupero",
                      "Validare le manovre di soccorso"
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
                    Programma Dettagliato
                  </h3>
                  <div className="space-y-4">
                    {[
                      { 
                        title: "Modulo 1: Aggiornamenti Normativi", 
                        content: "Richiamo al D.Lgs. 81/08 e Allegato XXI. Responsabilità e novità legislative nel settore." 
                      },
                      { 
                        title: "Modulo 2: Richiamo Rischi Principali", 
                        content: "Analisi dei rischi specifici dei lavori su fune. Dinamica delle cadute e prevenzione." 
                      },
                      { 
                        title: "Modulo 3: Utilizzo DPI e Attrezzature", 
                        content: "Verifica dello stato di conservazione dei DPI di III categoria. Corretto utilizzo di discensori e bloccanti." 
                      },
                      { 
                        title: "Modulo 4: Verifica Ancoraggi e Sistemi", 
                        content: "Controllo dei punti di ancoraggio. Sistemi di sicurezza e linee vita temporanee." 
                      },
                      { 
                        title: "Modulo 5: Tecniche Operative su Fune", 
                        content: "Ripasso delle tecniche di accesso, posizionamento, discesa e risalita in sicurezza." 
                      },
                      { 
                        title: "Modulo 6: Procedure di Emergenza", 
                        content: "Simulazione di scenari di emergenza. Tecniche di recupero dell'infortunato su fune." 
                      },
                      { 
                        title: "Modulo 7: Esercitazioni Pratiche", 
                        content: "Addestramento pratico intensivo con manovre operative e di soccorso su strutture dedicate." 
                      }
                    ].map((item, i) => (
                      <div key={i} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                        <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                        <p className="text-sm text-slate-500 leading-relaxed">{item.content}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="bg-slate-900 rounded-3xl p-8 sticky top-24">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <GraduationCap className="w-6 h-6 text-brand" />
                  Scheda Aggiornamento
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
                      <p className="text-white font-bold text-sm">Operatori su Fune</p>
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
                  Validità
                </h4>
                <p className="text-sm text-slate-600">
                  L'aggiornamento ha validità periodica ai sensi dell'art. 116 del D.Lgs. 81/08. Al termine viene rilasciato attestato di frequenza valido ai fini di legge.
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Lavori su Funi base", desc: "Corso 32 ore", view: 'corso-lavori-su-funi', icon: Anchor },
              { title: "DPI III Categoria", desc: "Lavori in Quota - 8 ore", view: 'corso-dpi-terza-categoria-lavori-quota', icon: ShieldCheck },
              { title: "Spazi Confinati", desc: "Corso base 12 ore", view: 'corso-spazi-confinati', icon: AlertTriangle },
              { title: "Primo Soccorso", desc: "Gruppo A - 16 ore", view: 'corso-primo-soccorso-gruppo-a', icon: HeartPulse },
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

export default AggiornamentoLavoriSuFuniPage;
