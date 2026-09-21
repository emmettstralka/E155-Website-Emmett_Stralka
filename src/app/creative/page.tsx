import type { Metadata } from "next";
import { SiteImage as Image } from "@/components/site-image";
import {
  creative,
  creativeWorksBySize,
  type CreativeSize,
  type CreativeWork,
} from "@/lib/content";

export const metadata: Metadata = { title: "Creative" };

/**
 * Sectioned gallery: Floating → Large → Gallery.
 * Each band is a CSS grid (row-major, document order). Never use CSS columns here —
 * see the ordering comment on `creativeWorks` in content.ts.
 *
 * Evenness rules: equal column tracks, shared gap, no translate offsets, shared
 * aspect boxes so row tops align. Float stays prominent via shadow only.
 */
const GAP = "gap-x-5 gap-y-10";

const BANDS: { size: CreativeSize; label: string; grid: string }[] = [
  {
    size: "float",
    label: "Floating",
    // 2 cols keeps the tensegrity set as two even rows, then Mark + Breath as a pair
    grid: `grid grid-cols-1 ${GAP} sm:grid-cols-2`,
  },
  {
    size: "large",
    label: "Large",
    grid: `grid grid-cols-1 ${GAP} sm:grid-cols-2`,
  },
  {
    size: "default",
    label: "Gallery",
    grid: `grid grid-cols-1 ${GAP} sm:grid-cols-2 xl:grid-cols-3`,
  },
];

function WorkFigure({ work }: { work: CreativeWork }) {
  const floated = work.size === "float";
  const large = work.size === "large";

  return (
    <figure className="min-w-0">
      <div
        className={
          floated
            ? "aspect-[4/5] overflow-hidden rounded-[1.6rem] bg-[#0c0c0e] shadow-[0_20px_48px_rgba(0,0,0,0.4)]"
            : large
              ? "aspect-[5/6] overflow-hidden rounded-[1.6rem] bg-[#0c0c0e]"
              : "aspect-[4/5] overflow-hidden rounded-[1.6rem] bg-[#0c0c0e]"
        }
      >
        <Image
          src={work.src}
          alt={work.alt}
          width={work.width}
          height={work.height}
          className={
            large
              ? "h-full w-full object-contain"
              : "h-full w-full object-cover"
          }
          sizes={
            large
              ? "(min-width: 640px) 45vw, 100vw"
              : "(min-width: 1280px) 30vw, (min-width: 640px) 45vw, 100vw"
          }
        />
      </div>
      <figcaption className="mt-3 px-1">
        <span className="text-[15px] tracking-[-0.02em] text-white/85">{work.caption}</span>
      </figcaption>
    </figure>
  );
}

export default function CreativePage() {
  return (
    <div className="px-5 pb-28 pt-28 md:px-8 md:pt-36">
      <div className="mx-auto max-w-[1400px]">
        <p className="text-[12px] tracking-[0.32em] text-white/45 uppercase">
          {creative.origin}
        </p>
        <h1 className="mt-4 max-w-3xl text-[clamp(2.6rem,7vw,6rem)] font-medium leading-[0.92] tracking-[-0.045em]">
          Packaging, furniture,
          <br />
          and the mill.
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70">{creative.description}</p>

        <div className="mt-20 flex flex-col gap-16">
          {BANDS.map((band) => {
            const works = creativeWorksBySize(band.size);
            if (works.length === 0) return null;
            return (
              <section key={band.size} aria-label={band.label}>
                <div className={band.grid}>
                  {works.map((work) => (
                    <WorkFigure key={work.src} work={work} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}
