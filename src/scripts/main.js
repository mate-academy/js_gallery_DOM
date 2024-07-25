'use strict';

const largeImage = document.getElementById('largeImg');

const wrapper = document.getElementById('thumbs');

wrapper.addEventListener('click', function (e) {
  e.preventDefault();

  const link = e.target.closest('a');

  largeImage.setAttribute('src', link.href);
});
