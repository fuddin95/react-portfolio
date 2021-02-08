import React from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";



export default function CardBoot(props) {
  return (
    
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
        <Link to="/AboutMe">
        <Button
          variant="primary"
          onClick={() => {
            console.log("clicked");
          }}
        >
          Visit Me
        </Button></Link>
      </Card.Body>
    </Card> 
    
    
  );
}
