'use strict';

const mainImg = document.querySelector('#largeImg');
const listUl = document.querySelector('#thumbs');

listUl.addEventListener('click', (e) => {
  const imgEvent = e.target;
  const imgLink = imgEvent.closest('A');

  if (!imgLink) {
    return;
  }

  e.preventDefault();
  mainImg.src = imgLink.href;
});
