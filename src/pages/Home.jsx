import React from "react";
import { Button } from "react-bootstrap";
import CardBoot from "../components/CardBoot";
import CarouselB from "../components/CarouselB";
import { Link } from "react-router-dom";
import { ArrowRight} from "react-bootstrap-icons";

export default function Home() {
  return (
    <div className="home-page">
      {/* <CarouselB /> */}
      <h1>Welcome </h1>
      <Button variant="outline-secondary" as={Link} to="/WebApps">
        View Projects {" "}
        <ArrowRight />
      </Button>
          
    </div>
  );
}
