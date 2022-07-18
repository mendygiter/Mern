import axios from "axios";
import {useState, useEffect} from "react";
import {useParams} from "react-router";

const People = props => {
    const [people, setPeople] = useState (null);
    const {id} = useParams();
        useEffect(() => {
            axios.get("https://swapi.dev/api/people/" + id )
                .then(res => setPeople(res.data))
    }, [id])


   return(
        <div>


            <p>People</p>
            {people ? <p>{people.name}</p> : null}
            {people ? <p>{people.height}</p> : null}
            {people ? <p>{people.hair_color}</p> : null}
            {people ? <p>{people.mass}</p> : null}
            {people ? <p>{people.skin_color}</p> : null}
        </div>
    )
}

export default People;




