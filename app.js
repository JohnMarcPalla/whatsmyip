const express = require('express');
const axios = require('axios');

const app = express();
const PORT = 3000;

// Function to get the public IP address
async function getPublicIPAddress() {
    try {
        const response = await axios.get('https://api.ipify.org?format=json');
        return response.data.ip;
    } catch (error) {
        console.error('Error fetching public IP:', error);
        return 'Unable to fetch public IP';
    }
}

app.get('/', async (req, res) => {
    const publicIP = await getPublicIPAddress();
    res.send(`<h1>Container's Public IP Address: ${publicIP}</h1>`);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
