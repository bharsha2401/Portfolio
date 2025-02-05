import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Crop Yield Prediction Using
Machine Learning"
              description="The aim is to predict the crop yield current status & for the next
rotation using deep learning techniques.This provides a farmer
with an insight into the future yield, price of the crop that he/she
is going to harvest."
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="News website"
              description="Created a News website to showcase their skills using HTML,
CSS.."
              
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
