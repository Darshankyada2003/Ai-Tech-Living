import { Link } from "react-router-dom";
import { useState } from "react";
import heroImage from "../assets/HomeWorks.png"; // make sure the file exists
import heroVideo from "../assets/smaple.mp4"; // make sure the file exists
// import purest from "../assets/hero.jpg"; // make sure the file exists
import harness from "../assets/harness.png"; // make sure the file exists
import orluna from "../assets/orluna.png"; // make sure the file exists
import press from "../assets/press.png"; // make sure the file exists
import ritz from "../assets/ritz.png"; // make sure the file exists
import { motion } from "framer-motion";
import HomeAutomationModal from "../components/HomeAutomationModal";
// import type { Variants } from "framer-motion";

export default function Home() {
    const [showHomeAutomation, setShowHomeAutomation] = useState(false);

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
            <header
                className="relative min-h-[60vh] sm:min-h-[70vh] md:min-h-[90vh] flex items-end"
            >
                <video
                    className="absolute inset-0 h-full w-full object-cover"
                    src={heroVideo}
                    poster={heroImage}
                    autoPlay
                    muted
                    loop
                    playsInline
                />
                <div className="absolute inset-0" aria-hidden="true"></div>
                <div className="relative z-10 w-full">
                    <motion.div 
                        className="container-narrow py-8 sm:py-12 md:py-16"
                        variants={containerReveal}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <motion.div className="max-w-2xl" variants={itemReveal}>
                            <motion.p 
                                className="uppercase tracking-widest text-white text-xs mb-2 sm:mb-3 drop-shadow-lg"
                                variants={itemReveal}
                            >
                                Luxury Automated Blinds
                            </motion.p>
                            <motion.h1 
                                className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-semibold leading-tight mb-3 sm:mb-5 drop-shadow-lg"
                                variants={itemReveal}
                            >
                                Shape daylight with simple elegance
                            </motion.h1>
                            <motion.p 
                                className="text-white text-sm sm:text-base md:text-lg mb-6 sm:mb-8 drop-shadow-lg"
                                variants={itemReveal}
                            >
                                Automated window treatments that complement your architecture and elevate everyday living.
                            </motion.p>
                        </motion.div>
                    </motion.div>
                </div>
            </header>
            <main>
                {/* Hero: text left, image right */}
                <motion.section
                    className="container-narrow py-8 sm:py-12 md:py-14"
                    variants={containerReveal}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-center">
                        <motion.div variants={itemReveal}>
                            <p className="uppercase tracking-widest text-[color:var(--brand-muted)] text-xs mb-2 sm:mb-3">Luxury Automated Blinds</p>
                            <h2 className="text-[color:var(--brand-text)] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-3 sm:mb-5">
                                The purest expression of modern living
                            </h2>
                            <p className="text-[color:var(--brand-muted)] text-sm sm:text-base md:text-lg mb-6 sm:mb-8">
                                AiTech Living blends thoughtful design with intelligent control, making every space work effortlessly for you.
                            </p>
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                                <button 
                                    onClick={() => setShowHomeAutomation(true)}
                                    className="btn-primary w-full sm:w-auto"
                                >
                                    Book a Demo
                                </button>
                                <Link to="/services" className="text-[color:var(--brand-text)] underline-offset-4 hover:underline text-sm sm:text-base">Explore Products</Link>
                            </div>
                        </motion.div>
                        <motion.div variants={itemReveal}>
                            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-black/10 bg-black/5">
                                <motion.img
                                    src={harness}
                                    alt="Lifestyle interior"
                                    className="absolute inset-0 h-full w-full object-cover"
                                    initial={{ scale: 1 }}
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ type: "tween", ease: "easeInOut", duration: 0.35 }}
                                />
                                {/* <button aria-label="Play video" className="absolute inset-0 m-auto h-14 w-14 rounded-full bg-white/90 text-black grid place-items-center shadow-md">
                                    ▶
                                </button> */}
                            </div>
                        </motion.div>
                    </div>
                </motion.section>

                {/* Stories section */}
                <motion.section
                    className="bg-[color:var(--brand-surface)]/50 border-y border-black/10"
                    variants={containerReveal}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <div className="container-narrow py-8 sm:py-10 md:py-12">
                        <h2 className="text-[color:var(--brand-text)] text-lg sm:text-xl font-semibold">Stories</h2>
                        <div className="mt-4 sm:mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                            {/* Card 1 */}
                            <motion.article variants={itemReveal}>
                                <figure>
                                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-black/10">
                                        <motion.img
                                            src={orluna}
                                            alt="Story 1"
                                            className="absolute inset-0 h-full w-full object-cover"
                                            initial={{ scale: 1 }}
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ type: "tween", ease: "easeInOut", duration: 0.35 }}
                                        />
                                    </div>
                                    <figcaption>
                                        <p className="mt-2 sm:mt-3 text-[10px] uppercase tracking-widest opacity-70">Lutron | Orluna</p>
                                        <p className="mt-1 sm:mt-2 text-[color:var(--brand-muted)] text-xs sm:text-sm leading-5 sm:leading-6">
                                            We're pleased to announce the acquisition of Orluna LED Technologies, a UK-based manufacturer of architectural lighting.
                                        </p>
                                    </figcaption>
                                </figure>
                            </motion.article>

                            {/* Card 2 */}
                            <motion.article variants={itemReveal}>
                                <figure>
                                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-black/10">
                                        <motion.img
                                            src={ritz}
                                            alt="Story 2"
                                            className="absolute inset-0 h-full w-full object-cover"
                                            initial={{ scale: 1 }}
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ type: "tween", ease: "easeInOut", duration: 0.35 }}
                                        />
                                    </div>
                                    <figcaption>
                                        <p className="mt-2 sm:mt-3 text-[10px] uppercase tracking-widest opacity-70">Project | Ritz Tower</p>
                                        <p className="mt-1 sm:mt-2 text-[color:var(--brand-muted)] text-xs sm:text-sm leading-5 sm:leading-6">
                                            Elegant control of indoor and outdoor light in a historic renovation at the renowned Ritz Tower.
                                        </p>
                                    </figcaption>
                                </figure>
                            </motion.article>

                            {/* Card 3 */}
                            <motion.article variants={itemReveal}>
                                <figure>
                                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-black/10">
                                        <motion.img
                                            src={press}
                                            alt="Story 3"
                                            className="absolute inset-0 h-full w-full object-cover"
                                            initial={{ scale: 1 }}
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ type: "tween", ease: "easeInOut", duration: 0.35 }}
                                        />
                                    </div>
                                    <figcaption>
                                        <p className="mt-2 sm:mt-3 text-[10px] uppercase tracking-widest opacity-70">Press | Design Global</p>
                                        <p className="mt-1 sm:mt-2 text-[color:var(--brand-muted)] text-xs sm:text-sm leading-5 sm:leading-6">
                                            "Lighting is a designer's secret weapon in creating ambience for any home."
                                        </p>
                                    </figcaption>
                                </figure>
                            </motion.article>
                        </div>
                    </div>
                </motion.section>

                {/* Large feature image with text + CTA */}
                <motion.section
                    className="container-narrow py-8 sm:py-12 md:py-14"
                    variants={containerReveal}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <motion.figure variants={itemReveal}>
                        <div className="relative w-full overflow-hidden rounded-lg sm:rounded-xl border border-black/10">
                            <motion.img
                                src={harness}
                                alt="Kitchen and dining with natural light"
                                className="h-full w-full object-cover"
                                initial={{ scale: 1 }}
                                whileHover={{ scale: 1.03 }}
                                transition={{ type: "tween", ease: "easeInOut", duration: 0.35 }}
                            />
                        </div>
                        <figcaption className="mt-4 sm:mt-6 max-w-2xl">
                            <h3 className="text-[color:var(--brand-text)] text-xl sm:text-2xl md:text-3xl font-semibold">Underline space with light</h3>
                            <p className="mt-2 sm:mt-3 text-[color:var(--brand-muted)] text-sm sm:text-base leading-6 sm:leading-7">
                                Discover the advantages of native, tunable lighting and redefine expectations for what light in the home should be.
                                Intelligent lighting delivers a level of control and customization never before possible.
                            </p>
                            <Link to="/services" className="btn-primary mt-3 sm:mt-5 inline-block w-full sm:w-auto text-center">Explore Lighting</Link>
                        </figcaption>
                    </motion.figure>
                </motion.section>

                {/* Why AiTech Living - Features Grid */}
                <motion.section
                    className="container-narrow py-8 sm:py-12 md:py-14"
                    variants={containerReveal}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <header className="max-w-2xl">
                        <h2 className="text-[color:var(--brand-text)] text-xl sm:text-2xl md:text-3xl font-semibold">Why AiTech Living</h2>
                        <p className="mt-2 sm:mt-3 text-[color:var(--brand-muted)] text-sm sm:text-base leading-6 sm:leading-7">
                            Seamless control, elegant design, and reliable performance — all working together to make homes smarter, safer, and more comfortable.
                        </p>
                    </header>
                    <div className="mt-6 sm:mt-8 md:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                        <motion.article className="rounded-lg sm:rounded-xl border border-black/10 bg-white/60 p-4 sm:p-5" variants={itemReveal}>
                            <h3 className="text-[color:var(--brand-text)] text-sm sm:text-base font-semibold">Adaptive Automation</h3>
                            <p className="mt-1 sm:mt-2 text-[color:var(--brand-muted)] text-xs sm:text-sm leading-5 sm:leading-6">Schedules and scenes that learn routines and adjust to natural light.</p>
                        </motion.article>
                        <motion.article className="rounded-lg sm:rounded-xl border border-black/10 bg-white/60 p-4 sm:p-5" variants={itemReveal}>
                            <h3 className="text-[color:var(--brand-text)] text-sm sm:text-base font-semibold">Effortless Control</h3>
                            <p className="mt-1 sm:mt-2 text-[color:var(--brand-muted)] text-xs sm:text-sm leading-5 sm:leading-6">Intuitive apps, voice assistants, and elegant keypads for every room.</p>
                        </motion.article>
                        <motion.article className="rounded-lg sm:rounded-xl border border-black/10 bg-white/60 p-4 sm:p-5" variants={itemReveal}>
                            <h3 className="text-[color:var(--brand-text)] text-sm sm:text-base font-semibold">Whole‑Home Reliability</h3>
                            <p className="mt-1 sm:mt-2 text-[color:var(--brand-muted)] text-xs sm:text-sm leading-5 sm:leading-6">Pro‑grade hardware and secure local control keep your system responsive.</p>
                        </motion.article>
                        <motion.article className="rounded-lg sm:rounded-xl border border-black/10 bg-white/60 p-4 sm:p-5" variants={itemReveal}>
                            <h3 className="text-[color:var(--brand-text)] text-sm sm:text-base font-semibold">Design‑Led Finish</h3>
                            <p className="mt-1 sm:mt-2 text-[color:var(--brand-muted)] text-xs sm:text-sm leading-5 sm:leading-6">Materials and profiles that complement premium interiors and architecture.</p>
                        </motion.article>
                    </div>
                </motion.section>

                {/* How it works */}
                <motion.section
                    className="bg-[color:var(--brand-surface)]/50 border-y border-black/10"
                    variants={containerReveal}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <div className="container-narrow py-8 sm:py-12 md:py-14">
                        <h2 className="text-[color:var(--brand-text)] text-xl sm:text-2xl md:text-3xl font-semibold">How it works</h2>
                        <ol className="mt-6 sm:mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 list-none">
                            <motion.li className="rounded-lg sm:rounded-xl border border-black/10 bg-white/60 p-4 sm:p-6" variants={itemReveal}>
                                <p className="text-[10px] uppercase tracking-widest opacity-70">Step 1</p>
                                <h3 className="mt-1 sm:mt-2 text-sm sm:text-base font-semibold text-[color:var(--brand-text)]">Consult & Design</h3>
                                <p className="mt-1 sm:mt-2 text-[color:var(--brand-muted)] text-xs sm:text-sm leading-5 sm:leading-6">We map your rooms, routines, and goals to craft a tailored plan.</p>
                            </motion.li>
                            <motion.li className="rounded-lg sm:rounded-xl border border-black/10 bg-white/60 p-4 sm:p-6" variants={itemReveal}>
                                <p className="text-[10px] uppercase tracking-widest opacity-70">Step 2</p>
                                <h3 className="mt-1 sm:mt-2 text-sm sm:text-base font-semibold text-[color:var(--brand-text)]">Install & Configure</h3>
                                <p className="mt-1 sm:mt-2 text-[color:var(--brand-muted)] text-xs sm:text-sm leading-5 sm:leading-6">Certified technicians install, integrate, and set up scenes and schedules.</p>
                            </motion.li>
                            <motion.li className="rounded-lg sm:rounded-xl border border-black/10 bg-white/60 p-4 sm:p-6" variants={itemReveal}>
                                <p className="text-[10px] uppercase tracking-widest opacity-70">Step 3</p>
                                <h3 className="mt-1 sm:mt-2 text-sm sm:text-base font-semibold text-[color:var(--brand-text)]">Support & Evolve</h3>
                                <p className="mt-1 sm:mt-2 text-[color:var(--brand-muted)] text-xs sm:text-sm leading-5 sm:leading-6">We refine automations over time and keep everything running smoothly.</p>
                            </motion.li>
                        </ol>
                    </div>
                </motion.section>

                {/* AiTech Living – Intelligent Home Automation (image + content) */}
                <motion.section
                    className="container-narrow py-8 sm:py-12 md:py-14"
                    variants={containerReveal}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-center">
                        <motion.figure variants={itemReveal}>
                            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-black/10 bg-black/5">
                                <motion.img
                                    src={heroImage}
                                    alt="Modern living room with automated blinds and lighting"
                                    className="absolute inset-0 h-full w-full object-cover"
                                    initial={{ scale: 1 }}
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ type: "tween", ease: "easeInOut", duration: 0.35 }}
                                />
                            </div>
                            <figcaption className="sr-only">A showcase of AiTech Living automation in a contemporary home.</figcaption>
                        </motion.figure>
                        <motion.div variants={itemReveal}>
                            <h2 className="text-[color:var(--brand-text)] text-xl sm:text-2xl md:text-3xl font-semibold">Intelligent home automation, beautifully integrated</h2>
                            <p className="mt-2 sm:mt-3 text-[color:var(--brand-muted)] text-sm sm:text-base leading-6 sm:leading-7">
                                From sunrise to evening wind‑down, AiTech Living orchestrates light, blinds, and ambience so your home feels effortless every day.
                            </p>
                            <ul className="mt-4 sm:mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                                <li className="rounded-lg border border-black/10 bg-white/60 p-2 sm:p-3 text-xs sm:text-sm text-[color:var(--brand-text)]">Scene‑based lighting for every moment</li>
                                <li className="rounded-lg border border-black/10 bg-white/60 p-2 sm:p-3 text-xs sm:text-sm text-[color:var(--brand-text)]">Automated shades that track natural light</li>
                                <li className="rounded-lg border border-black/10 bg-white/60 p-2 sm:p-3 text-xs sm:text-sm text-[color:var(--brand-text)]">Quiet, reliable hardware with local control</li>
                                <li className="rounded-lg border border-black/10 bg-white/60 p-2 sm:p-3 text-xs sm:text-sm text-[color:var(--brand-text)]">Voice, app, and keypad control options</li>
                            </ul>
                            <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-3">
                                <button 
                                    onClick={() => setShowHomeAutomation(true)}
                                    className="btn-primary w-full sm:w-auto"
                                >
                                    Start Your Project
                                </button>
                                <Link to="/services" className="text-[color:var(--brand-text)] underline-offset-4 hover:underline text-sm sm:text-base">View Solutions</Link>
                            </div>
                        </motion.div>
                    </div>
                </motion.section>

                {/* Testimonials */}
                <motion.section
                    className="bg-[color:var(--brand-surface)]/50 border-y border-black/10"
                    variants={containerReveal}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <div className="container-narrow py-8 sm:py-12 md:py-14">
                        <h2 className="text-[color:var(--brand-text)] text-xl sm:text-2xl md:text-3xl font-semibold">What clients say</h2>
                        <div className="mt-6 sm:mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                            <motion.figure className="rounded-lg sm:rounded-xl border border-black/10 bg-white/60 p-4 sm:p-6" variants={itemReveal}>
                                <blockquote className="text-[color:var(--brand-text)] text-sm sm:text-base leading-6 sm:leading-7">"Rooms feel calmer and brighter — automations just work in the background."</blockquote>
                                <figcaption className="mt-2 sm:mt-3 text-[10px] uppercase tracking-widest opacity-70">Homeowner, Kensington</figcaption>
                            </motion.figure>
                            <motion.figure className="rounded-lg sm:rounded-xl border border-black/10 bg-white/60 p-4 sm:p-6" variants={itemReveal}>
                                <blockquote className="text-[color:var(--brand-text)] text-sm sm:text-base leading-6 sm:leading-7">"They coordinated with our contractor and delivered a flawless finish."</blockquote>
                                <figcaption className="mt-2 sm:mt-3 text-[10px] uppercase tracking-widest opacity-70">Interior Designer, Chelsea</figcaption>
                            </motion.figure>
                            <motion.figure className="rounded-lg sm:rounded-xl border border-black/10 bg-white/60 p-4 sm:p-6" variants={itemReveal}>
                                <blockquote className="text-[color:var(--brand-text)] text-sm sm:text-base leading-6 sm:leading-7">"Lighting scenes transform the space — mornings and evenings feel different."</blockquote>
                                <figcaption className="mt-2 sm:mt-3 text-[10px] uppercase tracking-widest opacity-70">Architect, Marylebone</figcaption>
                            </motion.figure>
                        </div>
                    </div>
                </motion.section>

                {/* FAQ */}
                <motion.section
                    className="container-narrow py-8 sm:py-12 md:py-14"
                    variants={containerReveal}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <h2 className="text-[color:var(--brand-text)] text-xl sm:text-2xl md:text-3xl font-semibold">Frequently asked questions</h2>
                    <div className="mt-4 sm:mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                        <motion.details className="rounded-lg sm:rounded-xl border border-black/10 bg-white/60 p-4 sm:p-5" variants={itemReveal}>
                            <summary className="cursor-pointer text-sm sm:text-base font-medium text-[color:var(--brand-text)]">Do I need wiring in place?</summary>
                            <p className="mt-1 sm:mt-2 text-[color:var(--brand-muted)] text-xs sm:text-sm leading-5 sm:leading-6">We support retrofit wireless options and hard‑wired systems for new builds.</p>
                        </motion.details>
                        <motion.details className="rounded-lg sm:rounded-xl border border-black/10 bg-white/60 p-4 sm:p-5" variants={itemReveal}>
                            <summary className="cursor-pointer text-sm sm:text-base font-medium text-[color:var(--brand-text)]">Will this work without internet?</summary>
                            <p className="mt-1 sm:mt-2 text-[color:var(--brand-muted)] text-xs sm:text-sm leading-5 sm:leading-6">Yes. Core functions run locally; remote access requires a secure connection.</p>
                        </motion.details>
                        <motion.details className="rounded-lg sm:rounded-xl border border-black/10 bg-white/60 p-4 sm:p-5" variants={itemReveal}>
                            <summary className="cursor-pointer text-sm sm:text-base font-medium text-[color:var(--brand-text)]">What does maintenance look like?</summary>
                            <p className="mt-1 sm:mt-2 text-[color:var(--brand-muted)] text-xs sm:text-sm leading-5 sm:leading-6">We monitor systems proactively and provide scheduled health checks.</p>
                        </motion.details>
                        <motion.details className="rounded-lg sm:rounded-xl border border-black/10 bg-white/60 p-4 sm:p-5" variants={itemReveal}>
                            <summary className="cursor-pointer text-sm sm:text-base font-medium text-[color:var(--brand-text)]">How long is a typical project?</summary>
                            <p className="mt-1 sm:mt-2 text-[color:var(--brand-muted)] text-xs sm:text-sm leading-5 sm:leading-6">Smaller homes complete in days; larger estates may span several weeks.</p>
                        </motion.details>
                    </div>
                </motion.section>

                {/* Bottom CTA */}
                <motion.section
                    className="bg-[color:var(--brand-surface)]/50 border-y border-black/10"
                    variants={containerReveal}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <div className="container-narrow py-8 sm:py-12 md:py-14">
                        <motion.div className="max-w-2xl" variants={itemReveal}>
                            <h2 className="text-[color:var(--brand-text)] text-xl sm:text-2xl md:text-3xl font-semibold">Ready to shape light and comfort?</h2>
                            <p className="mt-2 sm:mt-3 text-[color:var(--brand-muted)] text-sm sm:text-base leading-6 sm:leading-7">Book a consultation and explore a system designed for the way you live.</p>
                            <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-3">
                                <button 
                                    onClick={() => setShowHomeAutomation(true)}
                                    className="btn-primary w-full sm:w-auto"
                                >
                                    Book a Consultation
                                </button>
                                <Link to="/services" className="text-[color:var(--brand-text)] underline-offset-4 hover:underline text-sm sm:text-base">See Services</Link>
                            </div>
                        </motion.div>
                    </div>
                </motion.section>
            </main>

            {/* Home Automation Modal */}
            <HomeAutomationModal
                isOpen={showHomeAutomation}
                onClose={() => setShowHomeAutomation(false)}
            />
        </div>
    );
}
