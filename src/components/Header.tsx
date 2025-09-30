import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/BlackLogo.png";
import HomeAutomationModal from "./HomeAutomationModal";

export default function Header() {
    const [open, setOpen] = useState(false);
    const [hidden, setHidden] = useState(false);
    const [showHomeAutomation, setShowHomeAutomation] = useState(false);
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
            <div className="container-narrow flex justify-between items-center py-2 sm:py-1.5 md:py-3">
                <div className="flex items-center gap-2 sm:gap-3">
                    <img
                        src={logo}
                        alt="AiTech Living Logo"
                        className="h-8 sm:h-10 md:h-15 w-auto object-contain"
                    />

                    <Link to="/" className="text-[color:var(--brand-text)] text-lg sm:text-xl md:text-2xl font-bold tracking-wide">
                        AiTech Living
                    </Link>
                </div>

                <nav className="hidden md:flex items-center gap-8 text-base font-semibold text-[color:var(--brand-text)]">
                    <NavLink
                        to="/"
                        className={({ isActive }) => `transition-colors hover:opacity-80 pb-1 ${isActive ? 'border-b-2 border-[color:var(--brand-text)]' : ''}`}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) => `transition-colors hover:opacity-80 pb-1 ${isActive ? 'border-b-2 border-[color:var(--brand-text)]' : ''}`}
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/services"
                        className={({ isActive }) => `transition-colors hover:opacity-80 pb-1 ${isActive ? 'border-b-2 border-[color:var(--brand-text)]' : ''}`}
                    >
                        Services
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) => `transition-colors hover:opacity-80 pb-1 ${isActive ? 'border-b-2 border-[color:var(--brand-text)]' : ''}`}
                    >
                        Contact
                    </NavLink>
                </nav>
                <span className="hidden lg:inline-flex">
                    <button
                        onClick={() => setShowHomeAutomation(true)}
                        className="text-white font-semibold hover:opacity-80 transition-opacity"
                    >
                        Get in touch
                    </button>
                </span>
                <button aria-label="Toggle menu" className="md:hidden text-[color:var(--brand-text)] font-semibold text-lg p-1" onClick={() => setOpen(!open)}>☰</button>
            </div>

            {open && (
                <div className="md:hidden bg-white border-t border-black/10">
                    <div className="container-narrow flex flex-col py-4 space-y-3 text-[color:var(--brand-text)]">
                        <NavLink
                            to="/"
                            className={({ isActive }: { isActive: boolean }) => `py-2 text-base ${isActive ? 'font-bold text-blue-600' : 'font-medium'}`}
                            onClick={() => setOpen(false)}
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/about"
                            className={({ isActive }: { isActive: boolean }) => `py-2 text-base ${isActive ? 'font-bold text-blue-600' : 'font-medium'}`}
                            onClick={() => setOpen(false)}
                        >
                            About
                        </NavLink>
                        <NavLink
                            to="/services"
                            className={({ isActive }: { isActive: boolean }) => `py-2 text-base ${isActive ? 'font-bold text-blue-600' : 'font-medium'}`}
                            onClick={() => setOpen(false)}
                        >
                            Services
                        </NavLink>
                        <NavLink
                            to="/contact"
                            className={({ isActive }: { isActive: boolean }) => `py-2 text-base ${isActive ? 'font-bold text-blue-600' : 'font-medium'}`}
                            onClick={() => setOpen(false)}
                        >
                            Contact
                        </NavLink>
                        <button
                            onClick={() => {
                                setOpen(false);
                                setShowHomeAutomation(true);
                            }}
                            className="btn-primary inline-block text-center w-full py-3 mt-2"
                        >
                            Book a Demo
                        </button>
                    </div>
                </div>
            )}

            {/* Home Automation Modal */}
            <HomeAutomationModal
                isOpen={showHomeAutomation}
                onClose={() => setShowHomeAutomation(false)}
            />
        </header>
    );
}
