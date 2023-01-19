'use strict';

const mainView = document.querySelector('#largeImg');
const thumbsList = document.querySelector('#thumbs');

thumbsList.addEventListener('click', (e) => {
  const link = e.target.closest('.list-item__link');

  e.preventDefault();
  mainView.setAttribute('src', link.href);
});
