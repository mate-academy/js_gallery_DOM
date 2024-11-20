'use strict';

const largImg = document.getElementById('largeImg');
const smallList = document.getElementById('thumbs');

smallList.addEventListener('click', (e) => {
  event.preventDefault();

  if (e.target) {
    const currentArt = e.target.getAttribute('src');

    largImg.setAttribute('src', currentArt);
  }
});
