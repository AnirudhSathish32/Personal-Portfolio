import React, {useEffect, useState} from 'react'
import {data} from "autoprefixer";
const Technologies = () => {
    const [framework, setFramework] = useState([])
    const [db, setDb] = useState([])
    const [devTool, setDt] = useState([])
    const [lang, setLang] = useState([])
    const [library, setLibrary] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/api/anirudh");
                const data = await response.json();

                if (data.success) {
                    setLang(data.data[0].languages);
                    setLibrary(data.data[0].libraries);
                    setFramework(data.data[0].frameworks);
                    setDt(data.data[0].developerTools);
                    setDb(data.data[0].databases);
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
        <h1 className="text-white">
            {lang.join(",")}
            {framework.join(",")}
            {library.join(",")}
            {devTool.join(",")}
            {db.join(",")}
        </h1>
    );
};

export default Technologies;
