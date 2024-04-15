import React, { useEffect } from "react";
import "./Resume.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ResumePNG from "../../Assests/ResumePNG.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../Header/Navbar";
import Footer from "../Footer/Footer";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';

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
      <div className="w-full p-28 text-center">
        <label
          className="justify-center bg-[gold] text-black font-sans rounded-lg p-4 text-2xl w-fit cursor-pointer hover:scale-90 active:scale-100"
          onClick={handleDownload}
        >
          <b>Download Resume</b>
          <FontAwesomeIcon
            className="ml-4 relative top-0.5"
            icon={faFileArrowDown}
          />
        </label>
        <img
          src={ResumePNG}
          alt="Resume pic"
          className="w-full mt-16 rounded-xl	"
        />
      </div>
      <Footer />
    </>
  );
};

export default Resume;
