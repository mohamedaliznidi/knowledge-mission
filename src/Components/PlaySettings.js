import React, { useState } from "react";

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
      <form onSubmit={submitHandler}>
        <div className="form-inner">
          <div className="form-group">
            <label htmlFor="amount">Number of Quetions </label>
            <input
              type="number"
              name="amount"
              id="amount"
              onChange={(e) =>
                setDetails({ ...details, amount: e.target.value })
              }
              value={details.amount}
            />
          </div>
          <label>Category</label>
          <div className="form-group">
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
          <label>Difficulty</label>
          <div className="form-group">
            <input
              type="radio"
              name="easy"
              id="difficulty"
              onChange={(e) =>
                setDetails({ ...details, difficulty: e.target.name })
              }
            />
            <label htmlFor="easy">Easy /</label>
            <input
              type="radio"
              name="medium"
              id="difficulty"
              onChange={(e) =>
                setDetails({ ...details, difficulty: e.target.name })
              }
            />
            <label htmlFor="medium">Medium /</label>
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
        <input type="submit" value="Play" />
      </form>
    </div>
  );
}

export default PlaySettings;
