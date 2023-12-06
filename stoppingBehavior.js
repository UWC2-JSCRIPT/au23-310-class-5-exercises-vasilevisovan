// Do not change
document.getElementById('cat').addEventListener('click', () => {
  alert('meow!');
});

// When clicked, "More info" link should alert "Here's some info"
// instead of going to a new webpage

document.getElementById('more-info').addEventListener('click', (event) => {
  event.preventDefault();
  alert("Here's some info");
});

// When the bark button is clicked, should alert "Bow wow!"
// Should *not* alert "meow"

document.getElementById('dog').addEventListener('click', (event) => {
  event.stopPropagation(); // Prevents the click event from reaching the parent div with id 'cat'
  alert('Bow wow!');
});
