import {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Form = props => {
    const navigate = useNavigate();
    const [myForm, setMyFrom] = useState({
        name: "",
        price: 0.00,
        description: ""
    });
    const onChangeHandler = e => {
        setMyFrom({...myForm, [e.target.name]: e.target.value})
    }
    const [error, setError] = useState({})
    const [state, setState] = useState({});
    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/product/create", myForm)
            .then(res => {
                if(res.data.error) {
                   setError(res.data.error.errors)
                } else {
                    navigate(`/product/${res.data._id}`)
                }
            })
    }

    return(
        <div>

                <h2>Add Product</h2>

                <form onSubmit={onSubmitHandler}>
                    <div>
                        <label htmlFor="name">Product name:</label>
                        <input type="text" name="name" value={myForm.name} onChange={onChangeHandler}/>
                        {error.name ? <span className="text-danger">{error.name.message}</span> : ""}
                    </div>

                    <div>
                        <label htmlFor="price"> Price:</label>
                        <input type="text" name="price" value={myForm.price} onChange={onChangeHandler}/>
                        {error.price ? <span className="text-danger">{error.price.message}</span> : ""}
                    </div>

                    <div>
                        <label htmlFor="name">Description:</label>
                        <input type="text" name="description" value={myForm.description} onChange={onChangeHandler}/>
                        {error.description ? <span className="text-danger">{error.description.message}</span> : ""}
                    </div>

                    <button value="submit">Submit Product</button>
                </form>
        </div>
    );
}

export default Form;