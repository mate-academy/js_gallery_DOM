'use strict';

const listItem = document.querySelector('#thumbs');
const mainPicture = document.querySelector('#largeImg');

listItem.addEventListener('click', (event) => {
  event.preventDefault();

  mainPicture.src = event.target.closest('a').href;
});
