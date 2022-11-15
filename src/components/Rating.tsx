import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./Rating.css";
interface transfertProps {
  transfertRating: number;
}
const Rating = ({ transfertRating }: transfertProps) => {
  const [rating, setRating] = useState<number>(transfertRating);
  const [hover, setHover] = useState<number>(0);
  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= (hover || rating) ? "onRating" : "offRating"}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
          </button>
        );
      })}
    </div>
  );
};

export default Rating;
