"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { focus } from "@/lib/content";

gsap.registerPlugin(ScrollTrigger);

export function FocusRail() {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const el = root.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(".focus-item");
      items.forEach((item) => {
        ScrollTrigger.create({
          trigger: item,
          start: "top 70%",
          end: "bottom 40%",
          onEnter: () => item.classList.add("text-white"),
          onEnterBack: () => item.classList.add("text-white"),
          onLeave: () => item.classList.remove("text-white"),
          onLeaveBack: () => item.classList.remove("text-white"),
        });
      });
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="px-5 py-28 md:px-8 md:py-36">
      <div className="mx-auto max-w-[1400px]">
        <p className="text-[12px] tracking-[0.32em] text-white/45">FOCUS</p>
        <ul className="mt-10 space-y-2">
          {focus.map((item) => (
            <li
              key={item}
              className="focus-item text-[clamp(1.6rem,4.4vw,4rem)] font-medium tracking-[-0.035em] text-white/25 transition-colors duration-500"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
