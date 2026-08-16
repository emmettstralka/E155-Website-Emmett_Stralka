import Link from "next/link";
import { person } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black px-5 py-16 md:px-8">
      <div className="mx-auto max-w-[1400px]">
        <p className="max-w-3xl text-[clamp(2.4rem,7vw,6.5rem)] font-medium leading-[0.92] tracking-[-0.04em] text-white">
          Let’s build the next system.
        </p>
        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-[15px] text-white/70">
          <a className="hover:text-white" href={`mailto:${person.email}`}>
            {person.email}
          </a>
          <a className="hover:text-white" href={person.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className="hover:text-white" href={person.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a className="hover:text-white" href={person.resume} target="_blank" rel="noreferrer">
            Resume
          </a>
          <Link className="hover:text-white" href="/about">
            About
          </Link>
        </div>
        <p className="mt-16 text-xs tracking-wide text-white/35">
          © {new Date().getFullYear()} {person.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
