export default function Options({ onUpdate, allFeedbacks, reset }) {
  const handleGood = () => {
    onUpdate("good");
  };

  const handleNeutral = () => {
    onUpdate("neutral");
  };

  const handleBad = () => {
    onUpdate("bad");
  };

  return (
    <div>
      <button onClick={handleGood}>Good</button>
      <button onClick={handleNeutral}>Neutral</button>
      <button onClick={handleBad}>Bad</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

{
  /* <button onClick={handleClick}>Bad: {clicks}</button> */
}
