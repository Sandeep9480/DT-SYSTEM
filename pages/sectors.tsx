import type { NextPage } from "next";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import ItServiceManagemant from "../components/ItServiceManagemant";
import NavbarPage from "../components/NavbarPage";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

// Define the sector data structure
interface SectorData {
  id: number;
  title: string;
  image: string;
  heading: string;
  description: string;
  benefits: string[];
}

const SectorData = [
  {
    id: 1,
    title: "Information Technology (IT)",
    image: "/Rectangle 23800.png",
    heading: "Accelerate Digital Transformation in IT",
    description: "IT departments face constant pressure to innovate, optimize workflows, and maintain seamless service delivery. With ServiceNow, you can transform your IT operations, streamline service management, and deliver faster, more reliable solutions. From ITSM to ITOM, our team specializes in deploying ServiceNow modules that automate workflows, reduce downtime, and enhance IT performance.",
    benefits: [
      "Improve service delivery with ITSM",
      "Enhance operational efficiency with ITOM",
      "Automate routine tasks, freeing up valuable resources for innovation"
    ],
    cta: "Contact Us for ServiceNow Consultation"
  },
  {
    id: 2,
    title: "Healthcare",
    image: "/Rectangle 23804.png",
    heading: "Empowering Healthcare with Digital Workflows",
    description: "In the healthcare sector, operational efficiency, compliance, and patient satisfaction are top priorities. With ServiceNow, we help healthcare organizations modernize their workflows, reduce manual processes, and improve care coordination. Our solutions are designed to streamline everything from patient care management to regulatory compliance, ensuring that healthcare providers can focus on delivering high-quality care.",
    benefits: [
      "Streamline patient care coordination",
      "Improve compliance and risk management",
      "Automate administrative tasks, freeing up more time for patient care"
    ],
    cta: "Contact Us for ServiceNow Consultation"
  },
  {
    id: 3,
    title: "Financial Services",
    image: "/Rectangle 23805.png",
    heading: "Enhancing Efficiency in Financial Services",
    description: "Financial institutions operate in a fast-paced, highly regulated environment where data security, operational efficiency, and customer satisfaction are crucial. Our ServiceNow solutions are tailored to address these needs, providing tools to streamline workflows, automate compliance, and enhance customer service. With customized solutions for finance, we help you manage risk, ensure compliance, and drive operational excellence.",
    benefits: [
      "Automate compliance processes and reduce risks",
      "Streamline loan processing and customer service",
      "Improve workflow efficiency across departments"
    ],
    cta: "Contact Us for ServiceNow Consultation"
  },
  {
    id: 4,
    title: "Retail",
    image: "/Rectangle 23806.png",
    heading: "Transforming Retail with ServiceNow",
    description: "In today’s retail environment, businesses need to be agile, responsive, and efficient to keep up with customer expectations. ServiceNow enables retailers to enhance service delivery, optimize supply chain operations, and provide better customer support. Whether you need help with managing inventory, automating customer service, or streamlining operations, our solutions are designed to meet the unique challenges of the retail sector.",
    benefits: [
      "Streamline inventory management and logistics",
      "Automate customer support for faster resolution times",
      "Enhance employee productivity through optimized workflows"
    ],
    cta: "Contact Us for ServiceNow Consultation"
  },
  {
    id: 5,
    title: "Government",
    image: "/govt.png",
    heading: "Driving Efficiency in Government Services",
    description: "Government agencies are under constant pressure to do more with less, while improving service delivery and adhering to strict compliance standards. ServiceNow offers solutions to automate administrative tasks, improve service management, and ensure secure, scalable workflows. Our solutions help government agencies modernize their IT operations, improve citizen services, and manage risk more effectively.",
    benefits: [
      "Improve citizen service delivery",
      "Automate administrative processes to reduce costs",
      "Ensure secure, compliant workflows across departments"
    ],
    cta: "Contact Us for ServiceNow Consultation"
  }
];


