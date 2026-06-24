import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ShieldCheck, 
  ChevronRight, 
  MapPin, 
  Building2, 
  Compass, 
  Briefcase, 
  Truck, 
  FileText,
  X,
  ChevronLeft,
  ChevronRight as ChevronRightIcon
} from 'lucide-react';

interface CaseHistoryRWEMorconePageProps {
  onNavigate: (view: any) => void;
}

const CaseHistoryRWEMorconePage: React.FC<CaseHistoryRWEMorconePageProps> = ({ onNavigate }) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Case History RWE Morcone – GWO Training con Safety Truck Mobile | Aliseo Academy";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Scopri la case history Aliseo Academy presso RWE Morcone: GWO Training e addestramento tecnico-operativo con Safety Truck Mobile per il settore eolico.");
    }
  }, []);

  const mailtoLink = "mailto:commerciale@aliseogroup.it?subject=Richiesta%20informazioni%20Safety%20Truck%20Mobile%20Aliseo%20Academy%20-%20Case%20History%20RWE%20Morcone";

  const projectDetails = [
    {
      icon: <Building2 className="w-5 h-5 text-brand" />,
      label: "Cliente",
      value: "RWE"
    },
    {
      icon: <MapPin className="w-5 h-5 text-brand" />,
      label: "Località",
      value: "Morcone (BN)"
    },
    {
      icon: <Compass className="w-5 h-5 text-brand" />,
      label: "Settore",
      value: "Energia eolica"
    },
    {
      icon: <Briefcase className="w-5 h-5 text-brand" />,
      label: "Servizio",
      value: "GWO Training e addestramento tecnico-operativo"
    },
    {
      icon: <Truck className="w-5 h-5 text-brand" />,
      label: "Supporto",
      value: "Safety Truck Mobile Aliseo Academy"
    },
    {
      icon: <FileText className="w-5 h-5 text-brand" />,
      label: "Ambito",
      value: "Sicurezza, lavori in quota, addestramento tecnico e formazione operativa"
    }
  ];

  // Generiamo l'array delle 26 immagini
  const totalImages = 26;
  const images = Array.from({ length: totalImages }, (_, i) => i + 1);

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 1 ? totalImages : selectedImage - 1);
    }
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === totalImages ? 1 : selectedImage + 1);
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen" id="rwe-morcone-page-container">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 bg-slate-900 overflow-hidden" id="hero-section">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(234,179,8,0.15),transparent_60%)]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-wrap gap-2 mb-6"
              id="category-badges"
            >
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand text-xs font-bold uppercase tracking-wider">
                GWO Training
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-bold uppercase tracking-wider">
                Safety Truck Mobile
              </span>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-bold uppercase tracking-wider">
                Case History
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6"
              id="hero-title"
            >
              Case History <span className="text-brand">RWE Morcone</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-300 leading-relaxed mb-8"
              id="hero-subtitle"
            >
              Attività di GWO Training e addestramento tecnico-operativo presso il sito RWE di Morcone, con il supporto del Safety Truck Mobile Aliseo Academy.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
              id="hero-actions"
            >
              <a
                href={mailtoLink}
                className="inline-flex items-center gap-2 px-8 py-4 bg-brand text-slate-900 font-black uppercase tracking-tight rounded-2xl hover:bg-brand-light transition-all duration-300 group shadow-xl shadow-brand/20 text-sm"
                id="cta-hero-button"
              >
                RICHIEDI INFORMAZIONI SUL SAFETY TRUCK MOBILE
                <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left/Middle Content */}
          <div className="lg:col-span-2 space-y-10">
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-slate-100">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 flex items-center gap-3">
                <ShieldCheck className="w-8 h-8 text-brand shrink-0" />
                GWO Training e addestramento sul campo
              </h2>
              <div className="prose prose-slate max-w-none text-slate-600 space-y-6 leading-relaxed">
                <p>
                  La case history documenta un’attività di GWO Training svolta presso il sito RWE di Morcone, con il supporto del Safety Truck Mobile Aliseo Academy. Le immagini raccontano momenti operativi legati alla formazione tecnica, alla sicurezza sul lavoro e all’addestramento in contesti eolici reali.
                </p>
                <p>
                  Il Safety Truck Mobile consente di portare direttamente presso il cliente attrezzature, scenari addestrativi e competenze specialistiche, riducendo gli spostamenti dei partecipanti e rendendo la formazione più vicina alle condizioni operative del settore eolico.
                </p>
              </div>
            </div>

            {/* Galleria fotografica */}
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-slate-100">
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-2">
                Galleria fotografica RWE Morcone
              </h2>
              <p className="text-slate-500 mb-8">
                Una selezione di immagini scattate durante le attività di GWO Training e addestramento tecnico-operativo presso il sito RWE di Morcone. Clicca su un'immagine per ingrandirla.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {images.map((num) => {
                  const srcPath = `/gallery/morcone-rwe/${num}.jpg`;
                  const altText = `Case History RWE Morcone - GWO Training con Safety Truck Mobile Aliseo Academy foto ${num}`;
                  return (
                    <motion.div
                      key={num}
                      whileHover={{ scale: 1.03 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm border border-slate-150 cursor-pointer group bg-slate-100"
                      onClick={() => setSelectedImage(num)}
                    >
                      <img
                        src={srcPath}
                        alt={altText}
                        loading="lazy"
                        className="w-full h-full object-cover transition-all duration-300 group-hover:opacity-95"
                      />
                      <div className="absolute inset-0 bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="px-4 py-2 bg-slate-900/80 text-white text-xs font-bold uppercase rounded-lg backdrop-blur-xs">
                          Visualizza foto {num}
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Sidebar - Progetto Info */}
          <div className="space-y-8">
            <div className="bg-slate-900 rounded-3xl p-8 text-white shadow-xl shadow-slate-900/10 sticky top-24">
              <h3 className="text-xl font-black uppercase tracking-tight text-brand mb-6 pb-4 border-b border-white/10">
                Dettagli Progetto
              </h3>
              <div className="space-y-6">
                {projectDetails.map((detail, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="p-2.5 bg-white/5 rounded-xl border border-white/10 shrink-0 h-fit">
                      {detail.icon}
                    </div>
                    <div>
                      <span className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">
                        {detail.label}
                      </span>
                      <span className="text-sm font-semibold text-white leading-relaxed">
                        {detail.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Finale */}
      <section className="bg-slate-900 py-16 relative overflow-hidden" id="cta-section">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(234,179,8,0.15),transparent_50%)]" />
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-black text-white mb-6"
          >
            Vuoi portare il GWO Training direttamente presso il tuo sito?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            Il Safety Truck Mobile Aliseo Academy permette di organizzare attività formative e addestrative direttamente presso il cliente, con soluzioni flessibili per il settore eolico e industriale.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <a
              href={mailtoLink}
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand text-slate-900 font-black uppercase tracking-tight rounded-2xl hover:bg-brand-light transition-all duration-300 group shadow-xl shadow-brand/20 text-sm"
            >
              RICHIEDI INFORMAZIONI SUL SAFETY TRUCK MOBILE
              <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Lightbox / Modal per le immagini ingrandite */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-950/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors z-50 cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Pulsanti Navigazione Lightbox */}
            <button
              onClick={handlePrevImage}
              className="absolute left-4 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors z-50 cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={handleNextImage}
              className="absolute right-4 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors z-50 cursor-pointer"
            >
              <ChevronRightIcon className="w-6 h-6" />
            </button>

            <div className="relative max-w-5xl max-h-[85vh] flex flex-col items-center">
              <motion.img
                key={selectedImage}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.2 }}
                src={`/gallery/morcone-rwe/${selectedImage}.jpg`}
                alt={`Case History RWE Morcone - GWO Training con Safety Truck Mobile Aliseo Academy foto ${selectedImage}`}
                className="max-w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
              <span className="text-slate-400 text-sm mt-4 font-bold uppercase tracking-widest">
                Foto {selectedImage} di {totalImages}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CaseHistoryRWEMorconePage;
