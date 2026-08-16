import type { Metadata } from "next";
import Image from "next/image";
import { creative, creativeWorks } from "@/lib/content";

export const metadata: Metadata = { title: "Creative" };

const pills = ["Packaging", "Furniture", "CAD", "Shop"];

export default function CreativePage() {
  return (
    <div className="px-5 pb-28 pt-28 md:px-8 md:pt-36">
      <div className="mx-auto max-w-[1400px]">
        <p className="text-[12px] tracking-[0.32em] text-white/45">
          {creative.kicker.toUpperCase()}
        </p>
        <h1 className="mt-4 max-w-3xl text-[clamp(2.6rem,7vw,6rem)] font-medium leading-[0.92] tracking-[-0.045em]">
          {creative.title}
        </h1>
        <p className="mt-5 text-[13px] tracking-[0.18em] text-white/45 uppercase">
          {creative.origin}
        </p>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70">{creative.description}</p>
        <ul className="mt-8 flex flex-wrap gap-2">
          {pills.map((label) => (
            <li
              key={label}
              className="inline-flex items-center rounded-full border border-white/30 px-4 py-1.5 text-[13px] tracking-wide text-white/80"
            >
              {label}
            </li>
          ))}
        </ul>

        <div className="mt-20 columns-1 gap-5 sm:columns-2 xl:columns-3">
          {creativeWorks.map((work) => (
            <figure key={work.src} className="mb-8 break-inside-avoid">
              <div className="overflow-hidden rounded-[1.6rem] bg-[#0c0c0e]">
                <Image
                  src={work.src}
                  alt={work.alt}
                  width={work.width}
                  height={work.height}
                  className="h-auto w-full"
                  sizes="(min-width: 1280px) 30vw, (min-width: 640px) 45vw, 100vw"
                />
              </div>
              <figcaption className="mt-3 flex items-baseline justify-between gap-3 px-1">
                <span className="text-[15px] tracking-[-0.02em] text-white/85">{work.caption}</span>
                <span className="text-[11px] tracking-[0.22em] text-white/40 uppercase">
                  {work.credit}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
}
