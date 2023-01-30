'use strict';

const thumbs = document.querySelector('#thumbs');

thumbs.onclick = function(e) {
  const smallPicture = e.target.closest('a');

  if (!smallPicture) {
    return;
  }

  showSmallPicture(smallPicture.href, smallPicture.title);
  e.preventDefault();
};

const largeImage = document.querySelector('#largeImg');

function showSmallPicture(href, title) {
  largeImage.src = href;
  largeImage.alt = title;
}
