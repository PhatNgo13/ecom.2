import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import ProductCarousel from "../components/ProductCarousel.jsx";

const Home = () => {
  return (
    <div className="bg-dark">
      <Navbar />
      <br />
      <ProductCarousel />
      <Footer />
    </div>
  );
};

export default Home;
