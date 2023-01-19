'use strict';

const list = document.querySelectorAll('.list-item__link');

const mainImage = document.querySelector('#largeImg');

list.forEach(element => {
  element.addEventListener('click', (clickEvent) => {
    clickEvent.preventDefault();

    const imgLink = element.href;

    mainImage.src = imgLink;
  });
});
