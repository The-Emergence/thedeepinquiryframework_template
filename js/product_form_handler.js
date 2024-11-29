document.getElementById('product-form').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent the page from reloading.

  // Collect form data.
  const formData = new FormData(e.target);
  const productData = {};
  formData.forEach((value, key) => {
    productData[key] = value;
  });

  // Generate the HTML for the Tile and Expander content.
  const html = `
    <li>
      <a href="${productData.product_buy_link}" data-largesrc="" data-title="${productData.product_name}" data-description="${productData.product_description}">
        <div class="tile">
          <div class="product-badge">${productData.product_name}</div>
          <div class="text-group">
            <div class="word subject">${productData.rdf_subj}</div>
            <div class="word predicate">${productData.rdf_pred}</div>
            <div class="word object">${productData.rdf_obje}</div>
            <div class="word type">${productData.rdf_type}</div>
            <div class="word subtype">${productData.rdf_styp}</div>
            <div class="word relationship">${productData.rdf_rela}</div>
          </div>
        </div>
      </a>
    </li>
  `;

  // Display the generated HTML.
  const outputDiv = document.getElementById('html-output');
  outputDiv.innerText = html;

  // Optionally, log the HTML for debugging.
  console.log(html);
});
