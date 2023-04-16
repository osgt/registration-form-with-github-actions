document.getElementById('registrationForm').addEventListener('submit', async (event) => {
    event.preventDefault();
  
    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const bitcoinWallet = document.getElementById('bitcoinWallet').value;
  
    // Prepare data to send as JSON
    const formData = {
      name: name,
      email: email,
      bitcoinWallet: bitcoinWallet
    };
  
    // Send form data as JSON to GitHub Actions endpoint
    const response = await fetch('/.github/workflows/save-registration-data.yml', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
  
    if (response.ok) {
      // Handle success
      console.log('Registration data saved successfully!');
    } else {
      // Handle error
      console.error('Failed to save registration data.');
    }
  });
  