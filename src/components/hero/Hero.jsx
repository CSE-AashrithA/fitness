import "./Hero.css";

const Hero = ({ title, text, image, imageAlt, children }) => {
    return (
        <section className="hero">
            <img src={image} alt={imageAlt} />

            <div className="hero-content">
                <div className="hero-text">
                    <h1>{title}</h1>
                    <p>{text}</p>
                    {children}
                </div>
            </div>
        </section>
    );
};

export default Hero;