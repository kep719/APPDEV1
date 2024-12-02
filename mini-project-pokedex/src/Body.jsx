// import pokeball from './pokeball.png';
// import React, { useEffect, useState } from 'react';

// export default function Body() {
//     const [pokemonList, setPokemonList] = useState([]);
//     const [error, setError] = useState('');
//     const [inputValue, setInputValue] = useState('');
//     const [singlePokemon, setSinglePokemon] = useState(null);
//     const [filteredPokemons, setFilteredPokemons] = useState([]);
//     const [offset, setOffset] = useState(0);
//     const [loading, setLoading] = useState(false);
//     const limit = 40; // Limit to fetch at a time

//     const fetchPokemons = async () => {
//         if (loading) return; // Prevent multiple requests
//         setLoading(true);
//         try {
//             const response = await fetch(https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset});
//             if (!response.ok) {
//                 throw new Error("Could not fetch Pokémon data");
//             }
//             const data = await response.json();
//             const pokemonPromises = data.results.map(async (pokemon) => {
//                 const res = await fetch(pokemon.url);
//                 return res.json();
//             });

//             const pokemons = await Promise.all(pokemonPromises);
//             const formattedPokemonList = pokemons.map(pokemon => ({
//                 name: pokemon.name,
//                 sprite: pokemon.sprites.other.showdown.front_default,
//                 types: pokemon.types.map(t => t.type.name),
//                 abilities: pokemon.abilities.map(a => a.ability.name).join(', '),
//                 stat: pokemon.stats.map(s => s.stat.name).join(', '),
//             }));

//             formattedPokemonList.sort((a, b) => {
//                 return a.types.join(', ').localeCompare(b.types.join(', '));
//                 });

//             // Update state with new Pokémon, avoiding duplicates
//             setPokemonList(prev => {
//                 const existingNames = new Set(prev.map(p => p.name));
//                 const newPokemons = formattedPokemonList.filter(p => !existingNames.has(p.name));
//                 return [...prev, ...newPokemons];
//             });
//             setFilteredPokemons(prev => {
//                 const existingNames = new Set(prev.map(p => p.name));
//                 const newPokemons = formattedPokemonList.filter(p => !existingNames.has(p.name));
//                 return [...prev, ...newPokemons];
//             });

//             setOffset(prev => prev + limit); // Update offset for next fetch
//         } catch (error) {
//             console.error(error);
//             setError('Failed to fetch Pokémon data.');
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         fetchPokemons(); // Initial fetch
//     }, []);

//     const handleInputChange = (e) => {
//         const value = e.target.value;
//         setInputValue(value);
//         if (value) {
//             const filtered = pokemonList.filter(pokemon =>
//                 pokemon.name.toUpperCase().includes(value.toUpperCase())
//             );
//             setFilteredPokemons(filtered);
//         } else {
//             setFilteredPokemons(pokemonList); // Reset to full list when input is empty
//         }
//     };

//     const goHome = () => {
//         setSinglePokemon(null);
//         setInputValue('');
//         setFilteredPokemons(pokemonList); // Reset filteredPokemons to original list
//     };

//     const handlePokemonClick = (pokemon) => {
//         setSinglePokemon(pokemon);
//     };

