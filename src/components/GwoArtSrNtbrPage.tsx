import React, { useEffect } from 'react';
import DeliveryMethods from './DeliveryMethods';
import { motion } from 'motion/react';
import { Clock, CheckCircle2, Users, FileText, ChevronRight, ShieldCheck, GraduationCap, Shield, RefreshCw, AlertTriangle, User } from 'lucide-react';

interface GwoArtSrNtbrPageProps {
  onNavigate: (view: any) => void;
}

const GwoArtSrNtbrPage: React.FC<GwoArtSrNtbrPageProps> = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "GWO ART SR-NTBR | Single Rescuer: Nacelle, Tower & Basement Rescue | Aliseo Academy";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Corso GWO ART SR-NTBR dedicato alle tecniche avanzate di soccorso in autonomia in navicella, torre e base della turbina. Formazione specialistica certificata GWO.");
    }
  }, []);

  const mailtoLink = "mailto:commerciale@aliseogroup.it?subject=Richiesta%20informazioni%20corso%20GWO%20ART%20SR-NTBR&body=Buongiorno%2C%0A%0ASono%20interessato%20al%20corso%20GWO%20ART%20Single%20Rescuer%3A%20Nacelle%2C%20Tower%20%26%20Basement%20Rescue%20(SR-NTBR).%0APotrei%20avere%20maggiori%20informazioni%20su%20modalit%C3%A0%2C%20prossime%20date%20e%20costi%3F%0A%0AGrazie.";

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
              <User className="w-4 h-4" />
              Advanced Rescue Training (ART) - Single Rescuer
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6"
            >
              GWO ART – <span className="text-brand">SR-NTBR</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-400 leading-relaxed mb-8"
            >
              Single Rescuer: Nacelle, Tower & Basement Rescue. Tecniche avanzate di soccorso in autonomia nelle principali aree operative della turbina eolica.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col gap-6"
            >
              <div>
                <p className="text-slate-400 text-sm mb-3 font-medium">
                  Formazione specialistica per soccorritori singoli in ambienti verticali e confinati wind.
                </p>
                <div className="flex flex-col gap-2">
                  <p className="text-brand text-xs font-bold uppercase tracking-wider">
                    Certificazione internazionale ART Single Rescuer
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
                  <span className="text-white font-bold text-sm">Standard GWO ART SR</span>
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
                  Soccorso Individuale in Torre e Navicella
                </h2>
                <div className="text-slate-600 leading-relaxed space-y-6 text-lg">
                  <p>
                    Il corso <strong>GWO ART – Single Rescuer: Nacelle, Tower & Basement Rescue (SR-NTBR)</strong> è un modulo avanzato dell’Advanced Rescue Training (ART), progettato per sviluppare le competenze necessarie a gestire operazioni di soccorso in autonomia nelle principali aree operative della turbina eolica.
                  </p>
                  <p>
                    Il corso si concentra su scenari complessi in navicella, torre e base della turbina, dove il soccorritore deve essere in grado di intervenire rapidamente anche senza supporto diretto.
                  </p>
                  <p>
                    Durante la formazione, i partecipanti apprendono come pianificare ed eseguire operazioni di recupero individuali, utilizzare correttamente le attrezzature di soccorso e gestire situazioni di emergenza in ambienti verticali e confinati. Grande attenzione è dedicata alla capacità decisionale, alla valutazione del rischio e alla gestione dello stress, elementi fondamentali quando si opera come soccorritore singolo.
                  </p>
                </div>
              </article>

              {/* Aggiornamento Section */}
              <section className="bg-amber-50 border border-amber-100 rounded-3xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <RefreshCw className="w-24 h-24 text-amber-900" />
                </div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-amber-900 mb-4 flex items-center gap-2">
                    <RefreshCw className="w-6 h-6" />
                    🔄 AGGIORNAMENTO (Refresher)
                  </h3>
                  <div className="space-y-4 text-amber-800/80">
                    <p>
                      Il certificato <strong>GWO ART SR-NTBR</strong> ha una validità di <strong>2 anni</strong>.
                    </p>
                    <p>
                      Per mantenere la certificazione attiva è necessario frequentare il corso di aggiornamento prima della scadenza:
                    </p>
                    <div className="flex items-center gap-3 bg-white/50 w-fit px-4 py-2 rounded-xl border border-amber-200">
                      <ShieldCheck className="w-5 h-5 text-amber-600" />
                      <span className="font-bold text-amber-900 tracking-tight">GWO ART SR-NTBR Refresher</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-medium">
                      <Clock className="w-4 h-4" />
                      Durata aggiornamento: 1 giorno (8 ore)
                    </div>
                  </div>
                </div>
              </section>

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
                        "Tecnici e operatori esperti del settore eolico",
                        "Personale coinvolto in attività di soccorso avanzato",
                        "Lavoratori con esperienza in ART base",
                        "Operatori che devono intervenire in autonomia"
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
                      "Eseguire operazioni di soccorso in autonomia",
                      "Intervenire in navicella, torre e base della turbina",
                      "Utilizzare attrezzature di recupero avanzate in modo indipendente",
                      "Valutare i rischi e prendere decisioni operative",
                      "Operare in sicurezza in scenari complessi"
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
                        Parte Teorica
                      </h4>
                      <ul className="space-y-2 text-sm text-slate-500">
                        <li>• Introduzione al GWO ART Single Rescuer</li>
                        <li>• Analisi dei rischi e gestione delle emergenze</li>
                        <li>• Pianificazione interventi in autonomia</li>
                        <li>• Attrezzature e procedure specifiche</li>
                      </ul>
                    </div>
                    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                      <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <div className="w-1 h-4 bg-brand rounded-full" />
                        Parte Pratica
                      </h4>
                      <ul className="space-y-2 text-sm text-slate-500">
                        <li>• Tecniche di soccorso individuale in torre e navicella</li>
                        <li>• Recupero dalla base della turbina</li>
                        <li>• Utilizzo sistemi di evacuazione in autonomia</li>
                        <li>• Simulazioni di emergenza realistica</li>
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
                      <p className="text-white font-bold text-sm">Tecnici esperti wind</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-5 h-5 text-brand" />
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs uppercase font-bold tracking-wider">Certificazione</p>
                      <p className="text-white font-bold text-sm">GWO ART SR-NTBR</p>
                    </div>
                  </div>
                </div>
                <div className="mt-10 pt-8 border-t border-white/10">
                  <p className="text-slate-400 text-sm mb-1 text-center">
                    Ti rispondiamo entro 24 ore
                  </p>
                  <p className="text-white/60 text-[10px] mb-4 text-center uppercase tracking-widest">
                    Certificazione GWO ART SR
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
                  <AlertTriangle className="w-5 h-5 text-brand" />
                  Requisito Essenziale
                </h4>
                <p className="text-sm text-slate-600">
                  Per accedere al modulo SR-NTBR è necessario possedere una certificazione GWO ART base e GWO BST in corso di validità.
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
              { title: "GWO ART NTBR", desc: "Soccorso in torre e base", view: 'gwo-art-ntbr', icon: Shield },
              { title: "GWO ART HSIBR", desc: "Soccorso in hub e pale", view: 'gwo-art-hsibr', icon: Shield },
              { title: "GWO ART SR-HSIBR", desc: "Soccorso individuale hub", view: 'gwo-art-sr-hsibr', icon: User },
              { title: "GWO Working at Heights", desc: "Sicurezza in quota", view: 'gwo-working-at-heights', icon: Shield },
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

export default GwoArtSrNtbrPage;
