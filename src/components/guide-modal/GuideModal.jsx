import "./GuideModal.css";

const GuideModal = ({ guide, imageUrl, onClose }) => {
    if (!guide) {
        return null;
    }

    return (
        <div className="guide-modal-overlay" onClick={onClose}>
            <article
                className="guide-modal"
                role="dialog"
                aria-modal="true"
                aria-labelledby="guide-modal-title"
                onClick={(event) => event.stopPropagation()}
            >
                <button
                    className="guide-modal-close"
                    type="button"
                    onClick={onClose}
                    aria-label="Close guide details"
                >
                    ×
                </button>

                <img src={imageUrl} alt={guide.title} />

                <div className="guide-modal-content">
                    <p className="guide-modal-category">{guide.category}</p>
                    <h2 id="guide-modal-title">{guide.title}</h2>
                    <p>{guide.description}</p>

                    <div className="guide-modal-time">
                        <span>BEST TIME</span>
                        <strong>{guide.best_time}</strong>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default GuideModal;