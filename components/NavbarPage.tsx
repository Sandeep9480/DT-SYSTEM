import type { NextPage } from "next";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from 'next/router';

export type NavbarPageType = {
  className?: string;
};

const NavbarPage: NextPage<NavbarPageType> = ({ className = "" }) => {
  const router = useRouter();

  // Generic scroll function for all sections
  const scrollToSection = (sectionId: string, headerOffset: number = 100) => {
    const element =
      document.getElementById(sectionId) ||
      document.querySelector(`.${sectionId}-section`) ||
      document.querySelector(`[data-section="${sectionId}"]`);

    if (element) {
      setTimeout(() => {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }, 100);
    }
  };

  // Handler for section navigation
  const handleSectionClick = async (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();

    if (router.pathname !== '/') {
      await router.push('/');
      setTimeout(() => scrollToSection(sectionId), 500);
    } else {
      scrollToSection(sectionId);
    }
  };

  const [modal, setModal] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [style, setStyle] = useState({});
  const [serviceDropdown, setServiceDropdown] = useState(false);
  const [resourceDropdown, setResourceDropdown] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      if (window.innerWidth < 1240) {
        setModal(true);
        setStyle({ padding: "0px", margin: "0px" });
      } else {
        setModal(false);
        setIsMenuOpen(false);
        setStyle({});
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
    if (!isMenuOpen) {
      setServiceDropdown(false);
      setResourceDropdown(false);
    }
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

  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-4 px-4 lg:px-[4.375rem] pb-4 lg:pb-[6.812rem] box-border max-w-full flex items-center mr-[50px] p-0 m-0 ${className}`}
      style={style}
    >
      <header className="flex-1 flex flex-row items-center justify-between max-w-full gap-[1.25rem] text-left text-[1rem] text-white font-archivo relative navbar mt-[-1rem] ml-[-1.2rem] header-navbar">
        <div className={`flex items-center mt-[-5px] relative ml-[5%] xl:ml-[1rem]`}>
          <a href="/">
            <Image
              className="h-[1.469rem] relative max-w-[15rem] overflow-hidden shrink-0 cursor-pointer z-[1]"
              loading="lazy"
              width={203}
              height={24}
              alt=""
              src="/dt-systems.svg"
            />
          </a>
        </div>

        {modal && (
          <button
            className="text-white p-2 z-50 bg-transparent"
            onClick={toggleMenu}
          >
            <svg className="w-6 h-6 bg-transparent w-[2.7rem] h-[2.7rem]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        )}

        {!modal && (
          <div className="w-[55.569rem] flex flex-row items-center justify-end gap-[3.893rem] max-w-full">
            <div className="flex-1 flex flex-col items-start justify-start pt-[1.125rem] px-[0rem] pb-[0rem] box-border max-w-full">
              <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem] mt-[-1.2rem]">
                <a
                  className="[text-decoration:none] relative font-semibold text-color-4 inline-block min-w-[2.875rem] z-[1]"
                  href="/"
                >
                  Home
                </a>
                <button
                  className="[text-decoration:none] relative text-[inherit] inline-block min-w-[3.563rem] z-[1] cursor-pointer bg-transparent border-0 text-white font-archivo text-[1rem]"
                  onClick={(e) => handleSectionClick(e, 'chooseUs')}
                >
                  Why Us
                </button>
                <div className="relative flex flex-row items-start justify-start gap-[0.25rem] z-[1]">
                  <div
                    className="flex items-center gap-1 cursor-pointer justify-center"
                    onClick={toggleServiceDropdown}
                  >
                    <a className="[text-decoration:none] relative text-[inherit]">
                      Service
                    </a>
                    <Image
                      className={`w-[0.8rem] h-[1rem] relative transition-transform duration-300 ${serviceDropdown ? 'rotate-180' : ''}`}
                      width={110}
                      height={6}
                      alt=""
                      src="/sub-menu-icons.svg"

                    />
                  </div>
                  {serviceDropdown && (
                    <div
                      className="absolute top-full right-8rem bg-white shadow-lg mt-2 p-4 rounded-lg"
                      style={{
                        borderTopLeftRadius: "0",   // Top-left corner
                        borderBottomRightRadius: "0", // Bottom-right corner
                        borderTopRightRadius: "1rem",      // Top-right corner
                        borderBottomLeftRadius: "1rem"     // Bottom-left corner
                      }}
                    >
                      <a
                        href="/services-advisory"
                        className="block py-2 px-4 text-gray-800 hover:bg-orange-200 cursor-pointer whitespace-nowrap"
                        style={{ textDecoration: "none" }}
                      >
                        Advisory
                      </a>
                      <a
                        href="/ServicesImplementation"
                        className="block py-2 px-4 text-gray-800 hover:bg-orange-200 cursor-pointer whitespace-nowrap"
                        style={{ textDecoration: "none" }}
                      >
                        Implementation
                      </a>
                    </div>

                  )}
                </div>
                <div className="flex flex-row items-start justify-start z-[1]">
                  <a
                    className="[text-decoration:none] relative text-[inherit] inline-block min-w-[3.563rem] cursor-pointer"
                    onClick={onSectorsTextClick}
                  >
                    Sectors
                  </a>
                </div>
                <button
                  style={{ cursor: "pointer" }}
                  className="[text-decoration:none] relative text-[inherit] z-[1] bg-transparent border-0 text-white font-archivo text-[1rem]"
                  onClick={(e) => handleSectionClick(e, 'careers')}
                >
                  Careers
                </button>
                <div className="flex flex-row items-start justify-start gap-[0.375rem] z-[1] relative">
                  <div
                    className="flex items-center gap-1 cursor-pointer"
                    onClick={toggleResourceDropdown}
                  >
                    <a className="[text-decoration:none] relative text-[inherit]">
                      Resources
                    </a>
                    <Image
                      className={`w-[0.5rem] h-[0.5rem] relative transition-transform duration-300 ${resourceDropdown ? 'rotate-180' : ''}`}
                      width={7}
                      height={4}
                      alt=""
                      src="/vector-1.svg"
                    />
                  </div>
                  {resourceDropdown && (
                    <div
                      className="absolute top-full right-8rem bg-white shadow-lg mt-2 p-4 rounded-lg"
                      style={{
                        borderTopLeftRadius: "0",   // Top-left corner
                        borderBottomRightRadius: "0", // Bottom-right corner
                        borderTopRightRadius: "1rem", // Top-right corner
                        borderBottomLeftRadius: "1rem" // Bottom-left corner
                      }}
                    >
                      <a
                        className="block py-2 px-4 text-gray-800 hover:bg-orange-200 cursor-pointer whitespace-nowrap"
                        href="/blog"
                        style={{ textDecoration: "none" }}
                      >
                        Blog
                      </a>
                      <a
                        className="block py-2 px-4 text-gray-800 hover:bg-orange-200 cursor-pointer whitespace-nowrap"
                        href="/partners"
                        style={{ textDecoration: "none" }}
                      >
                        Partners
                      </a>
                      <a
                        className="block py-2 px-4 text-gray-800 hover:bg-orange-200 cursor-pointer whitespace-nowrap"
                        href="/case-studies"
                        style={{ textDecoration: "none" }}
                      >
                        Case Studies
                      </a>
                    </div>
                  )}
                </div>
                <button
                  className="[text-decoration:none] relative text-[inherit] bg-transparent border-0 text-white font-archivo text-[1rem] cursor-pointer"
                  onClick={(e) => handleSectionClick(e, 'contactUs')}
                >
                  Contact Us
                </button>
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
        )}

        {modal && isMenuOpen && (
          <div className="absolute top-full left-0 right-0 backdrop-blur w-[100vw] h-[100vh] z-40 left-[-1rem]" style={{ backgroundColor: "#0000009e" }}>
            <div className="flex flex-col py-6 px-4 bg-transparent items-center">
              <a href="/" className="[text-decoration:none] relative font-semibold text-color-4 py-4 border-b border-gray-700 cursor-pointer">
                Home
              </a>
              <button
                className="[text-decoration:none] relative text-[inherit] py-4 border-b border-gray-700 cursor-pointer bg-transparent border-0 text-white font-archivo text-[1rem] w-full"
                onClick={(e) => {
                  handleSectionClick(e, 'chooseUs');
                  toggleMenu();
                }}
              >
                Why Us
              </button>
              <div className="w-full">
                <div
                  className="flex flex-row items-center justify-center py-4 border-b border-gray-700 cursor-pointer"
                  onClick={toggleServiceDropdown}
                >
                  <a className="[text-decoration:none] relative text-[inherit]">
                    Service
                  </a>
                  <Image
                    className={`w-[0.588rem] h-[0.356rem] relative transition-transform duration-300 ml-2 ${serviceDropdown ? 'rotate-180' : ''}`}
                    width={9}
                    height={6}
                    alt=""
                    src="/sub-menu-icons.svg"
                  />
                </div>
                {serviceDropdown && (
                  <div className="bg-white rounded-lg w-[40%] mx-auto mt-2">
                    <a style={{ textDecoration: 'none' }} href="/services-advisory" className="block py-3 px-4 text-gray-800 hover:bg-gray-100">
                      Advisory
                    </a>
                    <a style={{ textDecoration: 'none' }} href="/ServicesImplementation" className="block py-3 px-4 text-gray-800 hover:bg-gray-100">
                      Implementation
                    </a>
                  </div>
                )}
              </div>
              <a
                className="[text-decoration:none] relative text-[inherit] py-4 border-b border-gray-700 cursor-pointer"
                onClick={onSectorsTextClick}
              >
                Sectors
              </a>
              <button
                className="[text-decoration:none] relative text-[inherit] py-4 border-b border-gray-700 cursor-pointer bg-transparent border-0 text-white font-archivo text-[1rem] w-full"
                onClick={(e) => {
                  handleSectionClick(e, 'careers');
                  toggleMenu();
                }}
              >
                Careers
              </button>
              <div className="w-full">
                <div
                  className="flex flex-row items-center justify-center py-4 border-b border-gray-700 cursor-pointer"
                  onClick={toggleResourceDropdown}
                >
                  <a className="[text-decoration:none] relative text-[inherit]">
                    Resources
                  </a>
                  <Image
                    className={`w-[0.456rem] h-[0.275rem] relative transition-transform duration-300 ml-2 ${resourceDropdown ? 'rotate-180' : ''}`}
                    width={7}
                    height={4}
                    alt=""
                    src="/vector-1.svg"
                  />
                </div>
                {resourceDropdown && (
                  <div className="bg-white rounded-lg w-[40%] mx-auto mt-2">
                    <a className="block py-3 px-4 text-gray-800 hover:bg-gray-100">
                      Blog
                    </a>
                    <a className="block py-3 px-4 text-gray-800 hover:bg-gray-100">
                      Partners
                    </a>
                    <a className="block py-3 px-4 text-gray-800 hover:bg-gray-100">
                      Case Studies
                    </a>
                  </div>
                )}
              </div>
              <button
                className="[text-decoration:none] relative text-[inherit] py-4 border-b border-gray-700 cursor-pointer bg-transparent border-0 text-white font-archivo text-[1rem] w-full"
                onClick={(e) => {
                  handleSectionClick(e, 'contactUs');
                  toggleMenu();
                }}
              >
                Contact Us
              </button>
            </div>
          </div>
        )}
      </header>
    </section>
  );
};

export default NavbarPage;
