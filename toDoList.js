// If an li element is clicked, toggle the class "done" on the <li>

// If a delete link is clicked, delete the li element / remove from the DOM

// If an 'Add' link is clicked, adds the item as a new list item with
// addListItem function has been started to help you get going!
// Make sure to add an event listener(s) to your new <li> (if needed)

const addListItem = function (e) {
  console.log('addListItem function called'); // Add this line for debugging
  e.preventDefault();
  const input = this.parentNode.querySelector('input');
  const text = input.value.trim();

  if (text === '') {
    // Don't add an empty item
    return;
  }

  // Create a new <li> element
  const newListItem = document.createElement('li');
  const span = document.createElement('span');
  span.textContent = text;
  const deleteLink = document.createElement('a');
  deleteLink.textContent = 'Delete';
  deleteLink.classList.add('delete');

  // Add click event listener to toggle "done" class
  newListItem.addEventListener('click', function () {
    this.classList.toggle('done');
  });

  // Add click event listener to delete the <li> element
  deleteLink.addEventListener('click', function (e) {
    e.stopPropagation(); // Prevent the click event from bubbling up to the <li>
    this.parentNode.remove(); // Remove the <li> from the DOM
  });

  // Append elements to the new <li>
  newListItem.appendChild(span);
  newListItem.appendChild(deleteLink);

  // Append the new <li> to the ul
  const todayList = document.querySelector('.today-list');
  todayList.appendChild(newListItem);

  // Clear the input field
  input.value = '';
};

// Add click event listener to the "Add" button
document.querySelector('.add-item').addEventListener('click', addListItem);
