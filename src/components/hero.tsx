"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { person } from "@/lib/content";
import { MagneticLink } from "./magnetic";

gsap.registerPlugin(ScrollTrigger);

/**
 * Hero is a looping full-bleed video, not a scrubbed timeline.
 * The film already builds the name — overlay copy sits mid-frame, left-aligned.
 */
export function Hero() {
  const root = useRef<HTMLElement>(null);
  const video = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = root.current;
    const v = video.current;
    if (!el || !v) return;

    const play = () => {
      v.playbackRate = 1;
      void v.play().catch(() => undefined);
    };
    if (v.readyState >= 2) play();
    else v.addEventListener("canplay", play, { once: true });

    const onReady = () => play();
    window.addEventListener("es:ready", onReady);

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = gsap.context(() => {
      const intro = gsap.timeline({ paused: true });
      intro.from(".hero-meta", { opacity: 0, y: 14, duration: 0.9, ease: "power2.out" });

      const runIntro = () => {
        intro.play(0);
        requestAnimationFrame(() => ScrollTrigger.refresh());
      };
      if (document.documentElement.classList.contains("is-loading")) {
        window.addEventListener("es:ready", runIntro, { once: true });
      } else {
        runIntro();
      }

      if (reduced) return;

      ScrollTrigger.create({
        trigger: el,
        start: "top top",
        end: "+=140%",
        pin: true,
        scrub: 0.55,
        anticipatePin: 1,
        onUpdate: (self) => {
          gsap.set(".hero-scrim", { opacity: 0.32 + self.progress * 0.1 });
        },
      });
    }, el);

    return () => {
      window.removeEventListener("es:ready", onReady);
      ctx.revert();
    };
  }, []);

  return (
    <section ref={root} className="relative h-[100svh] overflow-hidden bg-black">
      <video
        id="hero-video"
        ref={video}
        className="video-bleed"
        src="/video/robotic-arm.mp4"
        poster="/images/robotic-arm-poster.jpg"
        muted
        playsInline
        loop
        autoPlay
        preload="auto"
        disablePictureInPicture
      />
      <div className="hero-scrim pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/35" />

      <h1 className="sr-only">{person.name}</h1>

      <div className="relative z-10 mx-auto flex h-full max-w-[1400px] items-center pl-10 pr-5 md:pl-16 md:pr-8">
        <div className="w-full max-w-xl">
          <p className="hero-meta mb-5 text-[12px] tracking-[0.32em] text-white/70">
            {person.school} · {person.location}
          </p>
          <p className="hero-meta mt-8 max-w-lg text-lg leading-relaxed text-white/80 md:text-xl">
            {person.thesis}
          </p>

          <div className="hero-meta mt-8 flex flex-wrap gap-3">
            <MagneticLink
              href="#work"
              className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-medium text-[#050506]"
            >
              Selected work
            </MagneticLink>
            <MagneticLink
              href="/experience"
              className="inline-flex rounded-full border border-white/30 px-6 py-3 text-sm text-white"
            >
              Experience
            </MagneticLink>
          </div>
        </div>
      </div>

      <p className="hero-meta pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-[11px] tracking-[0.4em] text-white/45 md:block">
        SCROLL
      </p>
    </section>
  );
}
