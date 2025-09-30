import { motion } from "framer-motion";
import { Sun, Stethoscope, ShieldCheck, Bell } from "lucide-react";
import hero from "../assets/blue.jpg";
import img1 from "../assets/smart.jpg";
import { Link } from "react-router-dom";
import AccordionFAQ from "../components/AccordionFAQ";

export default function HospitalAutomation() {
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

  const faqs = [
    { question: "Do you support staged rollouts by ward?", answer: "Yes. We can phase upgrades to minimize disruption while keeping systems interoperable." },
    { question: "How do alerts route to staff?", answer: "We integrate with nurse call and RTLS to route context‑aware notifications to the right team." },
    { question: "Can the system run locally?", answer: "Critical functions run on‑prem with secure remote access for administration as needed." },
    { question: "What about data privacy?", answer: "We follow least‑privilege principles and encrypt data in transit and at rest." },
  ];

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
              <p className="uppercase tracking-widest text-white/95 text-xs mb-2">Hospital Automation</p>
              <h1 className="text-white text-3xl md:text-5xl font-semibold leading-tight mb-3">Safer, calmer patient spaces</h1>
              <p className="text-white/90 md:text-lg">Adaptive lighting, nurse call integration, asset tracking, and secure access.</p>
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
              <motion.img src={img1} alt="Patient room with adaptive lighting" className="absolute inset-0 h-full w-full object-cover" initial={{ scale: 1 }} whileHover={{ scale: 1.03 }} transition={{ type: "tween", ease: "easeInOut", duration: 0.35 }} />
            </div>
          </motion.figure>
          <motion.div variants={itemReveal}>
            <h2 className="text-[color:var(--brand-text)] text-xl md:text-3xl font-semibold">Key capabilities</h2>
            <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
              <li className="flex items-center gap-2 rounded-lg border border-black/10 bg-white/60 p-3"><Sun size={16} /><span>Circadian & task lighting for care</span></li>
              <li className="flex items-center gap-2 rounded-lg border border-black/10 bg-white/60 p-3"><Stethoscope size={16} /><span>Nurse call and workflow integration</span></li>
              <li className="flex items-center gap-2 rounded-lg border border-black/10 bg-white/60 p-3"><ShieldCheck size={16} /><span>Access control & audit trails</span></li>
              <li className="flex items-center gap-2 rounded-lg border border-black/10 bg-white/60 p-3"><Bell size={16} /><span>Asset tracking & alerts</span></li>
            </ul>
          </motion.div>
        </div>
      </motion.section>

      {/* Solutions & Compliance */}
      <motion.section className="container-narrow py-12 md:py-14" variants={containerReveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <motion.div variants={itemReveal}>
            <h2 className="text-[color:var(--brand-text)] text-xl md:text-3xl font-semibold">Clinical solutions</h2>
            <ul className="mt-4 space-y-2 text-sm text-[color:var(--brand-text)]">
              <li className="rounded-lg border border-black/10 bg-white/60 p-3">Patient room scenes: admit, exam, procedure, rest</li>
              <li className="rounded-lg border border-black/10 bg-white/60 p-3">Scheduling & automation by ward or time of day</li>
              <li className="rounded-lg border border-black/10 bg-white/60 p-3">OR task lighting and clean‑mode controls</li>
              <li className="rounded-lg border border-black/10 bg-white/60 p-3">Wayfinding, corridor dimming, and night mode</li>
            </ul>
          </motion.div>
          <motion.div variants={itemReveal}>
            <h2 className="text-[color:var(--brand-text)] text-xl md:text-3xl font-semibold">Compliance & safety</h2>
            <ul className="mt-4 space-y-2 text-sm text-[color:var(--brand-text)]">
              <li className="rounded-lg border border-black/10 bg-white/60 p-3">Event logging and audit trails for critical spaces</li>
              <li className="rounded-lg border border-black/10 bg-white/60 p-3">Role‑based access for staff, contractors, and visitors</li>
              <li className="rounded-lg border border-black/10 bg-white/60 p-3">Isolation room controls with interlocks</li>
              <li className="rounded-lg border border-black/10 bg-white/60 p-3">Redundancy for essential systems</li>
            </ul>
          </motion.div>
        </div>
      </motion.section>

      {/* Integrations */}
      <motion.section className="bg-[color:var(--brand-surface)]/50 border-y border-black/10" variants={containerReveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
        <div className="container-narrow py-12 md:py-14">
          <h2 className="text-[color:var(--brand-text)] text-xl md:text-3xl font-semibold">Integrations</h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm">
            {["Nurse call platforms", "Building management (BMS)", "Access control & badging", "RTLS/asset tracking", "CCTV & video management", "Generator & power monitoring"].map((i, idx) => (
              <motion.div key={idx} className="rounded-lg border border-black/10 bg-white/60 p-3" variants={itemReveal}>{i}</motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* FAQ */}
      {/* FAQ */}
      <motion.section
        className="container-narrow py-12 md:py-14"
        variants={containerReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-[color:var(--brand-text)] text-xl md:text-3xl font-semibold">Frequently asked questions</h2>
        <div className="mt-6">
          <AccordionFAQ items={faqs} />
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section className="container-narrow py-12 md:py-14" variants={containerReveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
        <motion.div className="max-w-2xl" variants={itemReveal}>
          <h2 className="text-[color:var(--brand-text)] text-xl md:text-3xl font-semibold">Plan a safer, smarter facility</h2>
          <p className="mt-2 text-[color:var(--brand-muted)]">Speak with our healthcare specialists about workflows, compliance, and integration.</p>
          <div className="mt-5">
            <Link to="/contact" className="btn-primary inline-block">Talk to an expert</Link>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
}


