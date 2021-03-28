'use strict';

const littleImg = document.getElementById('thumbs');
const bigImg = document.getElementById('largeImg');

littleImg.onclick = function(click) {
  click.preventDefault();
  bigImg.src = click.target.closest('a');
};
