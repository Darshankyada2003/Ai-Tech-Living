import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Home as HomeIcon, Building2, Hospital, Hotel, Sun, Moon } from "lucide-react";
import logo from "../assets/BlackLogo.png";
import HomeAutomationModal from "./HomeAutomationModal";
import { useTheme } from "../contexts/ThemeContext";
import { gsap } from "gsap";
import { useGSAP } from "../hooks/useGSAP";

export default function Header() {
  const [hidden, setHidden] = useState(false);
  const [showHomeAutomation, setShowHomeAutomation] = useState(false);
  const lastYRef = useRef<number>(0);
  const { theme, toggleTheme } = useTheme();
  const headerRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);
  const navRef = useRef<HTMLElement>(null);

  // Header entrance animation
  useGSAP(() => {
    if (logoRef.current && navRef.current) {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      
      tl.from(logoRef.current, {
        opacity: 0,
        x: -30,
        duration: 0.8,
      })
      .from(navRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.8,
      }, "-=0.5");
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY || window.pageYOffset;
      const delta = y - lastYRef.current;
      const threshold = 10;

      if (Math.abs(delta) > threshold) {
        if (delta > 0 && y > 80) {
          // scrolling down: hide header with GSAP
          setHidden(true);
          if (headerRef.current) {
            gsap.to(headerRef.current, {
              y: -100,
              duration: 0.3,
              ease: "power2.inOut",
            });
          }
        } else if (delta < 0) {
          // scrolling up: show header with GSAP
          setHidden(false);
          if (headerRef.current) {
            gsap.to(headerRef.current, {
              y: 0,
              duration: 0.3,
              ease: "power2.inOut",
            });
          }
        }
        lastYRef.current = y;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  // Toggle function
  const toggleMenu = (menuName: string) => {
    if (openMenu === menuName) {
      setOpenMenu(null); // Close if already open
    } else {
      setOpenMenu(menuName); // Open this menu, close others
    }
  };

  // Use a solid light background so text is readable on all pages

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 bg-white text-[color:var(--brand-text)]"
    >
      <div className="container-narrow flex justify-between items-center py-2 sm:py-1.5 md:py-3">
        <Link ref={logoRef} to="/" className="flex items-center gap-2 sm:gap-3">
          <img
            src={logo}
            alt="AiTech Living Logo"
            className="h-8 sm:h-10 md:h-15 w-auto object-contain"
          />
          <span className="text-gray-700 text-lg sm:text-xl md:text-2xl font-bold tracking-wide">
            AiTechLiving
          </span>
        </Link>

        <nav ref={navRef} className="hidden md:flex items-center gap-6 text-base font-semibold text-[color:var(--brand-text)]">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `transition-colors hover:opacity-80 py-2 ${isActive ? "border-b-2 border-[color:var(--brand-text)]" : ""
              }`
            }
          >
            Home
          </NavLink>
          {/* Our Solution dropdown (desktop) */}
          <div className="relative group">
            <NavLink
              to="/our-solution"
              className={({ isActive }) =>
                `transition-colors hover:opacity-80 py-2 ${isActive ? "border-b-2 border-[color:var(--brand-text)]" : ""}`
              }
            >
              Our Solution
            </NavLink>
            <div className="pointer-events-none absolute left-1/2 transform -translate-x-1/2 top-full mt-2 opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-200">
              <div className="min-w-[240px] rounded-xl border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] shadow-lg p-2">
                <NavLink to="/home-automation" className={({ isActive }) => `flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-black/5 ${isActive ? "font-bold" : ""}`}>
                  <HomeIcon size={16} />
                  <span>Home Automation</span>
                </NavLink>
                <NavLink to="/office-automation" className={({ isActive }) => `flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-black/5 ${isActive ? "font-bold" : ""}`}>
                  <Building2 size={16} />
                  <span>Office Automation</span>
                </NavLink>
                <NavLink to="/hospital-automation" className={({ isActive }) => `flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-black/5 ${isActive ? "font-bold" : ""}`}>
                  <Hospital size={16} />
                  <span>Hospital Automation</span>
                </NavLink>
                <NavLink to="/hotel-automation" className={({ isActive }) => `flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-black/5 ${isActive ? "font-bold" : ""}`}>
                  <Hotel size={16} />
                  <span>Hotel Automation</span>
                </NavLink>
              </div>
            </div>
          </div>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `transition-colors hover:opacity-80 py-2 ${isActive ? "border-b-2 border-[color:var(--brand-text)]" : ""
              }`
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `transition-colors hover:opacity-80 py-2 ${isActive ? "border-b-2 border-[color:var(--brand-text)]" : ""
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `transition-colors hover:opacity-80 py-2 ${isActive ? "border-b-2 border-[color:var(--brand-text)]" : ""
              }`
            }
          >
            Contact
          </NavLink>
        </nav>
        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="p-2 rounded-lg text-[color:var(--brand-text)] hover:bg-[color:var(--brand-overlay-light)] transition-colors"
            title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={() => setShowHomeAutomation(true)}
            className="text-[color:var(--brand-text)] font-semibold hover:opacity-80 transition-opacity"
          >
            Get in touch
          </button>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="p-2 rounded-lg text-[color:var(--brand-text)] hover:bg-[color:var(--brand-overlay-light)] transition-colors md:hidden"
            title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            aria-label={openMenu === "mainMenu" ? "Close menu" : "Open menu"}
            className="md:hidden text-[color:var(--brand-text)] font-semibold text-lg p-1"
            onClick={() => toggleMenu("mainMenu")}
          >
            {openMenu === "mainMenu" ? "X" : "☰"}
          </button>
        </div>
      </div>

      {openMenu === "mainMenu" && (
        <div className="md:hidden fixed w-full bg-gray-100 overflow-auto z-60">
          <div className="flex flex-col items-center min-h-screen space-y-3 mt-5 px-4"  >
            <NavLink
              to="/"
              className={({ isActive }) =>
                `p-2 text-lg  w-full  ${isActive ? "font-bold bg-gray-300" : "font-medium"
                }`
              }
              onClick={() => setOpenMenu(null)}
            >
              Home
            </NavLink>
            {/* Our Solution nested menu (mobile) */}
            <div className="w-full">
              <NavLink
                to="/our-solution"
                className={({ isActive }) => `p-2 text-lg w-full inline-block ${isActive ? "font-bold bg-gray-300" : "font-medium"}`}
                onClick={() => setOpenMenu(null)}
              >
                Our Solution
              </NavLink>
              <div className="ml-3 mt-1 space-y-1">
                <NavLink to="/home-automation" className={({ isActive }) => `flex items-center gap-2 p-2 text-base w-full ${isActive ? "font-bold bg-gray-300" : "font-medium"}`} onClick={() => setOpenMenu(null)}>
                  <HomeIcon size={16} />
                  <span>Home Automation</span>
                </NavLink>
                <NavLink to="/office-automation" className={({ isActive }) => `flex items-center gap-2 p-2 text-base w-full ${isActive ? "font-bold bg-gray-300" : "font-medium"}`} onClick={() => setOpenMenu(null)}>
                  <Building2 size={16} />
                  <span>Office Automation</span>
                </NavLink>
                <NavLink to="/hospital-automation" className={({ isActive }) => `flex items-center gap-2 p-2 text-base w-full ${isActive ? "font-bold bg-gray-300" : "font-medium"}`} onClick={() => setOpenMenu(null)}>
                  <Hospital size={16} />
                  <span>Hospital Automation</span>
                </NavLink>
                <NavLink to="/hotel-automation" className={({ isActive }) => `flex items-center gap-2 p-2 text-base w-full ${isActive ? "font-bold bg-gray-300" : "font-medium"}`} onClick={() => setOpenMenu(null)}>
                  <Hotel size={16} />
                  <span>Hotel Automation</span>
                </NavLink>
              </div>
            </div>
            {/* <NavLink
              to="/home-automation"
              className={({ isActive }) =>
                `p-2 text-lg  w-full  ${isActive ? "font-bold bg-gray-300" : "font-medium"
                }`
              }
              onClick={() => setOpenMenu(null)}
            >
              Home Automation
            </NavLink> */}
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `p-2 text-lg  w-full  ${isActive ? "font-bold bg-gray-300" : "font-medium"
                }`
              }
              onClick={() => setOpenMenu(null)}
            >
              Services
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `p-2 text-lg  w-full  ${isActive ? "font-bold bg-gray-300" : "font-medium"
                }`
              }
              onClick={() => setOpenMenu(null)}
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `p-2 text-lg  w-full  ${isActive ? "font-bold bg-gray-300" : "font-medium"
                }`
              }
              onClick={() => setOpenMenu(null)}
            >
              Contact
            </NavLink>
            <div className="mt-20 space-y-3">
              <button
                onClick={toggleTheme}
                aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
                className="w-full p-2 rounded-lg text-[color:var(--brand-text)] bg-[color:var(--brand-overlay-light)] hover:bg-[color:var(--brand-overlay-medium)] transition-colors flex items-center justify-center gap-2"
              >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                <span>Switch to {theme === "dark" ? "Light" : "Dark"} Mode</span>
              </button>
              <button
                onClick={() => {
                  setOpenMenu(null);
                  setShowHomeAutomation(true);
                }}
                className="bg-[color:var(--brand-primary-start)] text-white p-2 text-lg font-bold inline-block text-center w-full rounded-lg"
              >
                Book a Demo
              </button>
            </div>
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
