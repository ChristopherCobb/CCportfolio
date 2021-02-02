import React, { useState } from "react";
import Developer from "./Developer";
// import Creative from './components/Creative'
import Footer from "./Footer";

function App() {
  const [developerToggle, setDeveloperToggle] = useState(false);
  // const [creativeToggle, setCreativeToggle] = useState(false);

  const showDeveloper = developerToggle ? "width1" : "";
  // const showCreative = creativeToggle ? 'width1' : '';

  return (
    <div className="App">
      <div className="center">
        <div className="name">
          <h1
            onClick={() => {
              setDeveloperToggle(false);
              // setCreativeToggle(false);
            }}
          >
            christopher cobb | software developer
          </h1>
        </div>
        <div className="titles">
          
          <p
            className="menu"
            onClick={() => {
              setDeveloperToggle(!developerToggle);
              // setCreativeToggle(false);
            }}
          > <i className="fa fa-space-shuttle"></i>
             {" "}projects &nbsp;
          </p>
          {/* <p
						className='menu'
						onClick={() => {
							setCreativeToggle(!creativeToggle);
							setDeveloperToggle(false);
						}}>
						|&nbsp;creative&nbsp;
					</p> */}
        </div>
      </div>

      <div className={`contentBox ${showDeveloper}`}>
        <Developer />
        <p
          className='close'
          onClick={() => {
            setDeveloperToggle(false);
            // setCreativeToggle(false);
          }}
        >
          close
        </p>
      </div>

      {/* <div className={`contentBox ${showCreative}`}>
				<Creative />
				<p
					className='close'
					onClick={() => {
						setDeveloperToggle(false);
						setCreativeToggle(false);
						// setActorToggle(false);
					}}>
					close
				</p>
			</div> */}
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
