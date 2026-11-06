
const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 3000;

// Serve frontend files
app.use(express.static(path.join(__dirname)));

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, "0.0.0.0", function() {
    console.log(`To-Do Task Manager running on port ${PORT}`);
});

