'use strict';

const largeImage = document.getElementById('largeImg');
const imagesList = document.querySelectorAll('.list-item');

imagesList.forEach(imgItem => {
  imgItem.addEventListener('click', (eve) => {
    eve.preventDefault();

    largeImage.src = imgItem.querySelector('a').href;
  });
});
