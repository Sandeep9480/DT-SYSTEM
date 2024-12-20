import type { NextPage } from "next";
import Image from "next/image";

export type ChooseUsType = {
  className?: string;
};

const ChooseUs: NextPage<ChooseUsType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-[0rem] px-[4.375rem] pb-[1rem] box-border max-w-full text-left text-[3.375rem] text-gray-200 font-archivo mq800:pl-[2.188rem] mq800:pr-[2.188rem] mq800:box-border ${className} mq800:mt-[5rem] mt-[5rem]`}
    >
      <div className="flex-1 flex flex-row items-center justify-center gap-[5.437rem] max-w-full mq800:gap-[2.625rem] mq450:gap-[1.313rem] mq1350:gap-[5.188rem] mq1350:flex-wrap">
        <div className="flex-1 flex flex-col items-start justify-start gap-[1rem] min-w-[24.438rem] max-w-full mq800:min-w-full mt-[-1rem]">
          <h1 className="m-0 relative text-inherit leading-[120%] capitalize font-bold font-inherit inline-block max-w-full mq800:text-[2.688rem] mq800:leading-[3.25rem] mq450:text-[2rem] mq450:leading-[2.438rem] mq800:text-center">
            Why Choose Us
          </h1>
          <div className="relative text-[1.125rem] leading-[1.875rem] text-color-6">
            <p className="m-0 w-[80%] mq800:w-[100%]">
              DT Systems is a pure play ServiceNow partner in Southeast Asia
              with a sole focus on delivering maximum value capture for our
              enterprise customers. ServiceNow is an automated workflow solution
              that bridges the gap across multiple platforms.
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0 w-[80%] mq800:w-[100%]">{`We are a proven team with unparalleled expertise in Technology Operations, Full Stack App Development, Product Management, Customer Success, COE Operations, and Management & Process Consulting. ​​Our certified ServiceNow architects, developers, consultants, project managers, will deliver innovative frictionless solutions that enhance the ServiceNow experience.`}</p>
          </div>
        </div>
        <div className="w-[33.25rem] flex flex-row items-end justify-start gap-[1.5rem] max-w-full text-[2rem] text-color-6 mq800:flex-wrap mq800:min-w-full mq1350:flex-1">
          <div className="flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.375rem]">
            <div className="flex-1 flex  items-center justify-start gap-[1rem] mt-[2rem]">
              <Image
                className="w-[5.813rem] h-[5.813rem] relative ml-[-1.3rem]"
                loading="lazy"
                width={93}
                height={93}
                alt=""
                src="/logo.png"
              />
              <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem] " >
                <h2 className="m-0 relative text-inherit leading-[120%] capitalize font-semibold font-inherit mq800:text-[1.625rem] mq800:leading-[1.938rem] mq450:text-[1.188rem] mq450:leading-[1.438rem]">
                  Proven Expertise as a title
                </h2>

                <div className="relative text-[1.125rem] leading-[1.875rem]">
                  Seasoned team across multiple disciplines with successful
                  digital transformations experiences across the globe.
                </div>
              </div>
            </div>
            <div className="flex-1 flex  items-center justify-start gap-[1rem] mt-[2rem]">
              <Image
                className="w-[5.813rem] h-[5.813rem] relative ml-[-1.3rem]"
                loading="lazy"
                width={93}
                height={93}
                alt=""
                src="/group-1261156507.svg"
              />
              <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem]">
                <h2 className="m-0 relative text-inherit leading-[120%] capitalize font-semibold font-inherit mq800:text-[1.625rem] mq800:leading-[1.938rem] mq450:text-[1.188rem] mq450:leading-[1.438rem]">
                  Value Delivered
                </h2>
                <div className="relative text-[1.125rem] leading-[1.875rem]">
                  Beyond project delivery, a commitment to deliver measurable
                  value according to your business objectives.
                </div>
              </div>
            </div>

            <div className="flex-1 flex  items-center justify-start gap-[1rem] mt-[2rem]">
              <Image
                className="w-[5.813rem] h-[5.813rem] relative ml-[-1.3rem]"
                loading="lazy"
                width={93}
                height={93}
                alt=""
                src="/group-1261156508.svg"
              />
              <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem] max-w-full">
                <h2 className="m-0 relative text-inherit leading-[120%] capitalize font-semibold font-inherit inline-block max-w-full mq800:text-[1.625rem] mq800:leading-[1.938rem] mq450:text-[1.188rem] mq450:leading-[1.438rem]">
                  Continuous Innovation
                </h2>
                <div className="relative text-[1.125rem] leading-[1.875rem]">
                  Pushing the boundaries of technology, challenging the status quo
                  of what is possible.
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section >
  );
};

export default ChooseUs;
