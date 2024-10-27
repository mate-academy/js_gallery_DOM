'use strict';

const largeImg = document.getElementById('largeImg');
const thumbs = document.getElementById('thumbs');

thumbs.addEventListener('click', (eventt) => {
  eventt.preventDefault();

  if (eventt.target.closest('a')) {
    const link = eventt.target.closest('a');

    largeImg.src = link.href;
  }
});
