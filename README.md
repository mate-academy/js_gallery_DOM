1. Replace `<your_account>` with your Github username in the link
    - [DEMO LINK](https://yevhenii-stanchenko.github.io/js_gallery_DOM/)
2. Follow [this instructions](https://mate-academy.github.io/layout_task-guideline/)
    - Run `npm run test` command to test your code;
    - Run `npm run test:only -- -n` to run fast test ignoring linter;
    - Run `npm run test:only -- -l` to run fast test with additional info in console ignoring linter.

### Task: Create a gallery

Create an image gallery where the main image changes by the click on a thumbnail.

**Requirements:**
- A click can be either on a small `img` image or on `a` outside of it. `event.target`
 will be, respectively, either `img` or `a`.

**Notes:**

- Use event delegation.
- You must only modify the file `src/scripts/main.js`.

### Gif of result
![Gif example](./src/images/example.gif)
Создайте галерею изображений, в которой основное изображение меняется при нажатии на миниатюру.

**Требования:**
- Щелчок может быть как на маленьком изображении `img`, так и на `a` за его пределами. `событие.цель`
  будет, соответственно, либо `img`, либо `a`.

**Примечания:**

- Используйте делегирование событий.
- Вы должны изменить только файл `src/scripts/main.js`.

### GIF результата
![Пример GIF](./src/images/example.gif)