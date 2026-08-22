import Image, { type ImageProps } from "next/image";
import { withBase } from "@/lib/paths";

/** next/image does not auto-prefix local src when images.unoptimized is true. */
export function SiteImage({ src, ...props }: ImageProps) {
  const resolved = typeof src === "string" ? withBase(src) : src;
  return <Image src={resolved} {...props} />;
}
