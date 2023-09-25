import * as React from "react";
import NavTabs from "../components/nav";
import { AboutData } from "../data/content";

const About = () => {
  return (
    <>
      <NavTabs></NavTabs>
      <div className="content-area">
        <div>
          <h4>About</h4>
        </div>
        <div>
          <AboutData />
        </div>
      </div>
    </>
  );
};

export default About;
