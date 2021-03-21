const questions = {
    response_code: 0,
    results: [
      {
        category: "Celebrities",
        type: "multiple",
        difficulty: "medium",
        question:
          "Which of these people is NOT a part of the Internet comedy group Mega64?",
        correct_answer: "Jon Jafari",
        incorrect_answers: ["Rocco Botte", "Derrick Acosta", "Shawn Chatfield"],
      },
      {
        category: "Celebrities",
        type: "multiple",
        difficulty: "medium",
        question: "What was the name of Marilyn Monroe&#039;s first husband?",
        correct_answer: "James Dougherty",
        incorrect_answers: ["Joe Dimaggio", "Kirk Douglas", "Arthur Miller"],
      },
      {
        category: "Celebrities",
        type: "multiple",
        difficulty: "medium",
        question:
          "Which radio personality calls himself &quot;The King of All Media&quot;?",
        correct_answer: "Howard Stern",
        incorrect_answers: ["Rush Limbaugh", "Pete Tong", "Ryan Seacrest"],
      },
      {
        category: "Celebrities",
        type: "multiple",
        difficulty: "medium",
        question:
          "Nikki Diamond portrayed which Gladiator in the 1992 TV show &quot;Gladiators&quot;?",
        correct_answer: "Scorpio",
        incorrect_answers: ["Jet", "Nightshade", "Falcon"],
      },
      {
        category: "Celebrities",
        type: "multiple",
        difficulty: "medium",
        question:
          "Which of these celebrities was not a member of the Jackson 5?",
        correct_answer: "Bo Jackson",
        incorrect_answers: [
          "Tito Jackson",
          "Jermaine Jackson",
          "Marlon Jackson",
        ],
      },
    ],
  };

  const a = answers(
    questions.results[0].correct_answer,
    questions.results[0].incorrect_answers
  );

  const answer = move(a, 3, 1, 2);
  console.log(answer);