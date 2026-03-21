/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Shield, 
  BookOpen, 
  Clock, 
  Euro, 
  Search, 
  ChevronRight, 
  ChevronLeft,
  Menu, 
  X, 
  Phone, 
  PhoneCall,
  Mail, 
  MapPin,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  Play,
  Truck
} from 'lucide-react';
import { courses, categories } from './data/courses';
import { Course } from './types';
import RLSPage from './components/RLSPage';
import RLSUpdatePage from './components/RLSUpdatePage';
import RLSUpdate8Page from './components/RLSUpdate8Page';
import AntincendioL1Page from './components/AntincendioL1Page';
import AntincendioL2Page from './components/AntincendioL2Page';
import AntincendioL3Page from './components/AntincendioL3Page';
import AntincendioUpdateL1Page from './components/AntincendioUpdateL1Page';
import AntincendioUpdateL2Page from './components/AntincendioUpdateL2Page';
import AntincendioUpdateL3Page from './components/AntincendioUpdateL3Page';
import PrimoSoccorsoGruppoAPage from './components/PrimoSoccorsoGruppoAPage';
import PrimoSoccorsoGruppoBCPage from './components/PrimoSoccorsoGruppoBCPage';
import AggiornamentoPrimoSoccorsoGruppoAPage from './components/AggiornamentoPrimoSoccorsoGruppoAPage';
import AggiornamentoPrimoSoccorsoGruppoBCPage from './components/AggiornamentoPrimoSoccorsoGruppoBCPage';

const CourseCard = ({ course, onOpen }: { course: Course; onOpen: (course: Course) => void; key?: string | number }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -4 }}
      className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col h-full transition-all hover:shadow-xl hover:border-brand/20 group"
    >
      <div className="flex justify-between items-start mb-4">
        <span className="px-3 py-1 bg-slate-900 text-brand text-xs font-semibold rounded-full uppercase tracking-wider">
          {course.category}
        </span>
        <div className="p-2 bg-slate-900 rounded-lg group-hover:scale-110 transition-transform">
          <BookOpen className="w-5 h-5 text-brand" />
        </div>
      </div>
      
      <h3 className="text-lg font-bold text-slate-900 mb-4 flex-grow leading-tight">
        <span className="group-hover:bg-slate-900 group-hover:text-brand px-2 py-1 -mx-2 rounded-lg transition-all inline-block">
          {course.title}
        </span>
      </h3>
      
      <div className="space-y-3 mb-6">
        <div className="flex items-center text-slate-500 text-sm">
          <Clock className="w-4 h-4 mr-2 text-slate-400" />
          <span>{course.duration} • {course.lessons} lezioni</span>
        </div>
        <div className="inline-flex items-center bg-slate-900 px-3 py-1.5 rounded-lg text-price-yellow font-bold text-lg w-fit">
          <Euro className="w-5 h-5 mr-1" />
          <span>{course.price}</span>
        </div>
      </div>
      
      <button 
        onClick={() => onOpen(course)}
        className="w-full py-3 px-4 bg-slate-900 text-white rounded-xl font-medium flex items-center justify-center group/btn hover:bg-brand hover:text-brand-dark transition-all cursor-pointer"
      >
        Scopri di più
        <ChevronRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
      </button>
    </motion.div>
  );
};

