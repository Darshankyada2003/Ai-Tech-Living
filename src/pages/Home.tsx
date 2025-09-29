import { Link } from "react-router-dom";
import heroImage from "../assets/HomeWorks.png"; // make sure the file exists
// import purest from "../assets/hero.jpg"; // make sure the file exists
import harness from "../assets/harness.png"; // make sure the file exists
import orluna from "../assets/orluna.png"; // make sure the file exists
import press from "../assets/press.png"; // make sure the file exists
import ritz from "../assets/ritz.png"; // make sure the file exists

export default function Home() {
    return (
        <div className="relative">
            <header
                className="relative min-h-[70vh] md:min-h-[90vh] flex items-end"
                style={{
                    backgroundImage: `url(${heroImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0" aria-hidden="true"></div>
                <div className="relative z-10 w-full">
                    <div className="container-narrow py-16">
                        <div className="max-w-2xl">
                            <p className="uppercase tracking-widest text-white text-xs mb-3 drop-shadow-lg">Luxury Automated Blinds</p>
                            <h1 className="text-white text-4xl md:text-6xl font-semibold leading-tight mb-5 drop-shadow-lg">
                                Shape daylight with simple elegance
                            </h1>
                            <p className="text-white text-base md:text-lg mb-8 drop-shadow-lg">
                                Automated window treatments that complement your architecture and elevate everyday living.
                            </p>
                        </div>
                    </div>
                </div>
            </header>
            <main>
                {/* Hero: text left, image right */}
                <section className="container-narrow py-14">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                        <div>
                            <p className="uppercase tracking-widest text-[color:var(--brand-muted)] text-xs mb-3">Luxury Automated Blinds</p>
                            <h2 className="text-[color:var(--brand-text)] text-4xl md:text-5xl font-semibold leading-tight mb-5">
                                The purest expression of modern living
                            </h2>
                            <p className="text-[color:var(--brand-muted)] text-base md:text-lg mb-8">
                                AiTech Living blends thoughtful design with intelligent control, making every space work effortlessly for you.
                            </p>
                            <div className="flex items-center gap-3">
                                <Link to="/contact" className="btn-primary">Book a Demo</Link>
                                <Link to="/services" className="text-[color:var(--brand-text)] underline-offset-4 hover:underline">Explore Products</Link>
                            </div>
                        </div>
                        <div>
                            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-black/10 bg-black/5">
                                <img src={harness} alt="Lifestyle interior" className="absolute inset-0 h-full w-full object-cover" />
                                {/* <button aria-label="Play video" className="absolute inset-0 m-auto h-14 w-14 rounded-full bg-white/90 text-black grid place-items-center shadow-md">
                                    ▶
                                </button> */}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stories section */}
                <section className="bg-[color:var(--brand-surface)]/50 border-y border-black/10">
                    <div className="container-narrow py-12">
                        <h2 className="text-[color:var(--brand-text)] text-xl font-semibold">Stories</h2>
                        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Card 1 */}
                            <article>
                                <figure>
                                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-black/10">
                                        <img src={orluna} alt="Story 1" className="absolute inset-0 h-full w-full object-cover" />
                                    </div>
                                    <figcaption>
                                        <p className="mt-3 text-[10px] uppercase tracking-widest opacity-70">Lutron | Orluna</p>
                                        <p className="mt-2 text-[color:var(--brand-muted)] text-sm leading-6">
                                            We’re pleased to announce the acquisition of Orluna LED Technologies, a UK-based manufacturer of architectural lighting.
                                        </p>
                                    </figcaption>
                                </figure>
                            </article>

                            {/* Card 2 */}
                            <article>
                                <figure>
                                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-black/10">
                                        <img src={ritz} alt="Story 2" className="absolute inset-0 h-full w-full object-cover" />
                                    </div>
                                    <figcaption>
                                        <p className="mt-3 text-[10px] uppercase tracking-widest opacity-70">Project | Ritz Tower</p>
                                        <p className="mt-2 text-[color:var(--brand-muted)] text-sm leading-6">
                                            Elegant control of indoor and outdoor light in a historic renovation at the renowned Ritz Tower.
                                        </p>
                                    </figcaption>
                                </figure>
                            </article>

                            {/* Card 3 */}
                            <article>
                                <figure>
                                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-black/10">
                                        <img src={press} alt="Story 3" className="absolute inset-0 h-full w-full object-cover" />
                                    </div>
                                    <figcaption>
                                        <p className="mt-3 text-[10px] uppercase tracking-widest opacity-70">Press | Design Global</p>
                                        <p className="mt-2 text-[color:var(--brand-muted)] text-sm leading-6">
                                            “Lighting is a designer’s secret weapon in creating ambience for any home.”
                                        </p>
                                    </figcaption>
                                </figure>
                            </article>
                        </div>
                    </div>
                </section>

                {/* Large feature image with text + CTA */}
                <section className="container-narrow py-14">
                    <figure>
                        <div className="relative w-full overflow-hidden rounded-xl border border-black/10">
                            <img src={harness} alt="Kitchen and dining with natural light" className="h-full w-full object-cover" />
                        </div>
                        <figcaption className="mt-6 max-w-2xl">
                            <h3 className="text-[color:var(--brand-text)] text-2xl md:text-3xl font-semibold">Underline space with light</h3>
                            <p className="mt-3 text-[color:var(--brand-muted)] leading-7">
                                Discover the advantages of native, tunable lighting and redefine expectations for what light in the home should be.
                                Intelligent lighting delivers a level of control and customization never before possible.
                            </p>
                            <Link to="/services" className="btn-primary mt-5 inline-block">Explore Lighting</Link>
                        </figcaption>
                    </figure>
                </section>

                {/* Why AiTech Living - Features Grid */}
                <section className="container-narrow py-14">
                    <header className="max-w-2xl">
                        <h2 className="text-[color:var(--brand-text)] text-2xl md:text-3xl font-semibold">Why AiTech Living</h2>
                        <p className="mt-3 text-[color:var(--brand-muted)] leading-7">
                            Seamless control, elegant design, and reliable performance — all working together to make homes smarter, safer, and more comfortable.
                        </p>
                    </header>
                    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <article className="rounded-xl border border-black/10 bg-white/60 p-5">
                            <h3 className="text-[color:var(--brand-text)] font-semibold">Adaptive Automation</h3>
                            <p className="mt-2 text-[color:var(--brand-muted)] text-sm leading-6">Schedules and scenes that learn routines and adjust to natural light.</p>
                        </article>
                        <article className="rounded-xl border border-black/10 bg-white/60 p-5">
                            <h3 className="text-[color:var(--brand-text)] font-semibold">Effortless Control</h3>
                            <p className="mt-2 text-[color:var(--brand-muted)] text-sm leading-6">Intuitive apps, voice assistants, and elegant keypads for every room.</p>
                        </article>
                        <article className="rounded-xl border border-black/10 bg-white/60 p-5">
                            <h3 className="text-[color:var(--brand-text)] font-semibold">Whole‑Home Reliability</h3>
                            <p className="mt-2 text-[color:var(--brand-muted)] text-sm leading-6">Pro‑grade hardware and secure local control keep your system responsive.</p>
                        </article>
                        <article className="rounded-xl border border-black/10 bg-white/60 p-5">
                            <h3 className="text-[color:var(--brand-text)] font-semibold">Design‑Led Finish</h3>
                            <p className="mt-2 text-[color:var(--brand-muted)] text-sm leading-6">Materials and profiles that complement premium interiors and architecture.</p>
                        </article>
                    </div>
                </section>

                {/* How it works */}
                <section className="bg-[color:var(--brand-surface)]/50 border-y border-black/10">
                    <div className="container-narrow py-14">
                        <h2 className="text-[color:var(--brand-text)] text-2xl md:text-3xl font-semibold">How it works</h2>
                        <ol className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 list-none">
                            <li className="rounded-xl border border-black/10 bg-white/60 p-6">
                                <p className="text-[10px] uppercase tracking-widest opacity-70">Step 1</p>
                                <h3 className="mt-2 font-semibold text-[color:var(--brand-text)]">Consult & Design</h3>
                                <p className="mt-2 text-[color:var(--brand-muted)] text-sm leading-6">We map your rooms, routines, and goals to craft a tailored plan.</p>
                            </li>
                            <li className="rounded-xl border border-black/10 bg-white/60 p-6">
                                <p className="text-[10px] uppercase tracking-widest opacity-70">Step 2</p>
                                <h3 className="mt-2 font-semibold text-[color:var(--brand-text)]">Install & Configure</h3>
                                <p className="mt-2 text-[color:var(--brand-muted)] text-sm leading-6">Certified technicians install, integrate, and set up scenes and schedules.</p>
                            </li>
                            <li className="rounded-xl border border-black/10 bg-white/60 p-6">
                                <p className="text-[10px] uppercase tracking-widest opacity-70">Step 3</p>
                                <h3 className="mt-2 font-semibold text-[color:var(--brand-text)]">Support & Evolve</h3>
                                <p className="mt-2 text-[color:var(--brand-muted)] text-sm leading-6">We refine automations over time and keep everything running smoothly.</p>
                            </li>
                        </ol>
                    </div>
                </section>

                {/* Testimonials */}
                <section className="bg-[color:var(--brand-surface)]/50 border-y border-black/10">
                    <div className="container-narrow py-14">
                        <h2 className="text-[color:var(--brand-text)] text-2xl md:text-3xl font-semibold">What clients say</h2>
                        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                            <figure className="rounded-xl border border-black/10 bg-white/60 p-6">
                                <blockquote className="text-[color:var(--brand-text)] leading-7">“Rooms feel calmer and brighter — automations just work in the background.”</blockquote>
                                <figcaption className="mt-3 text-[10px] uppercase tracking-widest opacity-70">Homeowner, Kensington</figcaption>
                            </figure>
                            <figure className="rounded-xl border border-black/10 bg-white/60 p-6">
                                <blockquote className="text-[color:var(--brand-text)] leading-7">“They coordinated with our contractor and delivered a flawless finish.”</blockquote>
                                <figcaption className="mt-3 text-[10px] uppercase tracking-widest opacity-70">Interior Designer, Chelsea</figcaption>
                            </figure>
                            <figure className="rounded-xl border border-black/10 bg-white/60 p-6">
                                <blockquote className="text-[color:var(--brand-text)] leading-7">“Lighting scenes transform the space — mornings and evenings feel different.”</blockquote>
                                <figcaption className="mt-3 text-[10px] uppercase tracking-widest opacity-70">Architect, Marylebone</figcaption>
                            </figure>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section className="container-narrow py-14">
                    <h2 className="text-[color:var(--brand-text)] text-2xl md:text-3xl font-semibold">Frequently asked questions</h2>
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <details className="rounded-xl border border-black/10 bg-white/60 p-5">
                            <summary className="cursor-pointer font-medium text-[color:var(--brand-text)]">Do I need wiring in place?</summary>
                            <p className="mt-2 text-[color:var(--brand-muted)] text-sm leading-6">We support retrofit wireless options and hard‑wired systems for new builds.</p>
                        </details>
                        <details className="rounded-xl border border-black/10 bg-white/60 p-5">
                            <summary className="cursor-pointer font-medium text-[color:var(--brand-text)]">Will this work without internet?</summary>
                            <p className="mt-2 text-[color:var(--brand-muted)] text-sm leading-6">Yes. Core functions run locally; remote access requires a secure connection.</p>
                        </details>
                        <details className="rounded-xl border border-black/10 bg-white/60 p-5">
                            <summary className="cursor-pointer font-medium text-[color:var(--brand-text)]">What does maintenance look like?</summary>
                            <p className="mt-2 text-[color:var(--brand-muted)] text-sm leading-6">We monitor systems proactively and provide scheduled health checks.</p>
                        </details>
                        <details className="rounded-xl border border-black/10 bg-white/60 p-5">
                            <summary className="cursor-pointer font-medium text-[color:var(--brand-text)]">How long is a typical project?</summary>
                            <p className="mt-2 text-[color:var(--brand-muted)] text-sm leading-6">Smaller homes complete in days; larger estates may span several weeks.</p>
                        </details>
                    </div>
                </section>

                {/* Bottom CTA */}
                <section className="bg-[color:var(--brand-surface)]/50 border-y border-black/10">
                    <div className="container-narrow py-14">
                        <div className="max-w-2xl">
                            <h2 className="text-[color:var(--brand-text)] text-2xl md:text-3xl font-semibold">Ready to shape light and comfort?</h2>
                            <p className="mt-3 text-[color:var(--brand-muted)] leading-7">Book a consultation and explore a system designed for the way you live.</p>
                            <div className="mt-6 flex flex-col sm:flex-row gap-3">
                                <Link to="/contact" className="btn-primary">Book a Consultation</Link>
                                <Link to="/services" className="text-[color:var(--brand-text)] underline-offset-4 hover:underline">See Services</Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
