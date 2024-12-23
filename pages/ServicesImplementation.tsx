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


  // const handleAccordionToggle = () => {
  //   setAccordionOpen((prev) => !prev);
  // };
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



  const [openAccordion, setOpenAccordion] = useState<number | null>(1); // Allow null and number

  const handleAccordionToggle = (index: number): void => {
    setOpenAccordion((prevIndex) => (prevIndex === index ? null : index));
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

  const accordionData = [
    {
      id: 1,
      title: "IT Service Management (ITSM)",
      image: "/smarthometechnologywallsystemandcouplewith20231127051651utc-1@2x.png",
      content: {
        text: "IT Service Management (ITSM)",
        deliverResilientITServices: "Deliver resilient IT services and create experiences that help your teams be more productive. Resolve issues quickly and speed the pace of innovation using AI and machine learning.",
        unburdenYourITServicesStaff: "Unburden your IT services staff and boost IT productivity",
        createResilientAdaptablePeople1: "Create resilient & adaptable people first experiences",
        deliverITServicesOnASingle1: "Deliver IT services on a single system of engagement by using workflows to synthesise your shared data and analytics"
      }
    },
    {
      id: 2,
      title: "IT Operations Management (ITOM)",
      image: "/iotm.png",
      content: {
        text: "IT Operations Management",
        deliverResilientITServices: "Gain visibility into your multistack IT environment, on-premises to cloud, and see the impact on your applications and business services. Predict issues and automate resolutions assisted by generative AI.",
        unburdenYourITServicesStaff: "Gain full visibility into your infrastructure, including on-premises, cloud, and serverless environments. Manage TLS certificates and firewall policies on a single platform",
        createResilientAdaptablePeople1: "Analyze telemetry and log data using generative AI to reduce noise, predict issues, and automate resolution",
        deliverITServicesOnASingle1: "Accelerate Cloud Adoption by automated service workflows and continuous governance",
        cta: "Contact Us for ServiceNow Consultation"
      }
    },
    {
      id: 3,
      title: "Customer Service Management (CSM)",
      image: "/csmt.png",
      content: {
        text: "Customer Service Management",
        deliverResilientITServices: "Take your customer service to the next level while controlling operating costs. Resolve issues quickly and delight customers with AI-powered self-service. Set your agents up for success with real-time information to boost their productivity.",
        unburdenYourITServicesStaff: "Provide self-service across multiple communication channels (e.g., social media to AI-powered virtual agents)",
        createResilientAdaptablePeople1: "Enhanced cross-department collaboration",
        deliverITServicesOnASingle1: "Provide real-time insights for agents with GenAI infused tools to quickly resolve customer requests",
        cta: "Contact Us for ServiceNow Consultation"
      }
    },
    {
      id: 4,
      title: "IT Asset Management (ITAM)",
      image: "/itam.png",
      content: {
        text: "IT Asset Management (ITAM)",
        deliverResilientITServices: "Manage all your hardware, software, and cloud IT assets from a single platform. Automate every stage of the IT asset lifecycle at scale while controlling costs and minimizing licensing and leasing risks.",
        unburdenYourITServicesStaff: "Automate ITAM by doing it where you plan, service, and operate IT—on one platform, one data model, and one architecture",
        createResilientAdaptablePeople1: "Realise Savings throughout the asset lifecycle by optimizing software licenses, tracking hardware assets, and managing cloud resources",
        deliverITServicesOnASingle1: "Align asset investments to business needs. Quickly identify and mitigate technology risks such as tech debt, shadow tech, vulnerabilities, license compliance, or lost assets",
        cta: "Contact Us for ServiceNow Consultation"
      }
    },
    {
      id: 5,
      title: "HR Service Delivery",
      image: "/hsd.png",
      content: {
        text: "HR Service Delivery",
        deliverResilientITServices: "Improve productivity by making it easy for employees to get the help and guidance they need, all in one place. Reduce costs with AI-driven self-service and streamlined case resolution.",
        unburdenYourITServicesStaff: "Deliver intelligent customised (region/local) self-service experiences to reduce case volumes and help employees get results faster",
        createResilientAdaptablePeople1: "Provide embedded experiences across any digital channel, e.g. ServiceNow in Teams",
        deliverITServicesOnASingle1: "Improve employee service experience of remote workers to maintain productivity",
        cta: "Contact Us for ServiceNow Consultation"
      }
    },
    {
      id: 6,
      title: "Security Operations",
      image: "/so.png",
      content: {
        text: "Security Operations",
        deliverResilientITServices: "Simplify and automate threat and vulnerability management and response while reducing risks to your organization.",
        unburdenYourITServicesStaff: "Reach operational agility by using MITRE ATT&CK to investigate threats and close gaps",
        createResilientAdaptablePeople1: "Prioritize remediation by applying risk-based vulnerability management across your infrastructure and collaborative workspaces for effective management and remediation",
        deliverITServicesOnASingle1: "Know your security posture by viewing key metrics and indicators with role-based dashboards and reporting",
        cta: "Contact Us for ServiceNow Consultation"
      }
    },
    {
      id: 7,
      title: "Now Assist",
      image: "/na.png",
      content: {
        text: "Now Assist",
        deliverResilientITServices: "Out-of-the-box Gen AI that helps employees, customers, agents, and developers work smarter.",
        unburdenYourITServicesStaff: "Case Summarisation reduces manual work for agents and operators with overviews and insights",
        createResilientAdaptablePeople1: "Enriched Virtual Agent conversations by deflecting cases, empowering people, and delivering engaging, dynamic experiences with natural human language",
        deliverITServicesOnASingle1: "Generate content automatically, including knowledge articles, emails, chats, intelligent search results, and work notes",
        cta: "Contact Us for ServiceNow Consultation"
      }
    }
  ];

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
          <div className="w-[90rem] flex flex-col items-start justify-start gap-[2rem]"> {/* Updated width */}
            {accordionData.map((item) => (
              <div
                key={item.id}
                style={padding}
                className="w-[90rem] h-auto flex flex-col items-end justify-start gap-[0rem] [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms] text-[1.75rem] text-color-5 items-center"
                data-acc-item
              >
                {/* Original Accordion Header */}
                <div
                  className="w-[86rem] h-[4.625rem] rounded-3xs bg-gray-100 flex flex-row items-start justify-between py-[0.75rem] pl-[4rem] pr-[4.937rem] box-border gap-[50.375rem] cursor-pointer items-center responsiveHeader relative ml-[-3.5rem] "
                  data-acc-header
                  onClick={() => handleAccordionToggle(item.id)}
                >
                  <div className="w-[90rem] relative rounded-3xs bg-gray-100 h-[4.625rem] hidden" /> {/* Updated width */}
                  <div
                    className={`w-[21.063rem] font-medium font-archivo text-[1.5rem] bg-[transparent] relative leading-[3.125rem] ${openAccordion === item.id ? 'text-color-5' : 'text-color-6'} text-left inline-block p-0 z-[10] mq450:text-[1.188rem] mq450:leading-[2.5rem] whitespace-nowrap`}
                  >
                    {item.title}
                  </div>
                  <div className="h-[1.813rem] w-[0.825rem] flex flex-col items-start justify-start pt-[1.312rem] px-[0rem] pb-[0rem] box-border mt-[-1rem]">
                    <Image
                      className={`w-[0.825rem] h-[0.5rem] relative z-[1] transition-transform ${openAccordion === item.id ? "rotate-180" : ""
                        }`}
                      width={13}
                      height={8}
                      alt=""
                      src="/vector-21.svg"
                    />
                  </div>
                </div>

                {/* Original Accordion Content */}
                <div
                  className={`w-[90rem] flex flex-col items-center justify-start [transition-property:height] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[300ms] overflow-hidden ${openAccordion === item.id ? "h-auto" : "h-0"}`}
                  data-acc-content
                >
                  <div className="flex md:flex-row items-start justify-start gap-6 responsive">
                    <Image
                      style={{ margin: 0, marginTop: "2rem", marginLeft: "-13rem" }}
                      className="w-[33.25rem] h-[25rem] relative rounded-11xl object-cover img "
                      loading="lazy"
                      width={532}
                      height={400}
                      alt=""
                      src={item.image}
                    />

                    <div className="w-[41.125rem] grid flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[0.5rem] box-border cursor-default [transition-property:all] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[150ms]">
                      <div style={{ ...div }} className="flex flex-row items-start justify-start py-[0rem] pl-[2rem] pr-[1.937rem] box-border text-[1.75rem] text-color-5">
                        <h1
                          className="w-[21.063rem] font-medium font-archivo text-[2rem] bg-[transparent] relative leading-[3.125rem]  text-left inline-block p-0 z-[10] mq450:text-[1.188rem] mq450:leading-[2.5rem] whitespace-nowrap "
                        >                          {item.content.text}
                        </h1>
                      </div>
                      <div style={{ ...div }} className="flex flex-row items-start justify-start pt-[0rem] px-[2rem] pb-[1rem] box-border text-[1.125rem] text-color-6">
                        <div className="flex flex-col items-start justify-start gap-[1rem]">
                          <div className="flex flex-col gap-[0.5rem]">

                            <div className="w-[37.75rem] relative text-[1.125rem] leading-[1.875rem] text-color-6 inline-block mq800:w-[50%]" style={{ fontFamily: "Archivo" }}>
                              {item.content.deliverResilientITServices}
                            </div>

                          </div>
                          <div className="flex flex-col gap-[0.5rem] text-[1.5rem] text-color-5">
                            <div className="relative leading-[2.5rem] font-semibold mq450:text-[1.188rem] mq450:leading-[2rem] opacity-80" style={{ fontFamily: "Archivo" }} >
                              Benefits
                            </div>
                            <div className="relative text-[1.125rem] leading-[150%] text-color-6 ">
                              <ul className="m-0 font-inherit text-inherit pl-[1.333rem]" style={{ fontFamily: "Archivo" }}>
                                <li className="my-[undefined] mx-[undefined]">{item.content.unburdenYourITServicesStaff}</li>
                                <li className="my-[undefined] mx-[undefined]">{item.content.createResilientAdaptablePeople1}</li>
                                <li className="my-[undefined] mx-[undefined]">{item.content.deliverITServicesOnASingle1}</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ServicesImplementation;

