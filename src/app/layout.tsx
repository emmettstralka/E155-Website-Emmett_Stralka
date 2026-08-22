import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Loader } from "@/components/loader";
import { Nav } from "@/components/nav";
import { SmoothScroll } from "@/components/smooth-scroll";
import { person } from "@/lib/content";
import { withBase } from "@/lib/paths";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const site = "https://emmettstralka.github.io/E155-Website-Emmett_Stralka";

export const metadata: Metadata = {
  metadataBase: new URL(`${site}/`),
  title: {
    default: `${person.name} — Controls, Embedded Systems, Products`,
    template: `%s — ${person.name}`,
  },
  description: person.thesis,
  authors: [{ name: person.name }],
  openGraph: {
    title: `${person.name} — Controls, Embedded Systems, Products`,
    description: person.thesis,
    images: [`${site}/images/og-es.png`],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: person.name,
    description: person.thesis,
    images: [`${site}/images/og-es.png`],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: person.name,
    email: person.email,
    url: site,
    image: `${site}/images/headshot.jpg`,
    jobTitle: "Controls Engineer",
    alumniOf: person.school,
    sameAs: [person.linkedin, person.github],
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="preload" href={withBase("/video/robotic-arm.mp4")} as="video" type="video/mp4" />
      </head>
      <body className="min-h-full bg-[#050506] font-sans text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <SmoothScroll>
          <Loader />
          <div
            className="grain"
            style={{
              backgroundImage: `url(${withBase("/images/grain-dark.png")})`,
            }}
          />
          <Nav />
          <main id="main">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
