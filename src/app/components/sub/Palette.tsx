import { ServicesType } from "@/app/lib/data/services";

export default function Palette({ title }: ServicesType) {
  return (
    <div className="w-full flex justify-end px-4 lg:px-8 py-5">
      <div className="flex w-full lg:w-[80%] justify-end border-b border-dark/20 items-center pb-4 ">
        <div>
          <h3 className="font-montserrat font-medium text-dark/85 text-[18px] uppercase">
            {title}
          </h3>
        </div>
      </div>
    </div>
  );
}
