'use strict';

const thumbGallery = document.querySelectorAll('.gallery__thumb');

thumbGallery.forEach(item =>
  item.addEventListener('click', (e) => {
    e.preventDefault();

    const urlImage = `images${e.target.closest('.list-item__link').href
      .split('images')[1]}`;

    const largeImg = document.querySelector('#largeImg');

    largeImg.setAttribute('src', urlImage);
  })
);
