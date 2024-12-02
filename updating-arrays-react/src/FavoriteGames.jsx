// import React, {useSate} from "react";
// export default function FavoriteGames(){
//     //array or stateful array

//     const [games, setGames] = useSate(["Doomsday Hunters", "Hades", "Scourge Bringer"])

//     function handleAddGame(){
//         //referencing the text box
//         const newGame = document.getElementById("gameInput").value;
//         //adding newGame(new object to be inserted) into the list g(previous list)
//         setGames(g => [...g, newGame])
//         document.getElementById("gameInput").value = "";
//     }

//     function handleRemoveGame(index){
//         const newGame = games.filter((game,i) => i !== index)
//         setGames(newGame)
//     }

//     return(
//         <>
//             <div>
//                 <ul>
//                     {
//                     games.map((game, index) => 
//                     <li key={index} onClick={() => handleRemoveGame(index)}>{game}</li>)
//                     }
//                 </ul>
//                 <input type="text" name="gameInput" id="gameInput"/>
//                 <button type="button" onClick={handleAddGame}>Add Game</button>
//             </div>
//         </>
//     )
// }

import React, {useState} from "react";
export default function FavoriteGames(){
    // array or stateful array
    const [games, setGames] = useState(["Doomsday Hunters", "Hades", "ScourgeBringer"])

    function handleAddGame(){
        const newGame = document.getElementById("gameInput").value;
        setGames(g => [...g, newGame])

        document.getElementById("gameInput").value = "";
    }

    function handleRemoveGame(index){
        const newGame = games.filter((game,i) => i !== index);
        setGames(newGame)
    }

    return(
        <>
        <div>
            <ul>
                {
                    games.map((game, index) => <li key={index} onClick={() => handleRemoveGame(index)}>{game}</li>)
                }
            </ul>
            <input type="text" name="gameInput" id="gameInput"/>
            <button type="button" onClick={handleAddGame}>Add Game</button>
        </div>
        </>
    )
}
