import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Form = props => {
    const navigate = useNavigate();
    const [myForm, setMyForm] = useState({
        name: ""
    });

    const onChangeHandler = e => {
        setMyForm({...myForm, [e.target.name]: e.target.value})
    }

    const [error, setError] = useState({});
    const [state, setState] = useState({});
    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/author/create", myForm)
            .then(res => {
                console.log(res.data)
                if(res.data.error) {
                    setError(res.data.error.errors)
                } else {
                    navigate(`/`)
                }
            })
    }

    return (
        

        <div>
            <h2>Add Author</h2>

            <form onSubmit={onSubmitHandler}>
                <div>
                <label htmlFor="name">Author name:</label>
                        <input type="text" name="name" value={myForm.name} onChange={onChangeHandler}/>
                        {error.name ? <span className="text-danger">{error.name.message}</span> : ""}
                </div>

                <button value="submit">Submit new author</button>

            </form>

        </div>
    )
}

export default Form;