import React from "react";
import PropTypes from "prop-types";

const ProjectCard = ({
  img = false,
  src = "",
  alt = "",
  title,
  description,
  technologies,
  button = false,
  onClick = () => {},
}) => {
  return (
    <div className="cd-timeline-block">
      <div className="cd-timeline-img"></div>
      <div className="cd-timeline-content">
        {img && <img className="rounded-lg mb-6" src={src} alt={alt} />}
        <div className="phone:px-2 tablet:px-3 laptop:px-4 desktop:px-4 phone:text-lg tablet:text-xl laptop:text-2xl desktop:text-2xl font-bold text-center">
          {title}
        </div>
        <div className="cd-description phone:p-2 tablet:p-3 laptop:p-4 desktop:p-4 font-medium phone:text-sm tablet:text-base text-justify laptop:text-lg desktop:text-lg">
          {description}
        </div>
        <div className="phone:pt-3 tablet:pt-3 laptop:pt-4 desktop:pt-4 phone:pl-1 tablet:pl-2 laptop:pl-4 desktop:pl-4 font-sans phone:mb-3 tablet:mb-3">
          <b>Technology Used - </b>
          <span className="font-medium phone:text-sm tablet:text-base text-justify laptop:text-lg desktop:text-lg">
            {technologies}
          </span>
        </div>
        {button && (
          <label
            onClick={onClick}
            className="w-44 phone:w-40 bg-black py-2 rounded-md mt-8 flex justify-center items-center text-white font-bold text-2xl phone:text-xl cursor-pointer hover:scale-110 active:scale-100 mx-auto"
          >
            Github Link
          </label>
        )}
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  img: PropTypes.bool,
  src: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  technologies: PropTypes.string.isRequired,
  button: PropTypes.bool,
  onClick: PropTypes.func,
};

export default ProjectCard;
