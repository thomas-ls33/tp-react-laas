import { useState, useEffect } from "react";
import Button from "../Button/Button";
import MovieCard from "../MovieCard/MovieCard";
import { getPopularSeries, getImageUrl } from "../../api/api";
import "./SeriesDisplay.scss";

const SeriesDisplay = () => {
  const [series, setSeries] = useState([]);
  const [sortBy, setSortBy] = useState("date");

  useEffect(() => {
    const fetchSeries = async () => {
      const data = await getPopularSeries();
      setSeries(data);
    };
    fetchSeries();
  }, []);

  const sortedSeries = [...series].sort((a, b) => {
    if (sortBy === "date") {
      return new Date(b.first_air_date) - new Date(a.first_air_date);
    } else {
      return a.name.localeCompare(b.name);
    }
  });

  return (
    <div className="series-container">
      <div className="content">
        <div className="title-filter">
          <h2>Séries TV</h2>
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
        <div className="grid-series">
          {sortedSeries.map((show) => (
            <MovieCard
              key={show.id}
              id={show.id}
              image={getImageUrl(show.poster_path)}
              score={Math.round(show.vote_average * 10)}
              title={show.name}
              date={new Date(show.first_air_date).toLocaleDateString("fr-FR")}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SeriesDisplay;
