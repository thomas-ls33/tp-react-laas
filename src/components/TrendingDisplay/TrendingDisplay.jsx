import { useState, useEffect } from "react";
import Button from "../Button/Button";
import MovieCard from "../MovieCard/MovieCard";
import { getTrendingMovies, getImageUrl } from "../../api/api";
import "./TrendingDisplay.scss";

const TrendingDisplay = () => {
  const [movies, setMovies] = useState([]);
  const [sortBy, setSortBy] = useState("date");

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await getTrendingMovies();
      setMovies(data);
    };
    fetchMovies();
  }, []);

  const sortedMovies = [...movies].sort((a, b) => {
    if (sortBy === "date") {
      return new Date(b.release_date) - new Date(a.release_date);
    } else {
      return a.title.localeCompare(b.title);
    }
  });

  return (
    <div className="tendances-container">
      <div className="title-filter">
        <h2>Tendances</h2>
        <Button
          text="Par date"
          isActive={sortBy === "date"}
          onClick={() => setSortBy("date")}
        />
        <Button
          text="Par nom"
          isActive={sortBy === "name"}
          onClick={() => setSortBy("name")}
        />
      </div>
      <div className="grid-tendances">
        {sortedMovies.map((movie) => (
          <MovieCard
            key={movie.id}
            id={movie.id}
            image={getImageUrl(movie.poster_path)}
            score={Math.round(movie.vote_average * 10)}
            title={movie.title}
            date={new Date(movie.release_date).toLocaleDateString("fr-FR")}
          />
        ))}
      </div>
    </div>
  );
};

export default TrendingDisplay;
