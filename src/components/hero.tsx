"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { person } from "@/lib/content";
import { withBase } from "@/lib/paths";
import { MagneticLink } from "./magnetic";

gsap.registerPlugin(ScrollTrigger);

/**
 * Hero is a looping full-bleed video, not a scrubbed timeline.
 * Hold uses CSS sticky (not ScrollTrigger pin) so React never loses the section node.
 */
export function Hero() {
  const shell = useRef<HTMLDivElement>(null);
  const root = useRef<HTMLElement>(null);
  const video = useRef<HTMLVideoElement>(null);
  const scrim = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const hold = shell.current;
    const el = root.current;
    const v = video.current;
    const veil = scrim.current;
    if (!hold || !el || !v || !veil) return;

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

      // Scrub only — never pin (pin reparents and breaks route unmount).
      // Range tracks shell height − 100svh; scrub lag tuned for the shorter hold.
      ScrollTrigger.create({
        trigger: hold,
        start: "top top",
        end: "bottom top",
        scrub: 0.4,
        onUpdate: (self) => {
          gsap.set(veil, { opacity: 0.32 + self.progress * 0.1 });
        },
      });
    }, el);

    return () => {
      window.removeEventListener("es:ready", onReady);
      ctx.revert();
    };
  }, []);

  return (
    <div ref={shell} className="relative h-[160svh]">
      <section ref={root} className="sticky top-0 h-[100svh] overflow-hidden bg-black">
        <video
          id="hero-video"
          ref={video}
          className="video-bleed"
          src={withBase("/video/robotic-arm.mp4")}
          poster={withBase("/images/robotic-arm-poster.jpg")}
          muted
          playsInline
          loop
          autoPlay
          preload="auto"
          disablePictureInPicture
        />
        <div
          ref={scrim}
          className="hero-scrim pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/35"
        />

        <h1 className="sr-only">{person.name}</h1>

        <div className="relative z-10 mx-auto flex h-full max-w-[1400px] items-center pl-10 pr-5 md:pl-16 md:pr-8">
          <div className="w-full max-w-xl">
            <p className="hero-meta mb-5 text-[13px] tracking-[0.32em] text-white/70">
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
    </div>
  );
}
