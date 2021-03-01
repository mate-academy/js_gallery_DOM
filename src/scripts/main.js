'use strict';

const gallary = document.querySelector('ul');
const imageLarge = document.getElementById(`largeImg`);

gallary.addEventListener('click', () => {
  event.preventDefault();

  const item = event.target.closest('.list-item__link');

  imageLarge.src = item.href;
});
