import "./Testimonial.css";

const Testimonial = ({ quote, image, name, sport }) => {
    return (
        <article className="testimonial">
            <p>"{quote}"</p>

            <div className="student">
                <img src={image} alt={name} />

                <div>
                    <h3>{name}</h3>
                    <span>{sport}</span>
                </div>
            </div>
        </article>
    );
};

export default Testimonial;