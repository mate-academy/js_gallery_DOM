document.addEventListener('DOMContentLoaded', function () {
  const gallery = document.querySelector('.gallery');
  const largeImg = document.getElementById('largeImg');

  // eslint-disable-next-line no-shadow
  gallery.addEventListener('click', function (event) {
    event.preventDefault();

    const target = event.target;
    let newSrc = null;

    if (target.tagName === 'IMG') {
      newSrc = target.parentElement.href;
    } else if (target.tagName === 'A') {
      newSrc = target.href;
    }

    if (newSrc) {
      largeImg.src = newSrc;
    }
  });
});
