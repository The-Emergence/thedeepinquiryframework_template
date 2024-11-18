// webform_navigation.js

// Handle navigation based on dropdown selection
document.addEventListener('DOMContentLoaded', function () {
  const recordTypeSelector = document.getElementById('record-type-selector');
  if (recordTypeSelector) {
    recordTypeSelector.addEventListener('change', function () {
      const selectedPage = this.value;
      if (selectedPage) {
        window.location.href = selectedPage;
      }
    });
  }
});
