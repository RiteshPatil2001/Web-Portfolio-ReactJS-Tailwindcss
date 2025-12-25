import { useEffect } from "react";
import ritesh from "../Assests/Ritesh.jpg";
import Github from "../Assests/Github.png";
import Linkedin from "../Assests/Linkedin.png";
import Mail from "../Assests/Mail.png";
import Header from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";
import Connectcard from "../Components/Connectcard";
import MailBlack from "../Assests/connect.png";
import { Link as ScrollLink, Element } from "react-scroll";

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
      <div className="w-full phone:p-4 tablet:pl-8 tablet:pr-8 laptop:pl-16 laptop:pr-8 desktop:pl-16 desktop:pr-8 phone:overflow-x-hidden tablet:overflow-x-hidden">
        <div className="outerbody">
          <div className="background-effect"></div>
          <div className="dot-pattern flex flex-col items-center">
            <div className="absolute flex flex-col items-center desktop:top-52 laptop:top-52 tablet:top-44 phone:top-44">
              <label className="text-6xl phone:text-2xl tablet:text-4xl font-medium leading-[3.5rem]">
                Hello🙋 I'm{" "}
                <label className="titlename font-bold text-[#056583]">
                  Ritesh Patil
                </label>
              </label>
              <label className="text-3xl phone:text-lg tablet:text-2xl font-[500] leading-[3rem] pb-4">
                Building the Future of Web and Data
              </label>
              <label className="text-lg phone:text-sm tablet:text-base font-[500] text-center leading-[1.5rem] phone:pl-3 phone:pr-3">
                Expertise in Full Stack Development And Dynamic Development |
                Skilled in Modern
                <br />
                Frameworks and Technologies | Mastering the Art of Data Science
              </label>
              <ScrollLink
                to="connect"
                smooth={true}
                duration={500}
                className="connectbutton h-16 w-80 mt-32 rounded-xl phone:w-60 tablet:w-72 border flex items-center justify-center desktop:text-2xl desktop:font-semibold laptop:text-2xl laptop:font-semibold tablet:text-xl tablet:font-medium phone:text-xl phone:font-medium bg-[#4691a9] text-white cursor-pointer no-underline hover:scale-110"
              >
                Let's Connect&nbsp;&nbsp;<img src={MailBlack} alt=""></img>
              </ScrollLink>
            </div>
          </div>
        </div>

        <div className="flex w-full pt-24 phone:pt-8 tablet:pt-16 justify-center">
          <div className="w-[95%] h-fi rounded-xl overflow-hidden flex desktop:flex-row laptop:flex-row tablet:flex-row phone:flex-col">
            <img
              src={ritesh}
              alt=""
              className="w-96 h-96 rounded-[50%] align-middle self-center justify-center"
            ></img>
            <div className="font-poppins text-black pt-8 pr-8 pl-8 pb-3 text-lg phone:text-lg phone:leading-7 tablet:text-lg tablet:leading-7 font-medium leading-[2rem] text-justify">
              <p>
                Software Developer with{" "}
                <span className="text-[#b73535] font-semibold">
                  1.6+ years of experience
                </span>{" "}
                in designing and developing scalable web applications, with
                proficiency across both frontend and backend technologies.
              </p>
              <p>
                I specialize in crafting clean, efficient code and delivering
                intuitive user experiences using{" "}
                <span className="text-[#b73535] font-semibold">
                  Angular, Java, Spring Boot, Python, React.js, MERN and Many
                  more.
                </span>
              </p>
              <p>
                My analytical approach and interest in{" "}
                <span className="text-[#b73535] font-semibold">
                  Data Analysis and Basic Machine Learning
                </span>{" "}
                support well-informed architectural and development decisions.
              </p>
              <p>
                Beyond work, I balance creativity and discipline through my
                passion for{" "}
                <span className="text-[#b73535] font-semibold">
                  Cricket and Swimming—qualities
                </span>{" "}
                that reflect in my collaborative mindset and commitment to
                excellence.
              </p>
            </div>
          </div>
        </div>

        <Element name="connect">
          <section id="connect">
            <div className="text-center mt-32 mb-8 phone:mt-24 ">
              <h1 className="text-center font-bold uppercase phone:text-xl tablet:text-4xl laptop:text-5xl desktop:text-5xl	text-[#056583] font-sans mb-6 laptop:mb-12 desktop:mb-12">
                You Can <label className="text-[#b73535]">Connect</label> with
                me
              </h1>
              <div className="grid grid-cols-1 phone:grid-cols-1 tablet:grid-cols-3 desktop:grid-cols-3 laptop:grid-cols-3 justify-items-center phone:gap-y-12 mb-16">
                <Connectcard
                  src={Github}
                  event={GitHubClick}
                  alt=""
                  label="Check out my projects on GitHub. Let's collaborate and code together!"
                  btntext="Github"
                />
                <Connectcard
                  src={Linkedin}
                  event={LinkedinClick}
                  alt=""
                  label="Let's connect and share our professional journeys! Explore my professional profile on LinkedIn."
                  btntext="Linkedin"
                />
                <Connectcard
                  src={Mail}
                  event={MailClick}
                  alt=""
                  label="Drop me a line, let's start a conversation! You can send me messages through email."
                  btntext="Mail"
                />
              </div>
            </div>
          </section>
        </Element>
      </div>
      <Footer />
    </>
  );
};

export default Index;
