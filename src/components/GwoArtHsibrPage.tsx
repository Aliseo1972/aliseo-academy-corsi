import React, { useEffect } from 'react';
import DeliveryMethods from './DeliveryMethods';
import { motion } from 'motion/react';
import { Clock, CheckCircle2, Users, FileText, ChevronRight, ShieldCheck, GraduationCap, Shield, RefreshCw, AlertTriangle } from 'lucide-react';

interface GwoArtHsibrPageProps {
  onNavigate: (view: any) => void;
}

const GwoArtHsibrPage: React.FC<GwoArtHsibrPageProps> = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "GWO ART HSIBR | Hub, Spinner & Inside Blade Rescue | Aliseo Academy";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Corso GWO ART HSIBR dedicato alle tecniche avanzate di soccorso in hub, spinner e all’interno della pala. Formazione avanzata certificata GWO.");
    }
  }, []);

  const mailtoLink = "mailto:commerciale@aliseogroup.it?subject=Richiesta%20informazioni%20corso%20GWO%20ART%20HSIBR&body=Buongiorno%2C%0A%0ASono%20interessato%20al%20corso%20GWO%20ART%20Hub%2C%20Spinner%20%26%20Inside%20Blade%20Rescue%20(HSIBR).%0APotrei%20avere%20maggiori%20informazioni%20su%20modalit%C3%A0%2C%20prossime%20date%20e%20costi%3F%0A%0AGrazie.";

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
              Advanced Rescue Training (ART)
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6"
            >
              GWO ART – <span className="text-brand">HSIBR</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-400 leading-relaxed mb-8"
            >
              Hub, Spinner & Inside Blade Rescue. Tecniche avanzate di soccorso in spazi confinati e aree critiche delle turbine eoliche.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col gap-6"
            >
              <div>
                <p className="text-slate-400 text-sm mb-3 font-medium">
                  Formazione specialistica per la gestione di emergenze complesse in ambiente wind.
                </p>
                <div className="flex flex-col gap-2">
                  <p className="text-brand text-xs font-bold uppercase tracking-wider">
                    Certificazione internazionale ART
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
                  <span className="text-white font-bold text-sm">Standard GWO ART</span>
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
                  Soccorso Avanzato in Hub e Pale
                </h2>
                <div className="text-slate-600 leading-relaxed space-y-6 text-lg">
                  <p>
                    Il corso <strong>GWO ART – Hub, Spinner & Inside Blade Rescue (HSIBR)</strong> è parte dell’Advanced Rescue Training (ART) e fornisce ai partecipanti le competenze avanzate necessarie per effettuare operazioni di soccorso in scenari complessi all’interno delle turbine eoliche.
                  </p>
                  <p>
                    Il modulo è focalizzato sulle attività di recupero in aree critiche come l’hub, lo spinner e l’interno delle pale, dove gli spazi ristretti e le condizioni operative richiedono un elevato livello di preparazione tecnica e coordinamento.
                  </p>
                  <p>
                    Durante il corso, i partecipanti apprendono come pianificare e gestire operazioni di soccorso, utilizzare correttamente le attrezzature specifiche e intervenire in sicurezza in situazioni di emergenza. Grande attenzione è dedicata alla componente pratica, con simulazioni realistiche che permettono di sviluppare competenze operative avanzate, capacità decisionali e lavoro di squadra in contesti ad alto rischio.
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
                      Il certificato <strong>GWO ART HSIBR</strong> ha una validità di <strong>2 anni</strong>.
                    </p>
                    <p>
                      Per mantenere la certificazione attiva è necessario frequentare il corso di aggiornamento prima della scadenza:
                    </p>
                    <div className="flex items-center gap-3 bg-white/50 w-fit px-4 py-2 rounded-xl border border-amber-200">
                      <ShieldCheck className="w-5 h-5 text-amber-600" />
                      <span className="font-bold text-amber-900 tracking-tight">GWO ART HSIBR Refresher</span>
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
                        "Personale coinvolto in attività di soccorso e emergenza",
                        "Lavoratori con certificazione GWO BST valida",
                        "Operatori che devono svolgere interventi in spazi complessi"
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
                      "Eseguire operazioni di soccorso in hub, spinner e pala",
                      "Utilizzare correttamente attrezzature di recupero avanzate",
                      "Gestire situazioni di emergenza in spazi confinati",
                      "Operare in sicurezza in scenari complessi",
                      "Collaborare efficacemente nel team di soccorso"
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
                        <li>• Introduzione al GWO ART HSIBR</li>
                        <li>• Analisi dei rischi e scenari di soccorso</li>
                        <li>• Pianificazione delle operazioni di recupero</li>
                        <li>• Attrezzature e procedure specifiche</li>
                      </ul>
                    </div>
                    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                      <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <div className="w-1 h-4 bg-brand rounded-full" />
                        Parte Pratica
                      </h4>
                      <ul className="space-y-2 text-sm text-slate-500">
                        <li>• Tecniche di soccorso in hub e spinner</li>
                        <li>• Recupero all’interno della pala</li>
                        <li>• Utilizzo sistemi di evacuazione avanzati</li>
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
                      <p className="text-white font-bold text-sm">GWO ART HSIBR</p>
                    </div>
                  </div>
                </div>
                <div className="mt-10 pt-8 border-t border-white/10">
                  <p className="text-slate-400 text-sm mb-1 text-center">
                    Ti rispondiamo entro 24 ore
                  </p>
                  <p className="text-white/60 text-[10px] mb-4 text-center uppercase tracking-widest">
                    Certificazione GWO ART
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
                  Per accedere al modulo HSIBR è necessario possedere una certificazione GWO BST (Basic Safety Training) in corso di validità.
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
              { title: "GWO Working at Heights", desc: "Sicurezza in quota", view: 'gwo-working-at-heights', icon: Shield },
              { title: "GWO Manual Handling", desc: "Movimentazione carichi", view: 'gwo-manual-handling', icon: Users },
              { title: "GWO First Aid", desc: "Primo soccorso eolico", view: 'gwo-first-aid', icon: ShieldCheck },
              { title: "GWO Fire Awareness", desc: "Antincendio base", view: 'gwo-fire-awareness', icon: Shield },
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

export default GwoArtHsibrPage;
