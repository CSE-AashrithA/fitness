import "./Contact.css";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Select from "react-select";
import Hero from "../../components/hero/Hero";
import contactHero from "../../images/contact/contact-hero.jpg";
import contactSupport from "../../images/contact/contact-support.jpg";

    const topicOptions = [
        { value: "Nutrition", label: "Nutrition" },
        { value: "Workouts", label: "Workouts" },
        { value: "Recovery", label: "Recovery" },
        { value: "General Question", label: "General Question" }
    ];

const Contact = () => {
    const [result, setResult] = useState("");
    const [selectedTopic, setSelectedTopic] = useState(null);

    const onSubmit = async (event) => {
        event.preventDefault();

        if (!selectedTopic) {
            setResult("Please choose a topic.");
            toast.error("Please choose a topic.");
            return;
        }

setResult("Sending message...");

        const formData = new FormData(event.target);
        formData.set("topic", selectedTopic.value);
        formData.append("access_key", "a8ed02b8-0028-4704-9a48-e8aad30c00a5");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Message sent successfully!");
            toast.success("Message sent successfully!");
            event.target.reset();
            setSelectedTopic(null);

            setTimeout(() => {
                setResult("");
            }, 3000);
        } else {
            setResult("There was a problem sending your message.");
            toast.error("There was a problem sending your message.");
        }
    };

    return (
        <main className="contact-page">
            <Toaster position="top-center" />
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

                <form className="contact-form" onSubmit={onSubmit}>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your name"
                        required
                    />

                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Your email"
                        required
                    />

                    <label htmlFor="topic">What do you need help with?</label>
                    <Select
                    className="topic-select"
                    inputId="topic"
                    name="topic"
                    options={topicOptions}
                    value={selectedTopic}
                    onChange={setSelectedTopic}
                    placeholder="Choose a topic"
/>

                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Write your message"
                        required
                    ></textarea>

                    <button type="submit">Send Message</button>
                    <p className="form-result">{result}</p>
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