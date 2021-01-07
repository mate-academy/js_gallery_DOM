'use strict';

const largeImage = document.querySelector('#largeImg');

const pictures = document.querySelectorAll('a');

for (const picture of pictures) {
  picture.addEventListener('click', () => {
    event.preventDefault();
    largeImage.src = picture.href;
  });
}
