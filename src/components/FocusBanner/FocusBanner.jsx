import ScoreBadge from "../ScoreBadge/ScoreBadge";
import "./FocusBanner.scss";

const FocusBanner = ({
  backgroundImage,
  posterImage,
  score,
  title,
  year,
  date,
  genre,
  duration,
  synopsis,
}) => {
  return (
    <div
      className="banner"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="content">
        <img src={posterImage} alt={title} />
        <div className="right">
          <div className="top">
            <ScoreBadge score={score} />
            <div className="title-date">
              <h1>
                {title} ({year})
              </h1>
              <span>
                {date} - {genre} - {duration}
              </span>
            </div>
          </div>
          <div className="synopsis">
            <h2>Synopsis</h2>
            <p>{synopsis}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FocusBanner;
