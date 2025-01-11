import React from "react";
import me from "../images/Mario.jpg";
import { Link } from "react-router-dom";
function HomePage() {
  return (
    <div className="home-page">
      <div className="home-page__container">
        <h1 className="home-page__container_title">
          Hola! Bienvenido a mi Pokedex
        </h1>
        <h2 className="home-page__container_title-author">Nombre del autor</h2>
        <img
          src={me}
          alt="Mario"
          className="home-page__container_title-author-image"
        />
        <p className="home-page__container_span">
          Haz clic en el botón de abajo para acceder a la aplicación y ver los
          Pokémon.
        </p>
        <Link to="/app">
          <button className="home-page__container_button">Ingresar</button>
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
