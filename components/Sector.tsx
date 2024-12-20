import type { NextPage } from "next";
import Image from "next/image";
import SectorRight from "./SectorRight";
import { useEffect, useState } from "react";

export type SectorType = {
  className?: string;
};

const Sector: NextPage<SectorType> = ({ className = "" }) => {
  const [style, setStyle] = useState({});
  useEffect(() => {
    const checkScreen = () => {
      if (window.innerWidth < 450) {

        setStyle({
          alignItems: "center",
          justifyContent: "center"
        }) // Corrected: Using an object for the style.
      } else {


        setStyle({}); // Reset style for larger screens.
      }
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => {
      window.removeEventListener("resize", checkScreen);
    };
  }, []);
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-[0rem] px-[4.375rem] pb-[0.25rem] box-border max-w-full text-left text-[3.375rem] text-gray-200 font-archivo mq800:pl-[2.188rem] mq800:pr-[2.188rem] mq800:box-border ${className}`}
    >
      <div className="flex-1 flex flex-row items-start justify-start gap-[5.437rem] max-w-full mq800:gap-[2.688rem] mq450:gap-[1.375rem] mq1350:flex-wrap">
        <div className="flex-1 flex flex-col items-start justify-start pt-[8.187rem] px-[0rem] pb-[0rem] box-border min-w-[27.688rem] max-w-full mq800:min-w-full mq450:pt-[5.313rem] mq450:box-border">
          <div className="self-stretch flex flex-col items-start justify-start gap-[1rem] mq800:items-center">
            <h1 className="m-0 relative text-inherit leading-[120%] capitalize font-bold font-inherit mq800:text-[2.688rem] mq800:leading-[3.25rem] mq450:text-[2rem] mq450:leading-[2.438rem]">
              Sectors
            </h1>
            <div className="self-stretch flex flex-col items-start justify-start gap-[2.187rem] text-[1.125rem] text-color-6 mq800:gap-[1.063rem]  mq800:items-center">
              <div className="relative leading-[1.875rem] para">
                Lorem ipsum dolor sit amet consectetur. Nisl diam ante urna diam
                sed amet turpis justo. A ultrices at tempor consectetur in vitae
                duis. Neque hac nulla pellentesque tortor pretium. Iaculis urna
                donec elementum amet ridiculus enim etiam risus sed.
              </div>
              <button className="cursor-pointer [border:none] py-[1rem] pl-[2rem] pr-[1.937rem] bg-color rounded-8xs flex flex-row items-start justify-start gap-[0.5rem]">
                <div className="h-[3.25rem] w-[14.813rem] relative rounded-8xs bg-color hidden" />
                <div className="flex-1 relative text-[1.125rem] font-archivo text-white text-center z-[1]">
                  More About Sectors
                </div>
                <div className="flex flex-col items-start justify-start pt-[0.362rem] px-[0rem] pb-[0rem]">
                  <Image
                    className="w-[0.375rem] h-[0.619rem] relative object-contain z-[1]"
                    width={6}
                    height={10}
                    alt=""
                    src="/vector-4.svg"
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
        <div style={{ resize: "none", scrollbarWidth: "none" }} className="h-[36.5rem] overflow-y-auto flex flex-col items-start justify-start gap-[1.5rem] max-w-full text-[2rem] text-color-5 mq800:min-w-full mq450:h-auto mq1350:flex-1">
          <div className="self-stretch flex flex-col items-start justify-start gap-[1.5rem] shrink-0 max-w-full">

            <SectorRight
              groupDivPadding="1.812rem 4.125rem"
              featureIconWithCircle="/Untitled design.png"
              frameDivFlex="unset"
              frameDivMinWidth="unset"
              informationTechnology="Retail"
            />

            <SectorRight
              groupDivPadding="1.812rem 4.125rem"
              featureIconWithCircle="/feature-icon-with-circle-1.svg"
              frameDivFlex="unset"
              frameDivMinWidth="unset"
              informationTechnology="Information Technology"
            />
            <SectorRight
              groupDivPadding="1.812rem 4.125rem"
              featureIconWithCircle="/feature-icon-with-circle-2.svg"
              frameDivFlex="unset"
              frameDivMinWidth="unset"
              informationTechnology="Financial Services"
            />
            <SectorRight
              groupDivPadding="1.812rem 4.125rem"
              featureIconWithCircle="/feature-icon-with-circle-3.svg"
              frameDivFlex="unset"
              frameDivMinWidth="unset"
              informationTechnology="Government"
            />

            <SectorRight
              groupDivPadding="1.812rem 4.125rem"
              featureIconWithCircle="/feature-icon-with-circle-4.svg"
              frameDivFlex="unset"
              frameDivMinWidth="unset"
              informationTechnology="Healthcare"
            />
          </div>
        </div>
      </div>
    </section >
  );
};

export default Sector;
