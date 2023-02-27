'use strict';

const mainImage = document.getElementById('largeImg');
const list = document.getElementById('thumbs');
const links = document.body.querySelectorAll('.list-item__link');

links.forEach(link => {
  // eslint-disable-next-line no-shadow
  link.addEventListener('click', (event) => {
    event.preventDefault();
  });
});

// eslint-disable-next-line no-shadow
list.addEventListener('click', (event) => {
  const target = event.target.closest('.gallery__thumb');
  const link = event.target.closest('.list-item__link');

  if (!target) {
    return;
  };

  if (!list.contains(target)) {
    return;
  };

  mainImage.src = link.href;
});
