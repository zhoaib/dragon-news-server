const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/categories.json');
const news = require('/data/news.json')


app.get('/', (req, res) => {
    res.send('News API');
});

app.get('/news-categories', (req, res) => {
    res.send(categories);
});

app.get('/news/id:', (req, res) => {
    console.log(req.params);
})

app.listen(port, () => {
    console.log('Dragon News Server Running on port-', port)
})