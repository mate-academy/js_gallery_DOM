'use strict';

const list = document.querySelector('#thumbs');

list.addEventListener('click', () => {
  event.preventDefault();

  const item = event.target;

  list.previousElementSibling.firstElementChild.src = item.parentElement.href;

  if (!item.classList.contains('.gallery_img')) {
    return false;
  }
});
