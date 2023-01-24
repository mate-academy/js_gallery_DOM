'use strict';

const mainView = document.querySelector('#largeImg');
const thumbsList = document.querySelector('#thumbs');

thumbsList.addEventListener('click', (e) => {
  e.preventDefault();

  const link = e.target.closest('.list-item__link');

  mainView.setAttribute('src', link.href);
});
