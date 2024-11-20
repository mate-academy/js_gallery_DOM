1. Replace `<your_account>` with your Github username in the link
    - [DEMO LINK](https://LirikTop.github.io/js_gallery_DOM/)
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
