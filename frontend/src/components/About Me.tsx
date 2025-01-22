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

    const textParts = descriptionLong.split("\n\n")
    const part1 = textParts[0];
    const part2 = textParts[1];
    const part3 = textParts[2];
    const part4 = textParts[3];

    return (
        <section id="About-Me" className="h-screen w-screen">
            <div className="text-left flex flex-col">
                <h1 className="font-bold pb-3">About Me</h1>
                <div className="max-w-screen-md">
                    <p className="text-base font-bold pb-2">{part1}</p>
                    <hr className="border-t-4 border-blue-500 my-4 w-1/2"/>
                    <p className="text-base">{part2} {part3}</p>
                    <p className="text-base py-4">{part4}</p>
                </div>
            </div>
        </section>
    )
}

export default AboutMe;