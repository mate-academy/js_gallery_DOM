'use strict';

const thumbs = document.getElementById('thumbs');
const bigPicture = document.getElementById('largeImg');

thumbs.onclick = function (e) {
  e.preventDefault();

  const thumbNeil = e.target.closest('a');

  if (!thumbNeil) {
    return;
  }

  bigPicture.src = thumbNeil.href;
  bigPicture.alt = thumbNeil.title;
};
