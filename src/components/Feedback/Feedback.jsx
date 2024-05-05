export default function Feedback({ feedbackValue, allFeedbacks }) {
  return (
    <div>
      <p>Good: {feedbackValue.good}</p>
      <p>Neutral: {feedbackValue.neutral}</p>
      <p>Bad: {feedbackValue.bad}</p>
      <p>Total: {allFeedbacks}</p>
      <p>
        Positive:{" "}
        {Math.round(
          ((feedbackValue.good + feedbackValue.neutral) / allFeedbacks) * 100
        )}
        %
      </p>
    </div>
  );
}
