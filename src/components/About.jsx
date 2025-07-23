import React from 'react';
import profileImg from "../assets/profile.jpg";
const About = () => {
  return (
    <section id="about" className="section">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-image">
<img src={profileImg} alt="Anjali Sharma" />
        </div>
        <div className="about-text">
<p>
  I'm Anjali Sharma, a passionate web developer 
  skilled in HTML, CSS, JavaScript, and React. 
  I love turning ideas into responsive, user-friendly websites
   and always strive to learn and grow in the tech world.
</p>
<p>
  I enjoy building clean, efficient web experiences
   and continuously learning new tools and technologies. 
   Let’s create something amazing together!
</p>
       <div className="about-buttons">
           <a 
  href="https://drive.google.com/file/d/1FtLq1t7_vGk_NXz-J5jq7Wkx_Ui11CVz/view?usp=drive_link" 
  download="Anjali_Sharma_CV.pdf" 
  className="hero-button"
>
  Download Resume
</a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
