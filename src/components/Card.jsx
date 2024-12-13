import React from "react";
import { Link } from "react-router-dom";

const Card = ({ id, title, description, image, date }) => {
    return (
        <div style={styles.card}>
            <Link to={`/memory/${id}`} style={styles.link}>
                {image && <img src={image} alt={title} style={styles.image} />}
                <h3 style={styles.title}>{title}</h3>
                <p style={styles.date}>{date}</p>
                <p style={styles.description}>{description}</p>
            </Link>
        </div>
    );
};

const styles = {
    card: {
        border: "1px solid #ddd",
        borderRadius: "8px",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
        padding: "15px",
        margin: "10px",
        maxWidth: "300px",
        backgroundColor: "#fff",
    },
    image: {
        width: "100%",
        height: "150px",
        objectFit: "cover",
        borderRadius: "8px",
    },
    title: {
        fontSize: "18px",
        margin: "10px 0 5px",
    },
    date: {
        fontSize: "14px",
        color: "#888",
        margin: "5px 0",
    },
    description: {
        fontSize: "16px",
        color: "#555",
    },
    link: {
        textDecoration: "none",
        color: "inherit",
    },
};

export default Card;
