import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ResumePNG from "../Assests/Resume_Png.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../Components/Navbar";
import Footer from "../Components/Footer";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Resume = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
    const unlisten = () => {
      window.scrollTo(0, 0);
    };
    navigate({ unlisten });
    return () => {
      navigate({ unlisten: undefined });
    };
  }, [navigate]);

  const handleDownload = () => {
    const pdfUrl = process.env.PUBLIC_URL + "/Ritesh_Patil_Resume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Ritesh_Patil_Resume.pdf";
    link.click();
  };

  return (
    <>
      <Header />
      <div className="w-full p-8 phone:pt-24 tablet:p-24 laptop:p-32 desktop:p-32  text-center">
        <label
          onClick={handleDownload}
          className="w-80 phone:w-60 phone:text-lg bg-black desktop:py-3 laptop:py-3 tablet:py-2 phone:py-2 rounded-md mt-auto flex justify-center items-center text-white font-bold text-2xl cursor-pointer hover:scale-110 active:scale-100 mx-auto"
        >
          Download Resume
          <FontAwesomeIcon
            className="phone:ml-2 tablet:ml-4 desktop:ml-4 laptop:ml-4 relative top-0.5"
            icon={faFileArrowDown}
          />
        </label>

        <img
          src={ResumePNG}
          alt="Resume pic"
          className="w-full phone:mt-8 tablet:mt-16 desktop:mt-16 laptop:mt-16 rounded-xl	shadow-2xl"
        />
      </div>
      <Footer />
    </>
  );
};

export default Resume;
