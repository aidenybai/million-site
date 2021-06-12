# `createElement(vnode, attachFlag = true)`

The `createElement` function converts a VNode into a HTMLElement or Text. It accepts a VNode or string.

```js
import { m, createElement } from 'million';

const vnode = m('div', { id: 'app' }, ['Hello World']);
const el = createElement(vnode);
```