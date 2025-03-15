// app/hybrid-telephony/page.tsx  
import { Metadata } from 'next'  
import HybridePage from "@/app/components/main/pages/HybridePage";  
import hybridPhone from "@/data/hybride";  

export const metadata: Metadata = {  
  metadataBase: new URL('https://www.kstechnologie.com'),  
  title: {  
    default: `${hybridPhone.mainSection.title.en} | ${hybridPhone.mainSection.title.fr} - KS Technologie`,  
    template: '%s | KS Technologie'  
  },  
  description: `${hybridPhone.mainSection.description[0].en} ${hybridPhone.mainSection.description[1].en} | ${hybridPhone.mainSection.description[0].fr} ${hybridPhone.mainSection.description[1].fr}`,  
  openGraph: {  
    title: `${hybridPhone.hero.title.en} | ${hybridPhone.hero.title.fr}`,  
    description: hybridPhone.mainSection.description[0].en,  
    url: 'https://www.kstechnologie.com/hybrid-telephony',  
    siteName: 'KS Technologie',  
    images: [  
      {  
        url: hybridPhone.meta.imageUrl,  
        width: 1200,  
        height: 630,  
        alt: `${hybridPhone.meta.imageAlt.en} | ${hybridPhone.meta.imageAlt.fr}`,  
      }  
    ],  
    locale: 'en_CA',  
    alternateLocale: 'fr_CA',  
    type: 'website',  
  },  
  alternates: {  
    canonical: 'https://www.kstechnologie.com/hybrid-telephony',  
  },  
  robots: {  
    index: true,  
    follow: true,  
  },  
  twitter: {  
    card: 'summary_large_image',  
    title: `${hybridPhone.hero.title.en} | ${hybridPhone.hero.title.fr}`,  
    description: hybridPhone.mainSection.description[0].en,  
    images: ['/screens/tele1.png'],  
  }  
}  

export default function Page() {  
  return (  
    <>  
      <script  
        type="application/ld+json"  
        dangerouslySetInnerHTML={{  
          __html: JSON.stringify({  
            "@context": "https://schema.org",  
            "@type": "Product",  
            "name": [  
              {  
                "@language": "en",  
                "@value": hybridPhone.mainSection.title.en  
              },  
              {  
                "@language": "fr",  
                "@value": hybridPhone.mainSection.title.fr  
              }  
            ],  
            "description": [  
              {  
                "@language": "en",  
                "@value": `${hybridPhone.mainSection.description[0].en} ${hybridPhone.mainSection.description[1].en}`  
              },  
              {  
                "@language": "fr",  
                "@value": `${hybridPhone.mainSection.description[0].fr} ${hybridPhone.mainSection.description[1].fr}`  
              }  
            ],  
            "image": hybridPhone.meta.imageUrl,  
            "brand": {  
              "@type": "Organization",  
              "name": "KS Technologie"  
            },  
            "offers": {  
              "@type": "AggregateOffer",  
              "offerCount": hybridPhone.mainSection.products.list.length,  
              "itemOffered": hybridPhone.mainSection.products.list.map(product => ({  
                "@type": "Product",  
                "name": product.name,  
                "url": product.link || null  
              }))  
            },  
            "hasOfferCatalog": {  
              "@type": "OfferCatalog",  
              "name": "Traditional Telephony Services",  
              "itemListElement": [  
                {  
                  "@type": "Offer",  
                  "itemOffered": {  
                    "@type": "Service",  
                    "name": "Installation",  
                    "areaServed": "Quebec"  
                  }  
                },  
                {  
                  "@type": "Offer",  
                  "itemOffered": {  
                    "@type": "Service",  
                    "name": "Configuration"  
                  }  
                },  
                {  
                  "@type": "Offer",  
                  "itemOffered": {  
                    "@type": "Service",  
                    "name": "Maintenance"  
                  }  
                },  
                {  
                  "@type": "Offer",  
                  "itemOffered": {  
                    "@type": "Service",  
                    "name": "Repair"  
                  }  
                }  
              ]  
            }  
          })  
        }}  
      />  
      <HybridePage />  
    </>  
  );  
}  