import Image from "next/image";
import Link from "next/link";

export default function AboutUs() {
  return (
    <section className="w-screen container border border-dark/25 rounded-[20px]">
      <div className="w-full flex flex-col lg:flex-row   p-4 gap-4">
        <div className="w-full lg:w-[65%] ">
          <div className="lg:grid grid-cols-3 ">
            <div className="col-span-2 flex flex-col gap-3 pt-10">
              <p className="text-sm w-fit uppercase font-roboto font-medium text-background bg-blueDark rounded-full px-3 py-1">
              à propos de nous
              </p>
              <h1 className="uppercase max-w-md text-[40px] leading-10 font-bold font-montserrat tracking-wide ">
              Notre Chronique Technologique
              </h1>
              <p className="max-w-sm font-roboto font-light text-black/60">
              Chez KS Technologie Nous offrons des solutions de télécommunications et de câblage structuré fiables, adaptées aux besoins uniques de nos clients.
              </p>
              <Link
                href="/about"
                className="font-roboto font-medium  text-dark text-sm uppercase w-fit border border-dark rounded-full px-5 py-2  hover:bg-blueDark hover:border-white hover:text-white hover:shadow-2xl hover:shadow-blueDark transition-all ease-in duration-300"
              >
                en plus savior
              </Link>
            </div>
            <div className=" relative h-[300px] lg:h-full rounded-xl mt-6 lg:mt-0">
              <Image
                src="/images/servers.svg"
                alt="icon"
                fill
                className="object-cover rounded-xl"
              />
            </div>
          </div>
          <div className="w-full  h-[300px] mt-4 rounded-xl relative ">
            <Image
              src="/images/down.svg"
              alt="icon"
              fill
              className="object-cover rounded-xl "
            />
          </div>
        </div>
        <div className="w-full lg:w-[35%] h-[300px] lg:h-auto   relative rounded-xl ">
          <Image
            src="/images/left.svg"
            alt="icon"
            fill
            className="object-cover rounded-xl "
          />
        </div>
      </div>
    </section>
  );
}
