// Update the third <li> item ("Turbocharged"), 
// set the class name to "highlight"
const buyNowLink = document.createElement("a");
buyNowLink.setAttribute("id", "cta"); // Set the ID attribute
buyNowLink.setAttribute("href", "#"); // Set the appropriate href value if needed
buyNowLink.textContent = "Buy Now!"; // Set the text content

// Step 2: Insert the "Buy Now" link after the last paragraph
const lastParagraph = document.querySelector("main p:last-child");
lastParagraph.parentNode.insertBefore(buyNowLink, lastParagraph.nextSibling);

// Step 3: Log the value of the "data-color" attribute to the console
const imgElement = document.querySelector("main img");
const dataColorValue = imgElement.getAttribute("data-color");
console.log("Data Color:", dataColorValue);

// Step 4: Update the class name of the third list item to "highlight"
const thirdListItem = document.querySelector("main ul li:nth-child(3)");
thirdListItem.classList.add("highlight");


// Remove (delete) the last paragraph
// (starts with "Available for purchase now…")
lastParagraph.parentNode.removeChild(lastParagraph);