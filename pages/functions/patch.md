# `patch`

**Syntax:** `patch(element, newVnode, prevVNode?)`\
**Example:** `patch(el, m('div'), m('div', undefined, ['Hello World']))`

The `patch` function adjusts the DOM content with a new VNode. It accepts an HTMLElement or Text, a new VNode, and an optional previous VNode.

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
