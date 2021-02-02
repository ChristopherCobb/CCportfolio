import React from "react";
import "../scss/app.scss";

const Developer = () => {
  return (
    <div id="developer">
      <h2 className="pagetitles">Projects</h2>
      <div className="projects">
        <div className="portal">
          {/* <a href="https://quiet-basin-68498.herokuapp.com/"> */}
          <h2 className="projecttitles">Professional Development Portal</h2>
          {/* </a> */}
          <p className="projectdesc">
            Final project for Innovate Birmingham Full Stack Web Development
            Bootcamp. My team designed, developed and implemented a 'student'
            portal for use by future candidates of the program. Students in both
            the web development and data analytics programs can use this portal
            to organize their resources and maintain their professional
            development progress throughout their bootcamp experience. Innovate
            Birmingham Administrators will have the ability to offer feedback
            and track students’ progress throughout the course. Front-end:
            React, TypeScript, Bootstrap, Sass, npm Back-end: node.js,
            Express.js, mySQL - Login currently disabled to publicly view site
            <br />
            <br />
            <br></br>
          </p>
          <img
            className="images"
            src="https://i.imgur.com/sfWKqu2.png"
            alt="thumbnail"
          />
          <div className="sitelinks">
            <a href="https://quiet-basin-68498.herokuapp.com/" target="_blank">
              <p className="linksite">site&nbsp;</p>
            </a>
            <p> | </p>
            <a href="https://github.com/ChristopherCobb/innovateBHM-student-portal" target="_blank">
              <p className="linksite">&nbsp;code</p>
            </a>
          </div>
        </div>
        <div className="chirp">
            <h2 className="projecttitles">Chirpr App</h2>
          <p className="projectdesc">
            A full stack Twitter clone. Developed using Typescript, React, Bootstrap
            node.js, Express.js and mySQL.
            <br />
            <br />
          </p>
          <img className="images" src="https://i.imgur.com/rNVUa8E.png" alt="thumbnail" />
          <a href="https://github.com/ChristopherCobb/FS-Chirpr" target="_blank">
            <p className="linksite">&nbsp;code</p>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Developer;
