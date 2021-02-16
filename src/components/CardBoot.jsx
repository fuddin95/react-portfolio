import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Col } from "react-bootstrap";
import "./CardBoot.css"


function CardBoot(props) {
  return (
    <Col xl={3} lg={3} md={6}>
    <Card id="card-css">
      <Card.Img id="card-img" variant="top" src={props.image}/>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text >{props.text}</Card.Text>
        <a target="_blank" href={props.url}>
          <Button variant="primary" onClick={() => {}}>
            Visit Me
          </Button></a>
        
      </Card.Body>
    </Card>
    </Col>
  );
}

function CardOverlayB(props) {
  return (
    <>
      <Card className="bg-dark text-white">
        <Card.Img src={props.image} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.text}</Card.Text>
        </Card.ImgOverlay>
      </Card>
    </>
  );
}

export default CardBoot;
export {CardOverlayB};