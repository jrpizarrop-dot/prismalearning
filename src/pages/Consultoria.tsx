/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Building2, CheckCircle2, Lightbulb, PieChart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Consultoria() {
  const solutions = [
    {
      title: "Transformación Digital Educativa",
      desc: "Hoja de ruta estratégica para la digitalización institucional."
    },
    {
      title: "Estrategias IA Institucional",
      desc: "Políticas y protocolos para el uso ético y efectivo de IA en el aula."
    },
    {
      title: "Modelos Híbridos (B-Learning)",
      desc: "Optimización de la presencialidad y autonomía virtual."
    },
    {
      title: "Diagnóstico Institucional",
      desc: "Auditoría integral de procesos tecno-pedagógicos."
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-20 bg-bg-subtle">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl lg:text-6xl font-serif text-primary-900 mb-6 uppercase tracking-tight">
              CONSULTORÍA <span className="text-accent italic">ESTRATÉGICA</span>
            </h1>
            <p className="text-xl text-slate-600 font-light leading-relaxed mb-8">
              Acompañamos a la alta dirección en la toma de decisiones críticas para la innovación educativa, asegurando escalabilidad y calidad institucional.
            </p>
          </motion.div>
          <div className="relative h-[400px] border-l-4 border-accent pl-8 flex items-center">
             <div className="bg-white p-10 shadow-2xl rounded-sm border border-slate-100 rotate-1">
                <PieChart className="w-12 h-12 text-primary-700 mb-6" />
                <h3 className="text-2xl font-serif text-primary-900 mb-4 italic">Decisiones basadas en datos</h3>
                <p className="text-slate-500 font-light">
                  En Prisma Learning, no basamos nuestras recomendaciones en tendencias pasajeras, sino en el análisis de indicadores de retención, satisfacción y efectividad académica.
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-primary-900 mb-16 text-center italic">Servicios de Consultoría Premium</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((s, idx) => (
              <div key={idx} className="p-10 bg-bg-subtle border border-slate-100 rounded-sm hover:border-accent transition-all group">
                <div className="flex gap-6">
                  <div className="w-12 h-12 bg-primary-900 text-accent flex items-center justify-center rounded-full shrink-0 group-hover:bg-accent group-hover:text-primary-900 transition-colors">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif text-primary-900 mb-3">{s.title}</h3>
                    <p className="text-slate-500 font-light leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Innovation CTA */}
      <section className="py-24 bg-primary-900 text-white">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Lightbulb className="w-16 h-16 text-accent mb-6" />
            <h2 className="text-4xl font-serif mb-6 leading-tight">Posicionamos a su institución en la vanguardia digital.</h2>
            <p className="text-primary-100 font-light opacity-80 leading-relaxed">
              La innovación no es un destino, es un proceso continuo de mejora. Nuestro acompañamiento asegura que su institución no solo adopte tecnología, sino que la lidere.
            </p>
          </div>
          <div className="bg-white/5 p-10 rounded-sm border border-white/10 backdrop-blur-sm">
            <h4 className="text-accent font-serif mb-4 italic text-xl">¿Hablamos de su próximo hito?</h4>
            <p className="text-sm text-primary-100 mb-8 font-light">Agende una sesión exploratoria con nuestros consultores senior hoy mismo.</p>
            <Link to="/#contacto" className="block text-center bg-accent text-primary-900 font-bold py-4 rounded-sm hover:bg-accent-light transition-colors">
              Iniciar Proyecto
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
