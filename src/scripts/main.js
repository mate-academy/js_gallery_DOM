'use strict';

const images = document.querySelector('.gallery ul');

images.addEventListener('click', (e) => {
  const link = e.target.closest('.list-item__link');

  if (link) {
    e.preventDefault();

    const img = e.target.closest('a');

    document.getElementById('largeImg').setAttribute('src', `${img}`);
  }
});
