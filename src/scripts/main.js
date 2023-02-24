'use strict';

const colectionList = document.querySelector('.gallery__list');
const imegLarge = document.querySelector('.gallery__large-img');

colectionList.addEventListener('click', (E) => {
  const list = E.target.closest('a');

  if (!list) {
    return;
  }

  showGalery(list.href, list.title);
  E.preventDefault();
});

function showGalery(href, title) {
  imegLarge.src = href;
  imegLarge.alt = title;
}
