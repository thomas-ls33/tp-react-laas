import ScoreBadge from "../ScoreBadge/ScoreBadge";
import "./MovieCard.scss";

const MovieCard = ({ image, score, title, date }) => {
  return (
    <div className="movie">
      <img src={image} alt={title} />
      <ScoreBadge score={score} />
      <h5>{title}</h5>
      <p>{date}</p>
    </div>
  );
};

export default MovieCard;
