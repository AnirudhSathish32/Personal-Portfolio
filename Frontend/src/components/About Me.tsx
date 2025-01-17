import React, {useEffect, useState} from 'react';

const AboutMe: React.FC = () => {
    const [descriptionLong, setDescriptionLong] = useState<string>("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/api/anirudh");
                const data = await response.json();

                if (data.success) {
                    // Extract description from the first record (or adjust as needed)
                    if (data.data.length > 0) {
                        setDescriptionLong(data.data[0].descriptionLong);
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
        <section id="About-Me" className="h-screen w-screen">
            <div className="text-xl font-bold text-left flex flex-col">
                <h1>About Me</h1>
                <p>{descriptionLong}</p>
            </div>
        </section>
    )
}

export default AboutMe;