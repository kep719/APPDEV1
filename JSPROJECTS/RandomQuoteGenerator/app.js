const quotes = ["If you spend too much time thinking about a thing, you’ll never get it done. Bruce Lee", 
               "Believe you can and you’re halfway there. Theodore Roosevelt", 
               "Life can only be understood backwards; but it must be lived forwards. Søren Kierkegaard",
               "Life is like a box of chocolates. You never know what you’re going to get. Forrest Gump",
               "The quality of your life is directly related to how much uncertainty you can comfortably handle. Tony Robbins",
               "A happy life consists in the tranquility of mind. Marcus Tullius Cicero",
               "The realization that life is absurd cannot be an end, but only a beginning. Albert Camus"]
const btn = document.getElementById("btn")
const quote = document.querySelector(".quote")

btn.addEventListener("click", () => {
    
    console.log(document.body)
    quote.textContent = quotes[getRandomNumber()]


})

getRandomNumber = () => {
    return Math.floor(Math.random() * quotes.length)
}