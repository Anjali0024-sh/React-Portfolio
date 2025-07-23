import React from 'react';
import Slider from 'react-slick';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const skillsData = [
  { name: 'HTML', percentage: 80 },
  { name: 'CSS', percentage: 70 },
  { name: 'Wordpress', percentage: 40 },
  { name: 'React Development', percentage: 40 },
  { name: 'Node.js & Express', percentage: 30 },
  { name: 'UI/UX Design', percentage: 45 },
  { name: 'JavaScript (ES6+)', percentage: 50 },
  { name: 'Database Management (SQL/NoSQL)', percentage: 55 },
];

const Skills = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section id="skills" className="section skills-section">
      <h2>My Skills</h2>
      <p className="skills-intro">
        Here are some of the technologies and tools I'm proficient in. I'm always eager to learn more and expand my skill set.
      </p>
      <div className="skills-slider-container">
        <Slider {...settings}>
          {skillsData.map((skill, index) => (
            <div key={index} className="skill-item">
              <div style={{ width: '150px', margin: '0 auto' }}>
                <CircularProgressbar
                  value={skill.percentage}
                  text={`${skill.percentage}%`}
                  styles={buildStyles({
                    // Colors
                    pathColor: `url(#gradient)`,
                    textColor: '#F2F2F2',
                    trailColor: 'rgba(255, 255, 255, 0.1)',
                    textSize: '18px',
                    
                    pathTransitionDuration: 1.5,
                  })}
                />
              </div>
              <h3>{skill.name}</h3>
            </div>
          ))}
        </Slider>
      </div>
      <svg style={{ height: 0, width: 0 }}>
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(90)">
            <stop offset="0%" stopColor="#D291BC" />
            <stop offset="100%" stopColor="#957DAD" />
          </linearGradient>
        </defs>
      </svg>
    </section>
  );
};

export default Skills;