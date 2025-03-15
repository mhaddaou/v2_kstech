import PaletteData from "@/app/lib/data/services";
import Palette from "./Palette";
import { useAppSelector } from "@/redux/hooks";
import { LanguageEnum } from "@/redux/features/languages/language-slice";
import diversePaletteText from "../../../data/divers-palette";
export default function Diversepalette() {
  const language = useAppSelector((state) => state.language.value);
  
  return (
    <section className="mt-5 w-screen  pb-16">
      <div className=" w-[95%] lg:w-full pt-8 lg:pt-0 bg-light container rounded-[10px] lg:rounded-[20px] flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2   lg:pb-16">
          <div className="flex  justify-end flex-col gap-4 h-full   lg:w-[90%] mx-auto">
            <p className="bg-blueDark font-medium font-roboto text-sm  w-fit px-3 py-0.5 rounded-full text-background uppercase ">
  {language === LanguageEnum.FR ? diversePaletteText.exploreButton.fr : diversePaletteText.exploreButton.en}

            </p>
            <h2 className="font-bold font-montserrat text-4xl text-dark max-w-sm  w-full uppercase pt-0.5">
              {" "}
  {language === LanguageEnum.FR ? diversePaletteText.sectionTitle.fr : diversePaletteText.sectionTitle.en}
            </h2>
            <p className="font-roboto font-light text-dark/60 leading-[25px]">
            {language === LanguageEnum.FR ? diversePaletteText.description.fr : diversePaletteText.description.en}

            </p>
          </div>
        </div>
        <div className="lg:w-1/2 py-6">
          {PaletteData.map((item, index) => (
            <Palette key={index} title={language === LanguageEnum.FR ? item.title.fr : item.title.en} link={item.link} />
          ))}
        </div>
      </div>
    </section>
  );
}
