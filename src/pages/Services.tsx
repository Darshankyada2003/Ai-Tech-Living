import { Link } from "react-router-dom";
import { motion } from "framer-motion";


export default function Services() {
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
    const services = [
        {
            title: "Intelligent Lighting",
            desc: "Human‑centric, tunable lighting that adapts to your routine and mood.",
            img: "sampleservice.jpg",
            alt: "Intelligent lighting in a living room",
        },
        {
            title: "Climate Control",
            desc: "AI‑assisted heating and cooling for comfort with lower energy use.",
            img: "connect.jpg",
            alt: "Smart climate control across the home",
        },
        {
            title: "Security & Access",
            desc: "Unified cameras, sensors, and smart locks with proactive alerts.",
            img: "homesection.jpg",
            alt: "Modern home security and access",
        },
        {
            title: "Automated Shades",
            desc: "Elegantly control daylight and privacy—timed, sensor‑based, or voice.",
            img: "story1.jpg",
            alt: "Automated shades and blinds",
        },
        {
            title: "Voice & Scenes",
            desc: "One phrase sets the mood—lights, music, temperature, and more.",
            img: "underline.jpg",
            alt: "Voice scenes for the smart home",
        },
        {
            title: "Energy Optimization",
            desc: "Insights and automation to reduce costs and environmental impact.",
            img: "story3.jpg",
            alt: "Energy optimization dashboard",
        },
    ];

    const highlights = [
        { label: "Design‑first", value: "Beautiful hardware and invisible tech" },
        { label: "Secure by design", value: "Local-first control with cloud convenience" },
        { label: "Interoperable", value: "Works with major ecosystems and standards" },
        { label: "Pro install", value: "Consultation, installation, and concierge support" },
    ];

    return (
        <div className="relative">
            {/* Hero */}
            <section
                className="relative min-h-[50vh] md:min-h-[90vh] flex items-end"
                style={{
                    backgroundImage: `url(servicepage.jpg)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-black/25" />
                <div className="relative z-10 w-full">
                    <motion.div
                        className="container-narrow py-12 md:py-16"
                        variants={containerReveal}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.div className="max-w-2xl" variants={itemReveal}>
                            <p className="uppercase tracking-widest text-white text-xs mb-3 drop-shadow">AI Home Automation</p>
                            <h1 className="gradient-text text-3xl md:text-5xl font-semibold leading-tight mb-4 drop-shadow">
                                Effortless living, intelligently orchestrated
                            </h1>
                            <p className="text-white/90 md:text-lg mb-2">
                                From lighting to security, AiTech Living designs seamless, responsive homes that
                                anticipate your needs and elevate everyday comfort.
                            </p>
                            <p className="text-white/90 md:text-lg"><span className="typewriter inline-block">Lighting • Climate • Security • Shades • Voice</span></p>
                            <div className="mt-6 flex flex-wrap items-center gap-4">
                                <Link to="/contact" className="btn-primary ai-glow inline-flex items-center">Book a Consultation</Link>
                                <Link to="/our-solution" className="btn-ghost text-white underline-offset-4 hover:underline">Explore Solutions</Link>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <motion.section
                className="container-narrow py-14"
                variants={containerReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <h2 className="text-2xl md:text-4xl font-semibold text-[color:var(--brand-text)]">Our Services</h2>
                <p className="mt-2 text-[color:var(--brand-muted)] max-w-2xl">
                    Tailored solutions that integrate design, hardware, and software—installed by professionals and
                    tuned for your lifestyle.
                </p>
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((item, idx) => (
                        <motion.article
                            key={idx}
                            className="group overflow-hidden rounded-2xl border border-black/10 bg-[color:var(--brand-surface)] hover:border-black/20 transition-colors"
                            variants={itemReveal}
                        >
                            <div className="relative aspect-[4/3] w-full overflow-hidden parallax-tilt ai-glow">
                                <motion.img
                                    src={item.img}
                                    alt={item.alt}
                                    className="absolute inset-0 h-full w-full object-cover"
                                    initial={{ scale: 1 }}
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ type: "tween", ease: "easeInOut", duration: 0.35 }}
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-lg md:text-xl font-semibold text-[color:var(--brand-text)]">{item.title}</h3>
                                <p className="mt-2 text-[color:var(--brand-muted)]">{item.desc}</p>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </motion.section>

            {/* Highlights */}
            <motion.section
                className="bg-[color:var(--brand-surface)]/50 border-y border-black/10"
                variants={containerReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <div className="container-narrow py-10 md:py-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {highlights.map((h, i) => (
                            <motion.div key={i} className="rounded-xl border border-black/10 bg-white p-5" variants={itemReveal}>
                                <p className="text-[10px] uppercase tracking-widest opacity-70">{h.label}</p>
                                <p className="mt-1 text-[color:var(--brand-text)] font-semibold">{h.value}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* Process */}
            <motion.section
                className="container-narrow py-14"
                variants={containerReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <motion.div variants={itemReveal}>
                        <h3 className="text-[color:var(--brand-text)] text-2xl md:text-3xl font-semibold">How we bring it to life</h3>
                        <ol className="mt-5 space-y-4 text-[color:var(--brand-text)]">
                            <motion.li className="flex gap-4" variants={itemReveal}>
                                <span className="h-8 w-8 shrink-0 grid place-items-center rounded-full bg-black/90 text-white">1</span>
                                <div>
                                    <p className="font-semibold">Consultation</p>
                                    <p className="text-[color:var(--brand-muted)]">We learn your routines, spaces, and goals.</p>
                                </div>
                            </motion.li>
                            <motion.li className="flex gap-4" variants={itemReveal}>
                                <span className="h-8 w-8 shrink-0 grid place-items-center rounded-full bg-black/90 text-white">2</span>
                                <div>
                                    <p className="font-semibold">Design & Scope</p>
                                    <p className="text-[color:var(--brand-muted)]">System blueprint, device selection, and aesthetics.</p>
                                </div>
                            </motion.li>
                            <motion.li className="flex gap-4" variants={itemReveal}>
                                <span className="h-8 w-8 shrink-0 grid place-items-center rounded-full bg-black/90 text-white">3</span>
                                <div>
                                    <p className="font-semibold">Installation</p>
                                    <p className="text-[color:var(--brand-muted)]">Professional install with minimal disruption.</p>
                                </div>
                            </motion.li>
                            <motion.li className="flex gap-4" variants={itemReveal}>
                                <span className="h-8 w-8 shrink-0 grid place-items-center rounded-full bg-black/90 text-white">4</span>
                                <div>
                                    <p className="font-semibold">Personalization</p>
                                    <p className="text-[color:var(--brand-muted)]">Scenes, schedules, and AI routines tuned to you.</p>
                                </div>
                            </motion.li>
                        </ol>
                        <div className="mt-6">
                            <Link to="/contact" className="btn-primary inline-block">Start your project</Link>
                        </div>
                    </motion.div>
                    <motion.div variants={itemReveal}>
                        <div className="relative aspect:[16/10] md:aspect-[16/10] w-full overflow-hidden rounded-xl border border-black/10 bg-black/5">
                            <motion.img
                                src="servicepage.jpg"
                                alt="Installation and setup"
                                className="absolute inset-0 h-full w-full object-cover"
                                initial={{ scale: 1 }}
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "tween", ease: "easeInOut", duration: 0.35 }}
                            />
                        </div>
                    </motion.div>
                </div>
            </motion.section>
        </div>
    );
}
