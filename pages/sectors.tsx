


import type { NextPage } from "next";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import ItServiceManagemant from "../components/ItServiceManagemant";
import NavbarPage from "../components/NavbarPage";
import Footer from "../components/Footer";
import ServicesContent from "../components/services-content";
import Heros from "../components/Heros";
import Hero from "../components/Hero";


const Sectors: NextPage = () => {
  const onAccordionHeaderClick = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      const element = event.target as HTMLElement;

      const accItem: HTMLElement =
        element.closest("[data-acc-item]") || element;
      const accContent = accItem.querySelector(
        "[data-acc-content]"
      ) as HTMLElement;
      const isOpen = accItem.hasAttribute("data-acc-open");
      const nextOuterSibling =
        accItem?.nextElementSibling ||
        (accItem?.parentElement?.nextElementSibling as HTMLElement);
      const prevOuterSibling =
        accItem?.previousElementSibling ||
        (accItem?.parentElement?.previousElementSibling as HTMLElement);
      const siblingContainerAccItem = accItem?.hasAttribute("data-acc-original")
        ? accItem?.nextElementSibling ||
        nextOuterSibling?.querySelector("[data-acc-item]") ||
        nextOuterSibling
        : accItem?.previousElementSibling ||
        prevOuterSibling?.querySelector("[data-acc-item]") ||
        prevOuterSibling;
      const siblingAccItem =
        (siblingContainerAccItem?.querySelector(
          "[data-acc-item]"
        ) as HTMLElement) || siblingContainerAccItem;

      if (!siblingAccItem) return;
      const originalDisplay = "flex";
      const siblingDisplay = "flex";

      const openClasses = ["grid-rows-[1fr]"];
      const closeClasses = ["pt-0", "pb-0", "mb-0", "mt-0", "grid-rows-[0fr]"];

      if (isOpen) {
        accContent?.classList.remove(...openClasses);
        accContent?.classList.add(...closeClasses);

        setTimeout(() => {
          if (accItem) {
            accItem.style.display = "none";
            siblingAccItem.style.display = siblingDisplay;
          }
        }, 100);
      } else {
        if (accItem) {
          accItem.style.display = "none";
          siblingAccItem.style.display = originalDisplay;
        }
        const siblingAccContent = siblingAccItem?.querySelector(
          "[data-acc-content]"
        ) as HTMLElement;
        setTimeout(() => {
          siblingAccContent?.classList.remove(...closeClasses);
          siblingAccContent?.classList.add(...openClasses);
        }, 1);
      }
    },
    []
  );

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
        <NavbarPage />
      </div>
      <Hero
        frameSectionWidth="unset"
        frameSectionAlignSelf="stretch"
        teamworkWithBusinessPeople="/maleleadertalkingtoemployeesshowingtheplan20231127050345utc@2x.png"
        heroTitle="Sectors"
        homeServiceAdvisory="Home • Sectors"
      />
      <section style={section} className="self-stretch flex flex-row items-start justify-start pt-[0rem] px-[4.375rem] pb-[4.5rem] box-border max-w-full lg:pb-[2.938rem] lg:box-border mq750:pl-[2.188rem] mq750:pr-[2.188rem] mq750:pb-[1.938rem] mq750:box-border sectorSection">

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

              <div
                style={padding}
                className="w-[81.25rem] h-[4.625rem] rounded-3xs bg-gray-100 flex flex-row items-start justify-start py-[0.75rem] pl-[4rem] pr-[4.937rem] box-border gap-[50.375rem] cursor-pointer items-center responsiveHeader relative"
                data-acc-header
                onClick={handleAccordionToggle} // Replace with your function
              >
                <div className="w-[81.25rem] relative rounded-3xs bg-gray-100 h-[4.625rem] hidden" />
                <input
                  className="w-[21.063rem] [border:none] [outline:none] font-medium font-archivo text-[1.5rem] bg-[transparent] relative leading-[3.125rem] text-color text-left inline-block p-0 z-[1] mq450:text-[1.188rem] mq450:leading-[2.5rem]"
                  placeholder="IT Technology (ITSM)"
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


              <div
                className="w-full flex flex-col items-center justify-start [transition-property:height] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[300ms] overflow-hidden"
                style={{
                  height: accordionOpen ? "auto" : "0px",
                }}
                data-acc-content
              >
                <div className="flex md:flex-row items-center gap-6 responsive">

                  <Image
                    className="w-[33.25rem] h-[25rem] relative rounded-11xl object-cover img ml-[2rem]"
                    loading="lazy"
                    width={532}
                    height={400}
                    alt=""
                    src="/smarthometechnologywallsystemandcouplewith20231127051651utc-1@2x.png"
                  />


                  <div className="w-[51.5rem] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] overflow-hidden">
                    <ItServiceManagemant
                      frameDivHeight="23.75rem"
                      frameDivHeight1="23.75rem"
                      text={`"Accelerate Digital Transformation in IT"`}
                      textWidth="32rem"
                      textHeight="1.875rem"
                      deliverResilientITServices="IT departments face constant pressure to innovate, optimize workflows, and maintain seamless service delivery. With ServiceNow, you can transform your IT operations, streamline service management, and deliver faster, more reliable solutions. From ITSM to ITOM, our team specializes in deploying ServiceNow modules that automate workflows, reduce downtime, and enhance IT performance."
                      frameDivWidth="37.75rem"
                      frameDivHeight2="8.625rem"
                      unburdenYourITContainerWidth="37.75rem"
                      unburdenYourITServicesStaff="Improve service delivery with ITSM"
                      createResilientAdaptablePeople="Enhance operational efficiency with ITOM"
                      deliverITServicesOnASingle="Automate routine tasks, freeing up valuable resources for innovation"
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
              <div
                style={padding}
                className="w-[81.25rem] h-[4.625rem] rounded-3xs bg-gray-100 flex flex-row items-start justify-start py-[0.75rem] pl-[4rem] pr-[4.937rem] box-border gap-[50.375rem] cursor-pointer items-center responsiveHeader relative"
                data-acc-header
                onClick={handleAccordionToggle2} // Replace with your function
              >
                <div className="w-[81.25rem] relative rounded-3xs bg-gray-100 h-[4.625rem] hidden" />
                <input
                  className="w-[21.063rem] [border:none] [outline:none] font-medium font-archivo text-[1.5rem] bg-[transparent] relative leading-[3.125rem] text-color text-left inline-block p-0 z-[1] mq450:text-[1.188rem] mq450:leading-[2.5rem]"
                  placeholder="Healthcare"
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


              <div
                className="w-full flex flex-col items-center justify-start [transition-property:height] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[300ms] overflow-hidden"
                style={{
                  height: accordionOpen2 ? "auto" : "0px", // Dynamically control height
                }}
                data-acc-content
              >
                <div className="flex md:flex-row items-center gap-6 responsive">

                  <Image
                    className="w-[33.25rem] h-[25rem] relative rounded-11xl object-cover img ml-[2rem]"
                    loading="lazy"
                    width={532}
                    height={400}
                    alt=""
                    src="/smarthometechnologywallsystemandcouplewith20231127051651utc-1@2x.png"
                  />


                  <div className="w-[51.5rem] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] overflow-hidden">
                    <ItServiceManagemant
                      frameDivHeight="23.75rem"
                      frameDivHeight1="23.75rem"
                      text={`"Accelerate Digital Transformation in IT"`}
                      textWidth="32rem"
                      textHeight="1.875rem"
                      deliverResilientITServices="IT departments face constant pressure to innovate, optimize workflows, and maintain seamless service delivery. With ServiceNow, you can transform your IT operations, streamline service management, and deliver faster, more reliable solutions. From ITSM to ITOM, our team specializes in deploying ServiceNow modules that automate workflows, reduce downtime, and enhance IT performance."
                      frameDivWidth="37.75rem"
                      frameDivHeight2="8.625rem"
                      unburdenYourITContainerWidth="37.75rem"
                      unburdenYourITServicesStaff="Improve service delivery with ITSM"
                      createResilientAdaptablePeople="Enhance operational efficiency with ITOM"
                      deliverITServicesOnASingle="Automate routine tasks, freeing up valuable resources for innovation"
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

                <div
                  style={padding}
                  className="w-[81.25rem] h-[4.625rem] rounded-3xs bg-gray-100 flex flex-row items-start justify-start py-[0.75rem] pl-[4rem] pr-[4.937rem] box-border gap-[50.375rem] cursor-pointer items-center responsiveHeader relative"
                  data-acc-header
                  onClick={handleAccordionToggle3} // Replace with your function
                >
                  <div className="w-[81.25rem] relative rounded-3xs bg-gray-100 h-[4.625rem] hidden" />
                  <input
                    className="w-[21.063rem] [border:none] [outline:none] font-medium font-archivo text-[1.5rem] bg-[transparent] relative leading-[3.125rem] text-color text-left inline-block p-0 z-[1] mq450:text-[1.188rem] mq450:leading-[2.5rem]"
                    placeholder="Financial Services"
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


                <div
                  className="w-full flex flex-col items-center justify-start [transition-property:height] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[300ms] overflow-hidden"
                  style={{
                    height: accordionOpen3 ? "auto" : "0px", // Dynamically control height
                  }}
                  data-acc-content
                >
                  <div className="flex md:flex-row items-center gap-6 responsive">

                    <Image
                      className="w-[33.25rem] h-[25rem] relative rounded-11xl object-cover img ml-[2rem]"
                      loading="lazy"
                      width={532}
                      height={400}
                      alt=""
                      src="/smarthometechnologywallsystemandcouplewith20231127051651utc-1@2x.png"
                    />


                    <div className="w-[51.5rem] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] overflow-hidden">
                      <ItServiceManagemant
                        frameDivHeight="23.75rem"
                        frameDivHeight1="23.75rem"
                        text={`"Accelerate Digital Transformation in IT"`}
                        textWidth="32rem"
                        textHeight="1.875rem"
                        deliverResilientITServices="IT departments face constant pressure to innovate, optimize workflows, and maintain seamless service delivery. With ServiceNow, you can transform your IT operations, streamline service management, and deliver faster, more reliable solutions. From ITSM to ITOM, our team specializes in deploying ServiceNow modules that automate workflows, reduce downtime, and enhance IT performance."
                        frameDivWidth="37.75rem"
                        frameDivHeight2="8.625rem"
                        unburdenYourITContainerWidth="37.75rem"
                        unburdenYourITServicesStaff="Improve service delivery with ITSM"
                        createResilientAdaptablePeople="Enhance operational efficiency with ITOM"
                        deliverITServicesOnASingle="Automate routine tasks, freeing up valuable resources for innovation"
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

                <div
                  style={padding}
                  className="w-[81.25rem] h-[4.625rem] rounded-3xs bg-gray-100 flex flex-row items-start justify-start py-[0.75rem] pl-[4rem] pr-[4.937rem] box-border gap-[50.375rem] cursor-pointer items-center responsiveHeader relative"
                  data-acc-header
                  onClick={handleAccordionToggle4} // Replace with your function
                >
                  <div className="w-[81.25rem] relative rounded-3xs bg-gray-100 h-[4.625rem] hidden" />
                  <input
                    className="w-[21.063rem] [border:none] [outline:none] font-medium font-archivo text-[1.5rem] bg-[transparent] relative leading-[3.125rem] text-color text-left inline-block p-0 z-[1] mq450:text-[1.188rem] mq450:leading-[2.5rem]"
                    placeholder="Retail"
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


                <div
                  className="w-full flex flex-col items-center justify-start [transition-property:height] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[300ms] overflow-hidden"
                  style={{
                    height: accordionOpen4 ? "auto" : "0px", // Dynamically control height
                  }}
                  data-acc-content
                >
                  <div className="flex md:flex-row items-center gap-6 responsive">

                    <Image
                      className="w-[33.25rem] h-[25rem] relative rounded-11xl object-cover img ml-[2rem]"
                      loading="lazy"
                      width={532}
                      height={400}
                      alt=""
                      src="/smarthometechnologywallsystemandcouplewith20231127051651utc-1@2x.png"
                    />


                    <div className="w-[51.5rem] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] overflow-hidden">
                      <ItServiceManagemant
                        frameDivHeight="23.75rem"
                        frameDivHeight1="23.75rem"
                        text={`"Accelerate Digital Transformation in IT"`}
                        textWidth="32rem"
                        textHeight="1.875rem"
                        deliverResilientITServices="IT departments face constant pressure to innovate, optimize workflows, and maintain seamless service delivery. With ServiceNow, you can transform your IT operations, streamline service management, and deliver faster, more reliable solutions. From ITSM to ITOM, our team specializes in deploying ServiceNow modules that automate workflows, reduce downtime, and enhance IT performance."
                        frameDivWidth="37.75rem"
                        frameDivHeight2="8.625rem"
                        unburdenYourITContainerWidth="37.75rem"
                        unburdenYourITServicesStaff="Improve service delivery with ITSM"
                        createResilientAdaptablePeople="Enhance operational efficiency with ITOM"
                        deliverITServicesOnASingle="Automate routine tasks, freeing up valuable resources for innovation"
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

                <div
                  style={padding}
                  className="w-[81.25rem] h-[4.625rem] rounded-3xs bg-gray-100 flex flex-row items-start justify-start py-[0.75rem] pl-[4rem] pr-[4.937rem] box-border gap-[50.375rem] cursor-pointer items-center responsiveHeader relative"
                  data-acc-header
                  onClick={handleAccordionToggle5} // Replace with your function
                >
                  <div className="w-[81.25rem] relative rounded-3xs bg-gray-100 h-[4.625rem] hidden" />
                  <input
                    className="w-[21.063rem] [border:none] [outline:none] font-medium font-archivo text-[1.5rem] bg-[transparent] relative leading-[3.125rem] text-color text-left inline-block p-0 z-[1] mq450:text-[1.188rem] mq450:leading-[2.5rem]"
                    placeholder="Government"
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


                <div
                  className="w-full flex flex-col items-center justify-start [transition-property:height] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[300ms] overflow-hidden"
                  style={{
                    height: accordionOpen5 ? "auto" : "0px", // Dynamically control height
                  }}
                  data-acc-content
                >
                  <div className="flex md:flex-row items-center gap-6 responsive">

                    <Image
                      className="w-[33.25rem] h-[25rem] relative rounded-11xl object-cover img ml-[2rem]"
                      loading="lazy"
                      width={532}
                      height={400}
                      alt=""
                      src="/smarthometechnologywallsystemandcouplewith20231127051651utc-1@2x.png"
                    />


                    <div className="w-[51.5rem] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] overflow-hidden">
                      <ItServiceManagemant
                        frameDivHeight="23.75rem"
                        frameDivHeight1="23.75rem"
                        text={`"Accelerate Digital Transformation in IT"`}
                        textWidth="32rem"
                        textHeight="1.875rem"
                        deliverResilientITServices="IT departments face constant pressure to innovate, optimize workflows, and maintain seamless service delivery. With ServiceNow, you can transform your IT operations, streamline service management, and deliver faster, more reliable solutions. From ITSM to ITOM, our team specializes in deploying ServiceNow modules that automate workflows, reduce downtime, and enhance IT performance."
                        frameDivWidth="37.75rem"
                        frameDivHeight2="8.625rem"
                        unburdenYourITContainerWidth="37.75rem"
                        unburdenYourITServicesStaff="Improve service delivery with ITSM"
                        createResilientAdaptablePeople="Enhance operational efficiency with ITOM"
                        deliverITServicesOnASingle="Automate routine tasks, freeing up valuable resources for innovation"
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

export default Sectors;



