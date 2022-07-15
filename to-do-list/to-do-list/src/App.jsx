import logo from './logo.svg';
import './App.css';
import Form from "./components/Form";
import Results from "./components/Results";
import {useState} from "react";

function App() {
    const [tasks, setTasks] = useState([]);
    const addTask = task => {
        setTasks([...tasks, task]);
    }
    const HandleCheck = index => {
        tasks[index].IsCompleted = !tasks[index].IsCompleted
        setTasks([...tasks]);
    }
    const DeleteTask = index => {
        setTasks([...tasks.slice(0,index),...tasks.slice(index+1)])
    }
  return (
    <div className="App">
        <Form newTask={addTask}/>
        <Results myTasks = {tasks} HandleCheck = {HandleCheck} DeleteTask = {DeleteTask}/>
    </div>
  );
}

export default App;
