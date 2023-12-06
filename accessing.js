// Change the text of the "Seattle Weather" header to "February 10 Weather Forecast, Seattle"
const changeText = document.getElementById('weather-head');
changeText.innerText = 'February 10 Weather Forecast, Seattle';


// Change the class of the second <li> from to "sun" to "cloudy"
const secondLiElement = document.getElementsByTagName('li')[1];
secondLiElement.className = 'cloudy'

// Change the styling of every element with class "sun" to set the color to "orange"

const sunElemColor = document.getElementsByClassName('sun');
    for (var i = 0; i < sunElemColor.length; i++) {
      sunElemColor[i].style.color = 'orange';
    }