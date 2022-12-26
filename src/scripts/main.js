'use strict';

const img = document.querySelector('#largeImg');

const list = document.querySelectorAll('li');

list.forEach(element => {
  element.addEventListener('click', (event) => {
    event.preventDefault();

    img.src = event.target.closest('.list-item__link').href;
  });
});
