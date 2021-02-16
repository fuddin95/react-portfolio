import React from "react";
import { CardDeck, Col, Container, Row } from "react-bootstrap";
import CardBoot from "../components/CardBoot";
import Frontend,{reactApps} from "./Projects-mech";
import "./Pages.css"

export default function WebApps() {
  return (
    <div className="app-body">
      <Container fluid>
      <h2 className="heading-h2">Front-End </h2>

      <h3 className="heading-h2">React Apps</h3>
      <Row>
          
          {reactApps.map((item,index)=>{
              return(
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
      <h3 className="heading-h2">CSS Javascript jQuerry</h3>
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
