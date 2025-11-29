import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


const Inicio = () => {
  return (
    <>
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">

          <div className="carousel-item active">
            <div className="carousel-ratio">
              <img src="img/banderin.jpg" className="w-100 h-100 object-fit-cover" alt="..." />
            </div>
          </div>

          <div className="carousel-item">
            <div className="carousel-ratio">
              <img src="img/luces estadio.webp" className="w-100 h-100 object-fit-cover" alt="..." />
            </div>
          </div>

          <div className="carousel-item">
            <div className="carousel-ratio">
              <img src="img/pelota red.jpg" className="w-100 h-100 object-fit-cover" alt="..." />
            </div>
          </div>

        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>

      </div>
    </>
  );
};

export default Inicio;
