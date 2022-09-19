import React from 'react';
import './DetailsContainer.css';

function SearchContainer(props) {
    const {
        pokemonDetails,
    } = props;

    if(Object.keys(pokemonDetails).length === 0) {
        return;
    }

    const {
        name,
        sprites,
        abilities,
        held_items,
        stats,
    } = pokemonDetails;

    const pokemonImage = sprites['other']['official-artwork']['front_default'];

    const upperFirstChar = (name) => name.charAt(0).toUpperCase() + name.substr(1);

    const pokemonAbilities = (function() {
        if(abilities.length === 0) {
            return 'No Abilities Details';
        }
        return (
            <ul>
                {
                    abilities.map((ability, idx) => <li aria-label={upperFirstChar(ability.ability.name)} key={idx}>{upperFirstChar(ability.ability.name)}</li>)
                }
            </ul>
        )
    })();

    const pokemonhHeldItems = (function() {
        if(held_items.length === 0) {
            return 'No Held Items Details';
        }
        return (
            <ul>
                {
                    held_items.map((item, idx) => <li aria-label={upperFirstChar(item.item.name)} key={idx}>{upperFirstChar(item.item.name)}</li>)
                }
            </ul>
        );
    })();

    const pokemonhStats = (function() {
        if(stats.length === 0) {
            return 'No Stats Details';
        }
        return (
            <ul>
            {
                stats.map((stat, idx) => <li aria-label={upperFirstChar(stat.stat.name)} key={idx}>{upperFirstChar(stat.stat.name)}</li>)
            }
            </ul>
        );
    })();

    return (
        <div className='details-container'>
            <img tabindex="0" src={pokemonImage} alt={name} />
            <h2 tabindex="0" aria-label={name.toUpperCase()}>{name.toUpperCase()}</h2>
            <table>
                <thead>
                    <tr>
                        <th>Abilities</th>
                        <th>Held Items</th>
                        <th>Stats</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{pokemonAbilities}</td>
                        <td>{pokemonhHeldItems}</td>
                        <td>{pokemonhStats}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default SearchContainer;