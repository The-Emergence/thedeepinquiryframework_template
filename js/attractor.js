document.addEventListener("DOMContentLoaded", function () {
    // Select elements
    const attractorLinks = document.querySelectorAll(".attractor-link");
    const expander = document.getElementById("attractor-expander");
    const expanderContent = expander.querySelector(".expander-content");
    const closeExpander = expander.querySelector(".close-expander");

    // Function to open the attractor expander
    function openExpander(content) {
        expanderContent.innerHTML = content;
        expander.classList.add("active");
    }

    // Function to close the attractor expander
    function closeExpanderFunc() {
        expander.classList.remove("active");
        expanderContent.innerHTML = ""; // Clear content
    }

    // Add click listeners to attractor links
    attractorLinks.forEach(link => {
        link.addEventListener("click", function () {
            const content = link.getAttribute("data-content"); // Fetch dynamic content
            openExpander(content);
        });
    });

    // Add click listener to close button
    closeExpander.addEventListener("click", closeExpanderFunc);
});
