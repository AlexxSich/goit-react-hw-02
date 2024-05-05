import css from "./Options.module.css";

export default function Options({ onUpdate, reset }) {
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
    <div className={css.btnContainer}>
      <button className={css.btn} onClick={handleGood}>
        Good
      </button>
      <button className={css.btn} onClick={handleNeutral}>
        Neutral
      </button>
      <button className={css.btn} onClick={handleBad}>
        Bad
      </button>
      <button className={css.btn} onClick={reset}>
        Reset
      </button>
    </div>
  );
}
