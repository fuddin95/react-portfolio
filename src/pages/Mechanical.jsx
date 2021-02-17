import React from "react";
import { CardDeck, Col, Container, Row } from "react-bootstrap";
import CardBoot from "../components/CardBoot";
import { mechanicalProjects } from "./Projects-mech";
import { CardOverlayB } from "../components/CardBoot";

export default function Mechanical() {
  return (
    <div className="mechanical-page app-body">
      <Container fluid>
        <h2 className="heading-h2">Mechanical Projects</h2>
        <Row>
          {mechanicalProjects.map((item, index) => {
            return (
              <CardBoot
                key={index}
                id={index}
                image={item.image}
                title={item.title}
                text={item.text}
                url={item.url}
              />
            );
          })}
        </Row>
      </Container>
    </div>
  );
}
