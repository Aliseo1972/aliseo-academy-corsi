import React from 'react';
import { MapPin, Users, Truck } from 'lucide-react';

export const DeliveryMethods: React.FC = () => {
  return (
    <div className="bg-slate-900 rounded-[3rem] p-8 md:p-12 text-white relative overflow-hidden mb-12">
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand/10 rounded-full blur-3xl -mr-32 -mt-32" />
      <div className="relative z-10">
        <h2 className="text-3xl font-black mb-8">Modalità di Erogazione</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
              <MapPin className="w-6 h-6 text-brand" />
            </div>
            <h3 className="text-xl font-bold">Centro Formativo</h3>
            <p className="text-slate-400 text-sm">Presso le nostre sedi attrezzate a Siracusa e provincia.</p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
              <Users className="w-6 h-6 text-brand" />
            </div>
            <h3 className="text-xl font-bold">Presso il Cliente</h3>
            <p className="text-slate-400 text-sm">Organizziamo sessioni formative direttamente nella tua azienda in tutta Italia.</p>
          </div>
          <div className="space-y-4">
            <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
              <Truck className="w-6 h-6 text-brand" />
            </div>
            <h3 className="text-xl font-bold">Safety Truck</h3>
            <p className="text-slate-400 text-sm">L'unico centro mobile in Italia per addestramento pratico ovunque tu sia.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DeliveryMethods;
