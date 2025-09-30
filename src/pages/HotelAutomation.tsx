import { motion } from "framer-motion";
import { Sparkles, KeySquare, ThermometerSun, LayoutDashboard } from "lucide-react";
import hero from "../assets/press.png";
import img1 from "../assets/ritz.png";
import AccordionFAQ from "../components/AccordionFAQ";
import { Link } from "react-router-dom";

export default function HotelAutomation() {
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
    <div className="relative">
      <section
        className="relative min-h-[45vh] md:min-h-[90vh] flex items-end"
        style={{ backgroundImage: `url(${hero})`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 w-full">
          <motion.div className="container-narrow py-10 md:py-14" variants={containerReveal} initial="hidden" animate="visible">
            <motion.div className="max-w-2xl" variants={itemReveal}>
              <p className="uppercase tracking-widest text-white/95 text-xs mb-2">Hotel Automation</p>
              <h1 className="text-white text-3xl md:text-5xl font-semibold leading-tight mb-3">Memorable guest experiences</h1>
              <p className="text-white/90 md:text-lg">Room scenes, access, occupancy‑aware energy, and centralized management.</p>
              {/* <div className="mt-6 flex gap-3">
                <Link to="/contact" className="btn-primary">Talk to an expert</Link>
                <Link to="/services" className="text-white underline-offset-4 hover:underline">Explore Services</Link>
              </div> */}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <motion.section className="container-narrow py-12 md:py-14" variants={containerReveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.figure variants={itemReveal}>
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-black/10 bg-black/5">
              <motion.img src={img1} alt="Hotel room automation" className="absolute inset-0 h-full w-full object-cover" initial={{ scale: 1 }} whileHover={{ scale: 1.03 }} transition={{ type: "tween", ease: "easeInOut", duration: 0.35 }} />
            </div>
          </motion.figure>
          <motion.div variants={itemReveal}>
            <h2 className="text-[color:var(--brand-text)] text-xl md:text-3xl font-semibold">Key capabilities</h2>
            <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
              <li className="flex items-center gap-2 rounded-lg border border-black/10 bg-white/60 p-3"><Sparkles size={16} /><span>Welcome scenes & guest presets</span></li>
              <li className="flex items-center gap-2 rounded-lg border border-black/10 bg-white/60 p-3"><KeySquare size={16} /><span>Mobile keys & access control</span></li>
              <li className="flex items-center gap-2 rounded-lg border border-black/10 bg-white/60 p-3"><ThermometerSun size={16} /><span>Occupancy‑aware energy controls</span></li>
              <li className="flex items-center gap-2 rounded-lg border border-black/10 bg-white/60 p-3"><LayoutDashboard size={16} /><span>Centralized property management</span></li>
            </ul>
          </motion.div>
        </div>
      </motion.section>

      {/* Guest journey */}
      <motion.section className="container-narrow py-12 md:py-14" variants={containerReveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {["Arrival & check‑in","In‑room experience","Checkout & turnover"].map((step, idx) => (
            <motion.article key={idx} className="rounded-lg border border-black/10 bg-white/60 p-5" variants={itemReveal}>
              <p className="text-[10px] uppercase tracking-widest opacity-70">Step {idx + 1}</p>
              <h3 className="mt-1 text-[color:var(--brand-text)] font-semibold">{step}</h3>
              <p className="mt-1 text-[color:var(--brand-muted)] text-sm">
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
        <div className="container-narrow py-12 md:py-14">
          <h2 className="text-[color:var(--brand-text)] text-xl md:text-3xl font-semibold">Integrations</h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm">
            {["PMS & POS systems","Mobile keys & access control","BMS & energy management","Guest tablets & TV control","Housekeeping & service apps","CCTV & video management"].map((i, idx) => (
              <motion.div key={idx} className="rounded-lg border border-black/10 bg-white/60 p-3" variants={itemReveal}>{i}</motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* FAQ */}
      <motion.section className="container-narrow py-12 md:py-14" variants={containerReveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
        <h2 className="text-[color:var(--brand-text)] text-xl md:text-3xl font-semibold">Frequently asked questions</h2>
        <div className="mt-6">
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
      <motion.section className="container-narrow py-12 md:py-14" variants={containerReveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
        <motion.div className="max-w-2xl" variants={itemReveal}>
          <h2 className="text-[color:var(--brand-text)] text-xl md:text-3xl font-semibold">Create memorable guest stays</h2>
          <p className="mt-2 text-[color:var(--brand-muted)]">Let’s align automations with your brand and operations across every room.</p>
          <div className="mt-5">
            <Link to="/contact" className="btn-primary inline-block">Talk to an expert</Link>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
}


