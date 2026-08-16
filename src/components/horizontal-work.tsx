"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { projects } from "@/lib/content";

const AUTOPLAY_MS = 2800;

const navBtn =
  "absolute z-30 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/20 text-white/50 backdrop-blur-md transition hover:scale-105 hover:border-white/55 hover:bg-white/45 hover:text-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:h-[4.25rem] md:w-[4.25rem]";

function wrap(n: number, len: number) {
  return ((n % len) + len) % len;
}

function signedDelta(i: number, active: number, n: number) {
  let d = i - active;
  const half = n / 2;
  if (d > half) d -= n;
  if (d < -half) d += n;
  return d;
}

function Chevron({ dir }: { dir: "prev" | "next" }) {
  return (
    <svg
      viewBox="0 0 36 36"
      className="h-7 w-7 md:h-8 md:w-8"
      aria-hidden
      fill="none"
    >
      <path
        d={dir === "prev" ? "M22 8L12 18l10 10" : "M14 8l10 10-10 10"}
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WorkCard({
  p,
  onPeek,
}: {
  p: (typeof projects)[number];
  onPeek?: () => void;
}) {
  const inner = (
    <>
      <div className="relative h-[52vh] w-[min(88vw,720px)] overflow-hidden rounded-[1.6rem] md:h-[62vh] md:w-[58vw]">
        <Image
          src={p.image}
          alt={p.alt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          sizes="(min-width: 768px) 58vw, 88vw"
        />
      </div>
      <div className="mt-5 max-w-xl">
        <p className="text-[12px] tracking-[0.28em] text-white/45">{p.kicker}</p>
        <h3 className="mt-2 text-3xl tracking-[-0.03em] text-white">{p.title}</h3>
        <p className="mt-2 text-white/65">{p.subtitle}</p>
      </div>
    </>
  );

  if (onPeek) {
    return (
      <button type="button" className="group block text-left" onClick={onPeek} tabIndex={-1}>
        {inner}
      </button>
    );
  }

  const className = "group block";

  return p.external ? (
    <a href={p.href} target="_blank" rel="noreferrer" className={className}>
      {inner}
    </a>
  ) : (
    <Link href={p.href} className={className}>
      {inner}
    </Link>
  );
}

export function HorizontalWork() {
  const n = projects.length;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useRef(false);
  const skipClick = useRef(false);
  const drag = useRef<{
    id: number;
    x: number;
    y: number;
    dx: number;
    dy: number;
    dragging: boolean;
  } | null>(null);

  const go = useCallback(
    (dir: number) => {
      setIndex((i) => wrap(i + dir, n));
    },
    [n],
  );

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        inView.current = entry.isIntersecting;
      },
      { threshold: 0.28 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
      const t = e.target as HTMLElement | null;
      if (t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable)) {
        return;
      }
      const focused = Boolean(sectionRef.current?.contains(document.activeElement));
      if (!inView.current && !focused) return;
      e.preventDefault();
      go(e.key === "ArrowRight" ? 1 : -1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  useEffect(() => {
    if (paused || reduceMotion) return;
    const id = window.setInterval(() => {
      if (!inView.current) return;
      go(1);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [paused, reduceMotion, go, index]);

  const pause = () => setPaused(true);
  const resumeIfIdle = () => {
    const el = sectionRef.current;
    if (!el) return;
    if (el.matches(":hover")) return;
    const active = document.activeElement;
    if (active instanceof HTMLElement && el.contains(active) && active.closest("button")) {
      return;
    }
    setPaused(false);
  };

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.button !== 0) return;
    drag.current = { id: e.pointerId, x: e.clientX, y: e.clientY, dx: 0, dy: 0, dragging: false };
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const d = drag.current;
    if (!d || d.id !== e.pointerId) return;
    d.dx = e.clientX - d.x;
    d.dy = e.clientY - d.y;
    const horizontal = Math.abs(d.dx) > 16 && Math.abs(d.dx) > Math.abs(d.dy) * 1.2;
    if (!d.dragging && horizontal) {
      d.dragging = true;
      e.currentTarget.setPointerCapture(e.pointerId);
    }
  };

  const endPointer = (e: React.PointerEvent<HTMLDivElement>) => {
    const d = drag.current;
    if (!d || d.id !== e.pointerId) return;
    if (d.dragging && Math.abs(d.dx) > 40) {
      skipClick.current = true;
      go(d.dx < 0 ? 1 : -1);
    }
    drag.current = null;
  };

  const onClickCapture = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!skipClick.current) return;
    e.preventDefault();
    e.stopPropagation();
    skipClick.current = false;
  };

  return (
    <section
      id="work"
      ref={sectionRef}
      tabIndex={0}
      aria-roledescription="carousel"
      aria-label="Selected work"
      className="bg-[#050506] outline-none"
      onPointerEnter={pause}
      onPointerLeave={resumeIfIdle}
      onFocusCapture={pause}
      onBlurCapture={() => {
        requestAnimationFrame(resumeIfIdle);
      }}
    >
      <div className="px-5 pt-24 md:px-8 md:pt-32">
        <p className="text-[12px] tracking-[0.32em] text-white/45">SELECTED WORK</p>
        <h2 className="mt-3 text-[clamp(2rem,5vw,4.2rem)] font-medium tracking-[-0.04em] text-white">
          Built by hand.
        </h2>
      </div>

      <div
        className="relative touch-pan-y overflow-hidden py-12"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endPointer}
        onPointerCancel={endPointer}
        onClickCapture={onClickCapture}
      >
        <div className="relative mx-auto h-[calc(52vh+9.5rem)] w-[min(88vw,720px)] md:h-[calc(62vh+10rem)] md:w-[58vw]">
          {projects.map((p, i) => {
            const d = signedDelta(i, index, n);
            const abs = Math.abs(d);
            const scale = abs === 0 ? 1 : abs === 1 ? 0.86 : 0.74;
            const opacity = abs === 0 ? 1 : abs === 1 ? 0.38 : abs === 2 ? 0.12 : 0;
            const featured = d === 0;

            return (
              <div
                key={p.slug}
                className="absolute left-1/2 top-0 will-change-transform motion-reduce:transition-none"
                style={{
                  transform: `translateX(-50%) translateX(calc(${d} * (100% + 2.5rem))) scale(${scale})`,
                  opacity,
                  zIndex: 20 - abs,
                  pointerEvents: abs > 1 ? "none" : "auto",
                  transition:
                    "transform 520ms cubic-bezier(0.22, 1, 0.36, 1), opacity 520ms ease",
                }}
                aria-hidden={!featured}
              >
                <WorkCard p={p} onPeek={featured ? undefined : () => setIndex(i)} />
              </div>
            );
          })}
        </div>

        <button
          type="button"
          className={`${navBtn} left-4 top-[calc(3rem+26vh)] md:left-8 md:top-[calc(3rem+31vh)]`}
          aria-label="Previous"
          onClick={() => go(-1)}
          onPointerDown={(e) => e.stopPropagation()}
        >
          <Chevron dir="prev" />
        </button>
        <button
          type="button"
          className={`${navBtn} right-4 top-[calc(3rem+26vh)] md:right-8 md:top-[calc(3rem+31vh)]`}
          aria-label="Next"
          onClick={() => go(1)}
          onPointerDown={(e) => e.stopPropagation()}
        >
          <Chevron dir="next" />
        </button>
      </div>
    </section>
  );
}
