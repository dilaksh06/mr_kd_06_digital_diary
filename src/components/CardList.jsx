import React, { useState, useEffect } from "react";
import Card from "./Card";

const CardList = () => {
    const [loadedMemories, setLoadedMemories] = useState([]);

    useEffect(() => {
        // Fetch the JSON data from the public directory
        fetch("/memories.json")
            .then((response) => response.json())
            .then((data) => setLoadedMemories(data))
            .catch((error) => console.error("Error fetching memories:", error));
    }, []);

    if (loadedMemories.length === 0) {
        return <p>Loading memories...</p>;
    }

    return (
        <div style={styles.cardList}>
            {loadedMemories.map((memory) => (
                <Card
                    key={memory.id}
                    id={memory.id}
                    title={memory.title}
                    description={memory.description}
                    image={memory.image}
                    date={memory.date}
                />
            ))}
        </div>
    );
};

const styles = {
    cardList: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "20px",
        padding: "20px",
    },
};

export default CardList;
