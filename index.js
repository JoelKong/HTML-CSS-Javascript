const express = require('express');
const app = express();

app.listen(3000, () => console.log('Listening on port 3000 yay'));
//app.use(() => console.log("new request"));

app.get('/r/:subreddits', (req, res) => {
    const { subreddits } = req.params;
    console.log(req.params);
    res.send(`<h1>This is the ${subreddits} subreddit</h1>`);
})

app.get('/r/:subreddits/:id', (req, res) => {
    const { subreddits, id } = req.params;
    console.log(req.params);
    res.send(`<h1>This is the ${subreddits} subreddit in the ${id} id</h1>`);
})

app.get('/search', (req, res) => {
    const { q, color = '' } = req.query;
    console.log(req.query);
    res.send(`<h1>Search results for: ${q}${color}</h1>`);
})

app.get('*', (req, res) => res.send('<h1>Not Found</h1>'));