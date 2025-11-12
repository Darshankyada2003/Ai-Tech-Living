import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

/**
 * GSAP Animation Utilities
 * Reusable animation functions using GSAP Timeline
 */

/**
 * Fade in and slide up animation
 */
export const fadeInUp = (element: gsap.TweenTarget, delay: number = 0) => {
  return gsap.from(element, {
    opacity: 0,
    y: 60,
    duration: 1,
    delay,
    ease: "power3.out",
  });
};

/**
 * Fade in animation
 */
export const fadeIn = (element: gsap.TweenTarget, delay: number = 0) => {
  return gsap.from(element, {
    opacity: 0,
    duration: 1,
    delay,
    ease: "power2.out",
  });
};

/**
 * Scale in animation
 */
export const scaleIn = (element: gsap.TweenTarget, delay: number = 0) => {
  return gsap.from(element, {
    scale: 0.8,
    opacity: 0,
    duration: 0.8,
    delay,
    ease: "back.out(1.7)",
  });
};

/**
 * Slide in from left
 */
export const slideInLeft = (element: gsap.TweenTarget, delay: number = 0) => {
  return gsap.from(element, {
    x: -100,
    opacity: 0,
    duration: 1,
    delay,
    ease: "power3.out",
  });
};

/**
 * Slide in from right
 */
export const slideInRight = (element: gsap.TweenTarget, delay: number = 0) => {
  return gsap.from(element, {
    x: 100,
    opacity: 0,
    duration: 1,
    delay,
    ease: "power3.out",
  });
};

/**
 * Stagger animation for multiple elements
 */
export const staggerFadeInUp = (
  elements: gsap.TweenTarget,
  stagger: number = 0.2
) => {
  return gsap.from(elements, {
    opacity: 0,
    y: 50,
    duration: 0.8,
    stagger,
    ease: "power2.out",
  });
};

/**
 * Text reveal animation (split text effect)
 */
export const textReveal = (element: gsap.TweenTarget, delay: number = 0) => {
  return gsap.from(element, {
    opacity: 0,
    y: 30,
    duration: 1,
    delay,
    ease: "power3.out",
  });
};

/**
 * Hero section timeline animation
 */
export const heroTimeline = (elements: {
  badge?: HTMLElement | null;
  title?: HTMLElement | null;
  description?: HTMLElement | null;
  typewriter?: HTMLElement | null;
}) => {
  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

  if (elements.badge) {
    tl.from(elements.badge, {
      opacity: 0,
      y: 20,
      duration: 0.6,
    });
  }

  if (elements.title) {
    tl.from(
      elements.title,
      {
        opacity: 0,
        y: 60,
        duration: 1,
      },
      "-=0.4"
    );
  }

  if (elements.description) {
    tl.from(
      elements.description,
      {
        opacity: 0,
        y: 40,
        duration: 0.8,
      },
      "-=0.6"
    );
  }

  if (elements.typewriter) {
    tl.from(
      elements.typewriter,
      {
        opacity: 0,
        x: -20,
        duration: 0.6,
      },
      "-=0.4"
    );
  }

  return tl;
};

/**
 * Scroll-triggered fade in up animation
 */
export const scrollFadeInUp = (
  element: gsap.TweenTarget,
  options?: {
    start?: string;
    end?: string;
    once?: boolean;
    amount?: number;
  }
) => {
  return gsap.from(element, {
    opacity: 0,
    y: 80,
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: element as gsap.DOMTarget,
      start: options?.start || "top 80%",
      end: options?.end || "top 50%",
      toggleActions: options?.once ? "play none none none" : "play none none reverse",
      once: options?.once || false,
    },
  });
};

/**
 * Scroll-triggered stagger animation for cards
 */
export const scrollStaggerCards = (
  elements: gsap.TweenTarget,
  stagger: number = 0.15
) => {
  return gsap.from(elements, {
    opacity: 0,
    y: 60,
    scale: 0.9,
    duration: 0.8,
    stagger,
    ease: "back.out(1.2)",
    scrollTrigger: {
      trigger: elements as gsap.DOMTarget,
      start: "top 85%",
      toggleActions: "play none none reverse",
    },
  });
};

/**
 * Parallax effect for images
 */
export const parallaxImage = (element: gsap.TweenTarget, speed: number = 0.5) => {
  return gsap.to(element, {
    yPercent: -50 * speed,
    ease: "none",
    scrollTrigger: {
      trigger: element as gsap.DOMTarget,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });
};

/**
 * Magnetic button effect
 */
export const magneticButton = (element: HTMLElement) => {
  const handleMouseMove = (e: MouseEvent) => {
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(element, {
      x: x * 0.3,
      y: y * 0.3,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(element, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "power2.out",
    });
  };

  element.addEventListener("mousemove", handleMouseMove);
  element.addEventListener("mouseleave", handleMouseLeave);

  return () => {
    element.removeEventListener("mousemove", handleMouseMove);
    element.removeEventListener("mouseleave", handleMouseLeave);
  };
};

/**
 * Image hover scale effect
 */
export const imageHoverScale = (element: HTMLElement) => {
  const handleMouseEnter = () => {
    gsap.to(element, {
      scale: 1.05,
      duration: 0.6,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(element, {
      scale: 1,
      duration: 0.6,
      ease: "power2.out",
    });
  };

  element.addEventListener("mouseenter", handleMouseEnter);
  element.addEventListener("mouseleave", handleMouseLeave);

  return () => {
    element.removeEventListener("mouseenter", handleMouseEnter);
    element.removeEventListener("mouseleave", handleMouseLeave);
  };
};

/**
 * Header show/hide animation
 */
export const headerAnimation = (element: HTMLElement, isHidden: boolean) => {
  gsap.to(element, {
    y: isHidden ? -100 : 0,
    duration: 0.3,
    ease: "power2.inOut",
  });
};

/**
 * Split text reveal animation
 */
export const splitTextReveal = (element: HTMLElement) => {
  const text = element.textContent || "";
  const words = text.split(" ");
  
  element.innerHTML = words
    .map((word) => `<span class="word-wrapper"><span class="word">${word}</span></span>`)
    .join(" ");

  const wordElements = element.querySelectorAll(".word");
  
  return gsap.from(wordElements, {
    opacity: 0,
    y: 30,
    rotationX: -90,
    transformOrigin: "50% 50% -50",
    duration: 0.8,
    stagger: 0.05,
    ease: "back.out(1.2)",
    scrollTrigger: {
      trigger: element,
      start: "top 80%",
      toggleActions: "play none none reverse",
    },
  });
};

/**
 * Counter animation
 */
export const counterAnimation = (
  element: HTMLElement,
  targetValue: number,
  duration: number = 2
) => {
  const obj = { value: 0 };
  
  return gsap.to(obj, {
    value: targetValue,
    duration,
    ease: "power2.out",
    onUpdate: () => {
      element.textContent = Math.round(obj.value).toString();
    },
    scrollTrigger: {
      trigger: element,
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });
};

