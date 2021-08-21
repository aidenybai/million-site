# `schedule`

**Syntax:** `schedule(callback, important = false)`\
**Example:** `schedule(() => patch(el, m('div')))`

The `schedule` function adjusts the DOM content with a new VNode. It accepts a callback, and an optional important priority flag.

Scheduling is generally used to induce incremental rendering, or the ability to split rendering work into chunks and spread it out over multiple frames. Generally, you want to use it if you are repeating a certain patches many times, or you want to debounce an operation.

```js
import { m, patch, schedule } from 'million';

const el = document.createElement('div');

document.body.appendChild(el);
const vnode1 = m('div', { id: 'app' }, ['Hello World']);

// async rendering
schedule(() => {
  patch(el, vnode1);
});
```

<center style={{ marginTop: '30px' }}>
  <a href="https://vercel.com/?utm_source=millionjs&utm_campaign=oss" target="_blank">
    <img height="44" src="https://raw.githubusercontent.com/aidenybai/million/main/.github/assets/vercel-logo.svg" alt="Vercel" />
  </a>
</center>
