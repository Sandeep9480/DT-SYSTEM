import type { NextPage } from "next";
import Image from "next/image";

export type ServicesLeftType = {
  className?: string;

  /** Variant props */
  property1?: string;
};

const ServicesLeft: NextPage<ServicesLeftType> = ({
  className = "",
  property1 = "Default",
}) => {
  return (
    <div
      className={`h-[28.125rem] w-[40.125rem] flex flex-col items-start justify-end box-border relative text-left text-white font-archivo 
      lg:h-[28.125rem] lg:w-[40.125rem] md:h-[24rem] md:w-[35rem] sm:h-[20rem] sm:w-full group ${className}`}
      data-property1={property1}
    >
      <div className="absolute inset-0 rounded-11xl overflow-hidden">
        <Image
          className="w-full h-full absolute inset-0 object-cover"
          width={642}
          height={450}
          alt=""
          src="/mask-group@2x.png"
        />
        <div className="w-full h-[13.606rem] absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent z-[1]" />

        <div className="absolute bottom-0 left-0 right-0 z-[2] p-8 flex flex-col gap-4 transition-opacity duration-300 group-hover:opacity-0">
          <h1 className="text-[3rem] font-bold leading-[1.2] sm:text-[2rem]">
            Advisory
          </h1>
          <div className="flex items-center gap-2 text-color-4">
            <span className="text-[1.125rem] font-medium sm:text-[1rem]">Learn More</span>
            <Image
              className="w-[0.375rem] h-auto mt-1"
              loading="lazy"
              width={6}
              height={10}
              alt=""
              src="/vector-2.svg"
            />
          </div>
        </div>

        <div className="absolute inset-0 flex flex-col items-start justify-center gap-4 p-8 z-[3] opacity-0 transform translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 bg-[#1E3A2F]/90">
          <h1 className="text-[3rem] font-bold leading-[1.2] sm:text-[2rem]">
            Advisory
          </h1>
          <p className="text-[1.25rem] leading-[1.875rem] sm:text-[1rem]">
            Expert guidance and strategic consulting to optimize your ServiceNow
            implementation and maximize business value.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicesLeft;
