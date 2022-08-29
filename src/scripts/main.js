'use strict';

const items = document.querySelectorAll('.list-item');
const largePic = document.getElementById('largeImg');

items.forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();

    const source = e.target.getAttribute('src');

    largePic.setAttribute('src', source);
  });
});
