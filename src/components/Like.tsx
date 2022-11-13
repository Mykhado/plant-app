import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Like.css";
import React, { useState } from "react";

const Like = () => {
  const [likeOrDislike, setLikeOrDislike] = useState<boolean>(false);
  return (
    <div>
      <button
        type="button"
        id="like"
        className={likeOrDislike ? "on" : "off"}
        onClick={() =>
          likeOrDislike ? setLikeOrDislike(false) : setLikeOrDislike(true)
        }
      >
        <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Like;
