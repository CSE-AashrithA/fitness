import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Layout from "./Layout";
import Home from "./pages/home/Home";
import Nutrition from "./pages/nutrition/Nutrition";
import Workouts from "./pages/workouts/Workouts";
import PreGame from "./pages/pre-game/PreGame";
import Contact from "./pages/contact/Contact";

const App = () => {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="nutrition" element={<Nutrition />} />
                    <Route path="workouts" element={<Workouts />} />
                    <Route path="pre-game" element={<PreGame />} />
                    <Route path="contact" element={<Contact />} />
                </Route>
            </Routes>
        </HashRouter>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);