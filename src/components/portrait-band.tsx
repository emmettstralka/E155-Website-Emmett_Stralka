import { SiteImage as Image } from "@/components/site-image";
import { person } from "@/lib/content";

export function PortraitBand() {
  return (
    <section className="border-t border-white/10 bg-[#050506] px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto grid max-w-[1400px] items-center gap-12 md:grid-cols-[minmax(0,0.42fr)_minmax(0,1fr)] md:gap-20">
        <div className="relative aspect-[3/4] overflow-hidden rounded-[1.8rem] md:ml-6">
          <Image
            src="/images/headshot.jpg"
            alt="Portrait of Emmett Stralka"
            fill
            className="object-cover object-[50%_18%]"
            sizes="(min-width: 768px) 32vw, 90vw"
          />
        </div>
        <div className="md:pl-20">
          <p className="text-[12px] tracking-[0.32em] text-white/45">NOW</p>
          <p className="mt-6 max-w-xl text-[clamp(1.7rem,3.2vw,2.6rem)] font-medium leading-[1.15] tracking-[-0.03em] text-white">
            {person.title} at the intersection of manufacturing control, embedded intelligence, and
            product.
          </p>
          <ul className="mt-6 list-none space-y-3 p-0">
            <li>
              <p className="text-base leading-snug text-white/60">
                {person.graduateSchool}
                <span className="text-white/45"> · {person.graduateDegree}</span>
              </p>
            </li>
            <li>
              <p className="text-base leading-snug text-white/60">
                {person.school}
                <span className="text-white/45"> · {person.degree}</span>
              </p>
            </li>
            <li>
              <p className="text-base leading-snug text-white/60">
                {person.designSchool}
                <span className="text-white/45"> · {person.designProgram}</span>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
