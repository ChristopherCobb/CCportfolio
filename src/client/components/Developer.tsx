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
            style={{ margin: "10px" }}
            src="https://i.makeagif.com/media/2-10-2021/yqHEzA.gif"
            alt="thumbnail"
          />
          <img
            className="images"
            style={{ margin: "10px" }}
            src="https://i.imgur.com/kdtqfo9m.png"
            alt="thumbnail"
          />
          <img
            className="images"
            style={{ margin: "10px" }}
            src="https://i.makeagif.com/media/2-10-2021/CUwcAN.gif"
            alt="thumbnail"
          />
          {/* <img
            className="images"
            style={{ margin: "10px" }}
            src="https://i.imgur.com/7IBnSEd.png"
            alt="thumbnail"
          /> */}
          <div className="sitelinks">
            <a href="https://quiet-basin-68498.herokuapp.com/" target="_blank">
              <p className="linksite">site&nbsp;</p>
            </a>
            <p> | </p>
            <a
              href="https://github.com/ChristopherCobb/innovateBHM-student-portal"
              target="_blank"
            >
              <p className="linksite">&nbsp;code</p>
            </a>
          </div>
        </div>

        <div className="chirp">
          <h2 className="projecttitles">Chirpr App</h2>
          <p className="projectdesc">
            A full stack Twitter clone. Developed using Typescript, React,
            Bootstrap node.js, Express.js and mySQL.
            <br />
            <br />
          </p>
          <img
            className="images"
            style={{ margin: "10px" }}
            src="https://i.imgur.com/VOorgCEm.png"
            alt="thumbnail"
          />
          <img
            className="images"
            style={{ margin: "10px" }}
            src="https://i.imgur.com/wisKzVwm.png"
            alt="thumbnail"
          />
          <a
            href="https://github.com/ChristopherCobb/FS-Chirpr"
            target="_blank"
          >
            <p className="linksite">&nbsp;code</p>
          </a>
        </div>
        <div className="blog">
          <h2 className="projecttitles">My Personal Blog</h2>
          <p className="projectdesc">
            A full stack personal blog app. Developed using Typescript, React,
            Bootstrap node.js, Express.js and mySQL.
            <br />
            <br />
          </p>
          <img
            className="images"
            style={{ margin: "10px" }}
            src="https://i.imgur.com/g8vPUj2m.png"
            alt="thumbnail"
          />
          <img
            className="images"
            style={{ margin: "10px" }}
            src="https://i.imgur.com/h9P0qDXm.png"
            alt="thumbnail"
          />

          {/* <img
            className="images"
            style={{ margin: "10px" }}
            src="https://i.imgur.com/BMPyFp8.png"
            alt="thumbnail"
          /> */}

          <a href="https://github.com/ChristopherCobb/FS-Blogs" target="_blank">
            <p className="linksite">&nbsp;code</p>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Developer;
