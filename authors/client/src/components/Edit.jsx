import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Edit = props => {
    const [myForm, setMyForm] = useState({
        name: ""
    });

    const navigate = useNavigate();
    const { _id } = useParams();
    useEffect(() => {
        axios.get("http://localhost:8000/api/author/readone/" + _id)
            .then(res => setMyForm(res.data[0]))
            .catch(err => console.log(err))
    }, []);

    const onChangeHandler = e => {
        setMyForm({ ...myForm, [e.target.name]: e.target.value })
    }
    const [error, setError] = useState({})
    const onSubmitHandler = e => {
        e.preventDefault();
        axios.put("http://localhost:8000/api/author/update/" + _id, myForm)
            .then(res => {
                console.log(res.data)
                if (res.data.error) {
                    setError(res.data.error.errors)
                } else {
                    navigate(`/`)
                }
            })
    }

    return (
        <div>
            <h2>Edit Page</h2>
            <div>
                <div>
                    <form onSubmit={onSubmitHandler}>

                        <div>
                            <label htmlFor="name">Author name:</label>
                            <input type="text" name="name" value={myForm.name} onChange={onChangeHandler} />
                            {error.name ? <span className="text-danger">{error.name.message}</span> : ""}
                        </div>

                        <button value="submit"> Submit Edit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}



export default Edit;