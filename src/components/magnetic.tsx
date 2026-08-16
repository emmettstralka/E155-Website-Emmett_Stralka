"use client";

import { useRef, type ReactNode, type HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
};

export function MagneticLink({ href, children, className = "", ...rest }: Props) {
  const ref = useRef<HTMLAnchorElement>(null);

  return (
    <a
      ref={ref}
      href={href}
      className={className}
      onMouseMove={(e) => {
        const el = ref.current;
        if (!el || window.matchMedia("(pointer: coarse)").matches) return;
        const r = el.getBoundingClientRect();
        const x = e.clientX - r.left - r.width / 2;
        const y = e.clientY - r.top - r.height / 2;
        el.style.transform = `translate(${x * 0.18}px, ${y * 0.18}px)`;
      }}
      onMouseLeave={() => {
        const el = ref.current;
        if (!el) return;
        el.style.transform = "translate(0, 0)";
      }}
      {...rest}
    >
      {children}
    </a>
  );
}
