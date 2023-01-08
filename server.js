const express = require('express')

const app = express()

app.get('*', (req, res) => {
    //res.sendFile('homepage.html');
    res.send('Hi');
    // i believe this is listening to the homepage 

    // do more homework on this. I don't fully understand how
    // backend dev works.
});

app.listen(3000, () => {
    console.log('server is listening broski');
})