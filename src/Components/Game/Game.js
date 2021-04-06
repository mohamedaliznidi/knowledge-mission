import React, { useState } from "react";
import styles from "./Game.module.css";

function Game({ key, data, Stop }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [style, setStyle] = useState(styles.button);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
      setStyle(styles.correct);
    } else {
      setStyle(styles.incorrect);
    }
  };

  const handleNextClick = () => {
    setStyle(styles.button);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < data.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
    console.log("next");
  };

  return (
    <>
      <div className={styles.main}>
        {showScore ? (
          <div className={styles.scoreSection}>
            <div>
              <h2>
                You scored {score} out of {data.length}
              </h2>
            </div>
            <div className={styles.buttonSection}>
              <button className={styles.buttonRep} onClick={Stop}>
                RePlay
              </button>
            </div>
          </div>
        ) : (
          <div className={styles.game}>
            <div className={styles.section}>
              <div className={styles.questionSection}>
                <div className={styles.questionCount}>
                  <span>Question {currentQuestion + 1}</span>/{data.length}
                </div>
                <div className={styles.questionText}>
                  {data[currentQuestion].questionText}
                </div>
              </div>
              <div className={styles.answerSection}>
                {data[currentQuestion].answerOptions.map((answerOption) => (
                  <button
                    key={answerOption.key}
                    className={style}
                    onClick={() =>
                      handleAnswerOptionClick(answerOption.isCorrect)
                    }
                  >
                    {answerOption.answerText}
                  </button>
                ))}
              </div>
            </div>
            <div className={styles.buttonSection}>
              <button className={styles.buttonRep} onClick={handleNextClick}>
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Game;
