import "./ScoreBadge.scss";

const ScoreBadge = ({ score }) => {
  return (
    <div className="score">
      <p>{score}%</p>
    </div>
  );
};

export default ScoreBadge;
