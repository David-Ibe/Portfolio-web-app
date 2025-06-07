const handleFormSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch('http://localhost:3001/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    const data = await response.json();
    if (response.ok) {
      setFormStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } else {
      setFormStatus('Error: ' + data.message || 'Failed to send message.');
    }
  } catch (err) {
    setFormStatus('Error: Could not connect to the server.');
    console.error('Error submitting form:', err);
  }
  setTimeout(() => setFormStatus(''), 5000);
};