import { ServicesType } from "@/app/lib/data/services";
import Link from "next/link";

export default function Palette({ title, link }: ServicesType) {
  return (
    <div className="w-full flex justify-end px-4 lg:px-8 py-5">
      <div className="flex w-full lg:w-[80%] justify-end border-b border-dark/20 items-center pb-4 ">
        <div>
          <Link href={link}>
          <h3 className="font-montserrat font-medium text-dark/85 text-[18px] text-end uppercase hover:text-primary transition-colors duration-300 ease-in">
            {title}
          </h3>
          </Link>
        </div>
      </div>
    </div>
  );
}
