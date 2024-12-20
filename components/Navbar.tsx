import type { NextPage } from "next";
import { useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

export type NavbarType = {
  className?: string;
};

const Navbar: NextPage<NavbarType> = ({ className = "" }) => {
  const router = useRouter();

  const onDTSYSTEMSClick = useCallback(() => {
    router.push("/home");
  }, [router]);

  return (
    <header
      className={`absolute top-[0rem] left-[0rem] bg-color w-full flex flex-row items-start justify-between py-[1.781rem] px-[4.375rem] box-border gap-[1.25rem] max-w-full text-left text-[1rem] text-white font-archivo mq800:pl-[2.188rem] mq800:pr-[2.188rem] mq800:box-border ${className}`}
    >
      <div className="h-[6.875rem] w-[90rem] relative bg-color hidden max-w-full" />
      <div className="flex flex-col items-start justify-start pt-[0.918rem] px-[0rem] pb-[0rem]">
        <Image
          className="self-stretch h-[1.469rem] relative max-w-full overflow-hidden shrink-0 cursor-pointer z-[1]"
          loading="lazy"
          width={203}
          height={24}
          alt=""
          src="/dt-systems.svg"
          onClick={onDTSYSTEMSClick}
        />
      </div>
      <div className="w-[55.563rem] flex flex-row items-start justify-start gap-[3.831rem] max-w-full mq1125:gap-[1.938rem] mq450:gap-[0.938rem]">
        <div className="flex-1 flex flex-col items-start justify-start pt-[1.125rem] px-[0rem] pb-[0rem] box-border max-w-full">
          <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem] mq1125:hidden">
            <a
              className="[text-decoration:none] relative text-color-4 inline-block min-w-[2.813rem] cursor-pointer z-[1]"
              onClick={onDTSYSTEMSClick}
            >
              Home
            </a>
            <a className="[text-decoration:none] relative text-[inherit] inline-block min-w-[3.563rem] z-[1]">
              Why Us
            </a>
            <div className="flex flex-row items-start justify-start gap-[0.25rem] z-[1]">
              <a className="[text-decoration:none] relative text-[inherit]">
                Service
              </a>
              <div className="flex flex-col items-start justify-start pt-[0.35rem] px-[0rem] pb-[0rem]">
                <Image
                  className="w-[0.588rem] h-[0.356rem] relative"
                  width={9}
                  height={6}
                  alt=""
                  src="/sub-menu-icons.svg"
                />
              </div>
            </div>
            <a className="[text-decoration:none] relative font-semibold text-[inherit] inline-block min-w-[3.688rem] z-[1]">
              Sectors
            </a>
            <a className="[text-decoration:none] relative text-[inherit] z-[1]">
              Careers
            </a>
            <div className="flex flex-row items-start justify-start gap-[0.375rem] z-[1]">
              <a className="[text-decoration:none] relative text-[inherit]">
                Resources
              </a>
              <div className="flex flex-col items-start justify-start pt-[0.393rem] px-[0rem] pb-[0rem]">
                <Image
                  className="w-[0.456rem] h-[0.275rem] relative"
                  width={7}
                  height={4}
                  alt=""
                  src="/vector-1.svg"
                />
              </div>
            </div>
            <a className="[text-decoration:none] relative text-[inherit] z-[1]">
              Contact Us
            </a>
          </div>
        </div>
        <button className="cursor-pointer border-white border-[1px] border-solid py-[1rem] px-[2rem] bg-[transparent] h-[3.313rem] w-[11.438rem] rounded-8xs box-border flex flex-row items-start justify-start z-[1] hover:bg-gainsboro-200 hover:border-gainsboro-100 hover:border-[1px] hover:border-solid hover:box-border">
          <div className="h-[3.313rem] w-[11.438rem] relative rounded-8xs border-white border-[1px] border-solid box-border hidden" />
          <a className="[text-decoration:none] flex-1 relative text-[1rem] font-archivo text-white text-center inline-block min-w-[7.5rem] z-[1]">
            Request a Demo
          </a>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
