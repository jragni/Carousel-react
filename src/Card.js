import React from "react";
import "./Card.css";

/**Card
 *
 * Props:
 * - src
 * - caption
 * - currNum
 * - totalNum
 *
 * State:
 *    None
 *
 * Card -> Carousel
 */
function Card(props) {
  return (
    <div className="Card">
      <h4 className="Card-title">{props.caption}</h4>
      <img className="Card-image" src={props.src} alt={props.caption} />
      <small className="Card-small">
        Image {props.currNum} of {props.totalNum}.
      </small>
    </div>
  );
}

export default Card;
