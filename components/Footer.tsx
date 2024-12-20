import type { NextPage } from "next";
import Image from "next/image";

export type FooterType = {
  className?: string;
};

const Footer: NextPage<FooterType> = ({ className = "" }) => {
  return (
    <footer
      className={`self-stretch bg-ghostwhite flex flex-col items-start justify-start pt-[5.5rem] px-[4.375rem] pb-[2.812rem] box-border gap-[2.062rem] max-w-full text-left text-[1.125rem] text-gray-300 font-archivo mq800:gap-[1rem] mq800:pl-[2.188rem] mq800:pr-[2.188rem] mq800:box-border mq450:pt-[3.563rem] mq450:pb-[1.813rem] mq450:box-border ${className}`}
    >
      <div className="flex flex-row items-start justify-start flex-wrap content-start gap-[4.481rem] max-w-full mq800:gap-[2.25rem] mq450:gap-[1.125rem]">
        {/* First Column */}
        <div className="w-[16.081rem] flex flex-col items-start justify-start pt-[0.2rem] px-[0rem] pb-[0rem] box-border text-[1rem] text-color-6">
          <div className="self-stretch flex flex-col items-start justify-start gap-[1.706rem]">
            <Image
              className="w-[12.688rem] h-[1.469rem] relative z-[1]"
              loading="lazy"
              width={203}
              height={24}
              alt=""
              src="/dt-systems-1.svg"
            />
            <div className="self-stretch flex flex-col items-start justify-start gap-[1.25rem]">
              <div className="relative leading-[150%] shrink-0 z-[1]">
                Lorem ipsum dolor sit amet consectetur. Aliquam nibh quam
              </div>
              <div className="h-[2.006rem] flex flex-row items-start justify-start flex-wrap content-start py-[0rem] pl-[0rem] pr-[0.437rem] box-border gap-x-[0.737rem] gap-y-[0.887rem] shrink-0 z-[1] text-[0.781rem] text-gray-400 font-inter items-center">
                <Image
                  className="h-[2.006rem] w-[2rem] relative rounded-13xl-1"
                  loading="lazy"
                  width={32}
                  height={32}
                  alt=""
                  src="/awnode-0dfbe7a0261a000265c522e86775eb316775eb1b.svg"
                />
                <Image
                  className="h-[2.006rem] w-[2rem] relative rounded-13xl-1"
                  loading="lazy"
                  width={32}
                  height={32}
                  alt=""
                  src="/frame.svg"
                />
                <Image
                  className="h-[2.006rem] w-[2rem] relative rounded-13xl-1"
                  loading="lazy"
                  width={32}
                  height={32}
                  alt=""
                  src="/awnode-0dfbe7a0261a000265c522e86775eb346775eb1b.svg"
                />
                <Image
                  className="h-[2.006rem] w-[2rem] relative rounded-13xl-1"
                  loading="lazy"
                  width={32}
                  height={32}
                  alt=""
                  src="/awnode-0dfbe7a0261a000265c522e86775eb376775eb1b.svg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Second Column */}
        <div className="w-[23.019rem] flex flex-row items-start justify-between py-[0rem] pl-[0rem] pr-[2.625rem] box-border max-w-full gap-[1.25rem] mq450:flex-wrap mq450:pr-[1.25rem] mq450:box-border">
          <div className="flex flex-col items-start justify-start gap-[1.5rem] mq450:flex-1">
            <div className="relative leading-[1.875rem] font-semibold z-[1]">
              About Us
            </div>
            <div className="flex flex-col items-start justify-start gap-[0.968rem] text-color-6">
              <div className="relative leading-[1.875rem] z-[1]">Leadership Team</div>
              <a className="[text-decoration:none] relative leading-[1.875rem] text-[inherit] z-[1]">Careers</a>
              <div className="relative leading-[1.875rem] z-[1]">Partner Network</div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[1.5rem] mq450:flex-1">
            <div className="relative leading-[1.875rem] font-semibold z-[1]">
              Resources
            </div>
            <div className="flex flex-col items-start justify-start gap-[1rem] text-color-6">
              <div className="relative leading-[1.875rem] z-[1]">Blog</div>
              <div className="relative leading-[1.875rem] z-[1]">Case Studies</div>
            </div>
          </div>
        </div>

        {/* Third Column */}
        <div className="flex flex-col items-start justify-start py-[0rem] pl-[0rem] pr-[3.687rem] gap-[1.5rem] mq450:pr-[1.25rem] mq450:box-border">
          <div className="relative leading-[1.875rem] font-semibold z-[1]">
            Get in Touch
          </div>
          <div className="flex flex-row items-start justify-start gap-[0.25rem] text-color-6">
            <div className="flex flex-col items-start justify-start pt-[0.45rem] px-[0rem] pb-[0rem]">
              <Image
                className="w-[1.125rem] h-[0.838rem] relative z-[1]"
                loading="lazy"
                width={18}
                height={13}
                alt=""
                src="/vector-6.svg"
              />
            </div>
            <div className="relative leading-[1.875rem] z-[1]">
              info@dt-systems.asia
            </div>
          </div>
        </div>

        {/* Fourth Column */}
        <div className="flex flex-col items-start justify-start gap-[1.5rem]">
          <div className="relative leading-[1.875rem] font-semibold z-[1]">
            Address
          </div>
          <div className="relative leading-[1.875rem] text-color-6 z-[1]">
            <p className="m-0">114 Lavender Street</p>
            <p className="m-0">#10-06/07</p>
            <p className="m-0">CT Hub 2</p>
            <p className="m-0">Singapore 338729.</p>
          </div>
        </div>
      </div>

      {/* Footer Divider */}
      <div className="self-stretch flex flex-col items-start justify-start gap-[1rem] max-w-full text-color-6 mq1125:h-auto">
        <Image
          className="self-stretch relative max-w-full overflow-hidden max-h-full z-[1]"
          width={1300}
          height={1}
          alt=""
          src="/divider.svg"
        />
        <div className="self-stretch flex flex-row items-start justify-between shrink-0 gap-[1.25rem] max-w-full mq1125:flex-wrap">
          <div className="relative leading-[160%] inline-block max-w-full z-[1]">
            © Copyright TechHarbor2024 All Rights Reserved
          </div>
          <div className="relative leading-[160%] inline-block max-w-full z-[1]">
            Privacy Policy | Terms & Conditions | Disclaimer
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
