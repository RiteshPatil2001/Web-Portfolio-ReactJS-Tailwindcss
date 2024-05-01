import React, { useEffect, useState, useRef } from "react";
import Header from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import FormInputField from "../Components/FormInputField";
import FormTextField from "../Components/FormTextField";

const Message = () => {
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

  const form = useRef();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    contact: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });

    // Clear error message when user starts typing or corrects the input
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
  };

  const validate = async (e) => {
    e.preventDefault();
  
    const contactPattern = /^[1-9]\d{9}$/;
    const namePattern = /^(\w+\s){1,2}\w+$/;
    const emailPattern = /\S+@\S+\.\S+/;
    const subjectPattern = /^[a-zA-Z0-9\s!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]+$/;
    const messagePattern = /^[\w\s\S]{1,1000}$/;
  
    // Reset errors
    setErrors({
      name: "",
      email: "",
      contact: "",
      subject: "",
      message: "",
    });
  
    let hasErrors = false;
  
    // Name validation
    if (formData.name.trim() === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: "Name cannot be empty.",
      }));
      hasErrors = true;
    } else if (!namePattern.test(formData.name.trim())) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        name: "Name is not valid.",
      }));
      hasErrors = true;
    }
  
    // Email validation
    if (formData.email.trim() === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Email cannot be empty.",
      }));
      hasErrors = true;
    } else if (!emailPattern.test(formData.email.trim())) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Email is not valid.",
      }));
      hasErrors = true;
    }
  
    // Contact validation
    if (formData.contact.trim() === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        contact: "Contact cannot be empty.",
      }));
      hasErrors = true;
    } else if (!contactPattern.test(formData.contact.trim())) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        contact: "Contact number should be exactly 10 digits.",
      }));
      hasErrors = true;
    }
  
    // Subject validation
    if (formData.subject.trim() === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        subject: "Subject cannot be empty.",
      }));
      hasErrors = true;
    } else if (!subjectPattern.test(formData.subject.trim())) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        subject: "Subject should not be more than 100 digit.",
      }));
      hasErrors = true;
    }
  
    // Message validation
    if (formData.message.trim() === "") {
      setErrors((prevErrors) => ({
        ...prevErrors,
        message: "Message cannot be empty.",
      }));
      hasErrors = true;
    } else if (!messagePattern.test(formData.message.trim())) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        message: "Message should not be more than 1000 digits",
      }));
      hasErrors = true;
    }
  
    if (!hasErrors) {
      setFormData({
        name: "",
        email: "",
        contact: "",
        subject: "",
        message: "",
      });
      
      Swal.fire({
        icon: 'success',
        title: 'Hurreyyy....!!',
        text: 'Message Sent Successfully',
      });
    }

  };

    return (
      <>
        <Header />
        <div className="w-full p-8 phone:pt-8 tablet:p-20 laptop:p-12 desktop:p-12  text-center text-white">
        <h1 className="text-center font-bold uppercase phone:text-xl tablet:text-4xl laptop:text-5xl desktop:text-5xl	text-white font-sans mb-16">
          Send a <label className="text-[gold]">Personalized Message</label>
        </h1>
        <div className="flex justify-center">
          <div className="w-fit text-left">
            <form ref={form} onSubmit={validate}>
              <FormInputField label="Name" type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder="Your Name" errorid="errorname" errormessage={errors.name} />
              <FormInputField label="Email" type="text" name="email" value={formData.email} onChange={handleInputChange} placeholder="Your Email-ID" errorid="erroremail" errormessage={errors.email} />
              <FormInputField label="Contact" type="contact" name="contact" value={formData.contact} onChange={handleInputChange} placeholder="Your Contact" errorid="errorcontact" errormessage={errors.contact} />
              <FormInputField label="Subject" type="text" name="subject" value={formData.subject} onChange={handleInputChange} placeholder="Subject" errorid="errorsubject" errormessage={errors.subject} />
              <FormTextField label="Message" type="text" name="message" value={formData.message} onChange={handleInputChange} placeholder="Message" errorid="errormessage" errormessage={errors.message} />
              <div className="flex justify-center mt-12">
                <button type="submit" className="px-8 py-2 rounded-lg text-3xl font-bold justify-center bg-[gold] text-black font-sans hover:scale-90 active:scale-100">Send</button>
              </div>
            </form>
          </div>
          </div>
      </div>
      <Footer />
    </>
  );
};

export default Message;
