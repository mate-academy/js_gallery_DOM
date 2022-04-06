'use strict';

const mainImg = document.querySelector('#largeImg');
const listOfImg = document.getElementById('thumbs');

listOfImg.addEventListener('click', (events) => {
  events.preventDefault();

  const link = events.target.closest('a');

  mainImg.src = link.href;
});
