'use strict';

const list = document.querySelector('.gallery__list');
const large = document.getElementById('largeImg');

// eslint-disable-next-line no-shadow
list.addEventListener('click', (event) => {
  event.preventDefault();

  // const imgLinc = event.target.parentElement.getAttribute('href');

  // large.src = imgLinc;
  const el = event.target.closest('.list-item__link');

  if (!el) {
    return;
  }
  large.src = el.href;
});
