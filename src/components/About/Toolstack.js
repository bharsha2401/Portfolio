import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiPostman,
  SiMacos,
  SiCodeforces,  // Using another available icon as a placeholder for Visual Studio Code
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCodeforces /> {/* Placeholder icon */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
    </Row>
  );
}

export default Toolstack;
