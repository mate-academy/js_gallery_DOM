'use strict';

const gallery = document.getElementById('thumbs');
const largeImage = document.getElementById('largeImg');

for (const picture of gallery.querySelectorAll('.list-item__link')) {
  picture.addEventListener('click', (event) => {
    event.preventDefault();
    largeImage.src = picture.href;
  });
}
