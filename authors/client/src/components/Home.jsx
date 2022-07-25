import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


const Home = props => {
    const [authors, setAuthors] = useState(null);
    const [update, setUpdate] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        axios.get("http://localhost:8000/api/author/readall")
            .then(res => setAuthors(res.data))
            .catch(err => console.log(err))
    }, [update]);
    const deleteItem = (_id) => {
        axios.delete("http://localhost:8000/api/author/delete/" + _id)
            .then(() => setUpdate(!update))
            .catch(err => console.log(err))
    }

    return (
        <div>
            <h4>We have quotes by:</h4>

            {
                authors ? authors.map((item, i) =>  < div key={i}>

                    <h5>{item.name}</h5>

                    <button onClick={() => deleteItem(item._id)}>Delete</button>
                    <Link to={`/author/update/${item._id}`} ><button>Edit Author</button></Link>
                </div>
                ) : ""
            }
        </div>
    );
}

export default Home;

