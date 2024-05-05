import Description from "../Description/Description";
import Feedback from "../Feedback/Feedback";
import Options from "../Options/Options";
import Notification from "../Notification/Notification";
import { useEffect, useState } from "react";

import css from "./App.module.css";

export default function App() {
  const [values, setValues] = useState(() => {
    const feedbackData = localStorage.getItem("feedbackClicks");
    return feedbackData !== null ? JSON.parse(feedbackData) : 0;
  });

  useEffect(() => {
    localStorage.setItem("feedbackClicks", JSON.stringify(values));
  }, [values]);

  const updateFeedback = (feedbackType) => {
    setValues({
      ...values,
      [feedbackType]: values[feedbackType] + 1,
    });
  };

  const totalFeedback = values.good + values.neutral + values.bad;

  const handleReset = () => {
    setValues({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <div className={css.container}>
      <h2>React - Home work #2</h2>
      <Description />
      <Options
        feedbackValue={values}
        onUpdate={updateFeedback}
        allFeedbacks={totalFeedback}
        reset={handleReset}
      />
      {totalFeedback > 0 ? (
        <Feedback feedbackValue={values} allFeedbacks={totalFeedback} />
      ) : (
        <Notification />
      )}
    </div>
  );
}
