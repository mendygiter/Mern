import {useState} from "react";

const Form = props => {
    const [Task, setTask] = useState("");
    // const [IsCompleted, setIsCompleted] = useState(true);
    const onSubmitHandler = e => {
        e.preventDefault();
        console.log(Task)
        const tasks = {
            Task: Task,
            IsCompleted: false};
        props.newTask(tasks);
    }

    return(
        <div>
            <h1>Form</h1>
            <form onSubmit={onSubmitHandler}>
                <div>
                    <label htmlFor="Task"></label>
                    <input type="text" name="Task" onChange={(e) => setTask(e.target.value)}/>
                    <input type="submit" value="Add"/>
                </div>
            </form>
        </div>
    )
}

export default Form;
