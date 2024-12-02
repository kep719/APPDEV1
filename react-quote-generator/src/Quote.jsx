import React, {useState} from "react"
export default function Quote() {

    let [currentQuote, setQuote] = useState(0)

    const quotes = [
        "If you spend too much time thinking about a thing, you’ll never get it done. Bruce Lee", 
        "Believe you can and you’re halfway there. Theodore Roosevelt", 
        "Life can only be understood backwards; but it must be lived forwards. Søren Kierkegaard",
        "Life is like a box of chocolates. You never know what you’re going to get. Forrest Gump",
        "The quality of your life is directly related to how much uncertainty you can comfortably handle. Tony Robbins",
        "A happy life consists in the tranquility of mind. Marcus Tullius Cicero",
        "The realization that life is absurd cannot be an end, but only a beginning. Albert Camus"
    ]

    const next = () => {
        if(currentQuote >= -1 && currentQuote < (quotes.length-1)){
            setQuote((currentQuote + 1) % quotes.length)
        }
    }


    const random = () => {
        let current = (Math.floor(Math.random() * quotes.length))
        let prev = -1

        if(current != prev){
            setQuote(current)
            prev = current
        }else if(current == prev){
            setQuote(current-1)
            prev = current
        }
    }

    const previous = () => {
        if(currentQuote >= 0 && currentQuote <= (quotes.length-1)){
            setQuote((currentQuote - 1) % quotes.length)
        }
    }

    return( 
        <>
            <div className="container">
                <p className="counter-container">
                    Quote <br />
                    {quotes[currentQuote]}
                </p>
                &nbsp;
                <button className="button-container-decrement" onClick={previous}>
                previous
                </button>
                <button className="button-container-reset" onClick={random}>
                random
                </button>
                <button className="button-container-increment" onClick={next}>
                next
                </button>
            </div>
        </>
    )
}