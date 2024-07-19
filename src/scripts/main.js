'use strict';

const largeImg = document.querySelector('#largeImg');
const thumbsList = document.querySelector('#thumbs');

thumbsList.addEventListener('click', (e) => {
  e.preventDefault();

  const link = e.target.closest('.list-item__link');

  if (link) {
    largeImg.src = link.href;
  }
});
