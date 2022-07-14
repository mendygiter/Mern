import axios from "axios";
import { useState, useEffect} from "react";


const PokeApi = props => {
    const [pokemon, setPokemon] = useState(null);
    // useEffect(() => {
    //     axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
    //         .then(res => setPokemon(res.data.results))
    // }, [])

    const handlePokemon = () => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
            .then(res => setPokemon(res.data.results))
    }

    return(
        <div>
            <button onClick={handlePokemon}>Fetch Pokemon</button>
            {pokemon ? pokemon.map((results, index) => {
                return(<div key={index}>{results.name}</div> )
            }):null}
        </div>
    );
}

export default PokeApi;