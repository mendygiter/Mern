import logo from './logo.svg';
import './App.css';
import PersonCard from "./components/PersonCard";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h2>Welcome to functional component</h2>
        </div>

          <PersonCard firstName = "Smith, John" age = {48} hairColor = "Black"/>
          <PersonCard firstName = "Doe, Jane" age = {27} hairColor = "Brown"/>
      </header>
    </div>
  );
}

export default App;
