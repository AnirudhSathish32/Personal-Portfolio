import React, { useEffect, useState } from "react";
import downArrow from "../assets/opening_page/down-arrow-svgrepo-com.svg"
import locationPin from "../assets/opening_page/location-pin-svgrepo-com.svg"
import flag from "../assets/opening_page/united-states-svgrepo-com.svg"
import bee from "../assets/opening_page/bee-removebg-preview.png"
import OpeningPageButtons from "./Opening Page Buttons.tsx";

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
        <section id="Opening-Page" className="relative min-h-screen min-w-screen flex items-center justify-center overflow-hidden bg-cover bg-center select-none"
            style={{minWidth: '100%'}}>
            {/* background */}
            <div className="absolute inset-0 bg-[linear-gradient(0deg,_rgba(255,255,255,0.3)_0.5px,_transparent_1px),_linear-gradient(90deg,_rgba(255,255,255,0.3)_0.5px,_transparent_1px)] bg-[length:50px_50px]"></div>
            {/* semi-Transparent overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-90"></div>
            {/* Foreground */}
            <div className="relative z-10 flex flex-col justify-center items-center h-full">
                {/* Text */}
                <div className="relative">
                    <div className="absolute inset-0 radial-gradient -z-10"></div>
                    <div className="flex flex-col items-center justify-center">
                        <div className="flex items-center space-x-1 relative top-1.5">
                            <img src={locationPin} alt="location pin" className="h-7 w-5 animate-bounce"/>
                            <h3 className="font-bold bg-gradient-to-r from-red-500 via white to-blue-500 bg-clip-text text-transparent">BASED IN THE U.S.A</h3>
                            <img src={flag} alt="usa" className="h-5 w-5 relative left-0.5 ml-1 hover:animate-spin"/>
                        </div>
                        <h1 className="font-bold rounded-md text-center relative top-1">
                            {name}

                            {/* Underline */}
                            <svg
                                className="absolute bottom-0 left-0 text-blue-500"
                                width="100%"
                                height="15"
                                viewBox="0 0 200 20"
                                preserveAspectRatio="none"
                            >
                                <path
                                    d="M0 10 Q100 0 200 10 Q100 20 0 10"
                                    fill="currentColor"
                                />
                            </svg>
                        </h1>
                        <div className="flex items-center space-x-1 relative top-1 font-bold text-gray-500">
                            <h2>Software Engineer ⋅ </h2>
                            <h2>Master of Computer Science</h2>
                            <h2>- Georgia Tech</h2>
                            <img src={bee} alt="bee" className="h-7 w-7 hover:animate-spin"/>
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
                        alt="downArrow"
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

