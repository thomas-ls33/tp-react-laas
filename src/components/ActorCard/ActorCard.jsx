import "./ActorCard.scss";

const ActorCard = ({ image, name, character }) => {
  return (
    <div className="actor">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <span>{character}</span>
    </div>
  );
};

export default ActorCard;
