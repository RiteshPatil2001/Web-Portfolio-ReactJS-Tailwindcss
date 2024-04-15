import React, { useEffect } from "react";
import "./Projects.css";
import "bootstrap/dist/css/bootstrap.min.css";
import JavaProject from "../../Assests/JavaProject.png";
import PythonProject from "../../Assests/WeatherForecasting.png";
import ReactProject from "../../Assests/ExpenseTracker.png";
import Header from "../Header/Navbar";
import Footer from "../Footer/Footer";
import { useNavigate } from 'react-router-dom';

const Projects = () => {
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

  const FlyEaseProject = () => {
    window.open("https://github.com/RiteshPatil2001", "_blank");
  };
  const WeatherForecasting = () => {
    window.open(
      "https://github.com/RiteshPatil2001/Weather-Forecasting-App-Using-Python.git",
      "_blank"
    );
  };
  const ExpenseTracker = () => {
    window.open(
      "https://github.com/RiteshPatil2001/Expense-Tracker-System-Using-React-MERN-Stack.git",
      "_blank"
    );
  };
  return (
    <>
      <Header />
      <div className="w-full p-16 text-white">
        <h1 className="text-center font-bold uppercase text-5xl	text-white font-sans mb-16">
          My Recent <label className="text-[gold]">Works</label>
        </h1>
        <div className="flex align-horizontal w-full h-fit rounded-lg bg-[#9ee4d918] overflow-hidden mb-24">
          <img src={JavaProject} alt="Java Project pic" className="w-5/12" />
          <div className="p-4">
            <label className="border-b-2 border-[gold] text-2xl font-serif">
              FlyEase - Web-based Flight Ticket Booking Application
            </label>
            <label className="pt-4 font-sans text-justify">
              FlyEase, a web-based flight ticket booking application developed
              using the Spring Boot MVC framework. The application enables users
              to search for flights, access flight details, and make online
              bookings. It also consists of admin section for managing flights
              and user details. Utilized the MySQL database to store and manage
              flight-related information.
            </label>
            <label className="pt-4 pl-4 font-sans">
              <label className="text-[gold]">
                <b>Technology Used -</b>{" "}
              </label>{" "}
              Java, Spring MVC, JSP, JPA, MySQL
            </label>
            <br></br>
            <label
              className="border-2 border-[gold] text-[gold] bg-black p-3 float-right rounded-lg cursor-pointer hover:scale-90 active:scale-100"
              onClick={FlyEaseProject}
            >
              GitHub Link
            </label>
          </div>
        </div>
        <div className="flex align-horizontal w-full h-fit rounded-lg bg-[#9ee4d918] overflow-hidden mb-24">
          <img
            src={PythonProject}
            alt="Java Project pic"
            className="project-img"
          />
          <div className="p-4">
            <label className="border-b-2 border-[gold] text-2xl font-serif">
              Weather Forecasting App
            </label>
            <label className="pt-4 font-sans text-justify">
              This Weather App is a simple Python application built using the
              Tkinter library for the GUI, and it utilizes the OpenWeatherMap
              API to fetch real-time weather data. The app displays current
              weather information, including temperature, weather condition,
              humidity, wind speed, and more. It also allows users to view past
              5 days' weather records for a specific location.
            </label>
            <label className="pt-4 pl-4 font-sans">
              <label className="text-[gold]">
                <b>Technology Used -</b>{" "}
              </label>{" "}
              Python, MySQL, OpenWeatherMap API
            </label>
            <br></br>
            <label
              className="border-2 border-[gold] text-[gold] bg-black p-3 float-right rounded-lg cursor-pointer hover:scale-90 active:scale-100"
              onClick={WeatherForecasting}
            >
              GitHub Link
            </label>
          </div>
        </div>
        <div className="flex align-horizontal w-full h-fit rounded-lg bg-[#9ee4d918] overflow-hidden mb-24">
          <img src={ReactProject} alt="Java Project pic" className="w-5/12" />
          <div className="p-4">
            <label className="border-b-2 border-[gold] text-2xl font-serif">
              Expense Tracker System using React MERN Stack
            </label>
            <label className="pt-4 font-sans text-justify">
              The Expense Tracker Application aims to provide a user-friendly
              and efficient solution for managing income and expenses. This
              application will allow users to add, update, and delete income and
              expense transactions, as well as visualize their financial data
              through various graphs and charts.
            </label>
            <label className="pt-4 pl-4 font-sans">
              <label className="text-[gold]">
                <b>Technology Used -</b>{" "}
              </label>{" "}
              React, MongoDB, Node JS, Express, CSS
            </label>
            <br></br>
            <label
              className="border-2 border-[gold] text-[gold] bg-black p-3 float-right rounded-lg cursor-pointer hover:scale-90 active:scale-100"
              onClick={ExpenseTracker}
            >
              GitHub Link
            </label>
          </div>
        </div>
        <div className="flex align-horizontal w-full h-fit rounded-lg bg-[#9ee4d918] overflow-hidden mb-24">
          <div className="p-8">
            <label className="border-b-2 border-[gold] text-2xl font-serif">
              Travel Blog Website - rpdiary.com (Self-Learning)
            </label>
            <label className="pt-4 font-sans text-justify">
              Created a website named Rpdiary.com (Travelling Blog) using
              WordPress dashboard and hosting it for one year. Perform SEO
              (Search Engine Optimisation) implementation and apply advertising
              to the website by Infolinks and Google ad-sense.
            </label>
            <label className="pt-4 pl-4 font-sans">
              <label className="text-[gold]">
                <b>Technology Used -</b>{" "}
              </label>{" "}
              WordPress, Yoast SEO, rankMath, Adsense
            </label>
            <br></br>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Projects;
