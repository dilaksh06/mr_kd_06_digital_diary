import React from "react";
import { useParams } from "react-router-dom";
import memories from "../data/memories.json";

const MemoryDetail = () => {
    const { id } = useParams();
    const memory = memories.find((memory) => memory.id === parseInt(id));

    if (!memory) {
        return <h2>Memory not found!</h2>;
    }

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>{memory.title}</h1>
            <p style={styles.date}>{memory.date}</p>
            <p style={styles.details}>{memory.details || "No details available"}</p> {/* Default message for missing details */}
            <div style={styles.photos}>
                {memory.photos && memory.photos.length > 0 ? (
                    memory.photos.map((photo, index) => (
                        <img
                            key={index}
                            src={photo}
                            alt={`${memory.title} - Photo ${index + 1}`} // Descriptive alt text
                            style={styles.photo}
                        />
                    ))
                ) : (
                    <p>No photos available</p> // Message for when there are no photos
                )}
            </div>
        </div>
    );
};

const styles = {
    container: {
        padding: "20px",
    },
    title: {
        fontSize: "24px",
        margin: "10px 0",
    },
    date: {
        fontSize: "16px",
        color: "#888",
    },
    details: {
        fontSize: "18px",
        margin: "15px 0",
    },
    photos: {
        display: "flex",
        gap: "10px",
        flexWrap: "wrap",
    },
    photo: {
        width: "200px",
        height: "150px",
        objectFit: "cover",
        borderRadius: "8px",
    },
};

export default MemoryDetail;
