const express = require('express');
const app = express();
const port = process.env.port || 5000;
const cors = require('cors')

const categroies = require('./data/category.json')
const courses = require('./data/courses.json')

app.use(cors())

app.get('/', (req, res) => {
    res.send('server working')
})


app.get('/categroies', (req, res) => {
    res.send(categroies)
})


app.get('/course', (req, res) => {
    res.send(courses)
})


app.get('/category/:id', (req, res) => {
    const id = (req.params.id)
    console.log(id)
    const category_course = courses.filter(category => category.category_id === id)
    res.send(category_course)
})




app.listen(port, () => {
    console.log(`programming ninja course running ${port}`)
})