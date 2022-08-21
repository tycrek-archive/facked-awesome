const { facked } = require('../');
const express = require('express');
const axios = require('axios');
const path = require('path');
const fs = require('fs');

const app = express();

// Set view engine
app.set('view engine', 'pug');
app.set('views', './test/');

// Facked middleware
app.use('/facked.js', facked(fs.readFileSync(path.join(process.cwd(), 'kit_id')).toString(), false));

// Index
app.get('/', (req, res) => res.render('index'));

// Start server
app.listen(3000, () => {
	console.log('Example app listening on port 3000! (Click here to open: http://localhost:3000)');

	// Request facked.js to test if it works (HTTP 200)
	axios.get('http://localhost:3000/facked.js')
		.then((response) => {
			if (response.status === 200) console.log('Facked.js works!'), process.exit(0);
			else throw new Error(`Response status code is ${response.status}`);
		})
		.catch((error) => process.exit(1));
});