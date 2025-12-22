'use strict';

const images = document.querySelectorAll('.list-item__link');
const bigImage = document.querySelector('#largeImg');

images.forEach((image) => {
  image.addEventListener('click', () => {
    event.preventDefault();

    const imageId = +image.title.split(' ')[1];

    switch (imageId) {
      case 1:
        bigImage.src = '/images/landscape-first.png';
        break;
      case 2:
        bigImage.src = '/images/landscape-second.png';
        break;
      case 3:
        bigImage.src = '/images/landscape-third.png';
        break;
      case 4:
        bigImage.src = '/images/landscape-fourth.png';
        break;
      case 5:
        bigImage.src = '/images/landscape-fifth.png';
        break;
    }
  });
});
