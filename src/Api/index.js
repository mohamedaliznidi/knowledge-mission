
export function Questions(results) {
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
      id:i,
      questionText: results[i].question,
      answerOptions: at,
    };
    console.log("eeeee");
    q.push(e);
  }
  console.log("qqqqqqq");
  return q;
}
