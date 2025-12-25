import { useEffect } from "react";
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
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1 w-full phone:p-4 phone:pt-8 tablet:p-12 laptop:p-16 desktop:p-16 desktop:pt-40 laptop:pt-40 tablet:pt-32 text-black">
        <h1 className="text-center font-bold uppercase phone:text-xl tablet:text-4xl laptop:text-5xl desktop:text-5xl text-[#056583] font-sans phone:mt-16 phone:mb-8 laptop:mb-12 desktop:mb-12">
          professional <label className="text-[#b73535]">Experience</label>
        </h1>

        <ExperienceCard
          index={1}
          companyName="CitiusTech Healthcare Solutions"
          role="Software Engineer"
          duration="June 2024 - Ongoing"
          responsibilities={[
            "Developing and enhancing Angular components and RESTful integrations for a U.S.-based medical imaging application supporting DICOM, MR, CT, and other scan types.",
            "Collaborating with product teams to implement features that improve diagnostic workflow efficiency and visualization capabilities for radiology studies.",
            "Conducting code reviews, resolving defects, and optimizing UI performance to ensure reliability and seamless handling of large medical image datasets.",
            "Previously assisted in quality validation with light Playwright automation and manual testing to maintain accuracy, compliance, and application stability",
          ]}
          image={pic1}
        />
      </div>
      <Footer className="absolute bottom-0" />
    </div>
  );
};

export default Experiance;
