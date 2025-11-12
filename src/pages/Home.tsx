import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import heroImage from "../assets/HomeWorks.png";
import heroVideo from "../assets/smaple.mp4";
import harness from "../assets/harness.png";
import orluna from "../assets/orluna.png";
import press from "../assets/press.png";
import ritz from "../assets/ritz.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AccordionFAQ from "../components/AccordionFAQ";
import HomeAutomationModal from "../components/HomeAutomationModal";
import { useGSAP } from "../hooks/useGSAP";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
    const [showHomeAutomation, setShowHomeAutomation] = useState(false);
    
    // Refs for hero section
    const heroRef = useRef<HTMLElement>(null);
    const heroBadgeRef = useRef<HTMLParagraphElement>(null);
    const heroTitleRef = useRef<HTMLHeadingElement>(null);
    const heroDescRef = useRef<HTMLParagraphElement>(null);
    const heroTypewriterRef = useRef<HTMLSpanElement>(null);
    
    // Refs for sections
    const section1Ref = useRef<HTMLElement>(null);
    const section1TextRef = useRef<HTMLDivElement>(null);
    const section1ImageRef = useRef<HTMLDivElement>(null);
    
    const storiesSectionRef = useRef<HTMLElement>(null);
    const storyCardsRef = useRef<HTMLDivElement>(null);
    
    const featureImageRef = useRef<HTMLElement>(null);
    const featuresGridRef = useRef<HTMLElement>(null);
    const featureCardsRef = useRef<HTMLDivElement>(null);
    
    const howItWorksRef = useRef<HTMLElement>(null);
    const stepsRef = useRef<HTMLOListElement>(null);
    
    const intelligentSectionRef = useRef<HTMLElement>(null);
    const intelligentImageRef = useRef<HTMLElement>(null);
    const intelligentContentRef = useRef<HTMLDivElement>(null);
    
    const testimonialsRef = useRef<HTMLElement>(null);
    const testimonialCardsRef = useRef<HTMLDivElement>(null);
    
    const faqRef = useRef<HTMLElement>(null);
    const ctaRef = useRef<HTMLElement>(null);

    // Hero Timeline Animation
    useGSAP(() => {
        if (heroBadgeRef.current && heroTitleRef.current && heroDescRef.current && heroTypewriterRef.current) {
            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
            
            tl.from(heroBadgeRef.current, {
                opacity: 0,
                y: 30,
                duration: 0.8,
            })
            .from(heroTitleRef.current, {
                opacity: 0,
                y: 80,
                duration: 1.2,
            }, "-=0.5")
            .from(heroDescRef.current, {
                opacity: 0,
                y: 50,
                duration: 1,
            }, "-=0.7")
            .from(heroTypewriterRef.current, {
                opacity: 0,
                x: -30,
                duration: 0.8,
            }, "-=0.5");
        }
    }, []);

    // Section 1 Animation (Text + Image)
    useGSAP(() => {
        if (section1TextRef.current && section1ImageRef.current) {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: section1Ref.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
            });
            
            tl.from(section1TextRef.current, {
                opacity: 0,
                x: -80,
                duration: 1,
                ease: "power3.out",
            })
            .from(section1ImageRef.current, {
                opacity: 0,
                x: 80,
                scale: 0.9,
                duration: 1,
                ease: "back.out(1.2)",
            }, "-=0.7");
        }
    }, []);

    // Stories Section Animation
    useGSAP(() => {
        if (storyCardsRef.current) {
            const cards = storyCardsRef.current.children;
            gsap.from(cards, {
                opacity: 0,
                y: 60,
                scale: 0.9,
                duration: 0.8,
                stagger: 0.15,
                ease: "back.out(1.2)",
                scrollTrigger: {
                    trigger: storiesSectionRef.current,
                    start: "top 85%",
                    toggleActions: "play none none reverse",
                },
            });
        }
    }, []);

    // Feature Image Animation
    useGSAP(() => {
        if (featureImageRef.current) {
            gsap.from(featureImageRef.current, {
                opacity: 0,
                y: 80,
                scale: 0.95,
                duration: 1.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: featureImageRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
            });
        }
    }, []);

    // Features Grid Animation
    useGSAP(() => {
        if (featureCardsRef.current) {
            const cards = featureCardsRef.current.children;
            gsap.from(cards, {
                opacity: 0,
                y: 50,
                scale: 0.9,
                duration: 0.7,
                stagger: 0.1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: featuresGridRef.current,
                    start: "top 85%",
                    toggleActions: "play none none reverse",
                },
            });
        }
    }, []);

    // How It Works Animation
    useGSAP(() => {
        if (stepsRef.current) {
            const steps = stepsRef.current.children;
            gsap.from(steps, {
                opacity: 0,
                y: 60,
                rotationX: -15,
                duration: 0.9,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: howItWorksRef.current,
                    start: "top 85%",
                    toggleActions: "play none none reverse",
                },
            });
        }
    }, []);

    // Intelligent Section Animation
    useGSAP(() => {
        if (intelligentImageRef.current && intelligentContentRef.current) {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: intelligentSectionRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse",
                },
            });
            
            tl.from(intelligentImageRef.current, {
                opacity: 0,
                x: -10,
                scale: 0.50,
                duration: 1,
                ease: "power1.out",
            })
            .from(intelligentContentRef.current, {
                opacity: 0,
                x: 10,
                duration: 1,
                ease: "power3.out",
            }, "-=0.7");
        }
    }, []);

    // Testimonials Animation
    useGSAP(() => {
        if (testimonialCardsRef.current) {
            const cards = testimonialCardsRef.current.children;
            gsap.from(cards, {
                opacity: 0,
                y: 50,
                scale: 0.95,
                duration: 0.8,
                stagger: 0.15,
                ease: "back.out(1.1)",
                scrollTrigger: {
                    trigger: testimonialsRef.current,
                    start: "top 85%",
                    toggleActions: "play none none reverse",
                },
            });
        }
    }, []);

    // FAQ and CTA Animations
    useGSAP(() => {
        if (faqRef.current) {
            gsap.from(faqRef.current, {
                opacity: 0,
                y: 50,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: faqRef.current,
                    start: "top 85%",
                    toggleActions: "play none none reverse",
                },
            });
        }
        
        if (ctaRef.current) {
            gsap.from(ctaRef.current, {
                opacity: 0,
                y: 50,
                // scale: 0.50,
                duration: 1,
                ease: "back.out(1.2)",
                scrollTrigger: {
                    trigger: ctaRef.current,
                    start: "top 85%",
                    toggleActions: "play none none reverse",
                },
            });
        }
    }, []);

    // Image hover effects
    useEffect(() => {
        const images = document.querySelectorAll('.gsap-image-hover');
        images.forEach((img) => {
            const handleMouseEnter = () => {
                gsap.to(img, {
                    scale: 1.05,
                    duration: 0.6,
                    ease: "power2.out",
                });
            };
            const handleMouseLeave = () => {
                gsap.to(img, {
                    scale: 1,
                    duration: 0.6,
                    ease: "power2.out",
                });
            };
            img.addEventListener('mouseenter', handleMouseEnter);
            img.addEventListener('mouseleave', handleMouseLeave);
            
            return () => {
                img.removeEventListener('mouseenter', handleMouseEnter);
                img.removeEventListener('mouseleave', handleMouseLeave);
            };
        });
    }, []);
    return (
        <div className="relative">
            <header
                ref={heroRef}
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
                    <div className="container-narrow py-8 sm:py-12 md:py-16">
                        <div className="max-w-2xl">
                            <p 
                                ref={heroBadgeRef}
                                className="uppercase tracking-widest text-white text-xs mb-2 sm:mb-3 drop-shadow-lg"
                            >
                                Luxury Automated Blinds
                            </p>
                            <h1 
                                ref={heroTitleRef}
                                className="gradient-text text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-semibold leading-tight mb-3 sm:mb-5 drop-shadow-lg"
                            >
                                Shape daylight with simple elegance
                            </h1>
                            <p 
                                ref={heroDescRef}
                                className="text-white text-sm sm:text-base md:text-lg mb-6 sm:mb-8 drop-shadow-lg"
                            >
                                Automated window treatments that complement your architecture and elevate everyday living.
                            </p>
                            <p className="text-white/90 text-sm sm:text-base md:text-lg">
                                <span ref={heroTypewriterRef} className="typewriter inline-block">Lighting • Climate • Security • Shades • Voice</span>
                            </p>
                        </div>
                    </div>
                </div>
            </header>
            <main>
                {/* Hero: text left, image right */}
                <section
                    ref={section1Ref}
                    className="container-narrow py-8 sm:py-12 md:py-14"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-center">
                        <div ref={section1TextRef}>
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
                                    className="btn-primary ai-glow inline-flex items-center w-full sm:w-auto"
                                >
                                    Book a Demo
                                </button>
                                <Link to="/services" className="btn-ghost text-[color:var(--brand-text)] underline-offset-4 hover:underline text-sm sm:text-base">Explore Products</Link>
                            </div>
                        </div>
                        <div ref={section1ImageRef}>
                            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-black/10 bg-black/5 parallax-tilt ai-glow">
                                <img
                                    src={harness}
                                    alt="Lifestyle interior"
                                    className="gsap-image-hover absolute inset-0 h-full w-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stories section */}
                <section
                    ref={storiesSectionRef}
                    className="bg-[color:var(--brand-surface)]/50 border-y border-black/10"
                >
                    <div className="container-narrow py-8 sm:py-10 md:py-12">
                        <h2 className="text-[color:var(--brand-text)] text-lg sm:text-xl font-semibold">Stories</h2>
                        <div ref={storyCardsRef} className="mt-4 sm:mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                            {/* Card 1 */}
                            <article>
                                <figure>
                                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-black/10">
                                        <img
                                            src={orluna}
                                            alt="Story 1"
                                            className="gsap-image-hover absolute inset-0 h-full w-full object-cover"
                                        />
                                    </div>
                                    <figcaption>
                                        <p className="mt-2 sm:mt-3 text-[10px] uppercase tracking-widest opacity-70">Lutron | Orluna</p>
                                        <p className="mt-1 sm:mt-2 text-[color:var(--brand-muted)] text-xs sm:text-sm leading-5 sm:leading-6">
                                            We're pleased to announce the acquisition of Orluna LED Technologies, a UK-based manufacturer of architectural lighting.
                                        </p>
                                    </figcaption>
                                </figure>
                            </article>

                            {/* Card 2 */}
                            <article>
                                <figure>
                                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-black/10">
                                        <img
                                            src={ritz}
                                            alt="Story 2"
                                            className="gsap-image-hover absolute inset-0 h-full w-full object-cover"
                                        />
                                    </div>
                                    <figcaption>
                                        <p className="mt-2 sm:mt-3 text-[10px] uppercase tracking-widest opacity-70">Project | Ritz Tower</p>
                                        <p className="mt-1 sm:mt-2 text-[color:var(--brand-muted)] text-xs sm:text-sm leading-5 sm:leading-6">
                                            Elegant control of indoor and outdoor light in a historic renovation at the renowned Ritz Tower.
                                        </p>
                                    </figcaption>
                                </figure>
                            </article>

                            {/* Card 3 */}
                            <article>
                                <figure>
                                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-black/10">
                                        <img
                                            src={press}
                                            alt="Story 3"
                                            className="gsap-image-hover absolute inset-0 h-full w-full object-cover"
                                        />
                                    </div>
                                    <figcaption>
                                        <p className="mt-2 sm:mt-3 text-[10px] uppercase tracking-widest opacity-70">Press | Design Global</p>
                                        <p className="mt-1 sm:mt-2 text-[color:var(--brand-muted)] text-xs sm:text-sm leading-5 sm:leading-6">
                                            "Lighting is a designer's secret weapon in creating ambience for any home."
                                        </p>
                                    </figcaption>
                                </figure>
                            </article>
                        </div>
                    </div>
                </section>

                {/* Large feature image with text + CTA */}
                <section
                    ref={featureImageRef}
                    className="container-narrow py-8 sm:py-12 md:py-14"
                >
                    <figure>
                        <div className="relative w-full overflow-hidden rounded-lg sm:rounded-xl border border-black/10">
                            <img
                                src={harness}
                                alt="Kitchen and dining with natural light"
                                className="gsap-image-hover h-full w-full object-cover"
                            />
                        </div>
                        <figcaption className="mt-4 sm:mt-6 max-w-2xl">
                            <h3 className="text-[color:var(--brand-text)] text-xl sm:text-2xl md:text-3xl font-semibold">Underline space with light</h3>
                            <p className="mt-2 sm:mt-3 text-[color:var(--brand-muted)] text-sm sm:text-base leading-6 sm:leading-7">
                                Discover the advantages of native, tunable lighting and redefine expectations for what light in the home should be.
                                Intelligent lighting delivers a level of control and customization never before possible.
                            </p>
                            <Link to="/services" className="btn-primary ai-glow mt-3 sm:mt-5 inline-block w-full sm:w-auto text-center">Explore Lighting</Link>
                        </figcaption>
                    </figure>
                </section>

                {/* Why AiTech Living - Features Grid */}
                <section
                    ref={featuresGridRef}
                    className="container-narrow py-8 sm:py-12 md:py-14"
                >
                    <header className="max-w-2xl">
                        <h2 className="text-[color:var(--brand-text)] text-xl sm:text-2xl md:text-3xl font-semibold">Why AiTech Living</h2>
                        <p className="mt-2 sm:mt-3 text-[color:var(--brand-muted)] text-sm sm:text-base leading-6 sm:leading-7">
                            Seamless control, elegant design, and reliable performance — all working together to make homes smarter, safer, and more comfortable.
                        </p>
                    </header>
                    <div ref={featureCardsRef} className="mt-6 sm:mt-8 md:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                        <article className="rounded-lg sm:rounded-xl border border-black/10 bg-white/60 p-4 sm:p-5">
                            <h3 className="text-[color:var(--brand-text)] text-sm sm:text-base font-semibold">Adaptive Automation</h3>
                            <p className="mt-1 sm:mt-2 text-[color:var(--brand-muted)] text-xs sm:text-sm leading-5 sm:leading-6">Schedules and scenes that learn routines and adjust to natural light.</p>
                        </article>
                        <article className="rounded-lg sm:rounded-xl border border-black/10 bg-white/60 p-4 sm:p-5">
                            <h3 className="text-[color:var(--brand-text)] text-sm sm:text-base font-semibold">Effortless Control</h3>
                            <p className="mt-1 sm:mt-2 text-[color:var(--brand-muted)] text-xs sm:text-sm leading-5 sm:leading-6">Intuitive apps, voice assistants, and elegant keypads for every room.</p>
                        </article>
                        <article className="rounded-lg sm:rounded-xl border border-black/10 bg-white/60 p-4 sm:p-5">
                            <h3 className="text-[color:var(--brand-text)] text-sm sm:text-base font-semibold">Whole‑Home Reliability</h3>
                            <p className="mt-1 sm:mt-2 text-[color:var(--brand-muted)] text-xs sm:text-sm leading-5 sm:leading-6">Pro‑grade hardware and secure local control keep your system responsive.</p>
                        </article>
                        <article className="rounded-lg sm:rounded-xl border border-black/10 bg-white/60 p-4 sm:p-5">
                            <h3 className="text-[color:var(--brand-text)] text-sm sm:text-base font-semibold">Design‑Led Finish</h3>
                            <p className="mt-1 sm:mt-2 text-[color:var(--brand-muted)] text-xs sm:text-sm leading-5 sm:leading-6">Materials and profiles that complement premium interiors and architecture.</p>
                        </article>
                    </div>
                </section>

                {/* How it works */}
                <section
                    ref={howItWorksRef}
                    className="bg-[color:var(--brand-surface)]/50 border-y border-black/10"
                >
                    <div className="container-narrow py-8 sm:py-12 md:py-14">
                        <h2 className="text-[color:var(--brand-text)] text-xl sm:text-2xl md:text-3xl font-semibold">How it works</h2>
                        <ol ref={stepsRef} className="mt-6 sm:mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 list-none">
                            <li className="rounded-lg sm:rounded-xl border border-black/10 bg-white/60 p-4 sm:p-6">
                                <p className="text-[10px] uppercase tracking-widest opacity-70">Step 1</p>
                                <h3 className="mt-1 sm:mt-2 text-sm sm:text-base font-semibold text-[color:var(--brand-text)]">Consult & Design</h3>
                                <p className="mt-1 sm:mt-2 text-[color:var(--brand-muted)] text-xs sm:text-sm leading-5 sm:leading-6">We map your rooms, routines, and goals to craft a tailored plan.</p>
                            </li>
                            <li className="rounded-lg sm:rounded-xl border border-black/10 bg-white/60 p-4 sm:p-6">
                                <p className="text-[10px] uppercase tracking-widest opacity-70">Step 2</p>
                                <h3 className="mt-1 sm:mt-2 text-sm sm:text-base font-semibold text-[color:var(--brand-text)]">Install & Configure</h3>
                                <p className="mt-1 sm:mt-2 text-[color:var(--brand-muted)] text-xs sm:text-sm leading-5 sm:leading-6">Certified technicians install, integrate, and set up scenes and schedules.</p>
                            </li>
                            <li className="rounded-lg sm:rounded-xl border border-black/10 bg-white/60 p-4 sm:p-6">
                                <p className="text-[10px] uppercase tracking-widest opacity-70">Step 3</p>
                                <h3 className="mt-1 sm:mt-2 text-sm sm:text-base font-semibold text-[color:var(--brand-text)]">Support & Evolve</h3>
                                <p className="mt-1 sm:mt-2 text-[color:var(--brand-muted)] text-xs sm:text-sm leading-5 sm:leading-6">We refine automations over time and keep everything running smoothly.</p>
                            </li>
                        </ol>
                    </div>
                </section>

                {/* AiTech Living – Intelligent Home Automation (image + content) */}
                <section
                    ref={intelligentSectionRef}
                    className="container-narrow py-8 sm:py-12 md:py-14"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-center">
                        <figure ref={intelligentImageRef}>
                            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-black/10 bg-black/5">
                                <img
                                    src={heroImage}
                                    alt="Modern living room with automated blinds and lighting"
                                    className="gsap-image-hover absolute inset-0 h-full w-full object-cover"
                                />
                            </div>
                            <figcaption className="sr-only">A showcase of AiTech Living automation in a contemporary home.</figcaption>
                        </figure>
                        <div ref={intelligentContentRef}>
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
                                    className="btn-primary ai-glow inline-flex items-center w-full sm:w-auto"
                                >
                                    Start Your Project
                                </button>
                                <Link to="/services" className="btn-ghost text-[color:var(--brand-text)] underline-offset-4 hover:underline text-sm sm:text-base">View Solutions</Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Testimonials */}
                <section
                    ref={testimonialsRef}
                    className="bg-[color:var(--brand-surface)]/50 border-y border-black/10"
                >
                    <div className="container-narrow py-8 sm:py-12 md:py-14">
                        <h2 className="text-[color:var(--brand-text)] text-xl sm:text-2xl md:text-3xl font-semibold">What clients say</h2>
                        <div ref={testimonialCardsRef} className="mt-6 sm:mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                            <figure className="rounded-lg sm:rounded-xl border border-black/10 bg-white/60 p-4 sm:p-6">
                                <blockquote className="text-[color:var(--brand-text)] text-sm sm:text-base leading-6 sm:leading-7">"Rooms feel calmer and brighter — automations just work in the background."</blockquote>
                                <figcaption className="mt-2 sm:mt-3 text-[10px] uppercase tracking-widest opacity-70">Homeowner, Kensington</figcaption>
                            </figure>
                            <figure className="rounded-lg sm:rounded-xl border border-black/10 bg-white/60 p-4 sm:p-6">
                                <blockquote className="text-[color:var(--brand-text)] text-sm sm:text-base leading-6 sm:leading-7">"They coordinated with our contractor and delivered a flawless finish."</blockquote>
                                <figcaption className="mt-2 sm:mt-3 text-[10px] uppercase tracking-widest opacity-70">Interior Designer, Chelsea</figcaption>
                            </figure>
                            <figure className="rounded-lg sm:rounded-xl border border-black/10 bg-white/60 p-4 sm:p-6">
                                <blockquote className="text-[color:var(--brand-text)] text-sm sm:text-base leading-6 sm:leading-7">"Lighting scenes transform the space — mornings and evenings feel different."</blockquote>
                                <figcaption className="mt-2 sm:mt-3 text-[10px] uppercase tracking-widest opacity-70">Architect, Marylebone</figcaption>
                            </figure>
                        </div>
                    </div>
                </section>

                {/* FAQ */}
                <section
                    ref={faqRef}
                    className="container-narrow py-8 sm:py-12 md:py-14"
                >
                    <h2 className="text-[color:var(--brand-text)] text-xl sm:text-2xl md:text-3xl font-semibold">Frequently asked questions</h2>
                    <div className="mt-4 sm:mt-6">
                        <AccordionFAQ
                            items={[
                                { question: "Do I need wiring in place?", answer: "We support retrofit wireless options and hard‑wired systems for new builds." },
                                { question: "Will this work without internet?", answer: "Yes. Core functions run locally; remote access requires a secure connection." },
                                { question: "What does maintenance look like?", answer: "We monitor systems proactively and provide scheduled health checks." },
                                { question: "How long is a typical project?", answer: "Smaller homes complete in days; larger estates may span several weeks." },
                            ]}
                        />
                    </div>
                </section>

                {/* Bottom CTA */}
                <section
                    ref={ctaRef}
                    className="bg-[color:var(--brand-surface)]/50 border-y border-black/10"
                >
                    <div className="container-narrow py-8 sm:py-12 md:py-14 ">
                        <div className="max-w-2xl">
                            <h2 className="text-[color:var(--brand-text)] text-xl sm:text-2xl md:text-3xl font-semibold">Ready to shape light and comfort?</h2>
                            <p className="mt-2 sm:mt-3 text-[color:var(--brand-muted)] text-sm sm:text-base leading-6 sm:leading-7">Book a consultation and explore a system designed for the way you live.</p>
                            <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-3">
                                <button 
                                    onClick={() => setShowHomeAutomation(true)}
                                    className="btn-primary ai-glow inline-flex items-center w-full sm:w-auto"
                                >
                                    Book a Consultation
                                </button>
                                <Link to="/services" className="btn-ghost text-[color:var(--brand-text)] underline-offset-4 hover:underline text-sm sm:text-base">See Services</Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Home Automation Modal */}
            <HomeAutomationModal
                isOpen={showHomeAutomation}
                onClose={() => setShowHomeAutomation(false)}
            />
        </div>
    );
}
