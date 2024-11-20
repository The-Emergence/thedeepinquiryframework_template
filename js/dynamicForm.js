
// Form configuration for each record type
const formConfig = {
    participant: [
        { label: "Name", name: "name", type: "text", required: true },
        { label: "Email", name: "email", type: "email", required: true },
        { label: "Phone", name: "phone", type: "tel", required: false },
        { label: "Address", name: "address", type: "text", required: false },
        { label: "Date of Birth", name: "dob", type: "date", required: true },
    ],
    provider: [
        { label: "Provider Name", name: "providerName", type: "text", required: true },
        { label: "Service Type", name: "serviceType", type: "text", required: true },
        { label: "Email", name: "email", type: "email", required: true },
        { label: "Address", name: "address", type: "text", required: true },
        { label: "Website", name: "website", type: "url", required: false },
    ],
    product: [
        { label: "Product Name", name: "productName", type: "text", required: true },
        { label: "Price", name: "price", type: "number", required: true },
        { label: "Category", name: "category", type: "text", required: false },
        { label: "Stock Quantity", name: "stockQuantity", type: "number", required: true },
        { label: "Description", name: "description", type: "textarea", required: false },
    ],
    insight: [
        { label: "Title", name: "title", type: "text", required: true },
        { label: "Summary", name: "summary", type: "textarea", required: true },
        { label: "Tags", name: "tags", type: "text", required: false },
        { label: "Author", name: "author", type: "text", required: true },
        { label: "Published Date", name: "publishedDate", type: "date", required: true },
    ],
};

// Listen for dropdown changes to dynamically update fields
document.getElementById("recordType").addEventListener("change", function () {
    const selectedType = this.value;
    const formFieldsContainer = document.getElementById("formFields");
    formFieldsContainer.innerHTML = ""; // Clear existing fields

    if (!selectedType || !formConfig[selectedType]) return;

    formConfig[selectedType].forEach((field) => {
        // Create label
        const fieldLabel = document.createElement("label");
        fieldLabel.textContent = field.label;

        // Create input/textarea
        let fieldInput;
        if (field.type === "textarea") {
            fieldInput = document.createElement("textarea");
        } else {
            fieldInput = document.createElement("input");
            fieldInput.type = field.type;
        }

        fieldInput.name = field.name;
        fieldInput.required = field.required || false;

        // Append to form
        formFieldsContainer.appendChild(fieldLabel);
        formFieldsContainer.appendChild(fieldInput);
    });
});

// Form submission handler
document.getElementById("dynamicForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(this);
    const recordType = formData.get("recordType");

    // Validate fields
    let hasErrors = false;
    const errorMessages = [];
    formConfig[recordType]?.forEach((field) => {
        const value = formData.get(field.name);
        if (field.required && !value) {
            hasErrors = true;
            errorMessages.push(`The ${field.label} field is required.`);
        }
    });

    if (hasErrors) {
        alert(errorMessages.join("\n"));
        return;
    }

    // Process the form submission (Example: Log data to console)
    const recordData = {};
    formConfig[recordType]?.forEach((field) => {
        recordData[field.name] = formData.get(field.name);
    });

    console.log(`Submitting ${recordType} record:`, recordData);
    alert(`Record of type "${recordType}" submitted successfully!`);
});
