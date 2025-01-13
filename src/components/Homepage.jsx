import React from "react";
import me from "../images/Mario.jpg";
import { Link } from "react-router-dom";
function HomePage() {
  return (
    <div className="home-page">
      <div className="home-page__container">
        <h1 className="home-page__container_title">Hola! Bienvenido</h1>
        <h2 className="home-page__container_title-author">
          Nombre del autor: Mario
        </h2>
        <img
          src={me}
          alt="Mario"
          className="home-page__container_title-author-image"
        />
        <p className="home-page__container_span">
          Haz clic en el botón de abajo para ver la lista hasta la segunda
          generación de pokemon
        </p>
        <Link to="/app">
          <button className="home-page__container_button">
            Ingresa a la Pokedex
          </button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
