const quote_url = "https://favqs.com/api/qotd";

async function fetchQuote(url) {
  let response = await fetch(url);
  let data = await response.json();
  return data;
}
var quoteElement = document.getElementById("quote-body");
var authorElement = document.getElementById("author");
var quoteContainerElement = document.getElementById("quote-container");

function updateQuote() {
  fetchQuote(quote_url).then(function (data) {
    quoteElement.innerText = data.quote.body;
    authorElement.innerText = data.quote.author;
  });
}

updateQuote();
document.getElementById("button-next").onclick = function (e) {
  updateQuote();
};
