 import React from "react"
import CardBoot from "../components/CardBoot"
 import Projects from "./Projects"
 
 export default function Mechanical (){
    console.log(Projects);
     return (
     <>
     <CardBoot 
        image="https://techcrunch.com/wp-content/uploads/2019/02/mechanical.jpg"
        title="First Card"
        text="hello this is the second version"
        />
        <CardBoot
        image= {require("../images/fahad.png")}
        title={Projects[0].title}
        />
        
     </>
     );
 }