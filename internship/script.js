// Sample stock data (this would typically be fetched from an API)
const stockData = [
    { name: 'AAPL', price: 145.30 },
    { name: 'GOOGL', price: 2729.89 },
    { name: 'AMZN', price: 3401.46 },
    { name: 'MSFT', price: 289.67 },
    { name: 'TSLA', price: 688.99 },
    { name: 'FB', price: 375.21 },
    { name: 'NFLX', price: 586.75 },
    { name: 'NVDA', price: 755.51 }
];

// State for the watchlist
let watchlist = [];

// DOM elements
const stockListElement = document.querySelector('.stock-list');
const watchlistElement = document.getElementById('watchlist');

// Function to render stock cards
function renderStockCards() {
    stockListElement.innerHTML = '';
    stockData.forEach(stock => {
        const stockCard = document.createElement('div');
        stockCard.classList.add('stock-card');
        stockCard.innerHTML = `
            <h3>${stock.name}</h3>
            <p>$${stock.price.toFixed(2)}</p>
            <button onclick="addToWatchlist('${stock.name}')">Add to Watchlist</button>
        `;
        stockListElement.appendChild(stockCard);
    });
}

// Function to render the watchlist
function renderWatchlist() {
    watchlistElement.innerHTML = '';
    watchlist.forEach(stockName => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${stockName}</span>
            <button onclick="removeFromWatchlist('${stockName}')">Remove</button>
        `;
        watchlistElement.appendChild(listItem);
    });
}

// Function to add a stock to the watchlist
function addToWatchlist(stockName) {
    if (!watchlist.includes(stockName)) {
        watchlist.push(stockName);
        renderWatchlist();
    }
}

// Function to remove a stock from the watchlist
function removeFromWatchlist(stockName) {
    watchlist = watchlist.filter(stock => stock !== stockName);
    renderWatchlist();
}

// Initial render
renderStockCards();
