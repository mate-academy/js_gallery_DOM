'use strict';

const mainpic = document.getElementById('largeImg');
const thumbs = document.getElementById('thumbs');

thumbs.addEventListener('click', function(evt) {
  evt.preventDefault();

  let clicked = evt.target.src.slice(22, 38);

  if (clicked[clicked.length - 1] === '-') {
    clicked = clicked.slice(0, -1);
  }

  clicked = `./images/${clicked}.png`;

  mainpic.src = clicked;
});
