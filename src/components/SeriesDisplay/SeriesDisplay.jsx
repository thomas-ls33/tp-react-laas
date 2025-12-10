import Button from "../Button/Button";
import MovieCard from "../MovieCard/MovieCard";
import "./SeriesDisplay.scss";

const SeriesDisplay = () => {
  return (
    <div className="series-container">
      <div className="content">
        <div className="title-filter">
          <h2>Séries TV</h2>
          <Button text="Par date" isActive={true} />
          <Button text="Par nom" isActive={false} />
        </div>
        <div className="grid-series">
          <MovieCard
            image="https://image.tmdb.org/t/p/w500/lfWSYbPvlbchUs7FuZzBljcOsbs.jpg"
            score={89}
            title="Breaking Bad"
            date="20/01/2008"
          />
          <MovieCard
            image="https://image.tmdb.org/t/p/w500/ypS7R36Vjcn51zZsXsta5onnaCo.jpg"
            score={87}
            title="Arcane"
            date="06/11/2021"
          />
          <MovieCard
            image="https://image.tmdb.org/t/p/w500/8RVWqNc0VUX3vh0gIsMxQRBHmnz.jpg"
            score={87}
            title="Avatar : Le Dernier Maître de l'air"
            date="21/02/2005"
          />
          <MovieCard
            image="https://image.tmdb.org/t/p/w500/dDRiOkCBCkd7w6ysMFr39G16opQ.jpg"
            score={87}
            title="Frieren"
            date="29/09/2023"
          />
        </div>
      </div>
    </div>
  );
};

export default SeriesDisplay;
