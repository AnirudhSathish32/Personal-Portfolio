import React, {useEffect, useState} from 'react'

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/api/projects");
                const data = await response.json();

                if (data.success) {
                    setProjects(data.data);
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
        <div>
            {projects.map((project, index) => (
                <section
                    id="Projects"
                    key={project._id}
                    className="h-screen flex flex-col justify-center items-center bg-gray-900 text-white"
                >
                    <div className="text-center">
                        <h1 className="text-4xl font-bold">{project.name}</h1>
                        <p className="text-lg mt-4">{project.description}</p>
                        <div className="mt-4 text-sm italic text-gray-400">
                            Technologies: {project.technologies.join(", ")}
                        </div>
                    </div>
                </section>
            ))}
        </div>
    );
};

export default Projects;

