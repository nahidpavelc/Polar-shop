import React from "react";
import caro from "../../../Photos/Products/model.png";
import "./Cover.css";

const Cover = () => {
  return (
    <div className="cover_color">
      <div className="container">
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-bs-ride="false"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="card mb-3 cover_card_color">
              <div class="row g-0">
                <div class="col-md-6">
                  <div class="card-body mt-5">
                    <h5 class="card-title title1">Be the POLAR BEAR </h5>
                    <h5 class="card-title title2">of Winter</h5>
                    <p class="card-text ">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <div className="mt-4 d-flex ">
                      
                      <button class="btn btn-green">
                        {" "}
                        <i class="fa-solid fa-cart-plus"></i>Buy Now
                      </button>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <img src={caro} class="img-fluid rounded-start" alt="..." />
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    </div>
  );
};

export default Cover;
