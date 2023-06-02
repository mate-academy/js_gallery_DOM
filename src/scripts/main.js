'use strict';

const thumbs = document.querySelectorAll('.gallery #thumbs img');
const largeImage = document.getElementById('largeImg');

thumbs.forEach(image => {
  image.addEventListener('click', (eventPic) => {
    eventPic.preventDefault();

    const link = eventPic.target.closest('.list-item__link');

    largeImage.src = link.href;
  });
});
