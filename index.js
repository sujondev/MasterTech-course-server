const express = require('express');
const app = express();
const port = process.env.port || 5000;
const cors = require('cors')

const categroies = require('./data/category.json')

app.use(cors())

app.get('/', (req, res) => {
    res.send('server test successful')
})

app.get('/categroies/:id', (req, res) => {
    res.send(categroies)
})



app.listen(port, () => {
    console.log(`programming ninja course running ${port}`)
})