import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import JavaProject from "../Assests/JavaProject.png";
import PythonProject from "../Assests/WeatherForecasting.png";
import ReactProject from "../Assests/ExpenseTracker.png";
import Header from "../Components/Navbar";
import Footer from "../Components/Footer";
import ProjectCard from "../Components/ProjectCard";
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
    window.open(
      "https://github.com/RiteshPatil2001/Flight-Ticket-Booking-System-Using-Java",
      "_blank"
    );
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
      <div className="w-full phone:p-4 phone:pt-8 tablet:p-12 laptop:p-16 desktop:p-16 desktop:pt-40 laptop:pt-40 tablet:pt-32 text-black">
        <h1 className="text-center font-bold uppercase phone:text-xl tablet:text-4xl laptop:text-5xl desktop:text-5xl	text-[#056583] font-sans phone:mt-16 laptop:mb-12 desktop:mb-12">
          My Recent <label className="text-[#b73535]">Projects</label>
        </h1>

        <section id="cd-timeline" className="cd-container">
          <ProjectCard
            title="Hotel Management System (In-Progress)"
            description=" Developing a hotel management web application enabling room booking, customer registration, and reservation tracking with real-time availability updates. Implemented role-based access and secure authentication to streamline admin operations such as room status, billing, and check-in/check-out management. Designed a user-friendly interface to digitalize hotel workflows and reduce manual tasks. Implemented database operations for room, billing, and customer data handling."
            technologies="Angular, Java, Spring Boot MVC, MySQL"
          />

          <ProjectCard
            img={true}
            src={JavaProject}
            alt="flyease image"
            title="FlyEase - Flight Ticket Booking Web Application"
            description="FlyEase, a web-based flight ticket booking application developed using the Spring Boot MVC framework. The application enables users to search for flights, access flight details, and make online bookings. It also consists of admin section for managing flights and user details. Utilized the MySQL database to store and manage flight-related information."
            technologies="Java, Spring MVC, JSP, JPA, MySQL"
            button={true}
            onClick={FlyEaseProject}
          />

          <ProjectCard
            img={true}
            src={ReactProject}
            alt="expense tracker image"
            title="Expense Tracker System using React MERN Stack"
            description="The Expense Tracker Application aims to provide a user-friendly and efficient solution for managing income and expenses. This application will allow users to add, update, and delete income and expense transactions, as well as visualize their financial data through various graphs and charts."
            technologies="React, MongoDB, Node JS, Express, CSS"
            button={true}
            onClick={ExpenseTracker}
          />

          <ProjectCard
            img={true}
            src={PythonProject}
            alt="weather app image"
            title="Weather Forecasting App"
            description="This Weather App is a simple Python application built using the Tkinter library for the GUI, and it utilizes the OpenWeatherMap API to fetch real-time weather data. The app displays current weather information, including temperature, weather condition, humidity, wind speed, and more. It also allows users to view past 5 days' weather records for a specific location."
            technologies="Python, MySQL, OpenWeatherMap API"
            button={true}
            onClick={WeatherForecasting}
          />

          <ProjectCard
            title="Travel Blog Website - rpdiary.com (WordPress)"
            description="Created a website named Rpdiary.com (Travelling Blog) using WordPress dashboard and hosting it for one year. Perform SEO (Search Engine Optimisation) implementation and apply advertising to the website by Infolinks and Google ad-sense."
            technologies="WordPress, Yoast SEO, rankMath, Google Adsense"
          />
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Projects;
