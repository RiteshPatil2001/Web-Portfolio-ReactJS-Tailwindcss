import React from "react";

const CertificateCard = ({ src, alt, label }) => {
  return (
    <>
      <div className="h-full">
        <label className="text-white phone:text-base tablet:text-2xl laptop:text-3xl desktop:text-3xl font-serif border-b-2 border-[gold]">
          {label}
        </label>
        <img
          src={src}
          alt={alt}
          className="h-full w-full phone:mt-3 mt-6 phone:mb-16 tablet:mb-20 laptop:mb-32 desktop:mb-32 phone:rounded-lg tablet:rounded-xl rounded-2xl"
        />
      </div>
    </>
  );
};

export default CertificateCard;
