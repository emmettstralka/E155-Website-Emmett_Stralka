import Image, { type ImageProps } from "next/image";
import { withBase } from "@/lib/paths";

/**
 * next/image does not auto-prefix local src when images.unoptimized is true.
 * Force unoptimized + quality 100 so static export never re-encodes gallery assets.
 */
export function SiteImage({ src, quality = 100, unoptimized = true, ...props }: ImageProps) {
  const resolved = typeof src === "string" ? withBase(src) : src;
  return <Image src={resolved} quality={quality} unoptimized={unoptimized} {...props} />;
}
