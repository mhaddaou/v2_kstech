// app/repair/page.tsx  
import { Metadata } from 'next'  
import phoneRepair from "@/data/phoneRepair";  
import PhoneRepairPage from '@/app/components/main/pages/PhoneRepairPage';

export const metadata: Metadata = {  
  metadataBase: new URL('https://www.kstechnologie.com'),  
  title: {  
    default: `${phoneRepair.mainSection.title.en} | ${phoneRepair.mainSection.title.fr} - KS Technologie`,  
    template: '%s | KS Technologie'  
  },  
  description: `${phoneRepair.mainSection.descriptionOne.en} ${phoneRepair.mainSection.descriptionTwo.en} | ${phoneRepair.mainSection.descriptionOne.fr} ${phoneRepair.mainSection.descriptionTwo.fr}`,  
  openGraph: {  
    title: `${phoneRepair.hero.title.en} | ${phoneRepair.hero.title.fr}`,  
    description: `${phoneRepair.mainSection.descriptionOne.en} | ${phoneRepair.mainSection.descriptionOne.fr}`,  
    url: 'https://www.kstechnologie.com/repair',  
    siteName: 'KS Technologie',  
    images: [  
      {  
        url: phoneRepair.meta.imageUrl,  
        width: 1200,  
        height: 630,  
        alt: `${phoneRepair.meta.imageAlt.en} | ${phoneRepair.meta.imageAlt.fr}`,  
      }  
    ],  
    locale: 'en_CA',  
    alternateLocale: 'fr_CA',  
    type: 'website',  
  },  
  alternates: {  
    canonical: 'https://www.kstechnologie.com/repair',  
  },  
  robots: {  
    index: true,  
    follow: true,  
  },  
  twitter: {  
    card: 'summary_large_image',  
    title: `${phoneRepair.hero.title.en} | ${phoneRepair.hero.title.fr}`,  
    description: `${phoneRepair.mainSection.descriptionOne.en} | ${phoneRepair.mainSection.descriptionOne.fr}`,  
    images: ['/screens/tele3.png'],  
  }  
}  

export default function Page() {  
  return <PhoneRepairPage />;  
}  