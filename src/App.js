import React, { useState, useEffect } from "react";
import axios from "axios";
import Game from "./Components/Game";
import { Questions } from "./Api";
// function App() {
//   const quest = fetchData(3, 26, "medium");
//   console.log(quest);
//   return <div></div>;
// }

function App() {
  const [ready, setReady] = useState(false);
  const [datas, setDatas] = useState();
  const url =
    "https://opentdb.com/api.php?amount=5&category=26&difficulty=medium";

  useEffect(() => {
    async function fetch() {
      const response = await axios.get(url);
      setDatas(Questions(response.data.results));
      setReady(true);
    }
    fetch();
  }, []);

  const game = datas.map((data) => <Game key={data.id} data={data} />);

  return ready ? <div>{game}</div> : <p>Loading...</p>;
}

export default App;
// // <BG></BG>
// //<div>{play ? <Game qs={results} /> : <Home />}</div>
