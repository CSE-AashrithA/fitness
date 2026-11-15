import "./InfoCard.css";

const InfoCard = ({ image, imageAlt, title, text, onClick }) => {
    const handleKeyDown = (event) => {
        if (onClick && (event.key === "Enter" || event.key === " ")) {
            event.preventDefault();
            onClick();
        }
    };

    return (
        <article
            className={`info-card${onClick ? " info-card-clickable" : ""}`}
            onClick={onClick}
            onKeyDown={handleKeyDown}
            role={onClick ? "button" : undefined}
            tabIndex={onClick ? 0 : undefined}
        >
            <img src={image} alt={imageAlt} />

            <h3>{title}</h3>

            <p>{text}</p>

            {onClick && (
                <span className="info-card-action">
                    View guide details →
                </span>
            )}
        </article>
    );
};

export default InfoCard;