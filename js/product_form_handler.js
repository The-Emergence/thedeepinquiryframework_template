document.getElementById('productForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the page from reloading

    // Collect form data
    const formData = new FormData(e.target);
    const product = {};
    formData.forEach((value, key) => {
        product[key] = value || 'N/A'; // Use 'N/A' as fallback for empty fields
    });

    // Generate HTML for Tile and Expander
    const htmlContent = `
<li>
    <a href="${product.productBuyLink || '#'}" data-largesrc="${product.productImage || ''}" data-title="${product.productName || 'Unnamed Product'}" data-description="${product.productDescription || 'No description provided.'}">
        <div class="tile">
            <div class="product-badge">${product.productName || 'Unnamed Product'}</div>
            <div class="text-group">
                <div class="word subject">${product.rdfSubject || 'No subject'}</div>
                <div class="word predicate">${product.rdfPredicate || 'No predicate'}</div>
                <div class="word object">${product.rdfObject || 'No object'}</div>
                <div class="word type">${product.rdfType || 'No type'}</div>
                <div class="word subtype">${product.rdfSubtype || 'No subtype'}</div>
                <div class="word relationship">${product.rdfRelationship || 'No relationship'}</div>
            </div>
        </div>
    </a>
    <div class="og-expander">
        <div class="og-expander-inner">
            <h3>${product.productName || 'Unnamed Product'}</h3>
            <p>${product.productDescription || 'No description provided.'}</p>
            <p><strong>Price:</strong> ${product.productPrice || 'Not specified'}</p>
            <p><a href="${product.productBuyLink || '#'}" target="_blank">Buy this product</a></p>
            <div class="rdf6-words">
                <p><strong>RDF6 Metadata:</strong></p>
                <ul>
                    <li><strong>Subject:</strong> ${product.rdfSubject || 'No subject'}</li>
                    <li><strong>Predicate:</strong> ${product.rdfPredicate || 'No predicate'}</li>
                    <li><strong>Object:</strong> ${product.rdfObject || 'No object'}</li>
                    <li><strong>Type:</strong> ${product.rdfType || 'No type'}</li>
                    <li><strong>Subtype:</strong> ${product.rdfSubtype || 'No subtype'}</li>
                    <li><strong>Relationship:</strong> ${product.rdfRelationship || 'No relationship'}</li>
                </ul>
            </div>
        </div>
    </div>
</li>`;

    // Append the generated HTML to the grid (example grid ID: "og-grid")
    const grid = document.getElementById('og-grid');
    if (grid) {
        grid.insertAdjacentHTML('beforeend', htmlContent);
    }

    console.log('Product added to the grid:');
    console.log(htmlContent); // Log the generated HTML for debugging
});
