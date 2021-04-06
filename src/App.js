import React, { useState } from "react";
import Home from "./Components/Home";
import PlaySettings from "./Components/PlaySettings";

export default function App() {
  const [settings, setSettings] = useState({
    amount: 0,
    category: 0,
    difficulty: "",
  });

  const Play = (details) => {
    console.log(details);
    setSettings({
      amount: details.amount,
      category: details.category,
      difficulty: details.difficulty,
    });
  };

  const Stop = () => {
    console.log("Stop");
  };
  return (
    <div>
      {settings.amount !== 0 ? (
        <Home
          amount={settings.amount}
          category={settings.category}
          difficulty={settings.difficulty}
        />
      ) : (
        <PlaySettings Play={Play} />
      )}
    </div>
  );
}
