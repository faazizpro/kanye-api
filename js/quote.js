const loadQuote = () => {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayQuote(data));
}

function displayQuote(quotes){
    const blockQuote = document.getElementById('quote');
    blockQuote.innerText = quotes.quote;
    console.log(quotes.quote);
} 