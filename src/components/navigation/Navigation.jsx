import "./Navigation.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleNav = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="main-nav">
            <button id="toggle-nav" onClick={toggleNav}>
                {menuOpen ? "⌃" : "⌄"}
            </button>

            <ul className={menuOpen ? "" : "hide-small"}>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/nutrition">Nutrition</NavLink></li>
                <li><NavLink to="/workouts">Workouts</NavLink></li>
                <li><NavLink to="/contact">Contact Us</NavLink></li>
            </ul>
        </nav>
    );
};

export default Navigation;