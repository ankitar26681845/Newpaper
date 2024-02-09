document.addEventListener("DOMContentLoaded", function () {
    // Function to fetch and display articles
    function fetchArticles() {
        fetch('https://api.example.com/articles')  // Replace with your API endpoint
            .then(response => response.json())
            .then(data => {
                const articlesContainer = document.getElementById('articles-container');
                articlesContainer.innerHTML = ''; // Clear existing articles

                data.articles.forEach(article => {
                    const articleElement = document.createElement('article');
                    articleElement.innerHTML = `
                        <h2><a href="${article.url}" target="_blank">${article.title}</a></h2>
                        <p>${article.summary}</p>
                    `;
                    articlesContainer.appendChild(articleElement);
                });
            })
            .catch(error => console.error('Error fetching articles:', error));
    }

    // Initial fetch on page load
    fetchArticles();

    // Function to fetch and display daily updates
    function fetchDailyUpdates() {
        // You can implement this function based on your specific requirements
        // For simplicity, let's assume it fetches updates from a hypothetical API
        console.log('Fetching daily updates...');
    }

    // Fetch daily updates every 24 hours (86400000 milliseconds)
    setInterval(fetchDailyUpdates, 86400000);
});