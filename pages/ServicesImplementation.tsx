import type { NextPage } from "next";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Heros from "../components/Heros";
import ServicesContent from "../components/services-content";
import NavbarPage from "../components/NavbarPage";
import Footer from "../components/Footer";
import ItServiceManagemant from "../components/ItServiceManagemant";

const ServicesImplementation: NextPage = () => {


  const router = useRouter();

  const onDTSYSTEMSClick = useCallback(() => {
    router.push("/home");
  }, [router]);

  const onSectorsTextClick = useCallback(() => {
    router.push("/sectors");
  }, [router]);

  const [section, setSection] = useState({})
  const [padding, setPadding] = useState({})
  const [extraDiv, setExtraDiv] = useState({})
  const [accordionOpen, setAccordionOpen] = useState(false);
  const [accordionOpen2, setAccordionOpen2] = useState(false);
  const [accordionOpen3, setAccordionOpen3] = useState(false);
  const [accordionOpen4, setAccordionOpen4] = useState(false);
  const [accordionOpen5, setAccordionOpen5] = useState(false);
  const [accordionOpen6, setAccordionOpen6] = useState(false);
  const [accordionOpen7, setAccordionOpen7] = useState(false);


  const handleAccordionToggle = () => {
    setAccordionOpen((prev) => !prev);
  };
  const handleAccordionToggle2 = () => {
    setAccordionOpen2((prev) => !prev);
  };
  const handleAccordionToggle3 = () => {
    setAccordionOpen3((prev) => !prev);
  };
  const handleAccordionToggle4 = () => {
    setAccordionOpen4((prev) => !prev);
  };
  const handleAccordionToggle5 = () => {
    setAccordionOpen5((prev) => !prev);
  };
  const handleAccordionToggle6 = () => {
    setAccordionOpen6((prev) => !prev);
  };
  const handleAccordionToggle7 = () => {
    setAccordionOpen7((prev) => !prev);
  };

  useEffect(() => {
    const checkScreen = () => {
      if (window.innerWidth < 500) {

        setSection({
          padding: "1rem"
        })
        setPadding({
          padding: "0"
        })
        setExtraDiv({
          display: "flex",
          flexDirection: "column"
        })

      } else {

        setPadding({})
        setSection({

        })
      }
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => {
      window.removeEventListener("resize", checkScreen);
    };
  }, []);

  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
    <div style={{ height: "110px", width: "100%", backgroundColor: "#112e11f0" }} >
        <div className="mt-[2rem]"><NavbarPage /></div>
      </div>
      <Heros
        frameSectionWidth="unset"
        frameSectionAlignSelf="stretch"
        teamworkWithBusinessPeople="/maleleadertalkingtoemployeesshowingtheplan20231127050345utc@2x.png"
        heroTitle="Implementation Services"
        homeServiceAdvisory="Home • Service • Implementation"
      />
      <section style={section} className="self-stretch flex flex-row items-start justify-start pt-[0rem] px-[4.375rem] pb-[4.5rem] box-border max-w-full lg:pb-[2.938rem] lg:box-border mq750:pl-[2.188rem] mq750:pr-[2.188rem] mq750:pb-[1.938rem] mq750:box-border">

        <div
          className="self-stretch flex-1 flex flex-row items-start justify-start text-[1.5rem] text-color"
          data-acc-group
        >
          <div className="w-[81.25rem] flex flex-col items-start justify-start gap-[2rem]">
            <div
              style={padding}
              className="w-[81.25rem] h-auto flex flex-col items-end justify-start gap-[0rem] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] text-[1.75rem] text-color-5 items-center"
              data-acc-item
              data-acc-open
              data-acc-original
              data-acc-default-open
            >
              {/* Accordion Header */}
              <div
                style={padding}
                className="w-[81.25rem] h-[4.625rem] rounded-3xs bg-gray-100 flex flex-row items-start justify-start py-[0.75rem] pl-[4rem] pr-[4.937rem] box-border gap-[50.375rem] cursor-pointer items-center responsiveHeader relative"
                data-acc-header
                onClick={handleAccordionToggle}
              >
                <div className="w-[81.25rem] relative rounded-3xs bg-gray-100 h-[4.625rem] hidden" />
                <input
                  className="w-[21.063rem] [border:none] [outline:none] font-medium font-archivo text-[1.5rem] bg-[transparent] relative leading-[3.125rem] text-color text-left inline-block p-0 z-[1] mq450:text-[1.188rem] mq450:leading-[2.5rem]"
                  placeholder="IT Service Management (ITSM)"
                  type="text"
                />
                <div className="h-[1.813rem] w-[0.825rem] flex flex-col items-start justify-start pt-[1.312rem] px-[0rem] pb-[0rem] box-border">
                  <Image
                    className="w-[0.825rem] h-[0.5rem] relative z-[1] arrowImage"
                    width={13}
                    height={8}
                    alt=""
                    src="/vector-21.svg"
                  />
                </div>
              </div>

              {/* Accordion Content */}
              <div
                className="w-full flex flex-col items-center justify-start [transition-property:height] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[300ms] overflow-hidden"
                style={{
                  height: accordionOpen ? "auto" : "0px", // Dynamically control height
                }}
                data-acc-content
              >
                <div className="flex  md:flex-row items-center gap-6 responsive">
                  {/* Image */}
                  <Image
                    className="w-[33.25rem] h-[25rem] relative rounded-11xl object-cover img ml-[2rem]"
                    loading="lazy"
                    width={532}
                    height={400}
                    alt=""
                    src="/smarthometechnologywallsystemandcouplewith20231127051651utc-1@2x.png"
                  />

                  {/* Content Section */}
                  <div className="w-[51.5rem] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] overflow-hidden">
                    <ItServiceManagemant
                      text="IT Service Management (ITSM)"
                      deliverResilientITServices="Deliver resilient IT services and create experiences that help your teams be more productive. Resolve issues quickly and speed the pace of innovation using AI and machine learning."
                      unburdenYourITServicesStaff="Unburden your IT services staff and boost IT productivity"
                      createResilientAdaptablePeople1="Create resilient & adaptable people-first experiences"
                      deliverITServicesOnASingle1="Deliver IT services on a single system of engagement by using workflows to synthesize your shared data and analytics."
                    />
                  </div>
                </div>
              </div>
            </div>

            <div
              style={padding}
              className="w-[81.25rem] h-auto flex flex-col items-end justify-start gap-[0rem] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] text-[1.75rem] text-color-5 items-center"
              data-acc-item
              data-acc-open
              data-acc-original
              data-acc-default-open
            >
              {/* Accordion Header */}
              <div
                style={padding}
                className="w-[81.25rem] h-[4.625rem] rounded-3xs bg-gray-100 flex flex-row items-start justify-start py-[0.75rem] pl-[4rem] pr-[4.937rem] box-border gap-[50.375rem] cursor-pointer items-center responsiveHeader relative"
                data-acc-header
                onClick={handleAccordionToggle2}
              >
                <div className="w-[81.25rem] relative rounded-3xs bg-gray-100 h-[4.625rem] hidden" />
                <input
                  className="w-[21.063rem] [border:none] [outline:none] font-medium font-archivo text-[1.5rem] bg-[transparent] relative leading-[3.125rem] text-color text-left inline-block p-0 z-[1] mq450:text-[1.188rem] mq450:leading-[2.5rem]"
                  placeholder="IT Operations Management"
                  type="text"
                />
                <div className="h-[1.813rem] w-[0.825rem] flex flex-col items-start justify-start pt-[1.312rem] px-[0rem] pb-[0rem] box-border">
                  <Image
                    className="w-[0.825rem] h-[0.5rem] relative z-[1] arrowImage"
                    width={13}
                    height={8}
                    alt=""
                    src="/vector-21.svg"
                  />
                </div>
              </div>

              {/* Accordion Content */}
              <div
                className="w-full flex flex-col items-center justify-start [transition-property:height] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[300ms] overflow-hidden"
                style={{
                  height: accordionOpen2 ? "auto" : "0px", // Dynamically control height
                }}
                data-acc-content
              >
                <div className="flex md:flex-row items-center gap-6 responsive">
                  {/* Image */}
                  <Image
                    className="w-[33.25rem] h-[25rem] relative rounded-11xl object-cover img ml-[2rem]"
                    loading="lazy"
                    width={532}
                    height={400}
                    alt="Image description"
                    src="/smarthometechnologywallsystemandcouplewith20231127051651utc-1@2x.png"
                  />

                  {/* Content Section */}
                  <div className="w-[51.5rem] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] overflow-hidden">
                    <ItServiceManagemant
                      text="IT Operations Management "
                      deliverResilientITServices="Deliver resilient IT services and create experiences that help your teams be more productive. Resolve issues quickly and speed the pace of innovation using AI and machine learning."
                      unburdenYourITServicesStaff="Unburden your IT services staff and boost IT productivity"
                      createResilientAdaptablePeople1="Create resilient & adaptable people-first experiences"
                      deliverITServicesOnASingle1="Deliver IT services on a single system of engagement by using workflows to synthesize your shared data and analytics."
                    />
                  </div>
                </div>
              </div>
            </div>



            <div className="w-[100%]  flex flex-col items-start justify-start gap-[2rem]">
              <div
                style={padding}
                className="w-[81.25rem] h-auto flex flex-col items-end justify-start gap-[0rem] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] text-[1.75rem] text-color-5 items-center"
                data-acc-item
                data-acc-open
                data-acc-original
                data-acc-default-open
              >
                {/* Accordion Header */}
                <div
                  style={padding}
                  className="w-[81.25rem] h-[4.625rem] rounded-3xs bg-gray-100 flex flex-row items-start justify-start py-[0.75rem] pl-[4rem] pr-[4.937rem] box-border gap-[50.375rem] cursor-pointer items-center responsiveHeader relative"
                  data-acc-header
                  onClick={handleAccordionToggle3} // Replace with your function
                >
                  <div className="w-[81.25rem] relative rounded-3xs bg-gray-100 h-[4.625rem] hidden" />
                  <input
                    className="w-[21.063rem] [border:none] [outline:none] font-medium font-archivo text-[1.5rem] bg-[transparent] relative leading-[3.125rem] text-color text-left inline-block p-0 z-[1] mq450:text-[1.188rem] mq450:leading-[2.5rem]"
                    placeholder="Customer Service Management "
                    type="text"
                  />
                  <div className="h-[1.813rem] w-[0.825rem] flex flex-col items-start justify-start pt-[1.312rem] px-[0rem] pb-[0rem] box-border">
                    <Image
                      className="w-[0.825rem] h-[0.5rem] relative z-[1] arrowImage"
                      width={13}
                      height={8}
                      alt=""
                      src="/vector-21.svg"
                    />
                  </div>
                </div>

                {/* Accordion Content */}
                <div
                  className="w-full flex flex-col items-center justify-start [transition-property:height] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[300ms] overflow-hidden"
                  style={{
                    height: accordionOpen3 ? "auto" : "0px", // Dynamically control height
                  }}
                  data-acc-content
                >
                  <div className="flex md:flex-row items-center gap-6 responsive">
                    {/* Image */}
                    <Image
                      className="w-[33.25rem] h-[25rem] relative rounded-11xl object-cover img ml-[2rem]"
                      loading="lazy"
                      width={532}
                      height={400}
                      alt=""
                      src="/smarthometechnologywallsystemandcouplewith20231127051651utc-1@2x.png"
                    />

                    {/* Content Section */}
                    <div className="w-[51.5rem] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] overflow-hidden">
                      <ItServiceManagemant
                        text="Customer Service Management "
                        deliverResilientITServices="Deliver resilient IT services and create experiences that help your teams be more productive. Resolve issues quickly and speed the pace of innovation using AI and machine learning."
                        unburdenYourITServicesStaff="Unburden your IT services staff and boost IT productivity"
                        createResilientAdaptablePeople1="Create resilient & adaptable people-first experiences"
                        deliverITServicesOnASingle1="Deliver IT services on a single system of engagement by using workflows to synthesize your shared data and analytics."
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div
                style={padding}
                className="w-[81.25rem] h-auto flex flex-col items-end justify-start gap-[0rem] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] text-[1.75rem] text-color-5 items-center"
                data-acc-item
                data-acc-open
                data-acc-original
                data-acc-default-open
              >
                {/* Accordion Header */}
                <div
                  style={padding}
                  className="w-[81.25rem] h-[4.625rem] rounded-3xs bg-gray-100 flex flex-row items-start justify-start py-[0.75rem] pl-[4rem] pr-[4.937rem] box-border gap-[50.375rem] cursor-pointer items-center responsiveHeader relative"
                  data-acc-header
                  onClick={handleAccordionToggle4} // Replace with your function
                >
                  <div className="w-[81.25rem] relative rounded-3xs bg-gray-100 h-[4.625rem] hidden" />
                  <input
                    className="w-[21.063rem] [border:none] [outline:none] font-medium font-archivo text-[1.5rem] bg-[transparent] relative leading-[3.125rem] text-color text-left inline-block p-0 z-[1] mq450:text-[1.188rem] mq450:leading-[2.5rem]"
                    placeholder=" IT Asset Management (ITAM) "
                    type="text"
                  />
                  <div className="h-[1.813rem] w-[0.825rem] flex flex-col items-start justify-start pt-[1.312rem] px-[0rem] pb-[0rem] box-border">
                    <Image
                      className="w-[0.825rem] h-[0.5rem] relative z-[1] arrowImage"
                      width={13}
                      height={8}
                      alt=""
                      src="/vector-21.svg"
                    />
                  </div>
                </div>

                {/* Accordion Content */}
                <div
                  className="w-full flex flex-col items-center justify-start [transition-property:height] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[300ms] overflow-hidden"
                  style={{
                    height: accordionOpen4 ? "auto" : "0px", // Dynamically control height
                  }}
                  data-acc-content
                >
                  <div className="flex md:flex-row items-center gap-6 responsive">
                    {/* Image */}
                    <Image
                      className="w-[33.25rem] h-[25rem] relative rounded-11xl object-cover img ml-[2rem]"
                      loading="lazy"
                      width={532}
                      height={400}
                      alt=""
                      src="/smarthometechnologywallsystemandcouplewith20231127051651utc-1@2x.png"
                    />

                    {/* Content Section */}
                    <div className="w-[51.5rem] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] overflow-hidden">
                      <ItServiceManagemant
                        text=" IT Asset Management (ITAM) "
                        deliverResilientITServices="Deliver resilient IT services and create experiences that help your teams be more productive. Resolve issues quickly and speed the pace of innovation using AI and machine learning."
                        unburdenYourITServicesStaff="Unburden your IT services staff and boost IT productivity"
                        createResilientAdaptablePeople1="Create resilient & adaptable people-first experiences"
                        deliverITServicesOnASingle1="Deliver IT services on a single system of engagement by using workflows to synthesize your shared data and analytics."
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div
                style={padding}
                className="w-[81.25rem] h-auto flex flex-col items-end justify-start gap-[0rem] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] text-[1.75rem] text-color-5 items-center"
                data-acc-item
                data-acc-open
                data-acc-original
                data-acc-default-open
              >
                {/* Accordion Header */}
                <div
                  style={padding}
                  className="w-[81.25rem] h-[4.625rem] rounded-3xs bg-gray-100 flex flex-row items-start justify-start py-[0.75rem] pl-[4rem] pr-[4.937rem] box-border gap-[50.375rem] cursor-pointer items-center responsiveHeader relative"
                  data-acc-header
                  onClick={handleAccordionToggle5} // Replace with your function
                >
                  <div className="w-[81.25rem] relative rounded-3xs bg-gray-100 h-[4.625rem] hidden" />
                  <input
                    className="w-[21.063rem] [border:none] [outline:none] font-medium font-archivo text-[1.5rem] bg-[transparent] relative leading-[3.125rem] text-color text-left inline-block p-0 z-[1] mq450:text-[1.188rem] mq450:leading-[2.5rem]"
                    placeholder="HR Service Delivery "
                    type="text"
                  />
                  <div className="h-[1.813rem] w-[0.825rem] flex flex-col items-start justify-start pt-[1.312rem] px-[0rem] pb-[0rem] box-border">
                    <Image
                      className="w-[0.825rem] h-[0.5rem] relative z-[1] arrowImage"
                      width={13}
                      height={8}
                      alt=""
                      src="/vector-21.svg"
                    />
                  </div>
                </div>

                {/* Accordion Content */}
                <div
                  className="w-full flex flex-col items-center justify-start [transition-property:height] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[300ms] overflow-hidden"
                  style={{
                    height: accordionOpen5 ? "auto" : "0px", // Dynamically control height
                  }}
                  data-acc-content
                >
                  <div className="flex md:flex-row items-center gap-6 responsive">
                    {/* Image */}
                    <Image
                      className="w-[33.25rem] h-[25rem] relative rounded-11xl object-cover img ml-[2rem]"
                      loading="lazy"
                      width={532}
                      height={400}
                      alt=""
                      src="/smarthometechnologywallsystemandcouplewith20231127051651utc-1@2x.png"
                    />

                    {/* Content Section */}
                    <div className="w-[51.5rem] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] overflow-hidden">
                      <ItServiceManagemant
                        text="HR Service Delivery"
                        deliverResilientITServices="Deliver resilient IT services and create experiences that help your teams be more productive. Resolve issues quickly and speed the pace of innovation using AI and machine learning."
                        unburdenYourITServicesStaff="Unburden your IT services staff and boost IT productivity"
                        createResilientAdaptablePeople1="Create resilient & adaptable people-first experiences"
                        deliverITServicesOnASingle1="Deliver IT services on a single system of engagement by using workflows to synthesize your shared data and analytics."
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={padding}
                className="w-[81.25rem] h-auto flex flex-col items-end justify-start gap-[0rem] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] text-[1.75rem] text-color-5 items-center"
                data-acc-item
                data-acc-open
                data-acc-original
                data-acc-default-open
              >
                {/* Accordion Header */}
                <div
                  style={padding}
                  className="w-[81.25rem] h-[4.625rem] rounded-3xs bg-gray-100 flex flex-row items-start justify-start py-[0.75rem] pl-[4rem] pr-[4.937rem] box-border gap-[50.375rem] cursor-pointer items-center responsiveHeader relative"
                  data-acc-header
                  onClick={handleAccordionToggle6} // Replace with your function
                >
                  <div className="w-[81.25rem] relative rounded-3xs bg-gray-100 h-[4.625rem] hidden" />
                  <input
                    className="w-[21.063rem] [border:none] [outline:none] font-medium font-archivo text-[1.5rem] bg-[transparent] relative leading-[3.125rem] text-color text-left inline-block p-0 z-[1] mq450:text-[1.188rem] mq450:leading-[2.5rem]"
                    placeholder="Security Operations "
                    type="text"
                  />
                  <div className="h-[1.813rem] w-[0.825rem] flex flex-col items-start justify-start pt-[1.312rem] px-[0rem] pb-[0rem] box-border">
                    <Image
                      className="w-[0.825rem] h-[0.5rem] relative z-[1] arrowImage"
                      width={13}
                      height={8}
                      alt=""
                      src="/vector-21.svg"
                    />
                  </div>
                </div>

                {/* Accordion Content */}
                <div
                  className="w-full flex flex-col items-center justify-start [transition-property:height] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[300ms] overflow-hidden"
                  style={{
                    height: accordionOpen6 ? "auto" : "0px", // Dynamically control height
                  }}
                  data-acc-content
                >
                  <div className="flex md:flex-row items-center gap-6 responsive">
                    {/* Image */}
                    <Image
                      className="w-[33.25rem] h-[25rem] relative rounded-11xl object-cover img ml-[2rem]"
                      loading="lazy"
                      width={532}
                      height={400}
                      alt=""
                      src="/smarthometechnologywallsystemandcouplewith20231127051651utc-1@2x.png"
                    />

                    {/* Content Section */}
                    <div className="w-[51.5rem] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] overflow-hidden">
                      <ItServiceManagemant
                        text="Security Operations"
                        deliverResilientITServices="Deliver resilient IT services and create experiences that help your teams be more productive. Resolve issues quickly and speed the pace of innovation using AI and machine learning."
                        unburdenYourITServicesStaff="Unburden your IT services staff and boost IT productivity"
                        createResilientAdaptablePeople1="Create resilient & adaptable people-first experiences"
                        deliverITServicesOnASingle1="Deliver IT services on a single system of engagement by using workflows to synthesize your shared data and analytics."
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={padding}
                className="w-[81.25rem] h-auto flex flex-col items-end justify-start gap-[0rem] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] text-[1.75rem] text-color-5 items-center"
                data-acc-item
                data-acc-open
                data-acc-original
                data-acc-default-open
              >
                {/* Accordion Header */}
                <div
                  style={padding}
                  className="w-[81.25rem] h-[4.625rem] rounded-3xs bg-gray-100 flex flex-row items-start justify-start py-[0.75rem] pl-[4rem] pr-[4.937rem] box-border gap-[50.375rem] cursor-pointer items-center responsiveHeader relative"
                  data-acc-header
                  onClick={handleAccordionToggle7}
                >
                  <div className="w-[81.25rem] relative rounded-3xs bg-gray-100 h-[4.625rem] hidden" />
                  <input
                    className="w-[21.063rem] [border:none] [outline:none] font-medium font-archivo text-[1.5rem] bg-[transparent] relative leading-[3.125rem] text-color text-left inline-block p-0 z-[1] mq450:text-[1.188rem] mq450:leading-[2.5rem]"
                    placeholder="Now Assist "
                    type="text"
                  />
                  <div className="h-[1.813rem] w-[0.825rem] flex flex-col items-start justify-start pt-[1.312rem] px-[0rem] pb-[0rem] box-border">
                    <Image
                      className="w-[0.825rem] h-[0.5rem] relative z-[1] arrowImage"
                      width={13}
                      height={8}
                      alt=""
                      src="/vector-21.svg"
                    />
                  </div>
                </div>

                {/* Accordion Content */}
                <div
                  className={`w-full flex flex-col items-center justify-start [transition-property:height] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[300ms] overflow-hidden ${accordionOpen7 ? "open" : ""
                    }`}
                  style={{
                    height: accordionOpen7 ? "auto" : "0px", // Dynamically control height
                  }}
                  data-acc-content
                >
                  <div className="flex md:flex-row items-center gap-6 responsive">
                    {/* Image */}
                    <Image
                      className="w-[33.25rem] h-[25rem] relative rounded-11xl object-cover img ml-[2rem]"
                      loading="lazy"
                      width={532}
                      height={400}
                      alt=""
                      src="/smarthometechnologywallsystemandcouplewith20231127051651utc-1@2x.png"
                    />

                    {/* Content Section */}
                    <div className="w-[51.5rem] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] overflow-hidden">
                      <ItServiceManagemant
                        text="Now Assist"
                        deliverResilientITServices="Deliver resilient IT services and create experiences that help your teams be more productive. Resolve issues quickly and speed the pace of innovation using AI and machine learning."
                        unburdenYourITServicesStaff="Unburden your IT services staff and boost IT productivity"
                        createResilientAdaptablePeople1="Create resilient & adaptable people-first experiences"
                        deliverITServicesOnASingle1="Deliver IT services on a single system of engagement by using workflows to synthesize your shared data and analytics."
                      />
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ServicesImplementation;
