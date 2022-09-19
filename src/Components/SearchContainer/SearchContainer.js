import React, { useState } from 'react';
import './SearchContainer.css';

function SearchContainer(props) {
    const { setPokemonDetails, setError } = props;
    const [characterName, setCharacterName] = useState('');

    async function fetchPokemonDetails() {
        try {
            const pokemonApiResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${characterName}`);
            if(pokemonApiResponse.status === 200) {
                const pokemonDetails = await pokemonApiResponse.json();
                setError('');
                setPokemonDetails(pokemonDetails);
            } else {
                setPokemonDetails({});
                setError(pokemonApiResponse.statusText);   
            }
        } catch(err) {
            setPokemonDetails({});
            setError('Some error occurred!!! Please try again.');
        }
    }

    return (
        <div className='search-container' onChange={(e) => setCharacterName(e.target.value)}>
            <input type="text" placeholder='Enter character name' aria-placeholder='Enter character name' />
            <button aria-label='Search' onClick={fetchPokemonDetails}>Search</button>
        </div>
    )
}

export default SearchContainer;