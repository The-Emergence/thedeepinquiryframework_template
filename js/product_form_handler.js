function exportProductHTML() {
    const form = document.getElementById('productForm');
    const formData = new FormData(form);

    // Collect form data
    const product = {};
    formData.forEach((value, key) => {
        product[key] = value;
    });

    // Generate HTML for Tile Preview and Expander
    const htmlContent = `
<li>
    <a href="${product.productBuyLink}" 
       data-largesrc="${product.productImage}" 
       data-title="${product.tileName}" 
       data-description="${product.tileSummary} | Description: ${product.productDescription} | Price: ${product.productPrice} | RDF6: Subject - ${product.rdfSubject}, Predicate - ${product.rdfPredicate}, Object - ${product.rdfObject}, Type - ${product.rdfType}, Subtype - ${product.rdfSubtype}, Relationship - ${product.rdfRelationship}">
        <div class="tile">
            <div class="product-badge">${product.tileName}</div>
            <div class="text-group">
                <div class="word subject">${product.rdfSubject}</div>
                <div class="word predicate">${product.rdfPredicate}</div>
                <div class="word object">${product.rdfObject}</div>
                <div class="word type">${product.rdfType}</div>
                <div class="word subtype">${product.rdfSubtype}</div>
                <div class="word relationship">${product.rdfRelationship}</div>
            </div>
        </div>
    </a>
    <div class="og-expander">
        <div class="og-expander-inner">
            <h3>${product.productName}</h3>
            <p>${product.productDescription}</p>
            <p><strong>Price:</strong> ${product.productPrice}</p>
            <p><a href="${product.productBuyLink}" target="_blank">Buy this product</a></p>
            <div class="rdf6-words">
                <p><strong>RDF6 Words:</strong></p>
                <ul>
                    <li><strong>Subject:</strong> ${product.rdfSubject}</li>
                    <li><strong>Predicate:</strong> ${product.rdfPredicate}</li>
                    <li><strong>Object:</strong> ${product.rdfObject}</li>
                    <li><strong>Type:</strong> ${product.rdfType}</li>
                    <li><strong>Subtype:</strong> ${product.rdfSubtype}</li>
                    <li><strong>Relationship:</strong> ${product.rdfRelationship}</li>
                </ul>
            </div>
        </div>
    </div>
</li>`;

    // Create a Blob and download as HTML
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `${product.productName.replace(/ /g, '_')}_record.html`;
    a.click();
}
