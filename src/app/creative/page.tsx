import type { Metadata } from "next";
import { SiteImage as Image } from "@/components/site-image";
import {
  creative,
  creativeWorks,
  partitionCreativeWorks,
  type CreativeProminence,
  type CreativeWork,
} from "@/lib/content";

export const metadata: Metadata = { title: "Creative" };

const MASONRY =
  "columns-1 gap-5 sm:columns-2 xl:columns-3 [column-fill:balance]";

function figureClass(prominence?: CreativeProminence) {
  if (prominence === "float") {
    return "mb-10 break-inside-avoid relative z-10 -translate-y-2 sm:-translate-y-5";
  }
  if (prominence === "large") {
    return "mb-11 break-inside-avoid";
  }
  return "mb-8 break-inside-avoid";
}

function mediaClass(prominence?: CreativeProminence) {
  if (prominence === "float") {
    return "overflow-hidden rounded-[1.6rem] bg-[#0c0c0e] shadow-[0_28px_70px_rgba(0,0,0,0.55)] ring-1 ring-white/12";
  }
  if (prominence === "large") {
    return "overflow-hidden rounded-[1.6rem] bg-[#0c0c0e] shadow-[0_20px_48px_rgba(0,0,0,0.4)] ring-1 ring-white/[0.06]";
  }
  return "overflow-hidden rounded-[1.6rem] bg-[#0c0c0e]";
}

function imageClass(prominence?: CreativeProminence) {
  if (prominence === "large") {
    return "h-auto w-full origin-top scale-[1.03]";
  }
  return "h-auto w-full";
}

function WorkFigure({ work }: { work: CreativeWork }) {
  const prominence = work.prominence;
  return (
    <figure className={figureClass(prominence)}>
      <div className={mediaClass(prominence)}>
        <Image
          src={work.src}
          alt={work.alt}
          width={work.width}
          height={work.height}
          className={imageClass(prominence)}
          sizes={
            prominence === "large"
              ? "(min-width: 1280px) 36vw, (min-width: 640px) 50vw, 100vw"
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

function MasonryBlock({ works }: { works: readonly CreativeWork[] }) {
  if (works.length === 0) return null;
  return (
    <div className={MASONRY}>
      {works.map((work) => (
        <WorkFigure key={work.src} work={work} />
      ))}
    </div>
  );
}

export default function CreativePage() {
  const { featured, gallery } = partitionCreativeWorks(creativeWorks);

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

        {/*
          Two sequential masonry blocks (no section labels): CSS columns balance
          within each block, so unnamed gallery works cannot sit at the top of
          columns 2–3 beside the named top band. Gap-filler tiles may trail the
          named featured list inside the first block to close short-column voids.
        */}
        <div className="mt-20 flex flex-col gap-5">
          <MasonryBlock works={featured} />
          <MasonryBlock works={gallery} />
        </div>
      </div>
    </div>
  );
}
