import React from 'react';
import './Projects.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import JavaProject from '../../Assests/JavaProject.png';
import PythonProject from '../../Assests/WeatherForecasting.png';
import ReactProject from '../../Assests/ExpenseTracker.png';
import Header from '../Header/Navbar'
import Footer from '../Footer/Footer';


const Projects = () => {
  const FlyEaseProject = () => {
    window.open('https://github.com/RiteshPatil2001', '_blank');
  };
  const WeatherForecasting = () => {
    window.open('https://github.com/RiteshPatil2001/Weather-Forecasting-App-Using-Python.git', '_blank');
  };
  const ExpenseTracker = () => {
    window.open('https://github.com/RiteshPatil2001/Expense-Tracker-System-Using-React-MERN-Stack.git', '_blank');
  };
  return (
    <div className='WrapperProject'>
      <Header />
      <div className='ProjectContent'>
          <div className='ProjectText'>
          <h1 className='ProjectOuterClass'>My Recent <label className='ProjectInnerClass'>Works</label></h1>
          <div className='ProjectLine1'>
              <div className='ProjectCard1'>
                <img src={JavaProject} alt="Java Project pic" className="img-Project" />
                <div className='ProjectCardText'>
                <label className='ProjectName'>FlyEase - Web-based Flight Ticket Booking Application</label>
                <label className='ProjectDesc'>FlyEase, a web-based flight ticket booking application developed using the Spring Boot
                    MVC framework. The application enables users to search for flights, access flight details,
                    and make online bookings. It also consists of admin section for managing flights and user
                    details. Utilized the MySQL database to store and manage flight-related information.</label>
                  <label className='TechnologyUsed'><label className='ProjectInnerClass'><b>Technology Used -</b> </label> Java, Spring MVC, JSP, JPA, MySQL</label><br></br>
                  <label className='ProjectGithub' onClick={FlyEaseProject}>GitHub Link</label>                
                </div>
              </div>
              <div className='ProjectGap'></div>
              <div className='ProjectCard2'>
                <img src={PythonProject} alt="Java Project pic" className="img-Project" />
                <div className='ProjectCardText'>
                <label className='ProjectName'>Weather Forecasting App</label>
                <label className='ProjectDesc'>This Weather App is a simple Python application built using the Tkinter library for the GUI,
                  and it utilizes the OpenWeatherMap API to fetch real-time weather data. The app displays current weather information, 
                  including temperature, weather condition, humidity, wind speed, and more. It also allows users to view past 5 days' weather records for a specific location.</label>
                  <label className='TechnologyUsed'><label className='ProjectInnerClass'><b>Technology Used -</b> </label> Python, MySQL, OpenWeatherMap API</label><br></br>
                  <label className='ProjectGithub' onClick={WeatherForecasting}>GitHub Link</label>                
                </div>
              </div>
              <div className='ProjectGap'></div>
              <div className='ProjectCard1'>
                <img src={ReactProject} alt="Java Project pic" className="img-Project" />
                <div className='ProjectCardText'>
                <label className='ProjectName'>Expense Tracker System using React MERN Stack</label>
                <label className='ProjectDesc'>The Expense Tracker Application 
                  aims to provide a user-friendly and efficient solution for managing income and expenses. This application will allow users to add, update, and delete income and expense 
                  transactions, as well as visualize their financial data through various graphs and charts.</label>
                  <label className='TechnologyUsed'><label className='ProjectInnerClass'><b>Technology Used -</b> </label> React, MongoDB, Node JS, Express, CSS</label><br></br>
                  <label className='ProjectGithub' onClick={ExpenseTracker}>GitHub Link</label>                
                </div>
              </div>
              <div className='ProjectGap'></div>
              <div className='ProjectCard2'>
                <div className='ProjectCardText'>
                <label className='ProjectName'>Travel Blog Website - rpdiary.com (Self-Learning)</label>
                <label className='ProjectDesc'>Created a website named Rpdiary.com (Travelling Blog) using WordPress dashboard and
                    hosting it for one year. Perform SEO (Search Engine Optimisation) implementation and
                    apply advertising to the website by Infolinks and Google ad-sense.</label>
                  <label className='TechnologyUsed'><label className='ProjectInnerClass'><b>Technology Used -</b> </label> WordPress, Yoast SEO, rankMath, Adsense</label><br></br>
                </div>
              </div>
            </div>
          </div>
      </div>
      <Footer />
    </div>
  );
};

export default Projects