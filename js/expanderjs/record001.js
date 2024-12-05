console.log("Record Content:", recordContent); // Log the content
const expander = document.querySelector("#expander-record001");
console.log("Expander Element:", expander); // Log the expander element



// Content specific to Record 001
const recordContent = {
  title: "Hello World",
  description: "This is a proof of concept for modular expander content.",
  links: [
    { text: "Visit Example", href: "https://example.com" }
  ]
};

function injectRecordContent() {
  const expander = document.querySelector("#expander-record001");

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
