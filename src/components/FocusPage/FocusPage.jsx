import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import FocusBanner from "../FocusBanner/FocusBanner";
import Casting from "../Casting/Casting";
import {
  getMovieDetails,
  getMovieCredits,
  getImageUrl,
  getBackdropUrl,
} from "../../api/api";

const FocusPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const movieData = await getMovieDetails(id);
      const castData = await getMovieCredits(id);
      setMovie(movieData);
      setCast(castData);
    };
    fetchData();
  }, [id]);

  if (!movie) return <div>Chargement...</div>;

  return (
    <div>
      <FocusBanner
        backgroundImage={getBackdropUrl(movie.backdrop_path)}
        posterImage={getImageUrl(movie.poster_path)}
        score={Math.round(movie.vote_average * 10)}
        title={movie.title}
        year={new Date(movie.release_date).getFullYear()}
        date={new Date(movie.release_date).toLocaleDateString("fr-FR")}
        genre={movie.genres.map((g) => g.name).join(", ")}
        duration={`${Math.floor(movie.runtime / 60)}h ${movie.runtime % 60}m`}
        synopsis={movie.overview}
      />
      <Casting cast={cast} />
    </div>
  );
};

export default FocusPage;
