# `patch`

**Syntax:** `patch(element, newVnode, prevVNode?)`\
**Example:** `patch(el, m('div'), m('div', undefined, ['Hello World']))`

The `patch` function updates the DOM content by determing pinpoint changes through diffing a new VNode with an old VNode. It accepts an HTMLElement or Text, a new VNode, and an optional previous VNode.

You can leverage [Flags](/functions/m#flags) and [Deltas](/functions/m#deltas) to improve the performance of patch calls by reducing the need to diff children by improving time complexity.

```js
import { m, patch } from 'million';

const el = document.createElement('div');

document.body.appendChild(el);
const vnode1 = m('div', { id: 'app' }, ['Hello World']);

patch(el, vnode1);
// document.body.innerHTML = '' -> '<div id="app">Hello World</div>'

const vnode2 = m('div', { id: 'app' }, ['Goodbye World']);

patch(el, vnode2);
// document.body.innerHTML = '<div id="app">Hello World</div>' -> '<div id="app">Goodbye World</div>'
```

<center style={{ marginTop: '30px' }}>
  <a href="https://vercel.com/?utm_source=millionjs&utm_campaign=oss" target="_blank">
    <img height="44" src="https://raw.githubusercontent.com/aidenybai/million/main/.github/assets/vercel-logo.svg" alt="Vercel" />
  </a>
</center>
