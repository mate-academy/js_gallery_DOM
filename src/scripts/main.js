'use strict';

const ul = document.querySelector('.gallery__list');
const largeImage = document.querySelector('#largeImg');

// event were renamed due to eslit error
ul.addEventListener('click', (evnt) => {
  const link = evnt.target.closest('a');

  largeImage.src = link.href;
  evnt.preventDefault();
});
