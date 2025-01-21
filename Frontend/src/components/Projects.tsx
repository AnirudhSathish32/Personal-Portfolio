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
        <section id="Projects" className="w-auto h-auto lg:h-screen lg:w-screen flex flex-col relative select-none">
            <div>
                <h1 className="text-4xl font-bold text-white mb-10 text-left">Projects</h1>
                <h2 className="text-lg">All of the projects I have built to attain programming mastery</h2>
                <h2>(still working on this section sorry!)</h2>
                <hr className="border-t-4 border-blue-500 w-1/4 mb-10 mt-8"/>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <div
                            key={project._id}
                            className="bg-gray-800 rounded-lg shadow-lg flex flex-col justify-between overflow-hidden"
                        >
                            <div className="p-4">
                                <h2 className="text-2xl font-bold mb-2 text-white">{project.name}</h2>
                                <p className="text-white mb-4">{project.description}</p>
                            </div>
                            <div className="bg-gray-800 p-3 flex flex-wrap gap-2">
                                {project.technologies.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="bg-gray-200 text-gray-800 text-xs font-semibold px-2 py-1 rounded"
                                    >
                                    {tech}
                                </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};


export default Projects;

