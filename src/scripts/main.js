'use strict';

const list = document.querySelector('#thumbs');
const image = document.querySelector('#largeImg');

function imageClick(eventInner) {
  eventInner.preventDefault();

  image.src = eventInner.target.closest('a');
}

list.addEventListener('click', imageClick);
