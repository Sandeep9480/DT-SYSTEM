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

  const accordionData = [
    {
      id: 1,
      title: "Digital Transformation Roadmap",
      image: "/futuristicnightcityscapeviewhongkong20241018062121utc-1@2x.png",
      content: {
        heading: "Digital Transformation Roadmap",
        tags: "ITOM | ITAM | Risk | Procurement",
        description: [
          "We will analyze and develop a sustainable multi-phase digital transformation strategy to achieve your business goals.",
          "Our approach includes studying current process documentation, conducting collaborative cross-functional stakeholder workshops (i.e. Biz and IT) for clarifications, feedback, sharing of best practice insights, and prioritization of initiatives."
        ],
        benefits: [
          "Fast time to value",
          "Holistic proposal to achieve quick wins and medium-term initiatives"
        ]
      }
    },
    {
      id: 2,
      title: "Value Realisation",
      image: "/valueRealization.png",
      content: {
        heading: "Value Realisation",
        description: [
          "Construct business cases supporting investment in ServiceNow to achieve high-impact and sustainable outcomes.",
          "We will perform a Value Metrics analysis and strategy workshop to align observable value metrics to the overall business or project goals. During the process, we will also identify costs and timelines associated to determine ROI and a payback period.",
          "We will regularly monitor value realisation (actual Value Metrics versus those projected in the Value Metrics analysis) and provide recommendations (e.g. opportunities, risks, mitigating actions, etc.)."
        ],
        benefits: [
          "Improve Return on Investment obtainment and articulation",
          "Agile approach to achieving business goals",
          "Comprehensive Business Case supporting investment in ServiceNow platform capabilities"
        ]
      }
    },
    {
      id: 3,
      title: "Change Management",
      image: "/changeManagement.png",
      content: {
        heading: "Change Management",
        description: [
          "Successful implementations consist of people adopting a new way of working. The effort to drive this adoption however does not start after the project is delivered but throughout via a comprehensive change management plan consisting of user centric design, targeted stakeholder communication plan, tight feedback loops, targeted training, etc."
        ],
        benefits: [
          "Improve probability of adoption",
          "Drives value realisation",
          "Successful base case for future ServiceNow implementations"
        ]
      }
    },
    {
      id: 4,
      title: "Health Check",
      image: "/healthCheck.png",
      content: {
        heading: "Health Check",
        description: [
          "We will review & compare your existing ServiceNow implementation to best practices gleaned from multiple implementations we have delivered. You will receive identified quick wins and a prioritized improvement report"
        ],
        benefits: [
          "Optimise solution health, performance and scalability",
          "Improve maintainability by identifying unnecessary customisations and configurations"
        ]
      }
    }
  ];

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
          {accordionData.map((item) => (
            <div key={item.id}>
              <div
                className="w-[41.125rem] h-auto flex flex-col items-start justify-start pt-0 px-0 pb-[1rem] box-border cursor-pointer"
                data-acc-item
                data-acc-header
                data-acc-original
                onClick={() => {
                  handleAccordionToggle(item.id);
                  setSideImage(item.image);
                }}
              >
                <div className="h-[4.625rem] w-full rounded-3xs bg-gray-100 flex flex-row items-center justify-between py-[0.75rem] px-[2rem] box-border">
                  <div className="font-medium font-archivo text-[1.5rem] bg-transparent leading-[3.125rem] text-color-6 text-left truncate mq450:text-[1.188rem] mq450:leading-[2.5rem]">
                    {item.title}
                  </div>
                  <div className="h-[1.813rem] w-[0.825rem] flex items-center justify-center box-border">
                    <Image
                      className={`w-[0.825rem] h-[0.5rem] relative z-[1] transition-transform ${openAccordion === item.id ? "rotate-180" : ""}`}
                      width={13}
                      height={8}
                      alt=""
                      src="/vector-31.svg"
                    />
                  </div>
                </div>

                {openAccordion === item.id && (
                  <div className="w-[41.125rem] grid flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[0.5rem] box-border cursor-default [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms]">
                    <div style={{ ...div }} className="flex flex-row items-start justify-start py-[0rem] pl-[2rem] pr-[1.937rem] box-border text-[1.75rem] text-color-5">
                      <h3 className="m-0 relative text-inherit leading-[3.125rem] font-semibold font-inherit inline-block shrink-0 mq450:text-[1.375rem] mq450:leading-[2.5rem] mq450:text-[1.2rem]">
                        {item.content.heading}
                      </h3>
                    </div>
                    <div style={{ ...div }} className="flex flex-row items-start justify-start pt-[0rem] px-[2rem] pb-[1rem] box-border text-[1.125rem] text-color-6">
                      <div className="flex flex-col items-start justify-start gap-[1rem]">
                        {item.content.tags && (
                          <div className="relative leading-[1.875rem]">
                            {item.content.tags}
                          </div>
                        )}
                        <div className="flex flex-col gap-[0.5rem]">
                          {item.content.description.map((desc, index) => (
                            <div key={index} className="relative leading-[1.875rem]">
                              {desc}
                            </div>
                          ))}
                        </div>
                        <div className="flex flex-col gap-[0.5rem] text-[1.5rem] text-color-5">
                          <div className="relative leading-[2.5rem] font-semibold mq450:text-[1.188rem] mq450:leading-[2rem]">
                            Benefits
                          </div>
                          <div className="relative text-[1.125rem] leading-[150%] text-color-6">
                            <ul className="m-0 font-inherit text-inherit pl-[1.333rem]">
                              {item.content.benefits.map((benefit, index) => (
                                <li key={index}>{benefit}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DigitalTranspormationRoadmap;