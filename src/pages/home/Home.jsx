import "./Home.css";
import Hero from "../../components/hero/Hero";
import InfoCard from "../../components/card/InfoCard";
import { Link } from "react-router-dom";
import heroImage from "../../images/home/hero.jpg";
import eatEnergyImage from "../../images/home/eat-energy.png";
import hydrateImage from "../../images/home/hydrate.png";
import recoverImage from "../../images/home/recover.png";
import planImage from "../../images/home/plan.png";
import preGameImage from "../../images/home/pre-game.png";
import recoveryImage from "../../images/home/recovery-nutrition.png";
import Testimonial from "../../components/testimonial/Testimonial";
import mayaImage from "../../images/home/maya.png";
import jordanImage from "../../images/home/jordan.png";
import alexImage from "../../images/home/alex.png";

const Home = () => {
    return (
        <main className="home-page">
            <Hero
                title={<>Train hard.<br />Fuel smarter.</>}
                text="Personalized nutrition, recovery, and training guidance designed for college student-athletes."
                image={heroImage}
                imageAlt="College athlete eating a healthy meal in a gym"
            >
                <Link className="home-button" to="/nutrition">
                    Explore Nutrition
                </Link>
            </Hero>

            <section className="performance-section">
                <div className="section-title">
                    <span></span>
                    <h2>Fuel your performance.</h2>
                </div>

                <div className="card-columns">
                    <InfoCard
                        image={eatEnergyImage}
                        imageAlt="Healthy meal with chicken, fruit, and vegetables"
                        title="Eat for Energy"
                        text="Build balanced meals that support busy days, workouts, and practices."
                    />

                    <InfoCard
                        image={hydrateImage}
                        imageAlt="Water bottle and oranges in a gym"
                        title="Hydrate to Perform"
                        text="Simple hydration goals help you stay ready before, during, and after training."
                    />

                    <InfoCard
                        image={recoverImage}
                        imageAlt="Foam roller, water bottle, and recovery snacks"
                        title="Recover Stronger"
                        text="Use sleep, protein, and smart recovery habits to come back stronger."
                    />
                </div>
            </section>

            <section className="plan-section">
    <div className="plan-content">
        <div className="section-title">
            <span></span>
            <h2>Your game plan, simplified.</h2>
        </div>

        <h3>Tell us your sport</h3>
        <p>
            Choose your sport, position, goals, and training schedule.
        </p>

        <h3>See your starting plan</h3>
        <p>
            Get clear daily targets for calories, protein, hydration, and recovery.
        </p>

        <h3>Build better habits</h3>
        <p>
            Use practical meal, hydration, and recovery ideas that fit your routine.
        </p>

        <Link className="plan-button" to="/workouts">
            Explore Workouts
        </Link>
    </div>

    <img
        src={planImage}
        alt="College athlete looking at a fitness plan on a tablet"
    />
</section>
<section className="home-nutrition-section">
    <div className="section-title">
        <span></span>
        <h2>Nutrition built for your sport.</h2>
    </div>

    <div className="two-card-columns">
        <InfoCard
            image={preGameImage}
            imageAlt="Healthy breakfast bowl for pre-game fuel"
            title="Pre-Game Fuel"
            text="What to eat before practice or competition for steady energy."
        />

        <InfoCard
            image={recoveryImage}
            imageAlt="Berry smoothie and recovery snacks"
            title="Recovery Nutrition"
            text="Simple food choices that help your body rebuild after training."
        />
    </div>
</section>
<section className="testimonial-section">
    <div className="testimonial-content">
        <div className="section-title">
            <span></span>
            <h2>Built for real student-athlete routines.</h2>
        </div>

        <div className="card-columns">
            <Testimonial
                quote="FitGuide made my nutrition goals easy to understand."
                image={mayaImage}
                name="Maya W."
                sport="Club Soccer Athlete"
            />

            <Testimonial
                quote="I feel more prepared for every practice."
                image={jordanImage}
                name="Jordan T."
                sport="Track and Field Athlete"
            />

            <Testimonial
                quote="Small changes helped my recovery so much."
                image={alexImage}
                name="Alex R."
                sport="Basketball Athlete"
            />
        </div>
    </div>
</section>
        </main>
    );
};

export default Home;