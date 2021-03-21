import React from "react";
import Home from "./Components/Home";
import BG from "./Components/BG";
import Game from "./Components/Game";

function App() {
  const results = [
    {
      category: "Celebrities",
      type: "multiple",
      difficulty: "medium",
      question:
        "Which of these people is NOT a part of the Internet comedy group Mega64?",
      answers: [
        { answerText: "Rocco Botte", isCorrect: false },
        { answerText: "Derrick Acosta", isCorrect: false },
        { answerText: "Shawn Chatfield", isCorrect: false },
        { answerText: "Jon Jafari", isCorrect: true },
      ],
    },
    {
      category: "Celebrities",
      type: "multiple",
      difficulty: "medium",
      question: "What was the name of Marilyn Monroe&#039;s first husband?",
      answers: [
        { answerText: "Joe Dimaggio", isCorrect: false },
        { answerText: "Kirk Douglas", isCorrect: false },
        { answerText: "Arthur Miller", isCorrect: false },
        { answerText: "James Dougherty", isCorrect: true },
      ],
    },
    {
      category: "Celebrities",
      type: "multiple",
      difficulty: "medium",
      question:
        "Which radio personality calls himself &quot;The King of All Media&quot;?",
      answers: [
        { answerText: "Rush Limbaugh", isCorrect: false },
        { answerText: "Pete Tong", isCorrect: false },
        { answerText: "Ryan Seacrest", isCorrect: false },
        { answerText: "Howard Stern", isCorrect: true },
      ],
    },
  ];
  const play = true;
  return (
    <div>
      <BG></BG>
      <div>{play ? <Game qs={results} /> : <Home />}</div>
    </div>
  );
}

export default App;
