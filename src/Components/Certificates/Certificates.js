import React from "react";
import "./Certificates.css";
import IBMPython from "../../Assests/IBMPython.png";
import OracleCertificate from "../../Assests/OracleCertificate.png";
import GoogleCertificate from "../../Assests/GoogleCertificate.jpg";
import Header from "../Header/Navbar";
import Footer from "../Footer/Footer";

const Certificates = () => {
  return (
    <>
      <Header />
      <div className="w-full p-16 justify-center pb-8 text-center">
        <h1 className="text-center font-bold uppercase text-5xl	text-white font-sans">
          My{" "}
          <label className="text-[gold]">Additional Skillset</label>
        </h1>
        <label className="text-white text-xl">
          Alongside my studies, I'm also working on enhancing my skills through
          various certification programs.
        </label>
        <div className="p-10">
          <div className="h-full">
            <label className="text-white text-3xl font-serif border-b-2 border-[gold]">
              Data Science with Machine Learning
            </label>
            <br></br>
            <label className="text-[gold] text-2xl p-10 pb-32">
              Currently Ongoing - Completes in June 2024<br></br>Certificate
              Awaits
            </label>
          </div>
          <div className="h-full">
            <label className="text-white text-3xl font-serif border-b-2 border-[gold]">
              Python For Data Science by IBM
            </label>
            <img
              src={IBMPython}
              alt="IBM Certificate pic"
              className="h-full w-full mt-6 mb-32 rounded-2xl"
            />
          </div>
          <div className="h-full">
            <label className="text-white text-3xl font-serif border-b-2 border-[gold]">
              Oracle Cloud Infrastructure 2023
            </label>
            <img
              src={OracleCertificate}
              alt="Oracle Certificate pic"
              className="h-full w-full mt-6 mb-32 rounded-2xl"
            />
          </div>
          <div className="h-full">
            <label className="text-white text-3xl font-serif border-b-2 border-[gold]">
              Google Digital Unlocked - The Fundametal Of Digital Marketing
            </label>
            <img
              src={GoogleCertificate}
              alt="Google Certificate pic"
              className="h-full w-full mt-6 mb-32 border-1 rounded-2xl"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Certificates;
