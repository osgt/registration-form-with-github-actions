// app.js (Node.js + Express example)
const express = require('express');
const fs = require('fs');
const app = express();

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Handle form submissions
app.post('/register', (req, res) => {
  const { name, email, bitcoinAddress } = req.body;
  const data = `Name: ${name}\nEmail: ${email}\nBitcoin Wallet Address: ${bitcoinAddress}\n\n`;
  
  // Append form data to a file
  fs.appendFile('registrations.txt', data, (err) => {
    if (err) throw err;
    console.log('Form data saved!');
  });

  res.send('Registration successful!');
});

// Start the server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
