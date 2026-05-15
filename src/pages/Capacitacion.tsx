/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { GraduationCap, Bot, Users, Presentation, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Capacitacion() {
  const trainingLines = [
    {
      title: "Alfabetización IA Docente",
      icon: <Bot className="w-6 h-6" />,
      items: ["Diseño de prompts educativos", "Evaluación con apoyo de IA", "Automatización de contenidos"]
    },
    {
      title: "Metodologías Activas",
      icon: <Users className="w-6 h-6" />,
      items: ["Aprendizaje Basado en Proyectos (ABP)", "Aula Invertida (Flipped Classroom)", "Gamificación Moodle"]
    },
    {
      title: "Competencias Digitales",
      icon: <Presentation className="w-6 h-6" />,
      items: ["Diseño Instruccional para Docentes", "Gestión avanzada de Aulas Virtuales", "Recursos H5P e Interactividad"]
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-20 bg-bg-subtle overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-4xl lg:text-6xl font-serif text-primary-900 mb-6 uppercase tracking-tight">
              CAPACITACIÓN <span className="text-accent italic">& MENTORING</span>
            </h1>
            <p className="text-xl text-slate-600 font-light leading-relaxed mb-8">
              Empoderamos al capital humano institucional a través de programas de perfeccionamiento que conectan la tecnología con la pasión por la enseñanza.
            </p>
          </motion.div>
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1200" 
              alt="Training Session" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary-900/30"></div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-primary-900 mb-4 italic">Nuestros ejes de formación</h2>
          <p className="text-slate-500 mb-16 max-w-2xl font-light">Programas diseñados para impacto inmediato en el aula virtual y presencial.</p>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {trainingLines.map((line, idx) => (
              <div key={idx} className="bg-bg-subtle p-10 border border-slate-100 rounded-sm flex flex-col h-full">
                <div className="w-12 h-12 bg-primary-900 text-accent flex items-center justify-center rounded-sm mb-8">
                  {line.icon}
                </div>
                <h3 className="text-2xl font-serif text-primary-900 mb-6">{line.title}</h3>
                <ul className="space-y-4 mb-10 flex-grow">
                  {line.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-600 font-light">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentor Testimonial Style Section */}
      <section className="py-24 bg-primary-900 text-white relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <GraduationCap className="w-16 h-16 text-accent mx-auto mb-8 opacity-50" />
          <h2 className="text-4xl font-serif mb-8 italic">No dictamos cursos, formamos líderes en educación digital.</h2>
          <p className="text-xl text-primary-100 opacity-80 font-light leading-relaxed mb-12">
            Nuestro enfoque de mentoring asegura que el conocimiento se traduzca en una práctica docente real, con acompañamiento personalizado y retroalimentación experta.
          </p>
          <Link to="/#contacto" className="inline-block bg-accent text-primary-900 font-bold px-12 py-5 rounded-sm hover:bg-accent-light transition-all shadow-xl">
            Cotizar Plan de Capacitación
          </Link>
        </div>
      </section>
    </div>
  );
}
