import React, { FC, useState } from "react";
import Feedback from '../../components/Feedback/Feedback';
//import Input from "../../components/Input/Input";

interface Homework21Props {
  // Добавьте необходимые пропсы, если они есть
}

const Homework21: FC<Homework21Props> = ({ /* деструктуризация пропсов, если нужно */ }) => {
  const [feedbackLikes, setFeedbackLikes] = useState<number>(0);
  const [feedbackDislikes, setFeedbackDislikes] = useState<number>(0);

  const onFeedbackLike = () => {
    setFeedbackLikes((prevValue) => prevValue + 1);
  };

  const onFeedbackDislike = () => {
    setFeedbackDislikes((prevValue) => prevValue + 1);
  };

  const resetFeedbackResults = () => {
    setFeedbackLikes(0);
    setFeedbackDislikes(0);
  };

  return (
    <div className="homework21-wrapper">
      <h2>Homework 21: State Management for Feedback</h2>
      <Feedback
        likes={feedbackLikes}
        dislikes={feedbackDislikes}
        onLike={onFeedbackLike}
        onDislike={onFeedbackDislike}
        onReset={resetFeedbackResults}
      />
    </div>
  );
};

export default Homework21;
