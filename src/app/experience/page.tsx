import type { Metadata } from "next";
import Image from "next/image";
import { experience } from "@/lib/content";

export const metadata: Metadata = { title: "Experience" };

export default function ExperiencePage() {
  return (
    <div>
      <section className="relative h-[78svh] min-h-[420px] overflow-hidden bg-black">
        <video
          className="video-bleed"
          src="/video/robotic-arm.mp4"
          poster="/images/robotic-arm-poster.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30" />
        <div className="relative z-10 flex h-full flex-col justify-end px-5 pb-16 md:px-8">
          <p className="text-[12px] tracking-[0.32em] text-white/60">EXPERIENCE</p>
          <h1 className="mt-4 max-w-4xl text-[clamp(2.4rem,6vw,5.5rem)] font-medium leading-[0.94] tracking-[-0.04em]">
            From the line to the fleet.
          </h1>
        </div>
      </section>

      <div className="mx-auto max-w-[980px] px-5 py-24 md:px-8">
        {experience.map((job) => (
          <article key={`${job.company}-${job.role}`} className="border-t border-white/10 py-14">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h2 className="text-3xl tracking-[-0.03em]">{job.company}</h2>
              <p className="text-sm text-white/50">
                {job.dates} · {job.location}
              </p>
            </div>
            <p className="mt-2 text-lg text-white/70">{job.role}</p>
            <p className="mt-5 max-w-2xl text-white/65">{job.summary}</p>
            <ul className="mt-6 space-y-3 text-[15px] leading-relaxed text-white/55">
              {job.points.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
          </article>
        ))}
        <div className="relative mt-8 h-64 overflow-hidden rounded-[1.6rem]">
          <Image src="/images/controls-lab.png" alt="Manufacturing controls still" fill className="object-cover" />
        </div>
      </div>
    </div>
  );
}
