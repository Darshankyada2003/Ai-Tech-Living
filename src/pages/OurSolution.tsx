import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import hero from "../assets/hero.png";
import homeImg from "../assets/home.jpg";
import harness from "../assets/harness.png";
import ritz from "../assets/ritz.png";

export default function OurSolution() {
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

  const sectors = [
    {
      title: "Home Automation",
      desc: "AI‑powered comfort, lighting, security and shades—effortless and beautiful.",
      img: homeImg,
      to: "/home-automation",
    },
    {
      title: "Office Automation",
      desc: "Smart workplaces with energy‑aware lighting, access, and meeting room control.",
      img: harness,
      to: "/office-automation",
    },
    {
      title: "Hospital Automation",
      desc: "Patient‑centric environments—adaptive lighting, nurse call integration, and safety.",
      img: hero,
      to: "/hospital-automation",
    },
    {
      title: "Hotel Automation",
      desc: "Premium guest experiences—scene presets, access, and energy optimization.",
      img: ritz,
      to: "/hotel-automation",
    },
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
              <p className="uppercase tracking-widest text-white/95 text-xs mb-2">Solutions</p>
              <h1 className="gradient-text text-3xl md:text-5xl font-semibold leading-tight mb-3">Our Solution</h1>
              <p className="text-white/90 md:text-lg"><span className="typewriter inline-block">Home • Office • Hospital • Hotel</span></p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <motion.section
        className="container-narrow py-12 md:py-14"
        variants={containerReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-[color:var(--brand-text)] text-2xl md:text-4xl font-semibold">Explore by sector</h2>
        <p className="mt-2 text-[color:var(--brand-muted)] max-w-2xl">Each vertical has unique needs—we design systems that fit the experience and operations you want.</p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sectors.map((s, i) => (
            <motion.article key={i} className="group rounded-2xl overflow-hidden border border-black/10 bg-white/70" variants={itemReveal}>
              <div className="relative aspect-[4/3] w-full overflow-hidden parallax-tilt ai-glow">
                <motion.img
                  src={s.img}
                  alt={s.title}
                  className="absolute inset-0 h-full w-full object-cover"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "tween", ease: "easeInOut", duration: 0.35 }}
                />
              </div>
              <div className="p-5">
                <h3 className="text-[color:var(--brand-text)] font-semibold">{s.title}</h3>
                <p className="mt-1 text-[color:var(--brand-muted)] text-sm">{s.desc}</p>
                <Link to={s.to} className="mt-4 inline-block btn-ghost underline-offset-4 hover:underline">Learn more</Link>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.section>
    </div>
  );
}


