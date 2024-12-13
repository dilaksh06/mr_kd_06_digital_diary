import React, { useState, useEffect } from "react";
import Card from "./Card";
import memories from "../data/memories.json"; // Make sure the path is correct

const CardList = () => {
    const [loadedMemories, setLoadedMemories] = useState(null);

    useEffect(() => {
        // Simulating a delay like an API call
        setTimeout(() => {
            setLoadedMemories(memories); // Here we set the static memories after a delay
        }, 1000); // 1 second delay to simulate loading
    }, []);

    if (loadedMemories === null) {
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
