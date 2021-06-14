# `createElement(vnode, attachField = true)`

The `createElement` function converts a VNode into a HTMLElement or Text. It accepts a VNode or string.

```js
import { m, createElement } from 'million';

const vnode = m('div', { id: 'app' }, ['Hello World'], 1 /* ONLY_TEXT_CHILDREN */);
const el = createElement(vnode);
```

```html
<div id="app">Hello World</div>
```

## `OLD_VNODE_FIELD` property

The `OLD_VNODE_FIELD` property on the created HTMLElement is automatically created for reference during the patching process. You can disable this by setting the `attachField` parameter to false.
