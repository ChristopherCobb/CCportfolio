import React from "react";
import "../scss/app.scss";

const Meet = () => {
  return (
    <div className="meetcontent">
      <img
        className="meetimage"
        src="https://i.imgur.com/laAGjHj.jpg"
        alt="christopher's headshot"
      />
      <h6 className="descriptions">
        <i className="fas fa-link"></i>
        <a href="https://drive.google.com/file/d/1bCsYsan_CBRSMauwFRH-SkYE2VUnoFSv/view?usp=sharing">
          <h6 className="resume">Resume</h6>
        </a>
        <br />
        <p className="bold">
          I am a former Executive Chef turned Full Stack Web Developer. I am an
          ardent learner who loves to design and implement high quality apps and
          websites with exceptional user experience.
        </p>
        <br />
        <p className="notbold">
          I enjoy turning complex problems into simple, beautiful, and intuitive
          solutions.
        </p>{" "}
        <br />
        <p className="bold">
          I am experienced in{" "}
          <span className="boldspan">
            React, Typescript, JavaScript, node.js, Express.js, GatsyJS,
            AWS, HTML/CSS/Sass, Bootstrap, and mySQL.{" "}
          </span>
        </p>
        <br />
        <p className="notbold">
          When I'm not coding, you'll likely find me chasing my 3 year old
          daughter around, scoring over par on the golf course, or watching The
          Office with my wife.
        </p>
        <br />
        <p className="bold">
          Again, my name is Christopher, and I look forward to bringing your
          vision to life.
        </p>
        <br />
        <p className="notbold">cbcobb4@gmail.com</p>
      </h6>
    </div>
  );
};

export default Meet;
