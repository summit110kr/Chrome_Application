const quotes = [
    {
        quote: "1",
        author: "one",
    },
    {
        quote: "2",
        author: "two",
    },
    {
        quote: "3",
        author: "three",
    },
    {
        quote: "4",
        author: "four",
    },
    {
        quote: "5",
        author: "five",
    },
    {
        quote: "6",
        author: "six",
    },
    {
        quote: "7",
        author: "seven",
    },
    {
        quote: "8",
        author: "eight",
    },
    {
        quote: "9",
        author: "nine",
    },
    {
        quote: "10",
        author: "ten",
    }
]

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;