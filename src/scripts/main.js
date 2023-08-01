'use strict';

const mainpic = document.getElementById('largeImg');
const thumbs = document.getElementById('thumbs');

thumbs.addEventListener('click', function(evt) {
  evt.preventDefault();

  const clicked = evt.target.closest('.list-item__link').href;

  mainpic.src = clicked;
});
