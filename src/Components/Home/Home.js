import React, { useState, useEffect } from "react";
import axios from "axios";
import Game from "../Game/Game";
import { Questions } from "../../Api/index";

function Home({ amount, category, difficulty,Stop }) {
  const [ready, setReady] = useState(false);
  const [datas, setDatas] = useState();
  const url = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`;

  useEffect(() => {
    async function fetch() {
      const response = await axios.get(url);
      setDatas(Questions(response.data.results));
      setReady(true);
    }
    fetch();
  }, []);

  return ready ? (
    <div>
      <Game key={datas.id} data={datas} Stop={Stop} />
    </div>
  ) : (
    <p>Loading...</p>
  );
}

export default Home;
