document.addEventListener('DOMContentLoaded', function () {
  const gallery = document.querySelector('.gallery');

  // eslint-disable-next-line no-shadow
  gallery.addEventListener('click', function (event) {
    const targetHref = event.target.closest('a');

    if (!targetHref) {
      return;
    }

    event.preventDefault();

    const largeImg = document.getElementById('largeImg');

    largeImg.src = targetHref.href;
  });
});
