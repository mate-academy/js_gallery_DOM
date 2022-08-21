'use strict';

const thumbs = document.getElementById('thumbs');
const largeImg = document.getElementById('largeImg');

thumbs.addEventListener('click', e => {
  const picture = e.target.closest('a');

  if (!picture) {
    return;
  }

  showPicture(picture.href, picture.title);
  e.preventDefault();

  function showPicture(href, title) {
    largeImg.src = href;
    largeImg.alt = title;
  }
});
