import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import JavaProject from "../Assests/JavaProject.png";
import PythonProject from "../Assests/WeatherForecasting.png";
import ReactProject from "../Assests/ExpenseTracker.png";
import Footer from "../Components/Navbar";
import Header from "../Components/Footer";
import { useNavigate } from "react-router-dom";

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
      <div className="w-full phone:p-4 phone:pt-8 tablet:p-12 laptop:p-16 desktop:p-16 text-white">
        <h1 className="text-center font-bold uppercase phone:text-xl tablet:text-4xl laptop:text-5xl desktop:text-5xl	text-white font-sans mb-16">
          My Recent <label className="text-[gold]">Works</label>
        </h1>
        <div className="laptop:flex desktop:flex align-horizontal w-full h-fit rounded-lg bg-[#9ee4d918] overflow-hidden mb-24">
          <img
            src={JavaProject}
            alt="Java Project pic"
            className="desktop:w-5/12 laptop:w-5/12"
          />
          <div className="p-4">
            <label className="border-b-2 border-[gold] phone:text-lg tablet:text-xl laptop:text-2xl desktop::text-2xl font-serif">
              FlyEase - Web-based Flight Ticket Booking Application
            </label>
            <label className="phone:pt-2 tablet:pt-3 laptop:pt-4 desktop:pt-4 phone:text-sm tablet:text-base font-sans text-justify laptop:text-lg desktop:text-lg ">
              FlyEase, a web-based flight ticket booking application developed
              using the Spring Boot MVC framework. The application enables users
              to search for flights, access flight details, and make online
              bookings. It also consists of admin section for managing flights
              and user details. Utilized the MySQL database to store and manage
              flight-related information.
            </label>
            <label className="phone:pt-3 tablet:pt-3 laptop:pt-4 desktop:pt-4 phone:pl-1 tablet:pl-2 laptop:pl-4 desktop:pl-4 font-sans phone:mb-3 tablet:mb-3 ">
              <label className="text-[gold]">
                <b>Technology Used -</b>{" "}
              </label>{" "}
              Java, Spring MVC, JSP, JPA, MySQL
            </label>
            <br></br>
            <label
              className="border-2 border-[gold] text-[gold] bg-black phone:text-sm phone:p-2 tablet:p-2 laptop:p-3 desktop:p-3 float-right rounded-lg cursor-pointer hover:scale-90 active:scale-100 phone:mb-3 tablet:mb-3"
              onClick={FlyEaseProject}
            >
              GitHub Link
            </label>
          </div>
        </div>

        <div className="laptop:flex desktop:flex align-horizontal w-full h-fit rounded-lg bg-[#9ee4d918] overflow-hidden mb-24">
          <img
            src={PythonProject}
            alt="Java Project pic"
            className="laptop:w-[210%] laptop:h-[320px] desktop:w-[210%] desktop:h-[320px] phone:h-[220px] tablet:h-[420px] tablet:w-[150%] phone:w-full tablet:"
          />
          <div className="p-4">
            <label className="border-b-2 border-[gold] phone:text-lg tablet:text-xl laptop:text-2xl desktop::text-2xl font-serif laptop:w-[193%] laptop:h-320px desktop:w-[193%] desktop:h-320px">
              Weather Forecasting App
            </label>
            <label className="phone:pt-2 tablet:pt-3 laptop:pt-4 desktop:pt-4 phone:text-sm tablet:text-base font-sans text-justify laptop:text-lg desktop:text-lg ">
              This Weather App is a simple Python application built using the
              Tkinter library for the GUI, and it utilizes the OpenWeatherMap
              API to fetch real-time weather data. The app displays current
              weather information, including temperature, weather condition,
              humidity, wind speed, and more. It also allows users to view past
              5 days' weather records for a specific location.
            </label>
            <label className="phone:pt-3 tablet:pt-3 laptop:pt-4 desktop:pt-4 phone:pl-1 tablet:pl-2 laptop:pl-4 desktop:pl-4  font-sans phone:mb-3 tablet:mb-3 ">
              <label className="text-[gold]">
                <b>Technology Used -</b>{" "}
              </label>{" "}
              Python, MySQL, OpenWeatherMap API
            </label>
            <br></br>
            <label
              className="border-2 border-[gold] text-[gold] bg-black phone:text-sm phone:p-2 tablet:p-2 laptop:p-3 desktop:p-3 float-right rounded-lg cursor-pointer hover:scale-90 active:scale-100 phone:mb-3 tablet:mb-3"
              onClick={WeatherForecasting}
            >
              GitHub Link
            </label>
          </div>
        </div>

        <div className="laptop:flex desktop:flex align-horizontal w-full h-fit rounded-lg bg-[#9ee4d918] overflow-hidden mb-24">
          <img
            src={ReactProject}
            alt="Java Project pic"
            className="desktop:w-5/12 laptop:w-5/12"
          />
          <div className="p-4">
            <label className="border-b-2 border-[gold] phone:text-lg tablet:text-xl laptop:text-2xl desktop::text-2xl font-serif">
              Expense Tracker System using React MERN Stack
            </label>
            <label className="phone:pt-2 tablet:pt-3 laptop:pt-4 desktop:pt-4 phone:text-sm tablet:text-base font-sans text-justify laptop:text-lg desktop:text-lg ">
              The Expense Tracker Application aims to provide a user-friendly
              and efficient solution for managing income and expenses. This
              application will allow users to add, update, and delete income and
              expense transactions, as well as visualize their financial data
              through various graphs and charts.
            </label>
            <label className="phone:pt-3 tablet:pt-3 laptop:pt-4 desktop:pt-4 phone:pl-1 tablet:pl-2 laptop:pl-4 desktop:pl-4  font-sans phone:mb-3 tablet:mb-3 ">
              <label className="text-[gold]">
                <b>Technology Used -</b>{" "}
              </label>{" "}
              React, MongoDB, Node JS, Express, CSS
            </label>
            <br></br>
            <label
              className="border-2 border-[gold] text-[gold] bg-black phone:text-sm phone:p-2 tablet:p-2 laptop:p-3 desktop:p-3 float-right rounded-lg cursor-pointer hover:scale-90 active:scale-100 phone:mb-3 tablet:mb-3"
              onClick={ExpenseTracker}
            >
              GitHub Link
            </label>
          </div>
        </div>

        <div className="laptop:flex desktop:flex align-horizontal w-full h-fit rounded-lg bg-[#9ee4d918] overflow-hidden mb-24">
          <div className="p-8">
            <label className="border-b-2 border-[gold] phone:text-lg tablet:text-xl laptop:text-2xl desktop::text-2xl font-serif">
              Travel Blog Website - rpdiary.com (Self-Learning)
            </label>
            <label className="phone:pt-2 tablet:pt-3 laptop:pt-4 desktop:pt-4 phone:text-sm tablet:text-base font-sans text-justify laptop:text-lg desktop:text-lg ">
              Created a website named Rpdiary.com (Travelling Blog) using
              WordPress dashboard and hosting it for one year. Perform SEO
              (Search Engine Optimisation) implementation and apply advertising
              to the website by Infolinks and Google ad-sense.
            </label>
            <label className="phone:pt-3 tablet:pt-3 laptop:pt-4 desktop:pt-4 phone:pl-1 tablet:pl-2 laptop:pl-4 desktop:pl-4  font-sans phone:mb-3 tablet:mb-3 ">
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
