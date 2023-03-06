'use strict';

const picture = document.querySelector('#largeImg');
const picList = document.querySelector('#thumbs');

picList.addEventListener('click', (e) => {
  e.preventDefault();

  const chosenPic = e.target.closest('.list-item__link');

  picture.src = chosenPic.href;
});
