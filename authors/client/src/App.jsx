import './App.css';
import Home from "./components/Home";
import Edit from "./components/Edit";
import Form from "./components/Form"

import {Routes, Route} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <h1>Favorite Authors</h1>
    
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path= "/author/update/:_id" element={<Edit/>}/>
        <Route path= "/author/create" element={<Form/>}/>

      </Routes>
    </div>
  );
}

export default App;
