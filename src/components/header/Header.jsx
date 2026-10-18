import "./Header.css";
import logo from "./images/logo.jpg";
import Navigation from "../navigation/Navigation";

const Header = () => {
    return (
        <header className="main-header">
            <div className="header-content">
                <a className="logo" href="#">
                    <img src={logo} alt="FitGuide logo" />
                    <span>FitGuide</span>
                </a>

                <Navigation />

                <a className="contact-button" href="#">
                    Contact us
                </a>
            </div>
        </header>
    );
};

export default Header;