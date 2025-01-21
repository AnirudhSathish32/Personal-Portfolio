import React, { useEffect, useState } from "react";
import TechnologiesCards from "./TechnologiesCards.tsx";
const Technologies: React.FC = () => {
    const [descriptionShort, setDescriptionShort] = useState<string>("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/api/anirudh");
                const data = await response.json();

                if (data.success) {
                    // Extract description from the first record (or adjust as needed)
                    if (data.data.length > 0) {
                        setDescriptionShort(data.data[0].descriptionShort);
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
        <section id="Technologies" className="w-auto h-auto lg:h-screen lg:w-screen flex flex-col relative select-none">
            <div className="space-y-2">
                <h1>Technologies</h1>
                <p className="text-lg">{descriptionShort}</p>
            </div>
            <hr className="border-t-4 border-blue-500 w-1/4 mb-10 mt-8"/>
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 items-center justify-between gap-4">
                <TechnologiesCards/>
            </div>
        </section>
    );
};

export default Technologies;