import React from "react";

const SkillCard = ({ src, alt, label }) => {
  return (
    <>
      <div className="image-container relative flex border-1 border-yellow-400 h-fit rounded-xl p-2 items-center justify-center overflow-hidden shadow-md duration-300 hover:shadow-[0_0_12px_6px_rgba(255,215,0,0.444)] hover:scale-110 cursor-pointer">
        <img src={src} alt={alt} className="size-32 phone:size-24" />
        <div className="overlay absolute bg-[rgba(0,0,0,0.5)] bottom-0 left-0 w-full h-0 duration-300 overflow-hidden">
          <label className="text-center phone:text-2xl text-3xl font-semibold capitalize overlay-text absolute top-2/4 left-2/4 duration-500 text-white cursor-pointer">
            {label}
          </label>
        </div>
      </div>
    </>
  );
};

export default SkillCard;
