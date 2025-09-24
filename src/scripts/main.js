'use strict';

const changeImg = () => {
  const largeImg = document.getElementById('largeImg');
  const thumbs = document.getElementById('thumbs');

  if (!largeImg || !thumbs) {
    return;
  }

  thumbs.addEventListener('click', (evt) => {
    if (!(evt.target instanceof Element)) {
      return;
    }

    const link = evt.target.closest('a');

    if (!link) {
      return;
    }
    evt.preventDefault();

    const absoluteSrc = link.href;

    if (!absoluteSrc) {
      return;
    }

    largeImg.src = absoluteSrc;

    const thumbImg = link.querySelector('img');

    largeImg.alt = thumbImg && thumbImg.alt ? thumbImg.alt : '';
  });
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', changeImg);
} else {
  changeImg();
}
