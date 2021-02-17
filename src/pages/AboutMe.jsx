import React from "react";

export default function AboutMe() {
  return (
    <div className="app-body">
      <div className="about-me-flex">
        <h2 className="about-me-heading">Education</h2>
        
        <div className="education">
          <img src="https://play-lh.googleusercontent.com/3bJYxTz2wadBVS21234Cl5l_Aksm04whiYa4KaWB8boywSfd1YN3LstlSGsA7oUpWZrx" />
          <div className="text-box">
            <h4>Complete Web Development Bootcamp</h4>
            <ul>
            <li>Frontend(Bootstrap,Material-UI, React, CSS)</li>
            <li>Backend (Node.js, Express, EJS, React-Dom</li>
            <li>Databases(SQL, Monogo DB)</li>
            <li>Rest API</li>
            </ul>
          </div>
        </div>
        {/* 2 */}
        <div className="education">
          <img src="https://www.lipad.ca/static/home/images/uoft.png" />
          <div className="text-box">
            <h4>Bachelors in Mechanical Engineering</h4>
            <ul>Minors:
            <li>Robotics & Mechatronics</li>
            <li>Bio-Engineering</li>
            </ul>
          </div>
        </div>
                
      </div>
    </div>
  );
}

