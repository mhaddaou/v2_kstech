import Image from "next/image";

export default function About() {
  return (
    <div className="w-screen pt-[6rem] lg:pt-[210px]">
      <div className="w-full container flex flex-col lg:flex-row gap-7">
        <div className="w-[80%] mx-auto lg:w-1/2 bg-light rounded-lg p-6 shadow-input">
          <div className="w-[80%] mx-auto flex flex-col justify-around h-full ">
            <div className="">
            <div className="w-full flex items-center gap-4">
              <div>
                <Image
                  className="w-8 2xl:w-10"
                  src="/icons/icon.svg"
                  alt="icon"
                  height={10}
                  width={10}
                />
              </div>
              <div>
                <h3 className="2xl:text-lg capitalize font-poppins">
                  à propos de nous
                </h3>
              </div>
            </div>
              <div className="pt-6">
                <h1 className="font-poppins text-3xl 2xl:text-4xl font-semibold capitalize tracking-wide">
                  Présentation de notre entreprise
                </h1>
              </div>

            </div>
            <div className="pt-5 flex flex-col gap-3 ">
              <div>
                <p className="font-poppins  2xl:text-lg">
                  Bienvenue chez KS Technologie. Nous sommes spécialisés dans
                  les services de télécommunications et de câblage structuré,
                  offrant des solutions de connectivité fiables et performantes
                  adaptées aux besoins spécifiques de nos clients.
                  
                </p>
              </div>
              <div className=" pb-6 ">
                <p className="font-poppins  2xl:text-lg">
                  Notre mission est de fournir des infrastructures de réseau
                  robustes et efficaces, permettant à nos clients de rester
                  connectés et de prospérer dans un monde de plus en plus
                  numérique. Nous mettons un point d&apos;honneur à offrir des
                  services de qualité supérieure tout en restant à
                  l&apos;avant-garde des avancées technologiques.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[80%] mx-auto lg:w-1/2 flex flex-col gap-7">
          <div className="w-full  h-[430px] relative rounded-lg">
            <Image
              src="/images/about.svg"
              alt="img"
              fill
              className="object-cover rounded-lg shadow-input"
            />
          </div>
          <div className="w-full bg-light shadow-input rounded-lg">
            <div className="w-[90%] mx-auto">
              <div className="  grid grid-cols-2 gap-8  py-6">
                <div className="bg-blueDark  rounded-md  ">
                  <div className="w-[80%] mx-auto py-4">
                    <h1 className=" font-poppins  text-2xl 2xl:text-3xl text-light pb-2 font-semibold capitalize tracking-wide">
                      15+
                    </h1>
                    <p className="font-poppins text-sm 2xl:text-base text-background">
                    Années d&apos;expérience
                    </p>
                  </div>
                </div>
                <div className="bg-blueDark  rounded-md   ">
                  <div className="w-[80%] mx-auto py-4">
                    <h1 className=" font-poppins  text-2xl 2xl:text-3xl text-light pb-2 font-semibold capitalize tracking-wide">
                      100+
                    </h1>
                    <p className="font-poppins text-sm 2xl:text-base text-background">
                    Projets terminés
                    </p>
                  </div>
                </div>
                <div className="bg-blueDark  rounded-md  ">
                  <div className="w-[80%] mx-auto py-4">
                    <h1 className=" font-poppins  text-2xl 2xl:text-3xl text-light pb-2 font-semibold capitalize tracking-wide">
                      100%
                    </h1>
                    <p className="font-poppins text-sm 2xl:text-base text-background">
                    Taux de satisfaction
                    </p>
                  </div>
                </div>

                <div className="bg-blueDark  rounded-md  ">
                  <div className="w-[80%] mx-auto py-4">
                    <h1 className=" font-poppins  text-2xl 2xl:text-3xl text-light pb-2 font-semibold capitalize tracking-wide">
                      24 / 7
                    </h1>
                    <p className="font-poppins text-sm 2xl:text-base text-background">
                    Assistance disponible
                    </p>
                  </div>
                </div>
                <div className="bg-blueDark  rounded-md  ">
                  <div className="w-[80%] mx-auto py-4">
                    <h1 className=" font-poppins  text-2xl 2xl:text-3xl text-light pb-2 font-semibold capitalize tracking-wide">
                      20+
                    </h1>
                    <p className="font-poppins text-sm 2xl:text-base text-background">
                    Membres de l&apos;équipe
                    </p>
                  </div>
                </div>

                <div className="bg-blueDark  rounded-md  ">
                  <div className="w-[80%] mx-auto py-4">
                    <h1 className=" font-poppins  text-2xl 2xl:text-3xl text-light pb-2 font-semibold capitalize tracking-wide">
                      100+
                    </h1>
                    <p className="font-poppins text-sm 2xl:text-base text-background">
                    Clients satisfaits
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
