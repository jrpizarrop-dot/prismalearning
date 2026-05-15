/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  Building2, 
  MonitorPlay, 
  GraduationCap, 
  Lightbulb, 
  Settings, 
  Bot, 
  ArrowRight,
  Menu,
  CheckCircle2
} from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen text-slate-800 selection:bg-accent/30">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary-900 flex items-center justify-center rounded-sm">
              <div className="w-4 h-4 border-2 border-accent rotate-45"></div>
            </div>
            <span className="font-serif text-xl font-semibold tracking-tight text-primary-900">
              Prisma Learning
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#servicios" className="hover:text-primary-900 transition-colors">DISEÑO INSTRUCCIONAL</a>
            <a href="#servicios" className="hover:text-primary-900 transition-colors">CONSULTORÍA</a>
            <a href="#servicios" className="hover:text-primary-900 transition-colors">CAPACITACIÓN</a>
          </div>
          <button className="md:hidden text-primary-900">
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

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
              Más que tecnología, diseñamos soluciones estratégicas. En Prisma Learning creamos ecosistemas virtuales donde la Inteligencia Artificial, el diseño instruccional superior y la gestión Moodle se intersectan para potenciar a instituciones y corporaciones.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary-900 text-white px-8 py-4 rounded-sm hover:bg-primary-800 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 font-medium">
                Agendar Diagnóstico Institucional
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:h-[600px] rounded-2xl bg-slate-100 border border-slate-200 overflow-hidden shadow-2xl flex flex-col justify-end p-8"
          >
            <div className="absolute inset-0">
              <img 
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=1200" 
                alt="University Architecture" 
                className="w-full h-full object-cover mix-blend-overlay"
              />
              <div className="absolute inset-0 bg-primary-900/60 mix-blend-multiply"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* La Brecha Section */}
      <section id="brecha" className="py-24 bg-surface border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5 relative h-[500px] bg-slate-50 flex flex-col p-8 rounded-tr-[80px] rounded-bl-[80px] overflow-hidden border border-slate-200">
               <div className="absolute inset-0 bg-slate-200">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" 
                  alt="Boardroom" 
                  className="w-full h-full object-cover opacity-80 mix-blend-luminosity"
                />
                <div className="absolute inset-0 bg-primary-900/10 mix-blend-multiply"></div>
              </div>
            </div>
            <div className="lg:col-span-7">
              <h2 className="text-3xl lg:text-5xl font-medium text-primary-900 mb-8 font-serif">
                Por qué las instituciones fallan en <span className="text-accent italic">e-learning</span>
              </h2>
              <div className="space-y-6 text-lg text-slate-600 font-light leading-relaxed">
                <p>
                  Universidades, OTECs y corporaciones invierten millones en tecnología que rara vez cumple sus promesas. Vemos plataformas LMS subutilizadas, versiones de Moodle implementadas sin lógica de aprendizaje, y herramientas aisladas de IA que carecen de enfoque pedagógico.
                </p>
                <p>
                  La verdadera innovación educativa no consiste simplemente en adoptar las últimas herramientas digitales. Consiste en <strong className="text-primary-900 font-medium">arquitecturar procesos</strong> donde la tecnología se subordine a una metodología instruccional sólida. 
                </p>
                <div className="pt-6 grid sm:grid-cols-2 gap-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-primary-900" />
                    </div>
                    <div>
                      <h4 className="font-medium text-primary-900 mb-1">Sin improvisaciones</h4>
                      <p className="text-sm">Alineamos los objetivos del negocio con la experiencia académica.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-primary-900" />
                    </div>
                    <div>
                      <h4 className="font-medium text-primary-900 mb-1">Cero herramientas vacías</h4>
                      <p className="text-sm">Tecnología justificada siempre por resultados de aprendizaje.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Ecosystem */}
      <section id="servicios" className="py-32 bg-primary-900 text-white relative overflow-hidden">
        {/* Subtle background abstract element */}
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary-800/50 rounded-full blur-3xl -z-0 translate-y-1/2 translate-x-1/4"></div>
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl -z-0 -translate-y-1/2 -translate-x-1/4"></div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl lg:text-5xl font-medium mb-6 font-serif">
              Nuestro Ecosistema de <span className="text-accent italic">Soluciones</span>
            </h2>
            <p className="text-lg text-primary-100 font-light opacity-80">
              Servicios estructurados estratégicamente para acompañar a instituciones de educación superior y empresas en todas las fases de su madurez digital.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Service - Takes full width on mobile/tablet, 2 cols on desktop */}
            <div className="lg:col-span-2 bg-primary-800 p-10 rounded-xl shadow-2xl border border-primary-700/50 flex flex-col justify-between group hover:border-accent/50 transition-colors">
              <div>
                <MonitorPlay className="w-10 h-10 text-accent mb-6" />
                <h3 className="text-2xl font-serif mb-4">DISEÑO INSTRUCCIONAL</h3>
                <p className="text-primary-100 font-light mb-8 opacity-80 leading-relaxed">
                  Transformamos contenidos estáticos en experiencias de aprendizaje dinámicas y altamente efectivas. Aplicamos metodologías basadas en investigación para asegurar la transferencia del conocimiento y altas tasas de finalización en universidades y empresas.
                </p>
                <div className="grid sm:grid-cols-2 gap-y-3 gap-x-6">
                  <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-accent rounded-full"></div><span className="text-sm font-light">Diseño de cursos e-learning & SCORM</span></div>
                  <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-accent rounded-full"></div><span className="text-sm font-light">Rutas formativas & Microlearning</span></div>
                  <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-accent rounded-full"></div><span className="text-sm font-light">Rediseño de asignaturas (B-learning)</span></div>
                  <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-accent rounded-full"></div><span className="text-sm font-light">Diseño de experiencias de aprendizaje</span></div>
                </div>
              </div>
            </div>

            {/* Strategic Consulting Component */}
            <div className="bg-gradient-to-br from-accent to-accent-light p-10 rounded-xl shadow-2xl text-primary-900 flex flex-col justify-between hover:scale-[1.02] transition-transform">
              <div>
                <Building2 className="w-10 h-10 text-primary-900 mb-6" />
                <h3 className="text-2xl font-serif mb-4">CONSULTORÍA</h3>
                <p className="font-medium mb-6 opacity-90 leading-relaxed">
                  El pilar de la transformación. Diagnosticamos el estado digital de su institución y diseñamos la ruta maestra de innovación académica.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary-900 rounded-full"></div><span className="text-sm font-semibold">Transformación digital educativa</span></li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary-900 rounded-full"></div><span className="text-sm font-semibold">Estrategias IA institucional</span></li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary-900 rounded-full"></div><span className="text-sm font-semibold">Diagnóstico institucional</span></li>
                </ul>
              </div>
            </div>

            {/* Moodle */}
            <div className="bg-primary-800 p-8 rounded-xl shadow-lg border border-primary-700/50 hover:border-accent/30 transition-colors">
              <Settings className="w-8 h-8 text-accent mb-5" />
              <h3 className="text-xl font-serif mb-3">AULAS VIRTUALES</h3>
              <p className="text-primary-100/70 text-sm font-light mb-6">
                Creación de aulas virtuales, estructuración pedagógica Moodle, bancos de preguntas y automatización de certificados para ecosistemas corporativos y académicos.
              </p>
            </div>

            {/* Capacitación */}
            <div className="bg-primary-800 p-8 rounded-xl shadow-lg border border-primary-700/50 hover:border-accent/30 transition-colors">
              <GraduationCap className="w-8 h-8 text-accent mb-5" />
              <h3 className="text-xl font-serif mb-3">CAPACITACIÓN</h3>
              <p className="text-primary-100/70 text-sm font-light mb-6">
                Programas intensivos docencia y corporativos. Alfabetización IA, metodologías activas y certificación de competencias digitales.
              </p>
            </div>
            
            {/* Image Placeholder Tile */}
            <div className="lg:col-span-1 h-[250px] sm:h-auto relative rounded-xl bg-primary-900 border border-primary-700 overflow-hidden flex items-center justify-center shadow-xl">
               <div className="absolute inset-0">
                <img 
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800" 
                  alt="Ecosystem" 
                  className="w-full h-full object-cover opacity-60 mix-blend-luminosity"
                />
                <div className="absolute inset-0 bg-primary-900/50 mix-blend-multiply"></div>
              </div>
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
                  src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=800" 
                  alt="Prism abstract" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary-900/40 mix-blend-multiply"></div>
              </div>
             </div>
             
             <div className="order-1 lg:order-2">
                <h2 className="text-3xl lg:text-5xl font-medium text-primary-900 mb-8 font-serif">
                  No somos una agencia web. Somos <span className="text-accent italic">Arquitectos Académicos</span>.
                </h2>
                <div className="space-y-6 text-lg text-slate-600 font-light leading-relaxed">
                  <p>
                    El mercado está lleno de consultoras tecnológicas que no entienden de andragogía, o pedagogos sin entendimiento de arquitectura de software. Prisma Learning se sitúa exactamente en esa intersección.
                  </p>
                  <p>
                    Nuestro equipo aporta años de experiencia pura y probada en <strong className="font-medium text-primary-900">educación superior en Chile</strong> y en el <strong className="font-medium text-primary-900">desarrollo de ecosistemas corporativos B2B</strong>.
                  </p>
                  <p className="pt-4 text-primary-900 font-serif italic text-2xl border-l-2 border-accent pl-6">
                    "Elevamos proyectos estancados transformándolos en activos institucionales de alto valor."
                  </p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Lead Magnet / CTA Section */}
      <section className="py-32 bg-white text-center border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl lg:text-5xl font-serif text-primary-900 mb-6">
            Inicie la evolución de su modelo instruccional
          </h2>
          <p className="text-xl text-slate-500 font-light mb-12">
            Agende un diagnóstico institucional para identificar brechas en su estrategia B-Learning, modelo LMS corporativo o integración con inteligencia artificial.
          </p>
          
          <form className="max-w-xl mx-auto bg-bg-subtle p-8 rounded-xl border border-slate-100 shadow-xl" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-4 text-left">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Nombre Completo</label>
                <input type="text" className="w-full px-4 py-3 bg-white border border-slate-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors" placeholder="Ej. Carlos Mendoza" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Institución / Empresa</label>
                <input type="text" className="w-full px-4 py-3 bg-white border border-slate-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors" placeholder="Nombre de la universidad o corporación" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Correo Electrónico Laboral</label>
                <input type="email" className="w-full px-4 py-3 bg-white border border-slate-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-colors" placeholder="carlos@institucion.cl" />
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

      {/* Footer */}
      <footer className="bg-primary-900 text-slate-400 py-12 border-t border-primary-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-slate-400/20 flex items-center justify-center rounded-sm">
                <div className="w-3 h-3 border-2 border-accent rotate-45"></div>
              </div>
              <span className="font-serif text-lg font-semibold tracking-tight text-white/90">
                Prisma Learning
              </span>
            </div>
            <p className="text-sm font-light max-w-xs">
              Consultoría en diseño instruccional, innovación y transformación digital académica en Chile.
            </p>
          </div>
          <div className="flex justify-start md:justify-end gap-8 text-sm">
            <a href="#" className="hover:text-accent transition-colors">Servicios</a>
            <a href="#" className="hover:text-accent transition-colors">Metodología</a>
            <a href="#" className="hover:text-accent transition-colors">Contacto</a>
            <a href="#" className="hover:text-accent transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

