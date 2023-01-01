import React from "react";
import { Link } from "react-router-dom";

const ProductCarousel = () => {
  return (
    <div>
      <div
        id="carouselCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselCaptions"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselCaptions"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselCaptions"
            data-bs-slide-to="5"
            aria-label="Slide 6"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselCaptions"
            data-bs-slide-to="6"
            aria-label="Slide 7"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselCaptions"
            data-bs-slide-to="7"
            aria-label="Slide 8"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselCaptions"
            data-bs-slide-to="8"
            aria-label="Slide 9"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <video autoPlay muted loop className="d-block w-100">
              <source src="video/h&vpreview.mp4" type="video/mp4" />
            </video>
            <div className="carousel-caption d-none d-md-block">
              <Link to="/albums">
                <img
                  src="image/5h&v.png"
                  className="img border-0 img-fluid"
                  alt="album cover"
                ></img>
              </Link>
              <p>
                <small className="text-light">HEROES & VILLAINS</small>
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <video autoPlay muted loop className="d-block w-100">
              <source src="video/allapreview.mp4" type="video/mp4" />
            </video>
            <div className="carousel-caption d-none d-md-block">
              <Link to="/albums">
                <img
                  src="image/16alla.png"
                  className="img border-0 img-fluid"
                  alt="album cover"
                ></img>
              </Link>
              <p>
                <small className="text-light">AT.LONG.LAST.A$AP</small>
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <video autoPlay muted loop className="d-block w-100">
              <source src="video/spreview.mp4" type="video/mp4" />
            </video>
            <div className="carousel-caption d-md-block">
              <Link to="/albums">
                <img
                  src="image/3s.jpeg"
                  className="img border-0 img-fluid"
                  alt="album cover"
                ></img>
              </Link>
              <p>
                <small className="text-light">SWIMMING</small>
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <video autoPlay muted loop className="d-block w-100">
              <source src="video/hlpreview.mp4" type="video/mp4" />
            </video>
            <div className="carousel-caption d-md-block">
              <Link to="/albums">
                <img
                  src="image/2hl.png"
                  className="img border-0 img-fluid"
                  alt="album cover"
                ></img>
              </Link>
              <p>
                <small className="text-light">HER LOSS</small>
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <video autoPlay muted loop className="d-block w-100">
              <source src="video/widopreview.mp4" type="video/mp4" />
            </video>
            <div className="carousel-caption d-md-block">
              <Link to="/albums">
                <img
                  src="image/19wido.jpeg"
                  className="img border-0 img-fluid"
                  alt="album cover"
                ></img>
              </Link>
              <p>
                <small className="text-light">WHEN IT'S DARK OUT</small>
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <video autoPlay muted loop className="d-block w-100">
              <source src="video/dfmpreview.mp4" type="video/mp4" />
            </video>
            <div className="carousel-caption d-none d-md-block">
              <Link to="/albums">
                <img
                  src="image/12dfm.jpeg"
                  className="img border-0 img-fluid"
                  alt="album cover"
                ></img>
              </Link>
              <p>
                <small className="text-light">DAWN FM</small>
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <video autoPlay muted loop className="d-block w-100">
              <source src="video/hohpreview.mp4" type="video/mp4" />
            </video>
            <div className="carousel-caption d-md-block">
              <Link to="/albums">
                <img
                  src="image/18hoh.jpeg"
                  className="img border-0 img-fluid"
                  alt="album cover"
                ></img>
              </Link>
              <p>
                <small className="text-light">HEAVEN OR HELL</small>
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <video autoPlay muted loop className="d-block w-100">
              <source src="video/twtaspreview.mp4" type="video/mp4" />
            </video>
            <div className="carousel-caption d-md-block">
              <Link to="/albums">
                <img
                  src="image/20twtas.png"
                  className="img border-0 img-fluid"
                  alt="album cover"
                ></img>
              </Link>
              <p>
                <small className="text-light">THAT'S WHAT THEY ALL SAY</small>
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <video autoPlay muted loop className="video d-block w-100">
              <source src="video/uspreview.mp4" type="video/mp4" />
            </video>
            <div className="carousel-caption d-none d-md-block">
              <Link to="/albums">
                <img
                  src="image/6us.png"
                  className="img border-0 img-fluid"
                  alt="album cover"
                ></img>
              </Link>
              <p>
                <small className="text-light">UNTIDY SOUL</small>
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCarousel;
