// app.js (Node.js + Express example)
const express = require('express');
const fs = require('fs');
const crypto = require('crypto');
const app = express();

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Handle form submissions
app.post('/register', (req, res) => {
  const { name, email, bitcoinAddress } = req.body;
  const data = `Name: ${name}\nEmail: ${email}\nBitcoin Wallet Address: ${bitcoinAddress}\n\n`;

  // Encrypt form data using AES-256-CBC with a secret key and IV
  const secretKey = crypto.randomBytes(32);
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv('aes-256-cbc', secretKey, iv);
  const encryptedData = Buffer.concat([cipher.update(data, 'utf8'), cipher.final()]);

  // Write encrypted data to a file
  fs.writeFileSync('registration.enc', encryptedData);

  // Write secret key and IV to separate files
  fs.writeFileSync('secretKey.enc', secretKey);
  fs.writeFileSync('iv.enc', iv);

  res.send('Registration successful!');
});

// Start the server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
