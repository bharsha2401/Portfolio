import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Harsha vardhan Reddy </span>
            from <span className="purple"> Eluru, India.</span>
            <br />

            <br />
            A motivated BTech 3rd-year student with a strong foundation in
Computer Science. Passionate about leveraging technology and
problem-solving skills to tackle real-world challenges. Currently
working on projects involving machine learning, crop yield prediction
Eager to gain practical experience through internships and
collaborative projects.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening songs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            {}
          </p>
          <footer className="blockquote-footer">Harsha</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
