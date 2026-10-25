import "./BasicCard.css";

const BasicCard = ({ title, text }) => {
    return (
        <article className="basic-card">
            <h3>{title}</h3>
            <p>{text}</p>
        </article>
    );
};

export default BasicCard;