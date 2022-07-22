import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const Home = props => {
    const [products, setProducts] = useState(null);
    useEffect(() => {
        axios.get("http://localhost:8000/api/product")
            .then(res => setProducts(res.data))
            .catch(err => console.log(err))
    }, [])
    return(
        <div>
            <h2>All Products</h2>
            {
                products ? products.map((item, i) => <Link to={`/product/${item._id}`} key = {i}> <div >
                    <h3>{item.name}</h3>
                    <h4>{item.price}</h4>
                    <h4>{item.description}</h4>
                </div>
                    </Link>
                ) : ""
            }
        </div>

    );
}
export default Home;