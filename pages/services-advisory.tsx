import type { NextPage } from "next";
import { useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Heros from "../components/Heros";
import DigitalTranspormationRoadmap from "../components/DigitalTranspormationRoadmap";
import NavbarPage from "../components/NavbarPage";
import Footer from "../components/Footer";

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
      <div style={{ height: "110px", width: "100%", backgroundColor: "#112e11f0" }} >
        <div className="mt-[2rem]"><NavbarPage /></div>
      </div>
      <Heros
        teamworkWithBusinessPeople="/hero.png"
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
      <Footer />
    </div>
  );
};

export default ServicesAdvisory;