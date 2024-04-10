import React from 'react';
import './Resume.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ResumePNG from '../../Assests/ResumePNG.jpg';
import Download from '../../Assests/Download.png';
import Header from '../Header/Navbar'
import Footer from '../Footer/Footer';

const Resume = () => {
    const handleDownload = () => {
        const pdfUrl = process.env.PUBLIC_URL + '/Ritesh_Patil_Resume.pdf';
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'Ritesh_Patil_Resume.pdf';
        link.click();
      };
  return (
    <div className='WrapperResume'>
      <Header />
      <div className='ResumeContent'>
          <div className='ResumeText'>
              <label className='DownloadResume' onClick={handleDownload}><b>Download Resume</b> <img src={Download} alt=" " className="img-Download" /></label>
              <img src={ResumePNG} alt="Resume pic" className="img-Resume" />
          </div>
      </div>
      <Footer />
    </div>
  );
};

export default Resume