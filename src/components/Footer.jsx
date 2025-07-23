import React from 'react';
import { FaGithub, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-socials">
        <a href="https://github.com/Anjali0024-sh" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/anjali" target="_blank" rel="noreferrer">
  <FaLinkedin />
</a>

        <a href="https://www.youtube.com/@AnjaliSharma-t4q" target="_blank" rel="noreferrer">
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