const express = require('express');
const app = express();
const port = process.env.port || 5000;

app.get('/', (req, res) => {
    res.send('server test successful')
})




app.listen(port, () => {
    console.log(`programming ninja course running ${port}`)
})