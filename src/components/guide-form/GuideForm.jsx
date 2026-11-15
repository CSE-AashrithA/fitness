import "./GuideForm.css";
import { useState } from "react";

const GuideForm = ({ onGuideAdded }) => {
    const [message, setMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const validateForm = (formData) => {
        if (formData.get("title").trim().length < 3) {
            return "Title must have at least 3 characters.";
        }

        if (!formData.get("category")) {
            return "Please choose a category.";
        }

        if (formData.get("description").trim().length < 10) {
            return "Description must have at least 10 characters.";
        }

        if (formData.get("best_time").trim().length < 2) {
            return "Best time must have at least 2 characters.";
        }

        return "";
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const validationMessage = validateForm(formData);

        if (validationMessage) {
            setMessage(validationMessage);
            return;
        }

        setIsSubmitting(true);
        setMessage("Adding your guide...");

        try {
            const response = await fetch(
                "https://fitguide-server-1.onrender.com/api/fitness",
                {
                    method: "POST",
                    body: formData
                }
            );

            if (!response.ok) {
                const errorMessage = await response.text();
                setMessage(errorMessage || "Unable to add this guide.");
                return;
            }

            const data = await response.json();

            onGuideAdded(data);
            event.target.reset();
            setMessage("Guide added successfully!");
        } catch {
            setMessage("Unable to connect to the server. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form className="guide-form" onSubmit={handleSubmit}>
            <label htmlFor="guide-title">Guide title</label>
            <input
                id="guide-title"
                name="title"
                type="text"
                placeholder="Example: Practice Day Lunch"
                required
            />

            <label htmlFor="guide-category">Category</label>
            <select id="guide-category" name="category" required>
                <option value="">Choose a category</option>
                <option value="Nutrition">Nutrition</option>
                <option value="Meals">Meals</option>
                <option value="Hydration">Hydration</option>
                <option value="Recovery">Recovery</option>
            </select>

            <label htmlFor="guide-description">Description</label>
            <textarea
                id="guide-description"
                name="description"
                placeholder="Describe the nutrition or recovery tip."
                required
            ></textarea>

            <label htmlFor="guide-best-time">Best time</label>
            <input
                id="guide-best-time"
                name="best_time"
                type="text"
                placeholder="Example: Before afternoon practice"
                required
            />

            <label htmlFor="guide-image">Optional image</label>
            <input
                id="guide-image"
                name="image"
                type="file"
                accept="image/*"
            />

            <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Adding Guide..." : "Add Nutrition Guide"}
            </button>

            {message && <p className="guide-form-message">{message}</p>}
        </form>
    );
};

export default GuideForm;