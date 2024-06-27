const gallery = document.querySelector('.gallery');

gallery.addEventListener('click', (ev) => {
  const link = ev.target.closest('a');

  if (!link) {
    return;
  }

  const newSrc = link.getAttribute('href');
  const largeImg = document.querySelector('#largeImg');

  largeImg.setAttribute('src', newSrc);
  ev.preventDefault();
});
