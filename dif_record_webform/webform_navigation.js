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
});
