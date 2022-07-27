import React from "react";
import pro1 from "../../../Photos/Products/jacket-1.png";
import pro2 from "../../../Photos/Products/jacket-2.png";
import pro3 from "../../../Photos/Products/jacket-3.png";
import "./itemOne.css";

const Itemone = () => {
  return (
    <div className="container">
      <h1 className="item_one_Title ">WOMAN JACKET</h1>

      <div class="row row-cols-1 row-cols-md-3 g-4">

        <div className="col card_pad">
          <div className="card h-100 item_one_card card_shadow">
            <img src={pro1} className="card-img-top item_one_img" alt="..." />
            <div className="card-body">
              <h5 className="card-title i_one_title">Card title</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
              </p>
            </div>
            <div className="d-flex justify-content-around align-items-center">
              <h2 className="card_pay">$234</h2>
              <button type="button" class="btn btn-light item_button">
                <i className="fa-solid fa-cart-plus me-1"></i>
                BUY NOW
              </button>
            </div>
          </div>
        </div>

        <div className="col card_pad">
          <div className="card h-100 item_one_card card_shadow">
            <img src={pro2} className="card-img-top item_one_img" alt="..." />
            <div className="card-body">
              <h5 className="card-title i_one_title">Card title</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
              </p>
            </div>
            <div className="d-flex justify-content-around align-items-center">
              <h2 className="card_pay">$234</h2>
              <button type="button" class="btn btn-dark item_button">
                <i className="fa-solid fa-cart-plus me-1"></i>
                BUY NOW
              </button>
            </div>
          </div>
        </div>

        <div className="col card_pad">
          <div className="card h-100 item_one_card card_shadow">
            <img src={pro3} className="card-img-top item_one_img" alt="..." />
            <div className="card-body">
              <h5 className="card-title i_one_title">Card title</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.{" "}
              </p>
            </div>
            <div className="d-flex justify-content-around align-items-center">
              <h2 className="card_pay">$234</h2>
              <button type="button" class="btn btn-dark item_button">
                <i className="fa-solid fa-cart-plus me-1"></i>
                BUY NOW
              </button>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Itemone;
