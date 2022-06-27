'use strict';

const ul = document.querySelector('#thumbs');
const largeImg = document.querySelector('#largeImg');

ul.addEventListener('click', (e) => {
  const thumb = e.target.closest('a');

  e.preventDefault();

  getThumb(thumb.href, thumb.tilte);
});

function getThumb(href) {
  largeImg.src = href;
}
