"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const VIDEO_SRC = "/video/robotic-arm.mp4";

function bufferedProgress(el: HTMLVideoElement) {
  if (!el.duration || Number.isNaN(el.duration)) return 0;
  if (!el.buffered.length) return el.readyState >= 4 ? 1 : 0;
  return Math.min(1, el.buffered.end(el.buffered.length - 1) / el.duration);
}

function RoboticArm() {
  return (
    <svg
      className="loader-arm"
      viewBox="0 0 200 200"
      fill="none"
      aria-hidden
    >
      <defs>
        <linearGradient id="loader-metal" x1="36" y1="24" x2="164" y2="176" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#a8c5d4" />
        </linearGradient>
      </defs>

      <path d="M38 186h124" stroke="rgba(255,255,255,0.14)" strokeWidth="1" />
      <rect
        x="74"
        y="174"
        width="52"
        height="12"
        rx="1.5"
        stroke="url(#loader-metal)"
        strokeWidth="1.15"
      />
      <circle cx="82" cy="180" r="1.15" fill="#f5f5f7" opacity="0.45" />
      <circle cx="118" cy="180" r="1.15" fill="#f5f5f7" opacity="0.45" />
      <path d="M88 174v-12h24v12" stroke="url(#loader-metal)" strokeWidth="1.15" />
      <rect x="92" y="154" width="16" height="10" rx="1" stroke="rgba(255,255,255,0.38)" strokeWidth="1" />

      <g transform="translate(100 156)">
        <circle r="11" stroke="url(#loader-metal)" strokeWidth="1.35" />
        <circle className="loader-joint" r="3.2" stroke="rgba(255,255,255,0.45)" strokeWidth="1" />

        <g>
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="-10; 18; 4; -10"
            keyTimes="0; 0.4; 0.72; 1"
            dur="2.7s"
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.4 0 0.2 1; 0.4 0 0.2 1; 0.4 0 0.2 1"
          />

          <path d="M6 6 20 16" stroke="rgba(255,255,255,0.32)" strokeWidth="1.1" strokeLinecap="round" />
          <rect
            x="16"
            y="12"
            width="11"
            height="7"
            rx="1"
            transform="rotate(32 16 12)"
            stroke="rgba(255,255,255,0.4)"
            strokeWidth="1"
          />

          <path
            d="M-3 -7 -20 -56"
            stroke="url(#loader-metal)"
            strokeWidth="2.15"
            strokeLinecap="round"
          />
          <path
            d="M5 -5 -12 -54"
            stroke="rgba(255,255,255,0.28)"
            strokeWidth="1.05"
            strokeLinecap="round"
          />
          <path d="M-6 -20 2 -18" stroke="rgba(255,255,255,0.28)" strokeWidth="1" />
          <path d="M-12 -36 -4 -34" stroke="rgba(255,255,255,0.28)" strokeWidth="1" />
          <path d="M-18 -50 -10 -48" stroke="rgba(255,255,255,0.28)" strokeWidth="1" />

          <g transform="translate(-18 -56)">
            <g>
              <animateTransform
                attributeName="transform"
                type="rotate"
                values="16; -22; 2; 16"
                keyTimes="0; 0.46; 0.76; 1"
                dur="2.7s"
                repeatCount="indefinite"
                calcMode="spline"
                keySplines="0.4 0 0.2 1; 0.4 0 0.2 1; 0.4 0 0.2 1"
              />
              <circle r="7.2" stroke="url(#loader-metal)" strokeWidth="1.25" />
              <circle className="loader-joint" r="2.2" stroke="rgba(255,255,255,0.42)" strokeWidth="1" />

              <path
                d="M5 -2 52 -16"
                stroke="url(#loader-metal)"
                strokeWidth="1.85"
                strokeLinecap="round"
              />
              <path
                d="M6 5 53 -9"
                stroke="rgba(255,255,255,0.26)"
                strokeWidth="1"
                strokeLinecap="round"
              />
              <path d="M20 -4 22 3" stroke="rgba(255,255,255,0.28)" strokeWidth="1" />
              <path d="M36 -10 38 -3" stroke="rgba(255,255,255,0.28)" strokeWidth="1" />

              <g transform="translate(53 -14)">
                <g>
                  <animateTransform
                    attributeName="transform"
                    type="rotate"
                    values="-18; 20; -6; -18"
                    keyTimes="0; 0.38; 0.7; 1"
                    dur="2.7s"
                    repeatCount="indefinite"
                    calcMode="spline"
                    keySplines="0.4 0 0.2 1; 0.4 0 0.2 1; 0.4 0 0.2 1"
                  />
                  <circle r="5" stroke="url(#loader-metal)" strokeWidth="1.15" />
                  <path
                    d="M3 -1 20 6"
                    stroke="url(#loader-metal)"
                    strokeWidth="1.35"
                    strokeLinecap="round"
                  />

                  <g transform="translate(20 6)">
                    <g>
                      <animateTransform
                        attributeName="transform"
                        type="rotate"
                        values="12; -16; 8; 12"
                        keyTimes="0; 0.5; 0.8; 1"
                        dur="2.7s"
                        repeatCount="indefinite"
                        calcMode="spline"
                        keySplines="0.4 0 0.2 1; 0.4 0 0.2 1; 0.4 0 0.2 1"
                      />
                      <rect
                        x="-3.5"
                        y="-4.5"
                        width="9"
                        height="9"
                        rx="1.2"
                        stroke="url(#loader-metal)"
                        strokeWidth="1.1"
                      />
                      <circle className="loader-led" cx="1" cy="0" r="1.15" fill="#a8c5d4" />

                      <g>
                        <animateTransform
                          attributeName="transform"
                          type="rotate"
                          values="10; -8; 10"
                          keyTimes="0; 0.5; 1"
                          dur="2.7s"
                          repeatCount="indefinite"
                          calcMode="spline"
                          keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
                        />
                        <path
                          d="M5.5 -2.4 15.5 -7.2 17.2 -4.6 7.2 0.2"
                          stroke="#f5f5f7"
                          strokeWidth="1.15"
                          strokeLinejoin="round"
                          strokeLinecap="round"
                        />
                      </g>
                      <g>
                        <animateTransform
                          attributeName="transform"
                          type="rotate"
                          values="-10; 8; -10"
                          keyTimes="0; 0.5; 1"
                          dur="2.7s"
                          repeatCount="indefinite"
                          calcMode="spline"
                          keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
                        />
                        <path
                          d="M5.5 2.4 15.5 7.2 17.2 4.6 7.2 -0.2"
                          stroke="#f5f5f7"
                          strokeWidth="1.15"
                          strokeLinejoin="round"
                          strokeLinecap="round"
                        />
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

export function Loader() {
  const path = usePathname();
  const [gone, setGone] = useState(false);
  const [exit, setExit] = useState(false);
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const home = path === "/";
    const seen = sessionStorage.getItem("es-intro-v2") === "1";
    let settled = false;
    let raf = 0;

    document.documentElement.classList.add("is-loading");

    const finish = () => {
      if (settled) return;
      settled = true;
      cancelAnimationFrame(raf);
      sessionStorage.setItem("es-intro-v2", "1");
      setPct(100);
      window.setTimeout(() => setExit(true), reduced ? 0 : 240);
      window.setTimeout(() => {
        document.documentElement.classList.remove("is-loading");
        window.dispatchEvent(new Event("es:ready"));
        setGone(true);
      }, reduced ? 40 : 1080);
    };

    if (reduced || !home || seen) {
      setPct(100);
      const t = window.setTimeout(finish, reduced ? 0 : 480);
      return () => window.clearTimeout(t);
    }

    const probe = document.createElement("video");
    probe.muted = true;
    probe.playsInline = true;
    probe.preload = "auto";
    probe.src = VIDEO_SRC;

    const t0 = performance.now();

    const tick = () => {
      const live = document.querySelector<HTMLVideoElement>("#hero-video") ?? probe;
      const loaded = Math.max(bufferedProgress(live), live.readyState >= 3 ? 0.88 : 0);
      const floor = Math.min(0.9, (performance.now() - t0) / 2200);
      setPct(Math.round(Math.max(loaded, floor) * 100));
      if (!settled) raf = requestAnimationFrame(tick);
    };

    const ready = () => {
      const wait = Math.max(0, 1200 - (performance.now() - t0));
      window.setTimeout(finish, wait);
    };

    probe.addEventListener("canplaythrough", ready, { once: true });
    probe.addEventListener("error", ready, { once: true });
    void probe.load();
    raf = requestAnimationFrame(tick);
    const failsafe = window.setTimeout(ready, 6500);

    return () => {
      window.clearTimeout(failsafe);
      cancelAnimationFrame(raf);
      probe.remove();
    };
  }, [path]);

  if (gone) return null;

  return (
    <div className={`loader-root ${exit ? "is-exit" : ""}`} aria-hidden role="presentation">
      <div className="loader-veil" />
      <div className="loader-stage">
        <RoboticArm />
      </div>
      <div className="loader-meter">
        <span className="loader-count">{String(pct).padStart(3, "0")}</span>
        <div className="loader-track">
          <div className="loader-fill" style={{ transform: `scaleX(${pct / 100})` }} />
        </div>
      </div>
    </div>
  );
}
