import AudioPage from "@/app/components/main/pages/AudioWiring";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kstechnologie.com"),
  title: {
    default: "Audio Cabling | Câblage Audio - KS Technologie",
    template: "%s | KS Technologie",
  },
  description:
    "Professional audio cabling services including paging systems, ambient music systems, amplifiers, and intercom installations. | Services professionnels de câblage audio incluant les systèmes de recherche de personne, musique d'ambiance, amplificateurs et installations d'intercom.",
  openGraph: {
    title: "Audio Cabling | Câblage Audio - KS Technologie",
    description:
      "Professional audio cabling and sound system installation services | Services professionnels de câblage audio et d'installation de systèmes sonores",
    url: "https://www.kstechnologie.com/audio-cabling",
    siteName: "KS Technologie",
    images: [
      {
        url: "/images/audio.jpeg",
        width: 1200,
        height: 630,
        alt: "Audio Cabling Services | Services de Câblage Audio",
      },
    ],
    locale: "en_CA",
    alternateLocale: "fr_CA",
    type: "website",
  },
  alternates: {
    canonical: "https://www.kstechnologie.com/audio-cabling",
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "Audio Cabling | Câblage Audio - KS Technologie",
    description:
      "Professional audio cabling and sound system installation services | Services professionnels de câblage audio et d'installation de systèmes sonores",
    images: ["/screens/cablage3.png"],
  },
};

export default function Page() {
  return <AudioPage />;
}
