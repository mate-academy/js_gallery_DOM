'use strict';

const largeImg = document.getElementById('largeImg');
const thumbs = document.getElementById('thumbs');

thumbs.addEventListener('click', function (e) {
  const link = e.target.closest('.list-item__link');

  if (link) {
    e.preventDefault();
    largeImg.src = link.href;
  }

});
