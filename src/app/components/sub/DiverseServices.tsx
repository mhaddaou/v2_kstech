import PaletteData from "@/app/lib/data/services";
import Palette from "./Palette";

export default function Diversepalette() {
  return (
    <section className="mt-5 w-screen  pb-16">
      <div className=" w-[95%] lg:w-full pt-8 lg:pt-0 bg-light container rounded-[10px] lg:rounded-[20px] flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2   lg:pb-16">
          <div className="flex  justify-end flex-col gap-4 h-full   lg:w-[90%] mx-auto">
            <p className="bg-blueDark font-medium font-roboto text-sm  w-fit px-3 py-0.5 rounded-full text-background uppercase ">
              explorer
            </p>
            <h2 className="font-bold font-montserrat text-4xl text-dark max-w-sm  w-full uppercase pt-0.5">
              {" "}
              Notre service diversifié
            </h2>
            <p className="font-roboto font-light text-dark/60 leading-[25px]">
              Si vous êtes à la recherche de solutions de connectivité complètes
              adaptées à vos besoins, nos services experts sont là pour vous. Du
              câblage structuré aux options de téléphonie avancées, nous
              fournissons tout le nécessaire pour assurer la fiabilité et
              l’efficacité de vos systèmes de communication.
            </p>
          </div>
        </div>
        <div className="lg:w-1/2 py-6">
          {PaletteData.map((item, index) => (
            <Palette key={index} title={item.title} link={item.link} />
          ))}
        </div>
      </div>
    </section>
  );
}
