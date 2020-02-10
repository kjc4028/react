const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/page2', (req, res, next) => {
    res.json([
        {id: 1, username: "one"},
        {id: 2, username: "two"}
    ]
    )
});

app.listen(port, () => console.log(`Listing on port ${port}`));