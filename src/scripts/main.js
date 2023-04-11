'use strict';

const thumbGallery = document.querySelectorAll('.gallery__thumb');

thumbGallery.forEach(item =>
  item.addEventListener('click', (e) => {
    e.preventDefault();

    const urlImage = e.path[1].getAttribute('href');
    const largeImg = document.querySelector('#largeImg');

    largeImg.setAttribute('src', urlImage);
  })
);
