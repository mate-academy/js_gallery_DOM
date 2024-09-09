'use strict';

const largeImg = document.querySelector('#largeImg');
const smallImages = document.querySelectorAll('.list-item__link');

const imagesLinksArray = Array.from(smallImages);

imagesLinksArray.forEach((item) => {
  item.getAttribute('href');
});

smallImages.forEach((item, i) => {
  item.addEventListener('click', function (e) {
    e.preventDefault();

    largeImg.setAttribute('src', `${imagesLinksArray[i]}`);
  });
});
