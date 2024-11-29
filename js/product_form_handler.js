document.getElementById('product-form').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent the form from reloading the page.

  // Collect the Product Name from the form.
  const productName = document.getElementById('product-name').value;

  // Generate HTML for the product record.
  const html = `
    <li>
      <a href="#" data-title="${productName}">
        <div class="tile">
          <div class="product-badge">${productName}</div>
        </div>
      </a>
    </li>
  `;

  // Display the generated HTML in the output div.
  const outputDiv = document.getElementById('html-output');
  outputDiv.textContent = html; // Display as plain text.

  // Log the result for debugging.
  console.log(html);
});
