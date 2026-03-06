/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Shield, 
  BookOpen, 
  Clock, 
  Euro, 
  Search, 
  ChevronRight, 
  Menu, 
  X, 
  Phone, 
  PhoneCall,
  Mail, 
  MapPin,
  CheckCircle2,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { courses, categories } from './data/courses';
import { Course } from './types';

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
        <span className="px-3 py-1 bg-brand/10 text-brand-dark text-xs font-semibold rounded-full uppercase tracking-wider">
          {course.category}
        </span>
        <div className="p-2 bg-slate-50 rounded-lg group-hover:bg-brand/10 transition-colors">
          <BookOpen className="w-5 h-5 text-slate-400 group-hover:text-brand" />
        </div>
      </div>
      
      <h3 className="text-lg font-bold text-slate-900 mb-4 flex-grow leading-tight group-hover:text-brand transition-colors">
        {course.title}
      </h3>
      
      <div className="space-y-3 mb-6">
        <div className="flex items-center text-slate-500 text-sm">
          <Clock className="w-4 h-4 mr-2 text-slate-400" />
          <span>{course.duration} • {course.lessons} lezioni</span>
        </div>
        <div className="flex items-center text-brand font-bold text-lg">
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
            <div className="flex items-center gap-2 px-4 py-2 bg-brand/10 rounded-xl border border-brand/20">
              <Euro className="w-5 h-5 text-brand" />
              <div className="text-sm">
                <p className="text-brand-dark font-medium uppercase text-[10px] tracking-wider opacity-60">Prezzo</p>
                <p className="text-brand-dark font-bold">{course.price}</p>
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

