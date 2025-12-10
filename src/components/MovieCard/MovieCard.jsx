import React from "react";
import { Link } from "react-router-dom";
import ScoreBadge from "../ScoreBadge/ScoreBadge";
import "./MovieCard.scss";

const MovieCard = ({ id, image, score, title, date }) => {
  return (
    <Link to={`/focus/${id}`} className="movie">
      <img src={image} alt={title} />
      <ScoreBadge score={score} />
      <h5>{title}</h5>
      <p>{date}</p>
    </Link>
  );
};

export default MovieCard;
