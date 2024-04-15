import React, { useEffect } from "react";
import homeLogo from "../Assests/Homee.png";
import ritesh from "../Assests/Ritesh.jpg";
import Github from "../Assests/Github.png";
import Linkedin from "../Assests/Linkedin.png";
import Mail from "../Assests/Mail.png";
import Header from "./Header/Navbar";
import Footer from "./Footer/Footer";
import { useNavigate } from "react-router-dom";

const Index = () => {
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

  const GitHubClick = () => {
    window.open("https://github.com/RiteshPatil2001", "_blank");
  };
  const LinkedinClick = () => {
    window.open(
      "https://www.linkedin.com/in/ritesh-patil-40b088236/",
      "_blank"
    );
  };
  const MailClick = () => {
    const emailAddress = "riteshpatil6731@gmail.com";
    const mailtoLink = `mailto:${emailAddress}`;
    window.location.href = mailtoLink;
  };
  return (
    <>
      <Header />
      <div className="w-full phone:p-4 tablet:p-8 laptop:p-16 desktop:p-16 text-white">
        <div className="flex phone:flex-col-reverse tablet:flex-col-reverse">
          <div className="laptop:w-7/12 desktop:w-7/12 tablet:text-center desktop:pt-[22%] laptop:pt-[22%] text-white phone:text-2xl tablet:text-3xl laptop:text-3xl desktop:text-3xl">
            <label className="FirstLine">Hii There !!! </label>
            <span
              className="wave inline-block"
              role="img"
              aria-labelledby="wave"
            >
              {" "}
              👋{" "}
            </span>
            <h1 className="text-white phone:text-[1.8rem] tablet:text-[3rem] laptop:text-[4rem] desktop:text-[4rem] font-[750] leading-[1em] uppercase">
              I'M
              <strong className="main-name text-white font-[800] leading-[1em]">
                {" "}
                RITESH PATIL
              </strong>
            </h1>
            <div class="inline-block laptop:mt-[5%] desktop:mt-[5%]">
              <div class="inline-block">
                <div class="typed-out overflow-hidden border-r-4 border-[gold] phone:text-2xl laptop:text-3xl desktop:text-3xl text-[gold] w-0 whitespace-nowrap">
                  Full Stack Developer & Data Scientist &nbsp; &nbsp; &nbsp;
                </div>
              </div>
            </div>
          </div>
          <div>
            <img src={homeLogo} alt="home pic" className="h-[540px] phone:h-[400px] tablet:h-[400px] tablet:m-auto phone:m-auto" />
          </div>
        </div>


        <div className="flex phone:flex-col-reverse tablet:flex-col-reverse	mt-28">
          <div className="laptop:w-8/12 desktop:w-8/12">
          <h1 className="text-center font-bold uppercase phone:text-xl tablet:text-4xl laptop:text-5xl desktop:text-5xl	text-white font-sans laptop:mb-12 desktop:mb-12">
              Let Me <label className="text-[gold]">Introduce</label> Myself
            </h1>
            <div className="phone:text-lg tablet:text-xl laptop:text-2xl desktop:text-2xl text-justify tablet:pt-8 laptop:pt-1 laptop:pl-8 laptop:pr-16 desktop:pt-1 desktop:pl-8 desktop:pr-16">
              <label className="text-white font-sans">
                Passionate developer with a keen eye for detail and a love for
                creating seamless and innovative solutions. I am dedicated to
                delivering high-quality code and collaborating with
                cross-functional teams to turn ideas into reality.
                <br />
                <br />I have developed proficiency in programming languages such
                as{" "}
                <text className="text-[gold]">
                  Java, ReactJs, Python, C++, MERN stack, Tailwind-CSS and many
                  more
                </text>{" "}
                along with hands-on experience with it.
                <br />
                <br />
                <text className="text-[gold]">
                  Data analysis and machine learning
                </text>{" "}
                are my additional areas of interest.
                <br />
                <br />
                Whenever I can, I incorporate my passion for{" "}
                <text className="text-[gold]">cricket and swimming</text> which
                helps me stay physically active.
              </label>
            </div>
          </div>
          <div className="phone:w-full tablet:w-full laptop:w-4/12 desktop:e-4/12 flex justify-center items-center">
            <img
              src={ritesh}
              alt="ritesh pic"
              className="phone:h-72 phone:w-72 phone:mb-8 tablet:mb-8  tablet:w-96 tablet:h-96 laptop:w-96 laptop:h-96 desktop:w-96 desktop:h-96 rounded-full cursor-pointer"
            />
          </div>
        </div>



        <div className="text-center mt-32 mb-8">
        <h1 className="text-center font-bold uppercase phone:text-xl tablet:text-4xl laptop:text-5xl desktop:text-5xl	text-white font-sans mb-16 laptop:mb-24 desktop:mb-24">
            You Can <label className="text-[gold]">Connect</label> with me
          </h1>
          <div className="grid grid-cols-1 phone:grid-cols-1 tablet:grid-cols-3 desktop:grid-cols-3 laptop:grid-cols-3 justify-items-center phone:gap-y-28	">
            <div className="w-fit cursor-pointer">
              <div className="phone:w-52 phone:h-64 tablet:w-44 tablet:h-52 laptop:w-64 laptop:h-72 desktop:w-64 desktop:h-72 bg-black shadow-[0_0_4px_4px_rgba(255,255,255,0.444)] z-0	rounded-xl -rotate-[22deg] hover:shadow-[0_0_20px_6px_rgba(255,255,255,0.444)]">
                <div className="phone:w-52 phone:h-64 tablet:w-44 tablet:h-52 laptop:w-64 laptop:h-72 desktop:w-64 desktop:h-72 bg-black shadow-[0_0_4px_4px_rgba(255,255,255,0.444)] z-10	rounded-xl rotate-[11deg] hover:shadow-[0_0_20px_6px_rgba(255,255,255,0.444)]">
                  <div
                    className="phone:w-52 phone:h-64 tablet:w-44 tablet:h-52 laptop:w-64 laptop:h-72 desktop:w-64 desktop:h-72 bg-black shadow-[0_0_4px_4px_rgba(255,255,255,0.444)] z-20	rounded-xl rotate-[10deg] hover:shadow-[0_0_20px_6px_rgba(255,255,255,0.444)] pt-6 text-white"
                    onClick={GitHubClick}
                  >
                    <img
                      src={Github}
                      alt="github pic"
                      className="flex m-auto tablet:mt-1 phone:mt-2 laptop:mt-2 desktop:mt-2 phone:w-44 phone:h-44 tablet:w-32 tablet:h-32 laptop:w-44 laptop:h-44 desktop:w-44 desktop:h-44"
                    />
                    <h2>GitHub</h2>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-fit cursor-pointer">
              <div className="phone:w-52 phone:h-64 tablet:w-44 tablet:h-52 laptop:w-64 laptop:h-72 desktop:w-64 desktop:h-72 bg-black shadow-[0_0_4px_4px_rgba(255,255,255,0.444)] z-0	rounded-xl -rotate-[22deg] hover:shadow-[0_0_20px_6px_rgba(255,255,255,0.444)]">
                <div className="phone:w-52 phone:h-64 tablet:w-44 tablet:h-52 laptop:w-64 laptop:h-72 desktop:w-64 desktop:h-72 bg-black shadow-[0_0_4px_4px_rgba(255,255,255,0.444)] z-10	rounded-xl rotate-[11deg] hover:shadow-[0_0_20px_6px_rgba(255,255,255,0.444)]">
                  <div
                    className="phone:w-52 phone:h-64 tablet:w-44 tablet:h-52 laptop:w-64 laptop:h-72 desktop:w-64 desktop:h-72 bg-black shadow-[0_0_4px_4px_rgba(255,255,255,0.444)] z-20	rounded-xl rotate-[10deg] hover:shadow-[0_0_20px_6px_rgba(255,255,255,0.444)] pt-6 text-white"
                    onClick={LinkedinClick}
                  >
                    <img
                      src={Linkedin}
                      alt="github pic"
                      className="flex m-auto tablet:mt-1 phone:mt-2 laptop:mt-2 desktop:mt-2 phone:w-44 phone:h-44 tablet:w-32 tablet:h-32 laptop:w-44 laptop:h-44 desktop:w-44 desktop:h-44"
                    />
                    <h2>Linkedin</h2>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-fit cursor-pointer">
              <div className="phone:w-52 phone:h-64 tablet:w-44 tablet:h-52 laptop:w-64 laptop:h-72 desktop:w-64 desktop:h-72 bg-black shadow-[0_0_4px_4px_rgba(255,255,255,0.444)] z-0	rounded-xl -rotate-[22deg] hover:shadow-[0_0_20px_6px_rgba(255,255,255,0.444)]">
                <div className="phone:w-52 phone:h-64 tablet:w-44 tablet:h-52 laptop:w-64 laptop:h-72 desktop:w-64 desktop:h-72 bg-black shadow-[0_0_4px_4px_rgba(255,255,255,0.444)] z-10	rounded-xl rotate-[11deg] hover:shadow-[0_0_20px_6px_rgba(255,255,255,0.444)]">
                  <div
                    className="phone:w-52 phone:h-64 tablet:w-44 tablet:h-52 laptop:w-64 laptop:h-72 desktop:w-64 desktop:h-72 bg-black shadow-[0_0_4px_4px_rgba(255,255,255,0.444)] z-20	rounded-xl rotate-[10deg] hover:shadow-[0_0_20px_6px_rgba(255,255,255,0.444)] pt-6 text-white"
                    onClick={MailClick}
                  >
                    <img
                      src={Mail}
                      alt="github pic"
                      className="flex m-auto tablet:mt-1 phone:mt-2 laptop:mt-2 desktop:mt-2 phone:w-44 phone:h-44 tablet:w-32 tablet:h-32 laptop:w-44 laptop:h-44 desktop:w-44 desktop:h-44"
                    />
                    <h2>Mail</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Index;