const AboutSection = ({ setCurrentView }: { setCurrentView: (view: 'home' | 'about') => void }) => {
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
                <a 
                  href="https://aliseo-academy-eccellenz-hd07985.gamma.site/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-brand text-brand-dark rounded-2xl font-bold hover:opacity-90 transition-all shadow-xl shadow-brand/20"
                >
                  Centro Formativo Mobile
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </motion.div>
  );
};

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState("Tutti i corsi");
  const [searchQuery, setSearchQuery] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [currentView, setCurrentView] = useState<'home' | 'about'>('home');

  const filteredCourses = useMemo(() => {
    return courses.filter(course => {
      const matchesCategory = selectedCategory === "Tutti i corsi" || course.category === selectedCategory;
      const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

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
          <div className="flex justify-between h-20 items-center">
            <div className="flex items-center gap-3">
              <div 
                onClick={() => setCurrentView('home')}
                className="flex items-center gap-2 group cursor-pointer"
              >
                <svg 
                  width="40" 
                  height="40" 
                  viewBox="0 0 40 40" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="drop-shadow-sm"
                >
                  <circle cx="20" cy="20" r="20" fill="black"/>
                  <path d="M20 10V20L30 24" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M10 26L18 20L14 32" stroke="#E2E831" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M30 26L22 20L34 14" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <div className="flex flex-col -space-y-1">
                  <span className="text-xl font-black tracking-tighter text-slate-900 uppercase">Aliseo</span>
                  <span className="text-sm font-bold tracking-[0.2em] text-brand uppercase">Academy</span>
                </div>
              </div>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => {
                  setCurrentView('home');
                  setSelectedCategory("Tutti i corsi");
                  setTimeout(() => {
                    document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="text-sm font-medium text-slate-600 hover:text-brand transition-colors cursor-pointer"
              >
                Corsi
              </button>
              <button 
                onClick={() => {
                  setCurrentView('home');
                  setSelectedCategory("Corsi per Professionisti");
                  setTimeout(() => {
                    document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="text-sm font-bold text-brand hover:opacity-80 transition-colors cursor-pointer"
              >
                Corsi per Professionisti
              </button>
              <button 
                onClick={() => setCurrentView('about')}
                className={`text-sm font-medium transition-colors cursor-pointer ${currentView === 'about' ? 'text-brand' : 'text-slate-600 hover:text-brand'}`}
              >
                Chi Siamo
              </button>
              <a href="mailto:commerciale@aliseogroup.it" className="text-sm font-medium text-slate-600 hover:text-brand transition-colors">Contatti</a>
              <a 
                href="https://aliseo-academy-eccellenz-hd07985.gamma.site/"
                target="_blank"
                rel="noreferrer"
                className="text-sm font-bold text-brand hover:opacity-80 transition-colors flex items-center gap-1"
              >
                Centro Formativo Mobile
                <ExternalLink className="w-3 h-3" />
              </a>
              <button className="px-6 py-2.5 bg-brand text-brand-dark rounded-full text-sm font-semibold hover:opacity-90 transition-all shadow-lg shadow-brand/20">
                Area Riservata
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
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
              className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
            >
              <div className="px-4 py-6 space-y-4">
                <button 
                  onClick={() => {
                    setCurrentView('home');
                    setSelectedCategory("Tutti i corsi");
                    setIsMenuOpen(false);
                    setTimeout(() => {
                      document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="block w-full text-left text-lg font-medium text-slate-900"
                >
                  Corsi
                </button>
                <button 
                  onClick={() => {
                    setCurrentView('home');
                    setSelectedCategory("Corsi per Professionisti");
                    setIsMenuOpen(false);
                    setTimeout(() => {
                      document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="block w-full text-left text-lg font-bold text-brand"
                >
                  Corsi per Professionisti
                </button>
                <button 
                  onClick={() => {
                    setCurrentView('about');
                    setIsMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="block w-full text-left text-lg font-medium text-slate-900"
                >
                  Chi Siamo
                </button>
                <a href="mailto:commerciale@aliseogroup.it" className="block text-lg font-medium text-slate-900">Contatti</a>
                <a 
                  href="https://aliseo-academy-eccellenz-hd07985.gamma.site/"
                  target="_blank"
                  rel="noreferrer"
                  className="block text-lg font-bold text-brand flex items-center gap-2"
                >
                  Centro Formativo Mobile
                  <ExternalLink className="w-4 h-4" />
                </a>
                <button className="w-full py-3 bg-brand text-brand-dark rounded-xl font-semibold">
                  Area Riservata
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      {currentView === 'home' ? (
        <>
          <header className="relative py-20 lg:py-32 overflow-hidden bg-brand-dark">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#E2E831,transparent_70%)]" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand text-sm font-medium mb-6"
            >
              <CheckCircle2 className="w-4 h-4" />
              Formazione Certificata AIFES
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl lg:text-7xl font-bold text-brand mb-6 leading-[1.1] tracking-tight font-mono"
            >
              Aliseo Academy: Eccellenza nella Formazione e Sicurezza sul Lavoro
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-400 mb-10 leading-relaxed"
            >
              Aliseo Group offre soluzioni di formazione all'avanguardia per aziende e professionisti. 
              Semplifica la conformità normativa con i nostri corsi certificati.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <a 
                href="https://wa.me/393274789581"
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 bg-brand text-brand-dark rounded-2xl font-bold text-lg hover:opacity-90 transition-all flex items-center group shadow-xl shadow-brand/20"
              >
                Whatsapp
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <button 
                onClick={() => {
                  setSelectedCategory("Corsi per Professionisti");
                  document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-4 bg-white text-brand border-2 border-brand rounded-2xl font-bold text-lg hover:bg-brand/5 transition-all shadow-lg"
              >
                Corsi per Professionisti
              </button>
              <a 
                href="mailto:commerciale@aliseogroup.it"
                className="px-8 py-4 bg-white/10 text-white border border-white/10 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all backdrop-blur-sm"
              >
                Contattaci
              </a>
              <a 
                href="https://aliseo-academy-eccellenz-hd07985.gamma.site/"
                target="_blank"
                rel="noreferrer"
                className="px-8 py-4 bg-brand text-brand-dark rounded-2xl font-bold text-lg hover:opacity-90 transition-all flex items-center gap-2 shadow-xl shadow-brand/20"
              >
                <ExternalLink className="w-5 h-5" />
                Centro Formativo Mobile
              </a>
            </motion.div>
          </div>
        </div>
      </header>


      {/* Course Explorer */}
      <main id="catalog" className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div className="max-w-xl">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4 tracking-tight">Catalogo Corsi in e-learning</h2>
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

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
                selectedCategory === cat 
                ? "bg-brand text-brand-dark shadow-lg shadow-brand/20" 
                : "bg-white text-slate-600 border border-slate-200 hover:border-brand hover:text-brand"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Course Grid */}
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
    </>
  ) : (
    <AboutSection setCurrentView={setCurrentView} />
  )}

  {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <svg 
                  width="32" 
                  height="32" 
                  viewBox="0 0 40 40" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="20" cy="20" r="20" fill="black"/>
                  <path d="M20 10V20L30 24" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M10 26L18 20L14 32" stroke="#E2E831" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M30 26L22 20L34 14" stroke="white" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <div className="flex flex-col -space-y-1">
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

            <div>
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
                  <span>via paolo Veronese 26,<br />50059 Empoli (FI)</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Link Utili</h4>
              <ul className="space-y-4 text-sm">
                <li>
                  <button 
                    onClick={() => {
                      setCurrentView('home');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-brand transition-colors cursor-pointer"
                  >
                    Tutti i Corsi
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => {
                      setCurrentView('about');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-brand transition-colors cursor-pointer"
                  >
                    Chi Siamo
                  </button>
                </li>
                <li>
                  <a 
                    href="https://aliseo-academy-eccellenz-hd07985.gamma.site/"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-brand transition-colors flex items-center gap-2"
                  >
                    Centro Formativo Mobile
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
                <li><a href="#" className="hover:text-brand transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-brand transition-colors">Termini e Condizioni</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6">Newsletter</h4>
              <p className="text-sm mb-4">Rimani aggiornato sulle ultime novità normative e nuovi corsi.</p>
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
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs uppercase tracking-widest">
            <p>© 2024 Aliseo Group S.r.l. - P.IVA 06477040486</p>
            <p>Sito realizzato con cura per la vostra sicurezza</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
