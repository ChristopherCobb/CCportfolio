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
        <a href="">
          <h6 className="resume">Resume Link Soon!</h6>
        </a>
        <br />
        <p className="bold">
          I am a former Executive Chef turned Full Stack Web Developer. I am an ardent
          learner who loves to design and implement high quality apps and
          websites with exceptional user experience.
        </p>
        <br />
        <p className="notbold">
          I enjoy turning complex problems into simple, beautiful, and intuitive
          solutions.
        </p>{" "}
        <br />
        <p className="bold">
          I have experience in <span className="boldspan">React, Typescript, JavaScript, node.js,
          Express.js, AWS, Bootstrap, and mySQL.{" "}</span>
        </p>
        <br />
        <p className="notbold">
          When I'm not coding, you'll likely find me chasing my 3 year old
          daughter around, scoring over par on the golf course, or watching The Office
          with my wife.
        </p>
        <br />
        <p className="bold">
          Again, my name is Christopher, and I look forward to bringing your vision to
          life.
        </p>
        <br /> 
        <p className="notbold">cbcobb4@gmail.com</p>
      </h6>
    </div>
  );
};

export default Meet;
