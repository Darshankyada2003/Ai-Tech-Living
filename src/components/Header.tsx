import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Home as HomeIcon, Building2, Hospital, Hotel } from "lucide-react";
const logo = "/logo (2).svg";
import HomeAutomationModal from "./HomeAutomationModal";
import { gsap } from "gsap";
import { useGSAP } from "../hooks/useGSAP";

export default function Header() {
  const [showHomeAutomation, setShowHomeAutomation] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const lastYRef = useRef<number>(0);

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
          if (headerRef.current) {
            gsap.to(headerRef.current, {
              y: -100,
              duration: 0.3,
              ease: "power2.inOut",
            });
          }
        } else if (delta < 0) {
          // scrolling up: show header with GSAP
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
      className="sticky top-0 left-0 right-0 z-50 bg-[color:var(--brand-surface)] backdrop-blur-md border-b border-[color:var(--brand-border)] shadow-sm"
    >
      <div className="container-narrow flex items-center py-2 sm:py-1.5 md:py-3 relative">
        {/* Logo - Left Aligned */}
        <Link ref={logoRef} to="/" className="flex items-center gap-2 sm:gap-3 flex-shrink-0 z-10">
          <img
            src={logo}
            alt="AiTech Living Logo"
            className="h-8 sm:h-10 md:h-15 w-auto object-contain"
          />
        </Link>

        {/* Navigation - Center Aligned */}
        <nav ref={navRef} className="hidden md:flex items-center gap-6 text-base font-semibold text-[color:var(--brand-text)] absolute left-1/2 transform -translate-x-1/2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `transition-all  duration-200 hover:text-[color:var(--brand-heading)] py-2 text-[color:var(--brand-text)] ${isActive ? "border-b-2 border-[color:var(--brand-heading)] text-[color:var(--brand-heading)] font-bold" : ""
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
                `transition-all duration-200 hover:text-[color:var(--brand-heading)] py-2 text-[color:var(--brand-text)] relative ${isActive ? "border-b-2 border-[color:var(--brand-heading)] text-[color:var(--brand-heading)] font-bold" : ""
                }`
              }
            >
              Our Solution
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[color:var(--brand-primary-start)] to-[color:var(--brand-primary-end)] group-hover:w-full transition-all duration-300"></span>
            </NavLink>
            <div className="pointer-events-none absolute left-1/2 transform -translate-x-1/2 top-full mt-3 opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 z-50 scale-95 group-hover:scale-100">
              <div className="relative min-w-[280px] rounded-2xl border border-[color:var(--brand-border)] bg-[color:var(--brand-surface)] shadow-2xl backdrop-blur-xl p-3 space-y-1">
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[color:var(--brand-surface)] border-l border-t border-[color:var(--brand-border)] rotate-45 rounded-tl"></div>
                <div className="px-2 py-1.5 mb-2 border-b border-[color:var(--brand-border)]">
                  <p className="text-xs font-bold uppercase tracking-wider text-[color:var(--brand-heading)]">Solutions</p>
                </div>
                <NavLink
                  to="/home-automation"
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group/item ${isActive
                      ? "bg-gradient-to-r from-[color:var(--brand-primary-start)]/10 to-[color:var(--brand-primary-end)]/10 border border-[color:var(--brand-primary-start)]/30 text-[color:var(--brand-heading)] font-semibold"
                      : "hover:bg-gradient-to-r hover:from-[color:var(--brand-primary-start)]/5 hover:to-[color:var(--brand-primary-end)]/5 text-[color:var(--brand-text)]"
                    }`
                  }
                >
                  <div className="p-1.5 rounded-lg transition-colors bg-[color:var(--brand-overlay-light)] group-hover/item:bg-[color:var(--brand-primary-start)]/20 group-[&.active]/item:bg-[color:var(--brand-primary-start)]/20">
                    <HomeIcon size={18} className="text-[color:var(--brand-text)]" />
                  </div>
                  <span className="flex-1">Home Automation</span>
                  <span className="text-xs opacity-0 group-hover/item:opacity-100 transition-opacity">→</span>
                </NavLink>
                <NavLink
                  to="/office-automation"
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group/item ${isActive
                      ? "bg-gradient-to-r from-[color:var(--brand-primary-start)]/10 to-[color:var(--brand-primary-end)]/10 border border-[color:var(--brand-primary-start)]/30 text-[color:var(--brand-heading)] font-semibold"
                      : "hover:bg-gradient-to-r hover:from-[color:var(--brand-primary-start)]/5 hover:to-[color:var(--brand-primary-end)]/5 text-[color:var(--brand-text)]"
                    }`
                  }
                >
                  <div className="p-1.5 rounded-lg transition-colors bg-[color:var(--brand-overlay-light)] group-hover/item:bg-[color:var(--brand-primary-start)]/20 group-[&.active]/item:bg-[color:var(--brand-primary-start)]/20">
                    <Building2 size={18} className="text-[color:var(--brand-text)]" />
                  </div>
                  <span className="flex-1">Office Automation</span>
                  <span className="text-xs opacity-0 group-hover/item:opacity-100 transition-opacity">→</span>
                </NavLink>
                <NavLink
                  to="/hospital-automation"
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group/item ${isActive
                      ? "bg-gradient-to-r from-[color:var(--brand-primary-start)]/10 to-[color:var(--brand-primary-end)]/10 border border-[color:var(--brand-primary-start)]/30 text-[color:var(--brand-heading)] font-semibold"
                      : "hover:bg-gradient-to-r hover:from-[color:var(--brand-primary-start)]/5 hover:to-[color:var(--brand-primary-end)]/5 text-[color:var(--brand-text)]"
                    }`
                  }
                >
                  <div className="p-1.5 rounded-lg transition-colors bg-[color:var(--brand-overlay-light)] group-hover/item:bg-[color:var(--brand-primary-start)]/20 group-[&.active]/item:bg-[color:var(--brand-primary-start)]/20">
                    <Hospital size={18} className="text-[color:var(--brand-text)]" />
                  </div>
                  <span className="flex-1">Hospital Automation</span>
                  <span className="text-xs opacity-0 group-hover/item:opacity-100 transition-opacity">→</span>
                </NavLink>
                <NavLink
                  to="/hotel-automation"
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group/item ${isActive
                      ? "bg-gradient-to-r from-[color:var(--brand-primary-start)]/10 to-[color:var(--brand-primary-end)]/10 border border-[color:var(--brand-primary-start)]/30 text-[color:var(--brand-heading)] font-semibold"
                      : "hover:bg-gradient-to-r hover:from-[color:var(--brand-primary-start)]/5 hover:to-[color:var(--brand-primary-end)]/5 text-[color:var(--brand-text)]"
                    }`
                  }
                >
                  <div className="p-1.5 rounded-lg transition-colors bg-[color:var(--brand-overlay-light)] group-hover/item:bg-[color:var(--brand-primary-start)]/20 group-[&.active]/item:bg-[color:var(--brand-primary-start)]/20">
                    <Hotel size={18} className="text-[color:var(--brand-text)]" />
                  </div>
                  <span className="flex-1">Hotel Automation</span>
                  <span className="text-xs opacity-0 group-hover/item:opacity-100 transition-opacity">→</span>
                </NavLink>
              </div>
            </div>
          </div>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `transition-all duration-200 hover:text-[color:var(--brand-heading)] py-2 text-[color:var(--brand-text)] ${isActive ? "border-b-2 border-[color:var(--brand-heading)] text-[color:var(--brand-heading)] font-bold" : ""
              }`
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `transition-all duration-200 hover:text-[color:var(--brand-heading)] py-2 text-[color:var(--brand-text)] ${isActive ? "border-b-2 border-[color:var(--brand-heading)] text-[color:var(--brand-heading)] font-bold" : ""
              }`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `transition-all duration-200 hover:text-[color:var(--brand-heading)] py-2 text-[color:var(--brand-text)] ${isActive ? "border-b-2 border-[color:var(--brand-heading)] text-[color:var(--brand-heading)] font-bold" : ""
              }`
            }
          >
            Contact
          </NavLink>
        </nav>

        {/* Right Section - Button and Mobile Menu */}
        <div className="flex items-center gap-4 ml-auto flex-shrink-0">
          <div className="hidden lg:flex items-center">
            <button
              onClick={() => setShowHomeAutomation(true)}
              className="px-4 py-2 bg-gradient-to-r from-[color:var(--brand-primary-start)] to-[color:var(--brand-primary-end)] text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
            >
              Get in touch
            </button>
          </div>
          <button
            aria-label={openMenu === "mainMenu" ? "Close menu" : "Open menu"}
            className="md:hidden text-[color:var(--brand-text)] font-semibold text-xl p-2 hover:text-[color:var(--brand-heading)] transition-colors"
            onClick={() => toggleMenu("mainMenu")}
          >
            {openMenu === "mainMenu" ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {openMenu === "mainMenu" && (
        <div className="md:hidden fixed w-full bg-[color:var(--brand-surface)] backdrop-blur-md border-t border-[color:var(--brand-border)] overflow-auto z-60 shadow-lg">
          <div className="flex flex-col items-center min-h-screen space-y-2 mt-5 px-4 pb-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `p-3 text-lg w-full text-center rounded-lg transition-all text-[color:var(--brand-text)] ${isActive
                  ? "font-bold bg-gradient-to-r from-[color:var(--brand-primary-start)] to-[color:var(--brand-primary-end)] text-white"
                  : "font-medium hover:bg-[color:var(--brand-overlay-light)]"
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
                className={({ isActive }) =>
                  `p-3 text-lg w-full inline-block text-center rounded-lg transition-all text-[color:var(--brand-text)] ${isActive
                    ? "font-bold bg-gradient-to-r from-[color:var(--brand-primary-start)] to-[color:var(--brand-primary-end)] text-white"
                    : "font-medium hover:bg-[color:var(--brand-overlay-light)]"
                  }`
                }
                onClick={() => setOpenMenu(null)}
              >
                Our Solution
              </NavLink>
              <div className="ml-4 mt-2 space-y-1">
                <NavLink
                  to="/home-automation"
                  className={({ isActive }) =>
                    `flex items-center gap-2 p-2 text-base w-full rounded-lg transition-all text-[color:var(--brand-text)] ${isActive
                      ? "font-bold text-[color:var(--brand-heading)] bg-[color:var(--brand-overlay-light)]"
                      : "font-medium hover:bg-[color:var(--brand-overlay-light)]"
                    }`
                  }
                  onClick={() => setOpenMenu(null)}
                >
                  <HomeIcon size={16} />
                  <span>Home Automation</span>
                </NavLink>
                <NavLink
                  to="/office-automation"
                  className={({ isActive }) =>
                    `flex items-center gap-2 p-2 text-base w-full rounded-lg transition-all text-[color:var(--brand-text)] ${isActive
                      ? "font-bold text-[color:var(--brand-heading)] bg-[color:var(--brand-overlay-light)]"
                      : "font-medium hover:bg-[color:var(--brand-overlay-light)]"
                    }`
                  }
                  onClick={() => setOpenMenu(null)}
                >
                  <Building2 size={16} />
                  <span>Office Automation</span>
                </NavLink>
                <NavLink
                  to="/hospital-automation"
                  className={({ isActive }) =>
                    `flex items-center gap-2 p-2 text-base w-full rounded-lg transition-all text-[color:var(--brand-text)] ${isActive
                      ? "font-bold text-[color:var(--brand-heading)] bg-[color:var(--brand-overlay-light)]"
                      : "font-medium hover:bg-[color:var(--brand-overlay-light)]"
                    }`
                  }
                  onClick={() => setOpenMenu(null)}
                >
                  <Hospital size={16} />
                  <span>Hospital Automation</span>
                </NavLink>
                <NavLink
                  to="/hotel-automation"
                  className={({ isActive }) =>
                    `flex items-center gap-2 p-2 text-base w-full rounded-lg transition-all text-[color:var(--brand-text)] ${isActive
                      ? "font-bold text-[color:var(--brand-heading)] bg-[color:var(--brand-overlay-light)]"
                      : "font-medium hover:bg-[color:var(--brand-overlay-light)]"
                    }`
                  }
                  onClick={() => setOpenMenu(null)}
                >
                  <Hotel size={16} />
                  <span>Hotel Automation</span>
                </NavLink>
              </div>
            </div>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `p-3 text-lg w-full text-center rounded-lg transition-all text-[color:var(--brand-text)] ${isActive
                  ? "font-bold bg-gradient-to-r from-[color:var(--brand-primary-start)] to-[color:var(--brand-primary-end)] text-white"
                  : "font-medium hover:bg-[color:var(--brand-overlay-light)]"
                }`
              }
              onClick={() => setOpenMenu(null)}
            >
              Services
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `p-3 text-lg w-full text-center rounded-lg transition-all text-[color:var(--brand-text)] ${isActive
                  ? "font-bold bg-gradient-to-r from-[color:var(--brand-primary-start)] to-[color:var(--brand-primary-end)] text-white"
                  : "font-medium hover:bg-[color:var(--brand-overlay-light)]"
                }`
              }
              onClick={() => setOpenMenu(null)}
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `p-3 text-lg w-full text-center rounded-lg transition-all text-[color:var(--brand-text)] ${isActive
                  ? "font-bold bg-gradient-to-r from-[color:var(--brand-primary-start)] to-[color:var(--brand-primary-end)] text-white"
                  : "font-medium hover:bg-[color:var(--brand-overlay-light)]"
                }`
              }
              onClick={() => setOpenMenu(null)}
            >
              Contact
            </NavLink>
            <div className="mt-8 w-full px-4">
              <button
                onClick={() => {
                  setOpenMenu(null);
                  setShowHomeAutomation(true);
                }}
                className="bg-gradient-to-r from-[color:var(--brand-primary-start)] to-[color:var(--brand-primary-end)] text-white p-3 text-lg font-bold w-full rounded-lg hover:opacity-90 transition-all duration-200 shadow-lg"
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
