// app/page.tsx  
import { Metadata } from 'next'  
import MainPage from './components/main/MainPage';

export const metadata: Metadata = {  
  metadataBase: new URL('https://www.kstechnologie.com'),  
  title: {  
    default: 'KS Technologie | Professional Technology Solutions | Solutions Technologiques Professionnelles',  
    template: '%s | KS Technologie'  
  },  
  description: 'KS Technologie offers professional technology solutions including structured cabling, telephony systems, and audio solutions. Expert service in Quebec. | KS Technologie offre des solutions technologiques professionnelles incluant le câblage structuré, les systèmes téléphoniques et les solutions audio.',  
  keywords: ['technology solutions', 'structured cabling', 'telephony systems', 'audio solutions', 'Quebec', 'KS Technologie', 'network services'],  
  openGraph: {  
    title: 'KS Technologie | Professional Technology Solutions',  
    description: 'Professional technology solutions including structured cabling, telephony systems, and audio solutions. | Solutions technologiques professionnelles incluant le câblage structuré, les systèmes téléphoniques et les solutions audio.',  
    url: 'https://www.kstechnologie.com',  
    siteName: 'KS Technologie',  
    images: [  
      {  
        url: '/backgroun/background.svg', // Update with your actual hero image path  
        width: 1200,  
        height: 630,  
        alt: 'KS Technologie - Technology Solutions | Solutions Technologiques',  
      } ,
      {  
        url: '/icons/whitelogo.png',
        width: 200, 
        height: 200,
        alt: 'KS Technologie Logo',  
      } 
    ],  
    locale: 'en_CA',  
    alternateLocale: 'fr_CA',  
    type: 'website',  
  },  
  alternates: {  
    canonical: 'https://www.kstechnologie.com',  
  },  
  robots: {  
    index: true,  
    follow: true,  
    googleBot: {  
      index: true,  
      follow: true,  
      'max-video-preview': -1,  
      'max-image-preview': 'large',  
      'max-snippet': -1,  
    },  
  },  
  twitter: {  
    card: 'summary_large_image',  
    title: 'KS Technologie | Professional Technology Solutions',  
    description: "Professional technology solutions for your business needs | Solutions technologiques professionnelles pour vos besoins d'entreprise",  
    images: ['/screens/hero.png']
  },  
  verification: {  
    google: 'your-google-verification-code', // Add your Google verification code if you have one  
  }  
}  

export default function Home() {  
  return (  
    <>  
      <script  
        type="application/ld+json"  
        dangerouslySetInnerHTML={{  
          __html: JSON.stringify({  
            "@context": "https://schema.org",  
            "@type": "Organization",  
            "name": "KS Technologie",  
            "url": "https://www.kstechnologie.com",  
            "logo": "https://www.kstechnologie.com/images/logo.png", // Update with your actual logo path  
            "description": [  
              {  
                "@language": "en",  
                "@value": "Professional technology solutions provider specializing in structured cabling, telephony systems, and audio solutions"  
              },  
              {  
                "@language": "fr",  
                "@value": "Fournisseur de solutions technologiques professionnelles spécialisé dans le câblage structuré, les systèmes téléphoniques et les solutions audio"  
              }  
            ],  
            "address": {  
              "@type": "PostalAddress",  
              "streetAddress": "7190 Rue Jarry",  
              "addressLocality": "Anjou",  
              "addressRegion": "Quebec",  
              "postalCode": "H1J 1G5",  
              "addressCountry": "CA"  
            },  
            "contactPoint": {  
              "@type": "ContactPoint",  
              "telephone": "+1-438-464-2161",  
              "contactType": "customer service",  
              "email": "info@kstechnologie.com",  
              "availableLanguage": ["English", "French"]  
            },  
            "sameAs": [  
              "https://www.linkedin.com/company/ks-technologie", // Update with your actual social media links  
              "https://www.facebook.com/KSTechnologie"  
            ],  
            "offers": {  
              "@type": "Offer",  
              "itemOffered": [  
                {  
                  "@type": "Service",  
                  "name": "Structured Cabling",  
                  "description": "Professional network and telecommunications cabling solutions"  
                },  
                {  
                  "@type": "Service",  
                  "name": "Telephony Systems",  
                  "description": "Complete telephone system installation and maintenance"  
                },  
                {  
                  "@type": "Service",  
                  "name": "Audio Solutions",  
                  "description": "Professional audio system installation and configuration"  
                }  
              ]  
            }  
          })  
        }}  
      />  
      <MainPage />  
    </>  
  );  
}  