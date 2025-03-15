// app/residential-cabling/page.tsx  
import { Metadata } from 'next'  
import ResidentialCablingPage from "@/app/components/main/pages/ResidentialCablingPage";  

export const metadata: Metadata = {  
  metadataBase: new URL('https://www.kstechnologie.com'),  
  title: 'Residential Cabling Services | Services de Câblage Résidentiel - KS Technologie',  
  description: 'Expert residential cabling services for computer networks, home automation, telephony, and security cameras. RBQ standards compliant. | Services experts de câblage résidentiel pour réseaux informatiques, domotique, téléphonie et caméras de sécurité. Conforme aux normes RBQ.',  
  openGraph: {  
    title: 'Residential Cabling Services | Services de Câblage Résidentiel - KS Technologie',  
    description: 'Complete residential cabling solutions | Solutions complètes de câblage résidentiel',  
    url: 'https://www.kstechnologie.com/residential-cabling',  
    siteName: 'KS Technologie',  
    images: [  
      {  
        url: '/images/cablingHome.png',  
        width: 1200,  
        height: 630,  
        alt: 'Residential Cabling Services | Services de Câblage Résidentiel',  
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
            "name": "Residential Cabling Services | Services de Câblage Résidentiel",  
            "provider": {  
              "@type": "Organization",  
              "name": "KS Technologie",  
              "url": "https://www.kstechnologie.com"  
            },  
            "areaServed": "Quebec",  
            "serviceType": "Residential Network Infrastructure",  
            "availableService": [  
              "Computer Network Cabling | Câblage Informatique",  
              "Telephone Cabling | Câblage Téléphonique",  
              "Home Automation Cabling | Câblage Domotique",  
              "Alarm System Cabling | Câblage alarme",  
              "Network Equipment Installation | Installation d'Equipements Réseau",  
              "Maintenance and Repair | Entretien et Reparation"  
            ]  
          })  
        }}  
      />  
      <ResidentialCablingPage />  
    </>  
  );  
}  