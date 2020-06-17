const express = require("express");

const app = express();

const PORT = 3000;

const handleListening = () => console.log(`Listening On PORT: ${PORT}`);

app.listen(PORT, handleListening);
