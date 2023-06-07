const slider = document.querySelector('.slider');
const slides = document.querySelector('.slides');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let counter = 0;


nextBtn.addEventListener('click', () => {
  counter++;
  carousel();
 
});

prevBtn.addEventListener('click', () => {
  counter--;
  carousel();
});

function carousel() {
  if (counter === -1) {
    counter = 4;
  }
  if (counter === 4) {
    counter = 0;
  }
  slides.style.transform = `translateX(${-counter * 14.5}%)`;
}

setInterval(() => {
  counter++;
  carousel();
}, 3000);


function toggleDropdown() {
  var dropdownMenu = document.querySelector('.dropdown-menu');
  dropdownMenu.classList.toggle('show');
}

window.onclick = function(event) {
  if (!event.target.matches('.dropdown-trigger')) {
    var dropdowns = document.getElementsByClassName("dropdown-menu");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
{
  "liveServer.settings.port"; 5502;
}

const searchButton = document.querySelector('.search-button');
const searchBox = document.querySelector('.search-box');

searchButton.addEventListener('click', function() {
  searchBox.style.display = 'block';
  searchButton.style.display = 'block';

  document.addEventListener('click', hideSearchBox);
});

function hideSearchBox(event) {
  if (!searchButton.contains(event.target) && !searchBox.contains(event.target)) {
    searchBox.style.display = 'none';
    document.removeEventListener('click', hideSearchBox);
  }
}