import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type ItServiceManagemant = {
  className?: string;
  text?: string;
  deliverResilientITServices?: string;
  unburdenYourITServicesStaff?: string;
  createResilientAdaptablePeople?: string;
  deliverITServicesOnASingle?: string;
  createResilientAdaptablePeople1?: string;
  deliverITServicesOnASingle1?: string;

  /** Style props */
  frameDivHeight?: CSSProperties["height"];
  frameDivHeight1?: CSSProperties["height"];
  textWidth?: CSSProperties["width"];
  textHeight?: CSSProperties["height"];
  frameDivWidth?: CSSProperties["width"];
  frameDivHeight2?: CSSProperties["height"];
  unburdenYourITContainerWidth?: CSSProperties["width"];
};

const ItServiceManagemant: NextPage<ItServiceManagemant> = ({
  className = "",
  frameDivHeight,
  frameDivHeight1,
  text,
  textWidth,
  textHeight,
  deliverResilientITServices,
  frameDivWidth,
  frameDivHeight2,
  unburdenYourITContainerWidth,
  unburdenYourITServicesStaff,
  createResilientAdaptablePeople,
  deliverITServicesOnASingle,
  createResilientAdaptablePeople1,
  deliverITServicesOnASingle1,
}) => {
  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      height: frameDivHeight,
    };
  }, [frameDivHeight]);

  const frameDiv2Style: CSSProperties = useMemo(() => {
    return {
      height: frameDivHeight1,
    };
  }, [frameDivHeight1]);

  const textStyle: CSSProperties = useMemo(() => {
    return {
      width: textWidth,
      height: textHeight,
    };
  }, [textWidth, textHeight]);

  const frameDiv3Style: CSSProperties = useMemo(() => {
    return {
      width: frameDivWidth,
      height: frameDivHeight2,
    };
  }, [frameDivWidth, frameDivHeight2]);

  const unburdenYourITContainerStyle: CSSProperties = useMemo(() => {
    return {
      width: unburdenYourITContainerWidth,
    };
  }, [unburdenYourITContainerWidth]);

  return (
    <div
      className={` w-[51.5rem] h-[21.25rem] flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border text-left text-[1.75rem] text-color-5 font-archivo mq800:justify-start mq800:p-[0]  ${className}  `}
      style={frameDiv1Style}
    >
      <div
        className="h-[21.25rem] w-[37.75rem] flex flex-col items-start justify-start gap-[1rem]"
        style={frameDiv2Style}
      >
        <h3
          className="m-0 w-[24.813rem] h-[3.125rem] relative text-inherit leading-[3.125rem] font-semibold font-inherit inline-block shrink-0 mq450:text-[1.375rem] mq450:leading-[2.5rem]"
          style={textStyle}
        >
          {text}
        </h3>
        <div className="w-[37.75rem] relative text-[1.125rem] leading-[1.875rem] text-color-6 inline-block mq800:w-[50%]">
          {deliverResilientITServices}
        </div>
        <div
          className="w-[33.313rem] h-[10.5rem] flex flex-col items-start justify-start gap-[0.5rem] text-[1.5rem] mq800:hidden "
          style={frameDiv3Style}
        >
          <div className="w-[5.813rem] h-[2.5rem] relative leading-[2.5rem] font-semibold inline-block shrink-0 mq450:text-[1.188rem] mq450:leading-[2rem]">
            Benefits
          </div>
          <div
            className="w-[33.313rem] relative text-[1.125rem] leading-[1.875rem] text-color-6 inline-block"
            style={unburdenYourITContainerStyle}
          >
            <ul className="m-0 font-inherit text-inherit pl-[1.333rem]">
              <li className="my-[undefined] mx-[undefined]">
                {unburdenYourITServicesStaff}
              </li>
              <li className="my-[undefined] mx-[undefined]">
                {createResilientAdaptablePeople1}
              </li>
              <li>{deliverITServicesOnASingle1}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItServiceManagemant;
