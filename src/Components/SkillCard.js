import React from "react";

const SkillCard = ({ src, alt, label, rating }) => {
  const ratingStyle = {
    "--rating": rating,
  };

  return (
    <>
      <div className="image-container relative cardcolors flex h-fit rounded-xl p-2 items-center justify-center overflow-hidden duration-300 cursor-pointer shadow-[2px_2px_8px_1px_rgba(0,0,0,0.4)]">
        <img src={src} alt={alt} className="size-32 phone:size-24" />
        <div className="overlay absolute bg-[rgba(0,0,0,0.6)] bottom-0 left-0 w-full h-0 duration-300 overflow-hidden">
          <label className="phone:text-2xl text-3xl font-bold capitalize overlay-text absolute top-2/4 left-2/4 duration-500 text-white text-center cursor-pointer">
            {label}
            <div className="Stars" style={ratingStyle}></div>
          </label>
        </div>
      </div>
    </>
  );
};

export default SkillCard;
