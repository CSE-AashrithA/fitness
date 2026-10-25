import "./Contact.css";
import Hero from "../../components/hero/Hero";
import contactHero from "../../images/contact/contact-hero.jpg";
import contactSupport from "../../images/contact/contact-support.jpg";

const Contact = () => {
    return (
        <main className="contact-page">
            <Hero
                label="CONTACT FITGUIDE"
                title={<>Let’s build your<br />better routine.</>}
                text="Have a question about nutrition, training, or recovery? Send us a message and we will be glad to help."
                image={contactHero}
                imageAlt="College athlete planning fitness goals at a table"
                lightText={true}
            />

            <section className="contact-section">
                <div className="contact-info">
                    <div className="section-title">
                        <span></span>
                        <h2>Get in touch.</h2>
                    </div>

                    <p>
                        FitGuide gives college athletes simple support for
                        nutrition, workouts, and recovery.
                    </p>

                    <div className="contact-details">
                        <h3>Email</h3>
                        <p>fitguide@email.sc.edu</p>

                        <h3>Location</h3>
                        <p>Columbia, South Carolina</p>

                        <h3>Hours</h3>
                        <p>Monday–Friday<br />9:00 AM–5:00 PM</p>
                    </div>
                </div>

                <form className="contact-form">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" placeholder="Your name" />

                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="Your email" />

                    <label htmlFor="topic">What do you need help with?</label>
                    <select id="topic">
                        <option>Nutrition</option>
                        <option>Workouts</option>
                        <option>Recovery</option>
                        <option>General Question</option>
                    </select>

                    <label htmlFor="message">Message</label>
                    <textarea id="message" placeholder="Write your message"></textarea>

                    <button type="button">Send Message</button>
                </form>
            </section>
            <section className="support-section">
    <div className="support-content">
        <div className="section-title">
            <span></span>
            <h2>Support for your season.</h2>
        </div>

        <p>
            Your routine does not have to be complicated. FitGuide
            helps you make small changes that fit around classes,
            practices, and games.
        </p>
    </div>

    <img
        src={contactSupport}
        alt="College athlete drinking water after a workout"
    />
</section>
        </main>
    );
};

export default Contact;