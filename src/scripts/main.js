'use strict';

const elements = document.querySelectorAll('a.list-item__link');

elements.forEach((element) => {
  element.addEventListener('click', (elementEvent) => {
    const image = document.querySelector('#largeImg');

    image.src = element.href;
    elementEvent.preventDefault();
  });
});
