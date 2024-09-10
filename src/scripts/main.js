'use strict';

const gallery = document.getElementById('thumbs');
const largeImg = document.getElementById('largeImg');

gallery.addEventListener('click', function (e) {
  const link = e.target.closest('a');

  if (link) {
    largeImg.src = link.href;
  }

  e.preventDefault();
});
