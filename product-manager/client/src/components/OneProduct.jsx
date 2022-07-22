import {useParams, useNavigate, Link} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";



const OneProduct = props => {
    const navigate = useNavigate();
    const {_id} = useParams();
    const [Product, setProduct] = useState(null);
    useEffect(() => {
        axios.get("http://localhost:8000/api/product/" + _id)
            .then(res => setProduct(res.data[0]))
            .catch(err => console.log(err))
    }, [])
    const deleteItem = () => {
        axios.delete("http://localhost:8000/api/product/" + _id)
            .then(() => navigate("/") )
            .catch(err => console.log(err))

    }
    return (
        <div>
        {
            Product ? <div>
                <div>

                    <h3>{Product.name}</h3>
                    <h4>{Product.price}</h4>
                    <h4>{Product.description}</h4>
                </div>

            </div> : ""
        }

        <div>
            <button onClick={deleteItem}>Delete</button>
            <Link to = {`/product/edit/${_id}`}><button >Edit</button></Link>
        </div>
        </div>
    );

}


export default OneProduct;