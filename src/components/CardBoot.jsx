import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function CardBoot(props) {
  return (
    <Card style={{ width: "22rem" }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
        <Link to="/AboutMe">
          <Button variant="primary" onClick={() => {}}>
            Visit Me
          </Button>
        </Link>
      </Card.Body>
    </Card>
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