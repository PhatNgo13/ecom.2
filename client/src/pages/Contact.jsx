import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import InputForm from "../components/InputForm.jsx";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <InputForm />
      <Footer />
    </div>
  );
};

export default Contact;
