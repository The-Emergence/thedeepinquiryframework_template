document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('provider-form'); // Update this ID if needed
  
  if (form) {
    form.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent the default form submission behavior

      // Extract data from form fields
      const formData = new FormData(form);
      const name = formData.get('person_name');
      const email = formData.get('email');
      const phone = formData.get('phone');
      const address = formData.get('address');
      const state = formData.get('state');
      const zipcode = formData.get('zipcode');
      const focus = formData.get('focus');
      const callToAction = formData.get('call_to_action');
      const providerType = formData.get('provider_type');
      const description = formData.get('description');
      const subjectWords = formData.get('subject_words');
      const predicateWords = formData.get('predicate_words');
      const objectWords = formData.get('object_words');

      // Generate HTML content for the record
      const recordHTML = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Participant Record: ${name}</title>
          <link rel="stylesheet" href="record.css">
        </head>
        <body>
          <div class="record-container">
            <h1>${name}</h1>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Address:</strong> ${address}, ${state}, ${zipcode}</p>
            <p><strong>Primary Focus Area:</strong> ${focus}</p>
            <p><strong>Call to Action:</strong> ${callToAction}</p>
            <p><strong>Provider Type:</strong> ${providerType}</p>
            <p><strong>Description:</strong> ${description}</p>
            <h2>Words</h2>
            <p><strong>Subject Words:</strong> ${subjectWords}</p>
            <p><strong>Predicate Words:</strong> ${predicateWords}</p>
            <p><strong>Object Words:</strong> ${objectWords}</p>
          </div>
        </body>
        </html>
      `;

      // Create a downloadable file
      const blob = new Blob([recordHTML], { type: 'text/html' });
      const url = URL.createObjectURL(blob);

      // Trigger download
      const link = document.createElement('a');
      link.href = url;
      link.download = `${name.replace(/ /g, '_')}_record.html`;
      link.click();

      // Clean up the object URL
      URL.revokeObjectURL(url);
    });
  }
});
