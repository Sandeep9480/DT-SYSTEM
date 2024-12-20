import type { NextPage } from "next";
import { useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Heros from "../components/Heros";
import ServicesContent from "../components/services-content";
import NavbarPage from "../components/NavbarPage";
import Footer from "../components/Footer";


const ServicesImplementation: NextPage = () => {
  const router = useRouter();

  const onDTSYSTEMSClick = useCallback(() => {
    router.push("/home");
  }, [router]);

  const onSectorsTextClick = useCallback(() => {
    router.push("/sectors");
  }, [router]);

  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-start justify-start leading-[normal] tracking-[normal]">
      <div style={{ height: "110px", width: "100%", backgroundColor: "#112e11f0" }}>
        <NavbarPage />
      </div>
      <Heros
        frameSectionWidth="unset"
        frameSectionAlignSelf="stretch"
        teamworkWithBusinessPeople="/maleleadertalkingtoemployeesshowingtheplan20231127050345utc@2x.png"
        heroTitle="Implementation Services"
        homeServiceAdvisory="Home • Service • Implementation"
      />
      <section className="self-stretch flex flex-row items-start justify-start pt-[0rem] px-[4.375rem] pb-[4.5rem] box-border max-w-full lg:pb-[2.938rem] lg:box-border mq750:pl-[2.188rem] mq750:pr-[2.188rem] mq750:pb-[1.938rem] mq750:box-border section">
        <ServicesContent />

      </section>
      <Footer />

    </div>
  );
};

export default ServicesImplementation;
