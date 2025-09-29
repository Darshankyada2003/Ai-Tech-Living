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
            <div
                className="relative min-h-[70vh] md:min-h-[90vh] flex items-end"
                style={{
                    backgroundImage: `url(${heroImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0"></div>
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
            </div>
            <main>
                {/* Hero: text left, image right */}
                <section className="container-narrow py-14">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                        <div>
                            <p className="uppercase tracking-widest text-[color:var(--brand-muted)] text-xs mb-3">Luxury Automated Blinds</p>
                            <h1 className="text-[color:var(--brand-text)] text-4xl md:text-5xl font-semibold leading-tight mb-5">
                                The purest expression of modern living
                            </h1>
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
                                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-black/10">
                                    <img src={orluna} alt="Story 1" className="absolute inset-0 h-full w-full object-cover" />
                                </div>
                                <p className="mt-3 text-[10px] uppercase tracking-widest opacity-70">Lutron | Orluna</p>
                                <p className="mt-2 text-[color:var(--brand-muted)] text-sm leading-6">
                                    We’re pleased to announce the acquisition of Orluna LED Technologies, a UK-based manufacturer of architectural lighting.
                                </p>
                            </article>

                            {/* Card 2 */}
                            <article>
                                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-black/10">
                                    <img src={ritz} alt="Story 2" className="absolute inset-0 h-full w-full object-cover" />
                                </div>
                                <p className="mt-3 text-[10px] uppercase tracking-widest opacity-70">Project | Ritz Tower</p>
                                <p className="mt-2 text-[color:var(--brand-muted)] text-sm leading-6">
                                    Elegant control of indoor and outdoor light in a historic renovation at the renowned Ritz Tower.
                                </p>
                            </article>

                            {/* Card 3 */}
                            <article>
                                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-black/10">
                                    <img src={press} alt="Story 3" className="absolute inset-0 h-full w-full object-cover" />
                                </div>
                                <p className="mt-3 text-[10px] uppercase tracking-widest opacity-70">Press | Design Global</p>
                                <p className="mt-2 text-[color:var(--brand-muted)] text-sm leading-6">
                                    “Lighting is a designer’s secret weapon in creating ambience for any home.”
                                </p>
                            </article>
                        </div>
                    </div>
                </section>

                {/* Large feature image with text + CTA */}
                <section className="container-narrow py-14">
                    <div className="relative w-full overflow-hidden rounded-xl border border-black/10">
                        <img src={harness} alt="Kitchen and dining with natural light" className="h-full w-full object-cover" />
                    </div>
                    <div className="mt-6 max-w-2xl">
                        <h3 className="text-[color:var(--brand-text)] text-2xl md:text-3xl font-semibold">Underline space with light</h3>
                        <p className="mt-3 text-[color:var(--brand-muted)] leading-7">
                            Discover the advantages of native, tunable lighting and redefine expectations for what light in the home should be.
                            Intelligent lighting delivers a level of control and customization never before possible.
                        </p>
                        <Link to="/services" className="btn-primary mt-5 inline-block">Explore Lighting</Link>
                    </div>
                </section>
            </main>
        </div>
    );
}
