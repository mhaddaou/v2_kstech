// app/structured-cabling/page.tsx  
import { Metadata } from 'next'  
import StructuredCablingPage from "@/app/components/main/pages/StructuredCablingPage";  

export const metadata: Metadata = {  
  metadataBase: new URL('https://www.kstechnologie.com'),  
  title: 'Structured Cabling Solutions | Solutions de Câblage Structuré - KS Technologie',  
  description: 'Professional structured cabling services including network infrastructure, fiber optic installation, and certified high-speed cabling solutions. | Services professionnels de câblage structuré incluant l\'infrastructure réseau, l\'installation de fibre optique et des solutions de câblage haute vitesse certifiées.',  
  openGraph: {  
    title: 'Structured Cabling Solutions | Solutions de Câblage Structuré - KS Technologie',  
    description: 'Expert structured cabling services for professional networks | Services experts de câblage structuré pour réseaux professionnels',  
    url: 'https://www.kstechnologie.com/structured-cabling',  
    siteName: 'KS Technologie',  
    images: [  
      {  
        url: '/images/structurecabling.png',  
        width: 1200,  
        height: 630,  
        alt: 'Structured Cabling Services | Services de Câblage Structuré',  
      }  
    ],  
    locale: 'en_CA',  
    type: 'website',  
  },  
  robots: {  
    index: true,  
    follow: true,  
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
            "@type": "Service",  
            "name": "Structured Cabling Solutions",  
            "provider": {  
              "@type": "Organization",  
              "name": "KS Technologie",  
              "url": "https://www.kstechnologie.com"  
            },  
            "areaServed": "Quebec",  
            "serviceType": "Network Infrastructure",  
            "availableService": [  
              "Infrastructure Design",  
              "Ethernet Network Installation",  
              "Fiber Optic Installation",  
              "Network Cabling",  
              "Installation Testing and Certification",  
              "Category 5e, 6, 6A & 7 Cabling"  
            ]  
          })  
        }}  
      />  
      <StructuredCablingPage />  
    </>  
  );  
}  