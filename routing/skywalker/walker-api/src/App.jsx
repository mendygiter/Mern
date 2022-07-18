import './App.css';
import {Routes, Route, Link} from "react-router-dom"
import People from "./components/People"
import { useNavigate } from "react-router-dom";
import {useState, useEffect} from "react";
import Planet from "./components/Planet"

function App() {
  const [category, setCategory] = useState ("")
  const [id, setId] = useState("")
  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();
    console.log(category)
    if (category === "People" ) {
      navigate("/people/" + id)
    }
    else {
      navigate("/planets/" + id)
    }
  }

  return (

    <div className="App">
      <h1>Home page</h1>

        <form onSubmit={submitForm}>
          <label >Search for:</label>
          <select onChange={ (e) => setCategory(e.target.value) }>
            <option disabled selected>Select option</option>
            <option value="People">People</option>
            <option value="Planets">Planets</option>
          </select>

          <input type="text" name="id" onChange={ (e) => setId(e.target.value) }/>

          <input type="submit" value="Submit"/>

        </form>


        <Routes>
          <Route path="/people/:id" element={<People />} />
          <Route path="/planets/:id" element={<Planet />} />
        </Routes>
    </div>

  );
}

export default App;

