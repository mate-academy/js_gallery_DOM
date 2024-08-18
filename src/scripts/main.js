'use strict';

const mainImg = document.querySelector('.gallery__large-img');
const itemLink = [...document.querySelectorAll('.list-item__link')];

itemLink.forEach((img, index) => {
  img.addEventListener('click', () => {
    mainImg.src = `${location.origin}${itemLink[index].getAttribute('href')}`;
  });
});
