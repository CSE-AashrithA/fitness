import "./Nutrition.css";
import { useEffect, useState } from "react";
import Hero from "../../components/hero/Hero";
import { Link } from "react-router-dom";
import nutritionHero from "../../images/nutrition/nutrition-hero.jpg";
import BasicCard from "../../components/basic-card/BasicCard";
import preGameFuelImage from "../../images/nutrition/pre-game-fuel.jpg";
import InfoCard from "../../components/card/InfoCard";

const Nutrition = () => {
    const [guides, setGuides] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://fitguide-server-1.onrender.com/api/fitness")
            .then((response) => response.json())
            .then((data) => {
                setGuides(data);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
    }, []);

    return (
        <main className="nutrition-page">
            <Hero
                title={<>Fuel every rep,<br />run, and game.</>}
                text="Performance-driven nutrition guidance for college athletes with busy schedules, training, and classes."
                image={nutritionHero}
                imageAlt="College athlete preparing a healthy meal before training"
            >
                <Link className="nutrition-button" to="/pre-game">
                    Build My Nutrition Plan
                </Link>
            </Hero>

            <section className="basics-section">
                <div className="section-title">
                    <span></span>
                    <h2>Build your nutrition foundation.</h2>
                </div>

                <p className="section-intro">
                    Understanding nutrition basics can help you feel energized,
                    recover better, and stay ready for practices and games.
                </p>

                <div className="basic-card-columns">
                    <BasicCard
                        title="Protein for Muscle"
                        text="Protein helps your body repair and build muscle after workouts and practices."
                    />

                    <BasicCard
                        title="Carbohydrates for Power"
                        text="Carbohydrates give you energy for training, running, lifting, and competition."
                    />

                    <BasicCard
                        title="Optimal Hydration"
                        text="Drinking water throughout the day helps you perform and recover better."
                    />

                    <BasicCard
                        title="Habits and Recovery"
                        text="Consistent meals, sleep, and recovery habits help you stay prepared."
                    />
                </div>
            </section>

            <section className="featured-section">
                <div className="featured-layout">
                    <div className="featured-content">
                        <div className="section-title">
                            <span></span>
                            <h2>Featured pre-game strategy.</h2>
                        </div>

                        <h3>Pre-Game Carb Loading</h3>

                        <p>
                            Learn how to choose meals and snacks before practice or
                            competition so you have steady energy when you need it.
                        </p>

                        <Link className="featured-button" to="/pre-game">
                            View Pre-Game Fuel
                        </Link>
                    </div>

                    <Link className="featured-image" to="/pre-game">
                        <img
                            src={preGameFuelImage}
                            alt="Healthy pre-game meal with fruit and whole grains"
                        />
                    </Link>
                </div>
            </section>

            <section className="guide-section">
                <div className="section-title">
                    <span></span>
                    <h2>Nutrition guides for athletes.</h2>
                </div>

                {loading ? (
                    <p className="guide-message">Loading nutrition guides...</p>
                ) : (
                    <div className="guide-card-columns">
                        {guides.map((guide) => (
                            <InfoCard
                                key={guide._id}
                                image={`https://fitguide-server-1.onrender.com/${guide.main_image}`}
                                imageAlt={guide.title}
                                title={guide.title}
                                text={guide.description}
                            />
                        ))}
                    </div>
                )}
            </section>
        </main>
    );
};

export default Nutrition;