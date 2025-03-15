export interface ServicesType {
  title: {
    fr: string;
    en: string;
  };
  link: string;
}

const PaletteData: ServicesType[] = [
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
      fr: "Entretien et Réparation",
      en: "Maintenance and Repair",
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
      fr: "Entretien et Réparation",
      en: "Maintenance and Repair",
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

export default PaletteData;
