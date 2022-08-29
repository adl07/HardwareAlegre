import React from "react";

export default function carousel(){
    return(
        <div className="row">
            <div className="col">
            <div id="carouselExampleControls" class="mt-5 carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner mx-2">
    <div className="carousel-item active">
      <img src="https://cdn.jsdelivr.net/gh/persano/BannersWebMaximus/top-slider/banner-gamer-pc.webp" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://cdn.jsdelivr.net/gh/persano/BannersWebMaximus/top-slider/a1-notebook-mejor-precio.webp" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://cdn.jsdelivr.net/gh/persano/BannersWebMaximus/top-slider/a1-monitores-2022.webp" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
            </div>
        </div>
    )
}