import React, { useEffect } from "react";
import IBMPython from "../Assests/IBMPython.png";
import OracleCertificate from "../Assests/OracleCertificate.png";
import GoogleCertificate from "../Assests/GoogleCertificate.jpg";
import Header from "./Header/Navbar";
import Footer from "./Footer/Footer";
import { useNavigate } from "react-router-dom";

const Certificates = () => {
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

  return (
    <>
      <Header />
      <div className="w-full phone:p-4 tablet:p-12 laptop:p-16 desktop:p-16 justify-center pb-8 text-center">
        <h1 className="text-center font-bold uppercase phone:text-xl tablet:text-4xl laptop:text-5xl desktop:text-5xl	text-white font-sans">
          My <label className="text-[gold]">Additional Skillset</label>
        </h1>
        <label className="text-white phone:text-sm tablet:text-base laptop:text-xl desktop:text-xl">
          Alongside my studies, I'm also working on enhancing my skills through
          various certification programs.
        </label>
        <div className="phone:p-0 phone:pt-12 tablet:p-8 laptop:p-10 desktop:p-10">
          <div className="h-full">
            <label className="text-white phone:text-base tablet:text-2xl laptop:text-3xl desktop:text-3xl font-serif border-b-2 border-[gold]">
              Data Science with Machine Learning
            </label>
            <br></br>
            <label className="text-[gold] phone:text-base tablet:text-xl laptop:text-2xl desktop:text-2xl  phone:p-4 tablet:p-8 laptop:p-10 desktop:p-10 phone:pb-24 tablet:pb-32 desktop:pb-32 laptop:pb-32">
              Currently Ongoing - Completes in June 2024<br></br>Certificate
              Awaits
            </label>
          </div>
          <div className="h-full ph">
            <label className="text-white phone:text-base tablet:text-2xl laptop:text-3xl desktop:text-3xl font-serif border-b-2 border-[gold]">
              Python For Data Science by IBM
            </label>
            <img
              src={IBMPython}
              alt="IBM Certificate pic"
              className="h-full w-full phone:mt-3 mt-6 phone:mb-16 tablet:mb-20 laptop:mb-32 desktop:mb-32 phone:rounded-lg tablet:rounded-xl rounded-2xl"
            />
          </div>
          <div className="h-full">
            <label className="text-white phone:text-base tablet:text-2xl laptop:text-3xl desktop:text-3xl font-serif border-b-2 border-[gold]">
              Oracle Cloud Infrastructure 2023
            </label>
            <img
              src={OracleCertificate}
              alt="Oracle Certificate pic"
              className="h-full w-full phone:mt-3 mt-6 phone:mb-16 tablet:mb-20 laptop:mb-32 desktop:mb-32 phone:rounded-lg tablet:rounded-xl rounded-2xl"
            />
          </div>
          <div className="h-full">
            <label className="text-white phone:text-base tablet:text-2xl laptop:text-3xl desktop:text-3xl font-serif border-b-2 border-[gold]">
              Google Digital Unlocked - The Fundametal Of Digital Marketing
            </label>
            <img
              src={GoogleCertificate}
              alt="Google Certificate pic"
              className="h-full w-full phone:mt-3 mt-6 phone:mb-16 tablet:mb-20 laptop:mb-32 desktop:mb-32 phone:rounded-lg tablet:rounded-xl rounded-2xl"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Certificates;
