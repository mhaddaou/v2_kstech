// app/maintenance-repair/page.tsx  
import { Metadata } from 'next'  
import MaintenanceRepairPage from "@/app/components/main/pages/MaintenanceRepairPage";  

export const metadata: Metadata = {  
  metadataBase: new URL('https://www.kstechnologie.com'),  
  title: 'Network Maintenance & Repair Services | Services d\'Entretien et Réparation Réseau - KS Technologie',  
  description: 'Professional network maintenance and repair services including cable testing, rack organization, and network certification. | Services professionnels d\'entretien et de réparation de réseaux incluant test de câbles, organisation de rack et certification réseau.',  
  openGraph: {  
    title: 'Network Maintenance & Repair Services | Services d\'Entretien et Réparation Réseau - KS Technologie',  
    description: 'Expert network maintenance and repair services | Services experts d\'entretien et de réparation réseau',  
    url: 'https://www.kstechnologie.com/maintenance-repair',  
    siteName: 'KS Technologie',  
    images: [  
      {  
        url: '/images/cablingRepair.jpeg',  
        width: 1200,  
        height: 630,  
        alt: 'Network Maintenance & Repair Services | Services d\'Entretien et Réparation Réseau',  
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
            "name": "Network Maintenance and Repair Services",  
            "provider": {  
              "@type": "Organization",  
              "name": "KS Technologie",  
              "url": "https://www.kstechnologie.com"  
            },  
            "areaServed": "Quebec",  
            "serviceType": "Network Maintenance",  
            "availableService": [  
              "Network Cable Repair",  
              "Telephone Cable Repair",  
              "Audio Cable Repair",  
              "Rack Organization",  
              "Cable Testing",  
              "Network Certification"  
            ]  
          })  
        }}  
      />  
      <MaintenanceRepairPage />  
    </>  
  );  
}  