const quotes = [
  {
    quote:
      "Your work is discover your world and then with all your heart give yourself to it.",
    author: "Buddha",
  },

  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },

  {
    quote:
      "Success is stumbling from failure to failure with no loss of enthusiasm.",
    author: "Winston S. Churchill",
  },

  {
    quote:
      "The only limit to our realization of tomorrow will be our doubts of today.",
    author: " Franklin D. Roosevelt",
  },

  {
    quote: "Don't be afraid to give up the good to go for the great.",
    author: "John D. Rockefeller",
  },

  {
    quote:
      "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },

  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },

  {
    quote:
      "Success is not final,\
       failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },

  {
    quote:
      "Every time you state what you want or believe, you're the first to hear it.\
       It's a message to both you and others about what you think is possible.\
       Don't put a ceiling on yourself.",
    author: "Oprah Winfrey",
  },

  {
    quote:
      "The only place where success comes before work is in the dictionary.",
    author: "Vidal Sassoon",
  },
];

const quote = document.querySelector("#quote p:first-child");
const author = document.querySelector("#quote p:last-child");

const RANDOM_NUMBER = Math.floor(Math.random() * quotes.length);
const QUOTE_SENTENCE = quotes[RANDOM_NUMBER].quote;
const AUTHOR_SENTENCE = quotes[RANDOM_NUMBER].author;
quote.innerText = `${QUOTE_SENTENCE}`;
author.innerText = `-${AUTHOR_SENTENCE}-`;
