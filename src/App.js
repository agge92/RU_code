import logo from "./assets/ru.svg";
import artistList from "./assets/components/artistList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header" style={{ height: "10rem" }}>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div style={{ display: "flex" }}>
        <input />
      </div>
    </div>
  );
}

export default App;
