import React, { useEffect } from "react";
import IBMPython from "../Assests/IBMPython.png";
import OracleCertificate from "../Assests/OracleCertificate.png";
import GoogleCertificate from "../Assests/GoogleCertificate.jpg";
import Header from "../Components/Navbar";
import Footer from "../Components/Footer";
import CertificateCard from "../Components/CertificateCard";
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

  useEffect(() => {
    const $timelineBlocks = document.querySelectorAll(".cd-timeline-block");
    $timelineBlocks.forEach((block) => {
      if (block.offsetTop > window.scrollY + window.innerHeight * 0.75) {
        block.querySelector(".cd-timeline-img").classList.add("is-hidden");
        block.querySelector(".cd-timeline-content").classList.add("is-hidden");
      }
    });

    const handleScroll = () => {
      $timelineBlocks.forEach((block) => {
        if (
          block.offsetTop <= window.scrollY + window.innerHeight * 0.75 &&
          block
            .querySelector(".cd-timeline-img")
            .classList.contains("is-hidden")
        ) {
          block.querySelector(".cd-timeline-img").classList.remove("is-hidden");
          block
            .querySelector(".cd-timeline-content")
            .classList.remove("is-hidden");
          block.querySelector(".cd-timeline-img").classList.add("bounce-in");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Header />
      <div className="w-full phone:p-4 phone:pt-8 tablet:p-12 laptop:p-16 desktop:p-16 desktop:pt-40 laptop:pt-40 tablet:pt-32 text-black">
        <h1 className="text-center font-bold uppercase phone:text-xl tablet:text-4xl laptop:text-5xl desktop:text-5xl	text-[#056583] font-sans phone:mt-16 laptop:mb-12 desktop:mb-12">
          Additional <label className="text-[#b73535]">Skills</label>
        </h1>
        <section id="cd-timeline" className="cd-container">
          <CertificateCard
            src={OracleCertificate}
            alt=""
            title="Oracle Cloud Infrastructure 2023"
            date="September 2023 - Upto September 2025"
          />
          <CertificateCard
            src={IBMPython}
            alt=""
            title="Python For Data Science by IBM"
            date="September 2022"
          />
          <CertificateCard
            src={GoogleCertificate}
            alt=""
            title="Google Digital Unlocked - The Fundametal Of Digital Marketing"
            date="October 2019"
          />
          <CertificateCard
            src={OracleCertificate}
            alt=""
            title="Oracle Cloud Infrastructure 2023"
            date="September 2023"
          />
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Certificates;
