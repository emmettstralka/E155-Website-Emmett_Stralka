import type { Metadata } from "next";
import { SiteImage as Image } from "@/components/site-image";
import { labs } from "@/lib/content";

export const metadata: Metadata = { title: "E155 Labs" };

export default function LabsPage() {
  return (
    <div className="px-5 pb-28 pt-28 md:px-8 md:pt-36">
      <div className="mx-auto max-w-[1400px]">
        <p className="text-[12px] tracking-[0.32em] text-white/45">HARVEY MUDD · E155</p>
        <h1 className="mt-4 max-w-4xl text-[clamp(2.4rem,6.5vw,5.6rem)] font-medium leading-[0.92] tracking-[-0.04em]">
          Microcontrollers and FPGA design.
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/65">
          Practical digital systems: FPGAs, microcontrollers, clean RTL, part selection, and a
          capstone you choose. Hardware: Nucleo STM32L432KC and UPduino v3.1 / iCE40 UP5K.
        </p>
        <div className="relative mt-16 h-[48vh] overflow-hidden rounded-[1.8rem]">
          <Image src="/images/fpga-board.png" alt="FPGA board in studio lighting" fill className="object-cover" />
        </div>
        <ol className="mt-20 divide-y divide-white/10 border-y border-white/10">
          {labs.map((lab) => (
            <li key={lab.n} className="grid gap-3 py-10 md:grid-cols-[5rem_1fr_auto] md:items-baseline">
              <span className="font-mono text-sm text-white/40">{lab.n}</span>
              <div>
                <h2 className="text-2xl tracking-[-0.03em]">{lab.title}</h2>
                <p className="mt-2 max-w-xl text-white/55">{lab.body}</p>
              </div>
              <span className="text-sm text-white/35">Report on request</span>
            </li>
          ))}
        </ol>
        <p className="mt-12 text-sm text-white/45">
          Course resources:{" "}
          <a className="text-white/80 underline underline-offset-4" href="https://hmc-e155.github.io/resources/" target="_blank" rel="noreferrer">
            hmc-e155.github.io
          </a>
        </p>
      </div>
    </div>
  );
}
