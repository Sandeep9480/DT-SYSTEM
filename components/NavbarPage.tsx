import type { NextPage } from "next";
import { use, useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

export type NavbarPageType = {
  className?: string;
};

const NavbarPage: NextPage<NavbarPageType> = ({ className = "" }) => {
  const router = useRouter();
  const [modal, setModal] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [style, setStyle] = useState({});
  const [serviceDropdown, setServiceDropdown] = useState(false);
  const [resourceDropdown, setResourceDropdown] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      if (window.innerWidth < 1034) {
        setModal(true);
        setStyle({ padding: "0px", margin: "0px" }); // Corrected: Using an object for the style.
      } else {
        setModal(false);
        setIsMenuOpen(false);
        setStyle({}); // Reset style for larger screens.
      }
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => {
      window.removeEventListener("resize", checkScreen);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleServiceDropdown = () => {
    setServiceDropdown(!serviceDropdown);
  };

  const toggleResourceDropdown = () => {
    setResourceDropdown(!resourceDropdown);
  };

  const onDTSYSTEMSClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='dTSystemsBanner011']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onSectorsTextClick = useCallback(() => {
    router.push("/sectors");
  }, [router]);

  const onGroupContainerClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='groupContainer']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  console.log(modal);

  return (
    <section className="self-stretch  flex flex-row items-start justify-start pt-4 px-4 lg:px-[4.375rem] pb-4 lg:pb-[6.812rem] box-border max-w-full  flex items-center mr-[50px] p-0 m-0" style={style}>
      <header className="flex-1 flex flex-row items-center justify-between max-w-full gap-[1.25rem] text-left text-[1rem] text-white font-archivo relative navbar
      ">
        <div className={`flex items-center mt-[-5px] relative ml-[5%]`}>
          <Image
            className="h-[1.469rem] relative max-w-[15rem] overflow-hidden shrink-0 cursor-pointer z-[1]"
            loading="lazy"
            width={203}
            height={24}
            alt=""
            src="/dt-systems.svg"
            onClick={onDTSYSTEMSClick}
          />
        </div>

        {
          modal && (
            <button
              className="text-white p-2 z-50 bg-transparent"
              onClick={toggleMenu}
            >
              <svg className="w-6 h-6 bg-transparent  w-[2.7rem] h-[2.7rem]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          )
        }

        {
          !modal && (
            <div className="w-[55.569rem] flex flex-row items-center justify-end gap-[3.893rem] max-w-full ">
              <div className="flex-1 flex flex-col items-start justify-start pt-[1.125rem] px-[0rem] pb-[0rem] box-border max-w-full">
                <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem] mt-[-1.2rem]">
                  <a
                    className="[text-decoration:none] relative font-semibold text-color-4 inline-block min-w-[2.875rem] z-[1]"
                    href="/"
                  >
                    Home
                  </a>
                  <a
                    className="[text-decoration:none] relative text-[inherit] inline-block min-w-[3.563rem] z-[1]"
                    href="#"
                  >
                    Why Us
                  </a>
                  <div className="relative flex flex-row items-start justify-start gap-[0.25rem] z-[1] ">
                    <div
                      className="flex items-center gap-1 cursor-pointer justify-center"
                      onClick={toggleServiceDropdown}
                    >
                      <a className="[text-decoration:none] relative text-[inherit]  ">
                        Service
                      </a>
                      <Image
                        className={`w-[0.588rem] h-[0.356rem] relative transition-transform duration-300 ${serviceDropdown ? 'rotate-180' : ''}`}
                        width={9}
                        height={6}
                        alt=""
                        src="/sub-menu-icons.svg"
                      />
                    </div>
                    {serviceDropdown && (
                      <div className="absolute top-full left-0 bg-white rounded-md shadow-lg mt-2">
                        <a style={{ textDecoration: "none" }} href="/services-advisory" className="block py-2 px-4 text-gray-800 hover:bg-gray-100 cursor-pointer whitespace-nowrap">
                          Advisory
                        </a>
                        <a style={{ textDecoration: "none" }} href="/ServicesImplementation" className="block py-2 px-4 text-gray-800 hover:bg-gray-100 cursor-pointer whitespace-nowrap">
                          Implementation
                        </a>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-row items-start justify-start z-[1]">
                    <a
                      href="/sectors"
                      className="[text-decoration:none] relative text-[inherit] inline-block min-w-[3.563rem] cursor-pointer"
                      onClick={onSectorsTextClick}
                    >
                      Sectors
                    </a>
                  </div>
                  <a
                    className="[text-decoration:none] relative text-[inherit] z-[1]"
                    href="#"
                  >
                    Careers
                  </a>
                  <div className="flex flex-row items-start justify-start gap-[0.375rem] z-[1] relative">
                    <div
                      className="flex items-center gap-1 cursor-pointer"
                      onClick={toggleResourceDropdown}
                    >
                      <a className="[text-decoration:none] relative text-[inherit]">
                        Resources
                      </a>
                      <Image
                        className={`w-[0.456rem] h-[0.275rem] relative transition-transform duration-300 ${resourceDropdown ? 'rotate-180' : ''}`}
                        width={7}
                        height={4}
                        alt=""
                        src="/vector-1.svg"
                      />
                    </div>
                    {resourceDropdown && (
                      <div className="absolute top-full right-0 bg-white rounded-md shadow-lg mt-2 mr-[30px]">
                        <a className="block py-2 px-4 text-gray-800 hover:bg-gray-100 cursor-pointer whitespace-nowrap">
                          Blog
                        </a>
                        <a className="block py-2 px-4 text-gray-800 hover:bg-gray-100 cursor-pointer whitespace-nowrap">
                          Partners
                        </a>
                        <a className="block py-2 px-4 text-gray-800 hover:bg-gray-100 cursor-pointer whitespace-nowrap">
                          Case Studies
                        </a>
                      </div>
                    )}
                  </div>
                  <div
                    className="flex flex-row items-start justify-start cursor-pointer z-[1]"
                    onClick={onGroupContainerClick}
                  >
                    <a
                      className="[text-decoration:none] relative text-[inherit]"
                      href="#"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>

              <button className="cursor-pointer border-white border-[1px] border-solid py-[1rem] px-[2rem] bg-[transparent] h-[3.313rem] w-[11.438rem] rounded-8xs box-border flex flex-row items-start justify-start z-[1] hover:bg-gainsboro-200 hover:border-gainsboro-100 hover:border-[1px] hover:border-solid hover:box-border">
                <div className="h-[3.313rem] w-[11.438rem] relative rounded-8xs border-white border-[1px] border-solid box-border hidden" />
                <a
                  className="[text-decoration:none] flex-1 relative text-[1rem] font-archivo text-white text-center inline-block min-w-[7.5rem] z-[1]"
                  href="#"
                >
                  Request a Demo
                </a>
              </button>
            </div>
          )
        }
        {
          modal && isMenuOpen && (
            <div className="absolute top-full left-0 right-0 backdrop-blur w-[100vw] h-[100vh] z-40 " style={{ backgroundColor: "#0000009e" }}>
              <div className="flex flex-col py-6 px-4 bg-transparent items-center">
                <a href="/" className="[text-decoration:none] relative font-semibold text-color-4 py-4 border-b border-gray-700 cursor-pointer">
                  Home
                </a>
                <a className="[text-decoration:none] relative text-[inherit] py-4 border-b border-gray-700 cursor-pointer">
                  Why Us
                </a>
                <div className="w-full">
                  <div
                    className="flex flex-row items-center justify-between py-4 border-b border-gray-700 cursor-pointer justify-center" style={{ justifyContent: "center" }}
                    onClick={toggleServiceDropdown}
                  >
                    <a className="[text-decoration:none] relative text-[inherit] cursor-pointer">
                      Service
                    </a>
                    <Image
                      className={`w-[0.588rem] h-[0.356rem] relative transition-transform duration-300 ${serviceDropdown ? 'rotate-180' : ''}`}
                      width={9}
                      height={6}
                      alt=""
                      src="/sub-menu-icons.svg"
                    />
                  </div>
                  {serviceDropdown && (
                    <div className="bg-white rounded-b-md mt-[-1px] mb-[20px]  w-[40%] m-auto rounded-lg break-words">
                      <a href="/services-advisory" className="block py-3 px-4 text-gray-800 hover:bg-gray-100 cursor-pointer" style={{ textDecoration: "none" }}>
                        Advisory
                      </a>
                      <a href="/ServicesImplementation" className="block py-3 px-4 text-gray-800 hover:bg-gray-100 cursor-pointer" style={{ textDecoration: "none" }}>
                        Implementation
                      </a>
                    </div>
                  )}
                </div>
                <a
                  href="/sectors"
                  className="[text-decoration:none] relative text-[inherit] py-4 border-b border-gray-700 cursor-pointer"
                  onClick={onSectorsTextClick}
                >
                  Sectors
                </a>
                <a className="[text-decoration:none] relative text-[inherit] py-4 border-b border-gray-700 cursor-pointer">
                  Careers
                </a>
                <div className="w-full">
                  <div
                    className="flex flex-row items-center justify-between py-4 border-b border-gray-700 cursor-pointer" style={{ justifyContent: "center" }}
                    onClick={toggleResourceDropdown}
                  >
                    <a className="[text-decoration:none] relative text-[inherit]">
                      Resources
                    </a>
                    <Image
                      className={`w-[0.456rem] h-[0.275rem] relative transition-transform duration-300 ${resourceDropdown ? 'rotate-180' : ''}`}
                      width={7}
                      height={4}
                      alt=""
                      src="/vector-1.svg"
                    />
                  </div>
                  {resourceDropdown && (
                    <div className="bg-white rounded-b-md mt-[-1px] mb-[20px] w-[40%] m-auto rounded-lg break-words">
                      <a className="block py-3 px-4 text-gray-800 hover:bg-gray-100 cursor-pointer">
                        Blog
                      </a>
                      <a className="block py-3 px-4 text-gray-800 hover:bg-gray-100 cursor-pointer">
                        Partners
                      </a>
                      <a className="block py-3 px-4 text-gray-800 hover:bg-gray-100 cursor-pointer">
                        Case Studies
                      </a>
                    </div>
                  )}
                </div>
                <a
                  className="[text-decoration:none] relative text-[inherit] py-4 border-b border-gray-700 cursor-pointer"
                  onClick={onGroupContainerClick}
                >
                  Contact Us
                </a>
                <div className="pt-6">
                  <button className="cursor-pointer border-white border-[1px] border-solid py-[1rem] px-[2rem]  bg-[transparent] w-full rounded-8xs box-border flex flex-row items-center justify-center hover:bg-gainsboro-200 hover:border-gainsboro-100">
                    <a className="[text-decoration:none] relative text-[1rem] font-archivo text-white text-center cursor-pointer">
                      Request a Demo
                    </a>
                  </button>
                </div>
              </div>
            </div>
          )
        }
      </header >
    </section >
  );
};

export default NavbarPage;
