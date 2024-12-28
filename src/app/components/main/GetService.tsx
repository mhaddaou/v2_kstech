import { ServicesType } from "@/utils/redux/Interfaces/ServicesType";
import StructuredCabling from "./StructuredCabling";
import ResidentialCablingAutomation from "./ResidentialCablingAutomation";
import { ServicesInterface } from "@/utils/redux/Interfaces/servicesInterface";
import CablageAudio from "./CablageAudio";
import CablageEntretien from "./CablageEntretien";

const services: ServicesInterface[] = [
    {
      title: "Câblage structuré",
      desc1:
        "Nos services de câblage structuré offrent des solutions de connectivité fiables et performantes adaptées aux besoins spécifiques de Chaque clients. L'expertise de KS technologie en câblage structuré garantit une infrastructure réseau robuste et efficace, essentielle pour la communication et le transfert de données au sein de l’entreprise.",
      desc2:""
      },
    {
      title: "Câblage Résidentiel",
      desc1:
        "Vous construisez ou rénovez un habitat et vous avez besoin d’un câblage  informatique, Domotique, Téléphonie ou Cameras ?",
      desc2:
        "KS Technologie  vous offrent des solutions de connectivité fiables et performantes adaptées aux besoins spécifiques de chaque clients. L'expertise de KS technologie en câblage garantit une infrastructure réseau robuste et efficace, suivant les Normes de  la Régie du Bâtiment du Québec",
    },
    {
      title: "installtion équipement informatique",
      desc1:
        "Les services d'installation d'équipement informatique garantissent une mise en place sans faille des appareils technologiques. Ils prennent en charge l'installation des ordinateurs, serveurs, routeurs, et autres périphériques, en veillant à ce que tout soit configuré et optimisé pour une performance maximale.",
      desc2:
        "Les techniciens qualifiés travaillent avec précision et efficacité, suivant les meilleures pratiques de l'industrie pour s'assurer que l'équipement informatique est installé correctement dès le départ. Ils collaborent étroitement avec les clients pour comprendre leurs besoins spécifiques et adapter les services en conséquence, offrant ainsi une solution sur mesure qui répond à leurs exigences. Avec ce service d'installation, les systèmes seront opérationnels rapidement, avec une configuration optimale qui facilite leur utilisation et leur maintenance. Ces solutions technologiques soutiennent la croissance et la productivité de l’entreprise.",
    },
    {
      title: "Téléphonie traditionnelle ",
      desc1:
        "Les solutions de téléphonie traditionnelle offrent une gamme de systèmes de téléphonie analogique fiables et éprouvés, y compris les solutions Norstar et Panasonic, pour les entreprises qui privilégient les technologies classiques. Les services incluent l'installation, la configuration et la maintenance de ces systèmes pour garantir une communication fluide et ininterrompue.",
      desc2:
        "Ces systèmes de téléphonie traditionnelle sont idéaux pour les entreprises cherchant une solution de communication stable et simple d'utilisation. Avec une installation professionnelle et un support continu, la téléphonie traditionnelle assure une connectivité fiable, permettant aux entreprises de rester en contact avec leurs clients et partenaires sans interruption.",
    },
    {
      title: "Téléphonie IP ",
      desc1:
        "Offrez une toute nouvelle dimension à vos communications grâce aux systèmes de téléphonie sur IP. Communiquez avec 2 à 100 personnes grâce au pont de conférence intégré et bénéficiez du système softphone pour passer de votre téléphone fixe à votre téléphonie mobile en quelques instants. La solution est synonyme d’autonomie et de facilité d’utilisation.",
      desc2:
        "Les services de téléphonie IP comprennent l'installation de systèmes sur site avec des serveurs dédiés ou des solutions hébergées dans le cloud. Ces systèmes offrent une flexibilité et une évolutivité accrues, permettant une gestion simplifiée et une réduction des coûts opérationnels. La téléphonie IP améliore la productivité et l'efficacité des communications d'entreprise, tout en offrant des fonctionnalités avancées adaptées aux besoins modernes.",
    },
    {
      title: "Téléphonie d’entreprise",
      desc1:
        "Les solutions complètes de téléphonie d’entreprise couvrent la téléphonie traditionnelle analogique ainsi que la téléphonie IP. Ces services incluent :",
      desc2:
        "Ces services de téléphonie d’entreprise assurent une connectivité optimale et une communication efficace, permettant aux entreprises de rester connectées en toutes circonstances.",
    },
  ];


export default function GetService({ title }: { title: ServicesType }) {
  return (
    <div className="w-screen  bg-background">
         {/* {services.map((service, index) => {
          return (
            <div className="w-[95%] mx-auto lg:mx-0 lg:w-[80%]   h-full flex flex-col justify-center ">
            <div className="w-full flex items-center gap-4">
              <div>
                <Image
                  className="w-10"
                  src={Icon}
                  alt="icon"
                  height={10}
                  width={10}
                />
              </div>
              <div>
                <h3 className="text-lg capitalize font-poppins">
                  {service.title}
                </h3>
              </div>
            </div>
            <div className="pt-6 flex flex-col gap-3">
              <div>
                <p className="font-poppins text-sm 2xl:text-base">
                  {service.desc1}
                </p>
              </div>
              {index === services.length - 1 && (
                <div className="w-[92%] mx-auto">
                  <ul className="list-disc space-y-1">
                    <li className=" font-poppins">
                      <p className="text-sm 2xl:text-base">
                        <span className="2xl:text-lg font-semibold">
                          Téléphonie analogique traditionnelle
                        </span>{" "}
                        : Installation et maintenance de systèmes de
                        téléphonie analogique pour une communication
                        fiable et simple.
                      </p>
                    </li>
                    <li className=" font-poppins">
                      <p className="text-sm 2xl:text-base">
                        <span className="2xl:text-lg font-semibold">
                          Téléphonie IP avec serveur chez le client
                        </span>{" "}
                        : Solutions de téléphonie IP hébergées sur des
                        serveurs locaux, offrant une gestion complète et
                        un contrôle total du système de communication.
                      </p>
                    </li>
                    <li className=" font-poppins">
                      <p className="text-sm 2xl:text-base">
                        <span className="2xl:text-lg font-semibold">
                          Téléphonie hébergée (cloud)
                        </span>{" "}
                        : Profitez des avantages de la téléphonie IP sans
                        la complexité de la gestion matérielle grâce aux
                        solutions de téléphonie hébergée dans le cloud,
                        garantissant flexibilité et évolutivité.
                      </p>
                    </li>
                  </ul>
                </div>
              )}
              <div className=" pb-6 border-b-2 border-[#20207B]">
                <p className="font-poppins text-sm 2xl:text-base ">
                  {service.desc2}
                </p>
              </div>
            </div>
          </div>
          );
        })} */}
      <div className="w-full h-full ">
          {title === ServicesType["structured-cabling"] && (
            <StructuredCabling service={services[0]}  />
          )}
          {title === ServicesType["residential-cabling-automation"] && (
            <ResidentialCablingAutomation service={services[1]}/>
          )}
          {/* {title === ServicesType["it-equipment-installation"] && (
            <ItEquipmentInstallation />
          )} */}
          {
            title === ServicesType["audio-wiring"] && (
              <CablageAudio/>
            )
          }
          {
            title === ServicesType["maintenance-and-repair"] && (
              <CablageEntretien/>
            )
          }
      </div>
    </div>
  );
}
