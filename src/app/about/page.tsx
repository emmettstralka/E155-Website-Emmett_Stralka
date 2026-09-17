import type { Metadata } from "next";
import { SiteImage as Image } from "@/components/site-image";
import { coursework, person } from "@/lib/content";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <div className="px-5 pb-28 pt-28 md:px-8 md:pt-36">
      <div className="mx-auto grid max-w-[1400px] gap-16 md:grid-cols-[1.1fr_0.9fr] md:items-start">
        <div>
          <p className="text-[12px] tracking-[0.32em] text-white/45">ABOUT</p>
          <h1 className="mt-4 text-[clamp(2.6rem,6vw,5.2rem)] font-medium leading-[0.94] tracking-[-0.04em]">
            Engineering with an economics edge.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/70">
            I am pursuing an MS in Computer Science (AI & Robotics) at Georgia Tech, with an
            Engineering major and Economics minor at Harvey Mudd College, and design process work
            at Carnegie Mellon University. My work sits at the intersection of embedded systems,
            digital design, and data-driven product strategy — systems that are technically
            rigorous and useful in the world.
          </p>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/70">
            Right now: soft-goods polishing and manufacturing controls. Before that: vehicle
            intelligence and energy models at Ford, and high-resolution sensing at Trilobio.
          </p>
          <div className="mt-12 space-y-6">
            <h2 className="text-sm tracking-[0.22em] text-white/45">EDUCATION</h2>
            <div>
              <p className="text-2xl tracking-[-0.03em] text-white/60">{person.graduateSchool}</p>
              <p className="mt-1 text-base text-white/45">{person.graduateDegree}</p>
            </div>
            <div>
              <p className="text-2xl tracking-[-0.03em] text-white/60">{person.school}</p>
              <p className="mt-1 text-base text-white/45">{person.degree}</p>
            </div>
            <div>
              <p className="text-2xl tracking-[-0.03em] text-white/60">{person.designSchool}</p>
              <p className="mt-1 text-base text-white/45">{person.designProgram}</p>
            </div>
          </div>
          <div className="mt-12">
            <h2 className="text-sm tracking-[0.22em] text-white/45">COURSEWORK</h2>
            <ul className="mt-6 space-y-4">
              {coursework.map((c) => (
                <li key={c.name}>
                  <p className="text-white">{c.name}</p>
                  <p className="text-sm text-white/50">{c.desc}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-12 flex flex-wrap gap-4 text-sm">
            <a className="rounded-full bg-white px-5 py-2.5 font-medium text-[#050506]" href={`mailto:${person.email}`}>
              Email
            </a>
            <a className="rounded-full border border-white/20 px-5 py-2.5" href={person.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="rounded-full border border-white/20 px-5 py-2.5" href={person.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="rounded-full border border-white/20 px-5 py-2.5" href={person.resume} target="_blank" rel="noreferrer">
              Resume
            </a>
          </div>
        </div>
        <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem]">
          <Image
            src="/images/headshot.jpg"
            alt="Emmett Stralka"
            fill
            className="object-cover object-[50%_18%]"
            sizes="(min-width: 768px) 40vw, 100vw"
            priority
          />
        </div>
      </div>
    </div>
  );
}
