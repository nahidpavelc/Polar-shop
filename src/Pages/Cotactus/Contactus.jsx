import React from "react";
import "./Contactus.css";

const Contactus = () => {
  return (
    <div>
      <div className="bg-info contact4 overflow-hidden position-relative">
        <div className="container">
          <div className="row no-gutters Container">
            <div className="container">
              <div className="col-lg-6 contact-box mb-4 mb-md-0">
                <div className="">
                  <h1 className="title font-weight-bold mt-2">
                    Contact Us
                  </h1>
                  <form className="mt-3">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="form-group mt-2">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="name"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group mt-2">
                          <input
                            className="form-control "
                            type="email"
                            placeholder="email address"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="form-group mt-2">
                          <textarea
                            className="form-control"
                            rows="3"
                            placeholder="message"
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-lg-12 d-flex align-items-center mt-2">
                        <button
                          type="submit"
                          className="btn text-inverse px-3 py-2 cont_button"

                        >
                          <span> Submit</span>
                        </button>
                        <span className="ml-auto align-self-center">
                          <i className="icon-phone mr-2"></i>+880 1546 9442
                        </span>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-6 right-image p-r-0">
              <iframe
              title="Gmaps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.625381941767!2d90.36133801429715!3d23.760734794299854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2871fff74d617a66!2sHRSOFT%20Bangladesh!5e0!3m2!1sen!2sbd!4v1658897479381!5m2!1sen!2sbd"
                width="100%"
                height="450"
                style={{border:'0'}}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactus;
