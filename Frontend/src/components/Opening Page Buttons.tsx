import github from "../assets/Orion_github.svg"
import Linkedin from"../assets/linkedin-svgrepo-com.svg"
import Resume from "../assets/Anirudh Resume (Latex).pdf"
import doc from "../assets/document-pdf-svgrepo-com.svg"
import mail from "../assets/mail-svgrepo-com.svg"
import React from 'react';

const OpeningPageButtons: React.FC = () => {
    return (
        <div className="flex space-x-3 justify-center items-center mt-4 relative">
            {/* Resume Button */}
            <button
                onClick={() => {
                    const link = document.createElement("a");
                    link.href = Resume;
                    link.download = "Anirudh_Sathish_Resume"
                    link.click();
                }}
                className="resume-button flex items-center space-x-1 hover:scale-110 transition-transform duration-300 rounded-md"
            >
                <img
                    src={doc}
                    alt="document"
                    className="relative w-5 h-5"
                />
                <span className="text-md">Resume</span>
            </button>
            {/* Github Logo */}
            <a
                href="https://github.com/AnirudhSathish32"
                target="_blank"
                rel="noopener noreferrer"
                className="flex hover:scale-110 transition-transform duration-300"
            >
                <img
                    src={github}
                    alt="Github"
                    className="w-7 h-7"
                />
            </a>
            {/* Linkedin Logo */}
            <a
                href="https://www.linkedin.com/in/anirudh-sathish-386389270/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex hover:scale-110 transition-transform duration-300"
            >
                <img
                    src={Linkedin}
                    alt="Linkedin"
                    className="w-7 h-7 relative right-0.5"
                />
            </a>
            <a
                href="mailto:anirudhsat8@gmail.com"
                className="flex hover:scale-110 transition-transform duration-300"
            >
                <img
                    src={mail}
                    alt="email icon"
                    className="w-8 h-9 relative right-2.5 top-0.5 ml-1"
                />
            </a>
        </div>
    );
}
export default OpeningPageButtons