'use strict';

document.getElementById('thumbs').onclick = function (e) {
  e.preventDefault();

  const target = e.target.closest('a');

  if (target) {
    document.getElementById('largeImg').src = target.href;
  }
};
