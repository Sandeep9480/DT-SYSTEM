import type { NextPage } from "next";
import { useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Heros from "../components/Heros";
import DigitalTranspormationRoadmap from "../components/DigitalTranspormationRoadmap";
import NavbarPage from "../components/NavbarPage";

const ServicesAdvisory: NextPage = () => {
  const router = useRouter();

  const onDTSYSTEMSClick = useCallback(() => {
    router.push("/home");
  }, [router]);

  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal] text-left text-[1.5rem] text-white font-archivo">
      <div className="hidden flex-row items-start justify-start gap-[1.5rem] z-[0]">
        <div className="rounded-29xl border-gray-500 border-[1px] border-solid flex flex-row items-center justify-center py-[0.625rem] px-[0.687rem]">
          <Image
            className="h-[2rem] w-[2rem] relative overflow-hidden shrink-0"
            width={32}
            height={32}
            alt=""
            src="/arrowleft.svg"
          />
        </div>
        <div className="rounded-29xl bg-blue flex flex-row items-center justify-center p-[0.75rem]">
          <Image
            className="h-[2rem] w-[2rem] relative overflow-hidden shrink-0"
            width={32}
            height={32}
            alt=""
            src="/arrowright.svg"
          />
        </div>
      </div>
      <div style={{ height: "110px", width: "100%", backgroundColor: "#112e11f0" }}>
        <NavbarPage />
      </div>
      <Heros
        teamworkWithBusinessPeople="/teamworkwithbusinesspeopleanalysiscostgraph20231127053714utc-1@2x.png"
        heroTitle="Service Advisory"
        homeServiceAdvisory="Home • Service • Advisory"
      />
      <div className="w-[48.875rem] flex flex-row items-start justify-start pt-[0rem] px-[4.375rem] pb-[11.5rem] box-border max-w-full mq800:pl-[2.188rem] mq800:pr-[2.188rem] mq800:pb-[7.5rem] mq800:box-border">
        <div className="flex-1 flex flex-col items-start justify-start gap-[0.5rem] max-w-full">
          <i className="w-[30.5rem] relative leading-[2.5rem] inline-block max-w-full z-[2] mq450:text-[1.188rem] mq450:leading-[2rem]">
            89% of large companies globally have a digital and AI transformation
            underway​.
          </i>
          <div className="w-[33.25rem] flex flex-col items-start justify-start gap-[1rem] max-w-full">
            <i className="relative leading-[2.5rem] z-[2] mq450:text-[1.188rem] mq450:leading-[2rem]">
              However, only 31% of the expected revenue lift and 25% of expected
              cost savings are realised*
            </i>
            <div className="flex flex-col items-start justify-start max-w-full text-[2rem]">
              <h2 className="m-0 relative text-inherit leading-[3.125rem] inline-block italic font-normal font-inherit max-w-full z-[2] mq800:text-[1.625rem] mq800:leading-[2.5rem] mq450:text-[1.188rem] mq450:leading-[1.875rem]">
                At DT SYSTEMS we deliver
              </h2>
              <h2 className="m-0 relative text-inherit leading-[3.125rem] italic font-semibold font-inherit z-[3] mq800:text-[1.625rem] mq800:leading-[2.5rem] mq450:text-[1.188rem] mq450:leading-[1.875rem]">
                MAXIMUM VALUE CAPTURE
              </h2>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start">
              <i className="relative leading-[2.5rem] z-[2] mq450:text-[1.188rem] mq450:leading-[2rem]">{`by optimizing processes & managing change right through the solution lifecycle​`}</i>
              <i className="relative leading-[2.5rem] z-[3] mt-[-5rem] mq450:text-[1.188rem] mq450:leading-[2rem]">{`by optimizing processes & managing change right through the solution lifecycle​`}</i>
            </div>
          </div>
          <i className="relative leading-[2.5rem] z-[2] mq450:text-[1.188rem] mq450:leading-[2rem]">{`These services detail how our proven team can partner you in capturing maximum value by tapping on our extensive experience in building, operating & consulting tech teams. `}</i>
        </div>
      </div>
      <Image
        className="w-full h-[40.75rem] absolute !m-[0] top-[38.75rem] right-[0rem] left-[0rem] max-w-full overflow-hidden shrink-0 object-cover z-[1]"
        width={1440}
        height={652}
        alt=""
        src="/screenshot-20241023-231953-1@2x.png"
      />
      <DigitalTranspormationRoadmap />
      <footer className="self-stretch bg-ghostwhite flex flex-col items-start justify-start pt-[6.125rem] px-[4.375rem] pb-[2.187rem] box-border gap-[2.062rem] max-w-full text-left text-[1.125rem] text-gray-300 font-archivo mq800:gap-[1rem] mq800:pl-[2.188rem] mq800:pr-[2.188rem] mq800:box-border mq450:pt-[4rem] mq450:pb-[1.438rem] mq450:box-border">
        <div className="w-[90rem] h-[24.125rem] relative bg-ghostwhite hidden max-w-full" />
        <div className="flex flex-row items-start justify-start gap-[4.481rem] max-w-full mq800:gap-[2.25rem] mq450:gap-[1.125rem] mq1325:flex-wrap">
          <div className="w-[16.081rem] flex flex-col items-start justify-start pt-[0.2rem] px-[0rem] pb-[0rem] box-border text-[1rem] text-color-6">
            <div className="self-stretch flex flex-col items-start justify-start gap-[1.25rem]">
              <div className="flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[0.456rem]">
                <Image
                  className="h-[1.469rem] w-[12.688rem] relative z-[1]"
                  width={203}
                  height={24}
                  alt=""
                  src="/dt-systems-1.svg"
                />
              </div>
              <div className="relative leading-[150%] z-[1]">
                Lorem ipsum dolor sit amet consectetur. Aliquam nibh quam
              </div>
              <div className="flex flex-row items-start justify-start flex-wrap content-start py-[0rem] pl-[0rem] pr-[0.437rem] gap-x-[0.737rem] gap-y-[0.887rem] z-[1] text-[0.781rem] text-gray-400 font-inter">
                <Image
                  className="h-[2.006rem] w-[2rem] relative rounded-13xl-1"
                  loading="lazy"
                  width={32}
                  height={32}
                  alt=""
                  src="/awnode-0dfbe7a0261a000265c522e86775eb316775eb1b.svg"
                />
                <div className="self-stretch flex-1 rounded-13xl-1 border-gray-700 border-[0.9px] border-solid flex flex-row items-start justify-start py-[0.5rem] pl-[0.625rem] pr-[0.5rem] relative">
                  <div className="h-[0.781rem] relative leading-[1.25rem] font-extralight flex items-center">
                    
                  </div>
                  <Image
                    className="h-[1.113rem] w-[1.113rem] absolute !m-[0] bottom-[0.419rem] left-[0.444rem] overflow-hidden shrink-0 z-[1]"
                    loading="lazy"
                    width={18}
                    height={18}
                    alt=""
                    src="/frame.svg"
                  />
                </div>
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
          <div className="w-[23.019rem] flex flex-row items-start justify-between py-[0rem] pl-[0rem] pr-[2.625rem] box-border max-w-full gap-[1.25rem] mq450:flex-wrap mq450:pr-[1.25rem] mq450:box-border">
            <div className="flex flex-col items-start justify-start gap-[1.5rem] mq450:flex-1">
              <div className="relative leading-[1.875rem] font-semibold z-[1]">
                About Us
              </div>
              <div className="flex flex-col items-start justify-start gap-[0.968rem] text-color-6">
                <div className="relative leading-[1.875rem] z-[1]">
                  Leadership Team
                </div>
                <div className="relative leading-[1.875rem] z-[1]">Careers</div>
                <div className="relative leading-[1.875rem] z-[1]">
                  Partner Network
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[1.5rem] mq450:flex-1">
              <div className="relative leading-[1.875rem] font-semibold z-[1]">
                Resources
              </div>
              <div className="flex flex-col items-start justify-start gap-[1rem] text-color-6">
                <div className="relative leading-[1.875rem] z-[1]">Blog</div>
                <div className="relative leading-[1.875rem] z-[1]">
                  Case Studies
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start py-[0rem] pl-[0rem] pr-[3.687rem] gap-[1.5rem] mq450:pr-[1.25rem] mq450:box-border">
            <div className="relative leading-[1.875rem] font-semibold z-[1]">
              Get in Touch
            </div>
            <div className="flex flex-row items-start justify-start gap-[0.25rem] text-color-6">
              <div className="flex flex-col items-start justify-start pt-[0.45rem] px-[0rem] pb-[0rem]">
                <Image
                  className="w-[1.125rem] h-[0.838rem] relative z-[1]"
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
        <div className="self-stretch flex flex-col items-start justify-start gap-[1rem] max-w-full text-color-6 mq1125:h-auto">
          <Image
            className="self-stretch relative max-w-full overflow-hidden max-h-full z-[1]"
            loading="lazy"
            width={1300}
            height={1}
            alt=""
            src="/divider.svg"
          />
          <div className="self-stretch flex flex-row items-start justify-between shrink-0 gap-[1.25rem] max-w-full mq1125:flex-wrap">
            <div className="relative leading-[160%] inline-block max-w-full z-[1]">
              © Copyright TechHarbor2024 All Rights Reserved
            </div>
            <div className="relative leading-[160%] inline-block max-w-full z-[1]">{`Privacy Policy | Terms & Condistions | Disclaimer`}</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ServicesAdvisory;
