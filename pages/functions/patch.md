# `patch`

**Syntax:** `patch(element, newVnode, prevVNode?, workQueue = [], commit = (callback) => callback())`\
**Example:** `patch(el, m('div'), m('div', undefined, ['Hello World']))`

The `patch` function updates the DOM content by determing pinpoint changes through diffing a new VNode with an old VNode. It accepts an HTMLElement or Text, a new VNode, and an optional previous VNode.

You can leverage [Flags](/functions/m#flags) and [Deltas](/functions/m#deltas) to improve the performance of patch calls by reducing the need to diff children by improving time complexity.

You can also specify the `workQueue` array and `commit` function to allow fine grained control over the mutation of the DOM. The workQueue is an array of callbacks, and you can explicitly provide callbacks to run before the computed operations. You can also specify a `commit` function, which is a function that runs the callbacks in `workQueue`. Generally, you should use this for some sort of scheduling, such as with the [`schedule`](/functions/schedule) function.

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
