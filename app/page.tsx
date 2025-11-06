'use client';

import { motion } from 'framer-motion';
import {
  Shield,
  Truck,
  Award,
  Clock,
  CheckCircle,
  ArrowRight,
  Heart,
  Stethoscope,
  Activity,
  Users,
  TrendingUp,
  FileCheck,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Gracias por tu interés. Nuestro equipo se pondrá en contacto contigo pronto.');
    setFormData({ name: '', email: '', company: '', phone: '', message: '' });
  };

  return (
    <div className="overflow-x-hidden">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <motion.div
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
            >
              <Heart className="w-8 h-8 text-primary-500" fill="currentColor" />
              <span className="text-2xl font-bold text-gradient">MediSupply Pro</span>
            </motion.div>
            <div className="hidden md:flex space-x-8">
              <a href="#servicios" className="text-gray-700 hover:text-primary-500 transition-colors">Servicios</a>
              <a href="#ventajas" className="text-gray-700 hover:text-primary-500 transition-colors">Ventajas</a>
              <a href="#productos" className="text-gray-700 hover:text-primary-500 transition-colors">Productos</a>
              <a href="#contacto" className="text-gray-700 hover:text-primary-500 transition-colors">Contacto</a>
            </div>
            <motion.a
              href="#contacto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-600 transition-colors"
            >
              Solicitar Cotización
            </motion.a>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary-50 via-white to-accent-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-6"
              >
                ✓ Certificación ISO 13485 | FDA Aprobado
              </motion.div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Material Médico de <span className="text-gradient">Excelencia</span> para tu Institución
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Equipamos hospitales, clínicas y centros de salud con material médico y quirúrgico de primera calidad.
                <span className="font-semibold text-primary-600"> Entregas en 24-48h garantizadas.</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="#contacto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-primary-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-600 transition-colors flex items-center justify-center group"
                >
                  Solicitar Catálogo Completo
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </motion.a>
                <motion.a
                  href="#ventajas"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-primary-500 text-primary-500 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-50 transition-colors flex items-center justify-center"
                >
                  Ver Ventajas
                </motion.a>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-12 flex items-center space-x-8"
              >
                <div>
                  <div className="text-3xl font-bold text-primary-500">500+</div>
                  <div className="text-gray-600">Instituciones Confían</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-500">15k+</div>
                  <div className="text-gray-600">Productos Disponibles</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary-500">98%</div>
                  <div className="text-gray-600">Satisfacción Cliente</div>
                </div>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="bg-white p-8 rounded-2xl shadow-2xl"
              >
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-primary-50 p-6 rounded-xl">
                    <Stethoscope className="w-12 h-12 text-primary-500 mb-3" />
                    <h3 className="font-bold text-lg mb-2">Instrumental</h3>
                    <p className="text-gray-600 text-sm">Quirúrgico certificado</p>
                  </div>
                  <div className="bg-accent-50 p-6 rounded-xl">
                    <Activity className="w-12 h-12 text-accent-600 mb-3" />
                    <h3 className="font-bold text-lg mb-2">Consumibles</h3>
                    <p className="text-gray-600 text-sm">Stock permanente</p>
                  </div>
                  <div className="bg-accent-50 p-6 rounded-xl">
                    <Shield className="w-12 h-12 text-accent-600 mb-3" />
                    <h3 className="font-bold text-lg mb-2">Protección</h3>
                    <p className="text-gray-600 text-sm">EPP hospitalario</p>
                  </div>
                  <div className="bg-primary-50 p-6 rounded-xl">
                    <Heart className="w-12 h-12 text-primary-500 mb-3" />
                    <h3 className="font-bold text-lg mb-2">Equipamiento</h3>
                    <p className="text-gray-600 text-sm">Tecnología avanzada</p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary-200 to-accent-200 rounded-full blur-3xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-12 bg-white border-y">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center"
          >
            <div className="flex items-center justify-center space-x-3">
              <Shield className="w-8 h-8 text-primary-500" />
              <div>
                <div className="font-bold text-gray-900">ISO 13485</div>
                <div className="text-sm text-gray-600">Certificado</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Award className="w-8 h-8 text-primary-500" />
              <div>
                <div className="font-bold text-gray-900">FDA Approved</div>
                <div className="text-sm text-gray-600">Cumplimiento</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Truck className="w-8 h-8 text-primary-500" />
              <div>
                <div className="font-bold text-gray-900">Envío Rápido</div>
                <div className="text-sm text-gray-600">24-48 horas</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Clock className="w-8 h-8 text-primary-500" />
              <div>
                <div className="font-bold text-gray-900">Soporte 24/7</div>
                <div className="text-sm text-gray-600">Siempre disponible</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ventajas Competitivas */}
      <section id="ventajas" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Por qué <span className="text-gradient">Elegirnos</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              No somos solo un proveedor más. Somos tu socio estratégico en el suministro médico.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                title: "Optimización de Costos",
                description: "Ahorra hasta un 30% sin comprometer calidad. Precios competitivos con descuentos por volumen y contratos anuales.",
                color: "primary"
              },
              {
                icon: Truck,
                title: "Logística Impecable",
                description: "Entregas garantizadas en 24-48h. Sistema de tracking en tiempo real y gestión de urgencias sin costo adicional.",
                color: "accent"
              },
              {
                icon: FileCheck,
                title: "Cumplimiento Normativo",
                description: "100% de los productos con certificaciones vigentes. Documentación técnica completa y trazabilidad garantizada.",
                color: "primary"
              },
              {
                icon: Users,
                title: "Gestor Dedicado",
                description: "Un Account Manager exclusivo para tu institución. Conoce tus necesidades y anticipa tus requerimientos.",
                color: "accent"
              },
              {
                icon: Activity,
                title: "Stock Permanente",
                description: "15,000+ productos disponibles inmediatamente. Sistema de reposición automática según tus patrones de consumo.",
                color: "primary"
              },
              {
                icon: Shield,
                title: "Garantía Total",
                description: "Política de devolución flexible. Garantía extendida en equipamiento y soporte técnico post-venta incluido.",
                color: "accent"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
              >
                <div className={`w-16 h-16 bg-${item.color}-100 rounded-xl flex items-center justify-center mb-6`}>
                  <item.icon className={`w-8 h-8 text-${item.color}-500`} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Productos Section */}
      <section id="productos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Catálogo <span className="text-gradient">Especializado</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Más de 15,000 productos médicos y quirúrgicos de las mejores marcas internacionales
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                category: "Instrumental Quirúrgico",
                items: ["Pinzas y Tijeras", "Bisturís y Mangos", "Separadores", "Instrumental Laparoscópico"],
                icon: Stethoscope
              },
              {
                category: "Consumibles",
                items: ["Suturas Absorbibles", "Gasas y Apósitos", "Jeringas y Agujas", "Catéteres"],
                icon: Activity
              },
              {
                category: "Protección y Seguridad",
                items: ["Guantes Quirúrgicos", "Mascarillas N95/FFP2", "Batas Estériles", "Equipos de Bioseguridad"],
                icon: Shield
              },
              {
                category: "Equipamiento",
                items: ["Monitores de Signos", "Equipos de Diagnóstico", "Mobiliario Clínico", "Tecnología Médica"],
                icon: Heart
              }
            ].map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-primary-50 to-white p-6 rounded-2xl border border-primary-100 hover:border-primary-300 transition-all"
              >
                <product.icon className="w-12 h-12 text-primary-500 mb-4" />
                <h3 className="text-xl font-bold mb-4">{product.category}</h3>
                <ul className="space-y-2">
                  {product.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-accent-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <a
              href="#contacto"
              className="inline-flex items-center bg-primary-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-600 transition-colors group"
            >
              Solicitar Catálogo Completo en PDF
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 bg-gradient-to-br from-primary-500 to-primary-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Instituciones que Confían en Nosotros
            </h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Más de 500 hospitales, clínicas y centros médicos en toda la región
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "La eficiencia en el suministro ha mejorado drásticamente. El stock nunca falta y la calidad es excepcional.",
                author: "Dr. Carlos Méndez",
                role: "Director Médico, Hospital Regional"
              },
              {
                quote: "Reducimos costos en un 25% sin sacrificar calidad. Su gestor dedicado conoce perfectamente nuestras necesidades.",
                author: "Lic. María Torres",
                role: "Gerente de Compras, Clínica Santa María"
              },
              {
                quote: "La certificación y trazabilidad de productos nos da total tranquilidad. Entregas siempre puntuales.",
                author: "Dr. Roberto Sánchez",
                role: "Jefe de Quirófano, Centro Médico del Norte"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl"
              >
                <div className="text-6xl text-accent-400 mb-4">"</div>
                <p className="text-lg mb-6 leading-relaxed">{testimonial.quote}</p>
                <div className="border-t border-white/20 pt-4">
                  <div className="font-bold">{testimonial.author}</div>
                  <div className="text-primary-200 text-sm">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contacto" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Comienza a <span className="text-gradient">Optimizar</span> tu Suministro Médico
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Solicita una cotización personalizada y descubre cómo podemos ayudarte a reducir costos mientras mejoras la calidad de tu suministro.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Respuesta en 2 horas</div>
                    <div className="text-gray-600">Durante horario laboral</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Cotización sin compromiso</div>
                    <div className="text-gray-600">Análisis de tus necesidades</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Asesoría especializada</div>
                    <div className="text-gray-600">Gestor dedicado para tu cuenta</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t space-y-3">
                <div className="flex items-center space-x-3 text-gray-700">
                  <Phone className="w-5 h-5 text-primary-500" />
                  <span className="font-semibold">+52 (55) 1234-5678</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <Mail className="w-5 h-5 text-primary-500" />
                  <span className="font-semibold">ventas@medisupplypro.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-700">
                  <MapPin className="w-5 h-5 text-primary-500" />
                  <span className="font-semibold">Ciudad de México, México</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-2xl"
            >
              <h3 className="text-2xl font-bold mb-6">Solicita tu Cotización</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                    placeholder="Dr. Juan Pérez"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Corporativo *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                    placeholder="juan.perez@hospital.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Institución *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                    placeholder="Hospital Regional"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                    placeholder="+52 (55) 1234-5678"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    ¿Qué productos necesitas?
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition resize-none"
                    placeholder="Describe brevemente tus necesidades..."
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-primary-500 text-white py-4 rounded-lg font-semibold text-lg hover:bg-primary-600 transition-colors flex items-center justify-center group"
                >
                  Enviar Solicitud
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </motion.button>
                <p className="text-xs text-gray-500 text-center">
                  Al enviar este formulario aceptas nuestra política de privacidad
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="w-8 h-8 text-primary-400" fill="currentColor" />
                <span className="text-xl font-bold">MediSupply Pro</span>
              </div>
              <p className="text-gray-400">
                Tu socio estratégico en suministro médico y quirúrgico de calidad.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Productos</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Instrumental Quirúrgico</a></li>
                <li><a href="#" className="hover:text-white transition">Consumibles</a></li>
                <li><a href="#" className="hover:text-white transition">Protección</a></li>
                <li><a href="#" className="hover:text-white transition">Equipamiento</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Empresa</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Sobre Nosotros</a></li>
                <li><a href="#" className="hover:text-white transition">Certificaciones</a></li>
                <li><a href="#" className="hover:text-white transition">Casos de Éxito</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contacto</h4>
              <ul className="space-y-2 text-gray-400">
                <li>+52 (55) 1234-5678</li>
                <li>ventas@medisupplypro.com</li>
                <li>Lun - Vie: 8:00 - 18:00</li>
                <li>Sáb: 9:00 - 14:00</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 MediSupply Pro. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
