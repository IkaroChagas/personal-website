import { useNavigate, useLocation } from "react-router-dom";
import "./GoHome.css";
import homeIconWhite from "./../../assets/home_white.png";
import homeIconBlack from "./../../assets/home_black.png";

function GoHome() {
  const navigate = useNavigate();
  const location = useLocation();
  const whiteBtn = location.pathname === "/";

  const navigateToHome = () => {
    navigate("/");
  };

  return (
    <button
      onClick={navigateToHome}
      className={`go-home-btn ${whiteBtn ? 'white-bg' : 'gradient-bg'}`}
    >
      <img
        src={whiteBtn ? homeIconBlack : homeIconWhite}
        className="home-icon"
        alt="Home-Icon"
        loading="lazy"
      />
    </button>
  );
}

export default GoHome;
