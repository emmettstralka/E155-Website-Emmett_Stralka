"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Scene = {
  kicker: string;
  title: string;
  body: string;
  image: string;
  alt: string;
};

const scenes: Scene[] = [
  {
    kicker: "Ford · Technical Product Manager",
    title: "An assistant that lives in the vehicle.",
    body: "Embedded small language model with cloud fallback. Live CAN bus. RAG routing. A prototype that helped shape a $200M platform call.",
    image: "/images/ford-cabin-v2.png",
    alt: "Night Ford cabin with logo on the steering wheel",
  },
  {
    kicker: "Trilobio · Electrical Engineering",
    title: "Mass at a tenth of a milligram.",
    body: "Capacitive PCBs, flexure mechanics, 24-bit ADCs, and damping systems for high-throughput lab automation.",
    image: "/images/trilobio-pipette-v2.png",
    alt: "Eight-channel pipette head over a microplate on a precision lab stage",
  },
  {
    kicker: "Ford · Data Science",
    title: "Energy-aware routing at fleet scale.",
    body: "Vehicle Energy Model on V363. Telemetry against prediction. CarPlay and SYNC pairing for hundreds of thousands of EVs.",
    image: "/images/ford-fleet-routing-alt.png",
    alt: "Night Ford Transit fleet with cyan routing overlays",
  },
];

export function StickyChapters() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(max-width: 767px)").matches) return;

    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray<HTMLElement>(".chapter");
      panels.forEach((panel) => {
        const img = panel.querySelector(".chapter-img");
        gsap.fromTo(
          img,
          { scale: 1.12 },
          {
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: panel,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        );
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="space-y-12 bg-[#050506]">
      {scenes.map((s) => (
        <article
          key={s.title}
          className="chapter relative grid min-h-[100svh] items-end md:grid-cols-2"
        >
          <div className="relative z-10 order-2 flex flex-col justify-end px-8 py-16 md:sticky md:top-0 md:order-1 md:h-[100svh] md:pl-16 md:pr-10 md:py-24">
            <p className="text-[12px] tracking-[0.28em] text-white/50">{s.kicker}</p>
            <h3 className="mt-4 max-w-lg text-[clamp(1.8rem,3.4vw,3.2rem)] font-medium leading-[1.05] tracking-[-0.03em] text-white">
              {s.title}
            </h3>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/65">{s.body}</p>
          </div>
          <div className="relative order-1 h-[55vh] overflow-hidden md:order-2 md:h-[100svh]">
            <Image src={s.image} alt={s.alt} fill className="chapter-img object-cover" sizes="(min-width: 768px) 50vw, 100vw" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:bg-gradient-to-l" />
          </div>
        </article>
      ))}
    </section>
  );
}
