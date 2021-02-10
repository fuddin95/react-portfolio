 import React from "react"
import { CardDeck } from "react-bootstrap";
import CardBoot from "../components/CardBoot"
import Projects from "./Projects"
import googleKeeper from "../images/googleKeeper.jpg"
import dog from "../images/dog.jpg"
import {CardOverlayB} from "../components/CardBoot"
 
 export default function Mechanical (){
    console.log(Projects);
     return (
     <div className="mechanical-page">
    
     <CardDeck>
     <CardBoot 
        image="https://techcrunch.com/wp-content/uploads/2019/02/mechanical.jpg"
        title="First Card"
        text="hello this is the second version "
        />
        <CardBoot
        image= {googleKeeper}
        title={Projects[0].title}
        text={Projects[0].text}
        />
        <CardBoot
        image= {dog}
        title={Projects[1].title}
       
        />
        
       </CardDeck>
     </div>
     );
 }