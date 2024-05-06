export default function Feedback({
  feedbackValue,
  allFeedbacks,
  averageFeedback,
}) {
  return (
    <div>
      <p>Good: {feedbackValue.good}</p>
      <p>Neutral: {feedbackValue.neutral}</p>
      <p>Bad: {feedbackValue.bad}</p>
      <p>Total: {allFeedbacks}</p>
      <p>Positive: {averageFeedback}%</p>
    </div>
  );
}
