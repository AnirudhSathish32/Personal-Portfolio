import React, { useEffect, useState } from "react";
import spaceImage from "../assets/space.jpg"
import skyImage from "../assets/sky-minimalist-19.png"
const OpeningScreen: React.FC = () => {
    const [name, setName] = useState<string>("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/api/anirudh");
                const data = await response.json();

                if (data.success) {
                    // Extract name and description from the first record (or adjust as needed)
                    if (data.data.length > 0) {
                        setName(data.data[0].name);
                    }
                } else {
                    console.error("Failed to fetch records:", data.message);
                }
            } catch (error) {
                console.error("Error fetching records:", error);
            }
        };

        fetchData();
    }, []);


    return (
        <section className="relative min-h-screen min-w-screen flex items-center justify-center overflow-hidden bg-cover bg-center"
            style={{minWidth: '100%'}}>
            <img
                src={spaceImage}
                alt="space background"
                className="absolute inset-0 w-full h-full object-cover"/>
            {/* semi-Transparent overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>

            <div className="relative z-10 flex justify-center items-center h-full">
                <div className="text-center">
                    <h1 className="font-bold rounded-md text-center font-serif">
                        {name}
                    </h1>
                    <p className="font-bold">Software Engineer</p>
                </div>
            </div>
        </section>
    );
}

export default OpeningScreen;

