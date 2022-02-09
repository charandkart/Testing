import React from "react";
import { Link, Route } from "react-router-dom";
import AboutPage from "./AboutPage";

const About = () => {
  return (
    <div>
      <Link to="/aboutPage">AboutPage</Link>

      <Route to="/aboutPage" component={AboutPage} />

      <h1>AboutPage</h1>
    </div>
  );
};

export default About;
