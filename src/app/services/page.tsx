import { Metadata } from 'next'  
import ServicesPage from "../components/main/pages/Services";  
import services from '@/data/services';

export const metadata: Metadata = {  
  metadataBase: new URL('https://www.kstechnologie.com'),  
  title: {  
    default: 'Professional Services | KS Technologie | Services Professionnels',  
    template: '%s | KS Technologie'  
  },  
  description: `${services.hero.title.en}. ${services.mainSection.description.en} | ${services.hero.title.fr}. ${services.mainSection.description.fr}`,  
  openGraph: {  
    title: 'Professional Services | Services Professionnels - KS Technologie',  
    description: `${services.hero.title.en}. ${services.mainSection.description.en} | ${services.hero.title.fr}. ${services.mainSection.description.fr}`,  
    url: 'https://www.kstechnologie.com/services',  
    siteName: 'KS Technologie',  
    images: [  
      {  
        url: '/screens/service.png',  
        width: 1200,  
        height: 630,  
        alt: `${services.meta.imageAlt.en} | ${services.meta.imageAlt.fr}`,  
      }  
    ],  
    locale: 'en_CA',  
    alternateLocale: 'fr_CA',  
    type: 'website',  
  },  
  alternates: {  
    canonical: 'https://www.kstechnologie.com/services',  
  },  
  robots: {  
    index: true,  
    follow: true,  
  },  
  twitter: {  
    card: 'summary_large_image',  
    title: 'Professional Services | Services Professionnels - KS Technologie',  
    description: `${services.hero.title.en}. ${services.mainSection.description.en} | ${services.hero.title.fr}`,  
    images: ['/screens/service.png'],  
  }  
}  

export default function Services() {  
  return (  
    <>  
      <script  
        type="application/ld+json"  
        dangerouslySetInnerHTML={{  
          __html: JSON.stringify({  
            "@context": "https://schema.org",  
            "@type": "Service",  
            "provider": {  
              "@type": "Organization",  
              "name": "KS Technologie",  
              "url": "https://www.kstechnologie.com"  
            },  
            "name": [  
              {  
                "@language": "en",  
                "@value": services.hero.title.en  
              },  
              {  
                "@language": "fr",  
                "@value": services.hero.title.fr  
              }  
            ],  
            "description": [  
              {  
                "@language": "en",  
                "@value": services.mainSection.description.en  
              },  
              {  
                "@language": "fr",  
                "@value": services.mainSection.description.fr  
              }  
            ],  
            "serviceType": services.mainSection.servicesList.map(service => ({  
              "@type": "Service",  
              "name": [  
                {  
                  "@language": "en",  
                  "@value": service.en  
                },  
                {  
                  "@language": "fr",  
                  "@value": service.fr  
                }  
              ]  
            })),  
            "areaServed": {  
              "@type": "State",  
              "name": "Quebec"  
            },  
            "image": services.meta.imageUrl  
          })  
        }}  
      />  
      <ServicesPage />  
    </>  
  );  
}  