import Button from "../Button/Button";
import MovieCard from "../MovieCard/MovieCard";
import "./TrendingDisplay.scss";

const TrendingDisplay = () => {
  return (
    <div className="tendances-container">
      <div className="title-filter">
        <h2>Tendances</h2>
        <Button text="Par date" isActive={true} />
        <Button text="Par nom" isActive={false} />
      </div>
      <div className="grid-tendances">
        <MovieCard
          image="https://image.tmdb.org/t/p/w500/bjUWGw0Ao0qVWxagN3VCwBJHVo6.jpg"
          score={77}
          title="Zootopia 2"
          date="26/11/2025"
        />
        <MovieCard
          image="https://image.tmdb.org/t/p/w500/cVxVGwHce6xnW8UaVUggaPXbmoE.jpg"
          score={86}
          title="Stranger Things"
          date="15/07/2016"
        />
        <MovieCard
          image="https://image.tmdb.org/t/p/w500/bKLm1xS9DsODWB4i1SxTEvLXab9.jpg"
          score={59}
          title="Jay Kelly"
          date="14/11/2025"
        />
        <MovieCard
          image="https://image.tmdb.org/t/p/w500/ycC53SEDcY7YDOSrFqPQigxaCyx.jpg"
          score={81}
          title="IT: Welcome to Derry"
          date="26/10/2025"
        />
      </div>
    </div>
  );
};

export default TrendingDisplay;
