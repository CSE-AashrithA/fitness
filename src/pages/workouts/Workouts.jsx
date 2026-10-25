import "./Workouts.css";
import Hero from "../../components/hero/Hero";
import InfoCard from "../../components/card/InfoCard";
import { Link } from "react-router-dom";
import workoutsHero from "../../images/workouts/workouts-hero.jpg";
import strengthImage from "../../images/workouts/strength.jpg";
import conditioningImage from "../../images/workouts/conditioning.jpg";
import mobilityImage from "../../images/workouts/mobility.jpg";
import trainingPlanImage from "../../images/workouts/training-plan.jpg";
import BasicCard from "../../components/basic-card/BasicCard";

const Workouts = () => {
    return (
        <main className="workouts-page">
            <Hero
                title={<>Train with a plan.<br />Perform with confidence.</>}
                text="Simple workout guidance to help college athletes build strength, improve endurance, and recover well."
                image={workoutsHero}
                imageAlt="College athlete lifting weights in a gym"
                lightText={true}
            >
                <Link className="workouts-button" to="/workouts">
                    Explore Workouts
                </Link>
            </Hero>

            <section className="workout-section">
                <div className="section-title">
                    <span></span>
                    <h2>Train for your goals.</h2>
                </div>

                <p className="section-intro">
                    Choose a workout style that fits your sport, schedule, and
                    current fitness goals.
                </p>

                <div className="workout-card-columns">
                    <InfoCard
                        image={strengthImage}
                        imageAlt="College athlete strength training in a gym"
                        title="Build Strength"
                        text="Use strength workouts to build muscle, improve power, and support your performance."
                    />

                    <InfoCard
                        image={conditioningImage}
                        imageAlt="College athlete doing conditioning exercises"
                        title="Improve Conditioning"
                        text="Build endurance with workouts that keep you ready for practices, games, and long training days."
                    />

                    <InfoCard
                        image={mobilityImage}
                        imageAlt="College athlete stretching after a workout"
                        title="Move and Recover"
                        text="Add mobility and recovery exercises to stay flexible and reduce soreness."
                    />
                </div>
            </section>
            <section className="routine-section">
    <div className="routine-content">
        <div className="section-title">
            <span></span>
            <h2>Build a better routine.</h2>
        </div>

        <h3>Choose your focus</h3>
        <p>
            Pick a goal such as strength, endurance, speed, or overall fitness.
        </p>

        <h3>Train consistently</h3>
        <p>
            Use a schedule that works around classes, practices, and rest days.
        </p>

        <h3>Recover between sessions</h3>
        <p>
            Prioritize sleep, hydration, and mobility so your body is ready to train again.
        </p>

        <Link className="routine-button" to="/contact">
            Build My Routine
        </Link>
    </div>

    <img
        src={trainingPlanImage}
        alt="College athlete planning workouts in a notebook"
    />
</section>
<section className="tips-section">
    <div className="tips-content">
        <div className="section-title">
            <span></span>
            <h2>Workout tips that matter.</h2>
        </div>

        <div className="tips-card-columns">
            <BasicCard
                title="Start with the basics"
                text="Focus on good form before adding more weight or more difficult exercises."
            />

            <BasicCard
                title="Make time to rest"
                text="Rest days give your muscles time to recover and grow stronger."
            />

            <BasicCard
                title="Stay consistent"
                text="A simple plan you can follow each week is better than an unrealistic routine."
            />
        </div>
    </div>
</section>
        </main>
    );
};

export default Workouts;