//     return (
//         <>
//             <center>
//                 <div className='input-btn'>
//                     <input className="search-bar"
//                         type="text" 
//                         placeholder="Search Pokémon" 
//                         value={inputValue}
//                         onChange={handleInputChange}
//                     />
//                     <button onClick={goHome}>HOME</button>
//                 </div>
//             </center>
//             <br /> <br />
//             <div className='poke-container'>
//                 {error && <p>{error}</p>}
//                 {singlePokemon ? (
//                     <div className="pokemon-detail">
//                         {singlePokemon.sprite && <img src={singlePokemon.sprite} alt={singlePokemon.name} className='pokemonImg' />}
//                         <div className="pokemon-info1">
//                             <p>{singlePokemon.name}</p>
//                             <p>
//                                 {singlePokemon.types.map(type => (
//                                 <span key={type} className={type-${type}}>{type}</span>
//                                 ))}
//                             </p>
//                             <pre>
//                                {singlePokemon.abilities}
//                             </pre>
//                             <br />
//                             <p>
//                                 {singlePokemon.stat}
//                             </p>
//                         </div>
//                     </div>
//                 ) : (
//                     <div className="pokemon-container">
//                         {filteredPokemons.map((pokemon, index) => (
//                             <div key={index} className="pokemon" onClick={() => handlePokemonClick(pokemon)}>
//                                 <img className="Pokeball" src={pokeball} alt="" />
//                                 {pokemon.sprite && <img src={pokemon.sprite} alt={pokemon.name} className='pokemonImg' />}
//                                 <div className="pokemon-info2">
//                                     <p className="poke-name">{pokemon.name}</p>
//                                     <p>
//                                         {pokemon.types.map(type => (
//                                             <span key={type} className={type-${type}}>{type}</span>
//                                         ))}
//                                     </p>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 )}
//             </div>
//             <div className="load-more">
//                 <center>
//                 <button onClick={fetchPokemons} disabled={loading}>
//                     {loading ? "Loading..." : "Load More"}
//                 </button>
//                 </center>
//             </div>
//         </>
//     );
// }


import pokeball from './pokeball.png';
import pokedexIcon from './pokedexIcon.png';
import pokedexIcon1 from './pokedexIcon1.png';
import React, { useEffect, useState } from 'react';

