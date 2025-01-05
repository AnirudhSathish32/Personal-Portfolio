import React, {useEffect, useState} from 'react'
import {data} from "autoprefixer";
const Technologies = () => {
    const [databases, setDatabase] = useState([]);
    const [frameworks, setFrameworks] = useState([]);
    const [devTools, setDevTools] = useState([]);
    const [libraries, setLibraries] = useState([]);
    const [languages, setLanguages] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/api/anirudh");
                const result = await response.json();

                if (result.success) {
                    const data = result.data;

                    setDatabase(data.databases);
                    setLanguages(data.languages);
                    setLibraries(data.libraries);
                    setDevTools(data.developerTools);
                    setFrameworks(data.frameworks);
                } else {
                    console.error("Failed to fetch records:", result.message);
                }
            } catch (error) {
                console.error("Error fetching records:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <section className="p-8">
            <div className="mt-8">
                <h2 className="text-2xl font-semibold">Technologies</h2>

                <div className="mt-4">
                    <h3 className="text-xl font-bold">Frameworks:</h3>
                    <ul>
                        {frameworks.map((framework, index) => (
                            <li key={index}>{framework}</li>
                        ))}
                    </ul>

                    <h3 className="text-xl font-bold mt-4">Developer Tools:</h3>
                    <ul>
                        {devTools.map((tool, index) => (
                            <li key={index}>{tool}</li>
                        ))}
                    </ul>

                    <h3 className="text-xl font-bold mt-4">Libraries:</h3>
                    <ul>
                        {libraries.map((library, index) => (
                            <li key={index}>{library}</li>
                        ))}
                    </ul>

                    <h3 className="text-xl font-bold mt-4">Databases:</h3>
                    <ul>
                        {databases.map((database, index) => (
                            <li key={index}>{database}</li>
                        ))}
                    </ul>

                    <h3 className="text-xl font-bold mt-4">Languages:</h3>
                    <ul>
                        {languages.map((language, index) => (
                            <li key={index}>{language}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Technologies;
