import React, { useState } from "react";
import styles from "./PlaySettings.module.css";

function PlaySettings({ Play }) {
  const [details, setDetails] = useState({
    amount: 0,
    category: 0,
    difficulty: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    Play(details);
  };
  return (
    <div>
      <h1>Big Title</h1>
      <form onSubmit={submitHandler} className={styles.main}>
        <div className="form-inner">
          <div className={styles.Amount}>
            <div htmlFor="amount" className={styles.questionCount}>
              Number of Quetions :
            </div>
            <input
              className={styles.amountPicker}
              type="number"
              name="amount"
              id="amount"
              onChange={(e) =>
                setDetails({ ...details, amount: e.target.value })
              }
              value={details.amount}
            />
          </div>
          <div className={styles.category}>
            <div htmlFor="category" className={styles.questionCount}>
              Category :
            </div>
            <div className={styles.Items}>
              <input
                type="radio"
                name="Celebrities"
                id="category"
                onChange={(e) =>
                  setDetails({ ...details, category: e.target.value })
                }
                value={26}
              />
              <label htmlFor="Celebrities">Celebrities</label> <br></br>
              <input
                type="radio"
                name="History"
                id="category"
                onChange={(e) =>
                  setDetails({ ...details, category: e.target.value })
                }
                value={23}
              />
              <label htmlFor="History">History</label> <br></br>
              <input
                type="radio"
                name="Mythology"
                id="category"
                onChange={(e) =>
                  setDetails({ ...details, category: e.target.value })
                }
                value={20}
              />
              <label htmlFor="Mythology">Mythology</label> <br></br>
              <input
                type="radio"
                name="Music"
                id="category"
                onChange={(e) =>
                  setDetails({ ...details, category: e.target.value })
                }
                value={12}
              />
              <label htmlFor="Music">Music</label> <br></br>
            </div>
          </div>
          <div className={styles.difficulty}>
            <div htmlFor="amount" className={styles.questionCount}>
              Difficulty :
            </div>
            <div className={styles.diffItems}>
              <div>
                <input
                  type="radio"
                  name="easy"
                  id="difficulty"
                  onChange={(e) =>
                    setDetails({ ...details, difficulty: e.target.name })
                  }
                />
                <label htmlFor="easy">Easy </label>
              </div>
              <div>
                <input
                  type="radio"
                  name="medium"
                  id="difficulty"
                  onChange={(e) =>
                    setDetails({ ...details, difficulty: e.target.name })
                  }
                />
                <label htmlFor="medium">Medium </label>
              </div>
              <div>
                <input
                  type="radio"
                  name="hard"
                  id="difficulty"
                  onChange={(e) =>
                    setDetails({ ...details, difficulty: e.target.name })
                  }
                />
                <label htmlFor="Hard">Hard</label>
              </div>
            </div>
          </div>
          <button type="submit" value="Play" className={styles.button}>
            Play
          </button>
        </div>
      </form>
    </div>
  );
}

export default PlaySettings;
