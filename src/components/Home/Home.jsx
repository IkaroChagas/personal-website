import { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import homeAnime from "./../../assets/home_anime.gif";

class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <div className="header-text">
          <h1>Seja bem vindo(a)!</h1>
          <p>Sou Íkaro Chagas, e sou <u>desenvolvedor front-end</u>.</p>
        </div>
        <div className="header-btns">
          <Link className="btn btn-white" to="/about">
            <p className="btn-text">Mais sobre mim</p>
          </Link>
          <Link className="btn btn-transparent" to="/contact">
            <p className="btn-text">Entre em contato</p>
          </Link>
        </div>
        <div className="splash-image">
          <img
            src={homeAnime}
            alt="animation"
            loading="lazy"
            className="home-anim"
          />
        </div>
      </div>
    );
  }
}

export default Home;
