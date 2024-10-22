import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-10">
      <div className="container mx-auto text-center">
        <p>
          Created by <span className="font-bold">Hithesh Jain</span>
        </p>
        <div className="mt-2">
          <a
            href="https://github.com/HitheshJain2002"
            className="text-orange-400 hover:underline mx-3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className="mr-1" /> GitHub
          </a>
          |
          <a
            href="https://www.linkedin.com/in/hithesh-jain-2807a2244/"
            className="text-orange-400 hover:underline mx-3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} className="mr-1" /> LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
