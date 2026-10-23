import "./Navigation.css";
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <nav className="main-nav">
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/nutrition">Nutrition</NavLink></li>
                <li><NavLink to="/workouts">Workouts</NavLink></li>
                <li><NavLink to="/pre-game">Pre-Game Fuel</NavLink></li>
            </ul>
        </nav>
    );
};

export default Navigation;