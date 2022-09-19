import { useState } from 'react';
import './App.css';
import SearchContainer from './Components/SearchContainer/SearchContainer';
import DetailsContainer from './Components/DetailsContainer/DetailsContainer';

function App() {
  const [pokemonDetails, setPokemonDetails] = useState({});
  const [error, setError] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        <h1>Pokemon Wiki</h1>
        <h4>Get to know about your favorite character</h4>
      </header>
      <SearchContainer setPokemonDetails={setPokemonDetails} setError={setError} />
      <div styles={{
        display: Object.keys(pokemonDetails).length === 0 ? 'none' : 'block'
      }}>
        <DetailsContainer pokemonDetails={pokemonDetails} />
      </div>
      <div styles={{
        display: error.length === 0 ? 'none' : 'block'
      }}>
        <p>{error}</p>
      </div>
    </div>
  );
}

export default App;
