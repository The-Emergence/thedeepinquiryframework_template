document.getElementById('productForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const product = {};
    formData.forEach((value, key) => {
        product[key] = value;
    });

    // Generate Tile Preview Content
    const tilePreview = `
        <div class="tile">
            <div class="product-badge">${product.productName}</div>
            <div class="text-group">
                <div class="word subject">${product.previewSubject || 'N/A'}</div>
                <div class="word predicate">${product.previewPredicate || 'N/A'}</div>
                <div class="word object">${product.previewObject || 'N/A'}</div>
            </div>
        </div>
    `;

    // Generate Expander Content
    const expanderContent = `
        <div class="og-expander">
            <div class="og-expander-inner">
                <h3>${product.productName}</h3>
                <p><strong>Description:</strong> ${product.productDescription}</p>
                <p><strong>Price:</strong> ${product.productPrice || 'N/A'}</p>
                <p><strong>Features:</strong> ${product.expanderObject || 'N/A'}</p>
                <p><a href="${product.productBuyLink}" target="_blank">Buy this product</a></p>
            </div>
        </div>
    `;

    // Combine into List Item
    const htmlContent = `
        <li>
            <a href="${product.productBuyLink}" data-largesrc="${product.productImage || ''}" data-title="${product.productName}" data-description="${product.previewSubject || 'N/A'}">
                ${tilePreview}
            </a>
            ${expanderContent}
        </li>
    `;

    // Display HTML
    document.getElementById('html-output').innerText = htmlContent.trim();
});
