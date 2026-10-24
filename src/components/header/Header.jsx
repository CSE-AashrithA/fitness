import "./Header.css";
import logo from "./images/logo.jpg";
import Navigation from "../navigation/Navigation";
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header className="main-header">
            <div className="header-content">
                <NavLink className="logo" to="/">
                    <img src={logo} alt="FitGuide logo" />
                    <span>FitGuide</span>
                </NavLink>

                <Navigation />

                <NavLink className="contact-button" to="/contact">
                    Contact us
                </NavLink>
            </div>
        </header>
    );
};

export default Header;