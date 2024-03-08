const axios = require('axios');

// Function to send a GET request to the specified URL
function sendGetRequest() {
    axios.get('https://prismdeploy.onrender.com/update')
        .then(response => {
            console.log('GET request successful:', response.data);
        })
        .catch(error => {
            console.error('GET request failed:', error.message);
        });
}

// Send an initial request when the script starts
sendGetRequest();

// Send a GET request to the URL every hour
setInterval(() => {
    sendGetRequest();
}, 2000); // 1 hour = 3600000 milliseconds
