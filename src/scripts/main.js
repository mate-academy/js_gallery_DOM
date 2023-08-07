'use strict';

const thumbsList = document.getElementById('thumbs');
const largeImg = document.getElementById('largeImg');

thumbsList.addEventListener('click', (clickEvent) => {
  const imageUrl = clickEvent.target.closest('a').href;

  largeImg.src = imageUrl;

  clickEvent.preventDefault();
});
