'use strict';

const gallary = document.querySelector('ul');
const image = document.getElementById(`largeImg`);

gallary.addEventListener('click', () => {
  event.preventDefault();

  const item = event.target.closest('.list-item__link');

  image.src = item.href;
});
