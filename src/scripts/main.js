window.addEventListener('DOMContentLoaded', () => {
  const largeImg = document.getElementById('largeImg');
  const thumbs = document.getElementById('thumbs');

  thumbs.addEventListener('click', (e) => {
    e.preventDefault();

    let target = e.target;

    if (target.tagName === 'IMG') {
      target = target.closest('a');
    }

    if (target && target.tagName === 'A') {
      const newSrc = target.getAttribute('href');

      largeImg.setAttribute('src', newSrc);
    }
  });
});
