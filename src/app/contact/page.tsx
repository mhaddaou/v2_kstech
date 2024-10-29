import Image from "next/image";
import { ContactForm } from "../components/main/Form";
import Link from "next/link";
import { IconBrandFacebook, IconBrandInstagram, IconBrandXFilled } from "@tabler/icons-react";
import GoogleMap from "../components/main/Googlemap";

export default function Contact() {
  return (
    <div className="w-screen min-h-[calc(100vh-60px)] bg-background">
      <div className="w-full container h-full flex flex-col   items-center pt-10 gap-6">
        <h1 className="font-montserrat font-bold text-dark text-4xl uppercase max-w-md text-center leading-normal ">
          DEMANDEZ UNE ESTIMATION <span className="bg-blueDark px-3 py-1.5 rounded-full text-background">
            GRATUITE
            </span> 
        </h1>
        <p className="font-roboto font-light text-dark/70 max-w-5xl  px-6">
          Vous avez un projet de câblage réseau? Faites-nous en part en
          remplissant le formulaire ci-dessous, ou contactez-nous directement
          par courriel à info@kstechnologie.com. Notre équipe se fera un plaisir
          de répondre à toutes vos questions et de vous guider dans le choix des
          meilleures solutions pour vos besoins en câblage. Nous nous engageons
          à vous répondre dans les plus brefs délais pour vous accompagner dans
          la réussite de votre projet.
        </p>
        <div className="w-full flex flex-col lg:flex-row  gap-8  pt-10">
          <div className=" w-[80%] mx-auto  lg:w-1/3 bg-light  relative  rounded-[10px]">
                <Image src="/icons/contact.svg" alt="" width={50} height={50} className="absolute w-72 h-56 lg:h-96   right-0 bottom-0" />
            
            <div className="w-[80%] mx-auto relative flex flex-col justify-center gap-4 py-10 lg:py-0 lg:gap-7  h-full">
              <div>
                <h2 className="capitalize font-poppins font-semibold text-lg text-dark/70">Contactez-nous</h2>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="capitalize font-poppins font-semibold text-lg text-dark/70">visitez-nous</h3>
                <h5 className="font-roboto  font-medium text-dark/70">Viens dire bonjour à notre bureau</h5>
                <p className="font-roboto font-light text-sm text-dark/70">7190 Rue Jarry H1J 1G5 Anjou Québec</p>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="capitalize font-poppins font-semibold text-lg text-dark/70">discutez avec nous</h3>
                <p className="font-roboto  font-medium text-dark/70">notre équipe amicale est là pour vous aider</p>
                <p className="font-roboto font-light text-sm text-dark/70">info@kstechnologie.com</p>
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="capitalize font-poppins font-semibold text-lg text-dark/70">appelle-nous</h3>
                <p className="font-roboto  font-medium text-dark/70">Lun-Ven de 8 h à 17 h</p>
                <p className="font-roboto font-light text-sm text-dark/70">+1 (438) 464-2161</p>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="capitalize font-poppins font-semibold text-lg text-dark/70">médias sociaux</h3>
                <ul className="flex  gap-4">
                <li className="bg-dark/50 w-fit group text-light transition-colors cursor-pointer duration-300 hover:bg-primaryThree relative rounded-full flex justify-center items-center p-2">
                  <Link href="" target="_blank">
                    <IconBrandInstagram className="object-cover group-hover:text-background w-6 h-6 transition-all duration-300" />
                  </Link>
                </li>
                <li className="bg-dark/50 w-fit group text-light transition-colors cursor-pointer duration-300 hover:bg-primaryThree relative rounded-full flex justify-center items-center p-2">
                  <Link href="" target="_blank">
                    <IconBrandFacebook className="object-cover group-hover:text-background w-6 h-6 transition-all duration-300" />
                  </Link>
                </li>
                <li className="bg-dark/50 w-fit group text-light transition-colors cursor-pointer duration-300 hover:bg-primaryThree relative rounded-full flex justify-center items-center p-2">
                  <Link href="" target="_blank">
                    <IconBrandXFilled className="object-cover group-hover:text-background w-6 h-6 transition-all duration-300" />
                  </Link>
                </li>
              </ul>
              </div>
            </div>
          </div>
          <div className=" w-full mx-auto h-full lg:w-2/3  ">
            <ContactForm />
          </div>
        </div>
      </div>

      <GoogleMap/>
    </div>
  );
}
