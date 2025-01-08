import React, { useEffect, useState } from "react";
import spaceImage from "../assets/space.jpg"
import downArrow from "../assets/down-arrow-svgrepo-com.svg"
import OpeningPageButtons from "./Opening Page Buttons.tsx";
import locationPin from "../assets/location-pin-svgrepo-com.svg"
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
        <section id="Opening Page" className="relative min-h-screen min-w-screen flex items-center justify-center overflow-hidden bg-cover bg-center select-none"
            style={{minWidth: '100%'}}>
            {/* background */}
            <img
                src={spaceImage}
                alt="space background"
                className="absolute inset-0 w-full h-full object-cover"/>

            {/* semi-Transparent overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>
            {/* Foreground */}
            <div className="relative z-10 flex flex-col justify-center items-center h-full">
                {/* Text */}
                <div className="relative">
                    <div className="absolute inset-0 radial-gradient -z-10"></div>
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="font-bold rounded-md text-center font-serif">
                            {name}
                        </h1>
                        <h2 className="font-bold relative top-0.5">Software Engineer ⋅ Master of Computer Science from Georgia Tech</h2>
                        <div className="flex items-center space-x-1 relative top-1.5">
                            <img src={locationPin} alt="location pin" className="h-3 w-3"/>
                            <span className="font-bold">United States</span>
                        </div>
                    </div>
                    {/* Buttons */}
                    <OpeningPageButtons/>
                </div>
                {/* Learn More Button */}
                <button
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex item-center justify-center group transition-all duration-300"
                    onClick={() => {
                        document.getElementById("About-Me")?.scrollIntoView({
                            behavior: "smooth"
                        });
                    }}
                >
                    <img
                        src={downArrow}
                        className="absolute opacity-100 group-hover:opacity-0 animate-bounce transition-all duration-300"
                    />
                    <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap text-sm">
                    Learn More
                    </span>
                </button>
            </div>
        </section>
    );
}

export default OpeningScreen;

