import React, { useEffect } from "react";
import Header from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";
import pic1 from "../Assests/Homee.png";
import ExperienceCard from "../Components/ExperienceCard";

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
    <>
      <Header />
      <div className="w-full phone:p-4 phone:pt-8 tablet:p-12 laptop:p-16 desktop:p-16 desktop:pt-40 laptop:pt-40 tablet:pt-32 text-black">
        <h1 className="text-center font-bold uppercase phone:text-xl tablet:text-4xl laptop:text-5xl desktop:text-5xl text-[#056583] font-sans phone:mt-16 phone:mb-8 laptop:mb-12 desktop:mb-12">
          professional <label className="text-[#b73535]">Experience</label>
        </h1>

        <ExperienceCard
          index={1}
          companyName="W.E. Matter"
          role="Full Stack Developer Intern"
          duration="Ongoing"
          responsibilities={[
            "Engineered full stack web applications using React for the user interface and Node for the back end, leading the development of web APIs to integrate data seamlessly.",
            "Redesigned both backend and frontend of the company’s website, enhancing user interface and experience, making it 100% responsive and user-friendly.",
          ]}
          image={pic1}
        />
      </div>
      <Footer />
    </>
  );
};

export default Experiance;
