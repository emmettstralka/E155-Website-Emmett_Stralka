import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = { title: "Invisible Drumset" };

const figures = [
  { src: "/media/drum-schematic.png", alt: "System schematic", cap: "System schematic" },
  { src: "/media/drum-fpga.png", alt: "FPGA top module diagram", cap: "FPGA top module" },
  { src: "/media/drum-speaker.png", alt: "Prototype with integrated speaker", cap: "Speaker output assembly" },
  { src: "/media/drum-user.jpg", alt: "User testing the invisible drumset", cap: "User testing" },
  { src: "/images/imu-modules.png", alt: "Studio still of IMU modules", cap: "Sensing modules" },
];

export default function DrumsetPage() {
  return (
    <article className="pb-28">
      <header className="px-5 pt-28 md:px-8 md:pt-36">
        <div className="mx-auto max-w-[1400px]">
          <p className="text-[12px] tracking-[0.32em] text-white/45">E155 FINAL PROJECT</p>
          <h1 className="mt-4 max-w-4xl text-[clamp(2.6rem,7vw,6.2rem)] font-medium leading-[0.9] tracking-[-0.045em]">
            Invisible Drumset
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70">
            Air gestures become drum hits. Each stick is an independent embedded system — BNO085,
            ESP32, FPGA, STM32 — electrically isolated, low latency, eight voices through a DAC.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 text-sm text-white/55">
            <span>IMU · I²C / SHTP</span>
            <span>SPI packets</span>
            <span>SystemVerilog</span>
            <span>STM32 DAC</span>
          </div>
        </div>
      </header>

      <div className="mx-auto mt-16 max-w-[1100px] px-5 md:px-8">
        <figure>
          <div className="relative aspect-[16/10] overflow-hidden rounded-[1.6rem] bg-black">
            <Image
              src="/media/drum-proto.png"
              alt="Final dual-stick Invisible Drumset prototype"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 70vw, 100vw"
              priority
            />
          </div>
          <figcaption className="mt-3 text-sm text-white/45">Dual-stick embedded prototype</figcaption>
        </figure>
      </div>

      <div className="mx-auto mt-10 max-w-[900px] px-5 md:px-8">
        <div className="overflow-hidden rounded-[1.6rem] bg-black">
          <div className="relative mx-auto aspect-[9/16] max-w-[420px]">
            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube.com/embed/2Wba6CUQpDM?rel=0"
              title="Invisible Drumset demonstration"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>

      <section className="mx-auto mt-24 max-w-[860px] px-5 md:px-8">
        <h2 className="text-3xl tracking-[-0.03em]">Architecture</h2>
        <p className="mt-5 leading-relaxed text-white/65">
          The original Invisible Drum Set ran on an Arduino Nano and BNO055. This rebuild moves the
          pipeline onto E155 hardware: STM32 and UPduino FPGA, with an ESP32 handling sensor fusion
          through the Adafruit BNO08x library after a pure-FPGA SHTP implementation proved unreliable.
        </p>
        <p className="mt-4 leading-relaxed text-white/65">
          IMU data travels I²C to the ESP32, SPI to the FPGA for packaging, then SPI again to the
          MCU. Gesture logic uses yaw zones, pitch thresholds, and gyro spikes to fire sounds 0–7:
          snare, hi-hat, kick, toms, crash, ride.
        </p>
        <h3 className="mt-12 text-xl">Packet</h3>
        <ul className="mt-4 space-y-2 font-mono text-sm text-white/55">
          <li>Byte 0 — header 0xAA</li>
          <li>Bytes 1–6 — roll, pitch, yaw (int16, ×100)</li>
          <li>Bytes 7–12 — gyro X/Y/Z (int16, ×2000)</li>
          <li>Byte 13 — validity flags</li>
          <li>Bytes 14–15 — reserved</li>
        </ul>
        <p className="mt-10">
          <a
            className="text-white underline decoration-white/25 underline-offset-4"
            href="https://github.com/emmettstralka/E155_Final_SPI_Test"
            target="_blank"
            rel="noreferrer"
          >
            Source on GitHub
          </a>
        </p>
      </section>

      <section className="mx-auto mt-20 grid max-w-[1400px] gap-6 px-5 md:grid-cols-2 md:px-8">
        {figures.map((f) => (
          <figure key={f.src}>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.4rem]">
              <Image src={f.src} alt={f.alt} fill className="object-cover" sizes="(min-width: 768px) 45vw, 100vw" />
            </div>
            <figcaption className="mt-3 text-sm text-white/45">{f.cap}</figcaption>
          </figure>
        ))}
      </section>
    </article>
  );
}
