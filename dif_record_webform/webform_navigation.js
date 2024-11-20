// webform_navigation.js

document.addEventListener('DOMContentLoaded', function () {
  const recordTypeSelector = document.getElementById('record-type-selector');

  if (recordTypeSelector) {
    // Set the current page as the selected option in the dropdown
    const currentPage = window.location.pathname.split('/').pop();
    for (const option of recordTypeSelector.options) {
      if (option.value === currentPage) {
        option.selected = true;
        break;
      }
    }

    // Handle navigation when the dropdown selection changes
    recordTypeSelector.addEventListener('change', function () {
      const selectedPage = this.value;
      if (selectedPage) {
        window.location.href = selectedPage;
      }
    });
  }

  // Handle form submission to generate HTML record
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault(); // Prevent default form submission

      // Collect form data
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData.entries());

      // Generate HTML record content
      const recordHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Participant Record - ${data.person_name}</title>
  <link rel="stylesheet" href="record.css">
</head>
<body>
  <div class="record-container">
    <h1>${data.person_name}</h1>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Phone:</strong> ${data.phone}</p>
    <p><strong>Address:</strong> ${data.address}, ${data.state}, ${data.zipcode}</p>
    <p><strong>Primary Focus:</strong> ${data.focus}</p>
    <p><strong>Call to Action:</strong> ${data.call_to_action}</p>
    <p><strong>Description:</strong> ${data.description}</p>
    <h2>Words</h2>
    <ul>
      <li><strong>Subject Words:</strong> ${data.subject_words}</li>
      <li><strong>Predicate Words:</strong> ${data.predicate_words}</li>
      <li><strong>Object Words:</strong> ${data.object_words}</li>
    </ul>
    <h2>Associations</h2>
    <p><strong>Associated Record:</strong> ${data.associated_record}</p>
    <p><strong>Role:</strong> ${data.association_role}</p>
    ${data.record_image ? `<img src="${URL.createObjectURL(formData.get('record_image'))}" alt="Record Image" />` : ''}
  </div>
</body>
</html>
      `;

      // Create and download the HTML file
      const blob = new Blob([recordHTML], { type: 'text/html' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = `${data.person_name.replace(/\s+/g, '_')}_record.html`;
      link.click();
    });
  }
});
