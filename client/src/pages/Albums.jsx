import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import UseFetchProduct from "../components/UseFetchProduct.jsx";

const Albums = () => {
  return (
    <div>
      <Navbar />
      <UseFetchProduct />
      <Footer />
    </div>
  );
};

export default Albums;
