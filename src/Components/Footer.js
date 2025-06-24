import React from 'react';
import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa'; // Icons import karein

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-socials">
        <a href="https://github.com/Anjali0024-sh" target="_blank">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/anjali-sharma-3636352bb/" target="_blank">
          <FaLinkedin />
        </a>
        <a href="https://www.youtube.com/@AnjaliSharma-t4q" target="_blank">
          <FaYoutube />
        </a>
      </div>
      <div className="footer-copyright">
        <p>© {new Date().getFullYear()} Anjali Sharma. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;