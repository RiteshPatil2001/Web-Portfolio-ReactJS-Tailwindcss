import React from "react";

const Connectcard = ({ src, alt, label, event }) => {
  return (
    <>
      <div className="w-fit cursor-pointer">
        <div className="phone:w-52 phone:h-64 tablet:w-44 tablet:h-52 laptop:w-64 laptop:h-72 desktop:w-64 desktop:h-72 bg-black shadow-[0_0_4px_4px_rgba(255,255,255,0.444)] z-0	rounded-xl -rotate-[22deg] hover:shadow-[0_0_20px_6px_rgba(255,255,255,0.444)]">
          <div className="phone:w-52 phone:h-64 tablet:w-44 tablet:h-52 laptop:w-64 laptop:h-72 desktop:w-64 desktop:h-72 bg-black shadow-[0_0_4px_4px_rgba(255,255,255,0.444)] z-10	rounded-xl rotate-[11deg] hover:shadow-[0_0_20px_6px_rgba(255,255,255,0.444)]">
            <div
              className="phone:w-52 phone:h-64 tablet:w-44 tablet:h-52 laptop:w-64 laptop:h-72 desktop:w-64 desktop:h-72 bg-black shadow-[0_0_4px_4px_rgba(255,255,255,0.444)] z-20	rounded-xl rotate-[10deg] hover:shadow-[0_0_20px_6px_rgba(255,255,255,0.444)] pt-6 text-white"
              onClick={event}
            >
              <img
                src={src}
                alt={alt}
                className="flex m-auto tablet:mt-1 phone:mt-2 laptop:mt-2 desktop:mt-2 phone:w-44 phone:h-44 tablet:w-32 tablet:h-32 laptop:w-44 laptop:h-44 desktop:w-44 desktop:h-44"
              />
              <h2>{label}</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Connectcard;
