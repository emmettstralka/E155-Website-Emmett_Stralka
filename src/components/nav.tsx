"use client";

import Link from "next/link";
import { useLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, person } from "@/lib/content";

const pill =
  "inline-flex items-center justify-center rounded-full px-4 py-1.5 text-[13px] tracking-wide transition-colors";
const pillIdle = `${pill} border border-white/30 text-white hover:border-white/70`;
const pillActive = `${pill} bg-white font-medium text-[#050506]`;

export function Nav() {
  const path = usePathname();
  const lenis = useLenis();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!lenis) {
      const onScroll = () => setScrolled(window.scrollY > 24);
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }
    setScrolled(lenis.scroll > 24);
    const onScroll = ({ scroll }: { scroll: number }) => setScrolled(scroll > 24);
    lenis.on("scroll", onScroll);
    return () => {
      lenis.off("scroll", onScroll);
    };
  }, [lenis]);

  useEffect(() => {
    if (!document.documentElement.classList.contains("is-loading")) {
      setReady(true);
      return;
    }
    const onReady = () => setReady(true);
    window.addEventListener("es:ready", onReady);
    return () => window.removeEventListener("es:ready", onReady);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [path]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background,backdrop-filter,opacity] duration-500 ${
        scrolled || open ? "bg-black/55 backdrop-blur-xl" : "bg-transparent"
      } ${ready ? "opacity-100" : "pointer-events-none opacity-0"}`}
    >
      <nav className="mx-auto flex h-14 max-w-[1400px] items-center justify-between pl-10 pr-5 md:h-16 md:pl-16 md:pr-8">
        <Link href="/" className="text-lg font-medium tracking-[0.08em] text-white md:text-xl">
          {person.name}
        </Link>
        <ul className="hidden items-center gap-2 md:flex">
          {nav.map((item) => {
            const active = path === item.href || path.startsWith(`${item.href}/`);
            return (
              <li key={item.href}>
                <Link href={item.href} className={active ? pillActive : pillIdle}>
                  {item.label}
                </Link>
              </li>
            );
          })}
          <li>
            <Link href={`mailto:${person.email}`} className={pillIdle}>
              Contact
            </Link>
          </li>
        </ul>
        <button
          type="button"
          className={`${pillIdle} md:hidden`}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>
      {open ? (
        <div className="border-t border-white/10 bg-black/90 px-5 py-6 md:hidden">
          <ul className="flex flex-col gap-3">
            {nav.map((item) => {
              const active = path === item.href || path.startsWith(`${item.href}/`);
              return (
                <li key={item.href}>
                  <Link href={item.href} className={`${active ? pillActive : pillIdle} w-full`}>
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li>
              <Link href={`mailto:${person.email}`} className={`${pillIdle} w-full`}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
