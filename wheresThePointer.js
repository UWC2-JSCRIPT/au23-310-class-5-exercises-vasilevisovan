// Attach one listener that will detect clicks on any of the <td>
// elements.  Should update that element's innerHTML to be the
// x, y coordinates of the mouse at the time of the click


document.addEventListener("DOMContentLoaded", () => {
    const tdElements = document.querySelectorAll("td");

    const updateCoordinates = (event) => {
      const x = event.clientX;
      const y = event.clientY;

      // Update the innerHTML of the clicked td element
      event.target.innerHTML = `X: ${x}, Y: ${y}`;

      // Log coordinates in the console
      console.log(`Clicked at X: ${x}, Y: ${y}`);
    };

    // Attach click event listener to each td element
    tdElements.forEach((td) => {
      td.addEventListener("click", updateCoordinates);
    });
  });