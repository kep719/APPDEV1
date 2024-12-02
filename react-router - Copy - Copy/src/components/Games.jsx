import { Link } from "react-router-dom"
const games = [
    {id:1, name: 'Counter-Strike 2', 
    description: 
    'A round-based, 5v5 tactical FPS with an Attackers vs. Defenders setup and no respawns, meaning if a player is eliminated they will not respawn until the next round.',
    review1: 'blud - CounterStrike: Where the only thing more reliable than your terrible aim is the endless cheaters spinning around like they’re auditioning for Dancing with the Stars. You’ll learn real fast that the only thing more accurate than your gunshots are the cheaters aimbots, which somehow always seem to have perfect aim. But hey, at least you’ll get to experience the sweet, sweet thrill of a game where everything looks fine until you die in 0.1 seconds to someone who’s clearly not from this dimension. But don’t worry, Valve’s totally on it. I’m sure they’re working hard on that anti cheat system. Any day now. In the meantime, enjoy getting headshot by a guy who’s both floating and twerking through the map. 10/10 would totaly throw my keyboard across the room again.',    
    review2: '!Not Sures - gud very',    
    review3: 'Smiley - I love fighting along side russians against russians and when they scream at me in a language I dont understand. 11/10 "They are always better than you."',    
    review4: 'chaos - nice game',    
    review5: 'Sun - +++++++++++++++++++++++++++++++++++++++++++',    
    },

    {id: 2, 
    name: 'Escape from Tarkov', 
    description: 
    'A hardcore and realistic online first-person action RPG/Simulator with MMO features and a story-driven walkthrough. With each passing day the situation in the Norvinsk region grows more and more complicated.',
    review1: 'PanicPants - Escape from Tarkov: The game where your heart rate doubles every time you hear footsteps and your entire day is ruined by a random sniper shot from across the map. I’ve lost more gear to random encounters than I care to admit. It’s fun, it’s stressful, and it’s probably the best military simulator out there. Just don’t get too attached to your gear—nothing in Tarkov is safe. 9/10, would lose my best loadout again.',
    review2: 'LootLord - Tarkov is like a survival horror game with a side of bullet hell. Every raid feels like it could be your last. The gunplay is great, the sound design is phenomenal, but the learning curve is brutal. If you’re new, get ready to lose everything repeatedly. Just be sure to bring a friend to help you extract, or you’ll end up rage-quitting solo like I did. 8/10, might lose my sanity.',
    review3: 'SilentReaper - Tarkov is relentless. It’s not just about shooting; it’s about survival. Every corner could be your last, and every enemy is just as deadly as you are. The loot is rewarding, but it takes too long to get comfortable. The constant fear of losing everything makes it feel like a true warzone. 7/10, frustrating but addicting.',
    review4: 'RogueRanger - Escape from Tarkov is a masterpiece of tension. You’re not just playing against the AI, but against other players who are just as ruthless. And when you finally get out with a full backpack of loot? It’s pure ecstasy. Until you die and lose it all. 10/10, a love-hate relationship.',
    review5: 'KillerBees - If you’re looking for a casual shooter, Tarkov is *not* for you. But if you enjoy intense gunfights, sneaky flanks, and loot that you’ll risk your life for, then it’s perfect. The constant dread of dying and the thrill of escaping with your loot makes every raid feel like an intense experience. 9/10, just remember to bring a medkit.',
    },

    {id:3, name: 'Dark and Darker', 
    description: 
    'Dark and Darker is a first-person hybrid between a dungeon crawler and a role-playing game with a dark medieval fantasy setting.',
    review1: 'Mursu - A well made, one of its kind hardcore fantasy loot extraction game. Due to the dungeon dwelling nolife manchildren not liking the most recent heavy balance changes(that now are reverted completely due to the crying), the community decided the best option would be to protest by review bombing the game and demanding idiotic things like for the main dev to step down. In light of this, I wanted to clarify that you should not consider the recent negative reviews in any way, as theyre just grown men crying because their game got changed in a way they dont like. I highly recommend trying it for yourself as its free and not pay to win. Or just look at the gameplay first, just dont take the current reviews as face value as theyre heavily manipulated by the community at the moment of this review.',
    review2: 'FaiRiz375 - Fun. Not so much for weak minded buffoons who get mad when a better player stumbles upon them and stomp them. But other than that, very fun.',
    review3: 'Skully - Gem..',
    review4: 'Nomad - Great game, still needs a lot of work .But it can be fun and annoying ...at times',
    review5: 'Red - Dont get this game if youre looking to have fun',
    },

    {id:4, name: 'Grand Theft Auto: San Andreas', 
    description: 
    'An action-adventure game played from a third-person view. In the game, players control criminal Carl "CJ" Johnson and complete missions—linear scenarios with set objectives—to progress through the story.',
    review1: 's0und - It feels like a milion years since I havent played the old version,glad theyve fixed it a bit.I feel like a kid once again,playing this,thank you...Rockstar.',
    review2: 'Nero - I started playing this version of the game last week and had some reluctance to recommend this over the OG version but after the recent update I can confidently do that. It could and should have been far better than the version we got but when compared to the original game its definitely better. P.S - I wish R* to continue working on the game and make it even better.',
    review3: 'SerQ - As we approach the end of 2024, the game still suffers from numerous bugs. This is a classic—Rockstar, arent you ashamed to tarnish it like this? For many people, these games mean much more than you might realize. This feels like an absolute slap in the face. Flying control AWFUL ! Camera Control (with mouse) AWFUL ! Please fix',
    review4: 'double - Last update fixes a lot of things and it also includes the option to turn on the original PS2 lighting. There is also for example a completely new game mechanics in Vice City and III, where you can now shoot and run simultaneously which was not possible in the original games. There is no better time to buy the trilogy than right now (still wait for the sale tho, 60 euros is too much). The trilogy is in the best state that has ever been. I would even say that it is better than the originals.',
    review5: 'KrackBabii - love it',
    },

    {id:5, name: 'Undisputed', 
    description: 
    'A fighting game based on the sport of boxing. The game features over 70 licensed fighters, over 60 individual punches as well as 50 different attributes and traits. The game also features a female roster, as well as licensed trainers, cutmen and managers.',
    review1: 'HENRIII - Bugs all the way but the number 1 i really hate is when there is a swelling warning at the same time a knockdown when it happens at the same time the match will never enddddddddd.',
    review2: 'apknio - These past 2 updates just showed us how incompetent the team is behind this game. How do you make the game worse every update',
    review3: 'Not-S1mple - Where is all the Fighters Fight Night Champions Has you should have Mike Tyson and Floyd Mayweather everyone in game there should be a work around it and Money should be no issue',
    review4: 'lucadelforte - The online multiplayer is trash but career mode is fun.',
    review5: 'Big(.)(.)Lover - clunky but fun.',
    }
]

export default function Games(){
    return(
        <>
            <center><h1 className="GL">Games List</h1></center>
            <ul className="gamesListUl">
                {games.map((game) => (
                    <li className="gamesListLi" key = {game.id}>
                        <Link to = {`/games/$(game.id)`} state={{game}} className="gameLink"> 
                        {/* $ means a javascript function */}
                        <strong>{game.name}</strong>
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}