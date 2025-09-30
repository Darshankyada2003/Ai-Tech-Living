import hero from "../assets/hero.jpg";
import { motion } from "framer-motion";
import lifestyle from "../assets/harness.png";
import type { Variants } from "framer-motion";

export default function About() {
    const containerReveal: Variants = {
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.3, ease: "easeOut", when: "beforeChildren", staggerChildren: 0.1 },
        },
    };

    const itemReveal: Variants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
    };

    return (
        <div className="relative">
            {/* Hero */}
            <div
                className="relative min-h-[40vh] sm:min-h-[50vh] md:min-h-[90vh] flex items-end"
                style={{
                    backgroundImage: `url(${hero})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="relative z-10 w-full">
                    <motion.div
                        className="container-narrow py-8 sm:py-12 md:py-14"
                        variants={containerReveal}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.div className="max-w-2xl" variants={itemReveal}>
                            <p className="uppercase tracking-widest text-white/90 text-xs mb-2 sm:mb-3">About Us</p>
                            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-semibold leading-tight mb-3 sm:mb-4">
                                Elevating everyday living with thoughtful automation
                            </h1>
                            <p className="text-white/90 text-sm sm:text-base md:text-lg">
                                We blend architecture, lighting, and intelligent control to create effortless, beautiful homes.
                            </p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            <main>
                {/* Story */}
                <motion.section
                    className="container-narrow py-8 sm:py-12 md:py-14"
                    variants={containerReveal}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-center">
                        <motion.div variants={itemReveal}>
                            <p className="uppercase tracking-widest text-[color:var(--brand-muted)] text-xs mb-2 sm:mb-3">Our Story</p>
                            <h2 className="text-[color:var(--brand-text)] text-2xl sm:text-3xl md:text-4xl font-semibold leading-tight mb-3 sm:mb-5">
                                Crafting calm, intuitive homes
                            </h2>
                            <p className="text-[color:var(--brand-muted)] text-sm sm:text-base leading-6 sm:leading-7 mb-3 sm:mb-4">
                                AiTech Living is dedicated to redefining modern lifestyles through technology, design, and sustainability. From automated lighting and window treatments to integrated climate and security, our systems are designed around your life.
                            </p>
                            <p className="text-[color:var(--brand-muted)] text-sm sm:text-base leading-6 sm:leading-7">
                                We work closely with homeowners, architects, and designers to deliver seamless experiences that feel natural from day one—and continue to adapt as your needs evolve.
                            </p>
                        </motion.div>
                        <motion.div variants={itemReveal}>
                            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg sm:rounded-xl border border-black/10 bg-black/5">
                                <motion.img
                                    src={lifestyle}
                                    alt="Lifestyle interior"
                                    className="absolute inset-0 h-full w-full object-cover"
                                    initial={{ scale: 1 }}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.98 }}
                                    transition={{ type: "tween", duration: 0.35, ease: "easeInOut" }}
                                />
                            </div>
                        </motion.div>
                    </div>
                </motion.section>

                {/* Values */}
                <motion.section
                    className="bg-[color:var(--brand-surface)]/60 border-y border-black/10"
                    variants={containerReveal}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <div className="container-narrow py-8 sm:py-10 md:py-12">
                        <h3 className="text-[color:var(--brand-text)] text-lg sm:text-xl font-semibold">What we value</h3>
                        <div className="mt-4 sm:mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                            <motion.article variants={itemReveal}>
                                <h4 className="text-[color:var(--brand-text)] text-sm sm:text-base font-semibold">Design-first</h4>
                                <p className="mt-1 sm:mt-2 text-[color:var(--brand-muted)] text-xs sm:text-sm leading-5 sm:leading-6">
                                    Technology that complements architecture—discreet, elegant, and timeless.
                                </p>
                            </motion.article>
                            <motion.article variants={itemReveal}>
                                <h4 className="text-[color:var(--brand-text)] text-sm sm:text-base font-semibold">Effortless control</h4>
                                <p className="mt-1 sm:mt-2 text-[color:var(--brand-muted)] text-xs sm:text-sm leading-5 sm:leading-6">
                                    Scenes and schedules that anticipate needs and simplify routines.
                                </p>
                            </motion.article>
                            <motion.article variants={itemReveal}>
                                <h4 className="text-[color:var(--brand-text)] text-sm sm:text-base font-semibold">Sustainable comfort</h4>
                                <p className="mt-1 sm:mt-2 text-[color:var(--brand-muted)] text-xs sm:text-sm leading-5 sm:leading-6">
                                    Daylight, shading, and tunable light working together for well-being.
                                </p>
                            </motion.article>
                        </div>
                    </div>
                </motion.section>

                {/* Stats */}
                <motion.section
                    className="container-narrow py-8 sm:py-10 md:py-12"
                    variants={containerReveal}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-center md:text-left">
                        <motion.div variants={itemReveal}>
                            <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[color:var(--brand-text)]">10+ yrs</p>
                            <p className="text-[color:var(--brand-muted)] text-xs sm:text-sm mt-1">Of delivering smart homes</p>
                        </motion.div>
                        <motion.div variants={itemReveal}>
                            <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[color:var(--brand-text)]">250+ </p>
                            <p className="text-[color:var(--brand-muted)] text-xs sm:text-sm mt-1">Completed projects</p>
                        </motion.div>
                        <motion.div variants={itemReveal}>
                            <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[color:var(--brand-text)]">98%</p>
                            <p className="text-[color:var(--brand-muted)] text-xs sm:text-sm mt-1">Client satisfaction</p>
                        </motion.div>
                    </div>
                </motion.section>

                {/* CTA */}
                <motion.section
                    className="container-narrow pb-8 sm:pb-12 md:pb-16"
                    variants={containerReveal}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <div className="relative w-full overflow-hidden rounded-lg sm:rounded-xl border border-black/10">
                        <motion.img
                            src={lifestyle}
                            alt="Light-filled space"
                            className="h-full w-full object-cover"
                            initial={{ scale: 1 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            transition={{ type: "tween", duration: 0.35, ease: "easeInOut" }}
                        />
                        <div className="absolute inset-0 bg-black/30" />
                        {/* Desktop/Tablet overlay (hidden on mobile) */}
                        <div className="hidden md:flex absolute inset-0 items-center">
                            <div className="p-4 sm:p-6 md:p-10 max-w-xl">
                                <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-semibold">Ready to shape your space with light?</h3>
                                <p className="text-white/90 mt-2 sm:mt-3 text-sm sm:text-base leading-6 sm:leading-7">
                                    Speak with a specialist to explore lighting, shading, and whole-home control options.
                                </p>
                                {/* <div className="mt-4 sm:mt-5 flex flex-col sm:flex-row items-start sm:items-center gap-3">
                                    <Link to="/contact" className="btn-primary w-full sm:w-auto">Book a Consultation</Link>
                                    <Link to="/services" className="text-white underline-offset-4 hover:underline text-sm sm:text-base">Explore Services</Link>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    {/* Mobile: text below image (no overlay) */}
                    <div className="md:hidden mt-3">
                        <h3 className="text-[color:var(--brand-text)] text-lg sm:text-xl font-semibold">Ready to shape your space with light?</h3>
                        <p className="mt-2 text-[color:var(--brand-muted)] text-sm leading-6">
                            Speak with a specialist to explore lighting, shading, and whole-home control options.
                        </p>
                        {/* <div className="mt-3 flex flex-col sm:flex-row items-start gap-3">
                            <Link to="/contact" className="btn-primary w-full sm:w-auto">Book a Consultation</Link>
                            <Link to="/services" className="text-[color:var(--brand-text)] underline-offset-4 hover:underline text-sm">Explore Services</Link>
                        </div> */}
                    </div>
                </motion.section>
            </main>
        </div>
    );
}
