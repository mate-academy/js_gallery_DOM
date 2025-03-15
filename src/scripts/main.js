'use strict';

const thumbs = document.querySelector('#thumbs');
const imgDiv = document.querySelector('#largeImg');

thumbs.addEventListener('click', function (e) {
  const necessaryLink = e.target.closest('a');

  if (!necessaryLink) {
    return;
  }

  imgDiv.src = necessaryLink.href;
  imgDiv.alt = necessaryLink.title;
  e.preventDefault();
});
