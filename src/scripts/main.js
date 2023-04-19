'use strict';

const thumbGallery = document.querySelectorAll('.gallery__thumb');

thumbGallery.forEach(item =>
  item.addEventListener('click', (e) => {
    e.preventDefault();
    
    const urlImage = 
    e.target.closest('.list-item__link').href
    .split('http://localhost:8080')
    .join('');

    const largeImg = document.querySelector('#largeImg');

    largeImg.setAttribute('src', urlImage);
  })
);
