'use strict';

const list = document.getElementById('thumbs');
const bigPicture = document.getElementById('largeImg');

list.addEventListener('click', (fact) => {
  const picture = fact.target.closest('a');

  fact.preventDefault();

  if (list.contains(picture)) {
    bigPicture.src = picture.href;
  }
});
