const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "./public")));
}

if (process.env.NODE_ENV === "production") {
    app.get("*", (req, res) => {
        res.sendFile(__dirname, "./public/index.html")
    });
}

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});