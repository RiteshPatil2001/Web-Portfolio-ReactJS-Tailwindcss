import React, { useEffect } from "react";
import './Index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import homeLogo from '../../Assests/Homee.png'
import ritesh from '../../Assests/Ritesh.jpg'
import Github from '../../Assests/Github.png'
import Linkedin from '../../Assests/Linkedin.png'
import Mail from '../../Assests/Mail.png';
import Header from '../Header/Navbar'
import Footer from '../Footer/Footer';
import { useNavigate } from 'react-router-dom';

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
    window.open('https://github.com/RiteshPatil2001', '_blank');
  };
  const LinkedinClick = () => { 
    window.open('https://www.linkedin.com/in/ritesh-patil-40b088236/', '_blank');
  };
  const MailClick = () => {
    const emailAddress = 'riteshpatil6731@gmail.com';
    const mailtoLink = `mailto:${emailAddress}`;
    window.location.href = mailtoLink;
  };
  return (
    <>
      <Header />
      <div className='w-full p-16 justify-center pb-28'>
        <div className='flex'>
          <div className='w-7/12 pt-[22%] text-white text-3xl'>
            <label className='FirstLine'>Hii There !!! </label><span className="wave inline-block" role="img" aria-labelledby="wave"> 👋 </span>
            <h1 className="text-white text-[4rem] font-[750] leading-[1em] uppercase">I'M<strong className="main-name text-white font-[800] leading-[1em]"> RITESH PATIL</strong></h1>
            <div class="inline-block mt-[5%]">
              <div class="inline-block"><div class="typed-out overflow-hidden border-r-4 border-[gold] font-2xl text-[gold] w-0 whitespace-nowrap">Full Stack Devloper & Data Scientist &nbsp; &nbsp; &nbsp;</div></div>
            </div>
          </div>
          <div>
            <img src={homeLogo} alt="home pic" className="h-[540px]" />
          </div>
        </div>

        <div className='flex mt-28'>
          <div className='w-8/12'>
            <h1 className='text-center font-bold uppercase text-5xl	text-white font-sans'>Let Me <label className='text-[gold]'>Introduce</label> Myself</h1>
            <div className='text-2xl text-justify pt-12 pl-8 pr-16'>
                <label className='text-white font-sans'>Passionate developer with a keen eye for detail and a love for creating seamless and innovative solutions. I am dedicated to delivering high-quality code and collaborating with cross-functional teams to turn ideas into reality.
                <br /><br />
                I have developed proficiency in programming languages such as <text className='text-[gold]'>Java, ReactJs, Python, C++, MERN stack, Tailwind-CSS and many more</text> along with hands-on experience with it.
                <br /><br />
                <text className='text-[gold]'>Data analysis and machine learning</text> are my additional areas of interest.
                <br /><br />
                Whenever I can, I incorporate my passion for <text className='text-[gold]'>cricket and swimming</text> which helps me stay physically active.
                </label>
            </div>
          </div>
          <div className='w-4/12 flex justify-center items-center'>
            <img src={ritesh} alt="ritesh pic" className="h-96 rounded-full cursor-pointer" />
          </div>
        </div>
        <div className='text-center mt-32'>
          <h1 className='text-center font-bold uppercase text-5xl	text-white font-sans mb-28'>You Can <label className='text-[gold]'>Connect</label> with me</h1>
          <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 justify-items-center'>
            <div className='w-fit cursor-pointer'>
              <div className='w-64 h-72 bg-black shadow-[0_0_4px_4px_rgba(255,255,255,0.444)] z-0	rounded-xl -rotate-[22deg] hover:shadow-[0_0_20px_6px_rgba(255,255,255,0.444)]'>
                <div className='w-64 h-72 bg-black shadow-[0_0_4px_4px_rgba(255,255,255,0.444)] z-10	rounded-xl rotate-[11deg] hover:shadow-[0_0_20px_6px_rgba(255,255,255,0.444)]'>
                  <div className=' w-64 h-72 bg-black shadow-[0_0_4px_4px_rgba(255,255,255,0.444)] z-20	rounded-xl rotate-[10deg] hover:shadow-[0_0_20px_6px_rgba(255,255,255,0.444)] pt-6 text-white' onClick={GitHubClick}>
                    <img src={Github} alt="github pic" className="flex m-auto w-44 h-44 mt-2" />
                    <h2>GitHub</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-fit cursor-pointer'>
              <div className='w-64 h-72 bg-black shadow-[0_0_4px_4px_rgba(255,255,255,0.444)] z-0	rounded-xl -rotate-[22deg] hover:shadow-[0_0_20px_6px_rgba(255,255,255,0.444)]'>
                <div className='w-64 h-72 bg-black shadow-[0_0_4px_4px_rgba(255,255,255,0.444)] z-10	rounded-xl rotate-[11deg] hover:shadow-[0_0_20px_6px_rgba(255,255,255,0.444)]'>
                  <div className=' w-64 h-72 bg-black shadow-[0_0_4px_4px_rgba(255,255,255,0.444)] z-20	rounded-xl rotate-[10deg] hover:shadow-[0_0_20px_6px_rgba(255,255,255,0.444)] pt-6 text-white' onClick={LinkedinClick}>
                    <img src={Linkedin} alt="linkedin pic" className="flex m-auto w-44 h-44 mt-2" />
                    <h2>Linkedin</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-fit cursor-pointer'>
              <div className='w-64 h-72 bg-black shadow-[0_0_4px_4px_rgba(255,255,255,0.444)] z-0	rounded-xl -rotate-[22deg] hover:shadow-[0_0_20px_6px_rgba(255,255,255,0.444)]'>
                <div className='w-64 h-72 bg-black shadow-[0_0_4px_4px_rgba(255,255,255,0.444)] z-10	rounded-xl rotate-[11deg] hover:shadow-[0_0_20px_6px_rgba(255,255,255,0.444)]'>
                  <div className=' w-64 h-72 bg-black shadow-[0_0_4px_4px_rgba(255,255,255,0.444)] z-20	rounded-xl rotate-[10deg] hover:shadow-[0_0_20px_6px_rgba(255,255,255,0.444)] pt-6 text-white' onClick={MailClick}>
                    <img src={Mail} alt="mail pic" className="flex m-auto w-44 h-44 mt-2" />
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

export default Index