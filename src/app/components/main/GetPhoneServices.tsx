import { ServicesType } from "@/utils/redux/Interfaces/ServicesType";
import IpPhone from "./IpPhone";
import {
  PhoneReparationType,
  PhoneService,
  PhoneServices,
} from "@/utils/redux/Interfaces/PhoneServices.interface";
import PhoneReparation from "./PhoneReparation";
import PhoneHybride from "./PhoneHybride";

const hybrideService: PhoneService = {
  description: [
    "La  téléphonie traditionnelle offrent une gamme de systèmes de téléphonie Hybride et  analogique  fiables et éprouvés, y compris les solutions Norstar , Samsung ,Nortel, Panasonic …etc.",
    "Pour les entreprises qui privilégient les technologies classiques. KS Technologie offre plusieurs services incluent la Vente, l'Installation, la Configuration la Réparation et la maintenance de ces systèmes pour garantir une communication fluide et ininterrompue.",
    "Ces systèmes de téléphonie traditionnelle sont idéaux pour les entreprises cherchant une solution de communication stable et simple d'utilisation. Avec une installation professionnelle et un support continu, la téléphonie traditionnelle assure une connectivité fiable, permettant aux entreprises de rester en contact avec leurs clients et partenaires sans interruption.",
  ],
  product: ["Norstar", "Samsung", "Panasonic", "Nortel", "Toshiba", "Avaya"],
};

const ipPhone: PhoneService = {
  description: [
    "Offrez une toute nouvelle dimension à vos communications grâce aux systèmes de téléphonie sur IP. Communiquez avec 2 à 100 personnes grâce au pont de conférence intégré et bénéficiez du système softphone pour passer de votre téléphone fixe à votre téléphonie mobile en quelques instants. La solution est synonyme d’autonomie et de facilité d’utilisation.",
    "les services de KS Technologie en  téléphonie IP comprennent la vente l'installation de systèmes sur site avec des serveurs dédiés ou des solutions hébergées dans le cloud. Ces systèmes offrent une flexibilité et une évolutivité accrues, permettant une gestion simplifiée et une réduction des coûts opérationnels. La téléphonie IP améliore la productivité et l'efficacité des communications d'entreprise, tout en offrant des fonctionnalités avancées adaptées aux besoins modernes.",
  ],
  product: ["yealink", "Snom", "Yeastar"],
};

const reparation: PhoneReparationType = {
  descriptionOne:
    " KS Technologie Offre une large Gamme de solutions complètes de téléphonie d’entreprise couvrant la téléphonie traditionnelle analogique ainsi que la téléphonie IP. Ces services incluent :",
  reparation: [
    {
      name: "Téléphonie analogique traditionnelle",
      description:
        "Installation et maintenance de systèmes de téléphonie analogique",
      product: [
        "Norstar",
        "Nortel",
        "Samsung",
        "Panasonic",
        "Toshiba",
        "Avaya",
      ],
    },
    {
      name: "Téléphonie IP",
      product: [
        "Vérification du Câblage",
        "Vérification des Téléphones",
        "Vérification du réseau",
      ],
    },
  ],
  descriptionTwo:
    "Nos services de téléphonie d’entreprise assurent une connectivité optimale et une communication efficace, permettant aux entreprises de rester connectées en toutes circonstances.",
};



export default function GetPhoneServices({ title }: { title: ServicesType }) {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-full h-full ">
        {title === ServicesType["ip-phone"] && (
          <IpPhone service={ipPhone} />
        )}
        {title === ServicesType["reparation"] && (
          <PhoneReparation service={reparation} />
        )}
        {title === ServicesType["hybride"] && (
          <PhoneHybride service={hybrideService} />
        )}
      </div>
    </div>
  );
}
