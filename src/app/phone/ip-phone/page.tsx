'use client'
import { PhoneService } from "@/utils/redux/Interfaces/PhoneServices.interface";
import { AspectRatio } from "@radix-ui/themes";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Icon from "../../../../public/icons/IconServices.svg";


export default function Med(){
    const service: PhoneService = {
      description: [
        "Offrez une toute nouvelle dimension à vos communications grâce aux systèmes de téléphonie sur IP. Communiquez avec 2 à 100 personnes grâce au pont de conférence intégré et bénéficiez du système softphone pour passer de votre téléphone fixe à votre téléphonie mobile en quelques instants. La solution est synonyme d’autonomie et de facilité d’utilisation.",
        "les services de KS Technologie en  téléphonie IP comprennent la vente l'installation de systèmes sur site avec des serveurs dédiés ou des solutions hébergées dans le cloud. Ces systèmes offrent une flexibilité et une évolutivité accrues, permettant une gestion simplifiée et une réduction des coûts opérationnels. La téléphonie IP améliore la productivité et l'efficacité des communications d'entreprise, tout en offrant des fonctionnalités avancées adaptées aux besoins modernes.",
      ],
      product: ["yealink", "Snom", "Yeastar"],
    };
    return (
        <div className="w-screen  flex justify-center items-center">
      <div className="w-full h-full ">
      <div className=" w-full  relative flex flex-col  pt-16">
      <div className="w-full h-[35vh] lg:h-[60vh]">
        <AspectRatio ratio={20 / 8} className=" h-[35vh] lg:h-[80vh] 2xl:[60vh]">
          <motion.img
            src="/images/ipPhone.jpeg"
            alt="A house in a forest"
            style={{
              objectFit: "fill",
              width: "100%",
              height: "100%",
            }}
          />
          <div className="absolute w-full h-full  top-0 left-0 bg-black/70">
            <div className="w-full h-full flex  flex-col justify-center items-center gap-8">
              <h1 className=" text-xl  md:text-3xl font-bold text-light max-w-sm  md:max-w-lg text-center ">
              Services de Téléphonie IP pour Communications Avancées
              </h1>
              <Link
                href="/contact"
                className="bg-blueDark shadow-input shadow-blue-300 rounded-md text-light text-lg md:text-2xl px-6 py-2.5  font-semibold"
              >
                DEMANDEZ UNE SOUMISSION
              </Link>
            </div>
          </div>
        </AspectRatio>
      </div>

      <div className="pt-40 2xl:pt-28 w-full  container">
        <div className=" w-[80%] lg:w-[70%]  mx-auto flex flex-col justify-center gap-4 md:gap-8">
          <div className="w-full flex items-center gap-4 justify-center">
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
              <h3 className="text-lg lg:text-3xl capitalize font-poppins">
                Telephonie IP
              </h3>
            </div>
          </div>
          <div className="pt-6 flex flex-col lg:gap-7 gap-4 ">
            <div>
              {service.description.map((desc, index) => {
                return (
                  <p key={index} className="font-poppins  md:text-lg pb-6">
                    {desc}
                  </p>
                );
              })}
              <h2 className="font-poppins  md:text-lg font-semibold pb-2">Produit</h2>
              <ul className="list-disc flex flex-col gap-2">
              {
                service.product.map((prod, index) =>{
                  return (
                    <li key={index} className="font-poppins ml-8">
                      {prod}
                    </li>
                  )
                })
              }
              </ul>
              <div className="w-full h-0.5 bg-[#20207B] mt-6"></div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
      </div>
      </div>
    )
}