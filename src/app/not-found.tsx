import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[80svh] flex-col items-center justify-center px-6 text-center">
      <p className="text-[12px] tracking-[0.32em] text-white/45">404</p>
      <h1 className="mt-4 text-5xl tracking-[-0.04em]">This page is out of range.</h1>
      <Link href="/" className="mt-10 rounded-full border border-white/20 px-6 py-3 text-sm">
        Return home
      </Link>
    </div>
  );
}
