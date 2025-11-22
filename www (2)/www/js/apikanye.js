function getquote() {
    const quotesList = document.querySelector('.kanyequoute');
    quotesList.innerHTML = ''; // Clear previous quotes

    let count = 0;

    function fetchQuote() {
        $.ajax({
            url: 'https://api.kanye.rest/',
            method: 'GET',
            success: function (response) {
                count++;
                console.log('Kanye Quote:', response.quote);

                // Add each quote as a list item
                const li = document.createElement('li');
                li.textContent = response.quote;
                quotesList.appendChild(li);

                // Fetch up to 10 quotes
                if (count < 10) {
                    fetchQuote();
                }
            },
            error: function (xhr, status, error) {
                console.error('Error:', error);
            }
        });
    }

    fetchQuote();
}
