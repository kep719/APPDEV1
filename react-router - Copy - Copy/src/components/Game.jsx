import { useLocation } from 'react-router-dom'

const gameImages = {
    'Counter-Strike 2': 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi9hgvCQWvX6GSebosCQ1148nbFX7RpYV-jZkiP_C-icFBvR1FMnql799n4wsMC63YRz8ISKml5p-a1x8gVnEsimmMB5Eg4EClAkS0XfXBBW5AbpA8nuU_dRjvl3CmdgAZk46ybl8koyn_4Mf6rtNH80-R5d0LzgOdpsTFhS_2kzEQzY-26qMID8yuUku0/s800/counter-strike-2-launched-ph.jpg',
    'Escape from Tarkov':'https://www.exitlag.com/blog/wp-content/uploads/2024/09/escape-from-tarkov.webp',
    'Dark and Darker':'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2016590/capsule_616x353.jpg?t=1729242597',
    'Grand Theft Auto: San Andreas':'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1547000/capsule_616x353.jpg?t=1676922466',
    'Undisputed':'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1451190/cf157ba961df3d1a1e0223947be631f11571adf8/capsule_616x353.jpg?t=1731062662',
};

const gameBackgroundImages = {
    'Counter-Strike 2': 'https://www.pcgamesn.com/wp-content/sites/pcgamesn/2023/03/counter-strike-2-maps-dust-2.jpg',
    'Escape from Tarkov':'https://images5.alphacoders.com/132/1322746.jpeg',
    'Dark and Darker':'https://images3.alphacoders.com/133/1333679.jpeg',
    'Grand Theft Auto: San Andreas':'https://images7.alphacoders.com/576/576754.jpg',
    'Undisputed':'https://www.operationsports.com/wp-content/uploads/2022/11/Canelo-ESBC.png?fit=1912%2C873',
};

const gameVideos = {
    'Counter-Strike 2': 'c80dVYcL69E',
    'Escape from Tarkov': '8R5t3a2jT4A',
    'Dark and Darker': 'X8WDwzZKhXE',
    'Grand Theft Auto: San Andreas': 'yOzcbtsw_pQ',
    'Undisputed':'GXuP1shZQ1w'
};

export default function Game(){
    const location = useLocation()
    const game = location.state.game

    const gameImageUrl = gameImages[game.name];
    const gameBackgroundImageUrl = gameBackgroundImages[game.name];
    const videoId = gameVideos[game.name];

    return(
        <>
            <div className="mainMainCon" style={{ backgroundImage: `url(${gameBackgroundImageUrl})` }}>
                    <h1 className='nameH1'>{game.name}</h1>
                    <div className="mainCon">
                        <div className='gameVidCon'>
                        <iframe 
                            width="100%" 
                            height="100%" 
                            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} 
                            title={`${game.name} Gameplay`}
                            frameBorder="0" 
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                        ></iframe>
                        </div>
                        <div className='gamePicDes'>
                            <div className='gamePic' style={{ backgroundImage: `url(${gameImageUrl})` }}></div> <br />
                            <p>{game.description}</p>
                        </div>
                    </div>
                    <div className="reviewsCon">
                        <h1>Reviews</h1> <br /><br />
                        <ul>
                            <li>
                                {game.review1} 
                            </li> <br />
                            <li>
                                {game.review2}
                            </li> <br />
                            <li>
                                {game.review3}
                            </li> <br />
                            <li>
                                {game.review4}
                            </li> <br />
                            <li>
                                {game.review5}
                            </li>
                        </ul>
                    </div>
            </div>
        </>
    )
}