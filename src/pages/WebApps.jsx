import React from "react";
import { CardDeck, Col, Container, Row } from "react-bootstrap";
import CardBoot from "../components/CardBoot";
import Frontend from "./Projects-mech";
import "./Pages.css"

export default function WebApps() {
  return (
    <div className="app-body">
      <Container fluid>
      <h2 className="heading-h2">Front-End Pages</h2>
        <Row>
        {Frontend.map((item, index) => {
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
