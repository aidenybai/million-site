# `patch(element, newVnode, prevVNode?)`

The `patch` function adjusts the DOM content with a new VNode. It accepts an HTMLElement or Text, a new VNode, and an optional previous VNode.

```js
import { m, patch, VFlags } from 'million';

const el = document.createElement('div');
const vnode = m('div', { id: 'app' }, ['Hello World'], VFlags.ONLY_TEXT_CHILDREN);

patch(el, vnode);
```
