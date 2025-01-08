import React, { useEffect, useState } from "react";

const AboutMe: React.FC = () => {
    const [description, setDescription] = useState<string>("");
    const [name, setName] = useState<string>("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/api/anirudh");
                const data = await response.json();

                if (data.success) {
                    // Extract description from the first record (or adjust as needed)
                    if (data.data.length > 0) {
                        setDescription(data.data[0].description);
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
        <section id="About-Me" className="relative h-screen w-screen flex justify-center items-center">
            <div className="relative z-10 flex justify-center items-center h-full">
                <h1 className="text-center"> Hi I am {name}</h1>
                <p>{description}</p>
            </div>
        </section>
    );
};

export default AboutMe;