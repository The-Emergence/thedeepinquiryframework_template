const htmlContent = `
<li>
<a href="${product.productBuyLink}" data-largesrc="" data-title="${product.productName}" 
       data-description="${product.productDescription}" data-price="${product.productPrice}">
        <div class="tile">
            <div class="product-badge">${product.productName}</div>
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
