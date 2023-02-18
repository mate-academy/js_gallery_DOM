'use strict';

const list = document.querySelector('.gallery__list');
const largeImg = document.querySelector('#largeImg');

list.addEventListener('click', (e) => {
  const picture = e.target;

  e.preventDefault();

  const href = 'http://localhost:8080/images'
  + picture.getAttribute('src').toString().split('-').slice(0, -1).join('-')
  + '.png';

  if (picture.classList.contains('.list-item__link')) {
    largeImg.setAttribute('src', href);
  }

  largeImg.setAttribute('src', href);
});
