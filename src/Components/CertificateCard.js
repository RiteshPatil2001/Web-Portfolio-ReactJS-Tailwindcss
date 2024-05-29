import React from "react";

const CertificateCard = ({ src, alt, title, date }) => {
  return (
    <div className="cd-timeline-block">
      <div className="cd-timeline-img"></div>
      <div className="cd-timeline-content">
        <img src={src} alt={alt} className="rounded-lg cursor-pointer" />
        <label className="phone:px-2 tablet:px-3 laptop:px-4 desktop:px-4 phone:text-lg tablet:text-xl laptop:text-2xl desktop:text-2xl font-bold desktop:pt-8 laptop:pt-8 tablet:pt-8 phone:pt-4">
          {title}
        </label>
        <span className="cd-date">{date}</span>
      </div>
    </div>
  );
};

export default CertificateCard;
