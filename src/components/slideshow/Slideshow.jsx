import "./Slideshow.css";
import { useEffect, useState } from "react";

const Slideshow = ({ slides }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const slideTimer = setInterval(() => {
            setCurrentSlide((currentSlide + 1) % slides.length);
        }, 4000);

        return () => clearInterval(slideTimer);
    }, [currentSlide, slides.length]);

    const previousSlide = () => {
        if (currentSlide === 0) {
            setCurrentSlide(slides.length - 1);
        } else {
            setCurrentSlide(currentSlide - 1);
        }
    };

    const nextSlide = () => {
        setCurrentSlide((currentSlide + 1) % slides.length);
    };

    return (
        <section className="slideshow-section">
            <div className="slideshow">
                <img
                    src={slides[currentSlide].image}
                    alt={slides[currentSlide].alt}
                />

                <div className="slide-content">
                    <h2>{slides[currentSlide].title}</h2>
                    <p>{slides[currentSlide].text}</p>
                    <p className="slide-example">
    <strong>Try this:</strong> {slides[currentSlide].example}
    </p>
                    
                </div>

                <button className="previous-button" onClick={previousSlide}>
                    &#10094;
                </button>

                <button className="next-button" onClick={nextSlide}>
                    &#10095;
                </button>
            </div>
        </section>
    );
};
export default Slideshow;