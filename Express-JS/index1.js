const express = require('express');

const app = express();

app.use(() => {

    console.log('hello Server..');
    console.log('hello Server2..');
    console.log('hello Server3..');
})

app.listen(4000);
