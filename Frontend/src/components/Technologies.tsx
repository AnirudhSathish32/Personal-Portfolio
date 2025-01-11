import React, {useEffect, useState} from 'react'

const Technologies = () => {
    const [lang, setLang] = useState([])

    const manualDetails = {
        ExpressJS: {
          logo: "",
          description: "",
        },
        Python: {
            logo: "",
            description: "",
        },
        HTML: {
            logo: "",
            description: "",
        },
        CSS: {
            logo: "",
            description: "",
        },
        Java: {
            logo: "",
            description: "",
        },
        TypeScript: {
            logo: "",
            description: "",
        },
        TailwindCSS: {
            logo: "",
            description: "",
        },
        NodeJS: {
            logo: "",
            description: "",
        },
        R: {
            logo: "",
            description: "",
        },
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/api/anirudh");
                const data = await response.json();

                if (data.success) {
                    setLang(data.data[0].languages);
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
            lang.join(",")
        </div>
    );
};


export default Technologies;
