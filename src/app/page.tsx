import { FocusRail } from "@/components/focus-rail";
import { Hero } from "@/components/hero";
import { HorizontalWork } from "@/components/horizontal-work";
import { PortraitBand } from "@/components/portrait-band";
import { StickyChapters } from "@/components/sticky-chapters";

export default function Home() {
  return (
    <>
      <Hero />
      <PortraitBand />
      <StickyChapters />
      <HorizontalWork />
      <FocusRail />
    </>
  );
}
