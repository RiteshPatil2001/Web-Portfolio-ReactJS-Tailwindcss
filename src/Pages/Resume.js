import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Document, Page, pdfjs } from "react-pdf";
import Header from "../Components/Navbar";
import Footer from "../Components/Footer";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

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

        <Document
          file="/Ritesh_Patil_Resume.pdf"
          className="flex flex-col items-center mt-10"
        >
          {[1, 2].map((page) => (
            <Page
              pageNumber={page}
              width={Math.min(window.innerWidth * 0.9, 900)}
              className="bg-white shadow-2xl rounded-xl mb-4"
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />
          ))}
        </Document>
      </div>
      <Footer />
    </>
  );
};

export default Resume;
