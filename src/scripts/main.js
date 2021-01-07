'use strict';

const mainImg = document.getElementById('largeImg');
const list = document.getElementById('thumbs');

list.addEventListener('click', (e) => {
  e.preventDefault();

  const link = e.target.closest('.list-item__link');

  if (link || list.contains(link)) {
    mainImg.src = link.href;
  }
});
