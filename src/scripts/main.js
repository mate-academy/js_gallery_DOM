'use strict';

const thumbs = document.getElementById('thumbs');
const largeImg = document.getElementById('largeImg');

thumbs.onclick = (evnt) => {
  const thumbItem = evnt.target.closest('a');

  if (!thumbItem) {
    return;
  }

  largeImg.src = thumbItem.href;
  largeImg.alt = thumbItem.title;
  evnt.preventDefault();
};
