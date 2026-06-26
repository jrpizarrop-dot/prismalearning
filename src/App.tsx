/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Building2, 
  MonitorPlay, 
  GraduationCap, 
  Lightbulb, 
  Settings, 
  ArrowRight,
  Menu,
  X,
  CheckCircle2,
  Mail,
  Play
} from 'lucide-react';

// Import Pages
import DisenoInstruccional from './pages/DisenoInstruccional.tsx';
import Consultoria from './pages/Consultoria.tsx';
import Capacitacion from './pages/Capacitacion.tsx';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-bg-subtle">
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl -z-10"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-xs font-semibold uppercase tracking-widest text-slate-500 mb-8">
              <span className="w-2 h-2 rounded-full bg-accent"></span>
              Consultoría E-Learning
            </div>
            <h1 className="text-4xl lg:text-6xl font-medium leading-[1.1] text-primary-900 mb-8">
              Transformación Educativa <span className="text-accent italic">Real</span>. Elevando el estándar del e-learning.
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed mb-10 max-w-xl font-light">
              Diseñamos soluciones estratégicas. En Prisma Learning creamos ecosistemas virtuales donde la Inteligencia Artificial, el diseño instruccional superior y la gestión Moodle se intersectan para potenciar a instituciones y corporaciones.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contacto" className="bg-primary-900 text-white px-8 py-4 rounded-sm hover:bg-primary-800 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 font-semibold tracking-wider">
                CONTACTO
                <ArrowRight className="w-4 h-4" />
              </a>
              <button 
                onClick={() => window.dispatchEvent(new Event('open-video-intro'))}
                className="bg-white text-primary-900 border border-slate-200 px-8 py-4 rounded-sm hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm flex items-center justify-center gap-2 font-semibold tracking-wider cursor-pointer"
              >
                <Play className="w-4 h-4 fill-primary-900 text-primary-900" />
                VER INTRODUCCIÓN
              </button>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:h-[600px] rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-xl flex flex-col justify-end p-8"
          >
            <div className="absolute inset-0">
              <img 
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200" 
                alt="Digital Learning Design" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary-900/5 mix-blend-multiply"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DISEÑO INSTRUCCIONAL SECTION */}
      <section id="diseno-instruccional" className="py-24 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl lg:text-5xl font-medium text-primary-900 mb-8 font-serif uppercase tracking-tight">
                DISEÑO <span className="text-accent italic">INSTRUCCIONAL</span>
              </h2>
              <div className="space-y-6 text-lg text-slate-600 font-light leading-relaxed">
                <p>
                  Transformamos contenidos estáticos en experiencias de aprendizaje dinámicas. Aplicamos metodologías basadas en investigación para asegurar la efectividad en universidades y empresas.
                </p>
                <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8 pt-4">
                  {[
                    "Diseño de cursos e-learning",
                    "Rediseño de asignaturas",
                    "Microlearning & SCORM",
                    "Experiencias de aprendizaje"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent" />
                      <span className="text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-8">
                  <Link to="/diseno-instruccional" className="text-primary-900 font-medium inline-flex items-center gap-2 group">
                    Ver detalles del servicio <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 h-[450px] rounded-sm overflow-hidden shadow-2xl relative">
              <img 
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800" 
                alt="Docentes colaborando en planificación" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary-900/20 mix-blend-multiply"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CONSULTORÍA SECTION */}
      <section id="consultoria" className="py-24 bg-primary-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl -z-0 -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="h-[450px] rounded-sm overflow-hidden shadow-2xl relative">
              <img 
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=800" 
                alt="Consulting Session" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary-900/40 mix-blend-multiply"></div>
            </div>
            <div>
              <h2 className="text-3xl lg:text-5xl font-medium mb-8 font-serif uppercase tracking-tight">
                CONSULTORÍA <span className="text-accent italic">ESTRATEGICA</span>
              </h2>
              <p className="text-xl text-primary-100 font-light leading-relaxed mb-8 opacity-90">
                Diagnosticamos el estado digital de su institución y diseñamos la ruta maestra de innovación académica basada en datos y eficiencia.
              </p>
              <div className="space-y-4 mb-10">
                {[
                  "Transformación digital educativa",
                  "Estrategias IA institucional",
                  "Diagnóstico institucional & Auditoría"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
                    <span className="text-primary-100 font-light">{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/consultoria" className="bg-accent text-primary-900 px-8 py-4 rounded-sm font-bold hover:bg-accent-light transition-colors inline-block">
                Conocer nuestro modelo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CAPACITACIÓN SECTION */}
      <section id="capacitacion" className="py-24 bg-bg-subtle relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-5xl font-medium text-primary-900 mb-8 font-serif uppercase tracking-tight">
                CAPACITACIÓN <span className="text-accent italic">& MENTORING</span>
              </h2>
              <p className="text-xl text-slate-600 font-light leading-relaxed mb-10">
                Programas intensivos para docencia y equipos corporativos. Alfabetización en IA, metodologías activas y certificación de competencias.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="p-6 bg-white border border-slate-100 shadow-sm rounded-sm">
                  <GraduationCap className="w-8 h-8 text-accent mb-4" />
                  <h4 className="font-serif text-lg text-primary-900 mb-2">Perfeccionamiento</h4>
                  <p className="text-sm text-slate-500 font-light">Técnicas pedagógicas modernas para el aula híbrida.</p>
                </div>
                <div className="p-6 bg-white border border-slate-100 shadow-sm rounded-sm">
                  <Lightbulb className="w-8 h-8 text-accent mb-4" />
                  <h4 className="font-serif text-lg text-primary-900 mb-2">Innovación IA</h4>
                  <p className="text-sm text-slate-500 font-light">Uso ético y productivo de la IA en la enseñanza.</p>
                </div>
              </div>
              <div className="pt-10">
                <Link to="/capacitacion" className="text-primary-700 font-medium hover:text-primary-900 transition-colors inline-flex items-center gap-2">
                  Explorar oferta formativa <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="h-[450px] rounded-sm overflow-hidden shadow-2xl relative border border-slate-200">
               <img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800" 
                alt="Instruction" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-primary-900/10 mix-blend-multiply"></div>
            </div>
          </div>
        </div>
      </section>

      {/* AULAS VIRTUALES BLOCK (Combined with Ecosystem/Servicios feel) */}
      <section id="aulas-virtuales" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row gap-16 items-center">
           <div className="flex-1">
              <h2 className="text-3xl lg:text-5xl font-medium text-primary-900 mb-6 font-serif uppercase tracking-tight">
                AULAS <span className="text-accent italic">VIRTUALES</span>
              </h2>
              <p className="text-lg text-slate-600 font-light leading-relaxed mb-8">
                Estructuración pedagógica Moodle, bancos de preguntas y automatización de certificados para ecosistemas corporativos y académicos que buscan autonomía y robustez.
              </p>
              <div className="flex items-center gap-6">
                <Settings className="w-12 h-12 text-accent" />
                <div className="h-px bg-slate-200 flex-grow"></div>
                <span className="font-serif italic text-primary-700">Eficiencia técnica con alma pedagógica</span>
              </div>
           </div>
        </div>
      </section>

      {/* Diferenciador */}
      <section id="diferenciador" className="py-24 bg-bg-subtle relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             <div className="relative h-[600px] flex items-center justify-center rounded-2xl bg-slate-50 border border-slate-200 shadow-xl overflow-hidden order-2 lg:order-1">
               <div className="absolute inset-0">
                <img 
                  src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800" 
                  alt="Arquitectura académica y conocimiento" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary-900/20 mix-blend-multiply"></div>
              </div>
             </div>
             
             <div className="order-1 lg:order-2">
                <h2 className="text-3xl lg:text-5xl font-medium text-primary-900 mb-8 font-serif">
                  Especialización integral en tecnología y pedagogía
                </h2>
                <div className="space-y-6 text-lg text-slate-600 font-light leading-relaxed">
                  <p>
                    La implementación exitosa de programas digitales requiere el dominio simultáneo del código y la enseñanza. El éxito de un proyecto educativo depende de que la infraestructura técnica soporte directamente los objetivos de aprendizaje, eliminando cualquier fricción entre el usuario y el conocimiento.
                  </p>
                  <p>
                    Prisma Learning opera en el punto de encuentro entre la ingeniería de software y la andragogía. Contamos con experiencia directa en el sistema de educación superior chileno y en el despliegue de soluciones B2B para entornos corporativos, lo que nos permite diseñar ecosistemas robustos y pedagógicamente coherentes.
                  </p>
                  <p>
                    Nuestra intervención convierte programas estancados en activos institucionales de alto valor. Aseguramos que cada curso sea una herramienta de crecimiento escalable, diseñada para cumplir con los estándares de calidad que su institución exige.
                  </p>
                  <p className="pt-4 text-primary-900 font-serif italic text-2xl border-l-2 border-accent pl-6">
                    Hablemos hoy sobre cómo fortalecer su infraestructura académica digital.
                  </p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Validación Corporativa / Social Proof */}
      <section className="py-16 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-center text-xs font-semibold tracking-[0.25em] text-slate-400 uppercase mb-10">
            Instituciones que confían en nuestra metodología
          </p>
          
          {/* Grid flexible y escalable de logotipos. Es muy fácil añadir, editar o remover elementos de esta lista en el futuro */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center">
            {[
              { name: "U. de Santiago", icon: <Building2 className="w-5 h-5 text-slate-500" /> },
              { name: "Pontificia Acad.", icon: <GraduationCap className="w-5 h-5 text-slate-500" /> },
              { name: "Digital LMS", icon: <Settings className="w-5 h-5 text-slate-500" /> },
              { name: "EduChile B2B", icon: <MonitorPlay className="w-5 h-5 text-slate-500" /> },
              { name: "Innova Learning SA", icon: <Lightbulb className="w-5 h-5 text-slate-500" /> },
              { name: "Corp Ed Superior", icon: <Mail className="w-5 h-5 text-slate-500" /> }
            ].map((logo, index) => (
              <div 
                key={index} 
                className="flex items-center gap-2 grayscale opacity-50 hover:opacity-80 transition-all duration-300 transform hover:scale-105"
                title={logo.name}
              >
                {/* Logotipo de marcador de posición (Placeholder) */}
                <div className="flex items-center gap-2">
                  {logo.icon}
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-600 font-sans">
                    {logo.name}
                  </span>
                </div>
                
                {/* NOTA PARA EL FUTURO: Para usar archivos de imagen reales de marcas, descomente y edite el siguiente elemento: */}
                {/* <img src={`/assets/logos/logo-${index + 1}.svg`} alt={logo.name} className="h-8 max-w-[120px] object-contain" /> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Magnet / CTA Section */}
      <section id="contacto" className="py-32 bg-white text-center border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl lg:text-5xl font-serif text-primary-900 mb-6">
            Inicie la evolución de su modelo instruccional
          </h2>
          <p className="text-xl text-slate-500 font-light mb-12">
            Agende un diagnóstico institucional para identificar brechas en su estrategia B-Learning, modelo LMS corporativo o integración con inteligencia artificial.
          </p>
          
          <form className="max-w-xl mx-auto bg-bg-subtle p-8 rounded-xl border border-slate-100 shadow-xl" action="https://formspree.io/f/xaqvrqop" method="POST">
            <div className="space-y-4 text-left">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Nombre Completo</label>
                <input type="text" name="nombre" required className="w-full px-4 py-3 bg-white border border-slate-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors" placeholder="Ej. Carlos Mendoza" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Institución / Empresa</label>
                <input type="text" name="institucion" required className="w-full px-4 py-3 bg-white border border-slate-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors" placeholder="Nombre de la universidad o corporación" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Correo Electrónico Laboral</label>
                <input type="email" name="email" required className="w-full px-4 py-3 bg-white border border-slate-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors" placeholder="carlos@institucion.cl" />
              </div>
              <button type="submit" className="w-full bg-primary-900 text-white font-medium py-4 rounded-sm mt-6 hover:bg-primary-800 transition-colors shadow-lg">
                Solicitar Diagnóstico Estratégico
              </button>
            </div>
            <p className="text-xs text-slate-400 mt-6 text-center">
              Sus datos son confidenciales. Nos pondremos en contacto en menos de 24 horas hábiles.
            </p>
          </form>
        </div>
      </section>
    </>
  );
}

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showVideoIntro, setShowVideoIntro] = useState(false);
  const [videoSrc, setVideoSrc] = useState('/introduccion.mp4');

  useEffect(() => {
    // Check if the user has already seen the intro video in this session
    const hasSeenIntro = sessionStorage.getItem('hasSeenIntro');
    if (!hasSeenIntro) {
      setShowVideoIntro(true);
      sessionStorage.setItem('hasSeenIntro', 'true');
    }

    const handleOpenIntro = () => {
      setVideoSrc('/introduccion.mp4'); // reset to original path to retry
      setShowVideoIntro(true);
    };
    window.addEventListener('open-video-intro', handleOpenIntro);
    return () => window.removeEventListener('open-video-intro', handleOpenIntro);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen text-slate-800 selection:bg-accent/30 scroll-smooth">
        {/* Navigation */}
        <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary-900 flex items-center justify-center rounded-sm">
                <div className="w-4 h-4 border-2 border-accent rotate-45"></div>
              </div>
              <span className="font-serif text-xl font-semibold tracking-tight text-primary-900">
                Prisma Learning
              </span>
            </Link>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
              <Link to="/#diseno-instruccional" className="hover:text-primary-900 transition-colors">DISEÑO INSTRUCCIONAL</Link>
              <Link to="/#consultoria" className="hover:text-primary-900 transition-colors">CONSULTORÍA</Link>
              <Link to="/#capacitacion" className="hover:text-primary-900 transition-colors">CAPACITACIÓN</Link>
              <Link to="/#contacto" className="bg-primary-900 text-white px-5 py-2.5 rounded-sm hover:bg-primary-800 transition-colors tracking-wider font-semibold">
                CONTACTO
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-primary-900 p-2"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Nav Overlay */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
              >
                <div className="flex flex-col p-6 gap-4 text-sm font-medium text-slate-600">
                  <Link to="/#diseno-instruccional" onClick={() => setIsMenuOpen(false)} className="hover:text-primary-900 transition-colors">DISEÑO INSTRUCCIONAL</Link>
                  <Link to="/#consultoria" onClick={() => setIsMenuOpen(false)} className="hover:text-primary-900 transition-colors">CONSULTORÍA</Link>
                  <Link to="/#capacitacion" onClick={() => setIsMenuOpen(false)} className="hover:text-primary-900 transition-colors">CAPACITACIÓN</Link>
                  <Link 
                    to="/#contacto" 
                    onClick={() => setIsMenuOpen(false)}
                    className="bg-primary-900 text-white px-5 py-3 rounded-sm text-center hover:bg-primary-800 transition-colors tracking-wider font-semibold"
                  >
                    CONTACTO
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/diseno-instruccional" element={<DisenoInstruccional />} />
          <Route path="/consultoria" element={<Consultoria />} />
          <Route path="/capacitacion" element={<Capacitacion />} />
        </Routes>

        {/* Footer */}
        <footer className="bg-primary-900 text-slate-400 py-12 border-t border-primary-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Link to="/" className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-slate-400/20 flex items-center justify-center rounded-sm">
                  <div className="w-3 h-3 border-2 border-accent rotate-45"></div>
                </div>
                <span className="font-serif text-lg font-semibold tracking-tight text-white/90">
                  Prisma Learning
                </span>
              </Link>
              <p className="text-sm font-light max-w-xs">
                Consultoría en diseño instruccional, innovación y transformación digital académica en Chile.
              </p>
            </div>
            <div className="flex justify-start md:justify-end gap-8 text-sm">
              <Link to="/#diseno-instruccional" className="hover:text-accent transition-colors">Diseño Instruccional</Link>
              <Link to="/#consultoria" className="hover:text-accent transition-colors">Consultoría</Link>
              <Link to="/#capacitacion" className="hover:text-accent transition-colors">Capacitación</Link>
              <a href="#" className="hover:text-accent transition-colors">LinkedIn</a>
            </div>
          </div>
        </footer>

        {/* Floating CONTACTO Button */}
        <motion.div 
          className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-40"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link 
            to="/#contacto" 
            className="flex items-center gap-2 bg-accent text-primary-900 px-5 py-3 md:px-6 md:py-4 rounded-full font-bold tracking-wider text-sm shadow-2xl hover:bg-accent-light transition-all border border-accent/20 uppercase"
          >
            <Mail className="w-5 h-5 animate-bounce" />
            <span className="inline">CONTACTO</span>
          </Link>
        </motion.div>

        {/* Intro Video Overlay */}
        <AnimatePresence>
          {showVideoIntro && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/80 backdrop-blur-xl p-4 md:p-8 font-sans"
            >
              <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 120 }}
                className="relative w-full max-w-4xl bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl"
              >
                {/* Header of the video player modal */}
                <div className="absolute top-4 right-4 z-10">
                  <button 
                    onClick={() => setShowVideoIntro(false)}
                    className="p-2.5 rounded-full bg-slate-950/60 hover:bg-slate-950 text-white/80 hover:text-white transition-all border border-white/10 hover:border-white/20 cursor-pointer"
                    aria-label="Cerrar video"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Aspect ratio container for 16:9 video */}
                <div className="aspect-video w-full bg-black">
                  <video
                    src={videoSrc}
                    className="w-full h-full"
                    autoPlay
                    controls
                    playsInline
                    onEnded={() => setShowVideoIntro(false)}
                    onError={() => {
                      if (videoSrc !== 'https://assets.mixkit.co/videos/preview/mixkit-digital-education-and-online-classes-concept-42023-large.mp4') {
                        setVideoSrc('https://assets.mixkit.co/videos/preview/mixkit-digital-education-and-online-classes-concept-42023-large.mp4');
                      }
                    }}
                  />
                </div>
                
                {/* Visual indicator of what's happening */}
                <div className="p-4 bg-slate-950/90 flex justify-between items-center text-xs text-slate-400 font-sans tracking-wide">
                  <span>Prisma Learning — Introducción Institucional</span>
                  <button 
                    onClick={() => setShowVideoIntro(false)}
                    className="text-accent hover:underline font-semibold cursor-pointer"
                  >
                    Omitir introducción
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Router>
  );
}
