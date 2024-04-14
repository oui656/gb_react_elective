import "./App.css";
import TemperatureConverter from "./components/temperatureConverter";
import ToDoList from "./components/todo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <TemperatureConverter />
          <ToDoList />
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
