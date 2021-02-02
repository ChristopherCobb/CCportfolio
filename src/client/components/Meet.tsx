import React from "react";
import "../scss/app.scss"



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
          <h6 className="resume">Resume Link Soon</h6>
        </a>
        <br />
        Developer + more info  
         <br />
        <br /> Insert information about myself here.  <br />
        <br />
      Insert Info here <br />
        <br />
        I've spent the last 10 years as a chef in multiple roles.
        <br />
        I'm a full stack developer who most enjoys working with React, node.js,
        ExpressJS, and mySQL.
        <br />
        <br />
        My name is Christopher, and I look forward to bringing your vision to life.
      </h6>
    </div>
  );
};

export default Meet;
