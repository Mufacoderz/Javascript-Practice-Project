//daftar array quotes

const quotes = [
    { text: "Power comes in response to a need, not a desire.", author: "Goku - Dragon Ball" },
    { text: "Fear is not evil. It tells you what your weaknesses are.", author: "Gildarts Clive - Fairy Tail" },
    { text: "Hard work is worthless for those that don’t believe in themselves.", author: "Naruto Uzumaki - Naruto" },
    { text: "It’s not the face that makes someone a monster; it’s the choices they make.", author: "Naruto Uzumaki - Naruto" },
    { text: "A lesson without pain is meaningless.", author: "Edward Elric - Fullmetal Alchemist: Brotherhood" },
    { text: "A person grows up when he has to. When he ceases to whine and starts doing things on his own.", author: "Gintoki Sakata - Gintama" },
    { text: "A lesson learned with blood is never forgotten.", author: "Sabito - Demon Slayer" },
    { text: "Fear is freedom! Control is liberty! Contradiction is truth! That is the reality of this world!", author: "Satsuki Kiryuuin - Kill la Kill" },
    { text: "Forgetting is like a wound. The wound may heal, but it has already left a scar.", author: "Monkey D. Luffy - One Piece" },
    { text: "The world isn’t perfect. But it’s there for us trying the best it can. That’s what makes it so damn beautiful.", author: "Roy Mustang - Fullmetal Alchemist: Brotherhood" }
];

const quoteText = document.getElementById('quote')
const quoteAuthor = document.getElementById('author')
const newQuote = document.getElementById('new-quote')

function generateQuote(){
    const randomIndex = Math.floor(Math.random() * quotes.length)
    const randomQuote = quotes[randomIndex]

    quoteText.textContent = `"${randomQuote.text}"`
    quoteAuthor.textContent = `-${randomQuote.author}`
    
}

newQuote.addEventListener('click', generateQuote)

