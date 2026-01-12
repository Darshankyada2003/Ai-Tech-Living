import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const hero = "/home-automation/hero.png";
const harness = "/home-automation/harness.png";
const smart = "/home-automation/smart.jpg";
import AccordionFAQ from "../components/AccordionFAQ";

export default function HomeAutomation() {
  const containerReveal = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };
  
  const faqs = [
    {
      question: "Can you work with my architect and builder?",
      answer:
        "Yes—most of our projects are in collaboration with design teams. We provide drawings, device schedules, and onsite coordination.",
    },
    {
      question: "Will automations work during internet outages?",
      answer:
        "Core functions are local, so scenes and schedules continue to work. Remote access resumes when connectivity is restored.",
    },
    {
      question: "Do you support retrofits?",
      answer:
        "We offer wireless options for existing homes and wired solutions for new builds and renovations.",
    },
    {
      question: "How do you handle security and privacy?",
      answer:
        "We favor local processing and secure networking. Remote features use encrypted connections with least‑privilege access.",
    },
  ];
  const itemReveal = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <div className="relative">
      {/* Hero */}
      <section
        className="relative min-h-[50vh] md:min-h-[90vh] flex items-end"
        style={{
          backgroundImage: `url(${hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 w-full">
          <motion.div
            className="container-narrow py-10 md:py-16"
            variants={containerReveal}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="max-w-2xl" variants={itemReveal}>
              <p className="uppercase tracking-widest text-white/95 text-xs mb-2">
                AI‑Powered Home Automation
              </p>
              <h1 className="gradient-text text-3xl md:text-5xl font-semibold leading-tight mb-3">
                Smarter living, beautifully orchestrated
              </h1>
              <p className="text-white/90 md:text-lg">
                AiTech Living blends design, engineering, and AI to create homes
                that anticipate your needs—lighting, climate, security, and
                shades working in harmony.
              </p>
              <p className="text-white/90 md:text-lg mt-2">
                <span className="typewriter inline-block">
                  Lighting • Climate • Security • Shades • Voice
                </span>
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <Link to="/contact" className="btn-primary ai-glow inline-flex items-center">
                  Book a consultation
                </Link>
                <Link to="/services" className="btn-ghost text-white/90 underline-offset-4 hover:underline">
                  Explore services
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What it includes */}
      <motion.section
        className="container-narrow py-12 md:py-14"
        variants={containerReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <header className="max-w-2xl">
          <h2 className="text-[color:var(--brand-heading)] text-2xl md:text-4xl font-semibold">
            What's inside an AiTech home
          </h2>
          <p className="mt-2 text-[color:var(--brand-muted)]">
            A cohesive system that feels invisible—powerful, reliable, and
            effortless to control.
          </p>
        </header>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Adaptive Lighting",
              desc: "Scene‑based, tunable light that supports focus and rest.",
            },
            {
              title: "Automated Shades",
              desc: "Daylight tracking and privacy with whisper‑quiet motors.",
            },
            {
              title: "Climate Intelligence",
              desc: "Comfort at lower energy use with AI‑assisted schedules.",
            },
            {
              title: "Security & Access",
              desc: "Unified cameras, sensors, and smart locks with alerts.",
            },
            {
              title: "Voice & App Control",
              desc: "Natural voice, intuitive apps, and elegant wall keypads.",
            },
            {
              title: "Local Reliability",
              desc:
                "Fast, private control that works even if the internet doesn’t.",
            },
          ].map((f, i) => (
            <motion.article
              key={i}
              className="rounded-xl border border-black/10 bg-white/60 p-5"
              variants={itemReveal}
            >
              <h3 className="text-[color:var(--brand-heading)] font-semibold">
                {f.title}
              </h3>
              <p className="mt-1 text-[color:var(--brand-muted)] text-sm">
                {f.desc}
              </p>
            </motion.article>
          ))}
        </div>
      </motion.section>

      {/* Image + content */}
      <motion.section
        className="bg-[color:var(--brand-surface)]/50 border-y border-black/10"
        variants={containerReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="container-narrow py-12 md:py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.figure variants={itemReveal}>
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-black/10 bg-black/5 parallax-tilt ai-glow">
                <motion.img
                  src={harness}
                  alt="Living space with integrated lighting and shades"
                  className="absolute inset-0 h-full w-full object-cover"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.03 }}
                  transition={{
                    type: "tween",
                    ease: "easeInOut",
                    duration: 0.35,
                  }}
                />
              </div>
            </motion.figure>
            <motion.div variants={itemReveal}>
              <h2 className="text-[color:var(--brand-heading)] text-xl md:text-3xl font-semibold">
                Designed with architects, installed by pros
              </h2>
              <p className="mt-2 text-[color:var(--brand-muted)]">
                We collaborate with your design team to specify hardware,
                wiring, and controls that complement the space—then our
                certified technicians install and configure everything.
              </p>
              <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                <li className="rounded-lg border border-black/10 bg-white/60 p-3">
                  Discreet hardware and finishes
                </li>
                <li className="rounded-lg border border-black/10 bg-white/60 p-3">
                  Robust networking and control
                </li>
                <li className="rounded-lg border border-black/10 bg-white/60 p-3">
                  Scenes, schedules, and sensors
                </li>
                <li className="rounded-lg border border-black/10 bg-white/60 p-3">
                  Training and concierge support
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Process */}
      <motion.section
        className="container-narrow py-12 md:py-14"
        variants={containerReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div variants={itemReveal}>
            <h3 className="text-[color:var(--brand-heading)] text-2xl md:text-3xl font-semibold">
              Your path to a smarter home
            </h3>
            <ol className="mt-5 space-y-4 text-[color:var(--brand-text)]">
              <li className="flex gap-4">
                <span className="h-8 w-8 shrink-0 grid place-items-center rounded-full bg-black/90 text-white">
                  1
                </span>
                <div>
                  <p className="font-semibold">Consultation</p>
                  <p className="text-[color:var(--brand-muted)]">
                    Discuss spaces, routines, and goals with a specialist.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="h-8 w-8 shrink-0 grid place-items-center rounded-full bg-black/90 text-white">
                  2
                </span>
                <div>
                  <p className="font-semibold">Design & Scope</p>
                  <p className="text-[color:var(--brand-muted)]">
                    Hardware, wiring, and control plan, tailored to your
                    project.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="h-8 w-8 shrink-0 grid place-items-center rounded-full bg-black/90 text-white">
                  3
                </span>
                <div>
                  <p className="font-semibold">Installation</p>
                  <p className="text-[color:var(--brand-muted)]">
                    Professional install, integration, and testing.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="h-8 w-8 shrink-0 grid place-items-center rounded-full bg-black/90 text-white">
                  4
                </span>
                <div>
                  <p className="font-semibold">Personalization</p>
                  <p className="text-[color:var(--brand-muted)]">
                    Scenes, schedules, and AI routines tuned to you.
                  </p>
                </div>
              </li>
            </ol>
            <div className="mt-6">
              <Link to="/contact" className="btn-primary inline-block">
                Start your project
              </Link>
            </div>
          </motion.div>
          <motion.div variants={itemReveal}>
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-black/10 bg-black/5 parallax-tilt ai-glow">
              <motion.img
                src={smart}
                alt="Smart home dashboard"
                className="absolute inset-0 h-full w-full object-cover"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.03 }}
                transition={{
                  type: "tween",
                  ease: "easeInOut",
                  duration: 0.35,
                }}
              />
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Integrations */}
      <motion.section
        className="container-narrow py-12 md:py-14"
        variants={containerReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <header className="max-w-2xl">
          <h2 className="text-[color:var(--brand-text)] text-2xl md:text-4xl font-semibold">
            Integrations that fit your lifestyle
          </h2>
          <p className="mt-2 text-[color:var(--brand-muted)]">
            We bring devices together so everything feels like one system.
          </p>
        </header>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm">
          {[
            "Lutron lighting and keypads",
            "KNX and DALI controls",
            "Apple Home, Alexa, and Google",
            "Motorized shades and curtains",
            "Multi‑room audio (Sonos, AirPlay)",
            "CCTV, sensors, and smart locks",
          ].map((item, i) => (
            <motion.div
              key={i}
              className="rounded-lg border border-black/10 bg-white/60 p-3"
              variants={itemReveal}
            >
              {item}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* FAQ */}
     
      <motion.section
        className="container-narrow py-12 md:py-14"
        variants={containerReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-[color:var(--brand-text)] text-xl md:text-3xl font-semibold">
          Frequently asked questions
        </h2>
        <div className="mt-6">
          <AccordionFAQ items={faqs} />
        </div>
      </motion.section>
      {/* CTA */}
      <motion.section
        className="container-narrow py-12 md:py-14"
        variants={containerReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div className="max-w-2xl" variants={itemReveal}>
          <h2 className="text-[color:var(--brand-text)] text-xl md:text-3xl font-semibold">
            Ready to design your smart home?
          </h2>
          <p className="mt-2 text-[color:var(--brand-muted)]">
            Book a consultation to scope lighting, shades, and control that feel
            effortless.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-4">
            <Link to="/contact" className="btn-primary ai-glow inline-flex items-center">
              Book a consultation
            </Link>
            <Link to="/contact" className="btn-ghost text-[color:var(--brand-text)] underline-offset-4 hover:underline">
              Talk to a specialist
            </Link>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
}
