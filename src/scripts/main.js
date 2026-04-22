document.addEventListener('DOMContentLoaded', function () {
  const gallery = document.querySelector('.gallery');
  const largeImg = document.querySelector('#largeImg');

  // eslint-disable-next-line no-shadow
  gallery.addEventListener('click', function (event) {
    if (event.target.tagName === 'IMG') {
      const targetSrc = event.target.src;

      largeImg.src = targetSrc;
    }

    if (event.target.tagName === 'A') {
      const imgInsideA = event.target.querySelector('img');

      if (imgInsideA) {
        largeImg.src = imgInsideA.src;
      }
    }
  });
});
