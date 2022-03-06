import React, { useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import Http from "../../lib/request";
import "./Detail.css"

const DetailPokemon = () =>{
    const { name } = useParams();
    const [pokemon, setPokemon] = useState({})
    const [height, setHeight] = useState({})
    const [weight, setWeight] = useState({})

    useEffect(()=>{
        const fetchPokemon = async ( ) =>{
            const pokemon = await Http.instance.get_pokemon(name);
            setPokemon(pokemon)
            setHeight(pokemon.height)
            setWeight(pokemon.weight)
        }
        fetchPokemon();
    },[name])

    return (
        <React.Fragment>
            <h1>{pokemon.name}</h1>
            <img src={pokemon.sprites["front_default"]} alt={pokemon.name}/>
            <h2>Height: {height}</h2>
            <h2>Weight: {weight}</h2>
            <h2>Types: {pokemon.types[0].type.name}</h2>
        </React.Fragment>
    );
};

export default DetailPokemon;