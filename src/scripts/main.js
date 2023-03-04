'use strict';

const largeImage = document.querySelector('#largeImg');
const thumbs = document.querySelectorAll('.list-item');

thumbs.forEach(img => {
  img.addEventListener('click', ev => {
    ev.preventDefault();
    largeImage.src = ev.target.closest('.list-item__link').href;
  });
});
