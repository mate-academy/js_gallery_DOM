const gallery = document.querySelector('.gallery');
const largeImg = document.querySelector('#largeImg');

// eslint-disable-next-line no-shadow
gallery.addEventListener('click', function (event) {
  if (event.target.tagName === 'img') {
    const targetSrc = event.target.src;

    largeImg.src = targetSrc;
  }

  if (event.target.tagName === 'a') {
    const imgInsideA = event.target.querySelector('img');

    largeImg.src = imgInsideA.src;
  }
});
