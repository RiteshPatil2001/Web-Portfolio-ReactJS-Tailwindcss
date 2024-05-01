import React from "react";

const CustomInputArea = ({
    src,
    alt,
    projectTitle,
    projectdesc,
    projecttech,
    onClick,
  
}) => {
  return (
    <>
      <div className="laptop:flex desktop:flex align-horizontal w-full h-fit rounded-lg bg-[#9ee4d918] overflow-hidden mb-24">
          <img
            src={src}
            alt={alt}
            className="desktop:w-5/12 laptop:w-5/12 cursor-pointer"
          />
          <div className="p-4">
            <label className="border-b-2 border-[gold] phone:text-lg tablet:text-xl laptop:text-2xl desktop:text-2xl font-serif">
              {projectTitle}
            </label>
            <label className="phone:pt-2 tablet:pt-3 laptop:pt-4 desktop:pt-4 phone:text-sm tablet:text-base font-sans text-justify laptop:text-lg desktop:text-lg ">
              {projectdesc}
            </label>
            <label className="phone:pt-3 tablet:pt-3 laptop:pt-4 desktop:pt-4 phone:pl-1 tablet:pl-2 laptop:pl-4 desktop:pl-4 font-sans phone:mb-3 tablet:mb-3 ">
              <label className="text-[gold]">
                <b>Technology Used -</b>{" "}
              </label>{" "}
                {projecttech}
            </label>
            <br></br>
            <label
              className="border-2 border-[gold] text-[gold] bg-black phone:text-sm phone:p-2 tablet:p-2 laptop:p-3 desktop:p-3 float-right rounded-lg cursor-pointer hover:scale-90 active:scale-100 phone:mb-3 tablet:mb-3"
              onClick={onClick}
            >
              GitHub Link
            </label>     
          </div>
        </div>
    </>
  );
};

export default CustomInputArea;
