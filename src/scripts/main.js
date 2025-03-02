document.addEventListener('DOMContentLoaded', () => {
  const gallery = document.querySelector('.gallery');
  const mainImage = document.querySelector('.main-image img');

  gallery.addEventListener('click', (e) => {
    if (
      e.target &&
      e.target.tagName === 'IMG' &&
      e.target.parentElement.tagName === 'A'
    ) {
      mainImage.src = e.target.src;
    }
  });
});
