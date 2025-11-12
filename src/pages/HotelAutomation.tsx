import { motion } from "framer-motion";
import { Sparkles, KeySquare, ThermometerSun, LayoutDashboard, Lightbulb } from "lucide-react";
import AccordionFAQ from "../components/AccordionFAQ";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function HotelAutomation() {
  const [lampOn, setLampOn] = useState(true);
  const [brightness, setBrightness] = useState(35);

  const containerReveal = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut", when: "beforeChildren", staggerChildren: 0.1 },
    },
  };

  const itemReveal = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
  };

  return (
    <div className="relative container-narrow">  
      {/* Hero Section - Split Layout */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] md:min-h-[90vh] flex flex-col lg:flex-row bg-[color:var(--brand-bg)]">
        {/* Left Section - Text Content */}
        <div className="w-full lg:w-[60%] flex flex-col justify-center container-narrow py-8 sm:py-12 md:py-16">
          <motion.div variants={containerReveal} initial="hidden" animate="visible" className="max-w-xl mx-auto lg:mx-0 px-4 sm:px-0">
            {/* Headline */}
            <motion.h1
              variants={itemReveal}
              className="text-[color:var(--brand-text)] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-3 sm:mb-5 text-center lg:text-left"
            >
              The One Touch Solution for Organizing Your Home
            </motion.h1>

            {/* Paragraph */}
            <motion.p
              variants={itemReveal}
              className="text-[color:var(--brand-muted)] text-sm sm:text-base md:text-lg mb-6 sm:mb-8 text-center lg:text-left leading-relaxed"
            >
              But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.
            </motion.p>

            {/* CTA Button */}
            <motion.div variants={itemReveal} className="flex justify-center lg:justify-start mb-6 sm:mb-10">
              <Link to="/contact" className="btn-primary ai-glow inline-flex items-center">
                Book a Demo
              </Link>
            </motion.div>

            {/* Client Logos */}
            <motion.div
              variants={itemReveal}
              className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 md:gap-10 mb-4 opacity-50"
            >
              <div className="text-[color:var(--brand-text)] font-medium text-xs sm:text-sm">Google</div>
              <div className="text-[color:var(--brand-text)] font-medium text-xs sm:text-sm">SPACEX</div>
              <div className="text-[color:var(--brand-text)] font-medium text-xs sm:text-sm">databricks</div>
            </motion.div>

            {/* Testimonial Box */}
            <motion.div
              variants={itemReveal}
              className="border-2 border-blue-600 rounded-lg sm:rounded-xl p-4 sm:p-5 bg-white/60 w-full max-w-sm mx-auto lg:mx-0"
            >
              <p className="text-[color:var(--brand-text)] text-xs sm:text-sm mb-3 leading-relaxed">
                "No one rejects, dislikes, or avoids pleasure itself. because it is pleasure, but because those."
              </p>
              <div className="flex items-center gap-2 sm:gap-2.5">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[color:var(--brand-overlay-light)] flex items-center justify-center flex-shrink-0">
                  <span className="text-[color:var(--brand-text)] text-[10px] sm:text-xs font-medium">EW</span>
                </div>
                <span className="text-[color:var(--brand-text)] font-medium text-xs sm:text-sm">Emma Whyson</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <div className="w-full lg:w-[40%] relative min-h-[40vh] sm:min-h-[50vh] lg:min-h-[90vh] flex items-center justify-center p-4 sm:p-6 md:p-8">
          <div className="relative w-full max-w-md lg:max-w-none h-[500px] rounded-xl flex items-center justify-center ">
            <div className="relative w-[350px] h-[400px] sm:w-[400px] sm:h-[500px] md:w-[450px] md:h-[550px] rounded-xl overflow-hidden">
              <img src="lighttoggel.jpg" alt="Hotel automation" className="w-full h-full object-cover rounded-xl" />
              {/* Light overlay layer */}
              <div
                className={`absolute inset-0 rounded-xl transition-opacity duration-300 ${
                  lampOn ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  background: `linear-gradient(135deg, rgba(255, 255, 200, ${brightness / 100 * 0.4}), rgba(255, 255, 150, ${brightness / 100 * 0.2}))`,
                  boxShadow: lampOn ? `inset 0 0 ${brightness * 2}px rgba(255, 255, 200, ${brightness / 100 * 0.3})` : 'none',
                }}
              />
            </div>

            {/* Lamp Control Widget - Top Right on Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute top-15 right-3 sm:top-4 sm:right-4 md:top-[-10px] md:right-4 w-[140px] sm:w-[160px] md:w-[180px] bg-white/60 border border-blue-600 rounded-lg sm:rounded-xl p-2 sm:p-3 shadow-lg z-10 backdrop-blur-sm"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-1 sm:gap-1.5">
                  <Lightbulb className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-600 flex-shrink-0" fill={lampOn ? "currentColor" : "none"} />
                  <span className="text-[color:var(--brand-text)] font-medium text-xs sm:text-sm">Lamp</span>
                </div>
                <button
                  onClick={() => setLampOn(!lampOn)}
                  className={`relative w-8 h-4 sm:w-10 sm:h-5 rounded-full transition-colors flex-shrink-0 ${lampOn ? 'bg-blue-600' : 'bg-[color:var(--brand-overlay-medium)]'
                    }`}
                >
                  <div
                    className={`absolute top-0.5 left-0.5 w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full transition-transform ${lampOn ? 'translate-x-4 sm:translate-x-5' : 'translate-x-0 '
                      }`}
                  />
                </button>
              </div>
              <div className="relative">
                <div className="w-full h-1 sm:h-1.5 bg-[color:var(--brand-overlay-medium)] rounded-full">
                  <div
                    className="h-1 sm:h-1.5 bg-blue-600 rounded-full transition-all"
                    style={{ width: `${brightness}%` }}
                  />
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={brightness}
                  onChange={(e) => setBrightness(Number(e.target.value))}
                  className="absolute inset-0 w-full h-1 sm:h-1.5 opacity-0 cursor-pointer"
                />
              </div>
            </motion.div>

            {/* Temperature Display Widget - Bottom Right on Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="absolute bottom-15 left-3 sm:bottom-5 sm:right-4 md:bottom-[-10px] md:right-8 w-[120px] sm:w-[140px] md:w-[160px] bg-white/60 border border-blue-600 rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 shadow-lg z-10 backdrop-blur-sm"
            >
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 mx-auto">
                {/* Outer ring */}
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
                  <circle
                    cx="60"
                    cy="60"
                    r="50"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="8"
                    className="text-[color:var(--brand-overlay-medium)]"
                  />
                  <circle
                    cx="60"
                    cy="60"
                    r="50"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="8"
                    strokeDasharray={`${2 * Math.PI * 50 * 0.6} ${2 * Math.PI * 50}`}
                    strokeLinecap="round"
                    className="text-blue-600"
                  />
                </svg>
                {/* Inner content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-[color:var(--brand-text)] text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">22°</span>
                  <span className="text-[color:var(--brand-muted)] text-[8px] sm:text-[9px] md:text-[10px] mt-0.5">Celcius</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <motion.section className="container-narrow py-8 sm:py-12 md:py-14" variants={containerReveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-center">
          <motion.figure variants={itemReveal} className="order-2 md:order-1">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-black/10 bg-black/5 parallax-tilt ai-glow">
              <motion.img src="hotelauto.jpg" alt="Hotel room automation" className="absolute inset-0 h-full w-full object-cover" initial={{ scale: 1 }} whileHover={{ scale: 1.05 }} transition={{ type: "tween", ease: "easeInOut", duration: 0.35 }} />
            </div>
          </motion.figure>
          <motion.div variants={itemReveal} className="order-1 md:order-2">
            <h2 className="text-[color:var(--brand-text)] text-xl sm:text-2xl md:text-3xl font-semibold">Key capabilities</h2>
            <ul className="mt-4 sm:mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 text-xs sm:text-sm">
              <li className="flex items-start sm:items-center gap-2 rounded-lg sm:rounded-xl border border-black/10 bg-white/60 p-2.5 sm:p-3 text-[color:var(--brand-text)]"><Sparkles size={14} className="sm:w-4 sm:h-4 text-blue-600 flex-shrink-0 mt-0.5 sm:mt-0" /><span className="leading-snug">Welcome scenes & guest presets</span></li>
              <li className="flex items-start sm:items-center gap-2 rounded-lg sm:rounded-xl border border-black/10 bg-white/60 p-2.5 sm:p-3 text-[color:var(--brand-text)]"><KeySquare size={14} className="sm:w-4 sm:h-4 text-blue-600 flex-shrink-0 mt-0.5 sm:mt-0" /><span className="leading-snug">Mobile keys & access control</span></li>
              <li className="flex items-start sm:items-center gap-2 rounded-lg sm:rounded-xl border border-black/10 bg-white/60 p-2.5 sm:p-3 text-[color:var(--brand-text)]"><ThermometerSun size={14} className="sm:w-4 sm:h-4 text-blue-600 flex-shrink-0 mt-0.5 sm:mt-0" /><span className="leading-snug">Occupancy‑aware energy controls</span></li>
              <li className="flex items-start sm:items-center gap-2 rounded-lg sm:rounded-xl border border-black/10 bg-white/60 p-2.5 sm:p-3 text-[color:var(--brand-text)]"><LayoutDashboard size={14} className="sm:w-4 sm:h-4 text-blue-600 flex-shrink-0 mt-0.5 sm:mt-0" /><span className="leading-snug">Centralized property management</span></li>
            </ul>
          </motion.div>
        </div>
      </motion.section>

      {/* Guest journey */}
      <motion.section className="container-narrow py-8 sm:py-12 md:py-14" variants={containerReveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {["Arrival & check‑in", "In‑room experience", "Checkout & turnover"].map((step, idx) => (
            <motion.article key={idx} className="rounded-lg sm:rounded-xl border border-black/10 bg-white/60 p-4 sm:p-5" variants={itemReveal}>
              <p className="text-[10px] uppercase tracking-widest opacity-70">Step {idx + 1}</p>
              <h3 className="mt-1 sm:mt-2 text-sm sm:text-base font-semibold text-[color:var(--brand-text)]">{step}</h3>
              <p className="mt-1 sm:mt-2 text-[color:var(--brand-muted)] text-xs sm:text-sm leading-5 sm:leading-6">
                {idx === 0 && "Mobile keys, welcome scenes, and guest profile presets ready on entry."}
                {idx === 1 && "Occupancy‑aware climate and lighting with easy controls and service requests."}
                {idx === 2 && "Automatic reset of scenes, climate, and access; housekeeping notifications."}
              </p>
            </motion.article>
          ))}
        </div>
      </motion.section>

      {/* Integrations */}
      <motion.section className="bg-[color:var(--brand-surface)]/50 border-y border-black/10" variants={containerReveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
        <div className="container-narrow py-8 sm:py-12 md:py-14">
          <h2 className="text-[color:var(--brand-text)] text-xl sm:text-2xl md:text-3xl font-semibold">Integrations</h2>
          <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 text-xs sm:text-sm">
            {["PMS & POS systems", "Mobile keys & access control", "BMS & energy management", "Guest tablets & TV control", "Housekeeping & service apps", "CCTV & video management"].map((i, idx) => (
              <motion.div key={idx} className="rounded-lg sm:rounded-xl border border-black/10 bg-white/60 p-3 sm:p-4 text-[color:var(--brand-text)] text-center sm:text-left" variants={itemReveal}>{i}</motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* FAQ */}
      <motion.section className="container-narrow py-8 sm:py-12 md:py-14" variants={containerReveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
        <h2 className="text-[color:var(--brand-text)] text-xl sm:text-2xl md:text-3xl font-semibold">Frequently asked questions</h2>
        <div className="mt-4 sm:mt-6">
          <AccordionFAQ
            items={[
              { question: "Can scenes be customized per brand standards?", answer: "Yes, we template scenes and apply property‑specific presets to stay on brand." },
              { question: "How do you reduce energy without hurting comfort?", answer: "Occupancy sensors and schedules optimize climate and lighting while guests are away." },
              { question: "Do you integrate with our PMS?", answer: "We integrate with major PMS platforms to sync check‑in, room status, and preferences." },
              { question: "What about retrofits?", answer: "Wireless devices allow phased upgrades per floor or wing with minimal downtime." },
            ]}
          />
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section className="container-narrow py-8 sm:py-12 md:py-14" variants={containerReveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
        <motion.div className="max-w-2xl" variants={itemReveal}>
          <h2 className="text-[color:var(--brand-text)] text-xl sm:text-2xl md:text-3xl font-semibold">Create memorable guest stays</h2>
          <p className="mt-2 sm:mt-3 text-[color:var(--brand-muted)] text-sm sm:text-base leading-6 sm:leading-7">Let's align automations with your brand and operations across every room.</p>
          <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <Link to="/contact" className="btn-primary ai-glow inline-flex items-center w-full sm:w-auto">Talk to an expert</Link>
            <Link to="/services" className="btn-ghost text-[color:var(--brand-text)] underline-offset-4 hover:underline text-sm sm:text-base">Explore Services</Link>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
}


