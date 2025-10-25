'use strict';

const list = document.getElementById('thumbs');
const mainImg = document.getElementById('largeImg');

list.addEventListener('click', (ev) => {
  ev.preventDefault();

  const target = ev.target;
  const link = target.closest('a');

  if (!link || !list.contains(link)) {
    return;
  }
  mainImg.src = link.href;
});
