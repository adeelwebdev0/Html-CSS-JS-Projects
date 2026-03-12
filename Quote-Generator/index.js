const paragrph = document.querySelector("#paragraph");
const author = document.querySelector("#Author");
const generator = document.querySelector("#generator");
const quotes = [
  {
    text: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde",
  },
  {
    text: "In the middle of difficulty lies opportunity.",
    author: "Albert Einstein",
  },
  {
    text: "Success is not final, failure is not fatal.",
    author: "Winston Churchill",
  },
  {
    text: "Do what you can, with what you have, where you are.",
    author: "Theodore Roosevelt",
  },
  {
    text: "The best way to predict the future is to create it.",
    author: "Peter Drucker",
  },
  {
    text: "Stay hungry, stay foolish.",
    author: "Steve Jobs",
  },
  {
    text: "Simplicity is the ultimate sophistication.",
    author: "Leonardo da Vinci",
  },
  {
    text: "It always seems impossible until it's done.",
    author: "Nelson Mandela",
  },
  {
    text: "Life is really simple, but we insist on making it complicated.",
    author: "Confucius",
  },
  {
    text: "Happiness depends upon ourselves.",
    author: "Aristotle",
  },
];

generator.addEventListener("click", () => {
  const randomQuote = Math.floor(Math.random() * quotes.length);
  paragrph.innerHTML = quotes[randomQuote].text;
  author.innerHTML = quotes[randomQuote].author;
});
