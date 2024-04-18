import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ResumePNG from "../Assests/ResumePNG.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../Pages/Navbar";
import Footer from "../Pages/Footer";
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
      <div className="w-full p-8 phone:pt-8 tablet:p-20 laptop:p-28 desktop:p-28  text-center">
        <label
          className="justify-center bg-[gold] text-black font-sans rounded-lg w-fit cursor-pointer hover:scale-90 active:scale-100 phone:p-2 tablet:p-3 laptop:p-6 desktop:p-6 phone:text-lg tablet:text-2xl laptop:text-2xl desktop:text-2xl"
          onClick={handleDownload}
        >
          <b>Download Resume</b>
          <FontAwesomeIcon
            className="phone:ml-2 tablet:ml-4 desktop:ml-4 laptop:ml-4 relative top-0.5"
            icon={faFileArrowDown}
          />
        </label>
        <img
          src={ResumePNG}
          alt="Resume pic"
          className="w-full phone:mt-8 tablet:mt-16 desktop:mt-16 laptop:mt-16 rounded-xl	"
        />
      </div>
      <Footer />
    </>
  );
};

export default Resume;
