'use strict';

const thumbs = document.querySelector('#thumbs');

function selectImg(link) {
  const mainImg = document.querySelector('#largeImg');

  mainImg.removeAttribute('src');
  mainImg.setAttribute('src', link);
}

thumbs.addEventListener('click', (e) => {
  const listItem = e.target.closest('a');

  e.preventDefault();

  if (listItem) {
    selectImg(listItem.href);
  }
});
