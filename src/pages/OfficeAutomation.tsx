import { motion } from "framer-motion";
import { Building2, KeySquare, Monitor, LineChart } from "lucide-react";
const hero = "/office-automation/hero.jpg";
const img1 = "/office-automation/img1.png";
import AccordionFAQ from "../components/AccordionFAQ";
import { Link } from "react-router-dom";

export default function OfficeAutomation() {
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
              <p className="uppercase tracking-widest text-white/95 text-xs mb-2">Office Automation</p>
              <h1 className="text-white text-3xl md:text-5xl font-semibold leading-tight mb-3">Workspaces that adapt and perform</h1>
              <p className="text-white/90 md:text-lg">Energy‑aware lighting, access control, meeting room orchestration, and analytics.</p>
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
              <motion.img src={img1} alt="Connected office" className="absolute inset-0 h-full w-full object-cover" initial={{ scale: 1 }} whileHover={{ scale: 1.03 }} transition={{ type: "tween", ease: "easeInOut", duration: 0.35 }} />
            </div>
          </motion.figure>
          <motion.div variants={itemReveal}>
            <h2 className="text-[color:var(--brand-heading)] text-xl md:text-3xl font-semibold">What’s inside an AiTech office</h2>
            <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
              <li className="flex items-center gap-2 rounded-lg border border-black/10 bg-white/60 p-3"><Building2 size={16} /><span>Daylight & occupancy‑based lighting</span></li>
              <li className="flex items-center gap-2 rounded-lg border border-black/10 bg-white/60 p-3"><KeySquare size={16} /><span>Access control & visitor management</span></li>
              <li className="flex items-center gap-2 rounded-lg border border-black/10 bg-white/60 p-3"><Monitor size={16} /><span>Room booking & AV scene presets</span></li>
              <li className="flex items-center gap-2 rounded-lg border border-black/10 bg-white/60 p-3"><LineChart size={16} /><span>Energy insights & automation</span></li>
            </ul>
          </motion.div>
        </div>
      </motion.section>

      {/* Workspace features */}
      <motion.section className="container-narrow py-12 md:py-14" variants={containerReveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
        <h2 className="text-[color:var(--brand-text)] text-xl md:text-3xl font-semibold">Workspace features</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm">
          {["Hot‑desk presence & wayfinding","Meeting room auto‑start scenes","Visitor access & deliveries","Department‑level permissions","HVAC & lighting schedules","Energy metering & reports"].map((f, idx) => (
            <motion.div key={idx} className="rounded-lg border border-black/10 bg-white/60 p-3" variants={itemReveal}>{f}</motion.div>
          ))}
        </div>
      </motion.section>

      {/* Integrations */}
      <motion.section className="bg-[color:var(--brand-surface)]/50 border-y border-black/10" variants={containerReveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
        <div className="container-narrow py-12 md:py-14">
          <h2 className="text-[color:var(--brand-text)] text-xl md:text-3xl font-semibold">Integrations</h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm">
            {["SSO & identity providers","Calendars & room booking","BMS & IoT platforms","Badge access & turnstiles","CCTV & video management","Helpdesk & ticketing"].map((i, idx) => (
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
              { question: "How do you handle hybrid work patterns?", answer: "Presence data and calendars drive scenes and comfort only where people are." },
              { question: "Can we set policies per floor or team?", answer: "Yes, policies cascade by site, building, floor, zone, or department." },
              { question: "What about security?", answer: "Role‑based access, audit logs, and encrypted communications are standard." },
              { question: "Can we start small?", answer: "Start with a single floor or critical rooms, then expand without rewiring." },
            ]}
          />
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section className="container-narrow py-12 md:py-14" variants={containerReveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
        <motion.div className="max-w-2xl" variants={itemReveal}>
          <h2 className="text-[color:var(--brand-text)] text-xl md:text-3xl font-semibold">Upgrade your workplace</h2>
          <p className="mt-2 text-[color:var(--brand-muted)]">Let’s map controls, policies, and integrations to your teams and spaces.</p>
          <div className="mt-5">
            <Link to="/contact" className="btn-primary inline-block">Talk to an expert</Link>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
}


