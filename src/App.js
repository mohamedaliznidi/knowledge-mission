import React from "react";
import Game from "./Components/Game";
import { fetchData } from "./Api";
// function App() {
//   const quest = fetchData(3, 26, "medium");
//   console.log(quest);
//   return <div></div>;
// }
class App extends React.Component {
  state = {
    data: {},
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
    
  }
  render() {
    const {data} = this.state
    return (
      <div>
        <Game data= {data}/>
      </div>
    );
  }
}

export default App;
// // <BG></BG>
// //<div>{play ? <Game qs={results} /> : <Home />}</div>
