import { Link } from "react-router-dom";
import hero from "../assets/hero.jpg";
import lifestyle from "../assets/harness.png";

export default function About() {
    return (
        <div className="relative">
            {/* Hero */}
            <div
                className="relative min-h-[50vh] md:min-h-[90vh] flex items-end"
                style={{
                    backgroundImage: `url(${hero})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="relative z-10 w-full">
                    <div className="container-narrow py-14">
                        <div className="max-w-2xl">
                            <p className="uppercase tracking-widest text-white/90 text-xs mb-3">About Us</p>
                            <h1 className="text-white text-4xl md:text-6xl font-semibold leading-tight mb-4">
                                Elevating everyday living with thoughtful automation
                            </h1>
                            <p className="text-white/90 text-base md:text-lg">
                                We blend architecture, lighting, and intelligent control to create effortless, beautiful homes.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <main>
                {/* Story */}
                <section className="container-narrow py-14">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                        <div>
                            <p className="uppercase tracking-widest text-[color:var(--brand-muted)] text-xs mb-3">Our Story</p>
                            <h2 className="text-[color:var(--brand-text)] text-3xl md:text-4xl font-semibold leading-tight mb-5">
                                Crafting calm, intuitive homes
                            </h2>
                            <p className="text-[color:var(--brand-muted)] leading-7 mb-4">
                                AiTech Living is dedicated to redefining modern lifestyles through technology, design, and sustainability. From automated lighting and window treatments to integrated climate and security, our systems are designed around your life.
                            </p>
                            <p className="text-[color:var(--brand-muted)] leading-7">
                                We work closely with homeowners, architects, and designers to deliver seamless experiences that feel natural from day one—and continue to adapt as your needs evolve.
                            </p>
                        </div>
                        <div>
                            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-black/10 bg-black/5">
                                <img src={lifestyle} alt="Lifestyle interior" className="absolute inset-0 h-full w-full object-cover" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Values */}
                <section className="bg-[color:var(--brand-surface)]/60 border-y border-black/10">
                    <div className="container-narrow py-12">
                        <h3 className="text-[color:var(--brand-text)] text-xl font-semibold">What we value</h3>
                        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                            <article>
                                <h4 className="text-[color:var(--brand-text)] font-semibold">Design-first</h4>
                                <p className="mt-2 text-[color:var(--brand-muted)] text-sm leading-6">
                                    Technology that complements architecture—discreet, elegant, and timeless.
                                </p>
                            </article>
                            <article>
                                <h4 className="text-[color:var(--brand-text)] font-semibold">Effortless control</h4>
                                <p className="mt-2 text-[color:var(--brand-muted)] text-sm leading-6">
                                    Scenes and schedules that anticipate needs and simplify routines.
                                </p>
                            </article>
                            <article>
                                <h4 className="text-[color:var(--brand-text)] font-semibold">Sustainable comfort</h4>
                                <p className="mt-2 text-[color:var(--brand-muted)] text-sm leading-6">
                                    Daylight, shading, and tunable light working together for well-being.
                                </p>
                            </article>
                        </div>
                    </div>
                </section>

                {/* Stats */}
                <section className="container-narrow py-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                        <div>
                            <p className="text-3xl md:text-4xl font-semibold text-[color:var(--brand-text)]">10+ yrs</p>
                            <p className="text-[color:var(--brand-muted)] text-sm mt-1">Of delivering smart homes</p>
                        </div>
                        <div>
                            <p className="text-3xl md:text-4xl font-semibold text-[color:var(--brand-text)]">250+ </p>
                            <p className="text-[color:var(--brand-muted)] text-sm mt-1">Completed projects</p>
                        </div>
                        <div>
                            <p className="text-3xl md:text-4xl font-semibold text-[color:var(--brand-text)]">98%</p>
                            <p className="text-[color:var(--brand-muted)] text-sm mt-1">Client satisfaction</p>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="container-narrow pb-16">
                    <div className="relative w-full overflow-hidden rounded-xl border border-black/10">
                        <img src={lifestyle} alt="Light-filled space" className="h-full w-full object-cover" />
                        <div className="absolute inset-0 bg-black/30" />
                        <div className="absolute inset-0 flex items-center">
                            <div className="p-6 md:p-10 max-w-xl">
                                <h3 className="text-white text-2xl md:text-3xl font-semibold">Ready to shape your space with light?</h3>
                                <p className="text-white/90 mt-3 leading-7">
                                    Speak with a specialist to explore lighting, shading, and whole-home control options.
                                </p>
                                <div className="mt-5 flex flex-wrap items-center gap-3">
                                    <Link to="/contact" className="btn-primary">Book a Consultation</Link>
                                    <Link to="/services" className="text-white underline-offset-4 hover:underline">Explore Services</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
}