const CourseModal = ({ course, onClose }: { course: Course; onClose: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        className="bg-white rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white/80 backdrop-blur-md border-b border-slate-100 p-6 flex justify-between items-center z-10">
          <h2 className="text-xl font-bold text-slate-900 pr-8 leading-tight">{course.title}</h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-slate-100 rounded-full transition-colors shrink-0"
          >
            <X className="w-6 h-6 text-slate-400" />
          </button>
        </div>

        <div className="p-8">
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-xl border border-slate-100">
              <Clock className="w-5 h-5 text-brand" />
              <div className="text-sm">
                <p className="text-slate-400 font-medium uppercase text-[10px] tracking-wider">Durata</p>
                <p className="text-slate-900 font-bold">{course.duration}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-xl border border-slate-100">
              <BookOpen className="w-5 h-5 text-brand" />
              <div className="text-sm">
                <p className="text-slate-400 font-medium uppercase text-[10px] tracking-wider">Lezioni</p>
                <p className="text-slate-900 font-bold">{course.lessons}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-slate-900 rounded-xl border border-slate-800">
              <Euro className="w-5 h-5 text-price-yellow" />
              <div className="text-sm">
                <p className="text-slate-400 font-medium uppercase text-[10px] tracking-wider opacity-60">Prezzo</p>
                <p className="text-price-yellow font-bold">{course.price}</p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <section>
              <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                <div className="w-1.5 h-6 bg-brand rounded-full" />
                Descrizione del Corso
              </h3>
              {course.fullDescription ? (
                <div className="space-y-4">
                  {course.fullDescription.map((para, i) => (
                    <p key={i} className="text-slate-600 leading-relaxed text-sm">
                      {para}
                    </p>
                  ))}
                </div>
              ) : (
                <p className="text-slate-600 leading-relaxed">
                  {course.description || `Il corso di ${course.title} è progettato per fornire le competenze necessarie in conformità con le normative vigenti.`}
                </p>
              )}
            </section>

            {course.syllabus && course.syllabus.length > 0 && (
              <section>
                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <div className="w-1.5 h-6 bg-brand rounded-full" />
                  Programma del Corso
                </h3>
                <div className="space-y-4">
                  {course.syllabus.map((module, i) => (
                    <div 
                      key={i} 
                      className="group bg-slate-50 border border-slate-200 rounded-2xl p-5 transition-all hover:border-brand/30 hover:bg-white"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-xs font-bold text-slate-400 group-hover:text-brand group-hover:border-brand/20 transition-colors">
                            {String(i + 1).padStart(2, '0')}
                          </div>
                          <h4 className="font-bold text-slate-900 text-sm group-hover:text-brand transition-colors">
                            {module.title}
                          </h4>
                        </div>
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider bg-white px-2 py-1 rounded-md border border-slate-100">
                          {module.lessonsCount ? `${module.lessonsCount} lezioni • ` : ''}{module.duration}
                        </div>
                      </div>
                      
                      {module.lessons && module.lessons.length > 0 && (
                        <ul className="mt-4 space-y-2 border-t border-slate-100 pt-4">
                          {module.lessons.map((lesson, j) => (
                            <li key={j} className="flex items-start gap-2 text-xs text-slate-500">
                              <div className="w-1 h-1 rounded-full bg-brand mt-1.5 shrink-0" />
                              <span>{lesson}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {course.objectives && course.objectives.length > 0 && (
              <section>
                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <div className="w-1.5 h-6 bg-brand rounded-full" />
                  Cosa imparerai
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {course.objectives.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircle2 className="w-5 h-5 text-brand shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {course.references && course.references.length > 0 && (
              <section>
                <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <div className="w-1.5 h-6 bg-brand rounded-full" />
                  Riferimenti Normativi
                </h3>
                <div className="flex flex-wrap gap-2">
                  {course.references.map((ref, i) => (
                    <span key={i} className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-mono rounded-md border border-slate-200">
                      {ref}
                    </span>
                  ))}
                </div>
              </section>
            )}

            {course.recipients && (
              <section>
                <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                  <div className="w-1.5 h-6 bg-brand rounded-full" />
                  Destinatari
                </h3>
                <p className="text-slate-600 text-sm italic">
                  {course.recipients}
                </p>
              </section>
            )}

            <div className="pt-8 border-t border-slate-100">
              <a 
                href={`mailto:commerciale@aliseogroup.it?subject=Richiesta informazioni: ${course.title}`}
                className="block w-full py-4 bg-brand text-brand-dark text-center rounded-2xl font-bold hover:opacity-90 transition-all shadow-lg shadow-brand/20"
              >
                Richiedi Info
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const AboutSection = ({ setCurrentView }: { setCurrentView: (view: any) => void }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto px-4 py-20"
    >
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900 uppercase mb-4">
          Chi <span className="text-brand">Siamo</span>
        </h1>
        <div className="w-20 h-1.5 bg-brand mx-auto rounded-full" />
      </div>

      <div className="prose prose-slate max-w-none">
        <div className="bg-white rounded-3xl border border-slate-100 p-8 md:p-12 shadow-xl shadow-slate-200/50 space-y-8">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
              <Shield className="w-6 h-6 text-brand" />
              Aliseo Academy
            </h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              Aliseo Academy è il centro di formazione di Aliseo Group Srl, specializzato in sicurezza e formazione tecnica per il settore industriale ed energetico, con particolare focus sull’eolico.
            </p>
            <p className="text-slate-600 leading-relaxed text-lg">
              Operiamo come partner delle aziende per garantire competenza, conformità normativa e standard di sicurezza elevati, attraverso percorsi formativi certificati e orientati alla pratica.
            </p>
          </section>

          <section className="space-y-4 bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-100">
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
              <div className="w-1.5 h-8 bg-brand rounded-full" />
              Formazione nel Settore Eolico – Standard GWO
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Siamo centro specializzato nell’erogazione dei corsi conformi agli standard GWO (Global Wind Organisation), tra cui il Basic Safety Training (BST), obbligatorio per il personale operante nei parchi eolici.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              {['First Aid', 'Fire Awareness', 'Manual Handling', 'Work at Height'].map((item) => (
                <div key={item} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                  <CheckCircle2 className="w-5 h-5 text-brand" />
                  <span className="font-bold text-slate-700 uppercase tracking-tight text-sm">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-slate-500 mt-4 italic">
              Le certificazioni hanno validità internazionale e sono registrate nel database WINDA.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
              <BookOpen className="w-6 h-6 text-brand" />
              Corsi Sicurezza D.Lgs. 81/08
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Aliseo Academy eroga tutti i corsi previsti dal D.Lgs. 81/08, tra cui:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-slate-600">
              {[
                'Formazione lavoratori (generale e specifica)',
                'Preposti',
                'Dirigenti',
                'RSPP / ASPP',
                'Antincendio',
                'Primo Soccorso',
                'Lavori in quota e DPI III categoria',
                'Spazi confinati',
                'Attrezzature e abilitazioni specifiche'
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-brand rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-6">
            <div className="bg-brand/5 border-l-4 border-brand p-6 rounded-r-2xl">
              <h3 className="font-bold text-slate-900 mb-2">Modalità di Erogazione</h3>
              <p className="text-slate-600">I corsi possono essere svolti:</p>
              <ul className="mt-4 space-y-4">
                <li className="flex gap-3">
                  <MapPin className="w-5 h-5 text-brand shrink-0" />
                  <span className="text-slate-700">Presso il nostro <strong>Centro Formativo di Siracusa – Priolo Gargallo</strong></span>
                </li>
                <li className="flex gap-3">
                  <PhoneCall className="w-5 h-5 text-brand shrink-0" />
                  <span className="text-slate-700">Presso la sede del cliente, anche tramite il nostro esclusivo <strong>Safety Truck Mobile</strong>, unità formativa attrezzata per l’addestramento pratico e operativo direttamente on-site.</span>
                </li>
              </ul>
            </div>
            <p className="text-slate-600 leading-relaxed">
              La nostra struttura di Siracusa (Priolo Gargallo) è attrezzata per attività teoriche e pratiche, con simulatori e dispositivi dedicati all’addestramento operativo in ambienti ad alto rischio.
            </p>
          </section>

          <section className="pt-8 border-t border-slate-100 space-y-6">
            <h2 className="text-2xl font-bold text-slate-900 text-center uppercase tracking-tighter">Il Nostro <span className="text-brand">Impegno</span></h2>
            <p className="text-slate-600 text-center max-w-2xl mx-auto">
              Gestiamo internamente ogni fase del processo formativo:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Organizzazione', icon: Clock },
                { label: 'Documentazione', icon: Shield },
                { label: 'Certificazioni', icon: CheckCircle2 },
                { label: 'Supporto', icon: Phone }
              ].map((item) => (
                <div key={item.label} className="text-center space-y-2">
                  <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto border border-slate-100">
                    <item.icon className="w-6 h-6 text-brand" />
                  </div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">{item.label}</span>
                </div>
              ))}
            </div>
            <div className="text-center pt-8 space-y-6">
              <div className="space-y-2">
                <p className="text-2xl font-black text-slate-900 tracking-tighter uppercase">Formiamo persone.</p>
                <p className="text-2xl font-black text-brand tracking-tighter uppercase">Proteggiamo competenze.</p>
                <p className="text-slate-500 font-medium">Supportiamo le aziende nella crescita sicura e conforme.</p>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4">
                <button 
                  onClick={() => {
                    setCurrentView('home');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-brand hover:text-brand-dark transition-all shadow-xl shadow-slate-200"
                >
                  Esplora i nostri corsi
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => {
                    setCurrentView('gwo-training');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 border-2 border-slate-900 rounded-2xl font-bold hover:bg-slate-900 hover:text-white transition-all shadow-xl shadow-slate-200"
                >
                  Corsi GWO Training
                  <Shield className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => {
                    setCurrentView('mobile-center');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-brand text-brand-dark rounded-2xl font-bold hover:opacity-90 transition-all shadow-xl shadow-brand/20"
                >
                  Centro Formativo Mobile
                  <Play className="w-5 h-5" />
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </motion.div>
  );
};

const GallerySection = ({ setCurrentView }: { setCurrentView: (view: any) => void }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const photos = [
    "/foto1.jpg",
    "/foto2.jpg",
    "/foto3.jpg",
    "/foto4.jpg",
    "/foto5.jpg",
    "/foto6.jpg",
    "/foto7.jpg",
    "/foto8.jpg",
    "/foto9.jpg",
    "/foto10.jpg",
    "/foto11.jpg",
    "/foto12.jpg",
    "/foto13.jpg",
    "/foto14.jpg",
    "/foto15.jpg",
    "/truck_turbine.jpg",
    "/truck academy.jpg"
  ];

  const handleNext = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % photos.length);
    }
  }, [selectedIndex, photos.length]);

  const handlePrev = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + photos.length) % photos.length);
    }
  }, [selectedIndex, photos.length]);

  const handleClose = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'Escape') handleClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, handleNext, handlePrev, handleClose]);

  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedIndex]);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-slate-50 pt-32 pb-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tight"
          >
            Galleria <span className="text-brand">Foto</span>
          </motion.h1>
          <div className="w-24 h-1.5 bg-brand mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Esplora le immagini dei nostri centri formativi e delle attività di addestramento.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              onClick={() => setSelectedIndex(index)}
              className="aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-slate-200 group relative cursor-pointer"
            >
              <img 
                src={photo} 
                alt={`Galleria foto ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30">
                  <Search className="w-6 h-6 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button 
            onClick={() => {
              setCurrentView('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-brand hover:text-brand-dark transition-all uppercase tracking-wider shadow-lg"
          >
            Torna alla Home
          </button>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[300] bg-slate-950/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-10"
            onClick={handleClose}
          >
            <button 
              onClick={(e) => { e.stopPropagation(); handleClose(); }}
              className="absolute top-6 right-6 z-[310] p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <button 
              onClick={(e) => { e.stopPropagation(); handlePrev(); }}
              className="absolute left-6 top-1/2 -translate-y-1/2 z-[310] p-4 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors hidden md:block"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <button 
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
              className="absolute right-6 top-1/2 -translate-y-1/2 z-[310] p-4 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors hidden md:block"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.9, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.9, x: -20 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative max-w-full max-h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(_, info) => {
                if (info.offset.x > 100) handlePrev();
                else if (info.offset.x < -100) handleNext();
              }}
            >
              <img
                src={photos[selectedIndex]}
                alt={`Ingrandimento ${selectedIndex + 1}`}
                className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl pointer-events-none"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-12 left-0 right-0 text-center text-white/60 text-sm font-medium">
                Immagine {selectedIndex + 1} di {photos.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const GWOTrainingSection = ({ setCurrentView }: { setCurrentView: (view: any) => void }) => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const trainingModules = [
    {
      title: "GWO BST – First Aid – (FA)",
      description: "Corso di sicurezza base Primo Soccorso",
      content: "Comprensione dell'importanza di eseguire il Primo Soccorso in modo sicuro ed efficace, in conformità con i requisiti legislativi locali. Identificazione dei segnali e dei sintomi di lesioni gravi e minori, nonché di malattie relative al corpo umano. Comprensione e gestione di un'emergenza in turbina eolica. Esecuzione corretta del Primo Soccorso ed uso delle attrezzature, tra cui il Defibrillatore Automatico Esterno (DAE)",
      objectives: "L'obiettivo del modulo BST è quello di consentire ai partecipanti di effettuare in modo sicuro ed efficace il Primo Soccorso nell'industria eolica, in conformità con gli standard GWO, attraverso una formazione teorica e pratica. Inoltre, questa formazione permetterà al discente di eseguire la rianimazione cardiopolmonare e di utilizzare un defibrillatore automatico esterno (DAE).",
      target: "Proprietari e/o operatori di turbine eoliche. Produttori di turbine eoliche. Subappaltatori di installazione e manutenzione. Aspiranti tecnici eolici.",
      requirements: "Idoneità medica. Età minima 18 anni. Abbigliam. da lavoro e scarpe antinfortunistiche",
      duration: "16 ore",
      validity: "2 anni"
    },
    {
      title: "GWO BST – Manual Handling – (MH)",
      description: "Corso di sicurezza per la movimentazione manuale dei carichi",
      content: "Valutazione e identificazione dei rischi di sviluppo di lesioni muscolo-scheletriche. Comprensione delle pratiche di sicurezza della movimentazione manuale, compresa la corretta movimentazione delle attrezzature in conformità con i requisiti legislativi locali. Identificazione dei segni e dei sintomi di infortuni legati a tecniche di movimentazione manuale inadeguate",
      objectives: "Lo scopo di questo modulo è quello di incoraggiare una movimentazione manuale positiva ed un comportamento ergonomico. Animare i partecipanti a valutare i rischi e a pianificare il lavoro. Allenare la loro capacità di eseguire la movimentazione manuale dei carichi in modo sicuro e corretto nell'industria/ambiente delle turbine eoliche.",
      target: "Proprietari e/o operatori di turbine eoliche. Produttori di turbine eoliche. Subappaltatori di installazione e manutenzione. Aspiranti tecnici eolici.",
      requirements: "Idoneità medica. Età minima 18 anni. Abbigliam. da lavoro e scarpe antinfortunistiche",
      duration: "4 ore",
      validity: "2 anni"
    },
    {
      title: "GWO BST – Fire Awareness – (WAV)",
      description: "Corso di sicurezza base per Attività Antincendio",
      content: "Sviluppo e diffusione del fuoco. Cause degli incendi nelle turbine eoliche e pericoli connessi. Identificazione dei segni di incendio in una turbina eolica. Piani di emergenza in turbine eoliche, incluso il rilevamento del fumo e le procedure di evacuazione di emergenza. Azioni, funzionamento ed estinzione degli incendi per mezzo delle attrezzature antincendio in una turbina eolica.",
      objectives: "Il partecipante può utilizzare i dispositivi di protezione individuale per la lotta antincendio come previsto, distinguere le diverse aree di intervento e applicare la corretta modalità per la risoluzione dell’emergenza. Identificazione di situazioni pericolose e uso sicuro dei dispositivi per l’estinzione (DM. 10/03/1998).",
      target: "Proprietari e/o operatori di turbine eoliche. Produttori di turbine eoliche. Subappaltatori di installazione e manutenzione. Aspiranti tecnici eolici.",
      requirements: "Idoneità medica. Età minima 18 anni. Abbigliam. da lavoro, scarpe antinfortunistiche ed antincendio.",
      duration: "4 ore",
      validity: "2 anni"
    },
    {
      title: "GWO BST - Working at Heights – (WAH)",
      description: "Corso di sicurezza base per attività in quota",
      content: "I pericoli e i rischi associati al lavoro in altezza, specifici dei generatori di turbine eoliche. Comprendere la legislazione nazionale vigente in materia di lavoro in quota. Identificazione delle marcature standard europee/globali dei DPI. Ispezione, manutenzione e custodia dei DPI. L'uso dei DPI pertinenti",
      objectives: "Gli obiettivi di questo corso sono quelli di fornire ai partecipanti le conoscenze e le competenze di base necessarie, attraverso una formazione teorica e pratica, per utilizzare i DPI di base ed eseguire un lavoro sicuro in quota. Inoltre, i discenti acquisiranno le competenze basiche per portare a termine un salvataggio in quota in conformità con gli standard GWO",
      target: "Proprietari e/o operatori di turbine eoliche. Produttori di turbine eoliche. Subappaltatori di installazione e manutenzione. Aspiranti tecnici eolici.",
      requirements: "Idoneità medica. Età minima 18 anni. Abbigliam. da lavoro e scarpe antinfortunistiche.",
      duration: "16 ore",
      validity: "2 anni"
    },
    {
      title: "GWO BST – Sea Survival – (SS)",
      description: "Corso di sicurezza base sopravvivenza in mare",
      content: "Comprensione dei requisiti legislativi locali e delle regole in vigore nei parchi eolici offshore. Identificazione e trattamento delle fasi di shock da freddo e ipotermia relative alle esposizioni del corpo umano in un ambiente eolico offshore. Identificazione dei vantaggi e dei limiti della LSA (Life-Saving Appliance) personale e dei DPI. Comprensione dei principi del GMDSS (Global Maritime Distress and Safety Systems) e del SAR (Search and Rescue). Comportamento sicuro e responsabile su impianti, navi e WTG durante le normali operazioni e in caso di emergenze ed evacuazione. Assistenza dell'equipaggio della nave in situazioni di uomo in mare.",
      objectives: "Gli obiettivi del modulo BST Sea Survival sono, attraverso una formazione teorica e pratica, di dare ai partecipanti la capacità di agire in sicurezza e di intraprendere le corrette azioni preventive in tutti gli aspetti delle operazioni offshore, da terra alla nave di installazione o WTG e viceversa, sia durante le normali operazioni che in caso di emergenza in un ambiente di energia eolica offshore.",
      target: "Proprietari e/o operatori di turbine eoliche. Produttori di turbine eoliche. Subappaltatori di installazione e manutenzione. Aspiranti tecnici eolici.",
      requirements: "Idoneità medica. Età minima 18 anni. Abbigliam. da lavoro e scarpe antinfortunistiche, tuta di salvataggio e muta",
      duration: "8 ore",
      validity: "2 anni"
    },
    {
      title: "GWO BTT – Mechanical – (BTTM)",
      description: "Corso di sicurezza per attività di manutenzione meccanica",
      content: "Comprensione dei componenti principali, dei sistemi meccanici e del funzionamento di base delle turbine eoliche. Comprensione dei rischi e dei pericoli associati alla meccanica. Comprensione dei collegamenti bullonati e saldati e relativa ispezione. Istruzione del funzionamento dei sistemi frenanti, del sistema di imbardata, di raffreddamento e lubrificazione e loro relativa ispezione. Uso corretto degli strumenti.",
      objectives: "L'obiettivo di questo modulo BTT Mechanical è quello di fornire ai partecipanti le conoscenze e le competenze per svolgere attività meccaniche di base (sotto la supervisione di un tecnico esperto), utilizzando procedure di lavoro sicure e i corretti DPI.",
      target: "Proprietari e/o operatori di turbine eoliche. Produttori di turbine eoliche. Subappaltatori di installazione e manutenzione. Aspiranti tecnici eolici.",
      requirements: "Idoneità medica. Età minima 18 anni. Abbigliam. da lavoro e scarpe antinfortunistiche",
      duration: "14 ore",
      validity: "2 anni"
    },
    {
      title: "GWO BTT – Electrical Module – (BTTE)",
      description: "Corso di sicurezza per attività manutentive elettriche",
      content: "Comprensione dei componenti elettrici, dei diversi tipi di sensori e del funzionamento di base delle turbine eoliche. Comprensione dei rischi e dei pericoli associati al lavoro elettrico. Comprensione teorica di un semplice schema elettrico e pratica del suo montaggio su un circuito. Uso corretto degli strumenti per effettuare misurazioni sicure.",
      objectives: "Lo scopo di questo modulo elettrico BTT è quello di fornire ai partecipanti le conoscenze e le abilità per eseguire operazioni elettriche di base (sotto la supervisione di un tecnico esperto), utilizzando procedure di lavoro sicure e i corretti DPI.",
      target: "Proprietari e/o operatori di turbine eoliche. Produttori di turbine eoliche. Subappaltatori di installazione e manutenzione. Aspiranti tecnici eolici.",
      requirements: "Idoneità medica. Età minima 18 anni. Abbigliam. da lavoro e scarpe antinfortunistiche",
      duration: "10 ore",
      validity: "2 anni"
    },
    {
      title: "GWO BTT – Hydraulic Module – (BTTH)",
      description: "Corso di sicurezza per attività manutentive Idrauliche",
      content: "Comprensione dei componenti principali, dei sistemi idraulici e del funzionamento di base delle turbine eoliche. Comprensione dei rischi e dei pericoli associati all'idraulica. Istruzione del funzionamento dei diversi tipi di pompe ed attuatori, valvole, accumulatori e sensori, e loro relativa ispezione. Uso corretto degli strumenti per misurare la pressione idraulica.",
      objectives: "L'obiettivo del Modulo Idraulico BTT è quello di fornire ai partecipanti le conoscenze e le abilità per svolgere attività idrauliche di base (sotto la supervisione di un tecnico esperto), utilizzando procedure di lavoro sicure e i corretti DPI.",
      target: "Proprietari e/o operatori di turbine eoliche. Produttori di turbine eoliche. Subappaltatori di installazione e manutenzione. Aspiranti tecnici eolici.",
      requirements: "Idoneità medica. Età minima 18 anni. Abbigliam. da lavoro e scarpe antinfortunistiche",
      duration: "10 ore",
      validity: "2 anni"
    },
    {
      title: "GWO BTT – Installation – (BTTI)",
      description: "Corso di sicurezza per attività di installazione e manutenzione",
      content: "Comprensione delle principali attività di installazione, delle liste di controllo durante l'intero processo, dei rischi e dei pericoli associati. Principi e norme per la movimentazione e lo stoccaggio di merci in loco o in un'area di stoccaggio prima e dopo l'installazione. Principi di base dell'attrezzatura di sollevamento. Preparazione dei componenti principali prima dell'installazione. Comprensione del completamento meccanico, elettrico ed idraulico. Principi di funzionamento dei generatori esterni durante l'installazione. Comprensione del passaggio di consegne alla messa in servizio.",
      objectives: "Lo scopo di questo modulo di installazione BTT è di fornire ai partecipanti le conoscenze e le abilità per eseguire le attività basiche di installazione (sotto la supervisione di un tecnico esperto), utilizzando procedure di lavoro sicure e i corretti DPI.",
      target: "Proprietari e/o operatori di turbine eoliche. Produttori di turbine eoliche. Subappaltatori di installazione e manutenzione. Aspiranti tecnici eolici.",
      requirements: "Idoneità medica. Età minima 18 anni. Abbigliam. da lavoro e scarpe antinfortunistiche",
      duration: "18 ore",
      validity: "2 anni"
    },
    {
      title: "GWO ART – Nacelle, Tower & Basement Rescue – (NTBR)",
      description: "Corso di sicurezza avanzato per attività di salvataggio all’interno della Navicella, dei Trami e nel Basamento",
      content: "Valutazione e determinazione della miglior strategia di salvataggio e di evacuazione (ovvero il metodo di salvataggio pertinente, la tecnica, le attrezzature certificate ed il personale necessario) in vari scenari: dalla navicella, dalla torre e/o dal basamento di una turbina eolica. Utilizzo corretto e sicuro di una barella di salvataggio, di una tavola spinale e di un sistema di salvataggio a discesa/sollevamento, sia manuale che motorizzato. Identificazione e selezione adeguata di punti di ancoraggio certificati e strutturali, rilevanti per vari scenari di salvataggio. Spiegazione del concetto di angolo di sollevamento, fattore angolare e deviazione.",
      objectives: "Lo scopo di questo modulo è di permettere al partecipante al corso di eseguire operazioni di salvataggio di persone ferite nella navicella, nella torre e/o nel basamento di una turbina eolica, utilizzando attrezzature, metodi e tecniche di salvataggio standard del settore, che superano quelli del lavoro in quota GWO.",
      target: "Proprietari e/o operatori di turbine eoliche. Produttori di turbine eoliche. Subappaltatori di installazione e manutenzione. Aspiranti tecnici eolici.",
      requirements: "Idoneità medica. Età minima 18 anni. Abbigliam. da lavoro e scarpe antinfortunistiche",
      duration: "14 ore",
      validity: "2 anni"
    },
    {
      title: "GWO ART – Hub, Spinner & Inside Blade – (HSIBR)",
      description: "Corso di sicurezza avanzato per attività di salvataggio all’interno dell’Hub, dello Spinner ed all’interno della Pala",
      content: "Valutazione e determinazione della miglior strategia di salvataggio e di evacuazione (ovvero il metodo di salvataggio pertinente, la tecnica, le attrezzature certificate ed il personale necessario) in vari scenari: dall’Hub, dallo Spinner e/o dall’interno di una pala di una turbina eolica. Utilizzo corretto e sicuro di una barella di salvataggio, di una tavola spinale e di un sistema di salvataggio a discesa/sollevamento, sia manuale che motorizzato. Identificazione e selezione adeguata di punti di ancoraggio certificati e strutturali, rilevanti per vari scenari di salvataggio. Spiegazione del concetto di angolo di sollevamento, fattore angolare e deviazione.",
      objectives: "L'obiettivo di questo modulo è quello di permettere ai partecipanti al corso di eseguire operazioni di salvataggio nell’Hub, nello Spinner e all'interno della pala di una turbina eolica, utilizzando attrezzature, metodi e tecniche di salvataggio standard del settore, superiori a quelli del GWO Working at Heights.",
      target: "Proprietari e/o operatori di turbine eoliche. Produttori di turbine eoliche. Subappaltatori di installazione e manutenzione. Aspiranti tecnici eolici.",
      requirements: "Idoneità medica. Età minima 18 anni. Abbigliam. da lavoro e scarpe antinfortunistiche",
      duration: "8 ore",
      validity: "2 anni"
    },
    {
      title: "GWO BST – Working at Heights & Manual Handling (Combined)",
      description: "Corso combinato GWO Working at Heights e Manual Handling",
      content: "Il modulo Working at Heights fornisce le competenze per lavorare in altezza utilizzando correttamente i DPI anticaduta e applicando le procedure di sicurezza ed evacuazione. Il modulo Manual Handling insegna le corrette tecniche di sollevamento e movimentazione dei carichi per prevenire infortuni e sovraccarichi muscolo-scheletrici.",
      objectives: "Il corso combina teoria e pratica secondo gli standard Global Wind Organisation (GWO), preparando i partecipanti ad operare in modo sicuro ed efficiente nel settore eolico.",
      target: "Tecnici che operano nel settore eolico e devono svolgere attività in quota e movimentare carichi in sicurezza durante le operazioni su turbine eoliche.",
      requirements: "Idoneità medica. Età minima 18 anni. Abbigliam. da lavoro e scarpe antinfortunistiche",
      duration: "16 ore (2 giorni)",
      validity: "2 anni"
    }
  ];

  const filteredModules = useMemo(() => {
    return trainingModules.filter(module => 
      module.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      module.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      module.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      module.objectives.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-6xl mx-auto px-4 py-20"
    >
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900 uppercase mb-4">
          GWO <span className="text-brand text-outline">Trainings</span>
        </h1>
        <div className="w-20 h-1.5 bg-brand mx-auto rounded-full" />
        <p className="text-slate-500 mt-6 text-lg max-w-3xl mx-auto">
          Corsi di formazione certificati Global Wind Organisation per la sicurezza e la manutenzione nel settore eolico.
        </p>
      </div>

      <div className="mb-12 max-w-2xl mx-auto">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
          <input 
            type="text" 
            placeholder="Cerca tra i moduli GWO..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition-all shadow-sm"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredModules.map((module, index) => (
            <motion.div 
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              key={module.title} 
              className="bg-white rounded-3xl border border-slate-100 p-8 shadow-xl shadow-slate-200/50 flex flex-col h-full"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center text-brand shrink-0">
                  <Shield className="w-6 h-6" />
                </div>
                <div className="px-4 py-1.5 bg-slate-900 rounded-full text-[10px] font-bold text-brand uppercase tracking-widest">
                  {module.duration}
                </div>
              </div>
              
              <h2 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-2">
                {module.title}
              </h2>
              <p className="text-slate-900 font-bold text-sm mb-6 uppercase tracking-tight text-outline-yellow">
                {module.description}
              </p>

              <div className="space-y-6 flex-grow">
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Contenuto</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{module.content}</p>
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Obiettivi formativi</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">{module.objectives}</p>
                </div>
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-50">
                  <div>
                    <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Requisiti</h4>
                    <p className="text-slate-700 text-xs font-medium">{module.requirements}</p>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Validità</h4>
                    <p className="text-slate-700 text-xs font-medium">{module.validity}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filteredModules.length === 0 && (
        <div className="text-center py-20">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-slate-100 rounded-full mb-6">
            <Search className="w-10 h-10 text-slate-400" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">Nessun modulo trovato</h3>
          <p className="text-slate-500">Prova a cambiare la tua ricerca.</p>
        </div>
      )}

      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-16">
        <button 
          onClick={() => {
            setCurrentView('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-brand hover:text-brand-dark transition-all shadow-xl shadow-slate-200"
        >
          Torna alla Home
          <ArrowRight className="w-5 h-5" />
        </button>
        <a 
          href="mailto:commerciale@aliseogroup.it"
          className="inline-flex items-center gap-2 px-8 py-4 bg-brand text-brand-dark rounded-2xl font-bold hover:bg-slate-900 hover:text-white transition-all shadow-xl shadow-slate-200"
        >
          Richiedi info sui Corsi
          <Mail className="w-5 h-5" />
        </a>
      </div>
    </motion.div>
  );
};

const DLGS8108Section = ({ setCurrentView }: { setCurrentView: (view: any) => void }) => {
  const [expandedCourse, setExpandedCourse] = useState<number | null>(null);

  const courses8108 = [
    {
      id: "ps-a",
      title: "Corso Primo Soccorso Aziendale – 16 ore (Gruppo A)",
      preview: "Il Corso di Primo Soccorso Aziendale da 16 ore è destinato ai lavoratori incaricati dal datore di lavoro di svolgere il ruolo di addetti al primo soccorso nelle aziende classificate nel Gruppo A, secondo quanto previsto dal D.M. 388/2003 e dal D.Lgs. 81/08.",
      fullDescription: `
        Il Corso di Primo Soccorso Aziendale da 16 ore è destinato ai lavoratori incaricati dal datore di lavoro di svolgere il ruolo di addetti al primo soccorso nelle aziende classificate nel Gruppo A, secondo quanto previsto dal D.M. 388/2003 e dal D.Lgs. 81/08.

        L’obiettivo del corso è fornire ai partecipanti le conoscenze teoriche e le competenze pratiche necessarie per gestire le emergenze sanitarie in azienda, intervenendo in modo tempestivo ed efficace in attesa dell’arrivo dei soccorsi sanitari.

        Durante il percorso formativo i partecipanti imparano a riconoscere un’emergenza sanitaria, attivare correttamente il sistema di emergenza (118/112), prestare i primi interventi di assistenza e gestire situazioni critiche come perdita di coscienza, arresto respiratorio, emorragie, traumi, ustioni e altre emergenze mediche.

        Il corso prevede una parte teorica e una significativa componente pratica, con esercitazioni su manichino e simulazioni di intervento, per sviluppare capacità operative concrete.

        Programma del corso:
        - Allertare il sistema di soccorso
        - Riconoscere un’emergenza sanitaria
        - Attuare interventi di primo soccorso
        - Acquisire conoscenze generali sui traumi in ambiente di lavoro
        - Acquisire conoscenze generali sulle patologie specifiche in ambiente di lavoro
        - Tecniche di intervento pratico e simulazioni

        Destinatari:
        Lavoratori designati dal datore di lavoro come addetti al primo soccorso nelle aziende appartenenti al Gruppo A.

        Durata:
        16 ore di formazione con moduli teorici e pratici.

        Aggiornamento:
        È previsto un aggiornamento obbligatorio ogni 3 anni della durata di 6 ore, con particolare attenzione alle esercitazioni pratiche.

        Attestato:
        Al termine del corso, previa frequenza minima e verifica dell’apprendimento, viene rilasciato attestato di formazione valido ai sensi della normativa vigente.
      `,
      duration: "16 ore",
      group: "Gruppo A"
    },
    {
      id: "ps-bc",
      title: "Corso Primo Soccorso Aziendale – 12 ore (Gruppi B e C)",
      preview: "Il Corso di Primo Soccorso Aziendale da 12 ore è rivolto ai lavoratori incaricati dal datore di lavoro di svolgere il ruolo di addetti al primo soccorso nelle aziende classificate nei Gruppi B e C, in conformità a quanto previsto dal D.M. 388/2003 e dal D.Lgs. 81/08.",
      fullDescription: `
        Il Corso di Primo Soccorso Aziendale da 12 ore è rivolto ai lavoratori incaricati dal datore di lavoro di svolgere il ruolo di addetti al primo soccorso nelle aziende classificate nei Gruppi B e C, in conformità a quanto previsto dal D.M. 388/2003 e dal D.Lgs. 81/08.

        Il percorso formativo ha l’obiettivo di fornire ai partecipanti le competenze necessarie per gestire le emergenze sanitarie in ambito lavorativo, intervenendo in modo rapido e corretto in attesa dell’arrivo dei soccorsi sanitari. Gli addetti al primo soccorso rappresentano infatti una figura fondamentale per garantire una gestione efficace delle emergenze all’interno dell’azienda.

        Durante il corso vengono affrontati i principali temi legati alla gestione delle emergenze sanitarie, al riconoscimento delle situazioni di pericolo per la salute dei lavoratori e alle prime manovre di assistenza in caso di malore o infortunio.

        Particolare attenzione è dedicata anche alla parte pratica, con esercitazioni e simulazioni che consentono ai partecipanti di acquisire sicurezza nell’applicazione delle principali tecniche di primo intervento.

        Programma del corso:
        - Allertare il sistema di soccorso (118/112)
        - Riconoscere un’emergenza sanitaria in azienda
        - Attuare gli interventi di primo soccorso
        - Conoscenze generali sui traumi in ambiente di lavoro
        - Conoscenze generali sulle patologie specifiche in ambiente di lavoro
        - Tecniche di intervento pratico e simulazioni

        Destinatari:
        Lavoratori designati dal datore di lavoro come addetti al primo soccorso nelle aziende appartenenti ai Gruppi B e C.

        Durata:
        12 ore di formazione, articolate tra contenuti teorici ed esercitazioni pratiche.

        Aggiornamento:
        La normativa prevede un aggiornamento obbligatorio ogni 3 anni della durata di 4 ore, con particolare attenzione alle esercitazioni pratiche.

        Attestato:
        Al termine del corso, previa partecipazione alle attività formative e verifica finale dell’apprendimento, viene rilasciato attestato valido ai sensi del D.Lgs. 81/08 e del D.M. 388/2003.
      `,
      duration: "12 ore",
      group: "Gruppi B e C"
    },
    {
      id: "aggiornamento-ps-a",
      title: "Aggiornamento Primo Soccorso Aziendale – 6 ore (Gruppo A)",
      preview: "Il Corso di Aggiornamento Primo Soccorso Aziendale da 6 ore è rivolto ai lavoratori incaricati del ruolo di addetti al primo soccorso nelle aziende appartenenti al Gruppo A, come previsto dal D.M. 388/2003 e dal D.Lgs. 81/08.",
      fullDescription: `
        Il Corso di Aggiornamento Primo Soccorso Aziendale da 6 ore è rivolto ai lavoratori incaricati del ruolo di addetti al primo soccorso nelle aziende appartenenti al Gruppo A, come previsto dal D.M. 388/2003 e dal D.Lgs. 81/08.

        La normativa stabilisce che gli addetti al primo soccorso debbano effettuare un aggiornamento obbligatorio ogni 3 anni, con l’obiettivo di mantenere aggiornate le competenze operative e garantire un intervento efficace in caso di emergenza sanitaria in azienda.

        Il corso di aggiornamento si concentra in particolare sul ripasso delle tecniche di primo soccorso e sulle esercitazioni pratiche, fondamentali per intervenive tempestivamente in situazioni di malore o infortunio in attesa dell’arrivo dei soccorsi sanitari.

        Durante la formazione vengono riprese e consolidate le principali procedure di intervento, con simulazioni pratiche che permettono ai partecipanti di mantenere manualità, sicurezza e capacità decisionale nelle situazioni di emergenza.

        Programma del corso:
        - Ripasso delle procedure di allertamento del sistema di soccorso (118/112)
        - Tecniche di primo intervento in caso di emergenza sanitaria
        - Gestione di emorragie, traumi e malori improvvisi
        - Interventi di primo soccorso nelle principali situazioni di rischio in azienda
        - Esercitazioni pratiche e simulazioni di emergenza

        Destinatari:
        Addetti al primo soccorso già formati che devono effettuare l’aggiornamento periodico triennale previsto dalla normativa per le aziende del Gruppo A.

        Durata:
        6 ore di aggiornamento, con forte componente pratica.

        Attestato:
        Al termine del corso viene rilasciato attestato di aggiornamento valido ai sensi del D.Lgs. 81/08 e del D.M. 388/2003.
      `,
      duration: "6 ore",
      group: "Gruppo A"
    },
    {
      id: "aggiornamento-ps-bc",
      title: "Aggiornamento Primo Soccorso Aziendale – 4 ore (Gruppi B e C)",
      preview: "Il Corso di Aggiornamento Primo Soccorso Aziendale da 4 ore è destinato ai lavoratori incaricati del ruolo di addetti al primo soccorso nelle aziende appartenenti ai Gruppi B e C, in conformità a quanto previsto dal D.M. 388/2003 e dal D.Lgs. 81/08.",
      fullDescription: `
        Il Corso di Aggiornamento Primo Soccorso Aziendale da 4 ore è destinato ai lavoratori incaricati del ruolo di addetti al primo soccorso nelle aziende appartenenti ai Gruppi B e C, in conformità a quanto previsto dal D.M. 388/2003 e dal D.Lgs. 81/08.

        La normativa stabilisce che gli addetti al primo soccorso debbano effettuare un aggiornamento obbligatorio ogni 3 anni, al fine di mantenere aggiornate le competenze e garantire un intervento tempestivo ed efficace in caso di emergenza sanitaria sul luogo di lavoro.

        Il corso è incentrato principalmente sul ripasso delle principali tecniche di primo soccorso e sulle esercitazioni pratiche, fondamentali per gestire situazioni di malore o infortunio in azienda in attesa dell’arrivo dei soccorsi sanitari.

        Durante la formazione vengono consolidate le procedure di intervento e le capacità operative degli addetti, attraverso simulazioni e attività pratiche che permettono di mantenere sicurezza e prontezza nelle situazioni di emergenza.

        Programma del corso:
        - Ripasso delle procedure di allertamento del sistema di soccorso (118/112)
        - Tecniche di primo intervento nelle emergenze sanitarie
        - Gestione di traumi, emorragie e malori improvvisi
        - Interventi di primo soccorso nelle principali situazioni di rischio in azienda
        - Esercitazioni pratiche e simulazioni di emergenza

        Destinatari:
        Addetti al primo soccorso già formati che devono effettuare l’aggiornamento triennale previsto dalla normativa per le aziende dei Gruppi B e C.

        Durata:
        4 ore di aggiornamento, con particolare attenzione alle attività pratiche.

        Attestato:
        Al termine del corso viene rilasciato attestato di aggiornamento valido ai sensi del D.Lgs. 81/08 e del D.M. 388/2003.
      `,
      duration: "4 ore",
      group: "Gruppi B e C"
    },
    {
      title: "Corso BLSD – Uso del Defibrillatore (5 ore)",
      preview: "Il Corso BLSD (Basic Life Support and Defibrillation) da 5 ore fornisce le competenze necessarie per intervenire tempestivamente in caso di arresto cardiaco improvviso, utilizzando correttamente il defibrillatore semiautomatico esterno (DAE) e applicando le manovre di rianimazione cardiopolmonare.",
      fullDescription: `
        Il Corso BLSD (Basic Life Support and Defibrillation) da 5 ore fornisce le competenze necessarie per intervenire tempestivamente in caso di arresto cardiaco improvviso, utilizzando correttamente il defibrillatore semiautomatico esterno (DAE) e applicando le manovre di rianimazione cardiopolmonare.

        L’obiettivo del corso è insegnare ai partecipanti come riconoscere rapidamente un arresto cardiaco, attivare il sistema di emergenza sanitaria e intervenire con massaggio cardiaco e defibrillazione precoce, azioni fondamentali per aumentare le possibilità di sopravvivenza della persona colpita.

        Durante il percorso formativo vengono affrontati i principali aspetti teorici legati alla gestione dell’emergenza, ma soprattutto viene dedicato ampio spazio alle esercitazioni pratiche su manichino con simulazione dell’utilizzo del DAE, per permettere ai partecipanti di acquisire sicurezza e prontezza nell’intervento.

        Il corso segue le linee guida internazionali sulla rianimazione cardiopolmonare e prepara i partecipanti ad agire in modo efficace in contesti lavorativi, pubblici o privati, fino all’arrivo dei soccorsi avanzati.

        Programma del corso:
        - Riconoscimento dell’arresto cardiaco
        - Attivazione del sistema di emergenza (118/112)
        - Tecniche di rianimazione cardiopolmonare (RCP) nell’adulto
        - Utilizzo del defibrillatore semiautomatico esterno (DAE)
        - Gestione delle vie aeree e posizione laterale di sicurezza
        - Simulazioni pratiche di intervento con manichino e DAE

        Destinatari:
        Lavoratori, addetti alla sicurezza, personale aziendale e cittadini che desiderano acquisire le competenze per intervenire in caso di arresto cardiaco e utilizzare il defibrillatore.

        Durata:
        5 ore di formazione, con forte componente pratica.

        Attestato:
        Al termine del corso, previa partecipazione alle esercitazioni e verifica delle competenze, viene rilasciato attestato di abilitazione all’uso del defibrillatore (BLSD) secondo la normativa e le linee guida vigenti.
      `,
      duration: "5 ore",
      group: "BLSD"
    },
    {
      id: "3",
      title: "Corso Antincendio Livello 3 (ex Alto Rischio) – 16 ore",
      preview: "Il Corso Antincendio Livello 3 (L3) – 16 ore è destinato ai lavoratori incaricati dal datore di lavoro di svolgere il ruolo di addetti alla prevenzione incendi e gestione delle emergenze, nelle aziende e attività classificate a livello di rischio elevato, secondo quanto previsto dal D.Lgs. 81/08 e dal D.M. 2 settembre 2021 (Decreto Controlli).",
      fullDescription: `
        Il Corso Antincendio Livello 3 (L3) – 16 ore è destinato ai lavoratori incaricati dal datore di lavoro di svolgere il ruolo di addetti alla prevenzione incendi e gestione delle emergenze, nelle aziende e attività classificate a livello di rischio elevato, secondo quanto previsto dal D.Lgs. 81/08 e dal D.M. 2 settembre 2021 (Decreto Controlli).

        Con l’entrata in vigore della nuova normativa antincendio, la precedente classificazione “Alto Rischio” è stata sostituita dalla nuova denominazione Livello 3 (L3).

        Il corso ha l’obiettivo di fornire ai partecipanti le conoscenze teoriche e le competenze pratiche necessarie per prevenire gli incendi, gestire correttamente le situazioni di emergenza e coordinare le prime azioni di intervento in caso di incendio, fino all’arrivo dei Vigili del Fuoco.

        Durante la formazione vengono approfonditi i principi della prevenzione incendi, la gestione delle procedure di emergenza e l’utilizzo dei principali mezzi di estinzione, con esercitazioni pratiche che permettono ai partecipanti di acquisire dimestichezza con le attrezzature antincendio.

        Programma del corso:
        - Principi sulla combustione e sull’incendio
        - Misure di prevenzione e protezione antincendio
        - Gestione dell’emergenza e procedure di evacuazione
        - Ruoli e compiti degli addetti antincendio
        - Presidi e impianti antincendio presenti in azienda
        - Tecniche di utilizzo degli estintori e altri mezzi di spegnimento
        - Esercitazioni pratiche di spegnimento

        Destinatari:
        Lavoratori designati dal datore di lavoro come addetti antincendio nelle attività classificate Livello 3 (L3), ovvero quelle con rischio incendio elevato.

        Durata:
        16 ore di formazione, suddivise tra moduli teorici ed esercitazioni pratiche.

        Attestato e idoneità tecnica:
        Al termine del corso viene rilasciato attestato di frequenza.
        Per alcune attività classificate a Livello 3 (L3) può essere richiesta anche la valutazione di idoneità tecnica presso il Corpo Nazionale dei Vigili del Fuoco, come previsto dalla normativa vigente.
      `,
      duration: "16 ore",
      group: "Livello 3 (L3)"
    },
    {
      id: "2",
      title: "Corso Antincendio Livello 2 (L2) – 8 ore",
      preview: "Il Corso Antincendio Livello 2 (L2) – 8 ore è destinato ai lavoratori incaricati di svolgere il ruolo di addetti alla prevenzione incendi e gestione delle emergenze nelle attività classificate a livello di rischio incendio medio.",
      fullDescription: `
        Il Corso Antincendio Livello 2 (L2) – 8 ore è destinato ai lavoratori incaricati di svolgere il ruolo di addetti alla prevenzione incendi e gestione delle emergenze nelle attività classificate a livello di rischio incendio medio.

        (ex rischio medio)

        Il corso è conforme al D.Lgs. 81/08 e al D.M. 2 settembre 2021, che ha introdotto la nuova classificazione dei corsi antincendio nei livelli L1, L2 e L3.

        L’obiettivo della formazione è fornire ai partecipanti le competenze per prevenire l’insorgere di incendi, gestire correttamente le procedure di emergenza e utilizzare i dispositivi antincendio presenti in azienda, intervenendo nelle prime fasi dell’evento.

        Durante il corso vengono approfonditi i principi della prevenzione incendi e le modalità di gestione delle emergenze, con esercitazioni pratiche sull’uso degli estintori e delle attrezzature di spegnimento.

        Programma del corso:
        - Principi della combustione e dinamica dell’incendio
        - Principali cause di incendio nei luoghi di lavoro
        - Misure di prevenzione e protezione antincendio
        - Procedure di emergenza e gestione dell’evacuazione
        - Presidi e impianti antincendio
        - Tecniche di utilizzo degli estintori
        - Esercitazioni pratiche di spegnimento

        Destinatari:
        Lavoratori designati dal datore di lavoro come addetti antincendio nelle attività classificate Livello 2 (L2).

        Durata:
        8 ore di formazione, con moduli teorici ed esercitazioni pratiche.

        Aggiornamento:
        È previsto aggiornamento ogni 5 anni della durata di 5 ore.

        Attestato:
        Al termine del corso viene rilasciato attestato valido ai sensi del D.Lgs. 81/08 e del D.M. 2 settembre 2021.
      `,
      duration: "8 ore",
      group: "Livello 2 (L2)"
    },
    {
      id: "1",
      title: "Corso Antincendio Livello 1 (L1) – 4 ore",
      preview: "Il Corso Antincendio Livello 1 (L1) – 4 ore è rivolto ai lavoratori incaricati dal datore di lavoro di svolgere il ruolo di addetti alla prevenzione incendi, lotta antincendio e gestione delle emergenze, nelle attività classificate a livello di rischio incendio basso.",
      fullDescription: `
        Il Corso Antincendio Livello 1 (L1) – 4 ore è rivolto ai lavoratori incaricati dal datore di lavoro di svolgere il ruolo di addetti alla prevenzione incendi, lotta antincendio e gestione delle emergenze, nelle attività classificate a livello di rischio incendio basso.

        (ex rischio basso)

        Il corso è conforme a quanto previsto dal D.Lgs. 81/08 e dal D.M. 2 settembre 2021, che ha introdotto la nuova classificazione dei livelli di rischio incendio sostituendo la precedente suddivisione in basso, medio e alto rischio.

        L’obiettivo del percorso formativo è fornire ai partecipanti le conoscenze di base sulla prevenzione degli incendi e sulle procedure da adottare in caso di emergenza, oltre alle competenze pratiche per utilizzare correttamente i principali mezzi di estinzione portatili.

        Programma del corso:
        - Principi della combustione e dell’incendio
        - Principali cause di incendio in azienda
        - Misure di prevenzione e protezione antincendio
        - Procedure da adottare in caso di incendio
        - Uso degli estintori portatili
        - Esercitazioni pratiche di spegnimento

        Destinatari:
        Lavoratori designati dal datore di lavoro come addetti antincendio in attività classificate Livello 1 (L1).

        Durata:
        4 ore di formazione, con parte teorica ed esercitazioni pratiche.

        Aggiornamento:
        La normativa prevede aggiornamento quinquennale della durata di 2 ore.

        Attestato:
        Al termine del corso viene rilasciato attestato di formazione valido ai sensi del D.Lgs. 81/08 e del D.M. 2 settembre 2021.
      `,
      duration: "4 ore",
      group: "Livello 1 (L1)"
    },
    {
      id: "6",
      title: "Aggiornamento Antincendio Livello 3 (L3) – 8 ore",
      preview: "Il Corso di Aggiornamento Antincendio Livello 3 (L3) – 8 ore è rivolto agli addetti antincendio operanti in attività a rischio incendio elevato, che devono effettuare l’aggiornamento quinquennale previsto dal D.M. 2 settembre 2021.",
      fullDescription: `
        Il Corso di Aggiornamento Antincendio Livello 3 (L3) – 8 ore è rivolto agli addetti antincendio operanti in attività a rischio incendio elevato, che devono effettuare l’aggiornamento quinquennale previsto dal D.M. 2 settembre 2021.

        Il corso consente di aggiornare e consolidare le competenze necessarie per gestire situazioni di emergenza complesse e utilizzare correttamente i sistemi e le attrezzature antincendio.

        Durata:
        8 ore, con ampia parte pratica.
      `,
      duration: "8 ore",
      group: "Livello 3 (L3)"
    },
    {
      id: "5",
      title: "Aggiornamento Antincendio Livello 2 (L2) – 5 ore",
      preview: "Il Corso di Aggiornamento Antincendio Livello 2 (L2) – 5 ore è destinato agli addetti antincendio delle attività classificate Livello 2, che devono effettuare l’aggiornamento obbligatorio ogni 5 anni previsto dal D.M. 2 settembre 2021.",
      fullDescription: `
        Il Corso di Aggiornamento Antincendio Livello 2 (L2) – 5 ore è destinato agli addetti antincendio delle attività classificate Livello 2, che devono effettuare l’aggiornamento obbligatorio ogni 5 anni previsto dal D.M. 2 settembre 2021.

        Il percorso formativo permette di ripassare le procedure di prevenzione incendi, la gestione delle emergenze e l’utilizzo dei presidi antincendio, con una forte componente pratica.

        Durata:
        5 ore, con parte teorica e prove pratiche.
      `,
      duration: "5 ore",
      group: "Livello 2 (L2)"
    },
    {
      id: "4",
      title: "Aggiornamento Antincendio Livello 1 (L1) – 2 ore",
      preview: "Il Corso di Aggiornamento Antincendio Livello 1 (L1) – 2 ore è rivolto agli addetti antincendio che devono effettuare l’aggiornamento periodico quinquennale, previsto dal D.M. 2 settembre 2021.",
      fullDescription: `
        Il Corso di Aggiornamento Antincendio Livello 1 (L1) – 2 ore è rivolto agli addetti antincendio che devono effettuare l’aggiornamento periodico quinquennale, previsto dal D.M. 2 settembre 2021.

        Il corso consente di mantenere aggiornate le competenze operative degli addetti antincendio, con particolare attenzione alle esercitazioni pratiche sull’utilizzo dei mezzi di spegnimento e al ripasso delle procedure di gestione delle emergenze.

        Durata:
        2 ore, con prevalenza di esercitazioni pratiche.
      `,
      duration: "2 ore",
      group: "Livello 1 (L1)"
    },
    {
      title: "Corso Attività in Spazi Confinati – 12 ore",
      preview: "Il Corso per Attività in Spazi Confinati o Ambienti Sospetti di Inquinamento è rivolto ai lavoratori che operano in ambienti caratterizzati da spazi limitati, ventilazione insufficiente e possibile presenza di atmosfere pericolose, come previsto dal D.Lgs. 81/08 e dal D.P.R. 177/2011.",
      fullDescription: `
        Il Corso per Attività in Spazi Confinati o Ambienti Sospetti di Inquinamento è rivolto ai lavoratori che operano in ambienti caratterizzati da spazi limitati, ventilazione insufficiente e possibile presenza di atmosfere pericolose, come previsto dal D.Lgs. 81/08 e dal D.P.R. 177/2011.

        Con l’introduzione del nuovo Accordo Stato-Regioni sulla formazione in materia di salute e sicurezza sul lavoro, la formazione per le attività in spazi confinati prevede una durata minima di 12 ore, con una parte teorica e una significativa componente pratica.

        Gli spazi confinati possono presentare rischi particolarmente gravi legati alla presenza di gas tossici, atmosfere esplosive, carenza di ossigeno o difficoltà di evacuazione. Tra gli ambienti più comuni rientrano cisterne, silos, serbatoi, pozzi, condotte, gallerie, canalizzazioni e vasche.

        Il corso ha l’obiettivo di fornire ai partecipanti le competenze necessarie per riconoscere i rischi presenti negli spazi confinati e operare in sicurezza, applicando correttamente le procedure di accesso, monitoraggio dell’atmosfera, utilizzo dei dispositivi di protezione e gestione delle emergenze.

        Durante la formazione vengono inoltre approfonditi gli aspetti organizzativi e le procedure operative previste per le imprese che svolgono attività in ambienti confinati, con esercitazioni pratiche sull’utilizzo delle attrezzature di sicurezza e dei sistemi di recupero.

        Programma del corso:
        - Normativa di riferimento e obblighi previsti dal D.Lgs. 81/08 e dal D.P.R. 177/2011
        - Definizione e caratteristiche degli spazi confinati e ambienti sospetti di inquinamento
        - Analisi dei principali rischi: atmosfere pericolose, gas tossici, carenza di ossigeno, incendio ed esplosione
        - Procedure di accesso, lavoro e controllo negli spazi confinati
        - Utilizzo dei dispositivi di protezione individuale (DPI) e delle attrezzature di sicurezza
        - Strumenti di rilevazione e monitoraggio dell’atmosfera
        - Gestione delle emergenze e procedure di recupero degli operatori
        - Esercitazioni pratiche e simulazioni operative

        Destinatari:
        Lavoratori, preposti e operatori che svolgono attività in ambienti confinati o sospetti di inquinamento.

        Durata:
        12 ore di formazione, con moduli teorici e pratici come previsto dal nuovo Accordo Stato-Regioni sulla formazione in materia di sicurezza sul lavoro.

        Attestato:
        Al termine del corso, previa partecipazione alle attività formative e verifica dell’apprendimento, viene rilasciato attestato di formazione valido ai sensi del D.Lgs. 81/08, del D.P.R. 177/2011 e del nuovo Accordo Stato-Regioni.
      `,
      duration: "12 ore",
      group: "Spazi Confinati"
    },
    {
      title: "Corso Attività in Spazi Confinati Avanzato – Preposti (16 ore)",
      preview: "Il Corso Attività in Spazi Confinati Avanzato per Preposti è rivolto ai lavoratori che svolgono funzioni di coordinamento e supervisione delle attività in ambienti confinati o sospetti di inquinamento.",
      fullDescription: `
        Il Corso Attività in Spazi Confinati Avanzato per Preposti è rivolto ai lavoratori che svolgono funzioni di coordinamento e supervisione delle attività in ambienti confinati o sospetti di inquinamento, come previsto dal D.Lgs. 81/08, dal D.P.R. 177/2011 e dal nuovo Accordo Stato-Regioni sulla formazione in materia di salute e sicurezza sul lavoro.

        Gli spazi confinati sono ambienti caratterizzati da accessi limitati, ventilazione insufficiente e potenziale presenza di gas tossici, atmosfere esplosive, carenza di ossigeno o altri fattori di rischio elevato. Tra gli esempi più comuni rientrano cisterne, silos, serbatoi, pozzi, condotte, vasche, gallerie e canalizzazioni.

        Il corso avanzato è pensato per i preposti che devono vigilare e coordinare le attività operative, garantendo il rispetto delle procedure di sicurezza e la corretta gestione delle emergenze durante i lavori in spazi confinati.

        Secondo il nuovo Accordo Stato-Regioni, il percorso formativo prevede una durata minima di 16 ore, con approfondimenti tecnici e una significativa componente pratica dedicata alla gestione operativa delle attività e alle procedure di emergenza e recupero.

        Durante il corso vengono affrontati i principali aspetti organizzativi, tecnici e gestionali necessari per pianificare e controllare le attività in ambienti confinati, con particolare attenzione alla valutazione dei rischi, al coordinamento degli operatori e all’utilizzo delle attrezzature di sicurezza.

        Programma del corso:
        - Normativa di riferimento: D.Lgs. 81/08, D.P.R. 177/2011 e Accordo Stato-Regioni
        - Ruolo e responsabilità del preposto nelle attività in spazi confinati
        - Identificazione e valutazione dei rischi negli ambienti confinati
        - Procedure di lavoro e sistemi di autorizzazione all’accesso
        - Pianificazione delle attività e coordinamento degli operatori
        - Utilizzo dei dispositivi di protezione individuale (DPI) e delle attrezzature di sicurezza
        - Monitoraggio dell’atmosfera e utilizzo degli strumenti di rilevazione gas
        - Gestione delle emergenze e procedure di evacuazione e recupero
        - Esercitazioni pratiche e simulazioni operative

        Destinatari:
        Preposti, capisquadra, responsabili di cantiere e operatori con funzioni di supervisione che coordinano attività in ambienti confinati o sospetti di inquinamento.

        Durata:
        16 ore di formazione, articolate tra moduli teorici ed esercitazioni pratiche, come previsto dal nuovo Accordo Stato-Regioni sulla formazione in materia di sicurezza sul lavoro.

        Attestato:
        Al termine del corso, previa frequenza e verifica dell’apprendimento, viene rilasciato attestato di formazione valido ai sensi del D.Lgs. 81/08, del D.P.R. 177/2011 e del nuovo Accordo Stato-Regioni.
      `,
      duration: "16 ore",
      group: "Spazi Confinati"
    },
    {
      title: "Aggiornamento Attività in Spazi Confinati – 4 ore",
      preview: "Il Corso di Aggiornamento per Attività in Spazi Confinati o Ambienti Sospetti di Inquinamento è rivolto ai lavoratori e ai preposti che operano in ambienti confinati e che devono mantenere aggiornate le competenze.",
      fullDescription: `
        Il Corso di Aggiornamento per Attività in Spazi Confinati o Ambienti Sospetti di Inquinamento è rivolto ai lavoratori e ai preposti che operano in ambienti confinati e che devono mantenere aggiornate le competenze necessarie per lavorare in sicurezza, come previsto dal D.Lgs. 81/08, dal D.P.R. 177/2011 e dal nuovo Accordo Stato-Regioni sulla formazione in materia di salute e sicurezza sul lavoro.

        Gli spazi confinati sono ambienti caratterizzati da accessi limitati, ventilazione insufficiente e possibile presenza di atmosfere pericolose, gas tossici, carenza di ossigeno o rischio di incendio ed esplosione. Esempi tipici sono cisterne, serbatoi, silos, pozzi, condotte, vasche, gallerie e canalizzazioni.

        L’aggiornamento formativo ha l’obiettivo di rafforzare e aggiornare le competenze operative dei lavoratori, con particolare attenzione alle procedure di sicurezza, alla gestione delle emergenze e all’utilizzo delle attrezzature e dei dispositivi di protezione individuale impiegati durante le attività in ambienti confinati.

        Il corso prevede un ripasso dei principali rischi e delle procedure operative, con esercitazioni pratiche utili a mantenere la capacità di intervento e la corretta applicazione delle misure di sicurezza durante le attività lavorative.

        Programma del corso:
        - Aggiornamento normativo su lavori in spazi confinati
        - Ripasso dei principali rischi negli ambienti confinati
        - Procedure di accesso e lavoro in sicurezza
        - Utilizzo e controllo dei dispositivi di protezione individuale (DPI)
        - Monitoraggio dell’atmosfera e strumenti di rilevazione gas
        - Gestione delle emergenze e procedure di recupero
        - Esercitazioni pratiche e simulazioni operative

        Destinatari:
        Lavoratori, operatori e preposti che svolgono attività in ambienti confinati o sospetti di inquinamento e che devono effettuare l’aggiornamento periodico della formazione.

        Durata:
        4 ore di aggiornamento, con particolare attenzione alle esercitazioni pratiche, in conformità al nuovo Accordo Stato-Regioni sulla formazione in materia di sicurezza sul lavoro.

        Attestato:
        Al termine del corso viene rilasciato attestato di aggiornamento valido ai sensi del D.Lgs. 81/08, del D.P.R. 177/2011 e del nuovo Accordo Stato-Regioni.
      `,
      duration: "4 ore",
      group: "Spazi Confinati"
    },
    {
      title: "Aggiornamento Attività in Spazi Confinati Avanzato – Preposti (8 ore)",
      preview: "Il Corso di Aggiornamento per Attività in Spazi Confinati Avanzato è rivolto ai preposti, capisquadra e responsabili operativi che coordinano o supervisionano attività svolte in ambienti confinati.",
      fullDescription: `
        Il Corso di Aggiornamento per Attività in Spazi Confinati Avanzato è rivolto ai preposti, capisquadra e responsabili operativi che coordinano o supervisionano attività svolte in ambienti confinati o sospetti di inquinamento.

        Il percorso formativo è previsto dal D.Lgs. 81/08, dal D.P.R. 177/2011 e dal nuovo Accordo Stato-Regioni sulla formazione in materia di salute e sicurezza sul lavoro, che stabilisce l’obbligo di aggiornamento periodico della formazione per mantenere adeguate le competenze necessarie a gestire in sicurezza attività ad alto rischio.

        Gli spazi confinati presentano rischi particolarmente elevati, legati alla possibile presenza di gas tossici, atmosfere esplosive, carenza di ossigeno o difficoltà di evacuazione. Per questo motivo il ruolo del preposto è fondamentale nel coordinamento delle attività, nella verifica delle procedure di sicurezza e nella gestione delle emergenze.

        Il corso di aggiornamento consente di approfondire e consolidare le competenze tecniche e organizzative necessarie per la supervisione delle attività in ambienti confinati, con particolare attenzione alla gestione operativa dei lavori, alla verifica delle condizioni di sicurezza e alle procedure di emergenza e recupero.

        Particolare rilevanza è dedicata alle esercitazioni pratiche, finalizzate a mantenere elevato il livello di preparazione degli operatori e a garantire un’efficace gestione delle situazioni di emergenza.

        Programma del corso:
        - Aggiornamento normativo su lavori in spazi confinati
        - Ruolo e responsabilità del preposto nelle attività in ambienti confinati
        - Analisi e aggiornamento dei principali rischi operativi
        - Procedure di lavoro e sistemi di autorizzazione all’accesso
        - Coordinamento degli operatori e verifica delle condizioni di sicurezza
        - Utilizzo e controllo dei dispositivi di protezione individuale (DPI)
        - Monitoraggio dell’atmosfera e strumenti di rilevazione gas
        - Gestione delle emergenze e procedure di recupero
        - Esercitazioni pratiche e simulazioni operative

        Destinatari:
        Preposti, capisquadra e responsabili operativi che coordinano o supervisionano attività in ambienti confinati o sospetti di inquinamento.

        Durata:
        8 ore di aggiornamento, con moduli teorici ed esercitazioni pratiche, in conformità al nuovo Accordo Stato-Regioni sulla formazione in materia di sicurezza sul lavoro.

        Attestato:
        Al termine del corso viene rilasciato attestato di aggiornamento valido ai sensi del D.Lgs. 81/08, del D.P.R. 177/2011 e del nuovo Accordo Stato-Regioni.
      `,
      duration: "8 ore",
      group: "Spazi Confinati"
    },
    {
      title: "Corso DPI per Lavori in Quota e Uso dei DPI di III Categoria – 8 ore",
      preview: "Il Corso DPI per Lavori in Quota e utilizzo dei Dispositivi di Protezione Individuale di III Categoria è rivolto ai lavoratori che svolgono attività con rischio di caduta dall’alto.",
      fullDescription: `
        Il Corso DPI per Lavori in Quota e utilizzo dei Dispositivi di Protezione Individuale di III Categoria è rivolto ai lavoratori che svolgono attività con rischio di caduta dall’alto, come previsto dal D.Lgs. 81/08 e dal nuovo Accordo Stato-Regioni sulla formazione in materia di salute e sicurezza sul lavoro.

        I DPI di III categoria sono dispositivi progettati per proteggere i lavoratori da rischi gravi o mortali, tra cui la caduta dall’alto. Tra questi rientrano, ad esempio, imbracature di sicurezza, sistemi anticaduta, cordini, dissipatori di energia, dispositivi retrattili e linee vita.

        Il corso ha l’obiettivo di fornire ai partecipanti le conoscenze teoriche e le competenze pratiche necessarie per lavorare in sicurezza in quota, utilizzando correttamente i DPI anticaduta e applicando le procedure operative previste dalla normativa.

        Durante la formazione vengono affrontati i principali rischi legati ai lavori in quota, le modalità di scelta, utilizzo e controllo dei DPI anticaduta e le corrette procedure di accesso e posizionamento in sicurezza.

        Il percorso formativo prevede inoltre esercitazioni pratiche, fondamentali per acquisire dimestichezza con l’utilizzo delle attrezzature anticaduta e con le tecniche di lavoro e di recupero in caso di emergenza.

        Programma del corso:
        - Normativa di riferimento su lavori in quota e DPI
        - Classificazione e caratteristiche dei DPI di III categoria
        - Analisi dei rischi nei lavori in quota
        - Sistemi di protezione contro le cadute dall’alto
        - Scelta, utilizzo e verifica dei DPI anticaduta
        - Linee vita e sistemi di ancoraggio
        - Procedure di lavoro in sicurezza
        - Gestione delle emergenze e tecniche di recupero
        - Esercitazioni pratiche sull’utilizzo dei DPI anticaduta

        Destinatari:
        Lavoratori che svolgono attività in quota o che devono utilizzare DPI anticaduta di III categoria durante le attività lavorative.

        Durata:
        8 ore di formazione, con moduli teorici ed esercitazioni pratiche.

        Attestato:
        Al termine del corso, previa partecipazione alle attività formative e verifica dell’apprendimento, viene rilasciato attestato di formazione valido ai sensi del D.Lgs. 81/08 e del nuovo Accordo Stato-Regioni sulla formazione in materia di sicurezza sul lavoro.
      `,
      duration: "8 ore",
      group: "Lavori in Quota"
    },
    {
      title: "Aggiornamento DPI di III Categoria e Lavori in Quota – 4 ore",
      preview: "Il Corso di Aggiornamento DPI di III Categoria e Lavori in Quota è rivolto ai lavoratori che utilizzano dispositivi di protezione individuale anticaduta durante lo svolgimento di attività con rischio di caduta dall’alto.",
      fullDescription: `
        Il Corso di Aggiornamento DPI di III Categoria e Lavori in Quota è rivolto ai lavoratori che utilizzano dispositivi di protezione individuale anticaduta durante lo svolgimento di attività con rischio di caduta dall’alto.

        La formazione è prevista dal D.Lgs. 81/08, in particolare dall’art. 77 relativo all’uso dei DPI, e dal nuovo Accordo Stato-Regioni sulla formazione in materia di salute e sicurezza sul lavoro, che stabilisce l’obbligo di aggiornamento periodico della formazione per mantenere adeguate le competenze operative dei lavoratori.

        I DPI di III categoria sono dispositivi destinati a proteggere i lavoratori da rischi gravi o mortali, come le cadute dall’alto. Tra questi rientrano imbracature di sicurezza, cordini con dissipatore, dispositivi retrattili, sistemi di ancoraggio e linee vita.

        Il corso di aggiornamento consente di riprendere e rafforzare le competenze relative all’utilizzo corretto dei sistemi anticaduta, con particolare attenzione alle procedure operative, alla verifica dei dispositivi e alla gestione delle situazioni di emergenza.

        La formazione prevede inoltre esercitazioni pratiche, fondamentali per mantenere la capacità di utilizzare correttamente le attrezzature anticaduta e operare in sicurezza durante i lavori in quota.

        Programma del corso:
        - Aggiornamento normativo su lavori in quota e DPI
        - Ripasso dei principali rischi legati alle cadute dall’alto
        - Tipologie e caratteristiche dei DPI di III categoria
        - Controllo, manutenzione e corretta vestizione dei DPI anticaduta
        - Sistemi di ancoraggio e linee vita
        - Procedure operative per il lavoro in sicurezza in quota
        - Gestione delle emergenze e procedure di recupero
        - Esercitazioni pratiche sull’utilizzo dei DPI anticaduta

        Destinatari:
        Lavoratori che svolgono attività in quota e utilizzano dispositivi di protezione individuale di III categoria contro le cadute dall’alto.

        Durata:
        4 ore di aggiornamento, con una parte teorica e una significativa componente pratica.

        Attestato:
        Al termine del corso viene rilasciato attestato di aggiornamento valido ai sensi del D.Lgs. 81/08 e del nuovo Accordo Stato-Regioni sulla formazione in materia di sicurezza sul lavoro.
      `,
      duration: "4 ore",
      group: "Lavori in Quota"
    },
    {
      title: "Corso Lavori su Funi – 32 ore",
      preview: "Il Corso Lavori su Funi è rivolto ai lavoratori che svolgono attività in quota mediante sistemi di accesso e posizionamento tramite funi.",
      fullDescription: `
        Il Corso Lavori su Funi è rivolto ai lavoratori che svolgono attività in quota mediante sistemi di accesso e posizionamento tramite funi, come previsto dal D.Lgs. 81/08 (art. 116 e Allegato XXI) e dal nuovo Accordo Stato-Regioni sulla formazione in materia di salute e sicurezza sul lavoro.

        I lavori su fune rappresentano una tecnica utilizzata quando non è possibile o risulta più rischioso utilizzare ponteggi, piattaforme di lavoro elevabili o altre attrezzature di accesso. Questa modalità operativa consente di effettuare interventi in sicurezza su facciate, strutture industriali, coperture, pareti rocciose, silos, torri, tralicci e altre strutture in quota.

        Il corso ha l’obiettivo di fornire ai partecipanti le competenze tecniche e pratiche necessarie per operare in sicurezza mediante sistemi su fune, con particolare attenzione alla prevenzione delle cadute dall’alto, all’utilizzo corretto delle attrezzature e alla gestione delle situazioni di emergenza.

        La formazione prevede una parte teorica dedicata alla normativa, alla valutazione dei rischi e all’organizzazione delle attività, e una ampia componente pratica dedicata alle tecniche operative di accesso, posizionamento, movimentazione e recupero su fune.

        Programma del corso:
        - Normativa di riferimento sui lavori in quota e su funi
        - Analisi dei rischi e misure di prevenzione e protezione
        - DPI di III categoria e attrezzature per lavori su funi
        - Nodi, ancoraggi e sistemi di sicurezza
        - Tecniche di accesso, discesa e risalita su fune
        - Tecniche di posizionamento e movimentazione in quota
        - Procedure operative e organizzazione delle attività
        - Gestione delle emergenze e tecniche di recupero
        - Esercitazioni pratiche su strutture dedicate

        Destinatari:
        Lavoratori che svolgono attività in quota mediante sistemi di accesso e posizionamento tramite funi.

        Durata:
        32 ore di formazione, suddivise tra moduli teorici ed esercitazioni pratiche, come previsto dalla normativa vigente.

        Attestato:
        Al termine del corso, previa frequenza e verifica dell’apprendimento, viene rilasciato attestato di formazione valido ai sensi del D.Lgs. 81/08 (art. 116 e Allegato XXI).
      `,
      duration: "32 ore",
      group: "Lavori su Funi"
    },
    {
      title: "Aggiornamento Corso Lavori su Funi – 8 ore",
      preview: "Il Corso di Aggiornamento per Lavori su Funi è rivolto ai lavoratori che svolgono attività in quota mediante sistemi di accesso e posizionamento tramite funi e che devono mantenere aggiornate le proprie competenze.",
      fullDescription: `
        Il Corso di Aggiornamento per Lavori su Funi è rivolto ai lavoratori che svolgono attività in quota mediante sistemi di accesso e posizionamento tramite funi e che devono mantenere aggiornate le proprie competenze operative per lavorare in sicurezza.

        La formazione è prevista dal D.Lgs. 81/08 (art. 116 e Allegato XXI) e dalle disposizioni sulla formazione in materia di salute e sicurezza sul lavoro, che stabiliscono l’obbligo di aggiornamento periodico per gli operatori addetti ai lavori su funi.

        I lavori su fune vengono utilizzati in numerosi ambiti operativi, come manutenzioni su edifici, lavori su facciate, interventi su strutture industriali, torri, tralicci, coperture e siti naturali, quando non è possibile o risulta più rischioso utilizzare altre attrezzature di accesso come ponteggi o piattaforme elevabili.

        Il corso di aggiornamento ha l’obiettivo di rafforzare e aggiornare le competenze tecniche e operative degli operatori, con particolare attenzione all’utilizzo corretto delle attrezzature, alla verifica dei dispositivi di sicurezza e alla gestione delle emergenze durante le attività in quota.

        La formazione prevede una parte teorica di aggiornamento normativo e tecnico e una significativa componente pratica, finalizzata a mantenere l’abilità nell’utilizzo delle tecniche operative su fune e nelle procedure di recupero.

        Programma del corso:
        - Aggiornamento normativo sui lavori in quota e su funi
        - Ripasso dei principali rischi legati ai lavori su fune
        - Controllo e utilizzo dei DPI di III categoria e delle attrezzature
        - Verifica degli ancoraggi e dei sistemi di sicurezza
        - Tecniche operative di accesso, posizionamento e movimentazione su fune
        - Procedure di lavoro in sicurezza
        - Gestione delle emergenze e tecniche di recupero
        - Esercitazioni pratiche su strutture dedicate

        Destinatari:
        Lavoratori già formati che svolgono attività mediante sistemi di accesso e posizionamento tramite funi.

        Durata:
        8 ore di aggiornamento, con una parte teorica e una significativa componente pratica.

        Attestato:
        Al termine del corso viene rilasciato attestato di aggiornamento valido ai sensi del D.Lgs. 81/08 (art. 116 e Allegato XXI).
      `,
      duration: "8 ore",
      group: "Lavori su Funi"
    },
    {
      title: "Corso Preposto per Lavori su Funi – 8 ore",
      preview: "Il Corso Preposto per Lavori su Funi è rivolto ai lavoratori che svolgono funzioni di sorveglianza, coordinamento e controllo delle attività operative svolte mediante sistemi di accesso e posizionamento tramite funi.",
      fullDescription: `
        Il Corso Preposto per Lavori su Funi è rivolto ai lavoratori che svolgono funzioni di sorveglianza, coordinamento e controllo delle attività operative svolte mediante sistemi di accesso e posizionamento tramite funi.

        Il percorso formativo è previsto dal D.Lgs. 81/08 (art. 19 e art. 116) e dall’Allegato XXI, che disciplina la formazione degli operatori e dei preposti addetti ai lavori su funi. Il preposto ha un ruolo fondamentale nel garantire il rispetto delle procedure di sicurezza e nel vigilare sull’operato degli operatori durante le attività in quota.

        I lavori su fune vengono utilizzati in diversi contesti operativi, come manutenzioni su edifici, interventi su facciate, strutture industriali, torri, tralicci, coperture e siti naturali, quando non è possibile utilizzare altre attrezzature di accesso come ponteggi o piattaforme di lavoro elevabili.

        Il corso ha l’obiettivo di fornire ai partecipanti le competenze organizzative, tecniche e gestionali necessarie per coordinare e supervisionare le attività svolte su funi, assicurando l’applicazione delle corrette procedure operative e delle misure di sicurezza previste dalla normativa.

        Durante la formazione vengono approfonditi il ruolo e le responsabilità del preposto, l’organizzazione delle attività di lavoro, la gestione dei rischi e il controllo dell’utilizzo delle attrezzature e dei DPI di III categoria, con particolare attenzione alla gestione delle emergenze e alle procedure di recupero.

        Programma del corso:
        - Normativa di riferimento sui lavori su funi
        - Ruolo, compiti e responsabilità del preposto
        - Organizzazione e pianificazione delle attività su funi
        - Analisi e gestione dei rischi nei lavori in quota
        - Verifica e controllo dei DPI di III categoria e delle attrezzature
        - Sistemi di ancoraggio e procedure operative
        - Vigilanza sull’applicazione delle procedure di sicurezza
        - Gestione delle emergenze e tecniche di recupero
        - Esercitazioni pratiche

        Destinatari:
        Lavoratori con funzione di preposto o caposquadra che coordinano attività svolte mediante sistemi di accesso e posizionamento tramite funi.

        Durata:
        8 ore di formazione, con moduli teorici ed esercitazioni pratiche.

        Attestato:
        Al termine del corso, previa partecipazione alle attività formative e verifica dell’apprendimento, viene rilasciato attestato valido ai sensi del D.Lgs. 81/08 (art. 116 e Allegato XXI).
      `,
      duration: "8 ore",
      group: "Lavori su Funi"
    },
    {
      title: "Aggiornamento Preposto per Lavori su Funi – 4 ore",
      preview: "Il Corso di Aggiornamento Preposto per Lavori su Funi è rivolto ai lavoratori che svolgono funzioni di preposto o caposquadra nelle attività eseguite mediante sistemi di accesso e posizionamento tramite funi.",
      fullDescription: `
        Il Corso di Aggiornamento Preposto per Lavori su Funi è rivolto ai lavoratori che svolgono funzioni di preposto o caposquadra nelle attività eseguite mediante sistemi di accesso e posizionamento tramite funi, e che devono mantenere aggiornate le proprie competenze in materia di sicurezza.

        La formazione è prevista dal D.Lgs. 81/08, in particolare dagli artt. 19 e 116, e dall’Allegato XXI, che disciplina la formazione degli operatori e dei preposti addetti ai lavori su funi. Il preposto ha il compito di sovrintendere alle attività lavorative, verificare il rispetto delle procedure di sicurezza e garantire il corretto utilizzo delle attrezzature e dei DPI di III categoria.

        Il corso di aggiornamento ha l’obiettivo di rafforzare e aggiornare le competenze tecniche, organizzative e di vigilanza del preposto, con particolare attenzione alla gestione delle attività operative in quota, alla valutazione dei rischi e alla corretta applicazione delle procedure di sicurezza.

        Durante la formazione vengono ripresi i principali aspetti normativi e operativi relativi ai lavori su fune, con approfondimenti sulla gestione delle emergenze, sulle tecniche di recupero e sul coordinamento degli operatori durante le attività in quota.

        Programma del corso:
        - Aggiornamento normativo sui lavori su funi
        - Ruolo e responsabilità del preposto nelle attività in quota
        - Analisi e aggiornamento dei principali rischi operativi
        - Verifica dell’utilizzo dei DPI di III categoria e delle attrezzature
        - Controllo delle procedure di lavoro e dei sistemi di ancoraggio
        - Coordinamento degli operatori durante le attività su funi
        - Gestione delle emergenze e procedure di recupero
        - Simulazioni ed esercitazioni pratiche

        Destinatari:
        Preposti e capisquadra che coordinano o supervisionano attività svolte mediante sistemi di accesso e posizionamento tramite funi.

        Durata:
        4 ore di aggiornamento, con moduli teorici ed esercitazioni pratiche.

        Attestato:
        Al termine del corso viene rilasciato attestato di aggiornamento valido ai sensi del D.Lgs. 81/08 (artt. 19 e 116 e Allegato XXI).
      `,
      duration: "4 ore",
      group: "Lavori su Funi"
    },
    {
      title: "Corso Ponteggi – Addetti al Montaggio, Smontaggio e Trasformazione (28 ore)",
      preview: "Il Corso Ponteggi – 28 ore è rivolto ai lavoratori addetti alle operazioni di montaggio, smontaggio e trasformazione dei ponteggi, come previsto dal D.Lgs. 81/08.",
      fullDescription: `
        Il Corso Ponteggi – 28 ore è rivolto ai lavoratori addetti alle operazioni di montaggio, smontaggio e trasformazione dei ponteggi, come previsto dal D.Lgs. 81/08 (art. 136 e Allegato XXI).

        La normativa stabilisce che i lavoratori che operano sui ponteggi debbano ricevere una formazione teorica e pratica specifica, finalizzata a garantire lo svolgimento delle attività in sicurezza e a prevenire i rischi legati ai lavori in quota.

        Il corso ha l’obiettivo di fornire ai partecipanti le conoscenze tecniche e operative necessarie per montare, smontare e trasformare correttamente i ponteggi, nel rispetto delle procedure previste dalla normativa e delle indicazioni contenute nel Pi.M.U.S. (Piano di Montaggio, Uso e Smontaggio dei ponteggi).

        Durante la formazione vengono approfonditi i principali aspetti normativi, la valutazione dei rischi nei lavori in quota, l’utilizzo dei dispositivi di protezione individuale (DPI) e le corrette tecniche operative per la gestione dei ponteggi.

        Il percorso formativo prevede una parte teorica e una ampia componente pratica, con esercitazioni dedicate al montaggio e allo smontaggio delle strutture, all’utilizzo dei sistemi di sicurezza e alle procedure operative previste in cantiere.

        Programma del corso:
        - Normativa di riferimento sui lavori in quota e sui ponteggi
        - Analisi dei rischi nelle attività di montaggio e smontaggio
        - Tipologie di ponteggi e componenti strutturali
        - Pi.M.U.S. (Piano di Montaggio, Uso e Smontaggio dei ponteggi)
        - Dispositivi di protezione individuale per i lavori in quota
        - Tecniche di montaggio, smontaggio e trasformazione dei ponteggi
        - Misure di prevenzione e protezione nei lavori in quota
        - Esercitazioni pratiche su strutture dedicate

        Destinatari:
        Lavoratori che svolgono attività di montaggio, smontaggio e trasformazione dei ponteggi nei cantieri temporanei o mobili.

        Durata:
        28 ore di formazione, suddivise tra moduli teorici e prove pratiche, come previsto dal D.Lgs. 81/08 (art. 136 e Allegato XXI).

        Attestato:
        Al termine del corso, previa frequenza e verifica dell’apprendimento, viene rilasciato attestato di formazione valido ai sensi del D.Lgs. 81/08 per addetti al montaggio, smontaggio e trasformazione dei ponteggi.
      `,
      duration: "28 ore",
      group: "Ponteggi"
    },
    {
      title: "Aggiornamento Corso Ponteggi – 4 ore",
      preview: "Il Corso di Aggiornamento per Addetti al Montaggio, Smontaggio e Trasformazione dei Ponteggi è rivolto ai lavoratori che operano nei cantieri temporanei o mobili.",
      fullDescription: `
        Il Corso di Aggiornamento per Addetti al Montaggio, Smontaggio e Trasformazione dei Ponteggi è rivolto ai lavoratori che operano nei cantieri temporanei o mobili e che devono mantenere aggiornata la propria formazione per svolgere in sicurezza le attività sui ponteggi.

        La formazione è prevista dal D.Lgs. 81/08 (art. 136 e Allegato XXI), che stabilisce l’obbligo per gli addetti ai ponteggi di effettuare un aggiornamento periodico della durata minima di 4 ore ogni 4 anni, al fine di mantenere adeguate le competenze tecniche e operative.

        Il corso di aggiornamento consente di riprendere e approfondire le procedure di sicurezza, le corrette tecniche di montaggio e smontaggio dei ponteggi e l’utilizzo dei dispositivi di protezione individuale nei lavori in quota.

        Durante la formazione vengono inoltre affrontati gli aggiornamenti normativi e le buone pratiche operative per la gestione delle attività in cantiere, con esercitazioni pratiche finalizzate a mantenere la manualità e la corretta applicazione delle procedure di sicurezza.

        Programma del corso:
        - Aggiornamento normativo sui lavori in quota e sui ponteggi
        - Ripasso dei principali rischi nelle attività di montaggio e smontaggio
        - Procedure operative per il montaggio, smontaggio e trasformazione dei ponteggi
        - Utilizzo dei DPI per i lavori in quota
        - Pi.M.U.S. (Piano di Montaggio, Uso e Smontaggio dei ponteggi)
        - Verifica delle condizioni di sicurezza delle strutture
        - Esercitazioni pratiche su ponteggi

        Destinatari:
        Lavoratori addetti al montaggio, smontaggio e trasformazione dei ponteggi che devono effettuare l’aggiornamento periodico della formazione.

        Durata:
        4 ore di aggiornamento, con una parte teorica e una componente pratica.

        Attestato:
        Al termine del corso viene rilasciato attestato di aggiornamento valido ai sensi del D.Lgs. 81/08 (art. 136 e Allegato XXI).
      `,
      duration: "4 ore",
      group: "Ponteggi"
    },
    {
      title: "Corso Evacuatore di Emergenza – 8 ore",
      preview: "Il Corso Evacuatore di Emergenza – 8 ore è rivolto ai lavoratori incaricati di supportare le operazioni di evacuazione durante le situazioni di emergenza.",
      fullDescription: `
        Il Corso Evacuatore di Emergenza – 8 ore è rivolto ai lavoratori incaricati di supportare le operazioni di evacuazione durante le situazioni di emergenza, con particolare attenzione all’assistenza di persone con mobilità ridotta, disabilità o difficoltà di evacuazione presenti nei luoghi di lavoro.

        La formazione è prevista nell’ambito della gestione delle emergenze nei luoghi di lavoro secondo il Decreto Legislativo 81/2008, che stabilisce l’obbligo per il datore di lavoro di organizzare adeguate procedure di emergenza ed evacuazione per garantire la sicurezza di tutti i lavoratori e delle persone presenti.

        Il corso ha l’obiettivo di fornire ai partecipanti le competenze operative necessarie per gestire correttamente le procedure di evacuazione, collaborando con gli addetti alle emergenze e applicando le indicazioni contenute nel Piano di Emergenza ed Evacuazione aziendale.

        Durante la formazione vengono affrontati gli aspetti organizzativi della gestione delle emergenze, le tecniche di evacuazione assistita e l’utilizzo delle attrezzature dedicate, come sedie di evacuazione e dispositivi di trasporto su scale, fondamentali per garantire un’evacuazione sicura anche in presenza di persone con mobilità ridotta.

        Il corso prevede una parte teorica e una significativa componente pratica, con simulazioni di evacuazione e utilizzo delle attrezzature.

        Programma del corso:
        - Normativa sulla gestione delle emergenze nei luoghi di lavoro
        - Organizzazione delle procedure di evacuazione
        - Ruolo e compiti dell’evacuatore di emergenza
        - Tecniche di evacuazione assistita
        - Gestione delle persone con mobilità ridotta o disabilità
        - Utilizzo della sedia di evacuazione e delle attrezzature dedicate
        - Comunicazione e coordinamento durante l’emergenza
        - Esercitazioni pratiche e simulazioni di evacuazione

        Destinatari:
        Lavoratori incaricati di supportare le procedure di evacuazione e assistenza alle persone durante le emergenze, in particolare in contesti in cui sono presenti persone con mobilità ridotta.

        Durata:
        8 ore di formazione, con moduli teorici ed esercitazioni pratiche.

        Attestato:
        Al termine del corso viene rilasciato attestato di partecipazione alla formazione sulla gestione dell’evacuazione di emergenza, in conformità al D.Lgs. 81/08.
      `,
      duration: "8 ore",
      group: "Emergenze"
    },
    {
      title: "Aggiornamento Evacuatore di Emergenza – 4 ore",
      preview: "Il Corso di Aggiornamento Evacuatore di Emergenza – 4 ore è rivolto ai lavoratori incaricati di supportare le operazioni di evacuazione durante le situazioni di emergenza.",
      fullDescription: `
        Il Corso di Aggiornamento Evacuatore di Emergenza – 4 ore è rivolto ai lavoratori incaricati di supportare le operazioni di evacuazione durante le situazioni di emergenza, con particolare attenzione all’assistenza di persone con mobilità ridotta o disabilità presenti nei luoghi di lavoro.

        La formazione rientra tra le attività previste dal Decreto Legislativo 81/2008, che stabilisce l’obbligo per il datore di lavoro di organizzare adeguate procedure di emergenza ed evacuazione e di garantire la sicurezza di tutti i lavoratori e delle persone presenti.

        Il corso di aggiornamento ha l’obiettivo di mantenere e rafforzare le competenze operative degli evacuatori di emergenza, attraverso il ripasso delle procedure di evacuazione, delle tecniche di assistenza alle persone con difficoltà di movimento e dell’utilizzo delle attrezzature dedicate.

        Durante la formazione vengono inoltre approfondite le procedure operative previste nel Piano di Emergenza ed Evacuazione aziendale, con esercitazioni pratiche finalizzate a migliorare la capacità di intervento e la gestione delle situazioni di emergenza.

        Programma del corso:
        - Aggiornamento normativo sulla gestione delle emergenze nei luoghi di lavoro
        - Ripasso delle procedure di evacuazione
        - Ruolo e responsabilità dell’evacuatore di emergenza
        - Tecniche di evacuazione assistita
        - Gestione delle persone con mobilità ridotta o disabilità
        - Utilizzo delle sedie di evacuazione e delle attrezzature dedicate
        - Comunicazione e coordinamento durante l’emergenza
        - Esercitazioni pratiche e simulazioni di evacuazione

        Destinatari:
        Lavoratori incaricati di supportare le procedure di evacuazione durante le emergenze e che devono effettuare l’aggiornamento periodico della formazione.

        Durata:
        4 ore di aggiornamento, con moduli teorici ed esercitazioni pratiche.

        Attestato:
        Al termine del corso viene rilasciato attestato di aggiornamento della formazione per evacuatore di emergenza, in conformità al Decreto Legislativo 81/2008.
      `,
      duration: "4 ore",
      group: "Emergenze"
    },
    {
      title: "Corso Respirazione e Utilizzo dell’Autorespiratore (APVR) – 8 ore",
      preview: "Il Corso Respirazione e Utilizzo dell’Autorespiratore (APVR) – 8 ore è rivolto ai lavoratori che operano in ambienti in cui possono essere presenti atmosfere pericolose.",
      fullDescription: `
        Il Corso Respirazione e Utilizzo dell’Autorespiratore (APVR) – 8 ore è rivolto ai lavoratori che operano in ambienti in cui possono essere presenti atmosfere pericolose, carenza di ossigeno o sostanze tossiche, e che devono utilizzare dispositivi di protezione delle vie respiratorie per svolgere le attività in sicurezza.

        La formazione è prevista dal Decreto Legislativo 81/2008, in particolare dall’art. 77 relativo all’uso dei Dispositivi di Protezione Individuale (DPI), che stabilisce l’obbligo di fornire ai lavoratori formazione e addestramento adeguati per l’utilizzo dei DPI di III categoria.

        Il corso ha l’obiettivo di fornire ai partecipanti le conoscenze teoriche e le competenze pratiche necessarie per utilizzare correttamente gli autorespiratori e gli altri dispositivi di protezione delle vie respiratorie, garantendo la sicurezza degli operatori durante le attività svolte in ambienti a rischio.

        Durante la formazione vengono approfonditi i principali rischi legati alla presenza di gas tossici, vapori pericolosi, atmosfere contaminate o carenza di ossigeno, nonché le modalità di utilizzo, controllo e manutenzione degli autorespiratori e dei dispositivi di protezione respiratoria.

        Il percorso formativo prevede inoltre esercitazioni pratiche, fondamentali per acquisire dimestichezza con l’utilizzo delle attrezzature, la vestizione dei dispositivi e le procedure operative in situazioni di emergenza.

        Programma del corso:
        - Normativa di riferimento sull’uso dei DPI
        - Rischi legati alle atmosfere pericolose e alla carenza di ossigeno
        - Tipologie di dispositivi di protezione delle vie respiratorie
        - Caratteristiche e funzionamento degli autorespiratori (APVR)
        - Procedure di utilizzo, controllo e manutenzione dei dispositivi
        - Vestizione e verifica dell’efficienza dell’autorespiratore
        - Procedure operative in ambienti a rischio
        - Gestione delle emergenze
        - Esercitazioni pratiche con autorespiratori

        Destinatari:
        Lavoratori che operano in ambienti a rischio di atmosfere pericolose o contaminazione dell’aria e che devono utilizzare autorespiratori o altri dispositivi di protezione delle vie respiratorie.

        Durata:
        8 ore di formazione, con moduli teorici ed esercitazioni pratiche.

        Attestato:
        Al termine del corso, previa partecipazione alle attività formative e verifica dell’apprendimento, viene rilasciato attestato di formazione sull’utilizzo dei dispositivi di protezione delle vie respiratorie, in conformità al Decreto Legislativo 81/2008.
      `,
      duration: "8 ore",
      group: "DPI III Categoria"
    },
    {
      title: "Aggiornamento Respirazione e Utilizzo dell’Autorespiratore (APVR) – 4 ore",
      preview: "Il Corso di Aggiornamento Respirazione e Utilizzo dell’Autorespiratore (APVR) – 4 ore è rivolto ai lavoratori che utilizzano dispositivi di protezione delle vie respiratorie.",
      fullDescription: `
        Il Corso di Aggiornamento Respirazione e Utilizzo dell’Autorespiratore (APVR) – 4 ore è rivolto ai lavoratori che utilizzano dispositivi di protezione delle vie respiratorie, in particolare autorespiratori, durante attività svolte in ambienti con atmosfere potenzialmente pericolose o carenza di ossigeno.

        La formazione rientra tra gli obblighi previsti dal Decreto Legislativo 81/2008, in particolare dall’art. 77 relativo all’uso dei Dispositivi di Protezione Individuale (DPI), che stabilisce la necessità di fornire ai lavoratori formazione e addestramento adeguati e aggiornati per l’utilizzo dei DPI di III categoria.

        Il corso di aggiornamento ha l’obiettivo di mantenere e rafforzare le competenze operative degli operatori, attraverso il ripasso delle procedure di utilizzo degli autorespiratori, la verifica delle condizioni di sicurezza e l’addestramento pratico all’impiego dei dispositivi di protezione delle vie respiratorie.

        Durante la formazione vengono inoltre analizzati i principali rischi legati alla presenza di gas tossici, vapori pericolosi o atmosfere contaminate, con particolare attenzione alle procedure di sicurezza e alle modalità di intervento in caso di emergenza.

        Il percorso prevede una significativa componente pratica, con esercitazioni dedicate alla vestizione, al controllo e all’utilizzo degli autorespiratori in condizioni operative simulate.

        Programma del corso:
        - Aggiornamento normativo sull’utilizzo dei DPI
        - Ripasso dei rischi legati alle atmosfere pericolose
        - Tipologie di dispositivi di protezione delle vie respiratorie
        - Verifica e controllo degli autorespiratori (APVR)
        - Procedure di utilizzo e manutenzione dei dispositivi
        - Vestizione e controllo funzionale dell’autorespiratore
        - Procedure operative in ambienti a rischio
        - Gestione delle emergenze
        - Esercitazioni pratiche

        Destinatari:
        Lavoratori che utilizzano autorespiratori o dispositivi di protezione delle vie respiratorie durante attività svolte in ambienti a rischio.

        Durata:
        4 ore di aggiornamento, con moduli teorici ed esercitazioni pratiche.

        Attestato:
        Al termine del corso viene rilasciato attestato di aggiornamento sull’utilizzo dei dispositivi di protezione delle vie respiratorie, in conformità al Decreto Legislativo 81/2008.
      `,
      duration: "4 ore",
      group: "DPI III Categoria"
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-6xl mx-auto px-4 py-20"
    >
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900 uppercase mb-4">
          Corsi <span className="text-brand">D.Lgs 81/08</span>
        </h1>
        <div className="w-20 h-1.5 bg-brand mx-auto rounded-full" />
        <p className="text-slate-500 mt-6 text-lg max-w-3xl mx-auto">
          Formazione obbligatoria per la sicurezza sul lavoro in conformità al Decreto Legislativo 81/08.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
        {courses8108.map((course, index) => {
          const isSpecialPage = ["1", "2", "3", "4", "5", "6", "ps-a", "ps-bc", "aggiornamento-ps-a", "aggiornamento-ps-bc"].includes(course.id || "");
          
          const handleNavigation = () => {
            if (course.id === "1") setCurrentView('antincendio-l1');
            else if (course.id === "2") setCurrentView('antincendio-l2');
            else if (course.id === "3") setCurrentView('antincendio-l3');
            else if (course.id === "4") setCurrentView('antincendio-update-l1');
            else if (course.id === "5") setCurrentView('antincendio-update-l2');
            else if (course.id === "6") setCurrentView('antincendio-update-l3');
            else if (course.id === "ps-a") setCurrentView('corso-primo-soccorso-gruppo-a');
            else if (course.id === "ps-bc") setCurrentView('primo-soccorso-bc');
            else if (course.id === "aggiornamento-ps-a") setCurrentView('aggiornamento-ps-a');
            else if (course.id === "aggiornamento-ps-bc") setCurrentView('aggiornamento-ps-bc');
          };

          return (
            <div 
              key={index} 
              onClick={() => isSpecialPage && handleNavigation()}
              className={`bg-white rounded-3xl border border-slate-100 p-8 shadow-xl shadow-slate-200/50 flex flex-col transition-all ${isSpecialPage ? 'cursor-pointer hover:border-brand/50 group' : ''}`}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center text-brand shrink-0">
                  <Shield className="w-6 h-6" />
                </div>
                <div className="flex gap-2">
                  <div className="px-4 py-1.5 bg-slate-900 rounded-full text-[10px] font-bold text-brand uppercase tracking-widest">
                    {course.duration}
                  </div>
                  <div className="px-4 py-1.5 bg-slate-900 rounded-full text-[10px] font-bold text-brand uppercase tracking-widest">
                    {course.group}
                  </div>
                </div>
              </div>
              
              <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-4 group-hover:text-brand transition-colors">
                {course.title}
              </h2>
              
              <p className="text-slate-600 leading-relaxed mb-6">
                {course.preview}
              </p>

              <div className="mt-auto">
                <button 
                  onClick={(e) => {
                    if (isSpecialPage) {
                      e.stopPropagation();
                      handleNavigation();
                    } else {
                      setExpandedCourse(expandedCourse === index ? null : index);
                    }
                  }}
                  className="inline-flex items-center gap-2 bg-slate-900 text-brand font-bold px-4 py-2 rounded-xl transition-all uppercase text-sm tracking-wider hover:scale-105 active:scale-95"
                >
                  {isSpecialPage ? "Scopri di più" : (expandedCourse === index ? "Chiudi descrizione" : "Scopri di più")}
                  <ArrowRight className={`w-4 h-4 transition-transform ${(!isSpecialPage && expandedCourse === index) ? 'rotate-90' : ''}`} />
                </button>
              </div>

              {!isSpecialPage && (
                <AnimatePresence>
                  {expandedCourse === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-8 mt-8 border-t border-slate-100">
                        <div className="prose prose-slate max-w-none">
                          {course.fullDescription.split('\n').map((line, i) => (
                            <p key={i} className="text-slate-600 text-sm leading-relaxed mb-4 whitespace-pre-line">
                              {line.trim()}
                            </p>
                          ))}
                        </div>
                        <div className="mt-8 pt-8 border-t border-slate-100">
                          <a 
                            href={`mailto:commerciale@aliseogroup.it?subject=Richiesta Info: ${course.title}`}
                            className="inline-flex items-center justify-center w-full py-4 bg-brand text-brand-dark rounded-2xl font-bold hover:bg-slate-900 hover:text-white transition-all shadow-lg shadow-brand/20"
                          >
                            Richiedi Info
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          );
        })}
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-16">
        <button 
          onClick={() => {
            setCurrentView('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-brand hover:text-brand-dark transition-all shadow-xl shadow-slate-200"
        >
          Torna alla Home
          <ArrowRight className="w-5 h-5" />
        </button>
        <a 
          href="mailto:commerciale@aliseogroup.it"
          className="inline-flex items-center gap-2 px-8 py-4 bg-brand text-brand-dark rounded-2xl font-bold hover:bg-slate-900 hover:text-white transition-all shadow-xl shadow-slate-200"
        >
          RICHIEDI INFO SU CORSI NON A CATALOGO
          <Mail className="w-5 h-5" />
        </a>
      </div>
    </motion.div>
  );
};

const MobileCenterSection = ({ setCurrentView, setActiveVideo }: { 
  setCurrentView: (view: any) => void,
  setActiveVideo: (url: string | null) => void 
}) => {
  const videos = [
    {
      title: "VIDEO SPAZI CONFINATI",
      url: "/spazi-confinati.mp4"
    },
    {
      title: "VIDEO RECUPERO DA TERRA",
      url: "https://www.canva.com/design/DAGz4vgFbwA/a0km4a-y430DuUEiAyS9tA/watch?embed&meta"
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto px-4 py-20"
    >
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900 uppercase mb-4">
          Centro Formativo <span className="text-brand">Mobile</span>
        </h1>
        <div className="w-20 h-1.5 bg-brand mx-auto rounded-full" />
        <p className="text-slate-500 mt-6 text-lg max-w-2xl mx-auto">
          Esplora le nostre unità mobili di addestramento attraverso i video dimostrativi.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 max-w-2xl mx-auto">
        {videos.map((video, index) => (
          <button
            key={index}
            onClick={() => setActiveVideo(video.url)}
            className="group relative bg-white rounded-3xl border border-slate-100 p-8 shadow-xl shadow-slate-200/50 hover:border-brand transition-all flex items-center justify-between overflow-hidden text-left w-full"
          >
            <div className="absolute inset-0 bg-brand/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative flex items-center gap-6">
              <div className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center text-brand group-hover:scale-110 transition-transform">
                <Play className="w-8 h-8 fill-current" />
              </div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 uppercase tracking-tight">
                {video.title}
              </h2>
            </div>
            <ArrowRight className="relative w-8 h-8 text-slate-300 group-hover:text-brand group-hover:translate-x-2 transition-all" />
          </button>
        ))}

        <button
          onClick={() => {
            setCurrentView('gallery');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="group relative bg-white rounded-3xl border border-slate-100 p-8 shadow-xl shadow-slate-200/50 hover:border-brand transition-all flex items-center justify-between overflow-hidden"
        >
          <div className="absolute inset-0 bg-brand/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative flex items-center gap-6">
            <div className="w-16 h-16 bg-brand rounded-2xl flex items-center justify-center text-brand-dark group-hover:scale-110 transition-transform">
              <Search className="w-8 h-8" />
            </div>
            <h2 className="text-xl md:text-2xl font-black text-slate-900 uppercase tracking-tight text-left">
              Galleria Foto
            </h2>
          </div>
          <ArrowRight className="relative w-8 h-8 text-slate-300 group-hover:text-brand group-hover:translate-x-2 transition-all" />
        </button>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-16">
        <button 
          onClick={() => {
            setCurrentView('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="inline-flex items-center gap-2 px-8 py-4 bg-slate-100 text-slate-600 rounded-2xl font-bold hover:bg-slate-200 transition-all"
        >
          Torna alla Home
        </button>
        <a 
          href="mailto:commerciale@aliseogroup.it"
          className="inline-flex items-center gap-2 px-8 py-4 bg-brand text-brand-dark rounded-2xl font-bold hover:bg-slate-900 hover:text-white transition-all shadow-xl shadow-slate-200"
        >
          Richiedi info
          <Mail className="w-5 h-5" />
        </a>
      </div>
    </motion.div>
  );
};

const HeroSection = ({ setCurrentView, setSelectedCategory }: { 
  setCurrentView: (view: any) => void;
  setSelectedCategory: (cat: string) => void;
}) => {
  return (
    <header className="relative py-24 lg:py-40 overflow-hidden bg-brand-dark">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#fefd06,transparent_70%)]" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-[45%_55%] gap-16 items-center">
          <div className="flex flex-col">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand text-sm font-medium mb-6 w-fit"
            >
              <CheckCircle2 className="w-4 h-4" />
              Formazione Certificata AIFES
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl lg:text-6xl font-bold text-brand mb-6 leading-[1.1] tracking-tight font-mono"
            >
              Aliseo Academy: Eccellenza nella Formazione
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-400 mb-10 leading-relaxed max-w-xl"
            >
              Soluzioni di formazione all'avanguardia per aziende e professionisti. 
              Semplifica la conformità normativa con i nostri corsi certificati.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-8"
            >
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://wa.me/393274789581"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 min-w-[240px] px-8 py-4 bg-brand text-brand-dark rounded-2xl font-bold text-lg hover:opacity-90 transition-all flex items-center justify-center group shadow-xl shadow-brand/20"
                >
                  Contattaci su Whatsapp
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <button 
                  onClick={() => {
                    setCurrentView('elearning');
                    setSelectedCategory("Tutti i corsi");
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="flex-1 min-w-[240px] px-8 py-4 bg-white/10 text-white border border-white/20 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all backdrop-blur-sm"
                >
                  Corsi E-learning
                </button>
              </div>

              <div className="flex flex-wrap gap-4 pt-6 border-t border-white/10">
                <button 
                  onClick={() => {
                    setCurrentView('dlgs-81-08');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="flex-1 min-w-[280px] flex items-center gap-4 p-6 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl transition-all text-left group"
                >
                  <Shield className="w-8 h-8 text-brand shrink-0 group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="text-white font-bold text-lg">Corsi D.Lgs 81/08</div>
                    <div className="text-slate-400 text-sm">Formazione obbligatoria</div>
                  </div>
                </button>
                <button 
                  onClick={() => {
                    setCurrentView('gwo-training');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="flex-1 min-w-[280px] flex items-center gap-4 p-6 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl transition-all text-left group"
                >
                  <BookOpen className="w-8 h-8 text-brand shrink-0 group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="text-white font-bold text-lg">Corsi GWO Training</div>
                    <div className="text-slate-400 text-sm">Standard internazionali</div>
                  </div>
                </button>
                <button 
                  onClick={() => {
                    setCurrentView('professionisti');
                    setSelectedCategory("Corsi per Professionisti");
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="flex-1 min-w-[280px] flex items-center gap-4 p-6 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl transition-all text-left group"
                >
                  <Euro className="w-8 h-8 text-brand shrink-0 group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="text-white font-bold text-lg">Corsi per Professionisti</div>
                    <div className="text-slate-400 text-sm">Alta formazione</div>
                  </div>
                </button>
                <button 
                  onClick={() => {
                    setCurrentView('mobile-center');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="w-full flex items-center gap-6 p-6 bg-brand/10 hover:bg-brand/20 border border-brand/20 rounded-2xl transition-all text-left group"
                >
                  <div className="p-4 bg-brand text-brand-dark rounded-2xl group-hover:scale-105 transition-transform">
                    <Play className="w-8 h-8 fill-current" />
                  </div>
                  <div>
                    <div className="text-brand font-black text-xl lg:text-2xl uppercase tracking-tighter">Centro Formativo Mobile</div>
                    <div className="text-brand/70 text-sm font-bold uppercase tracking-widest">L'unico in Italia • Scopri di più</div>
                  </div>
                </button>
              </div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative lg:-mr-16 xl:-mr-32 space-y-8"
          >
            <div className="absolute -inset-4 bg-brand/20 blur-3xl rounded-full animate-pulse" />
            
            {/* Main Hero Image */}
            <div className="relative rounded-3xl overflow-hidden border-4 border-brand/30 shadow-2xl shadow-brand/20 bg-white/5">
              <img 
                src="https://i.ibb.co/6RMG179f/Homepage.png" 
                alt="Aliseo Academy Training"
                className="w-full h-auto block"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1200";
                }}
              />
            </div>

            {/* Second Hero Image (from gallery) */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="relative rounded-3xl overflow-hidden border-4 border-brand/30 shadow-2xl shadow-brand/20 bg-white/5"
            >
              <img 
                src="/foto10.jpg" 
                alt="Aliseo Academy Training Activity"
                className="w-full h-auto block"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&q=80&w=1200";
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

const CatalogSection = ({ 
  selectedCategory, 
  setSelectedCategory, 
  searchQuery, 
  setSearchQuery,
  setSelectedCourse,
  isStandalone = false
}: { 
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  setSelectedCourse: (course: Course) => void;
  isStandalone?: boolean;
}) => {
  const categories = [
    "Tutti i corsi",
    "Sicurezza lavoratori",
    "Attrezzature",
    "Dirigente - Preposto",
    "Utilizzo diisocianati",
    "Datore di lavoro",
    "HACCP",
    "RLS",
    "Privacy e protezione dei dati"
  ];

  const filteredCourses = useMemo(() => {
    return courses.filter(course => {
      const matchesCategory = 
        (selectedCategory === "Tutti i corsi" && course.category !== "Corsi per Professionisti" && course.category !== "Soft Skills") || 
        (selectedCategory === "Corsi E-learning" && course.category !== "Corsi per Professionisti" && course.category !== "Soft Skills") ||
        course.category === selectedCategory;
      
      const matchesSearch = 
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (course.description?.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (course.category.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (course.objectives?.some(obj => obj.toLowerCase().includes(searchQuery.toLowerCase()))) ||
        (course.syllabus?.some(mod => mod.title.toLowerCase().includes(searchQuery.toLowerCase()))) ||
        (course.fullDescription?.some(p => p.toLowerCase().includes(searchQuery.toLowerCase())));
      
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <main id="catalog" className={`flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${isStandalone ? 'py-24' : 'py-16 lg:py-24'}`}>
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
        <div className="max-w-xl">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            {selectedCategory === "Corsi per Professionisti" ? "Corsi per Professionisti" : "Catalogo Corsi in e-learning"}
          </h2>
          <p className="text-slate-500 text-lg">
            Scegli tra oltre 50 corsi specializzati. Filtra per categoria o cerca il corso specifico per le tue esigenze.
          </p>
        </div>
        
        <div className="relative w-full lg:w-96">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
          <input 
            type="text" 
            placeholder="Cerca un corso..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 bg-white border border-slate-200 rounded-2xl focus:ring-2 focus:ring-brand focus:border-transparent outline-none transition-all shadow-sm"
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-2 mb-12">
        {categories.filter(cat => cat !== "Corsi per Professionisti").map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
              selectedCategory === cat || (cat === "Tutti i corsi" && selectedCategory === "Corsi E-learning")
              ? "bg-brand text-brand-dark shadow-lg shadow-brand/20" 
              : "bg-white text-slate-600 border border-slate-200 hover:border-brand hover:text-brand"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredCourses.map((course) => (
            <CourseCard 
              key={course.id} 
              course={course} 
              onOpen={(c) => setSelectedCourse(c)}
            />
          ))}
        </AnimatePresence>
      </div>

      {filteredCourses.length === 0 && (
        <div className="text-center py-20">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-slate-100 rounded-full mb-6">
            <Search className="w-10 h-10 text-slate-400" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">Nessun corso trovato</h3>
          <p className="text-slate-500">Prova a cambiare i filtri o la tua ricerca.</p>
        </div>
      )}
    </main>
  );
};

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("Tutti i corsi");
  const [searchQuery, setSearchQuery] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [currentView, setCurrentView] = useState<'home' | 'about' | 'mobile-center' | 'gwo-training' | 'dlgs-81-08' | 'gallery' | 'elearning' | 'professionisti' | 'rls-page' | 'rls-update-page' | 'rls-update-8-page' | 'antincendio-l1' | 'antincendio-l2' | 'antincendio-l3' | 'antincendio-update-l1' | 'antincendio-update-l2' | 'antincendio-update-l3' | 'corso-primo-soccorso-gruppo-a' | 'primo-soccorso-bc' | 'aggiornamento-ps-a' | 'aggiornamento-ps-bc'>('home');
  const [showCookieBanner, setShowCookieBanner] = useState(true);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showCookieModal, setShowCookieModal] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const isPopState = useRef(false);

  const navigateToView = (view: typeof currentView, category?: string) => {
    setCurrentView(view);
    if (category) setSelectedCategory(category);
    
    let path = '/';
    if (view === 'rls-page') {
      path = '/corso-rls-rappresentante-lavoratori-sicurezza';
    } else if (view === 'rls-update-page') {
      path = '/corso-rls-aggiornamento-4-ore';
    } else if (view === 'rls-update-8-page') {
      path = '/corso-rls-aggiornamento-8-ore';
    } else if (view === 'antincendio-l1') {
      path = '/corso-antincendio-livello-1-rischio-basso';
    } else if (view === 'antincendio-l2') {
      path = '/corso-antincendio-livello-2-rischio-medio';
    } else if (view === 'antincendio-l3') {
      path = '/corso-antincendio-livello-3-rischio-alto';
    } else if (view === 'antincendio-update-l1') {
      path = '/aggiornamento-antincendio-livello-1';
    } else if (view === 'antincendio-update-l2') {
      path = '/aggiornamento-antincendio-livello-2';
    } else if (view === 'antincendio-update-l3') {
      path = '/aggiornamento-antincendio-livello-3';
    } else if (view === 'corso-primo-soccorso-gruppo-a') {
      path = '/corso-primo-soccorso-gruppo-a';
    } else if (view === 'primo-soccorso-bc') {
      path = '/corso-primo-soccorso-gruppo-b-c';
    } else if (view === 'aggiornamento-ps-a') {
      path = '/aggiornamento-primo-soccorso-gruppo-a';
    } else if (view === 'aggiornamento-ps-bc') {
      path = '/aggiornamento-primo-soccorso-gruppo-b-c';
    }
    
    window.history.pushState({ view, category: category || selectedCategory }, '', path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handleCourseOpen = (course: Course) => {
    if (course.id === "50") {
      navigateToView('rls-page');
    } else if (course.id === "48") {
      navigateToView('rls-update-page');
    } else if (course.id === "49") {
      navigateToView('rls-update-8-page');
    } else if (course.id === "1") {
      navigateToView('antincendio-l1');
    } else if (course.id === "2") {
      navigateToView('antincendio-l2');
    } else if (course.id === "3") {
      navigateToView('antincendio-l3');
    } else if (course.id === "4") {
      navigateToView('antincendio-update-l1');
    } else if (course.id === "5") {
      navigateToView('antincendio-update-l2');
    } else if (course.id === "6") {
      navigateToView('antincendio-update-l3');
    } else if (course.id === "ps-a") {
      navigateToView('corso-primo-soccorso-gruppo-a');
    } else if (course.id === "ps-bc") {
      navigateToView('primo-soccorso-bc');
    } else if (course.id === "aggiornamento-ps-a") {
      navigateToView('aggiornamento-ps-a');
    } else if (course.id === "aggiornamento-ps-bc") {
      navigateToView('aggiornamento-ps-bc');
    } else {
      setSelectedCourse(course);
    }
  };

  // Gestione della cronologia del browser per navigazione SPA e parametri URL
  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      isPopState.current = true;
      
      // Se c'è uno stato nella cronologia, lo usiamo
      if (event.state) {
        setCurrentView(event.state.view || 'home');
        setSelectedCategory(event.state.category || 'Tutti i corsi');
        
        if (event.state.courseId) {
          const course = courses.find(c => c.id === event.state.courseId);
          if (course) setSelectedCourse(course);
        } else {
          setSelectedCourse(null);
        }
      } else {
        // Altrimenti controlliamo i parametri URL
        const params = new URLSearchParams(window.location.search);
        const courseId = params.get('corso');
        if (courseId) {
          const course = courses.find(c => c.id === courseId);
          if (course) setSelectedCourse(course);
        } else {
          setSelectedCourse(null);
        }
      }
      
      setIsMenuOpen(false);
      setTimeout(() => { isPopState.current = false; }, 0);
    };

    window.addEventListener('popstate', handlePopState);
    
    // Controllo iniziale al caricamento della pagina
    const path = window.location.pathname;
    if (path === '/corso-rls-rappresentante-lavoratori-sicurezza') {
      setCurrentView('rls-page');
    } else if (path === '/corso-rls-aggiornamento-4-ore') {
      setCurrentView('rls-update-page');
    } else if (path === '/corso-rls-aggiornamento-8-ore') {
      setCurrentView('rls-update-8-page');
    } else if (path === '/corso-antincendio-livello-1-rischio-basso') {
      setCurrentView('antincendio-l1');
    } else if (path === '/corso-antincendio-livello-2-rischio-medio') {
      setCurrentView('antincendio-l2');
    } else if (path === '/corso-antincendio-livello-3-rischio-alto') {
      setCurrentView('antincendio-l3');
    } else if (path === '/aggiornamento-antincendio-livello-1') {
      setCurrentView('antincendio-update-l1');
    } else if (path === '/aggiornamento-antincendio-livello-2') {
      setCurrentView('antincendio-update-l2');
    } else if (path === '/aggiornamento-antincendio-livello-3') {
      setCurrentView('antincendio-update-l3');
    } else {
      const params = new URLSearchParams(window.location.search);
      const courseId = params.get('corso');
      if (courseId) {
        const course = courses.find(c => c.id === courseId);
        if (course) {
          setSelectedCourse(course);
          // Se il corso è per professionisti, cambiamo vista
          if (course.category === "Corsi per Professionisti") {
            setCurrentView('professionisti');
            setSelectedCategory("Corsi per Professionisti");
          } else {
            setCurrentView('elearning');
          }
        }
      }
    }

    // Stato iniziale se non presente
    if (!window.history.state) {
      const initialParams = new URLSearchParams(window.location.search);
      const initialCourseId = initialParams.get('corso');
      window.history.replaceState({ 
        view: currentView, 
        category: selectedCategory,
        courseId: initialCourseId || null 
      }, '');
    }

    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Sincronizza lo stato con la cronologia e l'URL quando cambia
  useEffect(() => {
    if (!isPopState.current) {
      const params = new URLSearchParams(window.location.search);
      const currentCourseIdInUrl = params.get('corso');
      
      const newState = { 
        view: currentView, 
        category: selectedCategory,
        courseId: selectedCourse?.id || null 
      };

      // Aggiorna il parametro URL 'corso'
      if (selectedCourse) {
        params.set('corso', selectedCourse.id);
      } else {
        params.delete('corso');
      }

      const searchString = params.toString();
      const newUrl = searchString ? `?${searchString}` : window.location.pathname;
      
      const currentState = window.history.state;
      if (currentState?.view !== newState.view || 
          currentState?.category !== newState.category ||
          currentState?.courseId !== newState.courseId ||
          currentCourseIdInUrl !== (selectedCourse?.id || null)) {
        
        window.history.pushState(newState, '', newUrl);
      }
    }
  }, [currentView, selectedCategory, selectedCourse]);

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView]);

  return (
    <div className="min-h-screen flex flex-col">
      <AnimatePresence>
        {selectedCourse && (
          <CourseModal 
            course={selectedCourse} 
            onClose={() => setSelectedCourse(null)} 
          />
        )}
      </AnimatePresence>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center gap-4">
            <div 
              onClick={() => setCurrentView('home')}
              className="flex-shrink-0 flex items-center gap-0 group cursor-pointer"
            >
              <img 
                src="https://aliseogroup.my.canva.site/logo-sito/_assets/media/6b84cdbe6502e325caca62beb9c2d9b2.png" 
                alt="Aliseo Academy Logo" 
                className="h-10 2xl:h-12 w-auto object-contain"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const fallback = e.currentTarget.parentElement?.querySelector('.logo-fallback');
                  if (fallback) fallback.classList.remove('hidden');
                }}
              />
              <img 
                src="/simbolo-logo.png" 
                alt="Simbolo Aliseo" 
                className="h-40 2xl:h-48 w-auto object-contain -ml-12"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <div className="logo-fallback hidden flex flex-col -space-y-1">
                <span className="text-lg 2xl:text-xl font-black tracking-tighter text-slate-900 uppercase">Aliseo</span>
                <span className="text-[10px] 2xl:text-sm font-bold tracking-[0.2em] text-brand uppercase">Academy</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-3 xl:space-x-4 2xl:space-x-6">
              <button 
                onClick={() => navigateToView('about')}
                className="text-[13px] xl:text-sm font-bold text-slate-600 hover:text-brand transition-colors whitespace-nowrap"
              >
                Chi Siamo
              </button>
              <button 
                onClick={() => navigateToView('professionisti', "Corsi per Professionisti")}
                className={`text-[13px] xl:text-sm font-bold transition-colors whitespace-nowrap ${currentView === 'professionisti' ? 'text-brand' : 'text-slate-600 hover:text-brand'}`}
              >
                Corsi per Professionisti
              </button>
              <button 
                onClick={() => {
                  const contacts = document.getElementById('contacts');
                  if (contacts) contacts.scrollIntoView({ behavior: 'smooth' });
                }}
                className="text-[13px] xl:text-sm font-bold text-slate-600 hover:text-brand transition-colors whitespace-nowrap"
              >
                Contatti
              </button>
              <button 
                onClick={() => navigateToView('mobile-center')}
                className={`text-[13px] xl:text-sm font-bold transition-colors flex items-center gap-1 whitespace-nowrap ${currentView === 'mobile-center' ? 'text-brand' : 'text-slate-600 hover:text-brand'}`}
              >
                Centro Mobile
                <Play className="w-3 h-3" />
              </button>
              <button 
                onClick={() => navigateToView('elearning', "Tutti i corsi")}
                className={`text-[13px] xl:text-sm font-bold transition-colors whitespace-nowrap ${currentView === 'elearning' ? 'text-brand' : 'text-slate-600 hover:text-brand'}`}
              >
                Corsi E-learning
              </button>
              <button 
                onClick={() => navigateToView('dlgs-81-08')}
                className={`text-[13px] xl:text-sm font-bold transition-colors whitespace-nowrap ${currentView === 'dlgs-81-08' ? 'text-brand' : 'text-slate-600 hover:text-brand'}`}
              >
                Corsi D.Lgs 81/08
              </button>
              <button 
                onClick={() => navigateToView('gwo-training')}
                className={`text-[13px] xl:text-sm font-bold transition-colors whitespace-nowrap ${currentView === 'gwo-training' ? 'text-brand' : 'text-slate-600 hover:text-brand'}`}
              >
                Corsi GWO Training
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-slate-600">
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="xl:hidden bg-white border-b border-slate-100 overflow-hidden"
            >
              <div className="px-4 py-6 space-y-4">
                <button 
                  onClick={() => navigateToView('elearning', "Tutti i corsi")}
                  className={`block w-full text-left text-lg font-bold ${currentView === 'elearning' ? 'text-brand' : 'text-slate-900'}`}
                >
                  Corsi E-learning
                </button>
                <button 
                  onClick={() => navigateToView('professionisti', "Corsi per Professionisti")}
                  className={`block w-full text-left text-lg font-bold ${currentView === 'professionisti' ? 'text-brand' : 'text-slate-900'}`}
                >
                  Corsi per Professionisti
                </button>
                <button 
                  onClick={() => navigateToView('about')}
                  className="block w-full text-left text-lg font-bold text-slate-900"
                >
                  Chi Siamo
                </button>
                <button 
                  onClick={() => {
                    setIsMenuOpen(false);
                    const contacts = document.getElementById('contacts');
                    if (contacts) contacts.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block w-full text-left text-lg font-bold text-slate-900"
                >
                  Contatti
                </button>
                <button 
                  onClick={() => navigateToView('dlgs-81-08')}
                  className="block w-full text-left text-lg font-bold text-slate-900"
                >
                  Corsi D.Lgs 81/08
                </button>
                <button 
                  onClick={() => navigateToView('gwo-training')}
                  className={`block w-full text-left text-lg font-bold ${currentView === 'gwo-training' ? 'text-brand' : 'text-slate-900'}`}
                >
                  Corsi GWO Training
                </button>
                <button 
                  onClick={() => navigateToView('mobile-center')}
                  className="block w-full text-left text-lg font-bold text-brand flex items-center gap-2"
                >
                  Centro Formativo Mobile
                  <Play className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {currentView !== 'home' && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
            <button 
              onClick={() => window.history.back()}
              className="flex items-center gap-2 text-slate-500 hover:text-brand transition-colors font-bold uppercase tracking-tight text-sm group"
            >
              <ChevronLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
              Torna Indietro
            </button>
          </div>
        )}
        {currentView === 'home' ? (
        <>
          <HeroSection setCurrentView={navigateToView} setSelectedCategory={setSelectedCategory} />
          <CatalogSection 
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            setSelectedCourse={handleCourseOpen}
          />
        </>
      ) : currentView === 'elearning' ? (
        <CatalogSection 
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setSelectedCourse={handleCourseOpen}
          isStandalone={true}
        />
      ) : currentView === 'professionisti' ? (
        <CatalogSection 
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setSelectedCourse={handleCourseOpen}
          isStandalone={true}
        />
      ) : currentView === 'about' ? (
        <AboutSection setCurrentView={navigateToView} />
      ) : currentView === 'mobile-center' ? (
        <MobileCenterSection setCurrentView={navigateToView} setActiveVideo={setActiveVideo} />
      ) : currentView === 'gwo-training' ? (
        <GWOTrainingSection setCurrentView={navigateToView} />
      ) : currentView === 'gallery' ? (
        <GallerySection setCurrentView={navigateToView} />
      ) : currentView === 'rls-page' ? (
        <RLSPage onNavigate={navigateToView} />
      ) : currentView === 'rls-update-page' ? (
        <RLSUpdatePage onNavigate={navigateToView} />
      ) : currentView === 'rls-update-8-page' ? (
        <RLSUpdate8Page onNavigate={navigateToView} />
      ) : currentView === 'antincendio-l1' ? (
        <AntincendioL1Page onNavigate={navigateToView} />
      ) : currentView === 'antincendio-l2' ? (
        <AntincendioL2Page onNavigate={navigateToView} />
      ) : currentView === 'antincendio-l3' ? (
        <AntincendioL3Page onNavigate={navigateToView} />
      ) : currentView === 'antincendio-update-l1' ? (
        <AntincendioUpdateL1Page onNavigate={navigateToView} />
      ) : currentView === 'antincendio-update-l2' ? (
        <AntincendioUpdateL2Page onNavigate={navigateToView} />
      ) : currentView === 'antincendio-update-l3' ? (
        <AntincendioUpdateL3Page onNavigate={navigateToView} />
      ) : currentView === 'corso-primo-soccorso-gruppo-a' ? (
        <PrimoSoccorsoGruppoAPage onNavigate={navigateToView} />
      ) : currentView === 'primo-soccorso-bc' ? (
        <PrimoSoccorsoGruppoBCPage onNavigate={navigateToView} />
      ) : currentView === 'aggiornamento-ps-a' ? (
        <AggiornamentoPrimoSoccorsoGruppoAPage onNavigate={navigateToView} />
      ) : currentView === 'aggiornamento-ps-bc' ? (
        <AggiornamentoPrimoSoccorsoGruppoBCPage onNavigate={navigateToView} />
      ) : (
        <DLGS8108Section setCurrentView={navigateToView} />
      )}
      </main>

  {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="space-y-6">
              <div className="flex items-center gap-0 mb-6">
                <img 
                  src="https://aliseogroup.my.canva.site/logo-sito/_assets/media/6b84cdbe6502e325caca62beb9c2d9b2.png" 
                  alt="Aliseo Academy Logo" 
                  className="h-10 w-auto object-contain brightness-0 invert"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const fallback = e.currentTarget.parentElement?.querySelector('.logo-fallback-footer');
                    if (fallback) fallback.classList.remove('hidden');
                  }}
                />
                <img 
                  src="/simbolo-logo.png" 
                  alt="Simbolo Aliseo" 
                  className="h-40 w-auto object-contain brightness-0 invert -ml-12"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="logo-fallback-footer hidden flex flex-col -space-y-1">
                  <span className="text-lg font-black tracking-tighter text-white uppercase leading-none">Aliseo</span>
                  <span className="text-[10px] font-bold tracking-[0.2em] text-brand uppercase leading-none">Academy</span>
                </div>
              </div>
              <p className="text-sm leading-relaxed">
                Partner affidabile per la formazione aziendale e la consulenza sulla sicurezza. 
                Qualità, professionalità e innovazione al servizio della tua impresa.
              </p>
              <div className="flex space-x-4">
                {/* Social icons could go here */}
              </div>
            </div>

            <div id="contacts">
              <h4 className="text-white font-bold mb-6">Contatti</h4>
              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-brand shrink-0" />
                  <a href="tel:+393274789581" className="hover:text-brand transition-colors">+39 327 4789581</a>
                </li>
                <li className="flex items-start gap-3">
                  <PhoneCall className="w-5 h-5 text-brand shrink-0" />
                  <a href="tel:05711556420" className="hover:text-brand transition-colors">0571 1556420</a>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-brand shrink-0" />
                  <a href="mailto:commerciale@aliseogroup.it" className="hover:text-brand transition-colors">commerciale@aliseogroup.it</a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-brand shrink-0" />
                  <span>Viale Bruno Buozzi 14,<br />50059 Empoli (FI)</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Link Utili</h4>
              <ul className="space-y-4 text-sm">
                <li>
                  <button 
                    onClick={() => navigateToView('home')}
                    className="hover:text-brand transition-colors cursor-pointer"
                  >
                    Tutti i Corsi
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => navigateToView('about')}
                    className="hover:text-brand transition-colors cursor-pointer"
                  >
                    Chi Siamo
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => navigateToView('dlgs-81-08')}
                    className="hover:text-brand transition-colors flex items-center gap-2 cursor-pointer"
                  >
                    Corsi D.Lgs 81/08
                    <Shield className="w-3 h-3" />
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => navigateToView('gwo-training')}
                    className="hover:text-brand transition-colors flex items-center gap-2 cursor-pointer"
                  >
                    Corsi GWO Training
                    <Shield className="w-3 h-3" />
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => navigateToView('mobile-center')}
                    className="hover:text-brand transition-colors flex items-center gap-2 cursor-pointer"
                  >
                    Centro Formativo Mobile
                    <Play className="w-3 h-3" />
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setShowPrivacyModal(true)}
                    className="hover:text-brand transition-colors cursor-pointer"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setShowCookieModal(true)}
                    className="hover:text-brand transition-colors cursor-pointer"
                  >
                    Cookie Policy
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => setShowTermsModal(true)}
                    className="hover:text-brand transition-colors cursor-pointer"
                  >
                    Termini e Condizioni
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Newsletter</h4>
              <p className="text-sm mb-4">Rimani aggiornato sulle ultime novità normative e nuovi corsi.</p>
              <div className="flex flex-col gap-3">
                <div className="flex gap-2">
                  <input 
                    type="email" 
                    placeholder="Email" 
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm outline-none focus:border-brand w-full"
                  />
                  <button 
                    onClick={() => {
                      if (newsletterEmail) {
                        window.location.href = `mailto:commerciale@aliseogroup.it?subject=Iscrizione Newsletter&body=Richiesta iscrizione per: ${newsletterEmail}`;
                      }
                    }}
                    className="bg-brand text-brand-dark p-2 rounded-lg hover:opacity-90 transition-colors"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
                <label className="flex items-start gap-2 cursor-pointer group">
                  <input type="checkbox" className="mt-1 accent-brand" />
                  <span className="text-[10px] leading-tight group-hover:text-slate-300 transition-colors">
                    Accetto la <button onClick={(e) => { e.preventDefault(); setShowPrivacyModal(true); }} className="text-brand hover:underline">Privacy Policy</button> per l'invio di comunicazioni commerciali.
                  </span>
                </label>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/5 text-[11px] leading-relaxed">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="font-bold text-white mb-1">Aliseo Group S.r.l.</p>
                <p>Sede Legale: Viale Bruno Buozzi 14, 50059 Empoli (FI)</p>
                <p>P.IVA e C.F.: 06477040486 | REA: FI-631245</p>
                <p>Capitale Sociale: € 10.000,00 i.v.</p>
              </div>
              <div className="md:text-right flex flex-col justify-end">
                <p>© {new Date().getFullYear()} Aliseo Academy. Tutti i diritti riservati.</p>
                <p>Sito realizzato in conformità al GDPR (UE 2016/679).</p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Cookie Banner */}
      <AnimatePresence>
        {showCookieBanner && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-0 left-0 right-0 z-[100] p-4"
          >
            <div className="max-w-4xl mx-auto bg-slate-900 border border-white/10 rounded-2xl shadow-2xl p-6 md:p-8 backdrop-blur-xl">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-grow">
                  <h5 className="text-white font-bold mb-2">Informativa sui Cookie</h5>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Utilizziamo i cookie per migliorare la tua esperienza sul nostro sito. Alcuni sono necessari per il funzionamento, altri ci aiutano a capire come utilizzi il sito. Puoi accettarli tutti o gestire le tue preferenze. Consulta la nostra <button onClick={() => setShowCookieModal(true)} className="text-brand hover:underline">Cookie Policy</button>.
                  </p>
                </div>
                <div className="flex gap-3 shrink-0 w-full md:w-auto">
                  <button 
                    onClick={() => setShowCookieBanner(false)}
                    className="flex-1 md:flex-none px-6 py-2.5 text-sm font-bold text-slate-300 hover:text-white transition-colors"
                  >
                    Personalizza
                  </button>
                  <button 
                    onClick={() => setShowCookieBanner(false)}
                    className="flex-1 md:flex-none px-8 py-2.5 bg-brand text-brand-dark rounded-xl text-sm font-bold hover:opacity-90 transition-all shadow-lg shadow-brand/20"
                  >
                    Accetta Tutti
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Legal Modals */}
      <AnimatePresence>
        {(showPrivacyModal || showCookieModal || showTermsModal) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm"
            onClick={() => { setShowPrivacyModal(false); setShowCookieModal(false); setShowTermsModal(false); }}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white w-full max-w-4xl max-h-[80vh] overflow-y-auto rounded-3xl shadow-2xl p-8 md:p-12 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => { setShowPrivacyModal(false); setShowCookieModal(false); setShowTermsModal(false); }}
                className="absolute top-6 right-6 p-2 hover:bg-slate-100 rounded-full transition-colors"
              >
                <X className="w-6 h-6 text-slate-400" />
              </button>

              <div className="prose prose-slate max-w-none">
                {showTermsModal ? (
                  <>
                    <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tighter">Termini e Condizioni</h2>
                    
                    <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">1. Oggetto</h3>
                    <p className="text-slate-600">
                      Il presente sito web è gestito da <strong>Aliseo Group S.r.l.</strong> e ha lo scopo di fornire informazioni sui servizi di formazione erogati.
                    </p>

                    <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">2. Servizi offerti</h3>
                    <p className="text-slate-600">
                      Aliseo Academy eroga corsi di formazione in materia di sicurezza sul lavoro e formazione per il settore eolico.
                    </p>

                    <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">3. Iscrizione ai corsi</h3>
                    <p className="text-slate-600">
                      L'iscrizione ai corsi avviene tramite contatto diretto con l'azienda o tramite i moduli presenti sul sito.
                    </p>

                    <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">4. Responsabilità</h3>
                    <p className="text-slate-600">
                      Le informazioni presenti sul sito sono fornite a scopo informativo e possono essere soggette a modifiche.
                    </p>

                    <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">5. Proprietà intellettuale</h3>
                    <p className="text-slate-600">
                      Tutti i contenuti del sito (testi, immagini, loghi) sono proprietà di <strong>Aliseo Group S.r.l.</strong> e non possono essere utilizzati senza autorizzazione.
                    </p>

                    <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">6. Legge applicabile</h3>
                    <p className="text-slate-600">
                      Le presenti condizioni sono regolate dalla legge italiana.
                    </p>
                  </>
                ) : showPrivacyModal ? (
                  <>
                    <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tighter">Privacy Policy</h2>
                    <p className="text-slate-600 mb-4">Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}</p>
                    
                    <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">1. Titolare del Trattamento</h3>
                    <p className="text-slate-600">
                      Il Titolare del trattamento è <strong>Aliseo Group S.r.l.</strong>, con sede legale in Viale Bruno Buozzi 14, 50059 Empoli (FI). 
                      Email di contatto: commerciale@aliseogroup.it
                    </p>

                    <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">2. Tipologia di dati raccolti</h3>
                    <p className="text-slate-600">
                      I dati personali raccolti tramite questo sito includono: nome, email, numero di telefono (se forniti volontariamente tramite i moduli di contatto) e dati di navigazione (indirizzo IP, tipo di browser).
                    </p>

                    <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">3. Finalità del trattamento</h3>
                    <p className="text-slate-600">
                      I dati sono trattati per le seguenti finalità:
                    </p>
                    <ul className="list-disc pl-6 text-slate-600 space-y-2">
                      <li>Rispondere alle richieste di informazioni inviate tramite i moduli.</li>
                      <li>Inviare comunicazioni commerciali e newsletter (previo consenso esplicito).</li>
                      <li>Adempiere agli obbligo di legge.</li>
                      <li>Migliorare l'esperienza di navigazione sul sito.</li>
                    </ul>

                    <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">4. Base giuridica</h3>
                    <p className="text-slate-600">
                      Il trattamento si basa sul consenso dell'interessato, sull'esecuzione di un contratto o di misure precontrattuali e sull'adempimento di obblighi legali.
                    </p>

                    <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">5. Diritti dell'interessato</h3>
                    <p className="text-slate-600">
                      Ai sensi del GDPR (UE 2016/679), l'utente ha il diritto di accedere ai propri dati, chiederne la rettifica, la cancellazione o la limitazione del trattamento. Può inoltre opporsi al trattamento e ha il diritto alla portabilità dei dati.
                    </p>
                  </>
                ) : (
                  <>
                    <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-tighter">Cookie Policy</h2>
                    <p className="text-slate-600 mb-4">Ultimo aggiornamento: {new Date().toLocaleDateString('it-IT')}</p>

                    <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Cosa sono i cookie</h3>
                    <p className="text-slate-600">
                      I cookie sono piccoli file di testo che i siti visitati dall'utente inviano al suo terminale, dove vengono memorizzati per essere poi ritrasmessi agli stessi siti alla successiva visita del medesimo utente.
                    </p>

                    <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Tipologie di cookie utilizzati</h3>
                    <div className="space-y-4">
                      <div className="p-4 bg-slate-50 rounded-xl">
                        <p className="font-bold text-slate-900">Cookie Tecnici</p>
                        <p className="text-sm text-slate-600">Necessari per il corretto funzionamento del sito e per salvare le preferenze dell'utente (es. accettazione dei cookie).</p>
                      </div>
                      <div className="p-4 bg-slate-50 rounded-xl">
                        <p className="font-bold text-slate-900">Cookie Analitici</p>
                        <p className="text-sm text-slate-600">Utilizzati per raccogliere informazioni in forma aggregata sul numero degli utenti e su come questi visitano il sito.</p>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4">Gestione dei cookie</h3>
                    <p className="text-slate-600">
                      L'utente può gestire le preferenze relative ai cookie direttamente all'interno del proprio browser ed impedire – ad esempio – che terze parti possano installarne. Tramite le preferenze del browser è inoltre possibile eliminare i cookie installati in passato.
                    </p>
                  </>
                )}
                
                <div className="mt-12 pt-8 border-t border-slate-100 flex justify-end">
                  <button 
                    onClick={() => { setShowPrivacyModal(false); setShowCookieModal(false); setShowTermsModal(false); }}
                    className="px-8 py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-colors"
                  >
                    Ho capito
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[400] bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
            onClick={() => setActiveVideo(null)}
          >
            <button 
              onClick={() => setActiveVideo(null)}
              className="absolute top-6 right-6 z-[410] p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="relative w-full max-w-5xl aspect-video rounded-3xl overflow-hidden shadow-2xl bg-black" onClick={e => e.stopPropagation()}>
              {activeVideo.includes('canva.com') ? (
                <iframe 
                  src={activeVideo}
                  className="w-full h-full border-0"
                  allow="autoplay; fullscreen"
                  title="Video Player"
                />
              ) : (
                <video 
                  key={activeVideo}
                  controls 
                  autoPlay 
                  className="w-full h-full"
                  playsInline
                >
                  <source src={activeVideo} type="video/mp4" />
                  Il tuo browser non supporta il tag video.
                </video>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
