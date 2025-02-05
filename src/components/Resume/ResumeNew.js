import React from 'react';

const ResumeNew = () => {
  return (
    <div className="resume">
      <Header />
      <Contact />
      <ExpertiseSkills />
      <Languages />
      <Interests />
      <ProfessionalProfile />
      <Education />
      <Projects />
    </div>
  );
};

const Header = () => {
  return (
    <div className="header">
      <h1>BOMMAREDDY HARSHA VARDHAN REDDY</h1>
    </div>
  );
};

const Contact = () => {
  return (
    <div className="contact">
      <h2>CONTACT</h2>
      <p>+91 9491989999</p>
      <p>bhvreddy24@gmail.com</p>
      <p>Hyderabad</p>
    </div>
  );
};

const ExpertiseSkills = () => {
  return (
    <div className="expertise-skills">
      <h2>EXPERTISE SKILLS</h2>
      <ul>
        <li>C, Java, Python</li>
        <li>Databases: SQL, MongoDB</li>
        <li>Web Development: HTML, CSS, JavaScript</li>
      </ul>
    </div>
  );
};

const Languages = () => {
  return (
    <div className="languages">
      <h2>LANGUAGE</h2>
      <ul>
        <li>English</li>
        <li>Hindi</li>
        <li>Telugu</li>
      </ul>
    </div>
  );
};

const Interests = () => {
  return (
    <div className="interests">
      <h2>INTEREST</h2>
      <ul>
        <li>Travelling</li>
        <li>Books</li>
      </ul>
    </div>
  );
};

const ProfessionalProfile = () => {
  return (
    <div className="professional-profile">
      <h2>PROFESSIONAL PROFILE</h2>
      <p>
        A motivated BTech 3rd-year student with a strong foundation in Computer Science. Passionate about leveraging technology and problem-solving skills to tackle real-world challenges. Currently working on projects involving machine learning, crop yield prediction. Eager to gain practical experience through internships and collaborative projects.
      </p>
    </div>
  );
};

const Education = () => {
  return (
    <div className="education">
      <h2>EDUCATION</h2>
      <p>Bachelor of Technology – Computer Science Engineering</p>
      <p>Woxsen University, Hyderabad (percentage-70%)</p>
      <p>Intermediate - Maths, Physics, Chemistry</p>
      <p>Sri Chaitanya Junior College, Vijayawada (percentage-70%)</p>
      <p>SSC</p>
      <p>Sri Chaitanya School (GPA-10/10) 2019-2020</p>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="projects">
      <h2>PROJECTS</h2>
      <h3>Crop Yield Prediction Using Machine Learning</h3>
      <p>
        The aim is to predict the crop yield current status & for the next rotation using deep learning techniques. This provides a farmer with an insight into the future yield, price of the crop that he/she is going to harvest.
      </p>
      <h3>News Website</h3>
      <p>
        Created a News website to showcase their skills using HTML, CSS.
      </p>
    </div>
  );
};

export default ResumeNew;