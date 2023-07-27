'use strict';

const largeImg = document.querySelector('#largeImg');

const list = document.getElementById('thumbs');

list.addEventListener('click', (e) => {
  const imageLink = e.target.closest('.list-item__link');
  e.preventDefault();
  // const imageLink = e.preventDefault('.list-item__link');

  largeImg.setAttribute('src', imageLink.href);
});
