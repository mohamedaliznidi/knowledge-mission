import React, { useState } from "react";
import Home from "../Home/Home";
import PlaySettings from "../PlaySettings/PlaySettings";

export default function Quiz() {
  const [settings, setSettings] = useState({
    amount: 0,
    category: 0,
    difficulty: "",
  });

  const Play = (details) => {
    setSettings({
      amount: details.amount,
      category: details.category,
      difficulty: details.difficulty,
    });
  };

  const Stop = () => {
    setSettings({
      amount: 0,
      category: 0,
      difficulty: "",
    });
  };

  return (
    <div>
      <div>
        {settings.amount !== 0 ? (
          <Home
            amount={settings.amount}
            category={settings.category}
            difficulty={settings.difficulty}
            Stop={Stop}
          />
        ) : (
          <PlaySettings Play={Play} />
        )}
      </div>
    </div>
  );
}
