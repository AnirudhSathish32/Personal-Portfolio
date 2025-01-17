import java from "../assets/about_me/java-svgrepo-com.svg"
import python from "../assets/about_me/python-svgrepo-com.svg"
import CSS from "../assets/about_me/css-3-svgrepo-com.svg"
import rcode from "../assets/about_me/logo-r-script-svgrepo-com.svg"
import html from "../assets/about_me/html-5-svgrepo-com.svg"
import tailwind from "../assets/about_me/tailwind-svgrepo-com.svg"
import typescript from "../assets/about_me/typescript-official-svgrepo-com.svg"
import expressjs from "../assets/about_me/express-svgrepo-com.svg"
import reactlogo from "../assets/about_me/react-svgrepo-com.svg"
import nodejs from "../assets/about_me/nodejs-icon-svgrepo-com.svg"

import React, {useEffect, useState} from 'react'

const TechnologiesCards = () => {
    const [lang, setLang] = useState([])

    const manualDetails = [
        {
            name: 'Python',
            logo: python,
            description: "Machine Learning",
        },
        {
            name: 'Java',
            logo: java,
            description: "Enterprise Applications",
        },
        {
            name: 'R',
            logo: rcode,
            description: "Statistical Language",
        },
        {
            name: 'HTML',
            logo: html,
            description: "Web Page Structuring",
        },
        {
            name: 'CSS',
            logo: CSS,
            description: "Web Page Styling",
        },
        {
            name: 'React',
            logo: {reactlogo},
            description: "JavaScript UI Library",
        },
        {
            name: 'TypeScript',
            logo: typescript,
            description: "JS with Static Typing",
        },
        {
            name: 'TailwindCSS',
            logo: tailwind,
            description: "CSS Framework ",
        },
        {
            name: 'NodeJS',
            logo: nodejs,
            description: "Server-Side Environment",
        },
        {
            name: 'ExpressJS',
            logo: expressjs,
            description: "Web Framework",
        },
    ];


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
        <>
            {manualDetails.map((lang) => (
                <div
                    key={lang.name}
                    className="flex flex-1 gap-5 p-2.5 rounded-xl border text-xs"
                    >
                    <div className="p-3 rounded-lg w-fit">
                        <img
                            src={lang.logo}
                            alt={lang.name}
                            className="w-8 h-8 rounded-md object-contain"
                        />
                    </div>
                    <div>
                        <h2 className="font-bold text-md text-left mt-2">{lang.name}</h2>
                        <p className="text-xs text-gray-400 mt-2"> {lang.description}</p>
                    </div>
                </div>
            ))}
        </>
    )
}

export default TechnologiesCards;
