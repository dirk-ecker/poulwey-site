/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { 
  Phone, 
  Truck, 
  Clock, 
  ShieldCheck, 
  MapPin, 
  Mail, 
  ChevronRight, 
  Menu, 
  X, 
  Car, 
  Wrench,
  AlertTriangle,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const SERVICES = [
  {
    title: "Abschleppdienst",
    description: "Professionelles Abschleppen von PKW, LKW und Motorrädern – rund um die Uhr.",
    icon: Truck,
  },
  {
    title: "Pannenhilfe",
    description: "Schnelle Hilfe vor Ort bei Reifenpannen, Batterieversagen oder anderen Defekten.",
    icon: Wrench,
  },
  {
    title: "Bergungsdienst",
    description: "Spezialisierte Bergung von Fahrzeugen aus schwierigem Gelände oder nach Unfällen.",
    icon: AlertTriangle,
  },
  {
    title: "ADAC Mobilitätspartner",
    description: "Als offizieller ADAC Partner garantieren wir höchste Qualitätsstandards.",
    icon: ShieldCheck,
  },
  {
    title: "Fahrzeugtransporte",
    description: "Sicherer Transport Ihres Fahrzeugs an jeden gewünschten Ort in Europa.",
    icon: Car,
  },
  {
    title: "ADAC Autovermietung",
    description: "Bleiben Sie mobil mit unseren Ersatzwagen direkt an unseren Standorten.",
    icon: Clock,
  }
];

const LOCATIONS = [
  {
    city: "Bergheim",
    address: "Kölner Str. 123, 50126 Bergheim",
    phone: "02271 - 123456"
  },
  {
    city: "Elsdorf",
    address: "Gewerbestraße 5, 50189 Elsdorf",
    phone: "02274 - 987654"
  },
  {
    city: "Kerpen",
    address: "Industriepark 10, 50171 Kerpen",
    phone: "02237 - 456789"
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-3 shadow-sm' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-10 h-10 bg-brand-blue rounded-lg flex items-center justify-center">
              <Truck className="text-brand-yellow w-6 h-6" />
            </div>
            <span className={`text-2xl font-display font-bold ${scrolled ? 'text-slate-900' : 'text-white'}`}>
              POULWEY
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {['Leistungen', 'Standorte', 'Über uns', 'Kontakt'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                className={`font-medium transition-colors hover:text-brand-yellow ${scrolled ? 'text-slate-600' : 'text-white/90'}`}
              >
                {item}
              </button>
            ))}
            <a href="tel:02272919800" className="btn-emergency">
              <Phone size={18} />
              02272 - 91 98 00
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-slate-900" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className={scrolled ? 'text-slate-900' : 'text-white'} /> : <Menu className={scrolled ? 'text-slate-900' : 'text-white'} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {['Leistungen', 'Standorte', 'Über uns', 'Kontakt'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(' ', '-'))}
                  className="text-2xl font-display font-bold text-slate-900 text-left border-b border-slate-100 pb-4"
                >
                  {item}
                </button>
              ))}
              <a href="tel:02272919800" className="btn-emergency justify-center py-5 text-xl">
                <Phone />
                Notruf: 02272 - 91 98 00
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=2000"
            alt="Tow Truck"
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-yellow/20 text-brand-yellow font-semibold text-sm mb-6 border border-brand-yellow/30">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-yellow opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-yellow"></span>
              </span>
              24/7 Einsatzbereit im Rhein-Erft-Kreis
            </div>
            <h1 className="text-5xl md:text-7xl text-white mb-6 leading-tight">
              Wir bringen Sie <span className="text-brand-yellow">sicher</span> ans Ziel.
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed">
              Seit über 40 Jahren Ihr zuverlässiger Partner für Abschlepp- und Bergedienste. 
              Als ADAC Mobilitätspartner sind wir in Bergheim, Elsdorf und Kerpen für Sie da.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:02272919800" className="btn-emergency py-4 px-8 text-lg">
                <Phone size={20} />
                Jetzt Hilfe anfordern
              </a>
              <button onClick={() => scrollToSection('leistungen')} className="px-8 py-4 border border-white/30 text-white rounded-xl font-semibold hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                Unsere Leistungen
                <ArrowRight size={18} />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Floating Stats */}
        <div className="absolute bottom-12 right-6 hidden lg:block">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="glass p-6 rounded-2xl flex gap-12"
          >
            <div>
              <div className="text-3xl font-bold text-brand-blue">24/7</div>
              <div className="text-sm text-slate-500 uppercase tracking-wider font-semibold">Service</div>
            </div>
            <div className="w-px h-12 bg-slate-200" />
            <div>
              <div className="text-3xl font-bold text-brand-blue">20+</div>
              <div className="text-sm text-slate-500 uppercase tracking-wider font-semibold">Fahrzeuge</div>
            </div>
            <div className="w-px h-12 bg-slate-200" />
            <div>
              <div className="text-3xl font-bold text-brand-blue">40J.</div>
              <div className="text-sm text-slate-500 uppercase tracking-wider font-semibold">Erfahrung</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="leistungen" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl text-slate-900 mb-6">Umfassender Service für Ihre Mobilität</h2>
            <p className="text-lg text-slate-600">
              Ob Unfall, Panne oder Fahrzeugtransport – wir bieten Ihnen professionelle Lösungen 
              mit modernster Technik und geschultem Personal.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-8 rounded-2xl border border-slate-100 hover:border-brand-blue/20 hover:shadow-xl transition-all duration-300 bg-slate-50/50"
              >
                <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                  <service.icon size={28} className="text-brand-blue group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                <button className="flex items-center gap-2 text-brand-blue font-semibold group-hover:gap-3 transition-all">
                  Mehr erfahren <ChevronRight size={16} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="über-uns" className="py-24 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1562141989-c5c79ac8f576?auto=format&fit=crop&q=80&w=1000"
                alt="Our Team"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 glass p-8 rounded-2xl shadow-xl hidden md:block max-w-xs">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-brand-yellow rounded-full flex items-center justify-center">
                  <ShieldCheck className="text-brand-blue" />
                </div>
                <span className="font-bold text-slate-900">ADAC Geprüft</span>
              </div>
              <p className="text-sm text-slate-600 italic">
                "Hervorragender Service und extrem schnelle Reaktionszeit. Poulwey hat mir in einer schwierigen Situation sofort geholfen."
              </p>
              <div className="mt-4 font-bold text-sm text-brand-blue">— Thomas M., Bergheim</div>
            </div>
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl text-slate-900 mb-8">Warum Poulwey?</h2>
            <div className="space-y-8">
              {[
                {
                  title: "Schnelligkeit",
                  desc: "Durch unsere drei Standorte sind wir in kürzester Zeit bei Ihnen vor Ort.",
                  icon: Clock
                },
                {
                  title: "Kompetenz",
                  desc: "Unsere Mitarbeiter werden regelmäßig geschult und verfügen über jahrelange Erfahrung.",
                  icon: ShieldCheck
                },
                {
                  title: "Modernster Fuhrpark",
                  desc: "Wir verfügen über Spezialfahrzeuge für jede Art von Bergung und Transport.",
                  icon: Truck
                }
              ].map((item) => (
                <div key={item.title} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center">
                    <item.icon className="text-brand-blue" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
                    <p className="text-slate-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12">
              <button className="btn-primary">Unsere Geschichte entdecken</button>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section id="standorte" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl text-slate-900 mb-4">Immer in Ihrer Nähe</h2>
              <p className="text-lg text-slate-600">Besuchen Sie uns an einem unserer drei Standorte im Rhein-Erft-Kreis.</p>
            </div>
            <button className="flex items-center gap-2 text-brand-blue font-bold border-b-2 border-brand-blue pb-1">
              Alle Standorte auf der Karte <MapPin size={18} />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {LOCATIONS.map((loc) => (
              <div key={loc.city} className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-lg transition-all">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{loc.city}</h3>
                <div className="space-y-4 text-slate-600">
                  <div className="flex gap-3">
                    <MapPin size={20} className="text-brand-blue flex-shrink-0" />
                    <span>{loc.address}</span>
                  </div>
                  <div className="flex gap-3">
                    <Phone size={20} className="text-brand-blue flex-shrink-0" />
                    <a href={`tel:${loc.phone.replace(/\s/g, '')}`} className="hover:text-brand-blue transition-colors">{loc.phone}</a>
                  </div>
                </div>
                <button className="mt-8 w-full py-3 border border-slate-200 rounded-xl font-semibold hover:bg-white hover:border-brand-blue transition-all">
                  Route planen
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-blue relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-yellow rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl text-white mb-8">Haben Sie eine Panne oder einen Unfall?</h2>
          <p className="text-xl text-white/80 mb-12">
            Zögern Sie nicht. Rufen Sie uns direkt an. Wir sind in 20-30 Minuten bei Ihnen.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a href="tel:02272919800" className="bg-white text-brand-blue px-10 py-5 rounded-2xl font-bold text-2xl flex items-center justify-center gap-3 hover:bg-brand-yellow hover:text-brand-blue transition-all shadow-xl">
              <Phone size={28} />
              02272 - 91 98 00
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="kontakt" className="bg-slate-900 text-slate-400 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div>
              <div className="flex items-center gap-2 mb-8">
                <div className="w-8 h-8 bg-brand-blue rounded flex items-center justify-center">
                  <Truck className="text-brand-yellow w-5 h-5" />
                </div>
                <span className="text-xl font-display font-bold text-white tracking-tight">
                  POULWEY
                </span>
              </div>
              <p className="mb-8 leading-relaxed">
                Ihr kompetenter Partner für Abschlepp- und Bergedienste im Rhein-Erft-Kreis. 
                Zuverlässig, schnell und professionell.
              </p>
              <div className="flex gap-4">
                {/* Social placeholders */}
                <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-blue hover:text-white transition-all cursor-pointer">
                  <Mail size={18} />
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-8 uppercase tracking-wider text-sm">Leistungen</h4>
              <ul className="space-y-4">
                {['Abschleppdienst', 'Pannenhilfe', 'Bergungsdienst', 'Fahrzeugtransporte', 'Autovermietung'].map(item => (
                  <li key={item} className="hover:text-white transition-colors cursor-pointer flex items-center gap-2">
                    <ChevronRight size={14} className="text-brand-yellow" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-8 uppercase tracking-wider text-sm">Unternehmen</h4>
              <ul className="space-y-4">
                {['Über uns', 'Geschichte', 'Standorte', 'Karriere', 'Kontakt'].map(item => (
                  <li key={item} className="hover:text-white transition-colors cursor-pointer flex items-center gap-2">
                    <ChevronRight size={14} className="text-brand-yellow" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-8 uppercase tracking-wider text-sm">Kontakt</h4>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <MapPin size={20} className="text-brand-yellow flex-shrink-0" />
                  <span>Kölner Str. 123<br />50126 Bergheim</span>
                </li>
                <li className="flex gap-4">
                  <Phone size={20} className="text-brand-yellow flex-shrink-0" />
                  <a href="tel:02272919800" className="hover:text-white transition-colors">02272 - 91 98 00</a>
                </li>
                <li className="flex gap-4">
                  <Mail size={20} className="text-brand-yellow flex-shrink-0" />
                  <a href="mailto:dispo@poulwey.de" className="hover:text-white transition-colors">dispo@poulwey.de</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-12 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
            <p>© {new Date().getFullYear()} Poulwey Abschlepp- und Bergedienst GmbH. Alle Rechte vorbehalten.</p>
            <div className="flex gap-8">
              <button className="hover:text-white transition-colors">Impressum</button>
              <button className="hover:text-white transition-colors">Datenschutz</button>
              <button className="hover:text-white transition-colors">AGB</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
