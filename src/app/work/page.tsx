import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/content";

export const metadata: Metadata = { title: "Work" };

export default function WorkPage() {
  return (
    <div className="px-5 pb-28 pt-28 md:px-8 md:pt-36">
      <div className="mx-auto max-w-[1400px]">
        <p className="text-[12px] tracking-[0.32em] text-white/45">WORK</p>
        <h1 className="mt-4 max-w-3xl text-[clamp(2.6rem,7vw,6rem)] font-medium leading-[0.92] tracking-[-0.045em]">
          Hardware, models, and the space between.
        </h1>
        <div className="mt-20 grid gap-16 md:grid-cols-2">
          {projects.map((p) => {
            const card = (
              <article className="group">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.6rem]">
                  <Image
                    src={p.image}
                    alt={p.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="(min-width: 768px) 45vw, 100vw"
                  />
                </div>
                <p className="mt-5 text-[12px] tracking-[0.28em] text-white/45">{p.kicker}</p>
                <h2 className="mt-2 text-3xl tracking-[-0.03em]">{p.title}</h2>
                <p className="mt-3 max-w-md text-white/65">{p.description}</p>
              </article>
            );
            return p.external ? (
              <a key={p.slug} href={p.href} target="_blank" rel="noreferrer">
                {card}
              </a>
            ) : (
              <Link key={p.slug} href={p.href}>
                {card}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
