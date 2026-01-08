'use strict';

const ul = document.querySelector('.gallery');

ul.addEventListener('click', (evt) => {
  const link = evt.target.closest('.list-item__link');

  if (link) {
    evt.preventDefault();

    const hrf = link.href;
    const largeImage = document.querySelector('#largeImg');

    largeImage.src = hrf;
  }
});
