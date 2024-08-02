import React, { useState, useEffect } from "react";

const API_URL = "https://dog.ceo/api/breeds/image/random";

function App() {
    const [dogImage, setDogImage] = useState("");
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch(API_URL)
            .then((result) => result.json())
            .then((data) => {
                //console.log(data);
                setDogImage(data.message);
                if (data.status === "success") {
                    setIsLoaded(true);
                }
            });

    }, []);

    if (!isLoaded) {
        return <p>Loading...</p>
    }

    return (
        <main>
            <img src={dogImage} alt="A Random Dog"></img>
        </main>
    );
}

export default App;