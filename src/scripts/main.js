'use strict';

const listElem = document.querySelector('#largeImg');
const majorElem = document.querySelector('#thumbs');

majorElem.addEventListener('click', (_event) => {
  _event.preventDefault();

  const mahorImg = _event.target.closest('a');

  if (mahorImg) {
    listElem.src = mahorImg.href;
    listElem.alt = mahorImg.title;
  }
});
