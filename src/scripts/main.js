'use strict';

const wrapper = document.querySelector('#thumbs');
const largeImg = document.querySelector('#largeImg');

wrapper.addEventListener('click', function (e) {
  const link = e.target.closest('a');

  if (!link) {
    return;
  }
  e.preventDefault();
  largeImg.src = link.href;
});
