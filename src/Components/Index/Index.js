import React from 'react';
import './Index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import homeLogo from '../../Assests/Homee.png'
import ritesh from '../../Assests/Ritesh.jpg'
import Github from '../../Assests/Github.png'
import Linkedin from '../../Assests/Linkedin.png'
import Mail from '../../Assests/Mail.png';
import Header from '../Header/Navbar'
import Footer from '../Footer/Footer';

const Index = () => {
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
    <div className="Wrapper">
      <Header />
      <div className='FaceContent'>
        <div className='Container1'>
          <div className='TextContainer'>
            <label className='FirstLine'>Hii There !!! </label><span className="wave" role="img" aria-labelledby="wave"> 👋 </span>
            <h1 className="heading-name">I'M<strong className="main-name"> RITESH PATIL</strong></h1>
            <div class="InnerContainer">
              <div class="c2"><div class="typed-out">Full Stack Devloper & Data Scientist &nbsp; &nbsp; &nbsp;</div></div>
            </div>
          </div>
          <div className='ImageContainer'>
            <img src={homeLogo} alt="home pic" className="img-fluid" />
          </div>
        </div>
        <div className='Container2'>
          <div className='TextContainer2'>
            <h1 className='OuterClass'>Let Me <label className='InnerClass'>Introduce</label> Myself</h1>
            <div className='Introcard'>
              <label className='OuterClass2'>Passionate developer with a keen eye for detail and a love for creating seamless and innovative solutions.
                <br></br>
                <br></br>
                I have developed proficiency in programming languages such as <label className='InnerClass'>Java, C++, Python and many more</label> along with hands-on experience with it.
                <br></br>
                <br></br>
                <label className='InnerClass'>Data analysis and machine learning</label> are my additional areas of interest.
                <br></br>
                <br></br>
                Whenever I can, I incorporate my passion for <label className='InnerClass'>cricket and swimming</label> which helps me stay physically active.</label>
            </div>
          </div>
          <div className='Logocontainer'>
            <img src={ritesh} alt="ritesh pic" className="img-fluid2" />
          </div>
        </div>
        <div className='Container3'>
          <h1 className='OuterClassC3'>You Can <label className='InnerClass'>Connect</label> with me</h1>
          <div className='ConnectContainer'>
            <div className='stack1'>
              <div className='Stackcard1'>
                <div className='Stackcard2'>
                  <div className='Stackcard3' onClick={GitHubClick}>
                    <img src={Github} alt="github pic" className="img-connect" />
                    <h2>GitHub</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className='stack1'>
              <div className='Stackcard1'>
                <div className='Stackcard2'>
                  <div className='Stackcard3' onClick={LinkedinClick}>
                    <img src={Linkedin} alt="linkedin pic" className="img-connect" />
                    <h2>Linkedin</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className='stack1'>
              <div className='Stackcard1'>
                <div className='Stackcard2'>
                  <div className='Stackcard3' onClick={MailClick}>
                    <img src={Mail} alt="mail pic" className="img-connect" />
                    <h2>Mail</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
    </>
  );
};

export default Index