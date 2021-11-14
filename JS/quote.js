const quotes = [
    {
        quote : "Life is either a daring adventure or nothing.",
        author : "Helen Keller"
    },
    {
        quote : "No great man ever complains of want of opportunity.",
        author : "Ralph Waldo Emerson"
    },
    {
        quote : "You always pass failure on the way to success.",
        author : "Mickey Rooney"
    },
    {
        quote : "Surround yourself with only people who are going to lift you higher.",
        author : "Oprah Winfrey"
    },
    {
        quote : "Everything in your world is created by what you think.",
        author : "Oprah Winfrey"
    },
    {
        quote : "To win without risk is to triumph without glory.",
        author : "Pierre Corneille"
    },
    {
        quote : "Self-respect is the cornerstone of all virtue.",
        author : "John Herschel"
    },
    {
        quote : "I'm as proud of what we don't do as I am of what we do.",
        author : "Steve Jobs"
    },
    {
        quote : "Hate the sin, love the sinner.",
        author : "Mahatma Gandhi"
    },
    {
        quote : "Life is a tragedy when seen in close-up, but a comedy in long-shot.",
        author : "Charlie Chaplin"
    }  
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const newQuote = quotes[Math.floor(Math.random()*quotes.length)];
quote.innerText = newQuote.quote;
author.innerText = newQuote.author;
