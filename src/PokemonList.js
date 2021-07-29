import React from 'react'

const PokemonList = ({ pokemon }) => {

    return (
        <div className="text-center">
            {pokemon.map(p => (
                <div key={p}>{p}</div>
            ))}
        </div>
    )
}

export default PokemonList
