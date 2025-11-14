'use strict';

const container = document.querySelector('ul');
const image = document.querySelector('#largeImg');

container.addEventListener('click', (elementEvent) => {
  const element = elementEvent.target.closest('.list-item__link');

  if (element) {
    image.src = element.href;
    elementEvent.preventDefault();
  }
});
