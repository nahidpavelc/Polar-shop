import React from "react";
import "./Aboutus.css";
import shoping from "../../../Photos/icon/shopping.png";
import logo1 from "../../../Photos/icon/house.png";
import logo2 from "../../../Photos/icon/house.png";
import logo3 from "../../../Photos/icon/box.png";
import logo4 from "../../../Photos/icon/question.png";

const Aboutus = () => {
  return (
    <div className="container">
      <h1 className="item_one_Title">Our Services</h1>

      <div class="card mb-3 container remove_border">
        <div class="row g-0">
          <div class="col-md-5">
            <div class="card-body card-body1-Ser">
              {/* Second card */}
              <div class="card mb-3 remove_border card_shadow_ser card-body1-Ser">
                <div class="row g-0">
                  <div class="col-md-3 d-flex justify-content-around align-items-center">
                    <img
                      src={logo2}
                      class="img-fluid rounded-start "
                      alt="Logo2"
                      style={{ width: "78px", height: "82px" }}
                    />
                  </div>
                  <div class="col-md-9">
                    <div class="card-body">
                      <h5 class="card-title ser_card_title">
                        Find the Perfect Fit
                      </h5>
                      <p class="card-text">
                        Everybody is different, which is why we offer styles for
                        every body.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card mb-3 remove_border card_shadow_ser card-body1-Ser">
                <div class="row g-0">
                  <div class="col-md-3 d-flex justify-content-around align-items-center">
                    <img
                      src={logo3}
                      class="img-fluid rounded-start "
                      alt="Logo2"
                      style={{ width: "78px", height: "82px" }}
                    />
                  </div>
                  <div class="col-md-9">
                    <div class="card-body">
                      <h5 class="card-title ser_card_title">Free Exchanges</h5>
                      <p class="card-text">
                        One of the many reasons you can shop with peace of mind.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card mb-3 remove_border card_shadow_ser card-body1-Ser">
                <div class="row g-0">
                  <div class="col-md-3 d-flex justify-content-around align-items-center">
                    <img
                      src={logo4}
                      class="img-fluid rounded-start "
                      alt="Logo2"
                      style={{ width: "78px", height: "82px" }}
                    />
                  </div>
                  <div class="col-md-9">
                    <div class="card-body">
                      <h5 class="card-title ser_card_title">
                        Contact Our Seller
                      </h5>
                      <p class="card-text">
                        They are here to help you. That's quite literally what
                        we pay them for.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-7 ser-card-img">
            <img src={shoping} class="img-fluid rounded-start" alt="..." />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
