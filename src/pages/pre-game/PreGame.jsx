import "./PreGame.css";
import Hero from "../../components/hero/Hero";
import BasicCard from "../../components/basic-card/BasicCard";
import preGameHero from "../../images/pre-game/pre-game-hero.jpg";
import preGameMeal from "../../images/pre-game/pre-game-meal.jpg";
import InfoCard from "../../components/card/InfoCard";
import fruitSnackImage from "../../images/pre-game/fruit-snack.jpg";
import gymBagSnackImage from "../../images/pre-game/gym-bag-snack.jpg";

const PreGame = () => {
    return (
        <main className="pre-game-page">
            <Hero
                label="NUTRITION GUIDE"
                title="Pre-Game Fuel"
                text="Eat the right foods before practice or competition so you can feel energized and ready to perform."
                image={preGameHero}
                imageAlt="College athlete packing healthy food before practice"
                lightText={true}
            />

            <section className="intro-section">
                <div className="section-title">
                    <span></span>
                    <h2>Fuel before you compete.</h2>
                </div>

                <p className="section-intro">
                    Pre-game meals should give your body energy without making
                    you feel too full. Focus on carbohydrates, protein, and water.
                </p>

                <div className="pre-game-card-columns">
                    <BasicCard
                        title="2 to 3 hours before"
                        text="Eat a balanced meal with carbohydrates, lean protein, and a small amount of healthy fat."
                    />

                    <BasicCard
                        title="30 to 60 minutes before"
                        text="Choose a small snack that is easy to digest, such as a banana, applesauce, or granola bar."
                    />

                    <BasicCard
                        title="Stay hydrated"
                        text="Drink water throughout the day and bring a water bottle with you to practice or your game."
                    />
                </div>
            </section>
            <section className="meal-section">
    <div className="meal-content">
        <div className="section-title">
            <span></span>
            <h2>Simple pre-game meal ideas.</h2>
        </div>

        <h3>Breakfast before a morning game</h3>
        <p>Oatmeal with fruit, Greek yogurt, and water.</p>

        <h3>Lunch before afternoon practice</h3>
        <p>Grilled chicken, rice, vegetables, and fruit.</p>

        <h3>Quick snack before training</h3>
        <p>A banana with peanut butter or a granola bar.</p>
    </div>

    <img
        src={preGameMeal}
        alt="Healthy pre-game meal with fruit, oatmeal, and yogurt"
    />
</section>
<section className="snack-section">
    <div className="snack-content">
        <div className="section-title">
            <span></span>
            <h2>Grab-and-go snack ideas.</h2>
        </div>

        <div className="snack-card-columns">
            <InfoCard
                image={fruitSnackImage}
                imageAlt="Banana and fruit snack for before practice"
                title="Fast Energy"
                text="Fruit, applesauce, crackers, and pretzels are easy choices when you need energy quickly."
            />

            <InfoCard
                image={gymBagSnackImage}
                imageAlt="Healthy snacks packed in a gym bag"
                title="Plan Ahead"
                text="Pack your snack and water bottle before class so you are prepared when it is time to train."
            />
        </div>
    </div>
</section>
        </main>
    );
};

export default PreGame;