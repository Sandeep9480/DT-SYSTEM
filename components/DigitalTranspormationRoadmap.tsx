import type { NextPage } from "next";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

export type DigitalTranspormationRoadmapType = {
  className?: string;
};

const DigitalTranspormationRoadmap: NextPage<
  DigitalTranspormationRoadmapType
> = ({ className = "" }) => {
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

  const [openAccordion, setOpenAccordion] = useState<number | null>(1); // Allow null and number

  const handleAccordionToggle = (index: number): void => {
    setOpenAccordion((prevIndex) => (prevIndex === index ? null : index));
  };
  const [style, setStyle] = useState({});
  const [div, setDiv] = useState({});
  const [secondDiv, setSecondDiv] = useState({})
  const [img, setImg] = useState({})
  useEffect(() => {
    const checkScreen = () => {
      if (window.innerWidth < 500) {
        setDiv({
          padding: "0",
          gap: "0.5rem"
        })
        setImg({
          height: "30%"
        })
        setSecondDiv({
          gap: "1rem",
          padding: "0"
        })
        setStyle({ width: "40%" }); // Corrected: Using an object for the style.

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


  const [sideImage, setSideImage] = useState("/futuristicnightcityscapeviewhongkong20241018062121utc-1@2x.png");

  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-[0rem] px-[4.375rem] pb-[9rem] box-border max-w-full text-left text-[1.5rem] text-color font-archivo mq800:pl-[2.188rem] mq800:pr-[2.188rem] mq800:pb-[3.813rem] mq800:box-border mq1125:pb-[5.875rem] mq1125:box-border ${className}`}
    >
      <div className="flex-1 flex flex-row items-start justify-start gap-[5.875rem] max-w-full mq800:gap-[2.938rem] mq450:gap-[1.438rem] mq1325:flex-wrap" >
        <Image
          style={img}
          className="w-[34.25rem] relative rounded-11xl max-h-full object-cover max-w-full mq1325:flex-1"
          loading="lazy"
          width={548}
          height={834}
          alt=""
          src={sideImage}
        />
        <div
          className="flex-1 flex flex-col items-start justify-start gap-[1rem] min-w-[26.75rem] max-w-full mq800:min-w-full"
          data-acc-group
        >
          <div>
            <div
              className={`w-[41.125rem] flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[0.5rem] box-border cursor-pointer [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms]`}
              onClick={() => {
                handleAccordionToggle(1);
                setSideImage("/futuristicnightcityscapeviewhongkong20241018062121utc-1@2x.png");
              }}
            >
              <div
                style={{ ...div }}
                className="h-[4.625rem] w-[41.125rem] rounded-3xs bg-gray-100 flex flex-row items-start justify-start py-[0.75rem] px-[2rem] box-border gap-[14.375rem]"
              >
                <div className="w-[41.125rem] relative rounded-3xs bg-gray-100 h-[4.625rem] hidden" />
                <div
                  style={{ ...style }}
                  className="h-[3.125rem] w-[21.938rem] relative leading-[3.125rem] font-medium inline-block shrink-0 z-[1] mq450:text-[1.188rem] mq450:leading-[2.5rem]"
                >
                  Digital Transformation Roadmap
                </div>
                <div className="h-[1.813rem] w-[0.825rem] flex flex-col items-start justify-start pt-[1.312rem] px-[0rem] pb-[0rem] box-border">
                  <Image
                    className="w-[0.825rem] h-[0.5rem] relative z-[1]"
                    width={13}
                    height={8}
                    alt=""
                    src="/vector-21.svg"
                  />
                </div>
              </div>
            </div>

            {/* Accordion content */}
            {openAccordion === 1 && (
              <div
                className="w-[41.125rem] grid flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[0.5rem] box-border cursor-default grid-rows-[0fr] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] accordion__open:grid-rows-[1fr] accordion__close:grid-rows-[0fr]"
              >
                <div
                  style={{ ...div }}
                  className="h-[3.125rem] flex flex-row items-start justify-start py-[0rem] pl-[2rem] pr-[1.937rem] box-border text-[1.75rem] text-color-5"
                >
                  <h3
                    className="m-0 h-[3.125rem] w-[26rem] relative text-inherit leading-[3.125rem] font-semibold font-inherit inline-block shrink-0 mq450:text-[1.375rem] mq450:leading-[2.5rem] mq450:text-[1.2rem]"
                  >
                    Digital Transformation Roadmap
                  </h3>
                </div>
                <div
                  style={{ ...div }}
                  className="h-[23rem] flex flex-row items-start justify-start pt-[0rem] px-[2rem] pb-[1rem] box-border text-[1.125rem] text-color-6"
                >
                  <div className="h-[22rem] w-[34.75rem] flex flex-col items-start justify-start gap-[1rem]">
                    <div className="w-[16.438rem] h-[1.875rem] relative leading-[1.875rem] inline-block shrink-0">
                      ITOM | ITAM | Risk | Procurement
                    </div>
                    <div className="w-[32.25rem] h-[11.75rem] flex flex-col items-start justify-start gap-[0.5rem]">
                      <div className="w-[32.25rem] relative leading-[1.875rem] inline-block">
                        We will analyze and develop a sustainable multi-phase digital
                        transformation strategy to achieve your business goals.
                      </div>
                      <div className="w-[32.25rem] relative leading-[1.875rem] inline-block">
                        Our approach includes studying current process documentation,
                        conducting collaborative cross-functional stakeholder
                        workshops (i.e. Biz and IT) for clarifications, feedback,
                        sharing of best practice insights, and prioritization of
                        initiatives.
                      </div>
                    </div>
                    <div className="w-[34.75rem] h-[6.375rem] flex flex-col items-start justify-start gap-[0.5rem] text-[1.5rem] text-color-5">
                      <div className="w-[5.813rem] h-[2.5rem] relative leading-[2.5rem] font-semibold inline-block shrink-0 mq450:text-[1.188rem] mq450:leading-[2rem]">
                        Benefits
                      </div>
                      <div className="w-[34.75rem] relative text-[1.125rem] leading-[150%] text-color-6 inline-block">
                        <ul className="m-0 font-inherit text-inherit pl-[1.333rem]">
                          <li className="my-[undefined] mx-[undefined]">
                            Fast time to value
                          </li>
                          <li>
                            Holistic proposal to achieve quick wins and medium-term
                            initiatives
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div
            className="w-[41.125rem] h-auto flex flex-col items-start justify-start pt-0 px-0 pb-[1rem] box-border [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] cursor-pointer  duration-[150ms] cursor-pointer
  "
            data-acc-item
            data-acc-header
            data-acc-original
            onClick={() => {
              handleAccordionToggle(2);
              setSideImage("/valueRealization.png");
            }}
          >
            <div
              className="h-[4.625rem] w-full rounded-3xs bg-gray-100 flex flex-row items-center justify-between py-[0.75rem] px-[2rem] box-border"
            >
              <div
                className="w-auto font-medium font-archivo text-[1.5rem] bg-transparent leading-[3.125rem] text-color-6 text-left truncatemq450:text-[1.188rem] mq450:leading-[2."
              >
                Value Realisation
              </div>
              <div
                className="h-[1.813rem] w-[0.825rem] flex items-center justify-center box-border"
              >
                <Image
                  className={`w-[0.825rem] h-[0.5rem] relative z-[1] transition-transform ${openAccordion === 2 ? "rotate-180" : ""
                    }`}
                  width={13}
                  height={8}
                  alt=""
                  src="/vector-31.svg"
                />
              </div>
            </div>

            {openAccordion === 2 && (
              <div
                className="w-[41.125rem] flex flex-col items-start justify-start pt-0 px-0 pb-[0.5rem] box-border cursor-default [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms]space-y-4"
              >
                <div
                  className="h-auto flex flex-row items-start justify-start py-0 pl-[2rem] pr-[1.937rem] box-border text-[1.75rem] text-color-5"
                >
                  <h3
                    className="m-0 h-auto w-auto text-inherit leading-[3.125rem] font-semibold inline-block shrink-0 mq450:text-[1.375rem] mq450:leading-[2.5rem]"
                  >
                    Value Realisation
                  </h3>
                </div>
                <div
                  className="h-auto flex flex-row items-start justify-start pt-0 px-[2rem] pb-[1rem] box-border text-[1.125rem] text-color-6"
                >
                  <div className="h-auto w-[34.75rem] flex flex-col items-start justify-start gap-[1rem]">
                    <div className="w-auto leading-[1.875rem]">
                      Construct business cases supporting investment in ServiceNow to
                      achieve high-impact and sustainable outcomes.
                    </div>
                    <div className="w-auto flex flex-col gap-[0.5rem]">
                      <div className="w-auto leading-[1.875rem]">
                        We will perform a Value Metrics analysis and strategy workshop to
                        align observable value metrics to the overall business or project
                        goals. During the process, we will also identify costs and
                        timelines associated to determine ROI and a payback period.
                      </div>
                      <div className="w-auto leading-[1.875rem]">
                        We will regularly monitor value realisation (actual Value Metrics
                        versus those projected in the Value Metrics analysis) and provide
                        recommendations (e.g. opportunities, risks, mitigating actions,
                        etc.).
                      </div>
                    </div>
                    <div className="w-[34.75rem] flex flex-col gap-[0.5rem] text-[1.5rem] text-color-5">
                      <div className="font-semibold">
                        Benefits
                      </div>
                      <div className="text-[1.125rem] leading-[150%] text-color-6">
                        <ul className="list-disc pl-5">
                          <li>
                            Improve Return on Investment obtainment and articulation
                          </li>
                          <li>Agile approach to achieving business goals</li>
                          <li>
                            Comprehensive Business Case supporting investment in
                            ServiceNow platform capabilities
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>


          <div
            className="w-[41.125rem] h-[5.625rem] flex flex-row items-center justify-between pt-0 px-0 pb-[1rem] box-border [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] cursor-poi"
            data-acc-item
            data-acc-header
            data-acc-original
            onClick={() => {
              handleAccordionToggle(3);
              setSideImage("/changeManagement.png");
            }}
          >
            <div
              className="h-[4.625rem] w-full rounded-3xs bg-gray-100 flex flex-row items-center justify-between py-[0.75rem] px-[2rem] box-border"
            >
              <div
                className="font-medium font-archivo text-[1.5rem] text-color-6 bg-transparent leading-[3.125rem] text-left truncate mq450:text-[1.188rem] mq450:leading-[2.5rem]"
              >
                Change Management
              </div>

              <div
                className="h-[1.813rem] w-[0.825rem] flex items-center justify-center box-border"
              >
                <Image
                  className={`w-[0.825rem] h-[0.5rem] relative z-[1] transition-transform ${openAccordion === 3 ? "rotate-180" : ""
                    }`}
                  width={13}
                  height={8}
                  alt=""
                  src="/vector-31.svg"
                />
              </div>
            </div>
          </div>

          {openAccordion === 3 && (
            <div className="w-[41.125rem] grid flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[0.5rem] box-border cursor-default grid-rows-[0fr] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] accordion__open:grid-rows-[1fr] accordion__close:grid-rows-[0fr]">
              <div
                style={{ ...div }}
                className="h-[3.125rem] flex flex-row items-center justify-start py-0 pl-[2rem] pr-[1.937rem] box-border text-[1.75rem] text-color-5"
              >
                <h3
                  className="m-0 w-full text-inherit leading-[3.125rem] font-semibold font-inherit whitespace-nowrap truncatemq450:text-[1.375rem] mq450:leading-[2.5rem] mq450:text-[1.2rem]"
                >
                  Change Management
                </h3>
              </div>
              <div style={{ ...div }} className="h-[23rem] flex flex-row items-start justify-start pt-[0rem] px-[2rem] pb-[1rem] box-border text-[1.125rem] text-color-6">
                <div className="h-[22rem] w-[34.75rem] flex flex-col items-start justify-start gap-[1rem]">
                  <div className="w-[32.25rem] relative leading-[1.875rem] inline-block">
                    Successful implementations consist of people adopting a new way of working. The effort to drive this adoption however does not start after the project is delivered but throughout via a comprehensive change management plan consisting of user centric design, targeted stakeholder communication plan, tight feedback loops, targeted training, etc.
                  </div>
                  <div className="w-[34.75rem] h-[6.375rem] flex flex-col items-start justify-start gap-[0.5rem] text-[1.5rem] text-color-5">
                    <div className="w-[5.813rem] h-[2.5rem] relative leading-[2.5rem] font-semibold inline-block shrink-0 mq450:text-[1.188rem] mq450:leading-[2rem]">
                      Benefits
                    </div>
                    <div className="w-[34.75rem] relative text-[1.125rem] leading-[150%] text-color-6 inline-block">
                      <ul className="m-0 font-inherit text-inherit pl-[1.333rem]">
                        <li>Improve probability of adoption</li>
                        <li>Drives value realisation</li>
                        <li>Successful base case for future ServiceNow implementations</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}


          <div
            className="w-[41.125rem] h-[5.625rem] flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[1rem] box-border [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] cursor-pointer"
            data-acc-item
            data-acc-header
            data-acc-original
            onClick={() => {
              handleAccordionToggle(4);
              setSideImage("/healthCheck.png");
            }}
          >
            <div style={div} className="h-[4.625rem] w-[41.125rem] rounded-3xs bg-gray-100 flex flex-row items-start justify-start py-[0.75rem] px-[2rem] box-border gap-[24.5rem]">
              <div className="w-[41.125rem] relative rounded-3xs bg-gray-100 h-[4.625rem] hidden" />
              <div className="w-[11.813rem] font-medium font-archivo text-[1.5rem] bg-[transparent] relative leading-[3.125rem] text-color-6 text-left inline-block p-0 z-[1] mq450:text-[1.188rem] mq450:leading-[2.5rem]">
                Health Check
              </div>
              <div className="h-[1.813rem] w-[0.825rem] flex flex-col items-start justify-start pt-[1.312rem] px-[0rem] pb-[0rem] box-border">
                <Image
                  className={`w-[0.825rem] h-[0.5rem] relative z-[1] transition-transform ${openAccordion === 4 ? 'rotate-180' : ''}`}
                  width={13}
                  height={8}
                  alt=""
                  src="/vector-31.svg"
                />
              </div>
            </div>
          </div>
          {openAccordion === 4 && (
            <div className="w-[41.125rem] grid flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[0.5rem] box-border cursor-default grid-rows-[0fr] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] accordion__open:grid-rows-[1fr] accordion__close:grid-rows-[0fr]">
              <div style={{ ...div }} className="h-[3.125rem] flex flex-row items-start justify-start py-[0rem] pl-[2rem] pr-[1.937rem] box-border text-[1.75rem] text-color-5">
                <h3 className="m-0 h-[3.125rem] w-[26rem] relative text-inherit leading-[3.125rem] font-semibold font-inherit inline-block shrink-0 mq450:text-[1.375rem] mq450:leading-[2.5rem] mq450:text-[1.2rem]">
                  Health Check
                </h3>
              </div>
              <div style={{ ...div }} className="h-[23rem] flex flex-row items-start justify-start pt-[0rem] px-[2rem] pb-[1rem] box-border text-[1.125rem] text-color-6">
                <div className="h-[22rem] w-[34.75rem] flex flex-col items-start justify-start gap-[1rem]">
                  <div className="w-[32.25rem] relative leading-[1.875rem] inline-block">
                    We will review & compare your existing ServiceNow implementation to best practices gleaned from multiple implementations we have delivered. You will receive identified quick wins and a prioritized improvement report
                  </div>
                  <div className="w-[34.75rem] h-[6.375rem] flex flex-col items-start justify-start gap-[0.5rem] text-[1.5rem] text-color-5">
                    <div className="w-[5.813rem] h-[2.5rem] relative leading-[2.5rem] font-semibold inline-block shrink-0 mq450:text-[1.188rem] mq450:leading-[2rem]">
                      Benefits
                    </div>
                    <div className="w-[34.75rem] relative text-[1.125rem] leading-[150%] text-color-6 inline-block">
                      <ul className="m-0 font-inherit text-inherit pl-[1.333rem]">
                        <li>Optimise solution health, performance and scalability</li>
                        <li>Improve maintainability by identifying unnecessary customisations and configurations</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default DigitalTranspormationRoadmap;