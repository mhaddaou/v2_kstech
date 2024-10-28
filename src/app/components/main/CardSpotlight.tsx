import Image from "next/image";
import { CardSpotlight } from "../ui/card-spotlight";
import { infoCabling } from "@/app/lib/data/InfoCabling";

export function CardSpotlightDemo() {
  return (
    <div className=" w-screen container  flex  flex-col items-center gap-10 border border-dark/20 py-3 lg:py-6 mb-16 rounded-[10px] 2xl:rounded-[15px]">
        <h1 className="font-montserrat font-bold text-dark text-4xl uppercase max-w-md text-center ">
        Avantages du câblage structuré
          </h1>
          <p className="font-roboto font-light text-dark/70 max-w-5xl  ">
          Bien que les câbles et les fils soient souvent cachés derrière les murs, les solutions de câblage structuré peuvent offrir aux entreprises et aux centres de données des avantages indispensables. Sans cela, le système est en danger, notamment lors de la maintenance. Certains avantages du câblage structuré incluent :
          </p>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {infoCabling.map((info, index) => {
          return (
            <CardSpotlight key={index} bg={info.bg} className="w-full h-full max-w-md  ">
              <div className="flex justify-center pb-4">
                <Image src={info.img} alt="img" className="relative" />
              </div>
              <p className="text-xl font-bold relative z-20 mt-2 text-white text-center">
                {info.title}
              </p>

              <p className="text-neutral-300 mt-4 relative z-20 text-sm">
                {info.description}
              </p>
              
            </CardSpotlight>
          );
        })}
      </div>
    </div>
  );
}

const Step = ({ title }: { title: string }) => {
  return (
    <li className="flex gap-2 items-start">
      <CheckIcon />
      <p className="text-white">{title}</p>
    </li>
  );
};

const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 text-blue-500 mt-1 flex-shrink-0"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
        fill="currentColor"
        strokeWidth="0"
      />
    </svg>
  );
};
