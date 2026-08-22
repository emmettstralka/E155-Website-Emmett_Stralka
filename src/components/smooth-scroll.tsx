"use client";

import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, type ReactNode } from "react";

gsap.registerPlugin(ScrollTrigger);

/**
 * Imperative Lenis (no ReactLenis root wrapper). Wrapping the App Router tree
 * reparents nodes React still owns and throws NotFoundError on removeChild
 * during route changes / hydration recovery.
 */
export function SmoothScroll({ children }: { children: ReactNode }) {
  const path = usePathname();

  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: false,
      lerp: 0.075,
      duration: 1.15,
      smoothWheel: true,
      syncTouch: false,
    });

    const onScroll = () => ScrollTrigger.update();
    lenis.on("scroll", onScroll);

    const tick = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    if (document.documentElement.classList.contains("is-loading")) {
      lenis.stop();
    }

    const onReady = () => {
      lenis.start();
      requestAnimationFrame(() => ScrollTrigger.refresh());
    };
    window.addEventListener("es:ready", onReady);

    (window as Window & { __esLenis?: Lenis }).__esLenis = lenis;
    window.dispatchEvent(new Event("es:lenis"));

    return () => {
      window.removeEventListener("es:ready", onReady);
      lenis.off("scroll", onScroll);
      gsap.ticker.remove(tick);
      lenis.destroy();
      delete (window as Window & { __esLenis?: Lenis }).__esLenis;
    };
  }, []);

  useLayoutEffect(() => {
    const lenis = (window as Window & { __esLenis?: Lenis }).__esLenis;

    ScrollTrigger.getAll().forEach((trigger) => {
      const node = trigger.trigger;
      if (node && !document.documentElement.contains(node)) {
        trigger.kill(true);
      }
    });

    lenis?.resize();
    lenis?.scrollTo(0, { immediate: true, force: true });
    window.scrollTo(0, 0);

    const id = requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });
    return () => cancelAnimationFrame(id);
  }, [path]);

  return <>{children}</>;
}
