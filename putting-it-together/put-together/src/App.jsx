import logo from './logo.svg';
import './App.css';

import First from "./componnents/First";

function App() {
  return (
    <div className="App">
        <First firsName = "Doe, Jane" age = {27} hairColor = "Brown"></First>

        <First firsName = "Smith, John" age = {48} hairColor = "Black"></First>


    </div>
  );
}

export default App;
