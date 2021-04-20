import logo from "./assets/ru.svg";
import List from "./assets/components/artistList";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header" style={{ height: "10rem" }}>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div style={{ display: "flex" }}>
        <input />
        <List />
      </div>
    </div>
  );
}

export default App;
