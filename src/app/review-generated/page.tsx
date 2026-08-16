import fs from "fs";
import path from "path";

export const dynamic = "force-dynamic";
export const metadata = { title: "Generated stills review" };

type Still = {
  name: string;
  url: string;
  src: string;
  mtime: string;
};

function still(dir: "images" | "creative", name: string): Still | null {
  const file = path.join(process.cwd(), "public", dir, name);
  if (!fs.existsSync(file)) return null;
  const mtimeMs = fs.statSync(file).mtimeMs;
  const url = `/${dir}/${name}`;
  return {
    name,
    url,
    src: `${url}?v=${Math.floor(mtimeMs)}`,
    mtime: new Date(mtimeMs).toLocaleString(),
  };
}

function group(dir: "images" | "creative", names: string[]) {
  return names.map((name) => still(dir, name)).filter((s): s is Still => Boolean(s));
}

const workNames = [
  "trilobio-pipette.png",
  "trilobio-pipette-original.png",
  "robot80-auv.png",
  "ros2-manipulator.png",
  "ford-cabin.png",
  "teampulse-watch.png",
  "ford-fleet-routing.png",
  "ford-fleet-routing-alt.png",
];

const creativeNames = [
  "img-1811-clean.png",
  "img-9938-clean.png",
  "img-9844-clean.png",
  "img-9832-clean.png",
  "img-9987-clean.png",
  "img-9831-clean.png",
  "img-1616-clean.png",
  "img-9022-clean.png",
  "img-0342-clean.jpg",
  "img-0342-sketch.png",
  "brry-sketch-studio.png",
];

function Grid({ title, items }: { title: string; items: Still[] }) {
  return (
    <section className="mt-14">
      <h2 className="text-[12px] tracking-[0.32em] text-white/45">{title}</h2>
      <div className="mt-6 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <figure key={item.url} className="overflow-hidden rounded-[1.2rem] bg-white/5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.src}
              alt={item.name}
              className="block h-auto w-full bg-black object-contain"
            />
            <figcaption className="space-y-1 px-4 py-3 text-[13px] leading-snug">
              <p className="font-medium text-white">{item.name}</p>
              <p className="break-all font-mono text-[12px] text-white/55">{item.url}</p>
              <p className="text-[11px] text-white/35">{item.mtime}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export default function ReviewGeneratedPage() {
  const work = group("images", workNames);
  const creative = group("creative", creativeNames);

  return (
    <div className="min-h-screen bg-[#050506] px-5 pb-28 pt-28 md:px-8 md:pt-36">
      <p className="text-[12px] tracking-[0.32em] text-white/45">REVIEW</p>
      <h1 className="mt-4 max-w-3xl text-[clamp(2rem,5vw,3.4rem)] font-medium leading-[1.05] tracking-[-0.04em]">
        Generated / candidate stills on disk
      </h1>
      <p className="mt-4 max-w-2xl text-white/55">
        Raw public files with cache-busting query params — not next/image. E80 still
        may be in flight; <code className="text-white/75">robot80-auv.png</code> is the
        current work file.
      </p>
      <Grid title="Work stills" items={work} />
      <Grid title="Creative stills" items={creative} />
    </div>
  );
}
