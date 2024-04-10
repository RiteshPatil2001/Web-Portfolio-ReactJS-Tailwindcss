import React from "react";
import './Footer.css';
import Github from '../../Assests/Github.png';
import Linkedin from '../../Assests/Linkedin.png';
import Mail from '../../Assests/Mail.png';

const Footer = () => {
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
    <div className='FooterClass'>
      <div className='FooterContent'>
            <div className="footertext1">
              <label>Designed and Developed by Ritesh Patil</label>
            </div>
            <div className="footertext2">
              <label>Copyright © 2024 Ritesh Patil</label>
            </div>
            <div className="IconContainer">
              <div className='FooterIcon' onClick={LinkedinClick}>
                <img src={Linkedin} alt="linkedin pic" className="img-footer" />
              </div>
              <div className='FooterIcon' onClick={GitHubClick}>
                <img src={Github} alt="github pic" className="img-footer" />
              </div>
              <div className='FooterIcon' onClick={MailClick}>
                <img src={Mail} alt="mail pic" className="img-footer" />
              </div>
            </div>
          </div>
      </div>
  );
}

export default Footer;