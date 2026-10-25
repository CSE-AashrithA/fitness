import "./Nutrition.css";
import Hero from "../../components/hero/Hero";
import { Link } from "react-router-dom";
import nutritionHero from "../../images/nutrition/nutrition-hero.jpg";
import BasicCard from "../../components/basic-card/BasicCard";
import preGameFuelImage from "../../images/nutrition/pre-game-fuel.jpg";
import InfoCard from "../../components/card/InfoCard";
import breakfastImage from "../../images/nutrition/breakfast.jpg";
import snacksImage from "../../images/nutrition/snacks.jpg";
import recoveryMealImage from "../../images/nutrition/recovery-meal.jpg";

const Nutrition = () => {
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

    <div className="guide-card-columns">
        <InfoCard
            image={breakfastImage}
            imageAlt="Healthy breakfast bowl with fruit"
            title="Breakfast Fuel"
            text="Quick breakfast choices to help you start your day with energy."
        />

        <InfoCard
            image={snacksImage}
            imageAlt="Healthy snacks for a college athlete"
            title="Smart Fuel"
            text="Easy snacks that fit between classes, workouts, and practices."
        />

        <InfoCard
            image={recoveryMealImage}
            imageAlt="Balanced meal for recovery after training"
            title="Recovery Fuel"
            text="Simple meal ideas that support recovery after a hard workout."
        />
    </div>
</section>
        </main>
    );
};

export default Nutrition;