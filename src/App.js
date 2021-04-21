import logo from "./assets/ru.svg";
import List from "./components/artistList";
import Search from "./components/search";

import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header" style={{ height: "10rem" }}>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div style={{ display: "flex", align: "center" }}>
        <Search />
        <List />
      </div>
    </div>
  );
}

export default App;
