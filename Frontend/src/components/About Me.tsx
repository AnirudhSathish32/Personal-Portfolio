import React, { useEffect, useState } from "react";

const AboutMe: React.FC = () => {
    const [description, setDescription] = useState<string>("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/api/anirudh");
                const data = await response.json();

                if (data.success) {
                    // Extract description from the first record (or adjust as needed)
                    if (data.data.length > 0) {
                        setDescription(data.data[0].description);
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
        <section id="About-Me" className="h-screen w-screen flex">
            <div className="absolute top-0 text-left">
                <h1 className="m-0">About Me</h1>
                <p>{description}</p>
            </div>

        </section>
    );
};

export default AboutMe;