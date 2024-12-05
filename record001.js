// Declare and initialize the recordContent object FIRST
const recordContent = {
  title: "Hello World",
  description: "This is a proof of concept for modular expander content.",
  links: [
    { text: "Visit Example", href: "https://example.com" }
  ]
};

// Function to inject content into the expander
function injectRecordContent() {
  const expander = document.querySelector("#expander-record001");

  // Ensure the expander element exists before modifying it
  if (!expander) {
    console.error("Expander element not found for record001.");
    return;
  }

  // Set the title
  expander.querySelector(".title").textContent = recordContent.title;

  // Set the description
  expander.querySelector(".description").textContent = recordContent.description;

  // Add links
  const linksContainer = expander.querySelector(".links");
  recordContent.links.forEach(link => {
    const a = document.createElement("a");
    a.textContent = link.text;
    a.href = link.href;
    a.target = "_blank";
    linksContainer.appendChild(a);
  });
}

// Inject content after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", injectRecordContent);

console.log("Expander Title:", recordContent.title);
console.log("Expander Description:", recordContent.description);
