import React from "react";
import Home from "../pages/Home";
import { Plant } from "../pages/Home";
import "./Caroussel.css";
interface Plantprops {
  testList: Plant[];
}

const Caroussel = ({ testList }: Plantprops) => {
  return (
    <div
      id="carouselExampleDark"
      className="carousel carousel-dark slide mb-2"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators ">
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="10000">
          <img
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              maxHeight: "300px",
              objectFit: "cover",
            }}
            className="d-block opacity-75 w-100"
            src={process.env.PUBLIC_URL + `/assets/carouslide (1).jpg`}
          />
          <div className="carousel-caption d-none d-md-block bg-light opacity-75 rounded-2">
            <h5>Salut à toi visiteur</h5>
            <p>Bienvenue sur NoTruffaut</p>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="3000">
          <img
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              maxHeight: "300px",
              objectFit: "cover",
            }}
            className="d-block opacity-75 w-100 "
            src={process.env.PUBLIC_URL + `/assets/carouslide (2).jpg`}
          />
          <div className="carousel-caption d-none d-md-block bg-light opacity-75 rounded-2">
            <h5>Merci de ta visite</h5>
            <p>Je t'assure que c'est pas truffaut wink wink 😉</p>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="3000">
          <img
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              maxHeight: "300px",
              objectFit: "cover",
            }}
            className="d-block opacity-75 w-100"
            src={process.env.PUBLIC_URL + `/assets/carouslide (3).jpg`}
          />
          <div className="carousel-caption d-none d-md-block bg-light opacity-75 rounded-2 ">
            <h5>Ah tu es toujours là ?!</h5>
            <p>
              et ouai je te confirme qu'on est toujours pas sur le site qu'on ne
              peut pas dire le nom...(mêmes si je l'ai fait juste avant)
            </p>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
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
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon "
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Caroussel;
