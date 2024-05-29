import React from "react";

const Connectcard = ({ src, alt, label, event, btntext }) => {
  return (
    <div className="w-fit cursor-pointer">
      <div
        className="cardcolors w-80 h-96 phone:w-72 tablet:w-96 shadow-lg z-0 rounded-xl p-4 overflow-hidden flex flex-col items-center"
        onClick={event}
      >
        <img src={src} alt={alt} className="mx-auto"></img>
        <p className="text-xl font-semibold font-poppins">{label}</p>
        <label
          onClick={event}
          className="w-44 phone:w-40 phone:text-xl bg-black py-2 rounded-md mt-auto flex justify-center items-center text-white font-bold text-2xl cursor-pointer hover:scale-110 active:scale-100"
        >
          {btntext}
        </label>
      </div>
    </div>
  );
};

export default Connectcard;
