'use strict';

const mainImg = document.getElementById('largeImg');
const ul = document.getElementById('thumbs');

ul.addEventListener('click', function (even) {
  even.preventDefault();

  const a = even.target.closest('a');
  const targetHref = a.href;

  mainImg.src = targetHref;
});
