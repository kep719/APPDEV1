import { Link } from "react-router-dom"
const games = [
    {id:1, name: 'Teamfight Tactics', description: 
    'The is the number one auto battling game.'},
    {id:2, name: 'Valorant', description: 
    'The is the number one fps game.'},
    {id:2, name: '2XKO', description: 
    'This is the number one fighting game.'},
    {id:4, name: 'League Of Legends', description: 
    'This is the number one MOBA game.'}
]

export default function Games(){
    return(
        <>
            <h1>Games List</h1>
            <ul>
                {games.map((game) => (
                    <li key = {game.id}>
                        <Link to = {`/games/$(game.id)`} state={{game}}> 
                        {/* $ means a javascript function */}
                        <strong>{game.name}</strong>
                        </Link>
                        - {game.description}
                    </li>
                ))}
            </ul>
        </>
    )
}