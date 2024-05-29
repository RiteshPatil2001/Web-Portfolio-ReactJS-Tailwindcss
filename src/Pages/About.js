import React, { useEffect } from "react";
import SkillCard from "../Components/SkillCard";
import Java from "../Assests/Java.png";
import CPP from "../Assests/CPP.png";
import Python from "../Assests/Python.png";
import MySQL from "../Assests/MySQL.png";
import ReactL from "../Assests/React.png";
import HTML from "../Assests/HTML.png";
import CSS from "../Assests/Css.png";
import Git from "../Assests/Git.png";
import SEO from "../Assests/SEO.png";
import Postman from "../Assests/Postman.png";
import PowerBI from "../Assests/PowerBI.png";
import Tableau from "../Assests/Tableau.png";
import Selenium from "../Assests/Selenium.png";
import Jira from "../Assests/Jira.png";
import JMeter from "../Assests/JMeter.png";
import VisualStudio from "../Assests/VisualStudio.png";
import MySQLWorkbench from "../Assests/MySQLWorkbench.png";
import CSharp from "../Assests/Csharp.png";
import SpringBoot from "../Assests/spring-boot.png";
import Wordpress from "../Assests/wordpress.png";
import Tailwind from "../Assests/tailwind.png";
import Node from "../Assests/Node.png";
import GoogleAds from "../Assests/google-ads.png";
import JavaScript from "../Assests/javascript.png";
import Header from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";

const About = () => {
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
      <div className="w-full phone:p-4 phone:pt-8 tablet:p-12 laptop:p-16 desktop:p-16 desktop:pt-40 laptop:pt-40 tablet:pt-32 text-black">
        <h1 className="text-center font-bold uppercase phone:text-xl tablet:text-4xl laptop:text-5xl desktop:text-5xl	text-[#056583] font-sans phone:mt-16 laptop:mb-12 desktop:mb-12">
          Here You Know <label className="text-[#b73535]">More About Me</label>
        </h1>
        <h2 className="phone:pt-4 tablet:pt-4 laptop:pt-10 desktop:pt-10 text-center pb-3 font-bold text-black">
          Education
        </h2>
        <div className="educationcard px-10 phone:px-4 bg-[#368cc133] py-10 phone:py-4 w-full rounded-2xl font-poppins shadow-xl">
          <label className="border-b-2 border-[#b73535] pb-1 phone:text-lg tablet:text-2xl laptop:text-3xl desktop:text-3xl font-semibold">
            MCA - Masters In Computer Application
          </label>
          <label className="float-right phone:text-sm">
            <b>2022-Current</b>
          </label>
          <br></br>
          <label className="pb-0.5 font-semibold pt-2 phone:text-sm">
            Sardar Patel Institue Of Technology | Andheri, Mumbai
          </label>
          <br />
          <label className="font-semibold laptop:pb-3 desktop:pb-3 phone:pb-0 tablet:pb-2 phone:text-sm">
            Secured An Aggrigate Of{" "}
            <label className="text-[#b73535]">
              <b>8.46 CGPA</b>
            </label>
          </label>
          <hr className="phone:pb-2 tablet:pb-3 desktop:pb-3 laptop:pb-3 text-black"></hr>
          <label className="border-b-2 border-[#b73535] pb-1 phone:text-lg tablet:text-2xl laptop:text-3xl desktop:text-3xl font-semibold">
            Bachelor's Of Science In Computer Science
          </label>
          <label className="float-right phone:text-sm">
            <b>2019-2022</b>
          </label>
          <br></br>
          <label className="font-semibold pb-0.5 pt-2 phone:text-sm">
            D. G. Ruparel College | Mahim, Mumbai
          </label>
          <br />
          <label className="font-semibold laptop:pb-3 desktop:pb-3 phone:pb-0 tablet:pb-2 phone:text-sm">
            Secured An Aggrigate Of{" "}
            <label className="text-[#b73535]">
              <b>8.49 CGPA</b>
            </label>
          </label>
          <hr className="phone:pb-2 tablet:pb-3 desktop:pb-3 laptop:pb-3 text-black"></hr>
          <label className="border-b-2 border-[#b73535] pb-1 phone:text-lg tablet:text-2xl laptop:text-3xl desktop:text-3xl font-semibold">
            12<sup>th</sup> - Higher Scondary Board
          </label>
          <label className="float-right phone:text-sm">
            <b>2017-2019</b>
          </label>
          <br></br>
          <label className="font-semibold pb-0.5 pt-2 phone:text-sm">
            S. V. Joshi Jr. College | Dombivli, Thane
          </label>
          <br />
          <label className="font-semibold laptop:pb-3 desktop:pb-3 phone:pb-0 tablet:pb-2 phone:text-sm">
            Secured An Aggrigate Of{" "}
            <label className="text-[#b73535]">
              <b>71.53 %</b>
            </label>
          </label>
        </div>
        <h2 className="pt-32 pb-8 text-center text-black font-bold">
          Profesional Skillset
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-5 gap-y-8">
          <SkillCard src={Java} alt="Java Logo" label="Java" />
          <SkillCard src={CPP} alt="CPP Logo" label="C++" />
          <SkillCard src={Python} alt="Python Logo" label="Python" />
          <SkillCard src={CSharp} alt="CSharp Logo" label="C#" />
          <SkillCard src={MySQL} alt="MySQL Logo" label="MySQL" />
          <SkillCard src={ReactL} alt="React Logo" label="ReactJS" />
          <SkillCard src={Node} alt="Node Logo" label="NodeJS" />
          <SkillCard src={HTML} alt="HTML Logo" label="HTML" />
          <SkillCard src={CSS} alt="CSS Logo" label="CSS" />
          <SkillCard src={Tailwind} alt="Tailwind Logo" label="Tailwind CSS" />
          <SkillCard
            src={JavaScript}
            alt="JavaScript Logo"
            label="JavaScript"
          />
          <SkillCard
            src={SpringBoot}
            alt="SpringBoot Logo"
            label="Spring Boot"
          />
          <SkillCard src={Git} alt="Git Logo" label="Git" />
          <SkillCard src={SEO} alt="SEO Logo" label="SEO" />
        </div>
        <h2 className="pt-32 text-center pb-8 text-black font-bold">
          Tools I Used
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-5 gap-y-8">
          <SkillCard src={Postman} alt="Tableau Logo" label="Postman" />
          <SkillCard src={PowerBI} alt="PowerBI Logo" label="PowerBI" />
          <SkillCard src={Tableau} alt="Tableau Logo" label="Tableau" />
          <SkillCard src={Wordpress} alt="Wordpress Logo" label="Wordpress" />
          <SkillCard src={GoogleAds} alt="Google Ads Logo" label="Google Ads" />
          <SkillCard src={Selenium} alt="Selenium Logo" label="Selenium" />
          <SkillCard src={Jira} alt="Jira Logo" label="Jira" />
          <SkillCard src={JMeter} alt="JMeter Logo" label="JMeter" />
          <SkillCard
            src={VisualStudio}
            alt="VisualStudio Logo"
            label="VisualStudio"
          />
          <SkillCard
            src={MySQLWorkbench}
            alt="MySQLWorkbench Logo"
            label="Workbench"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
