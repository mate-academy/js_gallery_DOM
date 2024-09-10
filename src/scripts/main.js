'use strict';

const thumbsUl = document.querySelector('#thumbs');
const largeImg = document.querySelector('#largeImg');

thumbsUl.addEventListener('click', (e) => {
  if (e.target.matches('.list-item__link')) {
    largeImg.src = e.target.href;
  } else if (e.target.matches('.gallery__thumb')) {
    e.preventDefault();

    const link = e.target.closest('.list-item__link');

    largeImg.src = link.href;
  }
});
