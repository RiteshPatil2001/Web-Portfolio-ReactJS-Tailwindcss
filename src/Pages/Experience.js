import React, { useEffect } from "react";
import Header from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";
// import pic1 from "../Assests/Homee.png";
// import ExperienceCard from "../Components/ExperienceCard";

const Experiance = () => {
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
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1 w-full phone:p-4 phone:pt-8 tablet:p-12 laptop:p-16 desktop:p-16 desktop:pt-40 laptop:pt-40 tablet:pt-32 text-black">
        <h1 className="text-center font-bold uppercase phone:text-xl tablet:text-4xl laptop:text-5xl desktop:text-5xl text-[#056583] font-sans phone:mt-16 phone:mb-8 laptop:mb-12 desktop:mb-12">
          professional <label className="text-[#b73535]">Experience</label>
        </h1>

        {/* <ExperienceCard
          index={1}
          companyName="W.E. Matter"
          role="Full Stack Developer Intern"
          duration="Ongoing"
          responsibilities={[
            "Engineered full stack web applications using React for the user interface and Node for the back end, leading the development of web APIs to integrate data seamlessly.",
            "Redesigned both backend and frontend of the company’s website, enhancing user interface and experience, making it 100% responsive and user-friendly.",
          ]}
          image={pic1}
        /> */}

        <div className="expcard w-full h-fit rounded-xl shadow-xl p-[1.5em] mb-10">
          <p className="phone:pt-2 tablet:pt-3 laptop:pt-4 desktop:pt-4 phone:px-2 tablet:px-3 laptop:px-4 desktop:px-4 text-justify phone:text-xl tablet:text-2xl laptop:text-3xl desktop:text-3xl font-bold m-0 text-[#b73535]">
            Well!!! Currenly I dont have any professional experiance but....
          </p>
          <p className="phone:p-2 tablet:p-3 laptop:p-4 desktop:p-4 font-medium phone:text-sm tablet:text-base text-justify laptop:text-lg desktop:text-lg">
            I bring a fresh perspective and a strong foundation in{" "}
            <text className="text-[#056583] underline font-bold">
              {" "}
              frontend/backend development and data science,
            </text>{" "}
            coupled with a proactive attitude and a proven ability to quickly
            adapt to new environments. My academic projects and internships have
            honed my problem-solving abilities and teamwork skills, making me a
            reliable and collaborative team member. I am enthusiastic,
            dedicated, and ready to contribute to your company's success from
            day one. My passion for{" "}
            <text className="text-[#056583] underline font-bold">
              Java Developer, Frontend development, Backend developer, React
              Developer or Data analyst
            </text>{" "}
            and my drive to excel make me an ideal candidate for this position.
          </p>
        </div>
      </div>
      <Footer className="absolute bottom-0" />
    </div>
  );
};

export default Experiance;
