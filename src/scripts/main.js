'use strict';

const colectionList = document.querySelector('.gallery__list');
const imegLarge = document.querySelector('.gallery__large-img');

colectionList.addEventListener('click', (e) => {
  const list = e.target.closest('a');

  if (!list) {
    return;
  }

  showGalery(list.href, list.title);
  e.preventDefault();
});

function showGalery(href, title) {
  imegLarge.src = href;
  imegLarge.alt = title;
}
