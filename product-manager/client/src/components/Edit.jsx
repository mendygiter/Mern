import {useParams, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

const Edit = props => {
    const [myForm, setMyFrom] = useState({
        name: "",
        price: 0.00,
        description: ""
    });

    const navigate = useNavigate();
    const {_id} = useParams();
    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + _id)
            .then(res => setMyFrom(res.data[0]))
            .catch(err => console.log(err))
    }, []);

        const onChangeHandler = e => {
            setMyFrom({...myForm, [e.target.name]: e.target.value})
        }
        const [error, setError] = useState({})
        const onSubmitHandler = e => {
            e.preventDefault();
            axios.put("http://localhost:8000/api/product/update/" + _id, myForm)
                .then(res => {
                    if (res.data.error) {
                        setError(res.data.error.errors)
                    } else {
                        navigate(`/product/${_id}`)
                    }
                })
        }
        return (
            <div>
                <h2>Edit Page</h2>
                <div>


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
                            <input type="text" name="description" value={myForm.description}
                                   onChange={onChangeHandler}/>
                            {error.description ? <span className="text-danger">{error.description.message}</span> : ""}
                        </div>

                        <button value="submit">Submit Product</button>
                    </form>
                </div>
            </div>
        );
    }
export default Edit;