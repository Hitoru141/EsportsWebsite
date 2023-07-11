// eslint-disable-next-line react/prop-types
function Astrateamcards({ teamlogo }) {
  return (
    <div className="b-game-card">
      <div className="b-game-card__cover">
        <img src={teamlogo} className="b-game-card__cover" />
      </div>
    </div>
  );
}

export default Astrateamcards;
