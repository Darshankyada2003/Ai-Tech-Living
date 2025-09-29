import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/BlackLogo.png"

export default function Header() {
    const [open, setOpen] = useState(false);
    const [hidden, setHidden] = useState(false);
    const lastYRef = useRef<number>(0);

    useEffect(() => {
        const handleScroll = () => {
            const y = window.scrollY || window.pageYOffset;
            const delta = y - lastYRef.current;
            const threshold = 10;

            if (Math.abs(delta) > threshold) {
                if (delta > 0 && y > 80) {
                    // scrolling down: hide header
                    setHidden(true);
                } else if (delta < 0) {
                    // scrolling up: show header
                    setHidden(false);
                }
                lastYRef.current = y;
            }
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Use a solid light background so text is readable on all pages

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 bg-white text-[color:var(--brand-text)] transform transition-all duration-300 ${hidden ? "-translate-y-full" : "translate-y-0"
                }`}
        >
            <div className="container-narrow flex justify-between items-center py-1.5 md:py-3">
                <div className="flex items-center gap-3">
                    <img
                        src={logo}
                        alt="AiTech Living Logo"
                        className="h-10 md:h-15 w-auto object-contain"
                    />

                    <Link to="/" className="text-[color:var(--brand-text)] text-xl md:text-2xl font-bold tracking-wide">
                        AiTech Living
                    </Link>
                </div>

                <nav className="hidden md:flex items-center gap-8 text-base font-semibold text-[color:var(--brand-text)]">
                    <Link to="/" className="transition-colors hover:opacity-80">Home</Link>
                    <Link to="/about" className="transition-colors hover:opacity-80">About</Link>
                    <Link to="/services" className="transition-colors hover:opacity-80">Services</Link>
                    <Link to="/contact" className="transition-colors hover:opacity-80">Contact</Link>
                </nav>
                <span className="hidden lg:inline-flex">
                    <Link to="/contact" className="text-white font-semibold">Get in touch</Link>
                </span>
                <button aria-label="Toggle menu" className="md:hidden text-[color:var(--brand-text)] font-semibold" onClick={() => setOpen(!open)}>☰</button>
            </div>

            {open && (
                <div className="md:hidden bg-white border-t border-black/10">
                    <div className="container-narrow flex flex-col py-3 space-y-2 text-[color:var(--brand-text)]">
                        <Link to="/" onClick={() => setOpen(false)}>Home</Link>
                        <Link to="/about" onClick={() => setOpen(false)}>About</Link>
                        <Link to="/services" onClick={() => setOpen(false)}>Services</Link>
                        <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
                        <Link to="/contact" onClick={() => setOpen(false)} className="btn-primary inline-block text-center">Book a Demo</Link>
                    </div>
                </div>
            )}
        </header>
    );
}
