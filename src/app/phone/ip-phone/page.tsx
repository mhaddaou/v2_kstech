// app/ip-telephony/page.tsx  
import { Metadata } from 'next'  
import PhoneIpPage from "@/app/components/main/pages/PhoneIpPage";  
import ipPhone from "@/data/ipPhone";  

export const metadata: Metadata = {  
  metadataBase: new URL('https://www.kstechnologie.com'),  
  title: {  
    default: `${ipPhone.mainSection.title.en} | ${ipPhone.mainSection.title.fr} - KS Technologie`,  
    template: '%s | KS Technologie'  
  },  
  description: `${ipPhone.mainSection.description[0].en} | ${ipPhone.mainSection.description[0].fr}`,  
  openGraph: {  
    title: `${ipPhone.hero.title.en} | ${ipPhone.hero.title.fr}`,  
    description: `${ipPhone.mainSection.description[0].en} | ${ipPhone.mainSection.description[0].fr}`,  
    url: 'https://www.kstechnologie.com/ip-telephony',  
    siteName: 'KS Technologie',  
    images: [  
      {  
        url: ipPhone.meta.imageUrl,  
        width: 1200,  
        height: 630,  
        alt: `${ipPhone.meta.imageAlt.en} | ${ipPhone.meta.imageAlt.fr}`,  
      }  
    ],  
    locale: 'en_CA',  
    alternateLocale: 'fr_CA',  
    type: 'website',  
  },  
  alternates: {  
    canonical: 'https://www.kstechnologie.com/ip-telephony',  
  },  
  robots: {  
    index: true,  
    follow: true,  
  },  
  twitter: {  
    card: 'summary_large_image',  
    title: `${ipPhone.hero.title.en} | ${ipPhone.hero.title.fr}`,  
    description: `${ipPhone.mainSection.description[0].en} | ${ipPhone.mainSection.description[0].fr}`,  
    images: ['/screens/tele2.png'],  
  }  
}  

export default function Page() {  
  return <PhoneIpPage />;  
}  