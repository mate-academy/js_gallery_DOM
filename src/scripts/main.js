'use strict';

const list = document.querySelectorAll('.list-item__link');
const largeImage = document.querySelector('#largeImg');

list.forEach(element => {
  element.addEventListener('click', (clickEvent) => {
    clickEvent.preventDefault();

    const imageLink = element.href;

    largeImage.src = imageLink;
  });
});
