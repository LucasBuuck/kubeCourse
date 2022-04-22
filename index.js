import express  from "express";

const app = express();
const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
    res.set('Content-Type', 'text/html');
    res.send('Hello world:');
});

app.listen(port, () => {
    console.log('Listening on' + port);
});