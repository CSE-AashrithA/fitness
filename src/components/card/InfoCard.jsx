import "./InfoCard.css";

const InfoCard = ({ image, imageAlt, title, text }) => {
    return (
        <article className="info-card">
            <img src={image} alt={imageAlt} />

            <h3>{title}</h3>

            <p>{text}</p>
        </article>
    );
};

export default InfoCard;