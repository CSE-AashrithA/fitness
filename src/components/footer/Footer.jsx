import "./Footer.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="main-footer">
            <section className="footer-top">
                <div className="footer-title">
                    <span></span>
                    <h2>Ready to build your better routine?</h2>
                </div>

                <div className="footer-buttons">
                    <NavLink to="/contact">Contact us</NavLink>
                    <NavLink className="footer-workouts-button" to="/workouts">
                        Browse Workouts
                    </NavLink>
                </div>
            </section>

            <div className="footer-line"></div>

            <div className="footer-links">
                <div>
                    <h3>FITGUIDE</h3>
                    <p>Nutrition and training support for college athletes.</p>
                </div>

                <div>
                    <h4>Explore</h4>
                    <NavLink to="/nutrition">Nutrition</NavLink>
                    <NavLink to="/workouts">Workouts</NavLink>
                    <NavLink to="/pre-game">Pre-Game Fuel</NavLink>
                </div>

                <div>
                    <h4>Support</h4>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                </div>

                <div>
                    <h4>Connect</h4>
                    <a href="mailto:fitguide@email.sc.edu">Email</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;