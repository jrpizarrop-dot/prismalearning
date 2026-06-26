/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { MonitorPlay, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DisenoInstruccional() {
  const products = [
    "Diseño de cursos e-learning",
    "Rediseño de asignaturas",
    "Cursos SCORM",
    "Microlearning",
    "Rutas formativas",
    "Diseño de evaluaciones",
    "Guiones instruccionales",
    "Diseño de experiencias de aprendizaje",
    "Cursos híbridos (b-learning)"
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-bg-subtle overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl lg:text-6xl font-serif text-primary-900 mb-6 uppercase tracking-tight">
              DISEÑO <span className="text-accent italic">INSTRUCCIONAL</span>
            </h1>
            <p className="text-xl text-slate-600 font-light leading-relaxed mb-8">
              Arquitecturamos experiencias de aprendizaje de alto impacto técnico y pedagógico, adaptadas a las necesidades reales de universidades y corporaciones en Chile.
            </p>
            <Link to="/#contacto" className="inline-flex items-center gap-2 bg-primary-900 text-white px-8 py-4 rounded-sm hover:shadow-lg transition-all">
              Solicitar Propuesta <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
          <div className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl border border-slate-200">
            <img 
              src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1200" 
              alt="Design Workspace" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary-900/20 mix-blend-multiply"></div>
          </div>
        </div>
      </section>

      {/* Detail Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-serif text-primary-900 mb-8 lowercase italic">Estrategia de diseño instruccional avanzada</h2>
              <div className="space-y-6 text-slate-600 font-light leading-relaxed text-lg">
                <p>
                  El diseño educativo eficaz parte de un análisis riguroso de los objetivos y del perfil del estudiante. Transformamos documentos estáticos en experiencias dinámicas mediante estrategias didácticas adaptadas a su contexto institucional.
                </p>
                <p>
                  Implementamos marcos de trabajo como ADDIE y SAM, optimizados para la agilidad del mercado actual. Integramos Inteligencia Artificial para acelerar la producción de contenidos, manteniendo la excelencia pedagógica en cada entrega.
                </p>
                <p>
                  Su institución obtendrá programas escalables que garantizan la transferencia real de conocimiento y el compromiso del alumno.
                </p>
                <p className="font-medium text-primary-800 italic">
                  Solicite una consultoría para modernizar sus procesos de producción educativa.
                </p>
              </div>
            </div>
            <div className="bg-primary-50 p-8 rounded-xl border border-primary-100">
              <h3 className="text-xl font-serif text-primary-900 mb-6">Servicios Específicos</h3>
              <ul className="space-y-4">
                {products.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Secondary CTA */}
      <section className="py-20 bg-primary-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-serif mb-6 italic">¿Su institución necesita rediseñar su oferta virtual?</h2>
          <p className="text-primary-100 opacity-80 mb-10 font-light">
            Deje de lado la improvisación y eleve el estándar de sus cursos con un equipo experto en diseño instruccional.
          </p>
          <Link to="/#contacto" className="inline-block bg-accent text-primary-900 font-bold px-10 py-4 rounded-sm hover:bg-accent-light transition-colors">
            Contactar Consultor
          </Link>
        </div>
      </section>
    </div>
  );
}
