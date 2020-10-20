'use strict';

const listOfImges = document.getElementById('thumbs');
const largeImg = document.getElementById('largeImg');

listOfImges.addEventListener('click', (event) => {
  event.preventDefault();

  largeImg.src = event.target.closest('a').href;
});
