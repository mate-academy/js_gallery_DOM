'use strict';

const imgList = document.getElementById('thumbs');

imgList.addEventListener('click', (ev) => {
  const link = ev.target.closest('a');

  if (link) {
    const largeImg = document.getElementById('largeImg');

    largeImg.src = link.href;
    ev.preventDefault();
  }
});
