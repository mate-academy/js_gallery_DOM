'use strict';

const gallery = document.querySelector('.gallery');

// eslint-disable-next-line no-shadow
gallery.addEventListener('click', (event) => {
  if (event.target.closest('.list-item__link')) {
    event.preventDefault();
  }
});

const list = document.querySelector('ul');
const imgForChange = document.getElementById('largeImg');

// eslint-disable-next-line no-shadow
list.addEventListener('click', (event) => {
  const imgByItem = event.target.closest('.list-item__link');

  if (imgByItem) {
    const srcByItem = imgByItem.getAttribute('href');

    imgForChange.setAttribute('src', srcByItem);
  }
});
