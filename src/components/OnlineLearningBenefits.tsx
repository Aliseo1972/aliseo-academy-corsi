import React from 'react';
import { Monitor, ShieldCheck, Clock } from 'lucide-react';

const OnlineLearningBenefits: React.FC = () => {
  return (
    <section className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
      <div className="relative z-10">
        <h3 className="text-2xl md:text-3xl font-black mb-6 uppercase tracking-tight">
          Vantaggi della <span className="text-brand">Formazione Online</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
              <Monitor className="w-6 h-6 text-brand" />
            </div>
            <h4 className="font-bold text-lg">Accesso 24/7</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              Piattaforma LMS certificata disponibile in ogni momento. I lavoratori gestiscono i tempi di studio in autonomia.
            </p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
              <ShieldCheck className="w-6 h-6 text-brand" />
            </div>
            <h4 className="font-bold text-lg">Tracciamento</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              Monitoraggio costante dei progressi e test di verifica intermedi per garantire l'effettivo apprendimento.
            </p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
              <Clock className="w-6 h-6 text-brand" />
            </div>
            <h4 className="font-bold text-lg">Zero Trasferte</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              Nessun costo di spostamento o interruzione prolungata dell'attività lavorativa. Massima efficienza aziendale.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnlineLearningBenefits;
