import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Custom hook for GSAP animations
 * Automatically handles cleanup and ScrollTrigger refresh
 */
export const useGSAP = (
  animationFn: () => void | gsap.core.Tween | gsap.core.Timeline,
  dependencies: React.DependencyList = []
) => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      animationFn();
    });

    return () => {
      ctx.revert();
      ScrollTrigger.refresh();
    };
  }, dependencies);
};

