document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Get form data
    const name = document.getElementById('name').value;
    const walletAddress = document.getElementById('walletAddress').value;
    const email = document.getElementById('email').value;
  
    // Construct data string in CSV format
    const dataString = `${name},${walletAddress},${email}\n`;
  
    // Use Fetch API to write data to a file
    fetch('registrations.csv', {
      method: 'POST',
      body: dataString,
      headers: {
        'Content-Type': 'text/csv',
        'Content-Disposition': 'attachment; filename=registrations.csv'
      }
    })
    .then(function(response) {
      if (response.ok) {
        alert('Registration data saved successfully!');
      } else {
        alert('Error saving registration data.');
      }
    })
    .catch(function(error) {
      console.error('Error:', error);
      alert('Error saving registration data.');
    });
  });
  