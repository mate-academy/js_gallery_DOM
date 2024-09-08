'use strict';

const largeImg = document.querySelector('#largeImg');
const smallImg = document.querySelectorAll('.list-item__link');

const imagesLinksArray = Array.from(smallImg).map((item) => {
  item.getAttribute('href');
});

smallImg.forEach((item, i) => {
  item.addEventListener('click', function (e) {
    e.preventDefault();

    largeImg.setAttribute('src', `${imagesLinksArray[i]}`);
  });
});
