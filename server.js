const express = require("express");
const router = require("/src/controllers/pizzaControllers.js")
const app = express();
const port = 3000;

app.use(express.json());

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})