const Sectors: NextPage = () => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(1);
  const [section, setSection] = useState({});
  const [padding, setPadding] = useState({});

  const handleAccordionToggle = (id: number) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  useEffect(() => {
    const checkScreen = () => {
      if (window.innerWidth < 500) {
        setSection({
          padding: "1rem"
        });
        setPadding({
          padding: "0"
        });
      } else {
        setPadding({});
        setSection({});
      }
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => {
      window.removeEventListener("resize", checkScreen);
    };
  }, []);
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
      <Hero
        frameSectionWidth="unset"
        frameSectionAlignSelf="stretch"
        teamworkWithBusinessPeople="/maleleadertalkingtoemployeesshowingtheplan20231127050345utc@2x.png"
        heroTitle="Sectors"
        homeServiceAdvisory="Home • Sectors"
      />
      <section style={section} className="self-stretch flex flex-row items-start justify-start pt-[0rem] px-[4.375rem] pb-[4.5rem] box-border max-w-full lg:pb-[2.938rem] lg:box-border mq750:pl-[2.188rem] mq750:pr-[2.188rem] mq750:pb-[1.938rem] mq750:box-border sectorSection">
        <div className="self-stretch flex-1 flex flex-row items-start justify-start text-[1.5rem] text-color" data-acc-group>
          <div className="w-[90rem] flex flex-col items-start justify-start gap-[2rem]">
            {SectorData.map((item) => (
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
                  <div className="w-[90rem] relative rounded-3xs bg-gray-100 h-[4.625rem] hidden" />
                  <div
                    className={`w-[21.063rem] font-medium font-archivo text-[1.5rem] bg-[transparent] relative leading-[3.125rem] ${openAccordion === item.id ? 'text-color-5' : 'text-color-6'} text-left inline-block p-0 z-[10] mq450:text-[1.188rem] mq450:leading-[2.5rem] whitespace-nowrap`}
                  >
                    {item.title}
                  </div>
                  <div className="h-[1.813rem] w-[0.825rem] flex flex-col items-start justify-start pt-[1.312rem] px-[0rem] pb-[0rem] box-border mt-[-1rem]">
                    <Image
                      className={`w-[0.825rem] h-[0.5rem] relative z-[1] arrowImage ${openAccordion === item.id ? "rotate-180" : ""}`}
                      width={13}
                      height={8}
                      alt=""
                      src="/vector-21.svg"
                    />
                  </div>
                </div>

                {/* Original Accordion Content */}
                <div
                  className={`w-full flex flex-col items-center justify-start [transition-property:height] ease-[cubic-bezier(0.4,_0,_0.2,_1)] duration-[300ms] overflow-hidden ${openAccordion === item.id ? "h-auto" : "h-0"}`}
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
                          className="w-[21.063rem] font-medium font-archivo text-[2rem] bg-[transparent] relative leading-[3.125rem]  text-left inline-block p-0 z-[10] mq450:text-[1.188rem] mq450:leading-[2.5rem] whitespace-nowrap"
                        >                          "{item.heading}"
                        </h1>
                      </div>
                      <div style={{ ...div }} className="flex flex-row items-start justify-start pt-[0rem] px-[2rem] pb-[1rem] box-border text-[1.125rem] text-color-6">
                        <div className="flex flex-col items-start justify-start gap-[1rem]">
                          <div className="flex flex-col gap-[0.5rem]">

                            <div className="w-[37.75rem] relative text-[1.125rem] leading-[1.875rem] text-color-6 inline-block mq800:w-[50%]" style={{ fontFamily: "Archivo" }}>
                              {item.description}
                            </div>

                          </div>
                          <div className="flex flex-col gap-[0.5rem] text-[1.5rem] text-color-5">
                            <div className="relative leading-[2.5rem] font-semibold mq450:text-[1.188rem] mq450:leading-[2rem] " style={{ fontFamily: "Archivo" }} >
                              Benefits
                            </div>
                            <div className="relative text-[1.125rem] leading-[150%] text-color-6">
                              <ul className="m-0 font-inherit text-inherit pl-[1.333rem]">
                                {item.benefits.map((benefit, index) => (
                                  <li key={index}>{benefit}</li>
                                ))}
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

export default Sectors;

