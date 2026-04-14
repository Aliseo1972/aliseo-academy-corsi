import React, { useEffect } from 'react';
import DeliveryMethods from './DeliveryMethods';
import { motion } from 'motion/react';
import { Clock, CheckCircle2, Users, FileText, ChevronRight, ShieldCheck, GraduationCap, Shield } from 'lucide-react';

interface GwoWorkingAtHeightsManualHandlingPageProps {
  onNavigate: (view: any) => void;
}

const GwoWorkingAtHeightsManualHandlingPage: React.FC<GwoWorkingAtHeightsManualHandlingPageProps> = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "GWO BST Working at Heights + Manual Handling (WAH + MH) | Aliseo Academy";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Corso combinato GWO BST Working at Heights (WAH) e Manual Handling (MH). Formazione completa per la sicurezza nel settore eolico.");
    }
  }, []);

  const mailtoLink = "mailto:commerciale@aliseogroup.it?subject=Richiesta%20informazioni%20corso%20GWO%20BST%20Working%20at%20Heights%20%2B%20Manual%20Handling&body=Buongiorno%2C%0A%0ASono%20interessato%20al%20corso%20combinato%20GWO%20BST%20Working%20at%20Heights%20%2B%20Manual%20Handling%20(WAH%20%2B%20MH).%0APotrei%20avere%20maggiori%20informazioni%20su%20modalit%C3%A0%2C%20prossime%20date%20e%20costi%3F%0A%0AGrazie.";

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
              <Shield className="w-4 h-4" />
              Standard GWO BST - Corso Combinato
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6"
            >
              GWO BST – <span className="text-brand">Working at Heights + Manual Handling (WAH + MH)</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-400 leading-relaxed mb-8"
            >
              Corso combinato GWO BST Working at Heights (WAH) e Manual Handling (MH). Permette di acquisire competenze fondamentali per lavorare in quota e movimentare carichi in sicurezza nel settore eolico.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col gap-6"
            >
              <div>
                <p className="text-slate-400 text-sm mb-3 font-medium">
                  Formazione integrata per ottimizzare tempi e costi nel settore wind.
                </p>
                <div className="flex flex-col gap-2">
                  <p className="text-brand text-xs font-bold uppercase tracking-wider">
                    Certificazione internazionale GWO
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
                  <span className="text-white font-bold">2 giorni (16 ore)</span>
                </div>
                <div className="w-px h-6 bg-white/10" />
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-brand" />
                  <span className="text-white font-bold text-sm">Standard GWO BST</span>
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
                  Corso Combinato Sicurezza Eolico
                </h2>
                <div className="text-slate-600 leading-relaxed space-y-6 text-lg">
                  <p>
                    Il corso combinato <strong>GWO BST Working at Heights (WAH) + Manual Handling (MH)</strong> integra due moduli fondamentali del Basic Safety Training, fornendo una formazione completa per operare in sicurezza nel settore eolico.
                  </p>
                  <p>
                    Questa soluzione formativa è ideale per chi deve ottenere entrambe le certificazioni, ottimizzando tempi e costi senza rinunciare alla qualità della formazione.
                  </p>
                  <p>
                    Il modulo <strong>Working at Heights (WAH)</strong> si concentra sulla sicurezza nei lavori in quota, con particolare attenzione alla prevenzione delle cadute, all’utilizzo dei dispositivi di protezione individuale (DPI) e alle procedure di evacuazione e recupero.
                  </p>
                  <p>
                    Il modulo <strong>Manual Handling (MH)</strong> fornisce invece le competenze necessarie per la movimentazione manuale dei carichi, con focus su ergonomia, tecniche corrette di sollevamento e prevenzione degli infortuni muscolo-scheletrici.
                  </p>
                  <p>
                    Il corso prevede un’ampia componente pratica, con esercitazioni realistiche che simulano le attività tipiche nel settore eolico, permettendo ai partecipanti di sviluppare competenze operative concrete e lavorare in sicurezza.
                  </p>
                </div>
              </article>

              {/* Delivery Methods */}
              <DeliveryMethods />

              {/* Detailed Sections */}
              <div className="space-y-12">
                <section>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <div className="w-1.5 h-6 bg-brand rounded-full" />
                    A chi è rivolto
                  </h3>
                  <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8">
                    <ul className="space-y-3">
                      {[
                        "Tecnici e operatori del settore eolico",
                        "Lavoratori onshore e offshore",
                        "Installatori e manutentori di turbine eoliche",
                        "Nuovi ingressi nel settore wind"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-600">
                          <CheckCircle2 className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                          <span>{item}</span>
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
                      "Lavorare in sicurezza in quota",
                      "Utilizzare correttamente i DPI anticaduta",
                      "Eseguire manovre di evacuazione e recupero",
                      "Applicare tecniche corrette di movimentazione manuale",
                      "Prevenire infortuni e ridurre i rischi operativi"
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                      <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <div className="w-1 h-4 bg-brand rounded-full" />
                        Modulo Working at Heights (WAH)
                      </h4>
                      <ul className="space-y-2 text-sm text-slate-500">
                        <li>• Rischi e prevenzione nei lavori in quota</li>
                        <li>• DPI anticaduta: utilizzo e ispezione</li>
                        <li>• Tecniche di lavoro in altezza</li>
                        <li>• Procedure di emergenza ed evacuazione</li>
                        <li>• Esercitazioni di recupero</li>
                      </ul>
                    </div>
                    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                      <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <div className="w-1 h-4 bg-brand rounded-full" />
                        Modulo Manual Handling (MH)
                      </h4>
                      <ul className="space-y-2 text-sm text-slate-500">
                        <li>• Principi di ergonomia</li>
                        <li>• Tecniche corrette di sollevamento e trasporto</li>
                        <li>• Valutazione dei rischi</li>
                        <li>• Esercitazioni pratiche di movimentazione</li>
                        <li>• Simulazioni operative</li>
                      </ul>
                    </div>
                  </div>
                </section>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="bg-slate-900 rounded-3xl p-8 sticky top-24">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <GraduationCap className="w-6 h-6 text-brand" />
                  Dettagli Corso
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-brand" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs uppercase font-bold tracking-wider">Durata</p>
                      <p className="text-white font-bold">2 giorni (16 ore)</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                      <Users className="w-5 h-5 text-brand" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs uppercase font-bold tracking-wider">Destinatari</p>
                      <p className="text-white font-bold text-sm">Tecnici e operatori eolici</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-5 h-5 text-brand" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs uppercase font-bold tracking-wider">Certificazione</p>
                      <p className="text-white font-bold text-sm">GWO BST WAH + MH</p>
                    </div>
                  </div>
                </div>
                <div className="mt-10 pt-8 border-t border-white/10">
                  <p className="text-slate-400 text-sm mb-1 text-center">
                    Ti rispondiamo entro 24 ore
                  </p>
                  <p className="text-white/60 text-[10px] mb-4 text-center uppercase tracking-widest">
                    Certificazione GWO
                  </p>
                  <a 
                    href={mailtoLink}
                    className="block w-full py-4 bg-brand text-slate-900 text-center font-black uppercase tracking-tight rounded-2xl hover:bg-brand-light transition-all shadow-lg shadow-brand/20"
                  >
                    Ricevi informazioni
                  </a>
                  <p className="text-white/40 text-[10px] text-center mt-4 uppercase tracking-widest">
                    commerciale@aliseogroup.it
                  </p>
                </div>
              </div>

              <div className="bg-slate-50 border border-slate-100 rounded-3xl p-8">
                <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-brand" />
                  Vantaggi Corso Combinato
                </h4>
                <p className="text-sm text-slate-600">
                  Frequentare i moduli WAH e MH in un'unica sessione permette di ottimizzare la logistica e ridurre i tempi di formazione, ottenendo due certificazioni fondamentali in soli due giorni.
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
              { title: "GWO Working at Heights", desc: "Corso base 16 ore", view: 'gwo-working-at-heights', icon: Shield },
              { title: "GWO Working at Heights Refresher", desc: "Aggiornamento 8 ore", view: 'gwo-working-at-heights-refresher', icon: Shield },
              { title: "GWO Manual Handling", desc: "Movimentazione carichi", view: 'gwo-manual-handling', icon: Users },
              { title: "GWO Manual Handling Refresher", desc: "Aggiornamento 3-4 ore", view: 'gwo-manual-handling-refresher', icon: Users },
              { title: "GWO First Aid (FA)", desc: "Corso base 16 ore", view: 'gwo-first-aid', icon: Shield },
              { title: "GWO First Aid Refresher", desc: "Aggiornamento 8 ore", view: 'gwo-first-aid-refresher', icon: Shield },
              { title: "GWO Fire Awareness (FA)", desc: "Antincendio eolico", view: 'gwo-fire-awareness', icon: Shield },
              { title: "GWO Fire Awareness Refresher", desc: "Aggiornamento 4 ore", view: 'gwo-fire-awareness-refresher', icon: Shield },
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

export default GwoWorkingAtHeightsManualHandlingPage;
