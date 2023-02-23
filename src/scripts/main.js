'use strict';

const ColectionList = document.querySelector('.gallery__list');
const ImegLarge = document.querySelector('.gallery__large-img');

ColectionList.addEventListener('click', (E) => {
  const list = E.target.closest('a');

  if (!list) {
    return;
  }

  showGalery(list.href, list.title);
  E.preventDefault();
});

function showGalery(href, title) {
  ImegLarge.src = href;
  ImegLarge.alt = title;
}
