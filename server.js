const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.sendFile('homepage.html');
    // i believe this is listening to the homepage 
});

app.listen(3000, () => {
    console.log('server is listening broski');
})