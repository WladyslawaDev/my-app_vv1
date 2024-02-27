import { useState, FC, MouseEvent } from "react";

import { Like } from "../../assets";

import Button from "../Button/Button";

import "./styles.css";

// It was so:
// function Feedback() {
//   // Создаем state для likes
//   const [likes, setLikes] = useState(0);
//   // Создаем state для dislikes
//   const [dislikes, setDislikes] = useState(0);

//Now it is this way:
interface FeedbackProps {
  likes: number;
  dislikes: number;
  onLike: () => void;
  onDislike: () => void;
  onReset: () => void;
  
}

const Feedback: FC<FeedbackProps> = ({ likes, dislikes, onLike, onDislike, onReset }) => (
  <div className="feedback-wrapper">
    <div className="feedback-control">
      <div className="buttonwithcount-container">
        <div onClick={onLike} className="image-control">
          <img className="image" src={Like} alt="Like img" />
        </div>
        <p className="count">{likes}</p>
      </div>
      <div className="buttonwithcount-container">
        <Button name="Dislike" onClick={onDislike} />
        <p className="count">{dislikes}</p>
      </div>
    </div>
    <Button name="Reset Results" onClick={onReset} />
  </div>
);

export default Feedback;