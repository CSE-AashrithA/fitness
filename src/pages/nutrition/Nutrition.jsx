import "./Nutrition.css";
import { useEffect, useState } from "react";
import Hero from "../../components/hero/Hero";
import { Link } from "react-router-dom";
import nutritionHero from "../../images/nutrition/nutrition-hero.jpg";
import BasicCard from "../../components/basic-card/BasicCard";
import preGameFuelImage from "../../images/nutrition/pre-game-fuel.jpg";
import InfoCard from "../../components/card/InfoCard";
import GuideModal from "../../components/guide-modal/GuideModal";
import GuideForm from "../../components/guide-form/GuideForm";

const serverUrl = "https://fitguide-server-1.onrender.com";

const Nutrition = () => {
    const [guides, setGuides] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedGuide, setSelectedGuide] = useState(null);

    useEffect(() => {
        fetch(`${serverUrl}/api/fitness`)
            .then((response) => response.json())
            .then((data) => {
                setGuides(data);
                setLoading(false);
            })
            .catch(() => {
                setLoading(false);
            });
    }, []);

    const addGuideToList = (newGuide) => {
        setGuides((currentGuides) => [newGuide, ...currentGuides]);
    };

    return (
        <main className="nutrition-page">
            <Hero
                label="NUTRITION"
                title={<>Fuel every rep,<br /><span>run, and game.</span></>}
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
                                image={`${serverUrl}/${guide.main_image}`}
                                imageAlt={guide.title}
                                title={guide.title}
                                text={guide.description}
                                onClick={() => setSelectedGuide(guide)}
                            />
                        ))}
                    </div>
                )}
            </section>

            <section className="add-guide-section">
                <div className="add-guide-layout">
                    <div className="add-guide-content">
                        <div className="section-title">
                            <span></span>
                            <h2>Share a helpful guide.</h2>
                        </div>

                        <p>
                            Have a simple nutrition, hydration, meal, or recovery
                            tip? Add it to the FitGuide collection for other
                            college athletes.
                        </p>

                        <p className="add-guide-note">
                            Your guide appears in the collection immediately
                            after it is successfully added.
                        </p>
                    </div>

                    <GuideForm onGuideAdded={addGuideToList} />
                </div>
            </section>

            <GuideModal
                guide={selectedGuide}
                imageUrl={
                    selectedGuide
                        ? `${serverUrl}/${selectedGuide.main_image}`
                        : ""
                }
                onClose={() => setSelectedGuide(null)}
            />
        </main>
    );
};

export default Nutrition;