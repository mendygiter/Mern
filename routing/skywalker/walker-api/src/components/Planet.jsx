import axios from "axios";
import {useState, useEffect} from "react";
import {useParams} from "react-router";


const Planet = props => {
    const [planet, setPlanet] = useState(null);
    const {id} = useParams();
        useEffect(() => {
            axios.get("https://swapi.dev/api/planets/" + id)
                .then(res => setPlanet(res.data))
        }, [id])
    const {name} = useParams();

    return (
        <div>

            <p>Planet</p>
            {planet ? <p>{planet.name}</p> : null}
            {planet ? <p>{planet.terrain}</p> : null}
            {planet ? <p>{planet.surface_water}</p> : null}
            {planet ? <p>{planet.population}</p> : null}
        </div>
    )
}

export default Planet;