export default function Body() {
    const [pokemonList, setPokemonList] = useState([]);
    const [error, setError] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [singlePokemon, setSinglePokemon] = useState(null);
    const [filteredPokemons, setFilteredPokemons] = useState([]);
    const [offset, setOffset] = useState(0);
    const [loading, setLoading] = useState(false);
    const limit = 40; // Limit to fetch at a time

    const fetchPokemons = async () => {
        if (loading) return; // Prevent multiple requests
        setLoading(true);
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
            if (!response.ok) {
                throw new Error("Could not fetch Pokémon data");
            }
            const data = await response.json();
            const pokemonPromises = data.results.map(async (pokemon) => {
                const res = await fetch(pokemon.url);
                return res.json();
            });

            const pokemons = await Promise.all(pokemonPromises);
            // const formattedPokemonList = pokemons.map(pokemon => ({
            //     name: pokemon.name,
            //     sprite: pokemon.sprites.other.showdown.front_default,
            //     types: pokemon.types.map(t => t.type.name),
            //     abilities: pokemon.abilities.map(a => a.ability.name).join(', '),
            //     stat: pokemon.stats.map(s => s.stat.name).join(', '),
            // }));
            const formattedPokemonList = pokemons.map(pokemon => {
                const stats = pokemon.stats.reduce((acc, stat) => {
                    acc[stat.stat.name] = stat.base_stat;
                    return acc;
                }, {});
            
                return {
                    name: pokemon.name,
                    sprite: pokemon.sprites.other.showdown.front_default,
                    types: pokemon.types.map(t => t.type.name),
                    abilities: pokemon.abilities.map(a => a.ability.name).join(', '),
                    stats, // Store stats as an object
                };
            });


            // Update state with new Pokémon, avoiding duplicates
            setPokemonList(prev => {
                const existingNames = new Set(prev.map(p => p.name));
                const newPokemons = formattedPokemonList.filter(p => !existingNames.has(p.name));
                return [...prev, ...newPokemons];
            });
            setFilteredPokemons(prev => {
                const existingNames = new Set(prev.map(p => p.name));
                const newPokemons = formattedPokemonList.filter(p => !existingNames.has(p.name));
                return [...prev, ...newPokemons];
            });

            setOffset(prev => prev + limit); // Update offset for next fetch
        } catch (error) {
            console.error(error);
            setError('Failed to fetch Pokémon data.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPokemons(); // Initial fetch
    }, []);

    const handleInputChange = (e) => {
        const value = e.target.value;
        setInputValue(value);
        if (value) {
            const filtered = pokemonList.filter(pokemon =>
                pokemon.name.toUpperCase().includes(value.toUpperCase())
            );
            setFilteredPokemons(filtered);
        } else {
            setFilteredPokemons(pokemonList); // Reset to full list when input is empty
        }
    };

    const goHome = () => {
        setSinglePokemon(null);
        setInputValue('');
        setFilteredPokemons(pokemonList); // Reset filteredPokemons to original list
    };

    const rickRolled = () => {
        window.open("https://www.youtube.com/shorts/SXHMnicI6Pg");
    };

    const shampoo = () => {
        window.open("https://www.youtube.com/watch?v=w0QNrO7JVMc");
    };

    const water = () => {
        window.open("https://www.facebook.com/share/r/dtUDBTB9Wun7cssB/");
    };

    const ufc = () => {
        window.open("https://www.facebook.com/share/r/r45QBGx9dmWxGVmd/");
    };

    const golden = () => {
        window.open("https://www.youtube.com/watch?v=ACFj5YiT0Qs&ab_channel=OtaSaitama");
    };

    const teacher = () => {
        window.open("https://www.facebook.com/share/r/Gd8hkjA1cgXnqwXX/");
    };

    const handlePokemonClick = (pokemon) => {
        setSinglePokemon(pokemon);
    };

    return (
        <>
            <img className="pokedexIcon" src={pokedexIcon} alt="" />
            <img className="pokedexIcon1" src={pokedexIcon1} alt="" />
            <center>
                <div className='input-btn'>
                    <input className="search-bar"
                        type="text" 
                        placeholder="Search Pokémon" 
                        value={inputValue}
                        onChange={handleInputChange}
                    />
                    <button onClick={goHome}>HOME</button>
                    <button onClick={rickRolled}>DONT CLICK</button>
                    <button onClick={shampoo}>DONT CLICK2</button>
                    <button onClick={water}>DONT CLICK3</button>
                    <button onClick={ufc}>DONT CLICK4</button>
                    <button onClick={golden}>DONT CLICK5</button>
                    <button onClick={teacher}>DONT CLICK6</button>
                </div>
            </center>
            <br /> <br />
            <div className='poke-container'>
                {error && <p>{error}</p>}
                {singlePokemon ? (
                    <div className="pokemon-detail">
                        {singlePokemon.sprite && <img src={singlePokemon.sprite} alt={singlePokemon.name} className='pokemonImg' />}
                        <div className="pokemon-info1">
                            <p>{singlePokemon.name}</p>
                            <p>
                                {singlePokemon.types.map(type => (
                                    <span key={type} className={`type type-${type}`}>{type}</span>
                                ))}
                            </p>
                            <p>
                                Abilitites:&nbsp;
                                {singlePokemon.abilities}
                            </p>
                            <div className="stats">
                                <p>Stats:</p>
                                <ul>
                                    {Object.entries(singlePokemon.stats).map(([statName, statValue]) => (
                                        <li key={statName}>{`${statName}: ${statValue}`}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="pokemon-container">
                        {filteredPokemons.map((pokemon, index) => (
                            // <div key={index} className="pokemon" onClick={() => handlePokemonClick(pokemon)}>
                            //     <img className="Pokeball" src={pokeball} alt="" />
                            //     {pokemon.sprite && <img src={pokemon.sprite} alt={pokemon.name} className='pokemonImg' />}
                            //     <div className="pokemon-info2">
                            //         <p className="poke-name">{pokemon.name}</p>
                            //         <p>
                            //             {pokemon.types.map(type => (
                            //                 <span key={type} className={`type-${type}`}>{type}</span>
                            //             ))}
                            //         </p>
                            //     </div>
                            // </div>
                            <div 
                                key={index} 
                                className={`pokemon pokemon-${pokemon.types[0]}`} 
                                onClick={() => handlePokemonClick(pokemon)}
                                >
                                <img className="Pokeball" src={pokeball} alt="" />
                                {pokemon.sprite && <img src={pokemon.sprite} alt={pokemon.name} className='pokemonImg' />}
                                <div className="pokemon-info2">
                                    <p className="poke-name">{pokemon.name}</p>
                                    <p>
                                    {pokemon.types.map(type => (
                                        <span key={type} className={`type-${type}`}>{type}</span>
                                    ))}
                                    </p>
                                </div>
                                </div>
                        ))}
                    </div>
                )}
            </div>
            <div className="load-more">
                <center>
                <button onClick={fetchPokemons} disabled={loading}>
                    {loading ? "Loading..." : "Load More"}
                </button>
                </center>
            </div>
        </>
    );
}


