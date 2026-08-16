"use client";

import { ReactLenis, useLenis } from "lenis/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";
import { useEffect, type ReactNode } from "react";

gsap.registerPlugin(ScrollTrigger);

function GsapLenisBridge() {
  const lenis = useLenis();
  const path = usePathname();

  useEffect(() => {
    if (!lenis) return;
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

    return () => {
      window.removeEventListener("es:ready", onReady);
      lenis.off("scroll", onScroll);
      gsap.ticker.remove(tick);
    };
  }, [lenis]);

  useEffect(() => {
    if (!lenis) return;

    ScrollTrigger.getAll().forEach((trigger) => {
      const node = trigger.trigger;
      if (node && !document.documentElement.contains(node)) {
        trigger.kill();
      }
    });

    lenis.resize();
    lenis.scrollTo(0, { immediate: true, force: true });
    window.scrollTo(0, 0);

    const id = requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });
    return () => cancelAnimationFrame(id);
  }, [path, lenis]);

  return null;
}

export function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        autoRaf: false,
        lerp: 0.075,
        duration: 1.15,
        smoothWheel: true,
        syncTouch: false,
      }}
    >
      <GsapLenisBridge />
      {children}
    </ReactLenis>
  );
}
