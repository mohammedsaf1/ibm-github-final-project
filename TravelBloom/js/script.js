document.addEventListener('DOMContentLoaded', function () {
    const searchBar = document.getElementById('search-bar');
    const searchBtn = document.getElementById('search-btn');
    const clearBtn = document.getElementById('clear-btn');

    searchBtn.addEventListener('click', function () {
        let searchQuery = searchBar.value;
        if (searchQuery) {
            alert(`Searching for: ${searchQuery}`);
            // Add dynamic search handling here, possibly with API
        }
    });

    clearBtn.addEventListener('click', function () {
        searchBar.value = '';
    });

    document.getElementById('book-now-btn').addEventListener('click', function () {
        alert('Redirecting to booking page...');
        // You can add the redirection logic here
    });
});
