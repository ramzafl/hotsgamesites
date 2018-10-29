import React from "react";
import "../App.css";

const About = () => {
  return (
    <React.Fragment>
      <header>
        This is a simple demo / learning project in react. This page is mostly
        here to show react router dom in action.
      </header>
      <body>
        <div>
          Resize and check below for some mobile responsive css using flexbox
          and media queries for breakpoints @1000px and @500px.
        </div>
        <div className="cssContainer">
          <div className="box box1">one 😎</div>
          <div className="box box2">two 🍕</div>
          <div className="box box3">three 🍟</div>
          <div className="box box4">four 👍</div>
          <div className="box box5">five 👀</div>
        </div>
      </body>
    </React.Fragment>
  );
};

export default About;
