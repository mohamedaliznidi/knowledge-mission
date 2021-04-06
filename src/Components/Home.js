import React, { useState, useEffect } from "react";
import axios from "axios";
import Game from "./Game";
import { Questions } from "../Api/index";

function Home({amount ,category ,difficulty }) {
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

  

  return ready ? <div><Game key={datas.id} data={datas}/></div> : <p>Loading...</p>;
}

export default Home;
