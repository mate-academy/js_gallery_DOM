'use strict';

const ul = document.querySelector('#thumbs');

// eslint-disable-next-line no-shadow
ul.addEventListener('click', (event) => {
  const link = event.target.closest('.list-item__link');

  if (!link) {
    return;
  }

  event.preventDefault();
  document.querySelector('#largeImg').src = link.getAttribute('href');
});
