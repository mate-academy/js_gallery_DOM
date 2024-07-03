'use stirct';

document.addEventListener('DOMContentLoaded', () => {
  const thumbs = document.getElementById('thumbs');
  const largeImg = document.getElementById('largeImg');

  thumbs.addEventListener('click', (even) => {
    even.preventDefault();

    const target = even.target;

    if (target.tagName === 'IMG') {
      const parentAnchor = target.closest('a');

      if (parentAnchor) {
        largeImg.src = parentAnchor.href;
      }
    }
  });
});
