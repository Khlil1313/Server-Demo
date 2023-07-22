const express = require("express");
const app = express();

const PORT = 3000;

app.get ("/", (req, res) => {
    res.send({greeting: "Hello"})
})

app.listen(PORT, () => {
    console.log("Hello, this app is listening on port 3000");
})