'use strict';

const largeImg = document.getElementById('largeImg');
const list = document.getElementById('thumbs');

list.onclick = function(eventt) {
  const target = eventt.target;

  if (target.tagName !== 'IMG') {
    return;
  }

  eventt.preventDefault();

  showBigImg(target);

  // return false;
};

function showBigImg(elem) {
  const img = elem.closest('a');

  const href = img.getAttribute('href');

  if (largeImg) {
    largeImg.src = '';
  }

  largeImg.src = href;
}
