import React from "react";

const Quote = props => (
  <figure>
    <img src={props.image} alt={props.ville} />
    <figcaption>
      <blockquote>{props.ville}</blockquote>
      <cite>{props.pays}</cite>  
    </figcaption>
    <cite>{props.distance}</cite>
  </figure>
);
 
export default Quote;
