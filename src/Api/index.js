import axios from "axios";

const url =
  "https://opentdb.com/api.php?amount=5&category=26&difficulty=medium";
//const url1 = "https://opentdb.com/api.php?";

export const fetchData = async () => {
  try {
    const response = await axios.get(url);
    //return questions(response.results);
    return questions(response.data.results);
  } catch (error) {}
};

// {
//   response_code: 0,
//   results: [
//     {
//       category: "Celebrities",
//       type: "multiple",
//       difficulty: "medium",
//       question:
//         "What is the real name of &quot;moot&quot;, founder of the imageboard 4chan?",
//       correct_answer: "Christopher Poole",
//       incorrect_answers: [
//         "Mark Zuckerberg",
//         "Allison Harvard",
//         "Catie Wayne",
//       ],
//     },
//     {
//       category: "Celebrities",
//       type: "multiple",
//       difficulty: "medium",
//       question:
//         "What is generally considered to be William Shakespeare&#039;s birth date?",
//       correct_answer: "April 23rd, 1564",
//       incorrect_answers: [
//         "July 4th, 1409",
//         "September 29th, 1699",
//         "December 1st, 1750",
//       ],
//     },
//     {
//       category: "Celebrities",
//       type: "multiple",
//       difficulty: "medium",
//       question:
//         "Which radio personality calls himself &quot;The King of All Media&quot;?",
//       correct_answer: "Howard Stern",
//       incorrect_answers: ["Rush Limbaugh", "Pete Tong", "Ryan Seacrest"],
//     },
//     {
//       category: "Celebrities",
//       type: "multiple",
//       difficulty: "medium",
//       question:
//         "How much weight did Chris Pratt lose for his role as Star-Lord in &quot;Guardians of the Galaxy&quot;?",
//       correct_answer: "60 lbs",
//       incorrect_answers: ["30 lbs", "50 lbs", "70 lbs"],
//     },
//     {
//       category: "Celebrities",
//       type: "multiple",
//       difficulty: "medium",
//       question: "Which television show has Dan Gheesling been on?",
//       correct_answer: "Big Brother",
//       incorrect_answers: ["Jeopardy", "Survivor", "The Bachelor"],
//     },
//   ],
// };

function questions(results) {
  var q = [];
  for (let i = 0; i < results.length; i++) {
    var correct = false;
    var at = [];
    let k = 0;
    for (let j = 0; j < 4; j++) {
      var rand = Math.round(Math.random());

      if (correct) {
        // correct answer exist

        at[j] = {
          answerText: results[i].incorrect_answers[k],
          isCorrect: false,
        };
        k++;
      } else if (j === 3) {
        // no corret answer and last item

        at[j] = {
          answerText: results[i].correct_answer,
          isCorrect: true,
        };
        correct = true;
      } else if (rand) {
        // no correct answer and not last item and rand =1

        at[j] = {
          answerText: results[i].correct_answer,
          isCorrect: true,
        };
        correct = true;
      } else {
        // no correct answer and not last item and rand = 0

        at[j] = {
          answerText: results[i].incorrect_answers[j],
          isCorrect: false,
        };
        k++;
      }
    }

    const e = {
      questionText: results[i].question,
      answerOptions: at,
    };

    q.push(e);
  }
  return q;
}
