'use strict'

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.send('Hello Docker');
});

app.listen(port, () => {
	console.log(`Listerning on port ${port}`);
});