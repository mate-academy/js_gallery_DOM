'use strict';

const mainImg = document.querySelector('#largeImg');
const list = document.querySelector('#thumbs');

list.addEventListener('click', (ev) => {
  // why linter write
  // "event' is already declared in the upper scope  no-shadow "
  // when named not 'ev' but 'event'?

  ev.preventDefault();

  const smallImg = ev.target.closest('.list-item__link');

  if (list.contains(smallImg)) {
    mainImg.src = smallImg.href;
  }
});
