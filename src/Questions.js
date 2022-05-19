import { useState } from "react";
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi";

function Questions({ title, info }) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="question">
      <div className="QA">
        <h3>{title}</h3>
        {
          showAnswer && <p>{info}</p>
        }
      </div>
      <button type="button" onClick={() => setShowAnswer(!showAnswer)}>
        {showAnswer ? <FiMinusCircle /> : <FiPlusCircle />}
      </button>
    </div>
  )
};

export default Questions;