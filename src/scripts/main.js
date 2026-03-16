const thumbs = document.querySelector('#thumbs');
const largeImg = document.querySelector('#largeImg');

thumbs.addEventListener('click', (e) => {
  // Визначаємо посилання, по якому клікнули (або в якому лежить картинка)
  const link = e.target.closest('a');

  // Якщо клікнули не по посиланню в межах нашого списку — виходимо
  if (!link || !thumbs.contains(link)) {
    return;
  }

  // Зупиняємо стандартний перехід браузера
  e.preventDefault();

  // ВАЖЛИВО:
  // link.href — поверне ПОВНУ адресу (http://localhost:3001/...)
  // largeImg.src = ... — встановить ПОВНУ адресу
  // Саме цього хоче тест на твоєму скріншоті!
  largeImg.src = link.href;

  // Оновлюємо alt для порядку (через властивість)
  if (link.title) {
    largeImg.alt = link.title;
  }
});
