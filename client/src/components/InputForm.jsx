import React from "react";

const InputForm = () => {
  return (
    <div className="p-3 pt-5 m-5">
      <div className="container px-5 pt-4 ml-5">
        <div className="card">
          <div className="row no-gutters">
            <div className="col-lg-5">
              <img
                className="input card-img img-fluid"
                src="image/contactphoto.jpeg"
                alt="location image"
              />
            </div>
            <div className="col-sm-7">
              <div className="card-body">
                <h3 className="card-title pb-3">Come visit me</h3>
                <p>21 Park Ln Cir, North York, ON M3B 1Z8, Canada.</p>
                <p>
                  21,000 sqft Versailles-inspired estate in Toronto's exclusive
                  Bridle Path neighborhood.
                </p>
                <button className="btn mt-5">Get location</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container p-5 pb-4 ml-5">
        <form id="contactForm">
          <div className="mb-3">
            <label className="form-label" htmlFor="name">
              Name
            </label>
            <input
              className="form-control"
              id="name"
              type="text"
              placeholder="Name"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="emailAddress">
              Email Address
            </label>
            <input
              className="form-control"
              id="emailAddress"
              type="email"
              placeholder="Email Address"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="message">
              What should I listen to next?
            </label>
            <textarea
              className="form-control"
              id="message"
              type="text"
              placeholder="Message"
              required
            ></textarea>
          </div>
          <div className="d-grid">
            <button className="btn btn-lg" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InputForm;
