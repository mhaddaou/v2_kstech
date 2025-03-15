import { ServicesType } from "@/app/lib/data/services";

const menuItems: ServicesType[] = [
  {
    title: {
      fr: "Accueil",
      en: "Home",
    },
    link: "/",
  },
  {
    title: {
      fr: "Câblage structuré",
      en: "Structured Cabling",
    },
    link: "/cabling/structured-cabling",
  },
  {
    title: {
      fr: "Câblage résidentiel",
      en: "Residential Cabling",
    },
    link: "/cabling/residential-cabling-automation",
  },
  {
    title: {
      fr: "Câblage audio",
      en: "Audio Wiring",
    },
    link: "/cabling/audio-wiring",
  },
  {
    title: {
      fr: "Maintenance Infrastructure Réseau",
      en: "Network Infrastructure Maintenance",
    },
    link: "/cabling/maintenance-and-repair",
  },
  {
    title: {
      fr: "Téléphonie traditionnelle",
      en: "Traditional Telephony",
    },
    link: "/phone/hybride",
  },
  {
    title: {
      fr: "Téléphonie IP",
      en: "IP Telephony",
    },
    link: "/phone/ip-phone",
  },
  {
    title: {
      fr: "Maintenance Téléphonique",
      en: "Telephone Systems Maintenance",
    },
    link: "/phone/reparation",
  },
  {
    title: {
      fr: "Services",
      en: "Services",
    },
    link: "/services",
  },
];


export default menuItems;