import type { NextPage } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";

export type ConnectWithUsType = {
  className?: string;
};

const ConnectWithUs: NextPage<ConnectWithUsType> = ({ className = "" }) => {
  const [style, setStyle] = useState({});
  useEffect(() => {
    const checkScreen = () => {
      if (window.innerWidth < 1034) {

        setStyle({ display: "none" }); // Corrected: Using an object for the style.
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
    <div className="w-full mx-auto px-8 flex flex-row bg-none gap-[10rem]">
      {/* Left side - Form */}
      <div className="flex-1">
        <form className="grid grid-cols-2 gap-x-10 gap-y-10">
          <div className="flex flex-col">
            <input
              type="text"
              placeholder="Name*"
              className="border-b border-gray-200 pb-3 outline-none text-lg placeholder:text-gray-800 text-muted-foreground opacity-50 text-[17px] border-b border-gray-400"
            />
          </div>
          <div className="flex flex-col">
            <input
              type="email"
              placeholder="Email*"
              className="border-b border-gray-200 pb-3 outline-none text-lg placeholder:text-gray-800 text-muted-foreground opacity-50 text-[17px] border-b border-gray-400"
            />
          </div>
          <div className="flex flex-col mt-7">
            <input
              type="tel"
              placeholder="Phone Number"
              className="border-b border-gray-200 pb-3 outline-none text-lg placeholder:text-gray-800 text-muted-foreground opacity-50 text-[17px] border-b border-gray-400"
            />
          </div>
          <div className="flex flex-col mt-7">
            <input
              type="text"
              placeholder="Country*"
              className="border-b border-gray-200 pb-3 outline-none text-lg placeholder:text-gray-800 text-muted-foreground opacity-50 text-[17px] border-b border-gray-400"
            />
          </div>
          <div className="flex flex-col mt-7">
            <input
              type="text"
              placeholder="Company Name*"
              className="border-b border-gray-200 pb-3 outline-none text-lg placeholder:text-gray-800 text-muted-foreground opacity-50 text-[17px] border-b border-gray-400"
            />
          </div>
          <div className="flex flex-col mt-7">
            <input
              type="text"
              placeholder="Position*"
              className="border-b border-gray-200 pb-3 outline-none text-lg placeholder:text-gray-800 text-muted-foreground opacity-50 text-[17px] border-b border-gray-400"
            />
          </div>
          <div className="col-span-2 flex flex-col mt-7">
            <input
              type="text"
              placeholder="Message"
              className="border-b border-gray-200 pb-3 outline-none text-lg placeholder:text-gray-800 text-muted-foreground opacity-50 text-[17px] border-b border-gray-400"
            />
          </div>
          <div>
            <button className="mt-6  md:w-[20%] text-[20px] rounded-[5px] px-12 py-3 border border-gray-800 text-gray-800 flex justify-center items-center bg-transparent">
              Submit
            </button>
          </div>
        </form>
      </div>

      {/* Right side - Text */}
      <div className="flex-1 ml-0 md:ml-[10rem]  md:block mq500:hidden" style={style}>
        <h2 className="text-[3rem] font-bold leading-[1.1] text-gray-900 m-0">
          Connect with us!
          <br />
          Let's Grow..
        </h2>
        <p className="text-gray-800 mt-6 text-lg leading-relaxed max-w-[70%] w-[60%] opacity-50">
          We prioritize responding to your inquiries promptly to ensure you receive the assistance you need in a timely manner.
        </p>
      </div>

    </div>
  );
};

export default ConnectWithUs;
