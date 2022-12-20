'use strict';

const list = document.querySelectorAll('li');
const image = document.querySelector('#largeImg');

list.forEach(el => {
  el.addEventListener('click', (e) => {
    e.preventDefault();

    image.src = e.target.closest('.list-item')
      .querySelector('.list-item__link').href;
  });
});
