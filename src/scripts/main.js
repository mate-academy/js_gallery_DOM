'use strict';

const links = document.querySelectorAll('.list-item__link');
const points = document.querySelectorAll('.list-item');
const largeImg = document.querySelector('.gallery__large-img');

// delete link default
links.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
  });
});

// set event of click on li, on LI
points.forEach(li => {
  li.addEventListener('click', () => {
    largeImg.src = li.querySelector('.list-item__link').href;
  });
});
