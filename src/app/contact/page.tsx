import { Metadata } from "next";
import ContactPage from "../components/main/pages/ContactPage";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kstechnologie.com"),
  title: {
    default: "Contact Us | KS Technologie | Contactez-nous",
    template: "%s | KS Technologie",
  },
  description:
    "Get in touch with KS Technologie for professional technology solutions. Contact us for structured cabling, telephony systems, and audio solutions. | Contactez KS Technologie pour des solutions technologiques professionnelles.",
  openGraph: {
    title: "Contact KS Technologie | Contactez-nous",
    description:
      "Get in touch with KS Technologie for professional technology solutions. | Contactez KS Technologie pour des solutions technologiques professionnelles.",
    url: "https://www.kstechnologie.com/contact",
    siteName: "KS Technologie",
    locale: "en_CA",
    alternateLocale: "fr_CA",
    type: "website",
  },
  alternates: {
    canonical: "https://www.kstechnologie.com/contact",
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary",
    title: "Contact KS Technologie | Contactez-nous",
    description: "Get in touch with KS Technologie | Contactez KS Technologie",
    images: ['/screens/contact.png'], 
  },
  other: {
    "og:locale:alternate": "fr_CA",
  },
};

export default function Contact() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: [
              {
                "@language": "en",
                "@value": "KS Technologie Contact",
              },
              {
                "@language": "fr",
                "@value": "Contact KS Technologie",
              },
            ],
            description: [
              {
                "@language": "en",
                "@value": "Contact page for KS Technologie",
              },
              {
                "@language": "fr",
                "@value": "Page de contact pour KS Technologie",
              },
            ],
            url: "https://www.kstechnologie.com/contact",
            provider: {
              "@type": "Organization",
              name: "KS Technologie",
              address: {
                "@type": "PostalAddress",
                streetAddress: "7190 Rue Jarry",
                addressLocality: "Anjou",
                addressRegion: "Quebec",
                postalCode: "H1J 1G5",
                addressCountry: "CA",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-438-464-2161",
                contactType: "customer service",
                email: "info@kstechnologie.com",
                availableLanguage: ["English", "French"],
              },
            },
          }),
        }}
      />
      <ContactPage />
    </>
  );
}
