'use strict';

const largeImg = document.querySelector('#largeImg');

document.addEventListener('click', e => {
  const item = e.target.closest('.list-item__link');

  if (item) {
    e.preventDefault();

    largeImg.src = item.href;
  }
});
