// eslint-disable-next-line react/prop-types
function Astrateamcards({ teamlogo, tname }) {
  return (
    <div className="b-game-card">
      <div className="b-game-card__cover">
        <img src={teamlogo} className="b-game-card__cover" />
        {/* <p>{tname}</p> */}
      </div>
    </div>
  );
}

export default Astrateamcards;
