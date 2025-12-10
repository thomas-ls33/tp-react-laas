import ActorCard from "../ActorCard/ActorCard";
import "./Casting.scss";

const Casting = ({ cast }) => {
  if (!cast || cast.length === 0) {
    return null;
  }

  return (
    <div className="casting">
      <h2>Casting</h2>
      <div className="actors">
        {cast.map((actor) => (
          <ActorCard
            key={actor.id}
            image={`https://image.tmdb.org/t/p/w138_and_h175_face${actor.profile_path}`}
            name={actor.name}
            character={actor.character}
          />
        ))}
      </div>
    </div>
  );
};

export default Casting;
