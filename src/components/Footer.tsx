import { Link } from "react-router-dom";
import logo from "../assets/AiTechLiving.png";
import { Instagram, Youtube, Linkedin, Twitter, Facebook } from "lucide-react";

export default function Footer() {
    return (
        <footer className="border-t border-black/10 bg-[color:var(--brand-bg)] text-[color:var(--brand-muted)]">
            <div className="container-narrow py-12">
                {/* Top grid: Left brand/description + Right action links */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                    {/* Left: Brand and description */}
                    <div>
                        <div className="flex items-center gap-3">
                            <img src={logo} alt="AiTech Living Logo" className="h-8 w-auto object-contain" />
                            <Link to="/" className="font-medium text-[color:var(--brand-text)]">AiTech Living</Link>
                        </div>
                        <p className="mt-5 text-sm leading-7">
                            For more than 60 years, the same core belief has guided our work — that
                            design fueled by innovation and the transformative nature of light has
                            the power to enrich people's lives. The AiTech Living portfolio is the
                            purest expression of that belief.
                        </p>

                        {/* City links row */}
                        <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
                            <a href="#" className="hover:text-[color:var(--brand-text)] transition-colors">London</a>
                            <span className="opacity-40">|</span>
                            <a href="#" className="hover:text-[color:var(--brand-text)] transition-colors">New York</a>
                            <span className="opacity-40">|</span>
                            <a href="#" className="hover:text-[color:var(--brand-text)] transition-colors">Austin</a>
                            <span className="opacity-40">|</span>
                            <a href="#" className="hover:text-[color:var(--brand-text)] transition-colors">India</a>
                            <span className="opacity-40">|</span>
                            <a href="#" className="hover:text-[color:var(--brand-text)] transition-colors">Los Angeles (coming soon)</a>
                        </div>
                    </div>

                    {/* Right: Vertical actions list */}
                    <div className="md:justify-self-end w-full max-w-xs">
                        <nav className="flex flex-col gap-5 text-[color:var(--brand-text)]">
                            <a href="#" className="hover:opacity-80 transition-opacity">Find a Dealer</a>
                            <a href="#" className="hover:opacity-80 transition-opacity">Get Design Support</a>
                            <a href="#" className="hover:opacity-80 transition-opacity">Integrator Resources</a>
                            <a href="#" className="hover:opacity-80 transition-opacity">Book a Demo</a>
                            <a href="#" className="hover:opacity-80 transition-opacity">Become a Dealer</a>
                        </nav>
                    </div>
                </div>

                {/* Bottom bar: Legal left, Social right */}
                <div className="mt-12 flex flex-col gap-6 md:flex-row md:items-center md:justify-between border-t border-black/10 pt-6 text-sm">
                    <div className="flex flex-col md:flex-row md:items-center md:gap-6 gap-3 opacity-80">
                        <p>© {new Date().getFullYear()} AiTech Living. All rights reserved.</p>
                        <div className="flex items-center gap-4">
                            <a href="#" className="hover:text-[color:var(--brand-text)] transition-colors">Privacy Policy</a>
                            <span className="opacity-40">|</span>
                            <a href="#" className="hover:text-[color:var(--brand-text)] transition-colors">Cookie Preferences</a>
                        </div>
                    </div>

                    {/* Social icons */}
                    <div className="flex items-center gap-4 text-[color:var(--brand-text)]">
                        <a href="#" aria-label="Instagram" className="hover:opacity-80 transition-opacity"><Instagram size={22} /></a>
                        <a href="#" aria-label="YouTube" className="hover:opacity-80 transition-opacity"><Youtube size={22} /></a>
                        <a href="#" aria-label="LinkedIn" className="hover:opacity-80 transition-opacity"><Linkedin size={22} /></a>
                        <a href="#" aria-label="Twitter" className="hover:opacity-80 transition-opacity"><Twitter size={22} /></a>
                        <a href="#" aria-label="Facebook" className="hover:opacity-80 transition-opacity"><Facebook size={22} /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
