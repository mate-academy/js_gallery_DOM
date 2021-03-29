'use strict';

const smallImg = document.getElementById('thumbs');
const bigImg = document.getElementById('largeImg');

smallImg.onclick = function(click) {
  click.preventDefault();
  bigImg.src = click.target.closest('a');
};
