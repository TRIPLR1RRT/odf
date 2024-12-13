function yourNewSubmitFunction(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  const webhookUrl = 'https://discord.com/api/webhooks/1317091364986683443/gfBByBgfbUCkZISB6HtuIKCUEs-wxwrsAb6VEB8KuWls51s0rbud1kPMaSva5aZkg3wv';
  const webhookBody = {
    embeds: [{
      title: 'Contact Form Submitted',
      fields: [
        { name: 'Name', value: name },
        { name: 'Email', value: email },
        { name: 'Message', value: message }
      ]
    }]
  };

  fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(webhookBody)
  })
  .then(response => {
    if (response.ok) {
      const formStatus = document.getElementById('form-status');
      formStatus.textContent = 'Message sent successfully!';
      setTimeout(() => {
        formStatus.textContent = '';
        form.reset();
      }, 3000); // Reset after 3 seconds
    } else {
      console.error('Error:', response.statusText);
      alert('Error sending message. Please try again.');
    }
  })
  .catch(error => {
    console.error('Error:', error);
    alert('An error occurred. Please try again later.');
  });
}
