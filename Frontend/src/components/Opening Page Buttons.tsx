
import github from "../assets/Orion_github.svg"
import Linkedin from"../assets/linkedin-svgrepo-com.svg"
import Resume from "../assets/Anirudh Resume (Latex).pdf"
import doc from "../assets/document-pdf-svgrepo-com.svg"
import mail from "../assets/mail-svgrepo-com.svg"
import React from 'react';

const OpeningPageButtons: React.FC = () => {
    return (
        <div className="flex space-x-4 justify-center items-center mt-4">
            {/* Resume Button */}
            <button
                onClick={() => {
                    const link = document.createElement("a");
                    link.href = Resume;
                    link.download = "Anirudh_Sathish_Resume"
                    link.click();
                }}
                className="resume-button flex items-center space-x-1 text-sm"
            >
                <img
                    src={doc}
                    alt="document"
                    className="w-5 h-5"
                />
                <span>Resume</span>
            </button>
            {/* Github Logo */}
            <a
                href="https://github.com/AnirudhSathish32"
                target="_blank"
                rel="noopener noreferrer"
                className="flex"
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
                className="flex"
            >
                <img
                    src={Linkedin}
                    alt="Linkedin"
                    className="w-12 h-12 relative top-2.5 right-1"
                />
            </a>
            <a
                href="malto:anirudhsat8@gmail.com"
                className="flex"
            >
                <img
                    src={mail}
                    alt="email icon"
                    className="w-10 h-13 relative right-7 top-1"
                />
            </a>
        </div>
    );
}
export default OpeningPageButtons