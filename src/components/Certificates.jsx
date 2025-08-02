import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa'; 

const certificatesData = [
  {
    title: 'Generative AI',
    issuer: 'GUVI',
    date: 'Issued Sep 2024',
    link: 'https://drive.google.com/file/d/1qqQYcuIeLjP1Tp0F8CQwE_TBqYnSxJFy/view?usp=sharing', 
  },
  {
    title: 'Prompt Engineering',
    issuer: 'Coursera',
    date: 'Issued Jul 2024',
    link: 'https://drive.google.com/file/d/1rE45gZw2rGwaHhHeIZ3brELezB10qp9r/view?usp=sharing', 
  },
  {
    title: 'Version Control',
    issuer: 'META',
    date: 'Issued Dec 2024',
    link: 'https://drive.google.com/file/d/10UKU7DlWpUBFhtI8zNzzJRIFWkgltjqn/view?usp=sharing', 
  },
   {
    title: 'AWS Generative AI',
    issuer: 'UDACITY',
    date: 'July 5, 2024',
    link: 'https://drive.google.com/file/d/1_-kWnJqP8o4aMDvPLq_OzgS91A9Uxphv/view?usp=sharing', 
  },
];

const Certificates = () => {
  return (
    <section id="certificates" className="section">
      <h2>Certifications</h2>
      <div className="timeline">
        {certificatesData.map((cert, index) => (
          <div className="timeline-item" key={index}>
            <h3>{cert.title}</h3>
            <p className="timeline-date">{cert.issuer} · {cert.date}</p>
            {cert.link && cert.link !== '#' && (
              <a href={cert.link} target="_blank" rel="noopener noreferrer" className="certificate-link">
                Show credential <FaExternalLinkAlt style={{ marginLeft: '5px' }} />
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;