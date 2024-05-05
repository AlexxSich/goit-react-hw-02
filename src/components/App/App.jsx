import Description from "../Description/Description";
import Feedback from "../Feedback/Feedback";
import Options from "../Options/Options";
import Notification from "../Notification/Notification";
import { useState } from "react";

import "./App.css";

function App() {
  const [values, setValues] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

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
    <>
      <h2>Home work #2</h2>
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
    </>
  );
}

export default App;
